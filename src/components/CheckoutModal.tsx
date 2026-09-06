import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  Phone, 
  User, 
  Mail, 
  MapPin, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Receipt
} from 'lucide-react';
import { CartItem, Currency, CustomerInfo, Language, Order, PaymentMethod } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  lang: Language;
  discountRate: number;
  promoCode: string;
  onOrderCompleted: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  lang,
  discountRate,
  promoCode,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    country: 'المملكة العربية السعودية',
    city: 'الرياض',
    district: '',
    addressDetails: '',
    postalCode: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mada');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculation in SAR
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * discountRate);
  const shippingFee = subtotal >= 350 || subtotal === 0 ? 0 : 35;
  const total = subtotal - discountAmount + shippingFee;
  const vatAmount = Math.round(total * 0.15); // Included in total

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customer.fullName.trim()) {
      errs.fullName = lang === 'ar' ? 'يرجى إدخال الاسم الكامل' : 'Full name is required';
    }
    if (!customer.phone.trim() || customer.phone.trim().length < 8) {
      errs.phone = lang === 'ar' ? 'يرجى إدخال رقم جوال صحيح' : 'Valid phone number is required';
    }
    if (!customer.city.trim()) {
      errs.city = lang === 'ar' ? 'يرجى تحديد المدينة' : 'City is required';
    }
    if (!customer.addressDetails.trim()) {
      errs.addressDetails = lang === 'ar' ? 'يرجى كتابة تفاصيل العنوان' : 'Address details are required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `HN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder: Order = {
        id: orderId,
        date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        items,
        customer,
        paymentMethod,
        subtotal,
        discount: discountAmount,
        vat: vatAmount,
        shipping: shippingFee,
        total,
        promoCodeApplied: promoCode || undefined,
        status: 'confirmed'
      };

      setIsSubmitting(false);
      onOrderCompleted(newOrder);
    }, 1200);
  };

  const countries = [
    'المملكة العربية السعودية',
    'الإمارات العربية المتحدة',
    'دولة الكويت',
    'سلطنة عُمان',
    'دولة قطر',
    'مملكة البحرين'
  ];

  const citiesSA = [
    'الرياض',
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام',
    'الخبر',
    'الظهران',
    'الأحساء',
    'القصيم (بريدة / عنيزة)',
    'أبها وخميس مشيط',
    'تبوك',
    'حائل',
    'الطائف',
    'جازان',
    'نجران',
    'دبي (الإمارات)',
    'أبوظبي (الإمارات)',
    'الكويت العاصمة'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative max-h-[94vh] flex flex-col"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="font-serif font-black text-stone-900 text-lg sm:text-xl flex items-center gap-2">
                <span>{t.checkoutTitle}</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                {lang === 'ar' ? 'متجر حنان ستور - الدومين المعتمد xn--mgblao3hjb.store' : 'Hanan Store - Official Domain xn--mgblao3hjb.store'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Customer and Delivery Details Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Section 1: Customer Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm border-b border-stone-100 pb-2">
                  <User className="w-4 h-4 text-amber-600" />
                  <span>{t.customerInformation}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      placeholder={t.fullNamePlaceholder}
                      className={`w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border focus:bg-white focus:outline-none transition-all ${
                        errors.fullName ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-amber-600'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-stone-400" />
                        <span>{t.phoneNumber} *</span>
                      </label>
                      <input
                        type="tel"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        placeholder={t.phoneNumberPlaceholder}
                        className={`w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border focus:bg-white focus:outline-none transition-all ${
                          errors.phone ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-amber-600'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-stone-400" />
                        <span>{t.email}</span>
                      </label>
                      <input
                        type="email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        placeholder={t.emailPlaceholder}
                        className="w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border border-stone-200 focus:bg-white focus:border-amber-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Delivery Address */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm border-b border-stone-100 pb-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'ar' ? 'عنوان الشحن والتوصيل' : 'Delivery Address'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.country}
                    </label>
                    <select
                      value={customer.country}
                      onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border border-stone-200 focus:bg-white focus:border-amber-600 focus:outline-none cursor-pointer"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.city} *
                    </label>
                    <select
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border border-stone-200 focus:bg-white focus:border-amber-600 focus:outline-none cursor-pointer"
                    >
                      {citiesSA.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.district}
                    </label>
                    <input
                      type="text"
                      value={customer.district}
                      onChange={(e) => setCustomer({ ...customer, district: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: حي النخيل / الملقا' : 'e.g. Al-Nakheel District'}
                      className="w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border border-stone-200 focus:bg-white focus:border-amber-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.addressDetails} *
                    </label>
                    <input
                      type="text"
                      value={customer.addressDetails}
                      onChange={(e) => setCustomer({ ...customer, addressDetails: e.target.value })}
                      placeholder={lang === 'ar' ? 'اسم الشارع، رقم الفيلا أو الشقة' : 'Street name, building / villa no.'}
                      className={`w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border focus:bg-white focus:outline-none ${
                        errors.addressDetails ? 'border-rose-400 ring-1 ring-rose-400' : 'border-stone-200 focus:border-amber-600'
                      }`}
                    />
                    {errors.addressDetails && <p className="text-[11px] text-rose-600 mt-1">{errors.addressDetails}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.orderNotes}
                  </label>
                  <textarea
                    rows={2}
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    placeholder={t.orderNotesPlaceholder}
                    className="w-full text-xs sm:text-sm bg-stone-50 rounded-xl p-3 border border-stone-200 focus:bg-white focus:border-amber-600 focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Section 3: Payment Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm border-b border-stone-100 pb-2">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                  <span>{t.paymentMethod}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* Mada */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'mada' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'mada'}
                      onChange={() => setPaymentMethod('mada')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.mada}</span>
                      <span className="text-[10px] text-stone-500">{lang === 'ar' ? 'خصم فوري آمن بدون رسوم' : 'Direct zero-fee debit'}</span>
                    </div>
                  </label>

                  {/* Apple Pay */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'apple_pay' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'apple_pay'}
                      onChange={() => setPaymentMethod('apple_pay')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.applePay}</span>
                      <span className="text-[10px] text-stone-500">{lang === 'ar' ? 'دفع سريع بلمسة زر واحدة' : 'One-tap biometric checkout'}</span>
                    </div>
                  </label>

                  {/* Visa / Master */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'visa' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'visa'}
                      onChange={() => setPaymentMethod('visa')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.creditCard}</span>
                      <span className="text-[10px] text-stone-500">{lang === 'ar' ? 'فيزا، ماستركارد' : 'Visa & Mastercard'}</span>
                    </div>
                  </label>

                  {/* Tabby */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'tabby' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'tabby'}
                      onChange={() => setPaymentMethod('tabby')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.tabby}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold">{formatPrice(Math.round(total / 4), currency, lang)} / {lang === 'ar' ? 'شهر' : 'mo'}</span>
                    </div>
                  </label>

                  {/* Tamara */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'tamara' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'tamara'}
                      onChange={() => setPaymentMethod('tamara')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.tamara}</span>
                      <span className="text-[10px] text-stone-500">{lang === 'ar' ? 'بدون أي فوائد أو رسوم خفية' : '0% interest installment'}</span>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/50 shadow-xs' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-stone-900 block">{t.cod}</span>
                      <span className="text-[10px] text-stone-500">{lang === 'ar' ? 'ادفع عند استلام الطرد' : 'Pay when parcel arrives'}</span>
                    </div>
                  </label>

                </div>
              </div>

            </div>

            {/* Right: Order Summary Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FAF8F5] p-5 rounded-3xl border border-stone-200 space-y-4 sticky top-4">
                
                <h4 className="font-serif font-bold text-stone-900 text-base border-b border-stone-200/80 pb-3 flex items-center justify-between">
                  <span>{lang === 'ar' ? 'ملخص الطلب الملكي' : 'Order Summary'}</span>
                  <span className="text-xs text-stone-500 font-sans">({items.length} {t.itemsWord})</span>
                </h4>

                {/* Items Mini List */}
                <div className="space-y-3 max-h-56 overflow-y-auto pe-1">
                  {items.map((item, idx) => {
                    const p = item.product;
                    const title = lang === 'ar' ? p.titleAr : p.titleEn;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={title}
                          className="w-12 h-12 rounded-xl object-cover border border-stone-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-stone-900 truncate">{title}</p>
                          <p className="text-[11px] text-stone-500">
                            {item.quantity} × {formatPrice(p.price, currency, lang)}
                            {item.selectedOption && ` (${item.selectedOption})`}
                          </p>
                        </div>
                        <span className="text-xs font-black text-stone-900 font-serif">
                          {formatPrice(p.price * item.quantity, currency, lang)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 pt-3 border-t border-stone-200 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>{t.subtotal}</span>
                    <span className="font-bold text-stone-900">{formatPrice(subtotal, currency, lang)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>{t.discount} {promoCode && `(${promoCode})`}</span>
                      <span>-{formatPrice(discountAmount, currency, lang)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-stone-400" />
                      <span>{t.shipping}</span>
                    </span>
                    <span className={`font-bold ${shippingFee === 0 ? 'text-emerald-700' : 'text-stone-900'}`}>
                      {shippingFee === 0 ? t.freeShipping : formatPrice(shippingFee, currency, lang)}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-black text-stone-950 pt-3 border-t border-stone-300">
                    <span className="font-serif">{t.total}</span>
                    <span className="font-serif text-lg text-amber-900">
                      {formatPrice(total, currency, lang)}
                    </span>
                  </div>

                  <span className="text-[10px] text-stone-400 block text-center">
                    {t.vat}
                  </span>
                </div>

                {/* Submit Order Button */}
                <button
                  id="checkout-confirm-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-4 rounded-2xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-black text-sm shadow-xl flex items-center justify-center gap-2 group transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.processingOrder}</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>{t.confirmOrder}</span>
                    </>
                  )}
                </button>

                {/* Security Trust Micro Copy */}
                <div className="pt-2 text-center text-[11px] text-stone-500 space-y-1">
                  <p className="flex items-center justify-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'دفع آمن ومشفر 100%' : '100% Encrypted & Safe'}</span>
                  </p>
                  <p>
                    {lang === 'ar' ? 'تصلك رسالة تأكيد فورية عبر الواتساب والبريد' : 'Instant WhatsApp & Email Confirmation'}
                  </p>
                </div>

              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
