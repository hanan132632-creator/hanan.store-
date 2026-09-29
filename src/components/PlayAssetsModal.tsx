import React, { useState } from 'react';
import { X, Download, Image as ImageIcon, Sparkles, CheckCircle2, Smartphone, MonitorPlay, Layers, AppWindow } from 'lucide-react';
import { Language } from '../types';

interface PlayAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PlayAssetsModal: React.FC<PlayAssetsModalProps> = ({ isOpen, onClose, lang }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'gis' | 'hanan'>('gis');
  const [downloadingName, setDownloadingName] = useState<string | null>(null);

  if (!isOpen) return null;

  const triggerDownload = async (url: string, filename: string) => {
    try {
      setDownloadingName(filename);
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // Fallback
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setDownloadingName(null), 1000);
    }
  };

  const gisAssets = {
    titleAr: 'خدمات الإنترنت العالمية (Global Internet Services)',
    appIcon: {
      url: '/gis_icon_512.png',
      filename: 'gis_app_icon_512x512.png',
      titleAr: 'رمز التطبيق (App Icon) - 512 × 512 بكسل',
      specs: '512x512 PNG • خلفية شفافة/حديثة فائقة الدقة'
    },
    featureGraphic: {
      url: '/gis_feature_graphic_1024x500.jpg',
      filename: 'gis_feature_graphic_1024x500.jpg',
      titleAr: 'الرسم المميز لمتجر جوجل بلاي (1024 × 500 بكسل)',
      specs: '1024x500 JPG • مطابق لشروط Google Play بنسبة 100%'
    },
    screens: [
      {
        url: '/gis_screen_1.jpg',
        filename: 'gis_screen_1_home.jpg',
        titleAr: 'لقطة شاشة 1: الشاشة الرئيسية وحلول التحول الرقمي',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/gis_screen_2.jpg',
        filename: 'gis_screen_2_services.jpg',
        titleAr: 'لقطة شاشة 2: تصميم المواقع وحماية السيرفرات',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/gis_screen_3.jpg',
        filename: 'gis_screen_3_domains.jpg',
        titleAr: 'لقطة شاشة 3: حجز أسماء النطاقات والاستضافة',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/gis_screen_4.jpg',
        filename: 'gis_screen_4_support.jpg',
        titleAr: 'لقطة شاشة 4: متابعة المشاريع والدعم الفني 24/7',
        specs: '1080x1920 Full HD (9:16)'
      }
    ]
  };

  const hananAssets = {
    titleAr: 'متجر حنان ستور (Hanan Store)',
    appIcon: {
      url: '/hanan_icon_512.png',
      filename: 'hanan_icon_512x512.png',
      titleAr: 'رمز التطبيق (App Icon) - 512 × 512 بكسل',
      specs: '512x512 PNG • هوية البوتيك الفاخر'
    },
    featureGraphic: {
      url: '/hanan_feature_graphic_1024x500.jpg',
      filename: 'hanan_feature_graphic_1024x500.jpg',
      titleAr: 'الرسم المميز لمتجر جوجل بلاي (1024 × 500 بكسل)',
      specs: '1024x500 JPG • مطابق لشروط Google Play بنسبة 100%'
    },
    screens: [
      {
        url: '/hanan_screen_1.jpg',
        filename: 'hanan_screen_1.jpg',
        titleAr: 'لقطة شاشة 1: متجر حنان ستور - الرئيسية والعطور',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/hanan_screen_2.jpg',
        filename: 'hanan_screen_2.jpg',
        titleAr: 'لقطة شاشة 2: المنتجات الرقمية والتسليم اللحظي',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/hanan_screen_3.jpg',
        filename: 'hanan_screen_3.jpg',
        titleAr: 'لقطة شاشة 3: أجهزة الألعاب والترفيه الذكي',
        specs: '1080x1920 Full HD (9:16)'
      },
      {
        url: '/hanan_screen_4.jpg',
        filename: 'hanan_screen_4.jpg',
        titleAr: 'لقطة شاشة 4: الدفع الآمن والمحفظة الرقمية',
        specs: '1080x1920 Full HD (9:16)'
      }
    ]
  };

  const current = activeTab === 'gis' ? gisAssets : hananAssets;

  const downloadAllCurrent = async () => {
    await triggerDownload(current.appIcon.url, current.appIcon.filename);
    await new Promise(r => setTimeout(r, 300));
    await triggerDownload(current.featureGraphic.url, current.featureGraphic.filename);
    for (const s of current.screens) {
      await new Promise(r => setTimeout(r, 350));
      await triggerDownload(s.url, s.filename);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-stone-900 border border-amber-500/30 text-stone-100 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20">
              <Download className="w-5 h-5 font-bold" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {isAr ? 'مركز تحميل صور جوجل بلاي كونسول' : 'Google Play Console Assets Center'}
                <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {isAr ? 'جاهز للرفع 100%' : '100% Ready'}
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                {isAr ? 'تحميل مباشر بضغطة زر واحدة (رمز 512x512 + رسم مميز 1024x500 + لقطات الشاشة)' : 'Direct 1-click download for 512x512 Icon, 1024x500 Banner, and Screenshots'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Switcher */}
        <div className="px-4 pt-3 pb-2 bg-stone-950 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 bg-stone-900 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveTab('gis')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'gis'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <MonitorPlay className="w-4 h-4" />
              {isAr ? '🌐 تطبيق خدمات الإنترنت العالمية' : 'Global Internet Services'}
            </button>
            <button
              onClick={() => setActiveTab('hanan')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'hanan'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {isAr ? '🛍️ متجر حنان ستور' : 'Hanan Store'}
            </button>
          </div>

          {/* Download All Button */}
          <button
            onClick={downloadAllCurrent}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            {isAr ? 'تحميل جميع الصور الـ 6 معاً 📥' : 'Download All 6 Assets'}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-gradient-to-b from-stone-900 to-stone-950">
          
          {/* Section 0: App Icon 512x512 */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl bg-stone-900 flex-shrink-0">
                  <img 
                    src={current.appIcon.url} 
                    alt={current.appIcon.titleAr}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1">
                    <AppWindow className="w-4 h-4" />
                    {isAr ? '1. رمز التطبيق الرسمي (App Icon)' : '1. Official App Icon'}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">{current.appIcon.titleAr}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{current.appIcon.specs}</p>
                </div>
              </div>

              <button
                onClick={() => triggerDownload(current.appIcon.url, current.appIcon.filename)}
                disabled={downloadingName === current.appIcon.filename}
                className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                {downloadingName === current.appIcon.filename 
                  ? (isAr ? 'جاري التحميل...' : 'Downloading...') 
                  : (isAr ? 'تحميل الرمز (512x512 PNG)' : 'Download Icon (512x512)')}
              </button>
            </div>
          </div>

          {/* Section 1: Feature Graphic */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-1">
                  <ImageIcon className="w-4 h-4" />
                  {isAr ? '2. الرسم المميز (Feature Graphic)' : '2. Feature Graphic'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">{current.featureGraphic.titleAr}</h3>
                <p className="text-xs text-stone-400">{current.featureGraphic.specs}</p>
              </div>
              <button
                onClick={() => triggerDownload(current.featureGraphic.url, current.featureGraphic.filename)}
                disabled={downloadingName === current.featureGraphic.filename}
                className="self-start sm:self-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                {downloadingName === current.featureGraphic.filename 
                  ? (isAr ? 'جاري التحميل...' : 'Downloading...') 
                  : (isAr ? 'تحميل الرسم المميز (1024x500)' : 'Download Feature Graphic')}
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 aspect-[1024/500] max-h-56">
              <img 
                src={current.featureGraphic.url} 
                alt={current.featureGraphic.titleAr}
                className="w-full h-full object-contain sm:object-cover" 
              />
            </div>
          </div>

          {/* Section 2: 4 Screenshots */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-1">
                  <Smartphone className="w-4 h-4" />
                  {isAr ? '3. لقطات الشاشة الأربع (Screenshots)' : '3. 4 App Screenshots'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {isAr ? 'مطابقة لشاشات الهواتف وأجهزة التابلت 7 و 10 بوصات' : 'Compliant with Phone & 7"/10" Tablets'}
                </h3>
                <p className="text-xs text-stone-400">
                  {isAr ? 'مقاس 1080 × 1920 بكسل (Full HD) بنسبة 9:16' : '1080x1920 Full HD (9:16 ratio)'}
                </p>
              </div>
            </div>

            {/* Grid of 4 screens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {current.screens.map((screen, idx) => (
                <div key={idx} className="bg-stone-900 border border-stone-800 rounded-xl p-2.5 flex flex-col justify-between group hover:border-amber-500/50 transition-all">
                  <div className="relative rounded-lg overflow-hidden border border-stone-800 aspect-[9/16] bg-black mb-2.5">
                    <img 
                      src={screen.url} 
                      alt={screen.titleAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-2 start-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-white">
                      #{idx + 1}
                    </div>
                  </div>

                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-stone-200 line-clamp-2 leading-tight">
                      {screen.titleAr}
                    </h4>
                    <span className="text-[10px] text-stone-400 mt-1 block">1080×1920</span>
                  </div>

                  <button
                    onClick={() => triggerDownload(screen.url, screen.filename)}
                    disabled={downloadingName === screen.filename}
                    className="w-full py-1.5 px-2 rounded-lg bg-stone-800 hover:bg-cyan-600 hover:text-white text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {downloadingName === screen.filename 
                      ? (isAr ? 'جاري...' : '...') 
                      : (isAr ? `تحميل صورة #${idx + 1}` : `Download #${idx + 1}`)}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Upload Reminder Guide */}
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 space-y-1.5">
            <h5 className="font-bold flex items-center gap-1.5 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              {isAr ? 'طريقة الرفع في جوجل بلاي كونسول (بطاقة المتجر الرئيسية):' : 'Google Play Upload Steps:'}
            </h5>
            <ol className="list-decimal list-inside space-y-1 text-stone-300">
              <li>{isAr ? 'ارفعي رمز التطبيق (512×512) في خانة «رمز التطبيق» (App icon).' : 'Upload the 512x512 App icon.'}</li>
              <li>{isAr ? 'ارفعي الرسم المميز (1024×500) في خانة «الرسم المميز» (Feature graphic).' : 'Upload the 1024x500 Feature Graphic.'}</li>
              <li>{isAr ? 'ارفعي الصور الأربع في خانة «لقطات شاشة الهاتف» وخانة «لقطات شاشة جهاز لوحي مقاس 7 بوصات».' : 'Upload the 4 screenshots.'}</li>
              <li>{isAr ? 'اضغطي على زر حفظ (Save) في الأسفل وستُقبل فوراً بدون أي مشكلة!' : 'Click Save at the bottom of the page!'}</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-stone-800 bg-stone-950 flex items-center justify-between">
          <span className="text-xs text-stone-400">
            {isAr ? 'جميع الصور مطابقة 100% لمعايير Google Play Console 2026' : '100% Compliant with Google Play Console 2026'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
