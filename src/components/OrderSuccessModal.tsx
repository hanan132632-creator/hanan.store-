import React, { useState } from 'react';
import { 
  CheckCircle, 
  Printer, 
  PhoneCall, 
  Truck, 
  Calendar, 
  PackageCheck,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Download,
  Check
} from 'lucide-react';
import { Currency, Language, Order } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface OrderSuccessModalProps {
  order: Order | null;
  currency: Currency;
  lang: Language;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  currency,
  lang,
  onClose
}) => {
  if (!order) return null;

  const t = TRANSLATIONS[lang];
  const [downloadedIds, setDownloadedIds] = useState<Record<string, boolean>>({});

  const handleDownloadFile = (productId: string, title: string, fileName?: string) => {
    const fileData = `Hanan Store & Hanan Fun (hanan.fun)\n` +
      `====================================\n` +
      `Order Confirmation: ${order.id}\n` +
      `Purchased Item: ${title}\n` +
      `Customer Name: ${order.customer.fullName}\n` +
      `Customer Email: ${order.customer.email}\n` +
      `Date: ${order.date}\n` +
      `Domain: xn--mgblao3hjb.store (حنان.store)\n\n` +
      `Thank you for your purchase from Hanan Store!\n` +
      `Your full digital asset is now unlocked and accessible for lifetime use.`;

    const blob = new Blob([fileData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || `${title.replace(/\s+/g, '_')}_Hanan_Store.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedIds(prev => ({ ...prev, [productId]: true }));
  };

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً حنان ستور، أود تأكيد ومتابعة طلبي رقم (${order.id})\n` +
    `الاسم: ${order.customer.fullName}\n` +
    `المدينة: ${order.customer.city} - ${order.customer.district}\n` +
    `إجمالي الطلب: ${order.total} ر.س\n` +
    `طريقة الدفع: ${order.paymentMethod.toUpperCase()}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative print:m-0 print:p-0 print:border-none print:shadow-none"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Success Header Banner */}
        <div className="bg-[#18181B] text-white p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center mx-auto mb-3 shadow-lg ring-4 ring-amber-400/20">
            <CheckCircle className="w-9 h-9" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'حنان ستور • تأكيد فوري' : 'Hanan Store • Verified Order'}</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-serif text-white">
            {t.orderSuccessTitle}
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            {t.orderSuccessSub}
          </p>
        </div>

        {/* Invoice Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Order Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block">{t.orderNumber}:</span>
              <span className="font-mono font-bold text-stone-900 text-sm">{order.id}</span>
            </div>
            <div>
              <span className="text-stone-500 block flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {t.orderDate}:
              </span>
              <span className="font-bold text-stone-900">{order.date}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-500 block flex items-center gap-1">
                <Truck className="w-3 h-3 text-amber-600" />
                {t.estimatedDelivery}:
              </span>
              <span className="font-bold text-emerald-700">{t.deliveryDays}</span>
            </div>
          </div>

          {/* Customer & Shipping Summary */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-stone-500">{t.fullName}:</span>
              <span className="font-bold text-stone-900">{order.customer.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">{t.phoneNumber}:</span>
              <span className="font-mono text-stone-800">{order.customer.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">{lang === 'ar' ? 'العنوان:' : 'Address:'}</span>
              <span className="font-bold text-stone-900">{order.customer.city}، {order.customer.district || ''} - {order.customer.addressDetails}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">{t.paymentMethod}:</span>
              <span className="font-bold text-amber-800 uppercase">{order.paymentMethod}</span>
            </div>
            {order.customer.notes && (
              <div className="pt-2 border-t border-stone-200 text-stone-600">
                <span className="font-bold">{t.orderNotes}: </span>
                <span>{order.customer.notes}</span>
              </div>
            )}
          </div>

          {/* Items Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
              <PackageCheck className="w-4 h-4 text-amber-600" />
              <span>{lang === 'ar' ? 'القطع المحجوزة في طلبك:' : 'Reserved Items in Order:'}</span>
            </h4>

            <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
              {order.items.map((item, idx) => {
                const title = lang === 'ar' ? item.product.titleAr : item.product.titleEn;
                const isDigital = item.product.isDigitalFile;
                const isDownloaded = downloadedIds[item.product.id];
                return (
                  <div key={idx} className="p-3 bg-white flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={item.product.image} alt={title} className="w-10 h-10 rounded-lg object-cover" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="font-bold text-stone-900 truncate">{title}</p>
                          {isDigital && (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                              {lang === 'ar' ? 'ملف جاهز للتحميل' : 'Ready to Download'}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-500">
                          {item.quantity} × {formatPrice(item.product.price, currency, lang)}
                          {item.selectedOption && ` (${item.selectedOption})`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      {isDigital && (
                        <button
                          onClick={() => handleDownloadFile(item.product.id, title, item.product.downloadFileName)}
                          className={`py-1.5 px-3 rounded-xl font-bold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer ${
                            isDownloaded
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-xs'
                          }`}
                        >
                          {isDownloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                          <span>{isDownloaded ? (lang === 'ar' ? 'تم التحميل ✓' : 'Downloaded ✓') : (lang === 'ar' ? 'تحميل الملف الآن' : 'Download File')}</span>
                        </button>
                      )}
                      <span className="font-black text-stone-900 font-serif">
                        {formatPrice(item.product.price * item.quantity, currency, lang)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financial Totals */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5 text-xs text-stone-600">
            <div className="flex justify-between">
              <span>{t.subtotal}</span>
              <span className="font-bold text-stone-900">{formatPrice(order.subtotal, currency, lang)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>{t.discount}</span>
                <span>-{formatPrice(order.discount, currency, lang)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>{t.shipping}</span>
              <span className="font-bold text-emerald-700">{order.shipping === 0 ? t.freeShipping : formatPrice(order.shipping, currency, lang)}</span>
            </div>
            <div className="flex justify-between text-base font-black text-stone-950 pt-2 border-t border-stone-300">
              <span className="font-serif">{t.total}</span>
              <span className="font-serif text-amber-900">{formatPrice(order.total, currency, lang)}</span>
            </div>
          </div>

          {/* Action Buttons (Excluded from Print) */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 print:hidden">
            <a
              href={`https://wa.me/966500000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.whatsappConfirm}</span>
            </a>

            <button
              onClick={handlePrint}
              className="py-3 px-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t.downloadInvoice}</span>
            </button>

            <button
              onClick={onClose}
              className="py-3 px-5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>{t.backToHome}</span>
              {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
