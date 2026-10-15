import React from 'react';
import { Info, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AdBannerProps {
  lang: Language;
  client?: string;
  slot?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  onOpenPolicy?: () => void;
  networkName?: string;
}

export const AdSenseBanner: React.FC<AdBannerProps> = ({
  lang,
  client,
  slot,
  format = 'auto',
  className = '',
  onOpenPolicy,
  networkName = 'إعلان ممول'
}) => {
  const isAr = lang === 'ar';

  // If no client or ad configuration is provided, do not render broken tags
  if (!client && !slot) {
    return null;
  }

  return (
    <div 
      className={`w-full max-w-5xl mx-auto my-6 p-3 rounded-2xl bg-stone-50/80 border border-stone-200/90 text-center ${className}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-stone-400 font-medium uppercase tracking-wider border-b border-stone-200/60 mb-2.5">
        <span className="flex items-center gap-1 font-bold text-stone-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span>{isAr ? `${networkName}` : 'Sponsored Advertisement'}</span>
        </span>
        
        {onOpenPolicy && (
          <button
            onClick={onOpenPolicy}
            className="hover:text-stone-700 hover:underline cursor-pointer flex items-center gap-0.5 text-[10px]"
          >
            <span>{isAr ? 'سياسة الإعلانات' : 'Ad Policy'}</span>
            <Info className="w-3 h-3" />
          </button>
        )}
      </div>

      <div className="w-full flex items-center justify-center relative overflow-hidden rounded-xl bg-transparent min-h-[90px]">
        {/* Clean container ready for any modern ad network script or banner */}
        <div id={`ad-container-${slot || 'default'}`} className="w-full flex items-center justify-center text-xs text-stone-400">
          <Sparkles className="w-4 h-4 text-amber-500/50 mr-2" />
          <span>{isAr ? 'مساحة إعلانية معتمدة' : 'Verified Ad Space'}</span>
        </div>
      </div>
    </div>
  );
};
