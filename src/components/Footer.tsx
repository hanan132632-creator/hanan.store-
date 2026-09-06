import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Globe, 
  Lock, 
  Check, 
  Send
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onCategorySelect: (catId: string) => void;
  onOpenDomainInfo: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => void;
  onOpenSearchConsole?: () => void;
  onOpenSitemapViewer?: (type: 'sitemap' | 'robots' | 'ads') => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onCategorySelect,
  onOpenDomainInfo,
  onOpenLegal,
  onOpenSearchConsole,
  onOpenSitemapViewer
}) => {
  const t = TRANSLATIONS[lang];
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="store-footer" className="bg-[#121214] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand Essence & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-serif text-xl font-bold shadow-md">
                H
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-serif flex items-center gap-1.5">
                  {lang === 'ar' ? 'حنان ستور' : 'Hanan Store'}
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-amber-400/80">
                  xn--mgblao3hjb.store (حنان.store)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {lang === 'ar' 
                ? 'متجر حنان ستور ومنصة حنان فن: وجهتك الفاخرة لألعاب الجمعات التفاعلية، البلانرات الرقمية، والعطور الملكية النيش والمجوهرات الأصيلة، متوافق ومصمم وفق أعلى معايير الجودة والمصداقية.'
                : 'Hanan Store & Hanan Fun: Your premier boutique for interactive party games, digital planners, royal perfumes, and fine jewelry.'}
            </p>

            {/* Official Domain & SSL Pill */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenDomainInfo}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-mono border border-amber-500/30 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>xn--mgblao3hjb.store</span>
              </button>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900 text-emerald-400 text-[11px] border border-stone-800">
                <Lock className="w-3 h-3" />
                <span>256-bit SSL</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900 text-amber-300 text-[11px] border border-stone-800 font-mono">
                AdSense Ready ✓
              </span>
            </div>
          </div>

          {/* Quick Category Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {lang === 'ar' ? 'الأقسام وملفات حنان فن' : 'Collections & Files'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { onCategorySelect('fun-games'); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{lang === 'ar' ? 'ألعاب الجمعات التفاعلية (hanan.fun)' : 'Gathering Games (hanan.fun)'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onCategorySelect('planners'); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{lang === 'ar' ? 'بلانر ومخططات الأيباد 2026' : '2026 iPad Planners'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onCategorySelect('bundles'); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{lang === 'ar' ? 'البكجات الشاملة (وفر 65%)' : 'Ultimate Bundles'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onCategorySelect('perfumes'); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'العطور الملكية والنيش' : 'Royal & Niche Perfumes'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onCategorySelect('jewelry'); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'المجوهرات والإكسسوارات' : 'Fine Jewelry & Gold'}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & AdSense Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              {lang === 'ar' ? 'السياسات والخصوصية' : 'Legal & Compliance'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-stone-400 hover:underline"
                >
                  {lang === 'ar' ? 'سياسة الخصوصية والكوكيز' : 'Privacy & Cookies Policy'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal && onOpenLegal('adsense')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400/90 font-medium hover:underline"
                >
                  {lang === 'ar' ? 'إفصاح إعلانات Google AdSense' : 'Google AdSense Policy'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-stone-400 hover:underline"
                >
                  {lang === 'ar' ? 'الشروط والأحكام العامة' : 'Terms of Service'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal && onOpenLegal('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-stone-400 hover:underline"
                >
                  {lang === 'ar' ? 'من نحن (فريق العمل)' : 'About Hanan Store'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal && onOpenLegal('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-stone-400 hover:underline"
                >
                  {lang === 'ar' ? 'اتصل بنا ومكتب الدعم' : 'Contact Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSearchConsole}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-blue-400/90 font-medium hover:underline flex items-center gap-1"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>{lang === 'ar' ? 'تهيئة Search Console والخريطة' : 'Search Console Hub'}</span>
                </button>
              </li>
              <li className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                <button 
                  onClick={() => onOpenSitemapViewer?.('sitemap')}
                  className="hover:text-blue-300 text-stone-400 hover:underline cursor-pointer bg-transparent border-0 p-0 font-mono text-[11px]"
                >
                  sitemap.xml
                </button>
                <span className="text-stone-600">•</span>
                <button 
                  onClick={() => onOpenSitemapViewer?.('robots')}
                  className="hover:text-amber-300 text-stone-400 hover:underline cursor-pointer bg-transparent border-0 p-0 font-mono text-[11px]"
                >
                  robots.txt
                </button>
                <span className="text-stone-600">•</span>
                <button 
                  onClick={() => onOpenSitemapViewer?.('ads')}
                  className="hover:text-emerald-300 text-stone-400 hover:underline cursor-pointer bg-transparent border-0 p-0 font-mono text-[11px]"
                >
                  ads.txt
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & VIP Club (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif flex items-center gap-1.5">
              <span>{lang === 'ar' ? 'نادي حنان ستور VIP' : 'Hanan VIP Club'}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </h4>
            <p className="text-xs text-stone-400">
              {lang === 'ar' 
                ? 'اشتركي للحصول على دعوات حصرية لإطلاق العطور النيش وتخفيضات خاصة تصل إلى 25%.' 
                : 'Subscribe for private access to niche perfume drops and exclusive 25% member privileges.'}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={lang === 'ar' ? 'أدخلي بريدك الإلكتروني' : 'Enter your email'}
                  className="flex-1 bg-stone-900 text-stone-200 text-xs rounded-xl py-2.5 px-3.5 border border-stone-700 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? (lang === 'ar' ? 'تم!' : 'Joined!') : (lang === 'ar' ? 'اشتراك' : 'Join')}</span>
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-amber-300 font-medium">
                  {lang === 'ar' ? 'أهلاً بكِ في نادي حنان ستور، تم تسجيل بريدك بنجاح ✨' : 'Welcome to Hanan VIP Club! ✨'}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Middle Tier: Contact Concierge & Domain Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="block font-bold text-white">{lang === 'ar' ? 'واتساب وخدمة العملاء' : 'WhatsApp Concierge'}</span>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-mono">
                +966 50 000 0000
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-stone-800">
            <Mail className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="block font-bold text-white">{lang === 'ar' ? 'البريد الرسمي للدعم' : 'Official Support Email'}</span>
              <a href="mailto:support@hanan.store" className="hover:text-amber-300 font-mono">
                support@hanan.store
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-stone-800 sm:col-span-2 lg:col-span-1">
            <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <span className="block font-bold text-white">{lang === 'ar' ? 'المقر والتوزيع' : 'Headquarters'}</span>
              <span>{lang === 'ar' ? 'المملكة العربية السعودية - الرياض' : 'Riyadh, Saudi Arabia'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Accepted Payment Badges & Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start text-xs text-stone-500">
          
          {/* Payment Badges Strip */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[11px] font-bold text-stone-400 me-1">
              {lang === 'ar' ? 'وسائل الدفع المعتمدة:' : 'Payment Partners:'}
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-900 text-stone-300 font-bold border border-stone-800 text-[10px]">
              مدى Mada
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-900 text-stone-300 font-bold border border-stone-800 text-[10px]">
              Apple Pay
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-900 text-stone-300 font-bold border border-stone-800 text-[10px]">
              Visa / Mastercard
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-900 text-emerald-400 font-bold border border-stone-800 text-[10px]">
              تابي Tabby
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-900 text-amber-300 font-bold border border-stone-800 text-[10px]">
              تمارا Tamara
            </span>
          </div>

          {/* Copyright and Domain Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-stone-500">
            <div className="flex items-center gap-2">
              <span>
                © {new Date().getFullYear()} {t.storeName} ({t.storeSubtitle}). {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
              </span>
              <span className="text-stone-700">•</span>
              <span className="font-mono text-stone-400">
                xn--mgblao3hjb.store
              </span>
            </div>

            {/* Quick Policies Inline Links */}
            {onOpenLegal && (
              <div className="flex items-center gap-2.5 text-[11px] text-stone-400 flex-wrap justify-center sm:ms-3">
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {lang === 'ar' ? 'الخصوصية' : 'Privacy'}
                </button>
                <span>•</span>
                <button onClick={() => onOpenLegal('adsense')} className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400/80">
                  {lang === 'ar' ? 'جوجل أدسنس' : 'AdSense'}
                </button>
                <span>•</span>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {lang === 'ar' ? 'الشروط' : 'Terms'}
                </button>
                <span>•</span>
                <button onClick={() => onOpenLegal('contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {lang === 'ar' ? 'اتصل بنا' : 'Contact'}
                </button>
                {onOpenSearchConsole && (
                  <>
                    <span>•</span>
                    <button onClick={onOpenSearchConsole} className="hover:text-blue-300 transition-colors cursor-pointer text-blue-400">
                      {lang === 'ar' ? 'سيرش كونسول (sitemap)' : 'Search Console'}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
};
