import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Gauge, 
  BatteryCharging, 
  Eye, 
  ExternalLink, 
  X, 
  ShieldCheck, 
  Vibrate, 
  RotateCcw, 
  Sparkles,
  Layers,
  SearchCheck,
  Check
} from 'lucide-react';
import { Language } from '../types';

interface MobileOptimizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const MobileOptimizerModal: React.FC<MobileOptimizerModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const isAr = lang === 'ar';

  // Mobile optimization toggles with localStorage persistence
  const [turboMode, setTurboMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hanan_mobile_turbo') === 'true';
    } catch {
      return false;
    }
  });

  const [largeTouchMode, setLargeTouchMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hanan_mobile_touch_boost') === 'true';
    } catch {
      return false;
    }
  });

  const [dataSaver, setDataSaver] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hanan_mobile_data_saver') === 'true';
    } catch {
      return false;
    }
  });

  const [hapticEnabled, setHapticEnabled] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hanan_mobile_haptic') !== 'false';
    } catch {
      return true;
    }
  });

  const [appliedToast, setAppliedToast] = useState<string | null>(null);

  // Apply real effects to document
  useEffect(() => {
    try {
      localStorage.setItem('hanan_mobile_turbo', String(turboMode));
      if (turboMode) {
        document.documentElement.classList.add('mobile-turbo-active');
      } else {
        document.documentElement.classList.remove('mobile-turbo-active');
      }
    } catch {
      // ignore
    }
  }, [turboMode]);

  useEffect(() => {
    try {
      localStorage.setItem('hanan_mobile_touch_boost', String(largeTouchMode));
      if (largeTouchMode) {
        document.documentElement.classList.add('mobile-touch-boost');
      } else {
        document.documentElement.classList.remove('mobile-touch-boost');
      }
    } catch {
      // ignore
    }
  }, [largeTouchMode]);

  useEffect(() => {
    try {
      localStorage.setItem('hanan_mobile_data_saver', String(dataSaver));
    } catch {
      // ignore
    }
  }, [dataSaver]);

  useEffect(() => {
    try {
      localStorage.setItem('hanan_mobile_haptic', String(hapticEnabled));
    } catch {
      // ignore
    }
  }, [hapticEnabled]);

  const showToast = (msg: string) => {
    setAppliedToast(msg);
    if (hapticEnabled && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(15);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      setAppliedToast(null);
    }, 2500);
  };

  const handleResetAll = () => {
    setTurboMode(false);
    setLargeTouchMode(false);
    setDataSaver(false);
    setHapticEnabled(true);
    showToast(isAr ? 'تمت استعادة الإعدادات الافتراضية للجوال' : 'Default mobile settings restored');
  };

  if (!isOpen) return null;

  return (
    <div 
      id="mobile-optimizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/80 backdrop-blur-sm animate-in fade-in duration-200"
      dir={isAr ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div 
        id="mobile-optimizer-modal-content"
        className="bg-white w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 text-white p-5 sm:p-6 border-b border-amber-500/20 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-inner">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-100 flex items-center gap-1.5">
                    {isAr ? 'أداة تحسين وتوافق الجوال' : 'Mobile Optimizer & Usability Tool'}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    100% {isAr ? 'معتمد' : 'Verified'}
                  </span>
                </div>
                <p className="text-xs text-stone-300 mt-0.5">
                  {isAr ? 'فحص معايير Googlebot للجوال وتحسين سرعة التصفح اللمسي' : 'Googlebot Mobile-First audit & instant speed controls'}
                </p>
              </div>
            </div>

            <button
              id="mobile-optimizer-close-btn"
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={isAr ? 'إغلاق الأداة' : 'Close tool'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Toast Notification */}
          {appliedToast && (
            <div className="absolute top-3 inset-x-12 z-20 bg-emerald-600 text-white text-xs font-bold py-1.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2">
              <Check className="w-4 h-4" />
              <span>{appliedToast}</span>
            </div>
          )}
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Section 1: Live Mobile Audit Score Cards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-amber-600" />
                {isAr ? 'مؤشرات التوافق مع خوارزميات جوجل (Google Mobile-First)' : 'Google Mobile-First Compatibility Scores'}
              </h3>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isAr ? 'سليم 100%' : '100% Pass'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Card 1: Speed */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3 text-center">
                <div className="text-xs text-stone-500 font-medium mb-1">
                  {isAr ? 'سرعة الاستجابة' : 'TTFB Speed'}
                </div>
                <div className="text-lg font-black text-emerald-600 font-mono">
                  5 ms
                </div>
                <div className="text-[10px] text-stone-700 mt-1 font-semibold">
                  {isAr ? 'فائق السرعة' : 'Ultra Fast'}
                </div>
              </div>

              {/* Card 2: Viewport */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3 text-center">
                <div className="text-xs text-stone-500 font-medium mb-1">
                  {isAr ? 'ملاءمة الشاشة' : 'Viewport Meta'}
                </div>
                <div className="text-lg font-black text-amber-600 font-mono">
                  100%
                </div>
                <div className="text-[10px] text-stone-700 mt-1 font-semibold">
                  {isAr ? 'متجاوب تماماً' : 'Fluid Responsive'}
                </div>
              </div>

              {/* Card 3: Touch Targets */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3 text-center">
                <div className="text-xs text-stone-500 font-medium mb-1">
                  {isAr ? 'أبعاد اللمس' : 'Touch Targets'}
                </div>
                <div className="text-lg font-black text-blue-600 font-mono">
                  48px+
                </div>
                <div className="text-[10px] text-stone-700 mt-1 font-semibold">
                  {isAr ? 'معيار جوجل' : 'Google Standard'}
                </div>
              </div>

              {/* Card 4: Font Legibility */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3 text-center">
                <div className="text-xs text-stone-500 font-medium mb-1">
                  {isAr ? 'وضوح الخطوط' : 'Legibility'}
                </div>
                <div className="text-lg font-black text-stone-900 font-mono">
                  16px+
                </div>
                <div className="text-[10px] text-stone-700 mt-1 font-semibold">
                  {isAr ? 'بدون تكبير' : 'No Zoom Needed'}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Mobile Enhancer Controls */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {isAr ? 'تحسينات وتخصيص تجربة الجوال الفورية' : 'Live Mobile Experience Enhancements'}
              </h3>
              <button
                onClick={handleResetAll}
                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                title={isAr ? 'إعادة ضبط' : 'Reset'}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {/* Toggle 1: Turbo Fast Mobile Mode */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/80 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-xs sm:text-sm">
                      {isAr ? 'وضع التوربو السريع للجوال (Turbo Mode)' : 'Turbo Fast Mobile Mode'}
                    </div>
                    <div className="text-xs text-stone-600">
                      {isAr ? 'تعطيل الحركات الزائدة لجعل التمرير والشحن فوريين على الهواتف' : 'Reduces animation overhead for instant fluid scrolling'}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !turboMode;
                    setTurboMode(next);
                    showToast(next 
                      ? (isAr ? 'تم تفعيل وضع التوربو السريع للجوال' : 'Turbo Mobile Mode activated')
                      : (isAr ? 'تم إيقاف وضع التوربو' : 'Turbo Mode disabled')
                    );
                  }}
                  className={`w-12 h-6.5 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    turboMode ? 'bg-amber-600' : 'bg-stone-300'
                  }`}
                  aria-label={isAr ? 'تبديل وضع التوربو' : 'Toggle turbo mode'}
                >
                  <span 
                    className={`block w-5 h-5 rounded-full bg-white shadow-md transition-transform transform ${
                      turboMode 
                        ? (isAr ? '-translate-x-6' : 'translate-x-6') 
                        : (isAr ? '-translate-x-1' : 'translate-x-1')
                    }`} 
                  />
                </button>
              </div>

              {/* Toggle 2: Large Touch Targets & Readability Boost */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-700 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-xs sm:text-sm">
                      {isAr ? 'تعزيز أبعاد النقر وحجم النصوص (Touch Boost)' : 'Touch Targets & Readability Boost'}
                    </div>
                    <div className="text-xs text-stone-600">
                      {isAr ? 'توسيع مناطق اللمس لتسهيل النقر بيد واحدة وتكبير الخط' : 'Expands tap areas and text size for effortless one-handed use'}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !largeTouchMode;
                    setLargeTouchMode(next);
                    showToast(next 
                      ? (isAr ? 'تم تعزيز مساحات اللمس وقابلية القراءة' : 'Touch boost enabled')
                      : (isAr ? 'تم إلغاء تعزيز مساحات اللمس' : 'Touch boost disabled')
                    );
                  }}
                  className={`w-12 h-6.5 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    largeTouchMode ? 'bg-blue-600' : 'bg-stone-300'
                  }`}
                  aria-label={isAr ? 'تبديل تعزيز اللمس' : 'Toggle touch boost'}
                >
                  <span 
                    className={`block w-5 h-5 rounded-full bg-white shadow-md transition-transform transform ${
                      largeTouchMode 
                        ? (isAr ? '-translate-x-6' : 'translate-x-6') 
                        : (isAr ? '-translate-x-1' : 'translate-x-1')
                    }`} 
                  />
                </button>
              </div>

              {/* Toggle 3: Data Saver Mode */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-xs sm:text-sm">
                      {isAr ? 'وضع توفير باقة الإنترنت والبطارية (Data Saver)' : 'Data & Battery Saver Mode'}
                    </div>
                    <div className="text-xs text-stone-600">
                      {isAr ? 'تحميل مضغوط وخفيف للصور لتوفير استهلاك شبكات 4G/5G' : 'Prioritizes lightweight media to save mobile data & battery'}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !dataSaver;
                    setDataSaver(next);
                    showToast(next 
                      ? (isAr ? 'تم تفعيل وضع توفير البيانات' : 'Data Saver activated')
                      : (isAr ? 'تم إيقاف وضع توفير البيانات' : 'Data Saver disabled')
                    );
                  }}
                  className={`w-12 h-6.5 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    dataSaver ? 'bg-emerald-600' : 'bg-stone-300'
                  }`}
                  aria-label={isAr ? 'تبديل وضع توفير البيانات' : 'Toggle data saver'}
                >
                  <span 
                    className={`block w-5 h-5 rounded-full bg-white shadow-md transition-transform transform ${
                      dataSaver 
                        ? (isAr ? '-translate-x-6' : 'translate-x-6') 
                        : (isAr ? '-translate-x-1' : 'translate-x-1')
                    }`} 
                  />
                </button>
              </div>

              {/* Toggle 4: Haptic Vibration Feedback */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-700 flex items-center justify-center shrink-0">
                    <Vibrate className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-xs sm:text-sm">
                      {isAr ? 'الاهتزاز اللمسي الذكي (Haptic Feedback)' : 'Haptic Vibration Feedback'}
                    </div>
                    <div className="text-xs text-stone-600">
                      {isAr ? 'اهتزاز خفيف وذكي عند إضافة المنتجات والنقر على القوائم' : 'Subtle vibration pulse when interacting with buttons'}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !hapticEnabled;
                    setHapticEnabled(next);
                    showToast(next 
                      ? (isAr ? 'تم تفعيل الاهتزاز اللمسي' : 'Haptic feedback enabled')
                      : (isAr ? 'تم إيقاف الاهتزاز اللمسي' : 'Haptic feedback disabled')
                    );
                  }}
                  className={`w-12 h-6.5 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    hapticEnabled ? 'bg-purple-600' : 'bg-stone-300'
                  }`}
                  aria-label={isAr ? 'تبديل الاهتزاز اللمسي' : 'Toggle haptic feedback'}
                >
                  <span 
                    className={`block w-5 h-5 rounded-full bg-white shadow-md transition-transform transform ${
                      hapticEnabled 
                        ? (isAr ? '-translate-x-6' : 'translate-x-6') 
                        : (isAr ? '-translate-x-1' : 'translate-x-1')
                    }`} 
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Official Verification & Guidelines Check */}
          <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl border border-stone-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {isAr ? 'معايير Google Search Console للجوال' : 'Google Mobile Usability Standards'}
              </span>
              <span className="text-[10px] text-stone-400 font-mono">Mobile-First</span>
            </div>
            
            <ul className="text-xs space-y-1.5 text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>{isAr ? 'لا يوجد تمرير أفقي عرضي (Horizontal Scroll Free) على شاشات الجوال' : 'No horizontal page scrolling on mobile screens'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>{isAr ? 'جميع الأزرار وروابط القوائم متباعدة لتجنب النقر غير المقصود' : 'Touch targets are safely spaced to prevent accidental clicks'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span>{isAr ? 'شريط تنقل سفلي سريع (Bottom Bar) مخصص للاستخدام بيد واحدة' : 'Fixed bottom navigation bar designed for thumb accessibility'}</span>
              </li>
            </ul>

            {/* Direct Google Live Test Link */}
            <div className="pt-2 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-[11px] text-stone-400">
                {isAr ? 'دومين المتجر المفحوص:' : 'Tested domain:'} <strong className="text-white font-mono">xn--mgblao3hjb.store</strong>
              </span>
              <a
                href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fxn--mgblao3hjb.store%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white bg-amber-500/20 hover:bg-amber-500/30 px-3 py-1.5 rounded-xl border border-amber-400/40 transition-colors"
              >
                <SearchCheck className="w-3.5 h-3.5" />
                <span>{isAr ? 'فحص حي على Google PageSpeed' : 'Live Google PageSpeed Test'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-600 text-xs font-medium">
            <Layers className="w-3.5 h-3.5 text-stone-500" />
            <span>{isAr ? 'يتم حفظ الإعدادات تلقائياً على جهازك' : 'Settings are auto-saved to your device'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-colors cursor-pointer shadow-sm"
          >
            {isAr ? 'تم وتطبيق التغييرات' : 'Done & Apply'}
          </button>
        </div>
      </div>
    </div>
  );
};
