import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const reviews = [
    {
      id: 1,
      authorAr: 'سارة الهذلول',
      authorEn: 'Sarah Al-Hathloul',
      cityAr: 'الرياض',
      cityEn: 'Riyadh',
      productAr: 'عطر سحر الشرق الملكي',
      productEn: 'Royal Orient Oud & Amber',
      rating: 5,
      dateAr: 'منذ يومين',
      dateEn: '2 days ago',
      commentAr: 'قسم بالله العطر يفوز بكل المقاييس! الثبات خيالي والفوحان مو طبيعي في العروس والمناسبات. والتغليف الملكي فخم جداً ينفع هدية تبيّض الوجه.',
      commentEn: 'Hands down the most exquisite oud perfume in my collection! Exceptional longevity and the velvet gift packaging is beyond royal.'
    },
    {
      id: 2,
      authorAr: 'نورة المنصور',
      authorEn: 'Noura Al-Mansoor',
      cityAr: 'جدة',
      cityEn: 'Jeddah',
      productAr: 'عباية الكريب الملكي كلوش بتطريز ذهبي',
      productEn: 'Imperial Royal Crepe Abaya',
      rating: 5,
      dateAr: 'منذ 4 أيام',
      dateEn: '4 days ago',
      commentAr: 'سواد العباية فاحم وراقي جداً، والقماش طايح وبارد، والتطريز اليدوي نظيف ودقيق للغاية. وصلني الطلب خلال 24 ساعة مبرد ومرتب. شكراً حنان ستور!',
      commentEn: 'The crepe is so flowy, jet black, and the gold embroidery is pure perfection. Arrived in 24 hours in insulated packaging!'
    },
    {
      id: 3,
      authorAr: 'د. ليلى الشمري',
      authorEn: 'Dr. Layla Al-Shammari',
      cityAr: 'الدمام',
      cityEn: 'Dammam',
      productAr: 'طقم لؤلؤ المياه العذبة الملكي 18K',
      productEn: 'Royal Freshwater Pearl Necklace Set',
      rating: 5,
      dateAr: 'منذ أسبوع',
      dateEn: '1 week ago',
      commentAr: 'اللؤلؤ طبيعي ويلمع مع الذهب بشكل ساحر، لبسته في مناسبة خاصة والكل سألني عنه. شهادة الأصالة والبوكس المخملي زادت من قيمته.',
      commentEn: 'Natural lustrous pearls paired with gorgeous 18K gold. Everyone was asking me where I got this set. Simply wonderful.'
    },
    {
      id: 4,
      authorAr: 'مها الفهد',
      authorEn: 'Maha Al-Fahad',
      cityAr: 'دبي',
      cityEn: 'Dubai',
      productAr: 'صندوق إهداء حنان الإمبراطوري',
      productEn: 'Hanan Imperial Signature Gift Set',
      rating: 5,
      dateAr: 'منذ أسبوعين',
      dateEn: '2 weeks ago',
      commentAr: 'طلبت الصندوق هدية تخرج لأختي، كارت الإهداء مكتوب بخط ديواني يفتح النفس والعود المروكي ريحته تثبت في البيت أيام. خدمة عملاء VIP راقية.',
      commentEn: 'Ordered this gift box for my sister. The handwritten calligraphy card and Maroke oud scent exceeded all expectations!'
    }
  ];

  return (
    <section id="reviews-section" className="py-14 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with aggregate rating */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              {lang === 'ar' ? 'تجارب حقيقية وموثقة' : 'VERIFIED EXPERIENCES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif mt-2">
              {t.reviewsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {t.reviewsSub}
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <div className="text-end">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {lang === 'ar' ? 'بناءً على 1,480+ تقييم' : 'Based on 1,480+ reviews'}
              </p>
            </div>
            <div className="text-3xl font-black text-stone-900 font-serif ps-3 border-s border-stone-200">
              4.9
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="p-5 rounded-3xl bg-[#FAF8F5]/70 border border-stone-200/80 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-sans">
                    {lang === 'ar' ? rev.dateAr : rev.dateEn}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic">
                  "{lang === 'ar' ? rev.commentAr : rev.commentEn}"
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-900">
                      {lang === 'ar' ? rev.authorAr : rev.authorEn}
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" title="Verified Buyer" />
                  </div>
                  <span className="text-[10px] text-stone-400">
                    {lang === 'ar' ? rev.cityAr : rev.cityEn}
                  </span>
                </div>

                <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium max-w-[110px] truncate">
                  {lang === 'ar' ? rev.productAr : rev.productEn}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
