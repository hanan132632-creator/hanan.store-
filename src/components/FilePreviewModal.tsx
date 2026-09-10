import React from 'react';
import { X, Sparkles, Download, CheckCircle, FileText, ShoppingBag, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface FilePreviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  lang: Language;
  onAddToCart: (product: Product) => void;
}

export const FilePreviewModal: React.FC<FilePreviewModalProps> = ({
  product,
  isOpen,
  onClose,
  currency,
  lang,
  onAddToCart
}) => {
  if (!isOpen || !product || !product.isDigitalFile) return null;

  const t = TRANSLATIONS[lang];
  const title = lang === 'ar' ? product.titleAr : product.titleEn;
  const desc = lang === 'ar' ? product.descriptionAr : product.descriptionEn;

  const handleDownloadSample = () => {
    // Generate a downloadable text/sample file
    const sampleContent = `Hanan Store (حنان.store) - Sample Preview\n` +
      `Product: ${product.titleAr} (${product.titleEn})\n` +
      `SKU: ${product.sku}\n` +
      `Format: ${product.fileType || 'Interactive PDF'}\n` +
      `Domain: xn--mgblao3hjb.store (حنان.store)\n\n` +
      `=== Sample Content Preview ===\n` +
      (product.sampleContentPreview?.join('\n') || 'Full file access is delivered upon checkout.') +
      `\n\nThank you for choosing Hanan Store!`;

    const blob = new Blob([sampleContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SAMPLE_${product.downloadFileName || 'Hanan_Digital_File.txt'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[90vh]"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Eye className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-300">
                {t.samplePreviewTitle}
              </span>
              <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base mt-0.5 truncate max-w-sm">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          
          {/* File Meta Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block">{t.fileFormatLabel}</span>
              <span className="font-bold text-stone-900">{product.fileType}</span>
            </div>
            <div>
              <span className="text-stone-500 block">{t.fileSizeLabel}</span>
              <span className="font-bold text-stone-900">{product.fileSize || 'فوري'}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-500 block">{lang === 'ar' ? 'التسليم:' : 'Delivery:'}</span>
              <span className="font-bold text-emerald-700">{t.instantDeliveryLabel}</span>
            </div>
          </div>

          {/* Sample Cards Showcase */}
          {product.sampleContentPreview && product.sampleContentPreview.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>{lang === 'ar' ? 'مقتطفات حصرية من داخل الملف:' : 'Excerpts From Inside The File:'}</span>
              </h4>

              <div className="grid grid-cols-1 gap-2.5">
                {product.sampleContentPreview.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-colors flex items-start gap-3 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-stone-800 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Feature Guarantees */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{lang === 'ar' ? 'مميزات الملف المعتمد من حنان ستور:' : 'Official Hanan Store File Features:'}</span>
            </div>
            <ul className="text-[11px] text-emerald-800 space-y-1 list-disc list-inside ps-1">
              <li>{lang === 'ar' ? 'صلاحية وصول واستخدام غير محدودة مدى الحياة' : 'Lifetime unlimited personal use & access'}</li>
              <li>{lang === 'ar' ? 'تحميل مباشر وفوري بنقرة زر بعد الدفع مباشرة' : 'Instant 1-click download immediately upon checkout'}</li>
              <li>{lang === 'ar' ? 'يعمل بدون إنترنت على جميع الجوالات والشاشات والأيباد' : 'Works 100% offline on all smartphones, tablets and TVs'}</li>
              <li>{lang === 'ar' ? 'نسخة احتياطية مرسلة لبريدك الإلكتروني ورقم الواتساب' : 'Backup copy sent directly to your WhatsApp and Email'}</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-start">
            <span className="text-stone-400 text-[11px] block">{lang === 'ar' ? 'السعر المخفض:' : 'Discounted Price:'}</span>
            <span className="text-xl font-black text-amber-950 font-serif">
              {formatPrice(product.price, currency, lang)}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownloadSample}
              className="py-2.5 px-3.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span>{lang === 'ar' ? 'تحميل عينة تجريبية' : 'Download Sample'}</span>
            </button>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span>{t.addToCart}</span>
              {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
