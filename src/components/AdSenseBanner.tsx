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
      <div className="w-full flex items-center justify-center relative overflow-hidden rounded-xl bg-transparent">
        <ins 
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-3298241753177072"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
