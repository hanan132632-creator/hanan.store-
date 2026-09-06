export type Language = 'ar' | 'en';

export type Currency = 'SAR' | 'AED' | 'KWD' | 'USD';

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  iconName: string;
  badgeAr?: string;
  badgeEn?: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface Product {
  id: string;
  sku: string;
  titleAr: string;
  titleEn: string;
  categoryId: string;
  categoryNameAr: string;
  categoryNameEn: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  specsAr?: Record<string, string>;
  specsEn?: Record<string, string>;
  options?: string[]; // e.g. sizes or volumes
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  isLuxuryNiche?: boolean;
  tagsAr: string[];
  tagsEn: string[];
  isDigitalFile?: boolean;
  fileType?: string;
  fileSize?: string;
  filePagesOrItems?: string;
  sampleContentPreview?: string[];
  downloadFileName?: string;
  canvaTemplateLink?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  district: string;
  addressDetails: string;
  postalCode?: string;
  notes?: string;
}

export type PaymentMethod = 'mada' | 'apple_pay' | 'visa' | 'tabby' | 'tamara' | 'cod';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  customer: CustomerInfo;
  paymentMethod: PaymentMethod;
  subtotal: number;
  discount: number;
  vat: number;
  shipping: number;
  total: number;
  promoCodeApplied?: string;
  status: 'confirmed' | 'processing' | 'shipped';
}

export interface FilterState {
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  activeTag: string;
}
