import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Truck, 
  Gift, 
  Share2,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  lang: Language;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedOption?: string) => void;
  onPreviewSample?: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  lang,
  onClose,
  onAddToCart,
  onPreviewSample,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null;

  const t = TRANSLATIONS[lang];
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedOption, setSelectedOption] = useState<string>(product.options?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs'>('desc');
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const title = lang === 'ar' ? product.titleAr : product.titleEn;
  const description = lang === 'ar' ? product.descriptionAr : product.descriptionEn;
  const features = lang === 'ar' ? product.featuresAr : product.featuresEn;
  const specs = lang === 'ar' ? product.specsAr : product.specsEn;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedOption);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً حنان ستور، أود الاستفسار والطلب الفوري لمنتج: ${product.titleAr} (${product.sku}) - السعر: ${product.price} ر.س`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative max-h-[92vh] flex flex-col"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-3 border-b border-stone-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-700 font-semibold">
            <span>SKU: {product.sku}</span>
            <span className="text-stone-400">•</span>
            <span className="text-amber-900 font-bold">{lang === 'ar' ? product.categoryNameAr : product.categoryNameEn}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              title="Share link"
            >
              {shareCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
            
            {/* Gallery Column (5 cols) */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner group">
                <img
                  src={selectedImage}
                  alt={title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-4 end-4 p-2.5 rounded-full shadow-lg transition-all cursor-pointer ${
                    isWishlisted
                      ? 'bg-rose-500 text-white scale-110'
                      : 'bg-white/90 text-stone-700 hover:text-rose-600'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-18 h-18 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        selectedImage === img ? 'border-amber-500 shadow-md ring-2 ring-amber-400/30' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details & Purchase Controls (7 cols) */}
            <div className="md:col-span-6 space-y-5">
              
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-black text-stone-900">{product.rating}</span>
                <span className="text-xs text-stone-600 font-medium">({product.reviewsCount} {lang === 'ar' ? 'تقييم موثق' : 'Verified Reviews'})</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-serif leading-tight">
                {title}
              </h2>

              {/* Price Block */}
              <div className="flex items-baseline gap-3 p-3.5 bg-[#FAF8F5] rounded-2xl border border-stone-200">
                <span className="text-2xl sm:text-3xl font-black text-stone-950 font-serif">
                  {formatPrice(product.price, currency, lang)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-stone-600 line-through font-medium">
                    {formatPrice(product.originalPrice, currency, lang)}
                  </span>
                )}
                <span className="text-xs font-black text-emerald-950 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300">
                  {product.isDigitalFile ? (lang === 'ar' ? 'تحميل فوري مباشر' : 'Instant Download') : (lang === 'ar' ? 'شحن فاخر مجاني' : 'Free Luxury Shipping')}
                </span>
              </div>

              {/* Digital File Specs Strip */}
              {product.isDigitalFile && (
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-300/60 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>{lang === 'ar' ? 'تفاصيل الملف الرقمي:' : 'Digital File Details:'}</span>
                    </span>
                    {onPreviewSample && (
                      <button
                        onClick={() => onPreviewSample(product)}
                        className="text-amber-800 font-bold hover:underline cursor-pointer flex items-center gap-1 text-[11px]"
                      >
                        <span>{t.previewFileContent}</span>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] text-stone-700">
                    <span className="px-2 py-0.5 rounded bg-white border border-stone-200 font-medium">
                      {product.fileType}
                    </span>
                    {product.fileSize && (
                      <span className="px-2 py-0.5 rounded bg-white border border-stone-200 font-medium">
                        {product.fileSize}
                      </span>
                    )}
                    {product.filePagesOrItems && (
                      <span className="px-2 py-0.5 rounded bg-white border border-stone-200 font-medium">
                        {product.filePagesOrItems}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Options Selector if available */}
              {product.options && product.options.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-700">{t.selectOption}</span>
                    <span className="text-stone-500">{selectedOption}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedOption(opt)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          selectedOption === opt
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Cart */}
              <div className="flex items-center gap-3 pt-2">
                {/* Stepper */}
                <div className="flex items-center bg-stone-100 rounded-2xl p-1 border border-stone-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-white rounded-xl font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-white rounded-xl font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Main Add to Cart */}
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t.addedToCart}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-amber-300" />
                      <span>{t.addToCart}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Ordering */}
              <a
                href={`https://wa.me/966500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-2xl font-bold text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'ar' ? 'طلب فوري مباشر عبر الواتساب' : 'Order via WhatsApp Concierge'}</span>
              </a>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-100 text-center">
                <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60">
                  <ShieldCheck className="w-4 h-4 text-amber-700 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-stone-700 block">{lang === 'ar' ? 'أصلي 100%' : '100% Authentic'}</span>
                </div>
                <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60">
                  <Gift className="w-4 h-4 text-rose-700 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-stone-700 block">{lang === 'ar' ? 'تغليف هدايا ملكي' : 'Royal Giftbox'}</span>
                </div>
                <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60">
                  <Truck className="w-4 h-4 text-blue-700 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-stone-700 block">{lang === 'ar' ? 'توصيل مبرد' : 'Rapid Delivery'}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Description & Specifications Tabs */}
          <div className="pt-6 border-t border-stone-200">
            <div className="flex items-center gap-4 border-b border-stone-200 mb-4">
              <button
                onClick={() => setActiveTab('desc')}
                className={`pb-2 text-sm font-bold transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'desc'
                    ? 'border-amber-700 text-stone-950 font-black'
                    : 'border-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                {lang === 'ar' ? 'الوصف والمميزات' : 'Description & Highlights'}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-sm font-bold transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'specs'
                    ? 'border-amber-700 text-stone-950 font-black'
                    : 'border-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                {t.specifications}
              </button>
            </div>

            {activeTab === 'desc' ? (
              <div className="space-y-4 text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                <p>{description}</p>
                
                {features && features.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>{lang === 'ar' ? 'أبرز مميزات القطعة:' : 'Key Features:'}</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                          <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="text-stone-800 font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                {specs ? (
                  <dl className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {Object.entries(specs).map(([key, val]) => (
                      <div key={key} className="py-2.5 grid grid-cols-3 gap-2">
                        <dt className="font-bold text-stone-900">{key}</dt>
                        <dd className="col-span-2 text-stone-700 font-medium">{val}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-xs text-stone-700">{lang === 'ar' ? 'لا توجد مواصفات إضافية.' : 'No additional specs.'}</p>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
