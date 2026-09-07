import React from 'react';
import { 
  Gamepad, 
  Calendar, 
  Layout, 
  BookOpen, 
  Gift, 
  Flame, 
  Gem, 
  Shirt, 
  BookMarked, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';

interface TopCategoryBarsProps {
  lang: Language;
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenGiftAdvisor: () => void;
  onOpenDomainInfo: () => void;
}

export const TopCategoryBars: React.FC<TopCategoryBarsProps> = ({
  lang,
  activeCategory,
  onSelectCategory,
  onOpenGiftAdvisor,
  onOpenDomainInfo
}) => {
  const isAr = lang === 'ar';

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    scrollToSection('catalog-main');
  };

  // BAR 1: Digital & Hanan Fun Sections
  const digitalSections = [
    {
      id: 'fun-games',
      icon: <Gamepad className="w-3.5 h-3.5 text-amber-400" />,
      titleAr: 'ألعاب وفعاليات الجمعات (Hanan Fun)',
      titleEn: 'Interactive Games & Fun',
      badgeAr: 'الأكثر طلباً 🔥',
      badgeEn: 'Popular 🔥',
      action: () => handleCategoryClick('fun-games')
    },
    {
      id: 'planners',
      icon: <Calendar className="w-3.5 h-3.5 text-blue-400" />,
      titleAr: 'البلانرات والمخططات الرقمية',
      titleEn: 'Digital Planners & GoodNotes',
      badgeAr: 'أيباد وتابلت',
      badgeEn: 'iPad Ready',
      action: () => handleCategoryClick('planners')
    },
    {
      id: 'templates',
      icon: <Layout className="w-3.5 h-3.5 text-emerald-400" />,
      titleAr: 'قوالب كانفا وتصاميم الهوية',
      titleEn: 'Canva & Design Templates',
      badgeAr: 'تعديل فوري',
      badgeEn: 'Instant Edit',
      action: () => handleCategoryClick('templates')
    },
    {
      id: 'guides',
      icon: <BookOpen className="w-3.5 h-3.5 text-purple-400" />,
      titleAr: 'أدلة ريادة الأعمال والكتب',
      titleEn: 'Business Guides & E-Books',
      badgeAr: 'مشاريع 2026',
      badgeEn: '2026 Guides',
      action: () => handleCategoryClick('guides')
    },
    {
      id: 'bundles',
      icon: <Gift className="w-3.5 h-3.5 text-rose-400" />,
      titleAr: 'البكجات الشاملة والحزم الكبرى',
      titleEn: 'All-In-One Digital Bundles',
      badgeAr: 'وفر 65%',
      badgeEn: 'Save 65%',
      action: () => handleCategoryClick('bundles')
    }
  ];

  // BAR 2: Luxury Boutique & Royal Scents Sections
  const luxurySections = [
    {
      id: 'luxury-perfumes',
      icon: <Flame className="w-3.5 h-3.5 text-amber-300" />,
      titleAr: 'عطور النيش الملكية والدهن المعتق',
      titleEn: 'Royal Niche Perfumes & Aged Oud',
      badgeAr: 'ثبات 48 ساعة',
      badgeEn: 'Long-Lasting',
      action: () => handleCategoryClick('luxury')
    },
    {
      id: 'luxury-jewelry',
      icon: <Gem className="w-3.5 h-3.5 text-cyan-300" />,
      titleAr: 'المجوهرات الفضية والإكسسوارات',
      titleEn: 'Fine Silver 925 & Jewelry',
      badgeAr: 'فضة إسترليني 925',
      badgeEn: 'Silver 925',
      action: () => handleCategoryClick('luxury')
    },
    {
      id: 'luxury-majlis',
      icon: <Sparkles className="w-3.5 h-3.5 text-yellow-300" />,
      titleAr: 'مباخر وأطقم ضيافة المجالس',
      titleEn: 'Majlis Incense Burners & Trays',
      badgeAr: 'ضيافة خليجية',
      badgeEn: 'Hospitality',
      action: () => handleCategoryClick('luxury')
    },
    {
      id: 'luxury-fashion',
      icon: <Shirt className="w-3.5 h-3.5 text-emerald-300" />,
      titleAr: 'العبايات والأزياء الفاخرة',
      titleEn: 'Haute Couture Royal Abayas',
      badgeAr: 'حياكة ملكية',
      badgeEn: 'Haute Couture',
      action: () => handleCategoryClick('luxury')
    },
    {
      id: 'luxury-giftboxes',
      icon: <Gift className="w-3.5 h-3.5 text-rose-300" />,
      titleAr: 'صناديق وبكجات الإهداء المخملية',
      titleEn: 'Signature Velvet Gift Boxes',
      badgeAr: 'كارت ديواني',
      badgeEn: 'Gift Box',
      action: () => handleCategoryClick('luxury')
    }
  ];

  // BAR 3: Fast Interactive Services & Editorial Hub
  const serviceSections = [
    {
      id: 'service-blog',
      icon: <BookMarked className="w-3.5 h-3.5 text-amber-700" />,
      titleAr: 'مدونة ومقالات حنان (١٠ مقالات فريدة)',
      titleEn: 'Hanan Blog (10 Unique Articles)',
      badgeAr: 'جديد ومحدث',
      badgeEn: '10 Articles',
      action: () => scrollToSection('hanan-blog')
    },
    {
      id: 'service-advisor',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-600" />,
      titleAr: 'مستشار الهدايا الذكي (AI Gift Advisor)',
      titleEn: 'AI Gift Advisor Tool',
      badgeAr: 'مساعد ذكي',
      badgeEn: 'Smart AI',
      action: onOpenGiftAdvisor
    },
    {
      id: 'service-instant',
      icon: <Download className="w-3.5 h-3.5 text-emerald-600" />,
      titleAr: 'بوابة التحميل الفوري للملفات 24/7',
      titleEn: 'Instant 24/7 File Vault',
      badgeAr: 'تسليم لحظي',
      badgeEn: 'Instant',
      action: () => handleCategoryClick('fun-games')
    },
    {
      id: 'service-reviews',
      icon: <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />,
      titleAr: 'آراء وتجارب العملاء الموثقة',
      titleEn: 'Verified Customer Reviews',
      badgeAr: 'تقييم 5.0 ⭐',
      badgeEn: '5.0 Stars ⭐',
      action: () => scrollToSection('reviews-section')
    },
    {
      id: 'service-domain',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />,
      titleAr: 'مركز توثيق الدومين (xn--mgblao3hjb.store)',
      titleEn: 'Domain Hub & AdSense Options',
      badgeAr: 'OPTIONS 200 OK ✓',
      badgeEn: 'Verified ✓',
      action: onOpenDomainInfo
    }
  ];

  return (
    <div id="top-three-category-bars" className="w-full flex flex-col shadow-xs select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          BAR 1: Digital Products & Hanan Fun Strip (Dark Slate Theme)
         ───────────────────────────────────────────────────────────── */}
      <div 
        id="top-bar-digital-sections" 
        className="w-full bg-[#18181b] text-stone-200 border-b border-stone-800 py-1.5 px-3 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Bar 1 Header Tag */}
          <div className="flex items-center gap-1.5 shrink-0 pe-2 border-e border-stone-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-black text-amber-300 tracking-wide font-serif">
              {isAr ? '١. أقسام حنان فن والملفات الرقمية:' : '1. Hanan Fun & Digital Files:'}
            </span>
          </div>

          {/* Bar 1 Scrollable Items */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar scrollbar-none overscroll-x-contain touch-pan-x flex-1">
            {digitalSections.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  id={`top-bar-btn-${item.id}`}
                  onClick={item.action}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-xs'
                      : 'bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700 hover:border-amber-400/50'
                  }`}
                  title={isAr ? item.titleAr : item.titleEn}
                >
                  {item.icon}
                  <span className="text-[11px]">{isAr ? item.titleAr : item.titleEn}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-stone-900 text-amber-300' : 'bg-stone-900/90 text-amber-400/90 border border-stone-700'
                  }`}>
                    {isAr ? item.badgeAr : item.badgeEn}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[10px] text-stone-400 shrink-0 ps-2">
            <span>{isAr ? 'تحميل فوري' : 'Instant 24/7'}</span>
            {isAr ? <ChevronLeft className="w-3 h-3 text-amber-400" /> : <ChevronRight className="w-3 h-3 text-amber-400" />}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BAR 2: Luxury Boutique & Royal Scents Strip (Royal Amber Theme)
         ───────────────────────────────────────────────────────────── */}
      <div 
        id="top-bar-luxury-sections" 
        className="w-full bg-[#24201c] text-amber-100 border-b border-amber-950/70 py-1.5 px-3 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Bar 2 Header Tag */}
          <div className="flex items-center gap-1.5 shrink-0 pe-2 border-e border-amber-800/40">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-[11px] sm:text-xs font-black text-amber-200 tracking-wide font-serif">
              {isAr ? '٢. أقسام البوتيك الفاخر والهدايا:' : '2. Luxury Boutique & Royal Gifts:'}
            </span>
          </div>

          {/* Bar 2 Scrollable Items */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar scrollbar-none overscroll-x-contain touch-pan-x flex-1">
            {luxurySections.map((item) => {
              const isActive = activeCategory === 'luxury' && item.id === 'luxury-perfumes';
              return (
                <button
                  key={item.id}
                  id={`top-bar-btn-${item.id}`}
                  onClick={item.action}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 font-bold border-amber-300 shadow-xs'
                      : 'bg-stone-900/70 hover:bg-stone-800 text-amber-100 border-amber-900/40 hover:border-amber-400/60'
                  }`}
                  title={isAr ? item.titleAr : item.titleEn}
                >
                  {item.icon}
                  <span className="text-[11px]">{isAr ? item.titleAr : item.titleEn}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-stone-900 text-amber-300' : 'bg-[#18181b] text-amber-300/90 border border-amber-900/50'
                  }`}>
                    {isAr ? item.badgeAr : item.badgeEn}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[10px] text-amber-300/80 shrink-0 ps-2">
            <span>{isAr ? 'تغليف ملكي' : 'VIP Packaging'}</span>
            {isAr ? <ChevronLeft className="w-3 h-3 text-amber-300" /> : <ChevronRight className="w-3 h-3 text-amber-300" />}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BAR 3: Fast Services & Editorial Hub Strip (Warm Cream & Gold)
         ───────────────────────────────────────────────────────────── */}
      <div 
        id="top-bar-editorial-services" 
        className="w-full bg-[#fdfaf5] text-stone-900 border-b border-amber-200/80 py-1.5 px-3 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Bar 3 Header Tag */}
          <div className="flex items-center gap-1.5 shrink-0 pe-2 border-e border-amber-300/60">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span className="text-[11px] sm:text-xs font-black text-amber-900 tracking-wide font-serif">
              {isAr ? '٣. الخدمات السريعة والمحتوى:' : '3. Fast Services & Editorial:'}
            </span>
          </div>

          {/* Bar 3 Scrollable Items */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar scrollbar-none overscroll-x-contain touch-pan-x flex-1">
            {serviceSections.map((item) => (
              <button
                key={item.id}
                id={`top-bar-btn-${item.id}`}
                onClick={item.action}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 border bg-white hover:bg-amber-50/80 text-stone-800 border-amber-200 hover:border-amber-400 shadow-2xs"
                title={isAr ? item.titleAr : item.titleEn}
              >
                {item.icon}
                <span className="text-[11px] font-bold">{isAr ? item.titleAr : item.titleEn}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {isAr ? item.badgeAr : item.badgeEn}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[10px] text-amber-800 shrink-0 ps-2">
            <span>{isAr ? 'روابط مباشرة' : 'Direct Links'}</span>
            {isAr ? <ChevronLeft className="w-3 h-3 text-amber-600" /> : <ChevronRight className="w-3 h-3 text-amber-600" />}
          </div>

        </div>
      </div>

    </div>
  );
};
