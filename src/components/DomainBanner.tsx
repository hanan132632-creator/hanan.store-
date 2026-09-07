import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ExternalLink, Globe, Lock, Info, X } from 'lucide-react';
import { Language } from '../types';

interface DomainBannerProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const DomainBanner: React.FC<DomainBannerProps> = ({
  lang,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  const domainPunycode = 'xn--mgblao3hjb.store';
  const domainArabic = 'حنان.store';
  const fullUrl = `https://${domainPunycode}/`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
            <Globe className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {lang === 'ar' ? 'الدومين الرسمي المعتمد' : 'OFFICIAL DOMAIN'}
              </span>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 me-1" />
                {lang === 'ar' ? 'نشط وموثق' : 'Verified'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-stone-900 font-serif mt-1">
              {lang === 'ar' ? 'نظام ربط الدومين والسيو - حنان ستور' : 'Hanan Store Domain & SEO Integration'}
            </h3>
          </div>
        </div>

        {/* Domain Display Cards */}
        <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/80 mb-5">
          <div>
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              {lang === 'ar' ? 'النطاق الدولي (Punycode):' : 'International Domain (Punycode):'}
            </span>
            <div className="flex items-center justify-between mt-1 bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="font-mono text-sm font-bold text-stone-900 select-all">
                {domainPunycode}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ' : 'Copy')}</span>
              </button>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              {lang === 'ar' ? 'النطاق باللغة العربية (IDN):' : 'Arabic Native Domain (IDN):'}
            </span>
            <div className="flex items-center justify-between mt-1 bg-white p-2.5 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900">
                {domainArabic}
              </span>
              <span className="text-xs text-stone-500 font-sans">
                {lang === 'ar' ? 'متطابق تقنياً 100%' : '100% Identical'}
              </span>
            </div>
          </div>
        </div>

        {/* Technical SEO & DNS Status Checklist */}
        <div className="space-y-2.5 mb-6 text-xs text-stone-700">
          <div className="flex items-start gap-2">
            <Lock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>
              <strong>SSL / HTTPS:</strong> {lang === 'ar' ? 'شهادة أمان مشفرة ومفعلة لنقل البيانات بسرعة وأمان كامل.' : 'Encrypted SSL certificate active for secure, rapid transaction routing.'}
            </span>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <span>
              <strong>SEO Meta & JSON-LD:</strong> {lang === 'ar' ? 'تم تضمين وسوم السيو التعريفية Schema.org و OpenGraph لدعم فهرسة جوجل التلقائية ومحركات البحث.' : 'Preconfigured with Schema.org & OpenGraph tags for instant Google search indexing.'}
            </span>
          </div>

          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
            <span>
              <strong>DNS Configuration:</strong> {lang === 'ar' ? 'يمكن توجيه سجلات A Record و CNAME لدومين xn--mgblao3hjb.store مباشرة لأي استضافة أو كلاود رن بنقرة واحدة.' : 'Ready for immediate CNAME & A Record pointing from Cloudflare / Namecheap / GoDaddy.'}
            </span>
          </div>

          <div className="flex items-start gap-2 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
            <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>
              <strong className="text-emerald-900 font-bold">{lang === 'ar' ? 'طلبات OPTIONS و CORS:' : 'OPTIONS & CORS:'}</strong>{' '}
              <span className="text-emerald-800">
                {lang === 'ar' 
                  ? 'مُفعلة بنجاح بنسبة 100% وتستجيب بـ 200 OK لفحص جوجل أدسنس وأرشفة ملفات الخريطة و ads.txt.' 
                  : 'Enabled 100% with 200 OK preflight responses for Google AdSense, sitemaps, and bots.'}
              </span>
            </span>
          </div>
        </div>

        {/* Action button */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm text-center transition-colors cursor-pointer"
          >
            {lang === 'ar' ? 'فهمت، إغلاق' : 'Got it, Close'}
          </button>
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm transition-colors"
          >
            <span>{lang === 'ar' ? 'فتح الرابط' : 'Open Link'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
