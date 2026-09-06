import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, Settings, X } from 'lucide-react';
import { Language } from '../types';

interface CookieConsentBannerProps {
  lang: Language;
  onOpenPrivacyPolicy: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  lang,
  onOpenPrivacyPolicy
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hanan_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entering animation
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('hanan_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('hanan_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const isAr = lang === 'ar';

  return (
    <aside 
      id="cookie-consent-banner" 
      aria-label={isAr ? "شريط إشعار ملفات تعريف الارتباط" : "Cookie consent banner"}
      className="fixed bottom-20 sm:bottom-4 start-3 end-3 sm:start-6 sm:end-auto sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-200 p-4 animate-in slide-in-from-bottom duration-300"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-5 h-5 text-amber-700" />
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
              {isAr ? 'ملفات تعريف الارتباط وتفضيلات الخصوصية' : 'Cookies & Privacy Preferences'}
            </h4>
            <button
              onClick={handleAcceptEssential}
              className="text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
              title={isAr ? 'إغلاق' : 'Close'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-stone-600 leading-relaxed">
            {isAr
              ? 'نستخدم ملفات تعريف الارتباط وتقنيات القياس المعتمدة من Google AdSense لتحسين أدائنا وتقديم تجربة تسوق وإعلانات ملائمة. يمكنك تخصيص خياراتك أو مراجعة سياستنا المعتمدة في أي وقت.'
              : 'We use cookies and Google AdSense technologies to personalize content, ads, and analyze our traffic in compliance with global privacy policies.'}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={handleAcceptAll}
              className="py-1.5 px-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
            >
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'قبول جميع الكوكيز' : 'Accept All'}</span>
            </button>

            <button
              onClick={handleAcceptEssential}
              className="py-1.5 px-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>{isAr ? 'الضرورية فقط' : 'Essential Only'}</span>
            </button>

            <button
              onClick={onOpenPrivacyPolicy}
              className="text-[11px] font-bold text-amber-800 hover:underline cursor-pointer ms-auto"
            >
              <span>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
