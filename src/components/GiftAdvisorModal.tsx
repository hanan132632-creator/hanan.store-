import React, { useState } from 'react';
import { Sparkles, Gift, ArrowRight, ArrowLeft, Check, ShoppingBag, X } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../data/translations';

interface GiftAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  lang: Language;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const GiftAdvisorModal: React.FC<GiftAdvisorModalProps> = ({
  isOpen,
  onClose,
  currency,
  lang,
  onAddToCart,
  onQuickView
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [recipient, setRecipient] = useState<string>('bride');
  const [budget, setBudget] = useState<'low' | 'mid' | 'high'>('mid');

  const recipients = [
    { id: 'bride', titleAr: 'عروس أو مقبلة على زواج', titleEn: 'Bridal & Wedding', icon: '👰' },
    { id: 'mother', titleAr: 'الوالدة أو مناسبة عائلية غالية', titleEn: 'Mother & Family', icon: '💎' },
    { id: 'vip', titleAr: 'شخصية راقية ومناسبات كبرى', titleEn: 'VIP & Gala', icon: '👑' },
    { id: 'self', titleAr: 'دلال شخصي ومكافأة لنفسك', titleEn: 'Self-Care Indulgence', icon: '✨' }
  ];

  const budgets = [
    { id: 'low', titleAr: 'حتى 400 ر.س', titleEn: 'Up to 400 SAR' },
    { id: 'mid', titleAr: '400 إلى 700 ر.س (موصى به)', titleEn: '400 - 700 SAR (Recommended)' },
    { id: 'high', titleAr: '+700 ر.س (بكجات فاخرة)', titleEn: '+700 SAR (Imperial Sets)' }
  ];

  // Logic to find recommended products
  const recommendations = PRODUCTS.filter((p) => {
    if (budget === 'low' && p.price > 400) return false;
    if (budget === 'mid' && (p.price < 350 || p.price > 750)) return false;
    if (budget === 'high' && p.price < 600) return false;
    return true;
  }).slice(0, 3);

  const finalRecommendations = recommendations.length > 0 ? recommendations : PRODUCTS.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative p-6 sm:p-8"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
            <Gift className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              {lang === 'ar' ? 'مساعد حنان الذكي' : 'HANAN CONCIERGE'}
            </span>
            <h3 className="text-lg font-black text-stone-900 font-serif mt-1">
              {lang === 'ar' ? 'مستشار اختيار الهدايا والقطع الفاخرة' : 'Luxury Gift & Scent Advisor'}
            </h3>
          </div>
        </div>

        {/* Step 1: Select Recipient */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-stone-700">
              {lang === 'ar' ? '1. لمن ترغبين في إهداء هذه القطعة الملكية؟' : '1. Who are you choosing this luxury piece for?'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipients.map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => setRecipient(rec.id)}
                  className={`p-3.5 rounded-2xl border text-start flex items-center gap-3 transition-all cursor-pointer ${
                    recipient === rec.id
                      ? 'border-amber-500 bg-amber-50/50 shadow-xs ring-1 ring-amber-400'
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-2xl">{rec.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">
                      {lang === 'ar' ? rec.titleAr : rec.titleEn}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>{lang === 'ar' ? 'التالي: تحديد الميزانية' : 'Next: Set Budget'}</span>
              {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Step 2: Select Budget */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-stone-700">
              {lang === 'ar' ? '2. ما هي الميزانية المناسبة لكِ؟' : '2. What is your preferred budget range?'}
            </p>
            <div className="space-y-2.5">
              {budgets.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBudget(b.id as 'low' | 'mid' | 'high')}
                  className={`w-full p-3.5 rounded-2xl border text-start flex items-center justify-between transition-all cursor-pointer ${
                    budget === b.id
                      ? 'border-amber-500 bg-amber-50/50 shadow-xs ring-1 ring-amber-400 font-bold'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <span className="text-xs font-bold">{lang === 'ar' ? b.titleAr : b.titleEn}</span>
                  {budget === b.id && <Check className="w-4 h-4 text-amber-700" />}
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs cursor-pointer"
              >
                {lang === 'ar' ? 'رجوع' : 'Back'}
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{lang === 'ar' ? 'عرض التوصيات الملكية' : 'View Royal Recommendations'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Recommendations */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-stone-900">
                {lang === 'ar' ? 'أفضل القطع المختارة لكِ بعناية:' : 'Curated Recommendations For You:'}
              </p>
              <button
                onClick={() => setStep(1)}
                className="text-[11px] text-amber-700 hover:underline font-bold"
              >
                {lang === 'ar' ? 'تغيير الخيارات' : 'Change filters'}
              </button>
            </div>

            <div className="space-y-3">
              {finalRecommendations.map((prod) => {
                const title = lang === 'ar' ? prod.titleAr : prod.titleEn;
                return (
                  <div
                    key={prod.id}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3 hover:bg-white transition-colors"
                  >
                    <img
                      src={prod.image}
                      alt={title}
                      onClick={() => {
                        onClose();
                        onQuickView(prod);
                      }}
                      className="w-16 h-16 rounded-xl object-cover cursor-pointer"
                    />

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-amber-800 block">
                        {lang === 'ar' ? prod.categoryNameAr : prod.categoryNameEn}
                      </span>
                      <h4 
                        onClick={() => {
                          onClose();
                          onQuickView(prod);
                        }}
                        className="text-xs font-bold text-stone-900 truncate hover:text-amber-700 cursor-pointer"
                      >
                        {title}
                      </h4>
                      <p className="text-xs font-black text-stone-900 font-serif mt-0.5">
                        {formatPrice(prod.price, currency, lang)}
                      </p>
                    </div>

                    <button
                      onClick={() => onAddToCart(prod)}
                      className="p-2.5 sm:px-3 sm:py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                      <span className="hidden sm:inline">{lang === 'ar' ? 'أضف للسلة' : 'Add'}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors cursor-pointer text-center"
            >
              {lang === 'ar' ? 'تصفح باقي معروضات المتجر' : 'Browse Full Catalog'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
