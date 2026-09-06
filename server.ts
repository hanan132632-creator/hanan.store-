import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Explicit SEO and AdSense routes FIRST with correct headers
  app.get("/sitemap.xml", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.send(fs.readFileSync(filePath, "utf-8"));
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  app.get("/robots.txt", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(fs.readFileSync(filePath, "utf-8"));
    } else {
      res.status(404).send("Robots not found");
    }
  });

  app.get("/ads.txt", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "ads.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(fs.readFileSync(filePath, "utf-8"));
    } else {
      res.status(404).send("Ads.txt not found");
    }
  });

  // Vite middleware for development or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
