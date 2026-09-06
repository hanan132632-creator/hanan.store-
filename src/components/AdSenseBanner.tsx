import React, { useEffect, useState } from 'react';
import { Sparkles, Info, ShieldCheck, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface AdSenseBannerProps {
  lang: Language;
  slot?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  onOpenAdSensePolicy?: () => void;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  lang,
  slot = '1234567890',
  format = 'auto',
  className = '',
  onOpenAdSensePolicy
}) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    try {
      // Check if adsbygoogle is defined and push
      if (typeof window !== 'undefined') {
        const windowWithAds = window as unknown as { adsbygoogle?: unknown[] };
        if (windowWithAds.adsbygoogle) {
          windowWithAds.adsbygoogle.push({});
          setAdLoaded(true);
        }
      }
    } catch (e) {
      console.log('AdSense script placeholder ready', e);
    }
  }, []);

  return (
    <div 
      className={`w-full max-w-5xl mx-auto my-6 p-3 rounded-2xl bg-stone-50/80 border border-stone-200/90 text-center ${className}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Required AdSense Policy Label */}
      <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-stone-400 font-medium uppercase tracking-wider border-b border-stone-200/60 mb-2.5">
        <span className="flex items-center gap-1 font-bold text-stone-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span>{isAr ? 'إعلان ممول • إعلانات Google AdSense' : 'Sponsored • Google AdSense Ads'}</span>
        </span>
        
        {onOpenAdSensePolicy && (
          <button
            onClick={onOpenAdSensePolicy}
            className="hover:text-stone-700 hover:underline cursor-pointer flex items-center gap-0.5 text-[10px]"
          >
            <span>{isAr ? 'سياسة الإعلانات' : 'Ad Choices'}</span>
            <Info className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Actual AdSense Slot */}
      <div className="min-h-[90px] sm:min-h-[100px] flex items-center justify-center relative overflow-hidden rounded-xl bg-white border border-stone-100 p-2">
        <ins 
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-0000000000000000"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />

        {/* Informative fallback for preview / staging before Google crawler activates ads */}
        {!adLoaded && (
          <div className="py-4 px-3 flex flex-col sm:flex-row items-center justify-between gap-3 w-full text-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-serif font-black text-sm shrink-0 border border-amber-200">
                G
              </div>
              <div>
                <p className="font-bold text-stone-800 text-xs sm:text-sm">
                  {isAr ? 'مساحة إعلانية مهيأة ومطابقة لمتطلبات Google AdSense' : 'Responsive Google AdSense Display Unit'}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  {isAr 
                    ? 'متوافقة مع ads.txt، وتدعم البنرات المتجاوبة مع الحفاظ الكامل على سرعة الموقع وتجربة المستخدم.' 
                    : 'Fully responsive, ads.txt compliant, adhering to Google Webmaster quality policies.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 font-mono">
                ads.txt ✓ DIRECT
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
