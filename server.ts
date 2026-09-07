import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Universal CORS and OPTIONS Preflight Handling
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
    );
    res.setHeader("Access-Control-Max-Age", "86400"); // 24 hours preflight cache

    // Immediately respond with 200 OK to all OPTIONS requests
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
    next();
  });

  // Explicit route handler for any OPTIONS call
  app.options("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
    );
    return res.status(200).end();
  });

  // 2. Automated bot scanners protection (e.g., /wp-admin, /install.php, xmlrpc.php)
  app.use((req, res, next) => {
    const lowerUrl = req.url.toLowerCase();
    if (
      lowerUrl.includes("wp-admin") ||
      lowerUrl.includes("wp-login") ||
      lowerUrl.includes("xmlrpc.php") ||
      lowerUrl.endsWith(".php")
    ) {
      return res.status(404).type("text/plain").send("Not Found");
    }
    next();
  });

  // 3. Explicit SEO & Crawler Files (sitemap.xml, robots.txt, ads.txt)
  app.all(["/sitemap.xml", "/sitemap"], (req, res) => {
    const filePath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.setHeader("X-Robots-Tag", "all");
      if (req.method === "HEAD") return res.status(200).end();
      return res.status(200).send(fs.readFileSync(filePath, "utf-8"));
    }
    return res.status(404).type("text/plain").send("Sitemap not found");
  });

  app.all(["/robots.txt"], (req, res) => {
    const filePath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=3600");
      if (req.method === "HEAD") return res.status(200).end();
      return res.status(200).send(fs.readFileSync(filePath, "utf-8"));
    }
    return res.status(404).type("text/plain").send("Robots not found");
  });

  app.all(["/ads.txt", "/app-ads.txt"], (req, res) => {
    const filePath = path.join(process.cwd(), "public", "ads.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=3600");
      if (req.method === "HEAD") return res.status(200).end();
      return res.status(200).send(fs.readFileSync(filePath, "utf-8"));
    }
    return res.status(404).type("text/plain").send("Ads.txt not found");
  });

  // 4. Dedicated 404 page handler
  app.all(["/404", "/404.html"], (req, res) => {
    const notFoundPath = path.join(process.cwd(), "public", "404.html");
    if (fs.existsSync(notFoundPath)) {
      res.status(404).setHeader("Content-Type", "text/html; charset=utf-8");
      return res.sendFile(notFoundPath);
    }
    return res.status(404).send("404 Not Found");
  });

  // 5. Stale asset hashes fallback (/assets/*.css and /assets/*.js)
  // When cached browsers or bots request older build hashes that no longer exist,
  // return a 200 OK fallback instead of generating 404 crawl errors.
  app.get("/assets/:filename", (req, res, next) => {
    const { filename } = req.params;
    const distAssetsPath = path.join(process.cwd(), "dist", "assets", filename);
    const publicAssetsPath = path.join(process.cwd(), "public", "assets", filename);

    if (fs.existsSync(distAssetsPath)) {
      return res.sendFile(distAssetsPath);
    }
    if (fs.existsSync(publicAssetsPath)) {
      return res.sendFile(publicAssetsPath);
    }

    if (filename.endsWith(".css")) {
      // Find latest css file in dist/assets if available
      try {
        const assetsDir = path.join(process.cwd(), "dist", "assets");
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          const currentCss = files.find((f) => f.endsWith(".css"));
          if (currentCss) {
            return res.sendFile(path.join(assetsDir, currentCss));
          }
        }
      } catch {
        // fallback
      }
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      return res.status(200).send("/* Fallback for cached stylesheet */");
    }

    if (filename.endsWith(".js")) {
      try {
        const assetsDir = path.join(process.cwd(), "dist", "assets");
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          const currentJs = files.find((f) => f.endsWith(".js") && !f.includes("server"));
          if (currentJs) {
            return res.sendFile(path.join(assetsDir, currentJs));
          }
        }
      } catch {
        // fallback
      }
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      return res.status(200).send("// Fallback for cached script bundle");
    }

    next();
  });

  // 6. Vite middleware for development or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
