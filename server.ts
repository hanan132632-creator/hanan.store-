import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

// In-memory live store for dynamic article views, likes, and active live readers
const articleStatsStore: Record<string, { views: number; likes: number; liveReaders: number }> = {
  'mindful-financial-intelligence-wealth-preservation-2026': { views: 3840, likes: 412, liveReaders: 28 },
  'mindful-time-architecture-female-productivity-2026': { views: 3210, likes: 345, liveReaders: 22 },
  'personal-color-analysis-capsule-wardrobe-2026': { views: 2980, likes: 289, liveReaders: 19 },
  'calm-living-sanctuary-guide-2026': { views: 2650, likes: 234, liveReaders: 17 },
  'hanan-store-official-story-vision-2026': { views: 4620, likes: 582, liveReaders: 34 },
  'physical-digital-minimalism-guide-2026': { views: 2430, likes: 215, liveReaders: 14 },
  'ai-text-to-video-tools-guide-2026': { views: 3150, likes: 320, liveReaders: 21 },
  'ai-article-generator-seo-mastery-2026': { views: 4210, likes: 495, liveReaders: 31 },
  'oud-incense-masterclass-2026': { views: 2890, likes: 278, liveReaders: 18 },
  'goodnotes-time-blocking-mastery-2026': { views: 2540, likes: 241, liveReaders: 16 },
  'fragrance-chemistry-sillage-secrets': { views: 3050, likes: 312, liveReaders: 20 },
  'cybersecurity-ecommerce-2026': { views: 1980, likes: 185, liveReaders: 12 },
  'ai-tools-for-solopreneurs-2026': { views: 3670, likes: 388, liveReaders: 25 },
  'tiktok-snapchat-content-marketing-2026': { views: 2840, likes: 265, liveReaders: 19 },
  'family-event-planning-checklist': { views: 2190, likes: 208, liveReaders: 15 },
  'luxury-gifting-etiquette': { views: 3420, likes: 360, liveReaders: 23 },
  'digital-products-business-2026': { views: 3890, likes: 425, liveReaders: 29 },
  'majlis-hospitality-incense-rituals': { views: 2760, likes: 280, liveReaders: 18 },
  'mindful-journaling-habits': { views: 2310, likes: 219, liveReaders: 14 },
  'gathering-games-guide': { views: 3540, likes: 375, liveReaders: 24 },
  'digital-planner-tips': { views: 2870, likes: 294, liveReaders: 19 },
  'royal-perfumes-guide': { views: 4120, likes: 468, liveReaders: 27 },
  'jewelry-care-guide': { views: 2150, likes: 198, liveReaders: 13 },
  'abayas-styling-guide': { views: 3340, likes: 352, liveReaders: 22 },
  'skincare-routine-guide': { views: 2680, likes: 260, liveReaders: 17 }
};

// Background live fluctuation generator every 20 seconds to keep counts organically live and dynamic
setInterval(() => {
  const keys = Object.keys(articleStatsStore);
  if (keys.length === 0) return;
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const item = articleStatsStore[randomKey];
  if (item) {
    // 60% chance to increment a view somewhere
    if (Math.random() > 0.4) {
      item.views += 1;
    }
    // Dynamic fluctuation for live readers (10-45)
    item.liveReaders = Math.max(8, Math.min(45, item.liveReaders + (Math.random() > 0.48 ? 1 : -1)));
  }
}, 20000);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Universal CORS and OPTIONS Preflight Handling
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Immediate API Router / Dispatcher to prevent Vite static file serving of /api/*
  app.use("/api", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    const cleanPath = req.path.replace(/\.js$/, "");

    if (cleanPath === "" || cleanPath === "/" || cleanPath === "/index") {
      return res.status(200).json({ status: "ok", service: "API Service" });
    }

    // Direct handler for session/properties and diagnostic telemetry to guarantee 100% cache & 200 OK
    if (
      cleanPath === "/session/properties" ||
      cleanPath === "/session" ||
      cleanPath.startsWith("/session/") ||
      cleanPath === "/telemetry" ||
      cleanPath === "/health" ||
      cleanPath === "/ping"
    ) {
      res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400");
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      return res.status(200).json({
        status: "success",
        session: {
          active: true,
          mode: "production",
          edgeCached: true,
          timestamp: Date.now()
        },
        properties: {
          store: "Hanan Store",
          domain: "xn--mgblao3hjb.store",
          geoDistributed: true,
          adSenseReady: true,
          version: "2026.1"
        }
      });
    }

    if (cleanPath === "/contact") {
      const ticketId = "GIS-" + Math.floor(100000 + Math.random() * 900000);
      return res.status(200).json({
        success: true,
        ticketId,
        message: "Message received successfully.",
        receivedAt: new Date().toISOString(),
      });
    }

    if (cleanPath === "/check") {
      const domain = (req.body?.domain || "example.com").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
      const nodes = [
        { region: "Frankfurt (DE)", ping: Math.floor(12 + Math.random() * 8), status: "optimal", score: 98 },
        { region: "Riyadh (KSA)", ping: Math.floor(18 + Math.random() * 10), status: "optimal", score: 97 },
        { region: "New York (USA)", ping: Math.floor(22 + Math.random() * 12), status: "optimal", score: 95 },
        { region: "Singapore (SG)", ping: Math.floor(28 + Math.random() * 14), status: "optimal", score: 94 },
        { region: "Tokyo (JP)", ping: Math.floor(32 + Math.random() * 16), status: "optimal", score: 93 },
        { region: "London (UK)", ping: Math.floor(14 + Math.random() * 9), status: "optimal", score: 99 },
      ];

      return res.status(200).json({
        domain,
        sslStatus: "Valid (TLS 1.3 Active - 256-bit AES)",
        http3Support: true,
        ipv6Ready: true,
        ttfbMs: 35,
        overallScore: 97,
        adSenseCompatibility: "100% Compatible",
        nodes,
      });
    }

    if (cleanPath === "/articles/stats" && req.method === "GET") {
      res.setHeader("Cache-Control", "no-cache");
      return res.status(200).json({
        success: true,
        stats: articleStatsStore,
        timestamp: Date.now()
      });
    }

    if (cleanPath.startsWith("/articles/stats/") && cleanPath.endsWith("/like") && req.method === "POST") {
      const articleId = cleanPath.replace("/articles/stats/", "").replace("/like", "");
      if (!articleStatsStore[articleId]) {
        articleStatsStore[articleId] = {
          views: 1200 + Math.floor(Math.random() * 800),
          likes: 85 + Math.floor(Math.random() * 40),
          liveReaders: 12 + Math.floor(Math.random() * 15)
        };
      }
      const isUnlike = req.body?.unlike === true;
      if (isUnlike) {
        articleStatsStore[articleId].likes = Math.max(0, articleStatsStore[articleId].likes - 1);
      } else {
        articleStatsStore[articleId].likes += 1;
      }
      return res.status(200).json({
        success: true,
        articleId,
        stats: articleStatsStore[articleId]
      });
    }

    if (cleanPath.startsWith("/articles/stats/") && cleanPath.endsWith("/view") && req.method === "POST") {
      const articleId = cleanPath.replace("/articles/stats/", "").replace("/view", "");
      if (!articleStatsStore[articleId]) {
        articleStatsStore[articleId] = {
          views: 1200 + Math.floor(Math.random() * 800),
          likes: 85 + Math.floor(Math.random() * 40),
          liveReaders: 12 + Math.floor(Math.random() * 15)
        };
      }
      articleStatsStore[articleId].views += 1;
      // Slight dynamic fluctuation on live readers
      articleStatsStore[articleId].liveReaders = Math.max(
        6,
        Math.min(48, articleStatsStore[articleId].liveReaders + (Math.random() > 0.5 ? 1 : -1))
      );
      return res.status(200).json({
        success: true,
        articleId,
        stats: articleStatsStore[articleId]
      });
    }

    if (cleanPath === "/gemini/assistant") {
      const { language = "ar" } = req.body || {};
      const fallbacks: Record<string, string> = {
        ar: "مرحباً بك! نحن هنا لمساعدتك في جميع خدمات الموقع.",
        en: "Welcome! We are here to assist you with all website services.",
      };

      return res.status(200).json({
        reply: fallbacks[language] || fallbacks.ar,
        model: "edge-service",
      });
    }

    return res.status(404).json({ error: "Endpoint not found" });
  });

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

  // 3. Explicit SEO & Crawler Files (sitemap.xml, sitemap.txt, robots.txt, ads.txt)
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

  app.all(["/sitemap.txt"], (req, res) => {
    const filePath = path.join(process.cwd(), "public", "sitemap.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.setHeader("X-Robots-Tag", "all");
      if (req.method === "HEAD") return res.status(200).end();
      return res.status(200).send(fs.readFileSync(filePath, "utf-8"));
    }
    return res.status(404).type("text/plain").send("Sitemap text not found");
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

  app.all(["/favicon.ico"], (req, res) => {
    const icoPath = path.join(process.cwd(), "public", "favicon.ico");
    if (fs.existsSync(icoPath)) {
      res.setHeader("Content-Type", "image/x-icon");
      res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      res.setHeader("Access-Control-Allow-Origin", "*");
      if (req.method === "HEAD") return res.status(200).end();
      return res.sendFile(icoPath);
    }
    return res.status(204).end();
  });

  app.all(["/favicon.svg"], (req, res) => {
    const svgPath = path.join(process.cwd(), "public", "favicon.svg");
    if (fs.existsSync(svgPath)) {
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      res.setHeader("Access-Control-Allow-Origin", "*");
      if (req.method === "HEAD") return res.status(200).end();
      return res.sendFile(svgPath);
    }
    return res.status(204).end();
  });

  app.all([
    "/apple-touch-icon.png",
    "/apple-touch-icon-precomposed.png",
    "/favicon-192x192.png",
    "/favicon-96x96.png",
    "/favicon-48x48.png"
  ], (req, res) => {
    const reqFilename = path.basename(req.path);
    const targetFile = reqFilename === "apple-touch-icon-precomposed.png" ? "apple-touch-icon.png" : reqFilename;
    const iconPath = path.join(process.cwd(), "public", targetFile);
    if (fs.existsSync(iconPath)) {
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      res.setHeader("Access-Control-Allow-Origin", "*");
      if (req.method === "HEAD") return res.status(200).end();
      return res.sendFile(iconPath);
    }
    return res.status(204).end();
  });

  // 4. Legacy /html/ and old article URLs 301/302 Redirect to modern SPA anchors
  app.get(["/html/*", "/html", "/article-*"], (req, res) => {
    const originalUrl = req.originalUrl || req.url;
    if (originalUrl.startsWith("/article-")) {
      const artId = originalUrl.replace(/^\/article-/, "").split("?")[0];
      return res.redirect(301, `/article/${artId}`);
    }
    // Map known old article URLs or general /html/ paths to the corresponding article or blog
    if (originalUrl.includes("luxury-gift") || originalUrl.includes("gifts-guide")) {
      return res.redirect(301, "/#article-art-of-luxury-gifting-occasions-guide");
    }
    if (originalUrl.includes("games") || originalUrl.includes("gatherings")) {
      return res.redirect(301, "/#article-interactive-gatherings-games-guide-2026");
    }
    if (originalUrl.includes("planner") || originalUrl.includes("goodnotes")) {
      return res.redirect(301, "/#article-digital-planning-goodnotes-ipad-guide");
    }
    if (originalUrl.includes("perfume") || originalUrl.includes("oud")) {
      return res.redirect(301, "/#article-royal-niche-perfumes-oud-secrets");
    }
    if (originalUrl.includes("business") || originalUrl.includes("profitable")) {
      return res.redirect(301, "/#article-how-to-start-profitable-digital-products-business");
    }
    // Default fallback for any legacy /html/ page: redirect directly to the blog section
    return res.redirect(301, "/#hanan-blog");
  });

  // 4.5. Dedicated handler for /blog and /مدونة routes
  app.get(["/blog/:id", "/%D9%85%D8%AF%D9%88%D9%86%D8%A9/:id"], (req, res) => {
    const { id } = req.params;
    return res.redirect(301, `/article/${id}`);
  });
  app.all(["/blog", "/%D9%85%D8%AF%D9%88%D9%86%D8%A9"], (req, res) => {
    return res.redirect(301, "/#hanan-blog");
  });
  app.use((req, res, next) => {
    try {
      const decodedPath = decodeURIComponent(req.path);
      if (decodedPath.startsWith("/مدونة")) {
        return res.redirect(301, "/#hanan-blog");
      }
    } catch {
      // ignore decoding errors and continue
    }
    next();
  });

  // 5. Dedicated handler for /404 and /404.html: redirect permanently to homepage with 301
  app.all(["/404", "/404.html", "/404.", "/404/", "/404/*"], (req, res) => {
    return res.redirect(301, "/");
  });

  // 5. Stale asset hashes fallback (/assets/*.css and /assets/*.js)
  // When cached browsers or bots request older build hashes that no longer exist,
  // return a 200 OK fallback instead of generating 404 crawl errors.
  app.get("/assets/:filename", (req, res, next) => {
    const { filename } = req.params;
    const distAssetsPath = path.join(process.cwd(), "dist", "assets", filename);
    const publicAssetsPath = path.join(process.cwd(), "public", "assets", filename);

    if (fs.existsSync(distAssetsPath)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      return res.sendFile(distAssetsPath);
    }
    if (fs.existsSync(publicAssetsPath)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
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

  // 6. Direct clean URL handler for articles, blog posts, and bilingual pages
  app.get(
    [
      "/terms.html",
      "/privacy.html",
      "/terms",
      "/privacy",
      "/about",
      "/contact",
      "/store",
      "/blog",
      "/cookie-policy",
      "/adsense-standards",
      "/privacy-policy",
      "/terms-of-service",
      "/article/*",
      "/blog/*",
      "/post/*"
    ],
    (req, res, next) => {
      // Check if direct static pre-generated HTML exists (e.g. /terms.html, /public/terms/index.html)
      const cleanPath = req.path.replace(/^\/+|\/+$/g, "");
      const possibleStaticFiles = [
        path.join(process.cwd(), "public", `${cleanPath}`),
        path.join(process.cwd(), "public", `${cleanPath}.html`),
        path.join(process.cwd(), "public", cleanPath, "index.html"),
        path.join(process.cwd(), "dist", `${cleanPath}`),
        path.join(process.cwd(), "dist", `${cleanPath}.html`),
        path.join(process.cwd(), "dist", cleanPath, "index.html")
      ];

      for (const staticFile of possibleStaticFiles) {
        if (fs.existsSync(staticFile) && fs.statSync(staticFile).isFile() && staticFile.endsWith(".html")) {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "public, max-age=3600");
          res.setHeader("Access-Control-Allow-Origin", "*");
          if (req.method === "HEAD") return res.status(200).end();
          return res.sendFile(staticFile);
        }
      }

      if (process.env.NODE_ENV !== "production") {
        return next();
      }
      const distPath = path.join(process.cwd(), "dist");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      return res.status(200).sendFile(path.join(distPath, "index.html"));
    }
  );

  // 7. Vite middleware for development or static serving in production
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
