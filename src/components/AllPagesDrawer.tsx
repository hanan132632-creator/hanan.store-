import React from 'react';
import { 
  X, 
  Home, 
  Gamepad2, 
  Calendar, 
  Package, 
  BookOpen, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  FileText, 
  Map, 
  PhoneCall,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AllPagesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  setActiveCategory: (cat: string) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenDomainInfo: () => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => void;
  onOpenSitemap: () => void;
  cartCount: number;
  wishlistCount: number;
}

export const AllPagesDrawer: React.FC<AllPagesDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  setActiveCategory,
  onOpenCart,
  onOpenWishlist,
  onOpenDomainInfo,
  onOpenLegal,
  onOpenSitemap,
  cartCount,
  wishlistCount,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  const handleNavClick = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className={`absolute inset-y-0 ${lang === 'ar' ? 'start-0' : 'end-0'} max-w-xs w-full bg-white shadow-2xl flex flex-col z-10 transition-transform animate-in slide-in-from-${lang === 'ar' ? 'right' : 'left'} duration-300`}>
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-bold font-serif flex items-center justify-center text-lg">
              H
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm tracking-wide">
                {lang === 'ar' ? 'قائمة صفحات الموقع' : 'Site Directory'}
              </h3>
              <p className="text-[10px] text-amber-300 font-mono">xn--mgblao3hjb.store</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* Main Sections */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 mb-2 font-mono">
              {lang === 'ar' ? 'أقسام المتجر الرئيسية' : 'Store Categories'}
            </h4>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick(() => { setActiveCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); })}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4 text-amber-600" />
                <span>{lang === 'ar' ? 'الرئيسية (جميع الأقسام)' : 'Home / All Items'}</span>
              </button>

              <button
                onClick={() => handleNavClick(() => { setActiveCategory('fun-games'); window.scrollTo({ top: 0, behavior: 'smooth' }); })}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-indigo-600" />
                <span>{lang === 'ar' ? 'ألعاب الجمعات والتحديات' : 'Party & Fun Games'}</span>
              </button>

              <button
                onClick={() => handleNavClick(() => { setActiveCategory('planners'); window.scrollTo({ top: 0, behavior: 'smooth' }); })}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'ar' ? 'المخططات والمجلات الرقمية' : 'Digital Planners'}</span>
              </button>

              <button
                onClick={() => handleNavClick(() => { setActiveCategory('bundles'); window.scrollTo({ top: 0, behavior: 'smooth' }); })}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Package className="w-4 h-4 text-amber-600" />
                <span>{lang === 'ar' ? 'الحزم والعروض الحصرية' : 'Exclusive Bundles'}</span>
              </button>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* Quick Actions & Cart / Wishlist */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 mb-2 font-mono">
              {lang === 'ar' ? 'السلة والمفضلة' : 'Shopping & Cart'}
            </h4>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick(onOpenCart)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4 text-stone-900" />
                  <span>{t.cart}</span>
                </div>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </button>

              <button
                onClick={() => handleNavClick(onOpenWishlist)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>{t.wishlist}</span>
                </div>
                <span className="bg-rose-100 text-rose-900 text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              </button>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* Guides & Blog */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 mb-2 font-mono">
              {lang === 'ar' ? 'المدونة والمقالات' : 'Blog & Guides'}
            </h4>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick(() => {
                  const el = document.getElementById('hanan-blog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>{lang === 'ar' ? 'أدلة التنظيم والجمعات' : 'Planning Guides'}</span>
              </button>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* Legal & Policies */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 mb-2 font-mono">
              {lang === 'ar' ? 'السياسات والشئون القانونية' : 'Legal & Policies'}
            </h4>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick(() => onOpenLegal('privacy'))}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-stone-400" />
                <span>{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
              </button>
              <button
                onClick={() => handleNavClick(() => onOpenLegal('terms'))}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-stone-400" />
                <span>{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}</span>
              </button>
              <button
                onClick={() => handleNavClick(() => onOpenLegal('adsense'))}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-stone-400" />
                <span>{lang === 'ar' ? 'سياسة النشر وإعلانات أدسنس' : 'AdSense Compliance'}</span>
              </button>
              <button
                onClick={() => handleNavClick(() => onOpenLegal('contact'))}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-stone-600 hover:bg-stone-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-stone-400" />
                <span>{lang === 'ar' ? 'اتصل بنا ودعم العملاء' : 'Contact Us'}</span>
              </button>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* SEO & Technical Tools */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-3 mb-2 font-mono">
              {lang === 'ar' ? 'أدوات الأرشفة والتقنية' : 'SEO & Tech Files'}
            </h4>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick(onOpenSitemap)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-amber-900 bg-amber-50 hover:bg-amber-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Map className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'ar' ? 'عرض خريطة الموقع (sitemap.xml)' : 'Sitemap XML'}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-amber-700" />
              </button>

              <button
                onClick={() => handleNavClick(onOpenDomainInfo)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 bg-stone-50 hover:bg-stone-100 font-medium text-xs transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'ar' ? 'معلومات النطاق والتوثيق' : 'Domain Verification'}</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">SSL</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer info in drawer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500">
          <p className="font-serif font-medium text-stone-800">{lang === 'ar' ? 'حنان ستور للألعاب والمخططات الرقمية' : 'Hanan Store Boutique'}</p>
          <p className="text-[10px] text-stone-400 mt-0.5">© 2026 xn--mgblao3hjb.store</p>
        </div>

      </div>
    </div>
  );
};
