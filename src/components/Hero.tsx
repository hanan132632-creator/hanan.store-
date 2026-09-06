import React from 'react';
import { Sparkles, ArrowDown, ShieldCheck, Truck, Award, Gift } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
  onExploreClick: () => void;
  onCategorySelect: (catId: string) => void;
  onOpenDomainInfo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreClick,
  onCategorySelect,
  onOpenDomainInfo
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EC] to-[#FAF8F5] py-10 md:py-16 border-b border-stone-200/60">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 start-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Typography & Call-To-Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Domain & Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950 text-amber-300 text-xs font-semibold shadow-sm border border-amber-800/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{t.hero.eyebrow}</span>
              <span className="text-stone-500">•</span>
              <button 
                onClick={onOpenDomainInfo} 
                className="hover:underline font-mono text-[11px] text-amber-200 cursor-pointer"
              >
                xn--mgblao3hjb.store
              </button>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.2] font-serif">
              {lang === 'ar' 
                ? 'ملفات وألعاب حنان فن التفاعلية والقطع الفاخرة' 
                : 'Hanan Fun Interactive Files & Luxury Experience'}
            </h1>

            {/* Body Description */}
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {lang === 'ar'
                ? 'استمتعي بأقوى ملفات الألعاب التفاعلية للجمعات والمناسبات مثل hanan.fun، ومخططات الأيباد السنوية 2026، وقوالب كانفا، وشيتات الإكسل الذكية، مع توصيل فوري مباشر وتشكيلة حنان الملكية.'
                : 'Enjoy top interactive gathering game files from hanan.fun, 2026 iPad digital planners, Canva kits, and automated budget spreadsheets with instant direct download.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-shop-now-btn"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>{lang === 'ar' ? 'تصفح ملفات وألعاب حنان فن' : 'Browse Files & Games'}</span>
                <ArrowDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-games-btn"
                onClick={() => onCategorySelect('fun-games')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
              >
                <span>{lang === 'ar' ? 'ألعاب الجمعات (Hanan Fun)' : 'Gathering Games'}</span>
              </button>

              <button
                id="hero-bundle-btn"
                onClick={() => onCategorySelect('bundles')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-amber-900 font-bold text-sm sm:text-base border border-amber-300 shadow-sm transition-all cursor-pointer"
              >
                <span>{lang === 'ar' ? 'البكج الشامل (وفر 65%)' : 'Ultimate Bundle'}</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-start">
              <div>
                <p className="text-xl sm:text-2xl font-black text-stone-900 font-serif">100%</p>
                <p className="text-xs text-stone-500 font-medium">{lang === 'ar' ? 'منتجات أصلية ونقية' : 'Authentic Guaranteed'}</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-stone-900 font-serif">{t.hero.satisfactionRate}</p>
                <p className="text-xs text-stone-500 font-medium">{t.hero.satisfactionLabel}</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-stone-900 font-serif">{t.hero.ordersShipped}</p>
                <p className="text-xs text-stone-500 font-medium">{t.hero.ordersShippedLabel}</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-700 font-serif">24 - 48h</p>
                <p className="text-xs text-stone-500 font-medium">{lang === 'ar' ? 'توصيل فائق السرعة' : 'Rapid Delivery'}</p>
              </div>
            </div>

          </div>

          {/* Luxury Imagery Collage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Luxury Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hanan Store Royal Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none"></div>

                {/* Bottom Card Overlay Tag */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-stone-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                        {lang === 'ar' ? 'إصدار محدود' : 'LIMITED EDITION'}
                      </span>
                      <h4 className="text-sm font-bold mt-1 text-stone-900">
                        {lang === 'ar' ? 'مجموعة عطور حنان الملكية 2026' : 'Hanan Imperial Scent Set 2026'}
                      </h4>
                    </div>
                    <div className="text-end">
                      <span className="text-xs text-stone-400 line-through">650 ر.س</span>
                      <p className="text-sm font-black text-amber-800">480 ر.س</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Top End) */}
              <div className="absolute -top-4 -end-3 sm:-end-5 bg-stone-900 text-amber-300 p-3.5 rounded-2xl shadow-xl border border-amber-400/30 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-400" />
                <div className="text-start">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-400/80">
                    {lang === 'ar' ? 'معتمد رسمي' : 'VERIFIED'}
                  </p>
                  <p className="text-xs font-black text-white font-mono">
                    xn--mgblao3hjb.store
                  </p>
                </div>
              </div>

              {/* Floating Badge (Bottom Start) */}
              <div className="absolute -bottom-4 -start-3 sm:-start-5 bg-white text-stone-900 p-3 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-stone-500">
                    {lang === 'ar' ? 'شحن مبرد فاخر' : 'Luxury Express'}
                  </p>
                  <p className="text-xs font-bold text-stone-900">
                    {lang === 'ar' ? 'مجاني للطلبات +350 ر.س' : 'Free over 350 SAR'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Trust Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-stone-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">{t.guarantees.original.title}</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{t.guarantees.original.desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-stone-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">{t.guarantees.packaging.title}</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{t.guarantees.packaging.desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-stone-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">{t.guarantees.shipping.title}</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{t.guarantees.shipping.desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-stone-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">{t.guarantees.support.title}</h4>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{t.guarantees.support.desc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
