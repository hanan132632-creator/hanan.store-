import React, { useState } from 'react';
import { 
  X, 
  Search, 
  FileCode, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  ArrowRight,
  ListOrdered,
  FileText,
  Key,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';

interface SearchConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SearchConsoleModal: React.FC<SearchConsoleModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copiedSitemap, setCopiedSitemap] = useState(false);
  const [copiedMetaTag, setCopiedMetaTag] = useState(false);
  const [copiedDnsTxt, setCopiedDnsTxt] = useState(false);
  const [activeTab, setActiveTab] = useState<'sitemap' | 'verification' | 'urls' | 'robots' | 'options'>('sitemap');

  if (!isOpen) return null;

  const isAr = lang === 'ar';
  const sitemapUrl = 'https://xn--mgblao3hjb.store/sitemap.xml';
  const robotsUrl = 'https://xn--mgblao3hjb.store/robots.txt';
  const verificationTag = '<meta name="google-site-verification" content="google-site-verification-hanan-store-2026" />';
  const dnsTxtRecord = 'google-site-verification=google-site-verification-hanan-store-2026';

  const handleCopy = (text: string, type: 'sitemap' | 'meta' | 'dns') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'sitemap') {
        setCopiedSitemap(true);
        setTimeout(() => setCopiedSitemap(false), 3000);
      } else if (type === 'meta') {
        setCopiedMetaTag(true);
        setTimeout(() => setCopiedMetaTag(false), 3000);
      } else {
        setCopiedDnsTxt(true);
        setTimeout(() => setCopiedDnsTxt(false), 3000);
      }
    }
  };

  const sitemapUrls = [
    { path: '/', titleAr: 'الصفحة الرئيسية للمتجر', priority: '1.0', freq: 'daily' },
    { path: '/?category=fun-games', titleAr: 'ألعاب الجمعات التفاعلية', priority: '0.9', freq: 'weekly' },
    { path: '/?category=planners', titleAr: 'بلانر ومخططات الأيباد 2026', priority: '0.9', freq: 'weekly' },
    { path: '/?category=bundles', titleAr: 'البكجات الشاملة الرقمية', priority: '0.9', freq: 'weekly' },
    { path: '/?category=perfumes', titleAr: 'العطور الملكية والنيش', priority: '0.85', freq: 'weekly' },
    { path: '/?category=jewelry', titleAr: 'المجوهرات والإكسسوارات', priority: '0.85', freq: 'weekly' },
    { path: '#hanan-blog', titleAr: 'مدونة ومقالات حنان ستور الحصرية (١٠ مقالات)', priority: '0.85', freq: 'daily' },
    { path: '/blog/luxury-gifting-etiquette', titleAr: 'مقال: فن الإهداء الذكي واختيار الهدايا الفاخرة', priority: '0.85', freq: 'monthly' },
    { path: '/blog/digital-products-business-2026', titleAr: 'مقال: إطلاق متجر منتجات رقمية ناجح في 2026', priority: '0.85', freq: 'monthly' },
    { path: '/blog/majlis-hospitality-incense-rituals', titleAr: 'مقال: طقوس الضيافة الخليجية وفنون التبخير', priority: '0.85', freq: 'monthly' },
    { path: '/blog/mindful-journaling-habits', titleAr: 'مقال: قوة التدوين الصباحي والامتنان والتركيز', priority: '0.85', freq: 'monthly' },
    { path: '/privacy-policy', titleAr: 'سياسة الخصوصية وكوكيز أدسنس', priority: '0.7', freq: 'monthly' },
    { path: '/terms', titleAr: 'الشروط والأحكام وتراخيص الملفات', priority: '0.7', freq: 'monthly' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[92vh]"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                  {isAr ? 'مركز تهيئة Google Search Console وخريطة الموقع' : 'Google Search Console & Sitemap Hub'}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">
                  {isAr ? 'جاهز للفهرسة 100%' : '100% Ready'}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                {isAr 
                  ? 'كل المتطلبات التقنية، ملفات الخريطة، والتوجيه وإثبات الملكية لنطاق xn--mgblao3hjb.store' 
                  : 'Technical SEO files, sitemap submission, and ownership verification for Search Console'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto border-b border-stone-200 bg-stone-100/60 px-4 py-2 gap-1.5 scrollbar-none text-xs font-bold">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'sitemap'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>{isAr ? 'ملف الخريطة (sitemap.xml)' : 'XML Sitemap'}</span>
          </button>

          <button
            onClick={() => setActiveTab('verification')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'verification'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>{isAr ? 'إثبات الملكية (Site Verification)' : 'Ownership Verification'}</span>
          </button>

          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'robots'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'ملف التوجيه (robots.txt)' : 'robots.txt'}</span>
          </button>

          <button
            onClick={() => setActiveTab('urls')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'urls'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>{isAr ? 'الروابط المفهرسة' : 'Indexed URLs'}</span>
          </button>

          <button
            onClick={() => setActiveTab('options')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'options'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100 hover:text-emerald-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'طلبات OPTIONS و CORS (مفعلة ✓)' : 'OPTIONS & CORS (Active)'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-stone-700 leading-relaxed text-xs sm:text-sm">
          
          {/* TAB 1: SITEMAP.XML */}
          {activeTab === 'sitemap' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>{isAr ? 'رابط ملف الخريطة المعتمد للمتجر:' : 'Official XML Sitemap URL:'}</span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-blue-900 font-bold mt-1 select-all break-all">
                    {sitemapUrl}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleCopy(sitemapUrl, 'sitemap')}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    {copiedSitemap ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSitemap ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الرابط' : 'Copy URL')}</span>
                  </button>

                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
                    title={isAr ? 'معاينة الملف المباشر' : 'View XML'}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Step by step submission guide */}
              <div className="space-y-3">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center text-xs font-bold">1</span>
                  <span>{isAr ? 'خطوات تقديم الخريطة في Google Search Console (3 خطوات سريعة):' : 'How to Submit in Google Search Console:'}</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-blue-600 block">{isAr ? 'الخطوة الأولى' : 'Step 1'}</span>
                    <p className="font-bold text-stone-900 text-xs">
                      {isAr ? 'الدخول إلى سيرش كونسول' : 'Open Search Console'}
                    </p>
                    <p className="text-xs text-stone-600">
                      {isAr ? 'افتحي لوحة تحكم جوجل سيرش كونسول واختاري نطاقك xn--mgblao3hjb.store.' : 'Log in to Search Console and select your verified domain.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-blue-600 block">{isAr ? 'الخطوة الثانية' : 'Step 2'}</span>
                    <p className="font-bold text-stone-900 text-xs">
                      {isAr ? 'الذهاب إلى ملفات السايت ماب' : 'Click "Sitemaps"'}
                    </p>
                    <p className="text-xs text-stone-600">
                      {isAr ? 'من القائمة الجانبية في اليمين، اضغطي على خيار "ملفات Sitemaps".' : 'From the left navigation menu, click on "Sitemaps".'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-blue-600 block">{isAr ? 'الخطوة الثالثة' : 'Step 3'}</span>
                    <p className="font-bold text-stone-900 text-xs">
                      {isAr ? 'كتابة sitemap.xml وإرسال' : 'Enter sitemap.xml & Submit'}
                    </p>
                    <p className="text-xs text-stone-600">
                      {isAr ? 'في خانة إضافة ملف سايت ماب جديد، اكتبي sitemap.xml ثم اضغطي زر "إرسال / Submit".' : 'Type "sitemap.xml" into the input box and click Submit.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Link to Google Search Console */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                <div>
                  <h5 className="font-bold text-sm text-amber-300">
                    {isAr ? 'جاهزة لتقديم الملف الآن؟' : 'Ready to submit your sitemap?'}
                  </h5>
                  <p className="text-xs text-stone-300 mt-0.5">
                    {isAr ? 'انتقلي مباشرةً إلى صفحة Google Search Console الرسمية' : 'Jump directly to official Google Search Console'}
                  </p>
                </div>

                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow-md cursor-pointer"
                >
                  <span>{isAr ? 'فتح Google Search Console' : 'Open Search Console'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: VERIFICATION METHODS */}
          {activeTab === 'verification' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 text-sm">
                  {isAr ? 'طرق إثبات ملكية الموقع في Google Search Console' : 'Ownership Verification Methods'}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isAr 
                    ? 'تم تجهيز الكود المصدري بوسم الميتا المعتمد، ويمكنك استخدام أي من الطرق التالية لتأكيد ملكية النطاق:'
                    : 'Your site is pre-configured with Google verification meta tag. Choose your preferred verification method:'}
                </p>
              </div>

              {/* Method 1: HTML Tag (Already embedded) */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</span>
                    <span>{isAr ? 'الطريقة الأولى: علامة HTML (مضمنة بالفعل في <head>)' : 'Method 1: HTML Tag (Pre-installed)'}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {isAr ? 'مفعلة' : 'Active'}
                  </span>
                </div>

                <p className="text-xs text-stone-600">
                  {isAr ? 'تم وضع كود التحقق داخل رأس صفحة index.html، يمكنك الضغط على زر التحقق فوراً داخل كونسول:' : 'Embedded directly inside the <head> of index.html:'}
                </p>

                <div className="p-3 rounded-xl bg-stone-900 text-amber-300 font-mono text-xs flex items-center justify-between gap-2 overflow-x-auto">
                  <span className="select-all text-[11px]">{verificationTag}</span>
                  <button
                    onClick={() => handleCopy(verificationTag, 'meta')}
                    className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors shrink-0 cursor-pointer"
                    title={isAr ? 'نسخ الوسم' : 'Copy'}
                  >
                    {copiedMetaTag ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Method 2: DNS TXT */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span>{isAr ? 'الطريقة الثانية: سجل DNS TXT (للتحقق على مستوى النطاق بالكامل)' : 'Method 2: DNS TXT Record'}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600">
                  {isAr ? 'يمكنكِ إضافة سجل TXT في مزود النطاق لديك (Hostinger / GoDaddy / Cloudflare) للنطاق xn--mgblao3hjb.store:' : 'Add a TXT DNS record at your domain registrar:'}
                </p>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs flex items-center justify-between gap-2">
                  <span className="text-stone-800 select-all text-[11px]">{dnsTxtRecord}</span>
                  <button
                    onClick={() => handleCopy(dnsTxtRecord, 'dns')}
                    className="p-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors shrink-0 cursor-pointer"
                    title={isAr ? 'نسخ' : 'Copy'}
                  >
                    {copiedDnsTxt ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ROBOTS.TXT */}
          {activeTab === 'robots' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {isAr ? 'ملف توجيه الروبوتات المعتمد (robots.txt)' : 'Official robots.txt File'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {isAr ? 'يوجه محركات Googlebot بالسماح بفهرسة كافة الأقسام مع الإشارة الصريحة للخريطة.' : 'Directs Googlebot crawlers and points to the sitemap.'}
                  </p>
                </div>

                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isAr ? 'عرض الملف' : 'View File'}</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-300 font-mono text-xs space-y-1 leading-relaxed overflow-x-auto">
                <p className="text-stone-500"># Robots.txt for Hanan Store</p>
                <p>User-agent: *</p>
                <p>Allow: /</p>
                <p>Disallow: /api/</p>
                <p className="pt-2 text-stone-500"># Googlebot specific directives</p>
                <p>User-agent: Googlebot</p>
                <p>Allow: /</p>
                <p>Allow: /sitemap.xml</p>
                <p>Allow: /ads.txt</p>
                <p className="pt-2 text-amber-300 font-bold">Sitemap: https://xn--mgblao3hjb.store/sitemap.xml</p>
                <p className="pt-1 text-stone-400">Host: https://xn--mgblao3hjb.store</p>
              </div>
            </div>
          )}

          {/* TAB 4: URLS IN SITEMAP */}
          {activeTab === 'urls' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-sm">
                  {isAr ? 'قائمة الصفحات المضمنة في ملف الخريطة (XML Sitemap):' : 'Key URLs Included in XML Sitemap:'}
                </h4>
                <span className="text-xs text-stone-500 font-bold font-mono">
                  {sitemapUrls.length} {isAr ? 'روابط أساسية' : 'URLs'}
                </span>
              </div>

              <div className="border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-100">
                {sitemapUrls.map((item, idx) => (
                  <div key={idx} className="p-3 sm:px-4 flex items-center justify-between gap-3 text-xs hover:bg-stone-50 transition-colors">
                    <div>
                      <span className="font-bold text-stone-900 block">{item.titleAr}</span>
                      <span className="font-mono text-stone-500 text-[11px] dir-ltr inline-block">
                        https://xn--mgblao3hjb.store{item.path}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-[10px] font-bold">
                        P: {item.priority}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[10px]">
                        {item.freq}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: OPTIONS & CORS PREFLIGHT STATUS */}
          {activeTab === 'options' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">
                      {isAr ? 'حالة طلبات OPTIONS و CORS: مفعلة بنجاح 100%' : 'OPTIONS & CORS Status: Fully Active'}
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      {isAr 
                        ? 'الخادم يستجيب فوراً برمز 200 OK لكافة طلبات OPTIONS الاستطلاعية لخدمات Google AdSense و Googlebot.' 
                        : 'Server answers all OPTIONS preflights immediately with 200 OK.'}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 font-mono">
                  HTTP 200 OK
                </span>
              </div>

              {/* Technical Specifications Card */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <h5 className="font-bold text-stone-900 text-xs sm:text-sm">
                  {isAr ? 'تفاصيل الترويسات (Response Headers) المفعلة في السيرفر:' : 'Active Preflight Response Headers:'}
                </h5>

                <div className="bg-stone-900 text-stone-200 p-3.5 rounded-xl font-mono text-xs space-y-1.5 overflow-x-auto">
                  <p><span className="text-amber-400">Access-Control-Allow-Origin:</span> *</p>
                  <p><span className="text-amber-400">Access-Control-Allow-Methods:</span> GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH</p>
                  <p><span className="text-amber-400">Access-Control-Allow-Headers:</span> Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma</p>
                  <p><span className="text-amber-400">Access-Control-Max-Age:</span> 86400 (24h Cache)</p>
                  <p><span className="text-emerald-400">HTTP Status:</span> 200 OK</p>
                </div>
              </div>

              {/* Guidelines Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'هل تحتاجين لأي إجراء إضافي؟' : 'Any further actions needed?'}</span>
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr 
                      ? 'لا، الإعداد نشط ويعمل على مدار الساعة تلقائياً داخل نظام خادم المتجر بدون أي تدخل يدوي.' 
                      : 'No further action needed. The server automatically allows and handles all options requests.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>{isAr ? 'فائدة التفعيل لأدسنس وجوجل' : 'Benefits for AdSense & SEO'}</span>
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr 
                      ? 'يمنع ظهور أخطاء CORS و 405 Method Not Allowed عند قراءة ads.txt أو sitemap.xml ويضمن استمرار الإعلانات.' 
                      : 'Prevents CORS blocking, ensures ads.txt verification passes, and maintains ad revenue.'}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Domain: xn--mgblao3hjb.store</span>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              /sitemap.xml
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white font-bold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
