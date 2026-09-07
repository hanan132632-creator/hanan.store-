import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Globe, Shield } from 'lucide-react';
import { Language } from '../types';

interface SitemapViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'sitemap' | 'robots' | 'ads';
  lang: Language;
}

export const SitemapViewerModal: React.FC<SitemapViewerModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'sitemap',
  lang
}) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'ads'>(initialTab);
  const [copied, setCopied] = useState(false);
  const isAr = lang === 'ar';

  if (!isOpen) return null;

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- 1. Homepage & Primary Domain -->
  <url>
    <loc>https://xn--mgblao3hjb.store/</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- 2. Secondary Portal: Hanan Fun -->
  <url>
    <loc>https://hanan.fun/</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- 3. Interactive Games -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=fun-games</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- 4. Digital Planners -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=planners</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- 5. Bundles -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=bundles</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- 6. Royal Perfumes -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=perfumes</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 7. Fine Jewelry -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=jewelry</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 8. Haute Couture Abayas -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=abayas</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 9. Beauty & Skincare -->
  <url>
    <loc>https://xn--mgblao3hjb.store/?category=beauty</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 10. Editorial Blog -->
  <url>
    <loc>https://xn--mgblao3hjb.store/#hanan-blog</loc>
    <lastmod>2026-09-07</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 11. Blog Article: Luxury Gifting -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/luxury-gifting-etiquette</loc>
    <lastmod>2026-09-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 12. Blog Article: Digital Commerce 2026 -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/digital-products-business-2026</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 13. Blog Article: Majlis Hospitality -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/majlis-hospitality-incense-rituals</loc>
    <lastmod>2026-09-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 14. Blog Article: Mindful Journaling -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/mindful-journaling-habits</loc>
    <lastmod>2026-09-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- 15. Blog Article: Gathering Games -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/gathering-games-guide</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 16. Blog Article: Digital Planner -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/digital-planner-tips</loc>
    <lastmod>2026-08-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 17. Blog Article: Royal Perfumes -->
  <url>
    <loc>https://xn--mgblao3hjb.store/blog/royal-perfumes-guide</loc>
    <lastmod>2026-08-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 14. Privacy Policy -->
  <url>
    <loc>https://xn--mgblao3hjb.store/privacy-policy</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- 15. AdSense Policy -->
  <url>
    <loc>https://xn--mgblao3hjb.store/adsense-policy</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- 16. Terms -->
  <url>
    <loc>https://xn--mgblao3hjb.store/terms</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- 17. About -->
  <url>
    <loc>https://xn--mgblao3hjb.store/about</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>

  <!-- 18. Contact -->
  <url>
    <loc>https://xn--mgblao3hjb.store/contact</loc>
    <lastmod>2026-09-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>

</urlset>`;

  const robotsContent = `# Robots.txt for Hanan Store (حنان ستور)
# Primary Domain: https://xn--mgblao3hjb.store/
# Secondary Portal: https://hanan.fun/

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /
Allow: /sitemap.xml
Allow: /ads.txt

Sitemap: https://xn--mgblao3hjb.store/sitemap.xml
Sitemap: https://hanan.fun/sitemap.xml

Host: https://xn--mgblao3hjb.store`;

  const adsContent = `google.com, pub-3298241753177072, DIRECT, f08c47fec0942fa0`;

  const getCurrentContent = () => {
    if (activeTab === 'sitemap') return sitemapContent;
    if (activeTab === 'robots') return robotsContent;
    return adsContent;
  };

  const handleCopy = () => {
    const text = getCurrentContent();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const text = getCurrentContent();
    const filename = activeTab === 'sitemap' ? 'sitemap.xml' : activeTab === 'robots' ? 'robots.txt' : 'ads.txt';
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[90vh]"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                {isAr ? 'عارض ملفات النظام والخريطة (XML / TXT)' : 'System Files Viewer'}
              </h3>
              <p className="text-xs text-stone-500">
                {isAr ? 'عرض وتنزيل محتوى خريطة الموقع، روبوتس، وأدسنس بدون أخطاء' : 'View and download sitemap, robots, and ads files safely'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 bg-stone-100/60 border-b border-stone-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'sitemap'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span>sitemap.xml</span>
          </button>

          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'robots'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Shield className="w-4 h-4 text-amber-600" />
            <span>robots.txt</span>
          </button>

          <button
            onClick={() => setActiveTab('ads')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'ads'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <FileCode className="w-4 h-4 text-emerald-600" />
            <span>ads.txt</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-6 flex-1 overflow-y-auto bg-stone-950 text-emerald-400 font-mono text-xs sm:text-sm leading-relaxed rounded-b-none relative">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            {getCurrentContent()}
          </pre>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            {isAr ? 'الملف جاهز للنسخ والتنزيل والتقديم الفوري.' : 'File ready for copy and download.'}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ المحتوى' : 'Copy Content')}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? 'تنزيل الملف' : 'Download File'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
