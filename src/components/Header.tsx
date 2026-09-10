import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Globe, 
  ShieldCheck, 
  X,
  PhoneCall,
  Sparkles,
  Menu
} from 'lucide-react';
import { Currency, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SitePagesMenu } from './SitePagesMenu';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onOpenDomainInfo: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms' | 'adsense' | 'about' | 'contact') => void;
  onOpenSitemap?: () => void;
  onOpenTextToVideo?: () => void;
  onOpenArticleWriter?: () => void;
  onOpenAdSenseAudit?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  currency,
  setCurrency,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  activeCategory: _activeCategory,
  setActiveCategory,
  onOpenDomainInfo,
  onOpenLegal,
  onOpenSitemap: _onOpenSitemap,
  onOpenTextToVideo,
  onOpenArticleWriter,
  onOpenAdSenseAudit
}) => {
  const t = TRANSLATIONS[lang];
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);

  const currencies: Currency[] = ['SAR', 'AED', 'KWD', 'USD'];

  return (
    <header id="store-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#18181B] text-amber-100 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-start">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {lang === 'ar' ? 'حصري' : 'EXCLUSIVE'}
            </span>
            <span className="font-medium tracking-wide">
              {t.freeShippingNotice}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[11px]">
            {/* Domain verification badge */}
            <button 
              id="domain-status-btn"
              onClick={onOpenDomainInfo}
              className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors cursor-pointer group"
              title="Official Domain Verification"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[11px] underline underline-offset-2 decoration-amber-400/50">
                xn--mgblao3hjb.store
              </span>
            </button>

            <span className="hidden md:inline text-stone-600">|</span>

            {/* AI Text to Video Button in Announcement Bar */}
            {onOpenTextToVideo && (
              <button
                id="top-bar-tool-video-btn"
                onClick={onOpenTextToVideo}
                className="hidden sm:inline-flex items-center gap-1 text-amber-300 hover:text-white font-bold bg-amber-500/20 hover:bg-amber-500/30 px-2 py-0.5 rounded border border-amber-500/40 cursor-pointer transition-colors"
                title={lang === 'ar' ? 'أداة تحويل النص إلى فيديو' : 'AI Text to Video Tool'}
              >
                <span>🎬</span>
                <span>{lang === 'ar' ? 'أداة النص إلى فيديو' : 'Text to Video'}</span>
              </button>
            )}

            {/* AI Article Writer Button in Announcement Bar */}
            {onOpenArticleWriter && (
              <button
                id="top-bar-tool-writer-btn"
                onClick={onOpenArticleWriter}
                className="hidden sm:inline-flex items-center gap-1 text-emerald-300 hover:text-white font-bold bg-emerald-500/20 hover:bg-emerald-500/30 px-2 py-0.5 rounded border border-emerald-500/40 cursor-pointer transition-colors"
                title={lang === 'ar' ? 'أداة إنشاء مقالات بالذكاء الاصطناعي' : 'AI Article Writer Tool'}
              >
                <span>✍️</span>
                <span>{lang === 'ar' ? 'أداة إنشاء المقالات AI' : 'AI Article Writer'}</span>
              </button>
            )}

            {/* AdSense Live Audit Report in Announcement Bar */}
            {onOpenAdSenseAudit && (
              <button
                id="top-bar-adsense-audit-btn"
                onClick={onOpenAdSenseAudit}
                className="hidden md:inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-bold bg-blue-500/20 hover:bg-blue-500/30 px-2 py-0.5 rounded border border-blue-400/40 cursor-pointer transition-colors text-[11px]"
                title={lang === 'ar' ? 'تقرير مراجعة وفحص Google AdSense' : 'Live AdSense Audit Report'}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{lang === 'ar' ? '📊 تقرير مراجعة أدسنس' : '📊 AdSense Audit'}</span>
              </button>
            )}

            <span className="hidden md:inline text-stone-600">|</span>

            {/* Guides / Blog anchor */}
            <a
              href="#hanan-blog"
              className="hidden lg:inline text-stone-300 hover:text-amber-300 transition-colors"
            >
              <span>{lang === 'ar' ? 'أدلة الجمعات والتخطيط' : 'Guides & Blog'}</span>
            </a>

            {onOpenLegal && (
              <>
                <span className="hidden lg:inline text-stone-600">|</span>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hidden md:inline text-stone-400 hover:text-amber-200 transition-colors cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'السياسات والخصوصية' : 'Policies'}</span>
                </button>
              </>
            )}

            <span className="hidden sm:inline text-stone-600">|</span>

            {/* Direct WhatsApp Concierge */}
            <a 
              href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%AD%D9%86%D8%A7%D9%86%20%D8%B3%D8%AA%D9%88%D8%B1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>{lang === 'ar' ? 'خدمة العملاء VIP' : 'VIP Concierge'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left / Brand Logo & Hamburger Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 relative">
            {/* 3 Bars / Hamburger Menu Button */}
            <button
              id="header-hamburger-menu-btn"
              onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
              className="p-2 -ms-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors flex items-center justify-center cursor-pointer group"
              aria-label={lang === 'ar' ? 'صفحات وأقسام الموقع' : 'Site Pages & Menu'}
              title={lang === 'ar' ? 'صفحات وأقسام الموقع' : 'Site Pages & Menu'}
            >
              {isNavDrawerOpen ? (
                <X className="w-6 h-6 text-stone-900" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-105 transition-transform" />
              )}
            </button>

            {/* Dropdown Menu showing all site pages under each other */}
            <SitePagesMenu
              isOpen={isNavDrawerOpen}
              onClose={() => setIsNavDrawerOpen(false)}
              lang={lang}
              onSelectCategory={setActiveCategory}
              onOpenLegal={onOpenLegal}
              onOpenTextToVideo={onOpenTextToVideo}
              onOpenArticleWriter={onOpenArticleWriter}
              onOpenAdSenseAudit={onOpenAdSenseAudit}
            />

            <button 
              id="brand-logo-btn"
              onClick={() => {
                setActiveCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center text-start group cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900 font-serif flex items-center gap-1.5 group-hover:text-amber-800 transition-colors">
                  {lang === 'ar' ? 'حنان ستور' : 'Hanan Store'}
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 font-sans">
                  {lang === 'ar' ? 'BOUTIQUE • حنان.STORE' : 'BOUTIQUE • HANAN.STORE'}
                </span>
              </div>
            </button>
          </div>

          {/* Center Search Bar on Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                id="desktop-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-stone-100/80 hover:bg-stone-100 focus:bg-white text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm rounded-full py-2.5 px-4 ps-10 border border-stone-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Quick AI Tools Buttons on Desktop */}
            {onOpenTextToVideo && (
              <button
                id="header-btn-text-to-video"
                onClick={onOpenTextToVideo}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-full bg-stone-900 text-amber-300 hover:bg-amber-600 hover:text-stone-950 transition-all shadow-xs border border-amber-500/30 cursor-pointer"
                title={lang === 'ar' ? 'أداة تحويل النص إلى فيديو' : 'AI Text to Video Tool'}
              >
                <span>🎬</span>
                <span className="hidden xl:inline">{lang === 'ar' ? 'النص لفيديو' : 'Text to Video'}</span>
              </button>
            )}

            {onOpenArticleWriter && (
              <button
                id="header-btn-article-writer"
                onClick={onOpenArticleWriter}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-full bg-emerald-900 text-emerald-100 hover:bg-emerald-600 hover:text-white transition-all shadow-xs border border-emerald-500/30 cursor-pointer"
                title={lang === 'ar' ? 'أداة إنشاء مقالات بالذكاء الاصطناعي' : 'AI Article Writer Tool'}
              >
                <span>✍️</span>
                <span className="hidden xl:inline">{lang === 'ar' ? 'كاتب المقالات' : 'AI Writer'}</span>
              </button>
            )}

            {onOpenAdSenseAudit && (
              <button
                id="header-btn-adsense-audit"
                onClick={onOpenAdSenseAudit}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-blue-50 text-blue-900 hover:bg-blue-600 hover:text-white transition-all shadow-xs border border-blue-300/60 cursor-pointer"
                title={lang === 'ar' ? 'تقرير مراجعة واعتماد جوجل أدسنس' : 'Live AdSense Audit Report'}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'ar' ? 'تقرير أدسنس' : 'AdSense Audit'}</span>
              </button>
            )}

            {/* Mobile Search Button */}
            <button
              id="mobile-search-toggle"
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-menu-btn"
                onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 rounded-full transition-colors cursor-pointer"
              >
                <span>{currency}</span>
              </button>
              
              {showCurrencyMenu && (
                <div 
                  className="absolute end-0 mt-2 w-28 bg-white rounded-xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setShowCurrencyMenu(false)}
                >
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setShowCurrencyMenu(false);
                      }}
                      className={`w-full text-start px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-stone-50 transition-colors cursor-pointer ${currency === curr ? 'text-amber-700 font-bold bg-amber-50/50' : 'text-stone-700'}`}
                    >
                      <span>{curr}</span>
                      {currency === curr && <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher Button */}
            <button
              id="language-toggle-btn"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 rounded-full transition-colors cursor-pointer"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Wishlist Button */}
            <button
              id="wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2.5 text-stone-700 hover:text-rose-600 rounded-full hover:bg-rose-50/60 transition-colors cursor-pointer"
              aria-label="Wishlist"
              title={t.wishlist}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -end-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              id="cart-drawer-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-2 px-3.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold tracking-wide">
                {t.cart}
              </span>
              <span className="bg-amber-400 text-stone-950 text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center">
                {cartCount}
              </span>
            </button>

          </div>
        </div>

        {/* Mobile Search Bar Expansion */}
        {isSearchExpanded && (
          <div className="md:hidden pb-3 px-1">
            <div className="relative w-full">
              <input
                id="mobile-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoFocus
                className="w-full bg-stone-100 text-stone-900 placeholder:text-stone-400 text-sm rounded-full py-2.5 px-4 ps-10 border border-stone-200 focus:border-amber-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-stone-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
