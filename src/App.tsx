import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Gift, 
  ArrowUp, 
  Search, 
  Flame, 
  ShieldCheck, 
  PackageSearch
} from 'lucide-react';
import { 
  CartItem, 
  Currency, 
  FilterState, 
  Language, 
  Order, 
  Product 
} from './types';
import { CATEGORIES, PRODUCTS } from './data/products';
import { TRANSLATIONS } from './data/translations';
import { Header } from './components/Header';
import { TopCategoryBars } from './components/TopCategoryBars';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { WishlistModal } from './components/WishlistModal';
import { DomainBanner } from './components/DomainBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { GiftAdvisorModal } from './components/GiftAdvisorModal';
import { FilePreviewModal } from './components/FilePreviewModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { BlogSection } from './components/BlogSection';
import { SearchConsoleModal } from './components/SearchConsoleModal';
import { SitemapViewerModal } from './components/SitemapViewerModal';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { TextToVideoModal } from './components/TextToVideoModal';
import { ArticleWriterModal } from './components/ArticleWriterModal';
import { AdSenseAuditModal } from './components/AdSenseAuditModal';

export default function App() {
  // Multilingual & Currency State
  const [lang, setLang] = useState<Language>('ar');
  const [currency, setCurrency] = useState<Currency>('SAR');

  // Interactive Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDomainInfoOpen, setIsDomainInfoOpen] = useState(false);
  const [isGiftAdvisorOpen, setIsGiftAdvisorOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');
  const [isSearchConsoleOpen, setIsSearchConsoleOpen] = useState(false);
  const [isSitemapViewerOpen, setIsSitemapViewerOpen] = useState(false);
  const [sitemapViewerTab, setSitemapViewerTab] = useState<'sitemap' | 'robots' | 'ads'>('sitemap');
  const [isTextToVideoOpen, setIsTextToVideoOpen] = useState(false);
  const [isArticleWriterOpen, setIsArticleWriterOpen] = useState(false);
  const [isAdSenseAuditOpen, setIsAdSenseAuditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [previewFileProduct, setPreviewFileProduct] = useState<Product | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  // Cart & Wishlist with localStorage Persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hanan_store_cart_v1');
      return saved ? JSON.parse(saved) : [
        // Seed with a default luxury piece for instant preview gratification
        { product: PRODUCTS[0], quantity: 1, selectedOption: '100 مل' }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1, selectedOption: '100 مل' }];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('hanan_store_wishlist_v1');
      return saved ? JSON.parse(saved) : [PRODUCTS[1]];
    } catch {
      return [PRODUCTS[1]];
    }
  });

  // Promo Code Engine
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountRate, setDiscountRate] = useState<number>(0);

  // Search, Category, and Filtering State
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    searchQuery: '',
    minPrice: 0,
    maxPrice: 2000,
    inStockOnly: false,
    sortBy: 'featured',
    activeTag: ''
  });

  // Keep HTML document lang & dir attributes synchronized
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar'
      ? 'Hanan Store - متجر حنان | متجر فاخر xn--mgblao3hjb.store'
      : 'Hanan Store | Luxury Boutique xn--mgblao3hjb.store';
  }, [lang]);

  // Persist Cart & Wishlist
  useEffect(() => {
    try {
      localStorage.setItem('hanan_store_cart_v1', JSON.stringify(cart));
    } catch {
      // localStorage may fail in restricted iframes
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('hanan_store_wishlist_v1', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash listener for opening AI tools directly via link or button
  useEffect(() => {
    const handleHashTools = () => {
      const hash = window.location.hash;
      if (hash === '#tool-text-to-video' || hash === '#video-tool' || hash === '#text-to-video') {
        setIsTextToVideoOpen(true);
      } else if (hash === '#tool-article-writer' || hash === '#article-tool' || hash === '#ai-writer') {
        setIsArticleWriterOpen(true);
      } else if (hash === '#adsense-audit' || hash === '#adsense-report' || hash === '#adsense') {
        setIsAdSenseAuditOpen(true);
      }
    };
    handleHashTools();
    window.addEventListener('hashchange', handleHashTools);
    return () => window.removeEventListener('hashchange', handleHashTools);
  }, []);

  // Update category when activeCategory changes
  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setFilters(prev => ({ ...prev, category: catId }));
  };

  const handleUpdateFilters = (updates: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...updates }));
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, selectedOption?: string) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.selectedOption === selectedOption
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedOption: selectedOption || product.options?.[0] }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 1800);
  };

  const handleUpdateQuantity = (productId: string, newQty: number, selectedOption?: string) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, selectedOption);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedOption === selectedOption
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string, selectedOption?: string) => {
    setCart(prev =>
      prev.filter(item => !(item.product.id === productId && item.selectedOption === selectedOption))
    );
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some(p => p.id === productId);
  };

  // Promo code validation
  const handleApplyPromoCode = (code: string) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'HANAN10' || cleaned === 'WELCOME') {
      setPromoCode(cleaned);
      setDiscountRate(0.10);
      return { 
        success: true, 
        message: lang === 'ar' ? 'تم تطبيق خصم 10% بنجاح!' : '10% discount applied!' 
      };
    }
    if (cleaned === 'GOLD') {
      setPromoCode(cleaned);
      setDiscountRate(0.15);
      return { 
        success: true, 
        message: lang === 'ar' ? 'تم تطبيق كود الذهب بخصم 15%!' : '15% Gold coupon applied!' 
      };
    }
    if (cleaned === 'VIP') {
      setPromoCode(cleaned);
      setDiscountRate(0.20);
      return { 
        success: true, 
        message: lang === 'ar' ? 'كود VIP الملكي بخصم 20%!' : 'VIP 20% discount applied!' 
      };
    }
    return { 
      success: false, 
      message: lang === 'ar' ? 'كود الخصم غير صحيح. جربي HANAN10 أو GOLD' : 'Invalid coupon code. Try HANAN10 or GOLD' 
    };
  };

  // Order completion handler
  const handleOrderCompleted = (order: Order) => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setCart([]);
    setConfirmedOrder(order);
  };

  // Filtered and Sorted Products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (activeCategory !== 'all' && product.categoryId !== activeCategory) {
        return false;
      }

      // Search query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchTitleAr = product.titleAr.toLowerCase().includes(query);
        const matchTitleEn = product.titleEn.toLowerCase().includes(query);
        const matchDesc = product.descriptionAr.toLowerCase().includes(query) || product.descriptionEn.toLowerCase().includes(query);
        const matchSku = product.sku.toLowerCase().includes(query);
        const matchTags = product.tagsAr.some(t => t.toLowerCase().includes(query)) || product.tagsEn.some(t => t.toLowerCase().includes(query));

        if (!matchTitleAr && !matchTitleEn && !matchDesc && !matchSku && !matchTags) {
          return false;
        }
      }

      // Price filter
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false;
      }

      // In-stock filter
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      // Tag filter
      if (filters.activeTag) {
        const hasTagAr = product.tagsAr.includes(filters.activeTag);
        const hasTagEn = product.tagsEn.includes(filters.activeTag);
        if (!hasTagAr && !hasTagEn) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // default: 'featured'
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategory, filters]);

  // Performance-optimized Cart metrics
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0), [cart]);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-['Cairo',sans-serif] pb-16 sm:pb-0">
      
      {/* Sticky Top Header */}
      <Header
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchQuery={filters.searchQuery}
        setSearchQuery={(q) => handleUpdateFilters({ searchQuery: q })}
        activeCategory={activeCategory}
        setActiveCategory={handleSelectCategory}
        onOpenDomainInfo={() => setIsDomainInfoOpen(true)}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }}
        onOpenSitemap={() => {
          setSitemapViewerTab('sitemap');
          setIsSitemapViewerOpen(true);
        }}
        onOpenTextToVideo={() => setIsTextToVideoOpen(true)}
        onOpenArticleWriter={() => setIsArticleWriterOpen(true)}
        onOpenAdSenseAudit={() => setIsAdSenseAuditOpen(true)}
      />

      {/* Top Three Department & Section Navigation Bars */}
      <TopCategoryBars
        lang={lang}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenGiftAdvisor={() => setIsGiftAdvisorOpen(true)}
        onOpenDomainInfo={() => setIsDomainInfoOpen(true)}
      />

      {/* Main Luxury Hero Showcase */}
      <Hero
        lang={lang}
        onExploreClick={() => {
          const el = document.getElementById('catalog-main');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCategorySelect={(catId) => {
          handleSelectCategory(catId);
          const el = document.getElementById('catalog-main');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenDomainInfo={() => setIsDomainInfoOpen(true)}
        onOpenTextToVideo={() => setIsTextToVideoOpen(true)}
        onOpenArticleWriter={() => setIsArticleWriterOpen(true)}
      />

      {/* Official Domain & Brand Guarantee Ribbon */}
      <section className="bg-stone-900 text-stone-300 py-3.5 px-4 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-mono font-bold text-amber-300">
              xn--mgblao3hjb.store
            </span>
            <span className="text-stone-400">
              ({lang === 'ar' ? 'المتجر الإلكتروني المعتمد حنان.store' : 'Verified domain for Hanan Store'})
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDomainInfoOpen(true)}
              className="text-amber-200 hover:text-white underline underline-offset-2 flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'معلومات توثيق الدومين والسيو' : 'Domain & SEO Details'}</span>
            </button>

            <span className="hidden sm:inline text-stone-600">|</span>

            <button
              onClick={() => setIsGiftAdvisorOpen(true)}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white font-bold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'ar' ? 'مستشار الهدايا الذكي' : 'Gift Advisor'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Product Catalog Section */}
      <main id="catalog-main" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Catalog Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>{lang === 'ar' ? 'كتالوج معروضات حنان ستور الفاخرة' : 'Hanan Store Haute Catalog'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif mt-1">
              {activeCategory === 'all' 
                ? (lang === 'ar' ? 'كافة المجموعات المختارة بعناية' : 'All Curated Collections')
                : (lang === 'ar' 
                    ? CATEGORIES.find(c => c.id === activeCategory)?.nameAr 
                    : CATEGORIES.find(c => c.id === activeCategory)?.nameEn)}
            </h2>
          </div>

          <p className="text-xs text-stone-500 max-w-md">
            {lang === 'ar'
              ? 'تشكيلات أصيلة تجمع بين نفحات الشرق الخالدة ودقة الصياغة الحديثة مع شحن فاخر وسريع.'
              : 'Authentic collections blending timeless oriental scents with artisan craftsmanship.'}
          </p>
        </div>

        {/* Categories, Search & Filters Bar */}
        <FilterBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          filters={filters}
          onUpdateFilters={handleUpdateFilters}
          lang={lang}
          totalProductsCount={filteredProducts.length}
        />

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                lang={lang}
                onAddToCart={(p, e) => {
                  if (e) e.stopPropagation();
                  handleAddToCart(p);
                }}
                onQuickView={(p) => setSelectedProduct(p)}
                onPreviewFile={(p) => setPreviewFileProduct(p)}
                isWishlisted={isWishlisted(product.id)}
                onToggleWishlist={handleToggleWishlist}
                isAddedRecently={recentlyAddedId === product.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/80 p-8 space-y-4">
            <div className="w-18 h-18 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
              <PackageSearch className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-stone-800 text-lg sm:text-xl">
              {t.noProductsFound}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              {t.noProductsSub}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                handleUpdateFilters({
                  searchQuery: '',
                  minPrice: 0,
                  maxPrice: 2000,
                  inStockOnly: false,
                  sortBy: 'featured',
                  activeTag: ''
                });
              }}
              className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors cursor-pointer"
            >
              {t.resetFilters}
            </button>
          </div>
        )}

      </main>

      {/* Editorial Guides & Original Content Section (Crucial for AdSense Value) */}
      <div className="content-auto">
        <BlogSection 
          lang={lang} 
          onOpenTextToVideo={() => setIsTextToVideoOpen(true)}
          onOpenArticleWriter={() => setIsArticleWriterOpen(true)}
        />
      </div>

      {/* Customer Experiences & Testimonials Section */}
      <div className="content-auto">
        <ReviewsSection lang={lang} />
      </div>

      {/* Footer with AdSense and Legal Policies */}
      <div className="content-auto">
        <Footer
          lang={lang}
          onCategorySelect={handleSelectCategory}
          onOpenDomainInfo={() => setIsDomainInfoOpen(true)}
          onOpenLegal={(tab) => {
            setLegalTab(tab);
            setIsLegalOpen(true);
          }}
          onOpenSearchConsole={() => setIsSearchConsoleOpen(true)}
          onOpenSitemapViewer={(type) => {
            setSitemapViewerTab(type);
            setIsSitemapViewerOpen(true);
          }}
          onOpenTextToVideo={() => setIsTextToVideoOpen(true)}
          onOpenArticleWriter={() => setIsArticleWriterOpen(true)}
          onOpenAdSenseAudit={() => setIsAdSenseAuditOpen(true)}
        />
      </div>

      {/* Floating Action Button: Gift Advisor */}
      <button
        id="gift-advisor-fab"
        onClick={() => setIsGiftAdvisorOpen(true)}
        className="fixed bottom-20 sm:bottom-6 start-4 sm:start-6 z-30 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 cursor-pointer border border-amber-400/40 touch-manipulation active:scale-95"
        title={lang === 'ar' ? 'مستشار الهدايا الذكي' : 'Gift Advisor'}
      >
        <Gift className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline text-xs font-bold">
          {lang === 'ar' ? 'مساعد اختيار الهدايا' : 'Gift Advisor'}
        </span>
      </button>

      {/* Back To Top Floating Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 sm:bottom-6 end-4 sm:end-6 z-30 p-3 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-xl border border-stone-200 hover:border-amber-400 transition-all cursor-pointer backdrop-blur-sm touch-manipulation active:scale-95"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        currency={currency}
        lang={lang}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, quantity, option) => handleAddToCart(product, quantity, option)}
        onPreviewSample={(product) => setPreviewFileProduct(product)}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <FilePreviewModal
        product={previewFileProduct}
        isOpen={Boolean(previewFileProduct)}
        onClose={() => setPreviewFileProduct(null)}
        currency={currency}
        lang={lang}
        onAddToCart={(prod) => {
          handleAddToCart(prod);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        lang={lang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        discountRate={discountRate}
        onApplyPromoCode={handleApplyPromoCode}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currency={currency}
        lang={lang}
        discountRate={discountRate}
        promoCode={promoCode}
        onOrderCompleted={handleOrderCompleted}
      />

      <OrderSuccessModal
        order={confirmedOrder}
        currency={currency}
        lang={lang}
        onClose={() => setConfirmedOrder(null)}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        currency={currency}
        lang={lang}
        onAddToCart={(prod) => {
          handleAddToCart(prod);
          setIsWishlistOpen(false);
          setIsCartOpen(true);
        }}
        onRemoveFromWishlist={(prod) => handleToggleWishlist(prod)}
        onQuickView={(prod) => setSelectedProduct(prod)}
      />

      <DomainBanner
        lang={lang}
        isOpen={isDomainInfoOpen}
        onClose={() => setIsDomainInfoOpen(false)}
      />

      <GiftAdvisorModal
        isOpen={isGiftAdvisorOpen}
        onClose={() => setIsGiftAdvisorOpen(false)}
        currency={currency}
        lang={lang}
        onAddToCart={(prod) => {
          handleAddToCart(prod);
          setIsGiftAdvisorOpen(false);
          setIsCartOpen(true);
        }}
        onQuickView={(prod) => {
          setIsGiftAdvisorOpen(false);
          setSelectedProduct(prod);
        }}
      />

      {/* AdSense-Compliant Legal & Policies Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        lang={lang}
        initialTab={legalTab}
        onOpenAdSenseAudit={() => setIsAdSenseAuditOpen(true)}
      />

      {/* Google AdSense Live Audit & Policy Readiness Report Modal */}
      <AdSenseAuditModal
        isOpen={isAdSenseAuditOpen}
        onClose={() => setIsAdSenseAuditOpen(false)}
        lang={lang}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }}
        onOpenSitemapViewer={(type) => {
          setSitemapViewerTab(type);
          setIsSitemapViewerOpen(true);
        }}
      />

      {/* Google EU User Consent & Global Cookie Banner */}
      <CookieConsentBanner
        lang={lang}
        onOpenPrivacyPolicy={() => {
          setLegalTab('privacy');
          setIsLegalOpen(true);
        }}
      />

      {/* Google Search Console & Sitemap Hub Modal */}
      <SearchConsoleModal
        isOpen={isSearchConsoleOpen}
        onClose={() => setIsSearchConsoleOpen(false)}
        lang={lang}
      />

      {/* XML Sitemap & System Files Viewer Modal */}
      <SitemapViewerModal
        isOpen={isSitemapViewerOpen}
        onClose={() => setIsSitemapViewerOpen(false)}
        initialTab={sitemapViewerTab}
        lang={lang}
      />

      {/* AI Text to Video Creation Tool Modal */}
      <TextToVideoModal
        isOpen={isTextToVideoOpen}
        onClose={() => setIsTextToVideoOpen(false)}
        lang={lang}
      />

      {/* AI Article & SEO Content Writer Tool Modal */}
      <ArticleWriterModal
        isOpen={isArticleWriterOpen}
        onClose={() => setIsArticleWriterOpen(false)}
        lang={lang}
      />

      {/* Mobile Dedicated Bottom Bar for Fast One-Thumb Navigation */}
      <MobileBottomNav
        lang={lang}
        currency={currency}
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlist.length}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => {
          const mobileInput = document.getElementById('mobile-search-input') || document.getElementById('desktop-search-input');
          if (mobileInput) {
            mobileInput.focus();
          } else {
            const toggleBtn = document.getElementById('mobile-search-toggle');
            if (toggleBtn) toggleBtn.click();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
