import React from 'react';
import { X, Heart, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  currency: Currency;
  lang: Language;
  onAddToCart: (product: Product) => void;
  onRemoveFromWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  currency,
  lang,
  onAddToCart,
  onRemoveFromWishlist,
  onQuickView
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative max-h-[85vh] flex flex-col"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-rose-600" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-lg">
                {t.wishlist}
              </h3>
              <span className="text-xs text-stone-500">
                ({wishlist.length} {t.itemsWord})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto flex-1">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-stone-800 text-base">
                {t.wishlistEmpty}
              </h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                {t.wishlistEmptySub}
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 cursor-pointer"
              >
                <span>{t.continueShopping}</span>
                {lang === 'ar' ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlist.map((product) => {
                const title = lang === 'ar' ? product.titleAr : product.titleEn;
                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 hover:bg-white transition-colors gap-3"
                  >
                    <img
                      src={product.image}
                      alt={title}
                      onClick={() => {
                        onClose();
                        onQuickView(product);
                      }}
                      className="w-16 h-16 rounded-xl object-cover border border-stone-200 shrink-0 cursor-pointer"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 
                        onClick={() => {
                          onClose();
                          onQuickView(product);
                        }}
                        className="text-xs font-bold text-stone-900 truncate hover:text-amber-700 cursor-pointer"
                      >
                        {title}
                      </h4>
                      <p className="text-xs font-black text-amber-900 font-serif mt-1">
                        {formatPrice(product.price, currency, lang)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                        <span className="hidden sm:inline">{t.addToCart}</span>
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(product)}
                        className="p-2 text-stone-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
                        title={t.removeFromWishlist}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
