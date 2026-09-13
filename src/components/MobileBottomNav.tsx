import React from 'react';
import { Home, Gamepad2, Search, Heart, ShoppingBag } from 'lucide-react';
import { Language, Currency } from '../types';
import { formatPrice } from '../data/translations';

interface MobileBottomNavProps {
  lang: Language;
  currency: Currency;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  lang,
  currency,
  cartCount,
  cartTotal,
  wishlistCount,
  activeCategory,
  onSelectCategory,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch
}) => {
  const isAr = lang === 'ar';

  const triggerHaptic = () => {
    try {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    } catch {
      // Ignore if not permitted
    }
  };

  const handleHomeClick = () => {
    triggerHaptic();
    onSelectCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGamesClick = () => {
    triggerHaptic();
    onSelectCategory('fun-games');
    const el = document.getElementById('catalog-filters-section') || document.getElementById('featured-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      id="mobile-bottom-navigation"
      aria-label={isAr ? "شريط التنقل السريع للجوال" : "Mobile bottom navigation"}
      className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.07)] pb-[max(env(safe-area-inset-bottom),8px)] pt-1.5 transition-all"
    >
      <div className="grid grid-cols-5 items-center px-1">
        
        {/* Tab 1: Home */}
        <button
          id="mobile-nav-home"
          onClick={handleHomeClick}
          aria-label={isAr ? 'الصفحة الرئيسية' : 'Home'}
          className={`min-h-[48px] flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-colors cursor-pointer touch-manipulation active:scale-95 ${
            activeCategory === 'all' ? 'text-amber-800 font-bold' : 'text-stone-700 font-semibold hover:text-stone-950'
          }`}
        >
          <div className="relative">
            <Home className="w-5 h-5" />
            {activeCategory === 'all' && (
              <span className="absolute -bottom-1 inset-x-1 h-0.5 bg-amber-600 rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight truncate max-w-full">
            {isAr ? 'الرئيسية' : 'Home'}
          </span>
        </button>

        {/* Tab 2: Interactive Gathering Games & Digital files */}
        <button
          id="mobile-nav-games"
          onClick={handleGamesClick}
          aria-label={isAr ? 'قسم ألعاب وتحديات الجمعات' : 'Fun Gathering Games Category'}
          className={`min-h-[48px] flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-colors cursor-pointer touch-manipulation active:scale-95 ${
            activeCategory === 'fun-games' ? 'text-amber-800 font-bold' : 'text-stone-700 font-semibold hover:text-stone-950'
          }`}
        >
          <div className="relative">
            <Gamepad2 className="w-5 h-5 text-amber-600" />
            {activeCategory === 'fun-games' && (
              <span className="absolute -bottom-1 inset-x-1 h-0.5 bg-amber-600 rounded-full"></span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight truncate max-w-full">
            {isAr ? 'ألعاب وجمعات' : 'Fun Games'}
          </span>
        </button>

        {/* Tab 3: Search */}
        <button
          id="mobile-nav-search"
          onClick={() => {
            triggerHaptic();
            onOpenSearch();
          }}
          aria-label={isAr ? 'البحث عن منتج' : 'Search products'}
          className="min-h-[48px] flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-700 font-semibold hover:text-stone-950 transition-colors cursor-pointer touch-manipulation active:scale-95"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight truncate max-w-full">
            {isAr ? 'بحث' : 'Search'}
          </span>
        </button>

        {/* Tab 4: Wishlist */}
        <button
          id="mobile-nav-wishlist"
          onClick={() => {
            triggerHaptic();
            onOpenWishlist();
          }}
          aria-label={isAr ? `قائمة المفضلة (${wishlistCount} منتج)` : `Wishlist (${wishlistCount} items)`}
          className="min-h-[48px] relative flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-700 font-semibold hover:text-rose-700 transition-colors cursor-pointer touch-manipulation active:scale-95"
        >
          <div className="relative">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -end-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight truncate max-w-full">
            {isAr ? 'المفضلة' : 'Wishlist'}
          </span>
        </button>

        {/* Tab 5: Cart (with badge & total) */}
        <button
          id="mobile-nav-cart"
          onClick={() => {
            triggerHaptic();
            onOpenCart();
          }}
          aria-label={isAr ? `سلة المشتريات (${cartCount} عنصر، المجموع: ${formatPrice(cartTotal, currency, lang)})` : `Shopping Cart (${cartCount} items, Total: ${formatPrice(cartTotal, currency, lang)})`}
          className="min-h-[48px] relative flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-900 transition-colors cursor-pointer touch-manipulation active:scale-95"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center shadow-sm">
              <ShoppingBag className="w-4 h-4" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -end-1.5 bg-amber-400 text-stone-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] mt-0.5 font-bold tracking-tight text-amber-900 truncate max-w-full">
            {cartCount > 0 ? formatPrice(cartTotal, currency, lang) : (isAr ? 'السلة' : 'Cart')}
          </span>
        </button>

      </div>
    </nav>
  );
};
