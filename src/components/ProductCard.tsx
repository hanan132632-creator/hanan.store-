import React from 'react';
import { Heart, Eye, ShoppingBag, Star, Check, Download, FileText, Sparkles } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice, TRANSLATIONS } from '../data/translations';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  lang: Language;
  onAddToCart: (product: Product, e?: React.MouseEvent) => void;
  onQuickView: (product: Product) => void;
  onPreviewFile?: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  isAddedRecently?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  lang,
  onAddToCart,
  onQuickView,
  onPreviewFile,
  isWishlisted,
  onToggleWishlist,
  isAddedRecently
}) => {
  const t = TRANSLATIONS[lang];

  const title = lang === 'ar' ? product.titleAr : product.titleEn;
  const categoryName = lang === 'ar' ? product.categoryNameAr : product.categoryNameEn;

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-amber-400/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Badges Stack (Top Start) */}
        <div className="absolute top-3 start-3 flex flex-col gap-1.5 z-10">
          {product.isDigitalFile && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-900 text-amber-300 border border-amber-400/40 shadow-sm flex items-center gap-1">
              <Download className="w-3 h-3 text-amber-400" />
              <span>{lang === 'ar' ? 'ملف رقمي (hanan.fun)' : 'Digital File'}</span>
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-stone-950 shadow-sm">
              {lang === 'ar' ? 'الأكثر طلباً 🔥' : 'Best Seller'}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-600 text-white shadow-sm">
              %{discountPercent}-
            </span>
          )}
        </div>

        {/* Quick Action Floating Buttons (Top End) */}
        <div className="absolute top-3 end-3 flex flex-col gap-2 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => onToggleWishlist(product, e)}
            className={`p-2 rounded-full backdrop-blur-md shadow-md transition-all cursor-pointer ${
              isWishlisted
                ? 'bg-rose-500 text-white scale-110'
                : 'bg-white/80 hover:bg-white text-stone-700 hover:text-rose-600'
            }`}
            title={isWishlisted ? t.removeFromWishlist : t.addToWishlist}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 backdrop-blur-md shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            title={t.quickView}
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Instant Digital Delivery Badge or Stock Remaining */}
        {product.isDigitalFile ? (
          <div className="absolute bottom-2.5 start-2.5 end-2.5 py-1 px-2.5 rounded-lg bg-emerald-950/80 backdrop-blur-md text-emerald-200 text-[10px] font-semibold text-center z-10 flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{lang === 'ar' ? 'تسليم فوري ومباشر بعد الدفع' : 'Instant Direct Download'}</span>
          </div>
        ) : (
          product.stockCount <= 12 && (
            <div className="absolute bottom-2.5 start-2.5 end-2.5 py-1 px-2.5 rounded-lg bg-black/60 backdrop-blur-md text-amber-200 text-[10px] font-semibold text-center z-10">
              {t.stockRemaining} {product.stockCount} {t.pieces}
            </div>
          )
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        
        <div>
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-amber-800">
              {categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-stone-900 text-sm sm:text-base line-clamp-2 hover:text-amber-700 transition-colors cursor-pointer leading-snug"
          >
            {title}
          </h3>

          {/* Key tags or File Format Details */}
          <div className="flex flex-wrap gap-1 mt-2">
            {product.fileType && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-bold border border-amber-200/60">
                {product.fileType}
              </span>
            )}
            {(lang === 'ar' ? product.tagsAr : product.tagsEn).slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Sample Preview Button for Digital Products */}
          {product.isDigitalFile && onPreviewFile && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreviewFile(product);
              }}
              className="mt-2.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.previewFileContent}</span>
            </button>
          )}
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-stone-950 font-serif">
                {formatPrice(product.price, currency, lang)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(product.originalPrice, currency, lang)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-400 block font-sans">
              {lang === 'ar' ? 'شامل الضريبة 15%' : 'Incl. 15% VAT'}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            id={`add-to-cart-${product.id}`}
            onClick={(e) => onAddToCart(product, e)}
            className={`p-2.5 sm:px-3.5 sm:py-2 rounded-2xl flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-900 hover:bg-stone-800 text-white hover:shadow-md'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">{t.addedToCart}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">{t.addToCart}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
