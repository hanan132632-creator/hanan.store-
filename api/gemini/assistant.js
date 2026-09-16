export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { language = "ar" } = req.body || {};
  const fallbacks = {
    ar: "مرحباً بك! نحن هنا لمساعدتك في جميع خدمات الموقع.",
    en: "Welcome! We are here to assist you with all website services.",
  };

  return res.status(200).json({
    reply: fallbacks[language] || fallbacks.ar,
    model: "edge-service",
  });
}
