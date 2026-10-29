export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const url = req.url || "";
  if (url.endsWith(".css")) {
    res.setHeader("Content-Type", "text/css; charset=utf-8");
    return res.status(200).send("/* Fallback for legacy stylesheet */\n");
  }

  res.setHeader("Content-Type", "application/javascript; charset=utf-8");
  return res.status(200).send("// Fallback for legacy script asset\nconsole.debug('Asset refreshed');\n");
}
