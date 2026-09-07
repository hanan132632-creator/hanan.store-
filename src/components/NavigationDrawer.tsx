import React, { useState, useEffect } from 'react';
import { 
  X, 
  Store, 
  Layers, 
  BookOpen, 
  Info, 
  ShieldCheck, 
  PhoneCall, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Gamepad2, 
  Calendar, 
  Layout, 
  Gem, 
  FileText, 
  ArrowUpRight,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { Language, Currency } from '../types';
import { CATEGORIES } from '../data/products';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  onSelectCategory: (catId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => void;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  setLang,
  currency,
  setCurrency,
  onSelectCategory,
  onOpenLegal,
  onOpenCart,
  onOpenWishlist,
  cartCount = 0,
  wishlistCount = 0
}) => {
  const isAr = lang === 'ar';
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigateToStore = () => {
    onSelectCategory('all');
    onClose();
    setTimeout(() => {
      const el = document.getElementById('catalog-main');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleNavigateToCategory = (catId: string) => {
    onSelectCategory(catId);
    onClose();
    setTimeout(() => {
      const el = document.getElementById('catalog-main');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleNavigateToBlog = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('hanan-blog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = '#hanan-blog';
    }, 150);
  };

  const handleLegalClick = (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => {
    onClose();
    if (onOpenLegal) {
      onOpenLegal(tab);
    }
  };

  return (
    <div 
      id="navigation-drawer-portal"
      className="fixed inset-0 z-50 overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div className="fixed inset-y-0 start-0 max-w-full flex">
        <aside 
          id="main-navigation-drawer"
          className="w-80 sm:w-96 bg-white shadow-2xl flex flex-col h-full border-e border-stone-200 animate-in slide-in-from-start duration-300 text-stone-900"
          role="dialog"
          aria-modal="true"
          aria-label={isAr ? 'قائمة تصفح الموقع' : 'Main Navigation Menu'}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col">
                <span className="font-serif font-black text-stone-900 text-lg flex items-center gap-1.5">
                  {isAr ? 'حنان ستور' : 'Hanan Store'}
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-stone-500">
                  xn--mgblao3hjb.store
                </span>
              </div>
            </div>

            <button
              id="close-navigation-drawer-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label={isAr ? 'إغلاق القائمة' : 'Close Menu'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Cart / Wishlist Action Bar inside Drawer */}
          {(onOpenCart || onOpenWishlist) && (
            <div className="p-3 bg-amber-50/40 border-b border-amber-100/60 grid grid-cols-2 gap-2">
              {onOpenCart && (
                <button
                  id="drawer-cart-btn"
                  onClick={() => {
                    onClose();
                    onOpenCart();
                  }}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 hover:border-amber-400 hover:text-amber-800 transition-colors shadow-2xs cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-600" />
                  <span>{isAr ? 'السلة' : 'Cart'}</span>
                  {cartCount > 0 && (
                    <span className="bg-amber-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}

              {onOpenWishlist && (
                <button
                  id="drawer-wishlist-btn"
                  onClick={() => {
                    onClose();
                    onOpenWishlist();
                  }}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 hover:border-rose-300 hover:text-rose-700 transition-colors shadow-2xs cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>{isAr ? 'المفضلة' : 'Wishlist'}</span>
                  {wishlistCount > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              )}
            </div>
          )}

          {/* Nav List (Scrollable) */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 divide-y divide-stone-100">
            
            {/* Primary Main Menu Items */}
            <div className="space-y-1 pb-3">
              
              {/* 1. المتجر */}
              <button
                id="drawer-nav-store"
                onClick={handleNavigateToStore}
                className="w-full flex items-center justify-between p-3 rounded-xl text-stone-800 hover:bg-amber-50 hover:text-amber-900 transition-all text-start group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100/80 text-amber-800 flex items-center justify-center group-hover:bg-amber-200/80 transition-colors">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {isAr ? 'المتجر' : 'The Store'}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isAr ? 'تصفح كافة المعروضات والمنتجات' : 'Browse full boutique catalog'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* 2. أقسام الموقع (Expandable Submenu) */}
              <div className="rounded-xl overflow-hidden border border-stone-200/70 bg-stone-50/40">
                <button
                  id="drawer-nav-categories-toggle"
                  onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                  className="w-full flex items-center justify-between p-3 text-stone-800 hover:bg-stone-100/70 transition-colors text-start cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-stone-800 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-sm block">
                        {isAr ? 'أقسام الموقع' : 'Site Categories'}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        {isAr ? 'العطور، الألعاب، المجوهرات والمزيد' : 'Perfumes, Games, Jewelry & more'}
                      </span>
                    </div>
                  </div>
                  {isCategoriesExpanded ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {/* Subcategories list */}
                {isCategoriesExpanded && (
                  <div className="p-2 pt-0 space-y-1 bg-white border-t border-stone-100">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleNavigateToCategory(cat.id)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors text-start cursor-pointer group"
                      >
                        <span className="truncate">
                          {isAr ? cat.nameAr : cat.nameEn}
                        </span>
                        {cat.badgeAr && (
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-1.5 py-0.5 rounded">
                            {isAr ? cat.badgeAr : cat.badgeEn}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. صفحة المدونة */}
              <button
                id="drawer-nav-blog"
                onClick={handleNavigateToBlog}
                className="w-full flex items-center justify-between p-3 rounded-xl text-stone-800 hover:bg-amber-50 hover:text-amber-900 transition-all text-start group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-200/80 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {isAr ? 'صفحة المدونة' : 'Blog & Articles'}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isAr ? 'أدلة الجمعات وفنون الإهداء والتخطيط' : 'Lifestyle, gifting & gatherings guides'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-all" />
              </button>

              {/* 4. من نحن */}
              <button
                id="drawer-nav-about"
                onClick={() => handleLegalClick('about')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-stone-800 hover:bg-stone-100 transition-all text-start group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100/80 text-sky-800 flex items-center justify-center group-hover:bg-sky-200/80 transition-colors">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {isAr ? 'من نحن' : 'About Us'}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isAr ? 'قصة متجر حنان ستور ورؤيتنا' : 'Our boutique story and vision'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-all" />
              </button>

              {/* 5. سياسة الخصوصية */}
              <button
                id="drawer-nav-privacy"
                onClick={() => handleLegalClick('privacy')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-stone-800 hover:bg-stone-100 transition-all text-start group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-100/80 text-purple-800 flex items-center justify-center group-hover:bg-purple-200/80 transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isAr ? 'حماية البيانات ومعايير الأمان المعتمدة' : 'User privacy & secure checkout'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-all" />
              </button>

              {/* 6. اتصل بنا */}
              <button
                id="drawer-nav-contact"
                onClick={() => handleLegalClick('contact')}
                className="w-full flex items-center justify-between p-3 rounded-xl text-stone-800 hover:bg-stone-100 transition-all text-start group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100/80 text-amber-800 flex items-center justify-center group-hover:bg-amber-200/80 transition-colors">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block">
                      {isAr ? 'اتصل بنا' : 'Contact Us'}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isAr ? 'خدمة العملاء وقنوات التواصل VIP' : 'Get in touch & VIP support'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-all" />
              </button>

            </div>

            {/* Direct WhatsApp Concierge Button */}
            <div className="pt-3">
              <a
                href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%AD%D9%86%D8%A7%D9%86%20%D8%B3%D8%AA%D9%88%D8%B1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{isAr ? 'محادثة فورية عبر واتساب VIP' : 'Chat with VIP Concierge'}</span>
              </a>
            </div>

          </nav>

          {/* Drawer Footer: Settings & Localization */}
          <div className="p-4 border-t border-stone-200 bg-stone-50 flex flex-col gap-3">
            
            <div className="flex items-center justify-between gap-3 text-xs">
              {/* Language Switch */}
              <div className="flex items-center gap-1.5">
                <span className="text-stone-500 text-[11px]">
                  {isAr ? 'اللغة:' : 'Language:'}
                </span>
                <button
                  onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                  className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-semibold text-stone-800 hover:border-amber-400 transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'English' : 'العربية'}
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-stone-500 text-[11px]">
                  {isAr ? 'العملة:' : 'Currency:'}
                </span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className="px-2 py-1 rounded-lg bg-white border border-stone-200 font-semibold text-stone-800 text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="SAR">SAR (ر.س)</option>
                  <option value="AED">AED (د.إ)</option>
                  <option value="KWD">KWD (د.ك)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>

            {/* Official domain note */}
            <div className="text-center pt-1 border-t border-stone-200/60">
              <span className="text-[10px] font-mono text-stone-400">
                © 2026 Hanan Store • xn--mgblao3hjb.store
              </span>
            </div>

          </div>

        </aside>
      </div>
    </div>
  );
};
