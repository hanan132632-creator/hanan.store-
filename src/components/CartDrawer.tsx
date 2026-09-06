import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Truck, 
  Tag
} from 'lucide-react';
import { CartItem, Currency, Language } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  lang: Language;
  onUpdateQuantity: (productId: string, newQty: number, selectedOption?: string) => void;
  onRemoveItem: (productId: string, selectedOption?: string) => void;
  onProceedToCheckout: () => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discountRate: number;
  onApplyPromoCode: (code: string) => { success: boolean; message: string };
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  lang,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  promoCode,
  setPromoCode,
  discountRate,
  onApplyPromoCode
}) => {
  const t = TRANSLATIONS[lang];
  const [couponInput, setCouponInput] = useState(promoCode);
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; text: string } | null>(null);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 350;

  // Calculations in SAR
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * discountRate);
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 35;
  const isFreeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const total = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = onApplyPromoCode(couponInput.trim());
    setCouponFeedback({ success: res.success, text: res.message });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 end-0 max-w-md w-full bg-white shadow-2xl flex flex-col z-50 border-s border-stone-200"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                {t.cart}
              </h3>
              <span className="text-xs text-stone-500">
                ({items.reduce((s, i) => s + i.quantity, 0)} {t.itemsWord})
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

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FAF8F5] p-3.5 border-b border-stone-200/80">
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="flex items-center gap-1.5 text-stone-800">
              <Truck className="w-4 h-4 text-amber-700" />
              {isFreeShippingUnlocked 
                ? t.freeShippingUnlocked 
                : t.freeShippingTarget.replace('{amount}', formatPrice(remainingForFree, currency, lang))}
            </span>
            <span className="text-amber-800 font-mono text-[11px]">{progressPercent}%</span>
          </div>
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-amber-700 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-stone-300" />
              </div>
              <h4 className="font-serif font-bold text-stone-800 text-lg">
                {t.cartEmpty}
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                {t.cartEmptySub}
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-all cursor-pointer"
              >
                <span>{t.continueShopping}</span>
                {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          ) : (
            items.map((item, idx) => {
              const p = item.product;
              const title = lang === 'ar' ? p.titleAr : p.titleEn;
              return (
                <div 
                  key={`${p.id}-${item.selectedOption || idx}`}
                  className="flex gap-3.5 p-3 rounded-2xl bg-stone-50/80 border border-stone-200/60 hover:bg-stone-50 transition-colors"
                >
                  <img
                    src={p.image}
                    alt={title}
                    className="w-18 h-18 rounded-xl object-cover border border-stone-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900 line-clamp-1 leading-snug">
                          {title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(p.id, item.selectedOption)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedOption && (
                        <span className="inline-block text-[10px] text-stone-500 bg-white px-1.5 py-0.5 rounded border border-stone-200 mt-0.5">
                          {item.selectedOption}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-white rounded-lg border border-stone-200 shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(p.id, item.quantity - 1, item.selectedOption)}
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded-s-lg font-bold text-xs transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(p.id, item.quantity + 1, item.selectedOption)}
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 rounded-e-lg font-bold text-xs transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-end">
                        <span className="text-xs font-black text-stone-900 font-serif">
                          {formatPrice(p.price * item.quantity, currency, lang)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Calculations and Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3.5">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  placeholder={lang === 'ar' ? 'كود الخصم (HANAN10)' : 'Promo Code (HANAN10)'}
                  className="w-full bg-white text-stone-900 text-xs rounded-xl py-2 px-3 ps-8 border border-stone-300 focus:outline-none focus:border-amber-600 uppercase font-mono"
                />
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute start-2.5 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
              >
                {t.applyCoupon}
              </button>
            </form>

            {couponFeedback && (
              <p className={`text-[11px] font-bold flex items-center gap-1 ${couponFeedback.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                {couponFeedback.success ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{couponFeedback.text}</span>
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-1 border-t border-stone-200/60">
              <div className="flex justify-between">
                <span>{t.subtotal}</span>
                <span className="font-bold text-stone-800">{formatPrice(subtotal, currency, lang)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>{t.discount} ({Math.round(discountRate * 100)}%)</span>
                  <span>-{formatPrice(discountAmount, currency, lang)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>{t.shipping}</span>
                <span className={`font-bold ${shippingFee === 0 ? 'text-emerald-700' : 'text-stone-800'}`}>
                  {shippingFee === 0 ? t.freeShipping : formatPrice(shippingFee, currency, lang)}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-stone-950 pt-2 border-t border-stone-300">
                <span className="font-serif">{t.total}</span>
                <span className="font-serif text-base text-amber-900">
                  {formatPrice(total, currency, lang)}
                </span>
              </div>

              <span className="text-[10px] text-stone-400 block text-center">
                {t.vat}
              </span>
            </div>

            {/* Checkout Action Button */}
            <button
              id="cart-checkout-btn"
              onClick={onProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 group transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>{t.checkout}</span>
              {lang === 'ar' ? <ArrowLeft className="w-4 h-4 text-amber-300" /> : <ArrowRight className="w-4 h-4 text-amber-300" />}
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
