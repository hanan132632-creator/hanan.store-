import React from 'react';
import { 
  Store, 
  Layers, 
  BookOpen, 
  Info, 
  ShieldCheck, 
  PhoneCall, 
  ArrowUpRight,
  Gamepad2,
  Calendar,
  Layout,
  BookMarked,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { Language } from '../types';
import { CATEGORIES } from '../data/products';

interface SitePagesMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectCategory: (catId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => void;
}

export const SitePagesMenu: React.FC<SitePagesMenuProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectCategory,
  onOpenLegal
}) => {
  const isAr = lang === 'ar';

  if (!isOpen) return null;

  const handleStoreClick = () => {
    onSelectCategory('all');
    onClose();
    setTimeout(() => {
      const el = document.getElementById('catalog-main');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    onClose();
    setTimeout(() => {
      const el = document.getElementById('catalog-main');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleBlogClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('hanan-blog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = '#hanan-blog';
    }, 50);
  };

  const handleLegalClick = (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => {
    onClose();
    if (onOpenLegal) {
      onOpenLegal(tab);
    }
  };

  return (
    <>
      {/* Light backdrop to close when clicking outside (Does NOT lock page scrolling) */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Dropdown attached under the 3 bars */}
      <div
        id="site-pages-menu-dropdown"
        className="absolute top-full start-0 mt-2 w-80 sm:w-96 max-h-[82vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200 z-50 py-3 text-stone-900 animate-in fade-in zoom-in-95 duration-150"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header Title */}
        <div className="px-4 pb-2.5 mb-2 border-b border-stone-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            {isAr ? 'صفحات وأقسام الموقع' : 'Site Pages & Navigation'}
          </span>
          <span className="text-[10px] text-stone-400 font-mono">
            xn--mgblao3hjb.store
          </span>
        </div>

        <div className="px-2 space-y-1">
          
          {/* 1. صفحة المتجر */}
          <button
            id="menu-page-store"
            onClick={handleStoreClick}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-800 hover:bg-amber-50 hover:text-amber-900 transition-colors text-start group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <Store className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block">
                  {isAr ? 'المتجر' : 'The Store'}
                </span>
                <span className="text-[10px] text-stone-500">
                  {isAr ? 'الرئيسية وتصفح كافة المنتجات' : 'Home & Full Catalog'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700" />
          </button>

          {/* 2. أقسام الموقع (معروضة تحت بعضها بالكامل دون إخفاء) */}
          <div className="pt-1.5 pb-1">
            <div className="px-3 py-1 text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>{isAr ? 'أقسام المتجر الرئيسية:' : 'Store Departments:'}</span>
            </div>

            <div className="space-y-0.5 ps-2 pt-1 border-s-2 border-amber-200 ms-3">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  id={`menu-category-${cat.id}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-100 hover:text-amber-800 transition-colors text-start cursor-pointer group"
                >
                  <span className="truncate">
                    {isAr ? cat.nameAr : cat.nameEn}
                  </span>
                  {cat.badgeAr && (
                    <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                      {isAr ? cat.badgeAr : cat.badgeEn}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-stone-100 my-1" />

          {/* 3. صفحة المدونة */}
          <button
            id="menu-page-blog"
            onClick={handleBlogClick}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors text-start group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block">
                  {isAr ? 'صفحة المدونة' : 'Blog Page'}
                </span>
                <span className="text-[10px] text-stone-500">
                  {isAr ? 'مقالات وأدلة الجمعات وفنون الإهداء' : 'Guides, Articles & Tips'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-700" />
          </button>

          {/* 4. من نحن */}
          <button
            id="menu-page-about"
            onClick={() => handleLegalClick('about')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 transition-colors text-start group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block">
                  {isAr ? 'من نحن' : 'About Us'}
                </span>
                <span className="text-[10px] text-stone-500">
                  {isAr ? 'نبذة عن متجر حنان ستور ورؤيتنا' : 'Our Story & Vision'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </button>

          {/* 5. سياسة الخصوصية */}
          <button
            id="menu-page-privacy"
            onClick={() => handleLegalClick('privacy')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 transition-colors text-start group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block">
                  {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </span>
                <span className="text-[10px] text-stone-500">
                  {isAr ? 'حماية البيانات ومعايير الاستخدام' : 'Privacy & Security Standards'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </button>

          {/* 6. اتصل بنا */}
          <button
            id="menu-page-contact"
            onClick={() => handleLegalClick('contact')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-stone-800 hover:bg-stone-100 transition-colors text-start group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block">
                  {isAr ? 'اتصل بنا' : 'Contact Us'}
                </span>
                <span className="text-[10px] text-stone-500">
                  {isAr ? 'خدمة العملاء ومركز المساعدة' : 'Customer Support & Help'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </button>

        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-2 pt-2 px-3 border-t border-stone-100">
          <a
            href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%AD%D9%86%D8%A7%D9%86%20%D8%B3%D8%AA%D9%88%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{isAr ? 'محادثة فورية واتساب VIP' : 'WhatsApp VIP Chat'}</span>
          </a>
        </div>
      </div>
    </>
  );
};
