import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Gem, 
  Shirt, 
  Gift, 
  SlidersHorizontal, 
  RotateCcw,
  Check
} from 'lucide-react';
import { Category, FilterState, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FilterBarProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  filters: FilterState;
  onUpdateFilters: (updates: Partial<FilterState>) => void;
  lang: Language;
  totalProductsCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  filters,
  onUpdateFilters,
  lang,
  totalProductsCount
}) => {
  const t = TRANSLATIONS[lang];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4 text-amber-600" />;
      case 'Gem':
        return <Gem className="w-4 h-4 text-blue-600" />;
      case 'Shirt':
        return <Shirt className="w-4 h-4 text-emerald-600" />;
      case 'Gift':
        return <Gift className="w-4 h-4 text-rose-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  const sortOptions = [
    { value: 'featured', label: t.sortFeatured },
    { value: 'rating', label: t.sortRating },
    { value: 'newest', label: t.sortNewest },
    { value: 'price-low', label: t.sortPriceAsc },
    { value: 'price-high', label: t.sortPriceDesc }
  ];

  const priceRanges = [
    { label: lang === 'ar' ? 'الكل' : 'All', min: 0, max: 2000 },
    { label: lang === 'ar' ? 'أقل من 400 ر.س' : '< 400 SAR', min: 0, max: 400 },
    { label: lang === 'ar' ? '400 - 650 ر.س' : '400 - 650 SAR', min: 400, max: 650 },
    { label: lang === 'ar' ? '+650 ر.س فاخر' : '> 650 SAR', min: 650, max: 2000 }
  ];

  const popularTags = lang === 'ar' 
    ? ['الأكثر مبيعاً', 'نيش حصري', 'طبيعي 100%', 'شحن مجاني']
    : ['Best Seller', 'Exclusive Niche', '100% Natural', 'Free Shipping'];

  const hasActiveFilters = 
    activeCategory !== 'all' || 
    filters.searchQuery !== '' || 
    filters.minPrice > 0 || 
    filters.maxPrice < 2000 || 
    filters.inStockOnly || 
    filters.activeTag !== '' ||
    filters.sortBy !== 'featured';

  const resetAll = () => {
    onSelectCategory('all');
    onUpdateFilters({
      searchQuery: '',
      minPrice: 0,
      maxPrice: 2000,
      inStockOnly: false,
      sortBy: 'featured',
      activeTag: ''
    });
  };

  return (
    <div id="catalog-filters-section" className="space-y-6 pt-4">
      
      {/* Category Horizontal Scroll Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar overscroll-x-contain touch-pan-x">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer border touch-manipulation active:scale-95 ${
                isActive
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-102 ring-2 ring-amber-400/30'
                  : 'bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-50 border-stone-200/80 shadow-xs'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
              {cat.badgeAr && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                  isActive ? 'bg-amber-400 text-stone-950' : 'bg-amber-100 text-amber-900'
                }`}>
                  {lang === 'ar' ? cat.badgeAr : cat.badgeEn}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Second Row: Refined Controls & Sorting */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Left: Price Filters & In-Stock toggle */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 me-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.priceRange}:</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {priceRanges.map((range, idx) => {
              const isSelected = filters.minPrice === range.min && filters.maxPrice === range.max;
              return (
                <button
                  key={idx}
                  onClick={() => onUpdateFilters({ minPrice: range.min, maxPrice: range.max })}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-100/90 text-amber-950 border-amber-300 font-bold'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {range.label}
                </button>
              );
            })}
          </div>

          {/* In-Stock Toggle */}
          <button
            onClick={() => onUpdateFilters({ inStockOnly: !filters.inStockOnly })}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border ms-auto sm:ms-2 ${
              filters.inStockOnly
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
          >
            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${filters.inStockOnly ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-400'}`}>
              {filters.inStockOnly && <Check className="w-2.5 h-2.5" />}
            </div>
            <span>{t.inStockOnly}</span>
          </button>
        </div>

        {/* Right: Sorting & Results Count */}
        <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100">
          <div className="text-xs text-stone-500 font-medium">
            <span className="font-bold text-stone-900">{totalProductsCount}</span> {t.itemsWord}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 hidden sm:inline">{t.sortBy}:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => onUpdateFilters({ sortBy: e.target.value as FilterState['sortBy'] })}
              className="bg-stone-50 text-stone-800 text-xs font-bold rounded-xl py-2 px-3 border border-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetAll}
                className="p-2 text-stone-500 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
                title={t.resetFilters}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Popular Luxury Tags strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-stone-400 font-medium shrink-0">{lang === 'ar' ? 'وسوم رائجة:' : 'Trending Tags:'}</span>
        {popularTags.map((tag) => {
          const isActive = filters.activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => onUpdateFilters({ activeTag: isActive ? '' : tag })}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
              }`}
            >
              #{tag}
            </button>
          );
        })}
      </div>

    </div>
  );
};
