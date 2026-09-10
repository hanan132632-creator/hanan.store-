import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    nameAr: 'جميع الملفات والمعروضات',
    nameEn: 'All Files & Collections',
    iconName: 'Sparkles',
    descriptionAr: 'تشكيلة ملفات وألعاب حنان ستور الرقمية والفاخرة لعام 2026',
    descriptionEn: 'Hanan Store Digital Files & 2026 Catalog'
  },
  {
    id: 'fun-games',
    nameAr: 'ملفات الألعاب والفعاليات',
    nameEn: 'Interactive Games & Fun Files',
    iconName: 'Gamepad',
    badgeAr: 'الأكثر تحميلاً 🔥',
    badgeEn: 'Top Download',
    descriptionAr: 'ألعاب تفاعلية وبوربوينت مسابقات وتحديات ممتعة لجمعات العائلة والأصدقاء',
    descriptionEn: 'Interactive gathering games, trivia, and icebreakers for families & friends'
  },
  {
    id: 'planners',
    nameAr: 'البلانرات والمخططات الرقمية',
    nameEn: 'Digital Planners & Organizers',
    iconName: 'Calendar',
    badgeAr: 'أيباد وتابلت',
    badgeEn: 'iPad & Tablet',
    descriptionAr: 'مخططات رقمية تفاعلية بـ Hyperlinks لأجهزة الأيباد وتطبيقات GoodNotes',
    descriptionEn: 'Hyperlinked interactive digital planners for iPad, GoodNotes & tablets'
  },
  {
    id: 'templates',
    nameAr: 'قوالب كانفا والتصاميم',
    nameEn: 'Canva & Design Templates',
    iconName: 'Layout',
    badgeAr: 'تعديل فوري',
    badgeEn: 'Instant Edit',
    descriptionAr: 'قوالب سوشيال ميديا وبطاقات إهداء وهوية بصرية مفتوحة وقابلة للتعديل بكبسة زر',
    descriptionEn: 'Ready-to-edit Canva templates for social media, branding & greeting cards'
  },
  {
    id: 'guides',
    nameAr: 'أدلة التجارة والكتب الرقمية',
    nameEn: 'E-Books & Business Guides',
    iconName: 'BookOpen',
    badgeAr: 'محتوى قيّم',
    badgeEn: 'Valuable Content',
    descriptionAr: 'أدلة شاملة لكيفية إطلاق المنتجات الرقمية والتجارة الإلكترونية والربح الذاتي',
    descriptionEn: 'Step-by-step master guides for launching digital products and e-commerce'
  },
  {
    id: 'bundles',
    nameAr: 'البكجات الشاملة والحزم الكبرى',
    nameEn: 'All-in-One Digital Bundles',
    iconName: 'Gift',
    badgeAr: 'وفر 65%',
    badgeEn: 'Save 65%',
    descriptionAr: 'حزم رقمية تجمع جميع ألعاب وبلانرات وقوالب المتجر في ملف واحد بسعر رمزي',
    descriptionEn: 'All-inclusive digital bundles containing all games, templates, and planners'
  },
  {
    id: 'luxury',
    nameAr: 'مجموعة حنان الفاخرة (عطور وهدايا)',
    nameEn: 'Hanan Royal Scents & Gifts',
    iconName: 'Flame',
    badgeAr: 'توصيل فاخر',
    badgeEn: 'Luxury Delivery',
    descriptionAr: 'عطور ملكية نيش وبكجات إهداء فاخرة مجهزة بتغليف مخملي أنيق',
    descriptionEn: 'Artisan royal perfumes and signature gift boxes'
  }
];

export const PRODUCTS: Product[] = [
  // --- 1. DIGITAL FILES: FUN & GAMES ---
  {
    id: 'hn-file-games-01',
    sku: 'FUN-GAME-001',
    titleAr: 'ملف لعبة جمعات حنان التفاعلية الكبرى (150 تحدي وسؤال وجولة ضحك)',
    titleEn: 'Hanan Ultimate Gathering Game (150 Interactive Challenges & Trivia)',
    categoryId: 'fun-games',
    categoryNameAr: 'ملفات الألعاب والفعاليات',
    categoryNameEn: 'Interactive Games & Fun Files',
    price: 49,
    originalPrice: 120,
    rating: 5.0,
    reviewsCount: 384,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'الملف الأكثر طلباً وشهرة في متجر حنان! ملف تفاعلي ممتع جداً صُمم خصيصاً للجمعات العائلية وجمعات الأصدقاء والمناسبات. يحتوي على 150 شريحة وسؤال تفاعلي يشمل: فقرة "مين فينا؟"، وتحدي "أسرع إجابة"، وألغاز ذكاء، ومواقف محرجة مضحكة، ومسابقة بدون كلام. يعمل بكفاءة على شاشات التلفزيون الذكية والأيباد والجوالات بصيغة بوربوينت وPDF تفاعلي بنقرة زر.',
    descriptionEn: 'The flagship bestselling file on Hanan Store! An ultra-entertaining interactive gathering party game featuring 150 slides with fun rounds: "Who is Most Likely To?", Rapid Fire, Hilarious Scenarios, and Charades. Plays seamlessly on Smart TVs, iPads, and smartphones.',
    featuresAr: [
      'تحميل فوري مباشر بعد الدفع بثوانٍ معدودة',
      'صيغتان مرفقتان: بوربوينت تفاعلي (PPTX) + ملف PDF جاهز للعرض',
      'مناسب لجميع الأعمار (جمعات بنات، عائلة، شباب، مناسبات العيد)',
      'يعمل على شاشات التلفزيون الذكية، الأيباد، الجوال، واللابتوب بدون إنترنت',
      'استخدام مفتوح ودائم مدى الحياة بدون أي اشتراكات شهرية'
    ],
    featuresEn: [
      'Instant direct download within seconds of purchase',
      'Two formats included: Interactive PowerPoint (PPTX) + Hyperlinked PDF',
      'Family-friendly for all ages, holidays, and social gatherings',
      'Runs offline on Smart TVs, iPads, phones, and laptops',
      'Lifetime unlimited personal access with zero subscriptions'
    ],
    specsAr: {
      'نوع الملف': 'بوربوينت تفاعلي + PDF عالي الدقة',
      'عدد الشرائح / الأسئلة': '150 شريحة تفاعلية مع مؤثرات وانتقالات',
      'حجم الملف': '28 ميجابايت',
      'طريقة التسليم': 'تحميل فوري عبر الموقع + رابط مرسل للواتساب والإيميل'
    },
    specsEn: {
      'File Format': 'Interactive PowerPoint (PPTX) + High-Res PDF',
      'Slides / Questions': '150 interactive animated slides',
      'File Size': '28 MB',
      'Delivery Method': 'Instant on-screen download + WhatsApp & Email link'
    },
    options: ['نسخة الجوال والأيباد (PDF)', 'نسخة الشاشات واللابتوب (بوربوينت + PDF)'],
    inStock: true,
    stockCount: 9999,
    isFeatured: true,
    isBestSeller: true,
    isDigitalFile: true,
    fileType: 'بوربوينت تفاعلي + PDF',
    fileSize: '28 MB',
    filePagesOrItems: '150 شريحة تفاعلية',
    downloadFileName: 'Hanan_Fun_Gathering_Game_2026.zip',
    sampleContentPreview: [
      'فقرة مين فينا: من أكثر شخص يضيع مفاتيحه؟',
      'تحدي الثواني الخمس: اذكر 3 أشياء مستحيل تسافر بدونها!',
      'جولة تمثيل بدون كلام: أفلام ومسلسلات خليجية مشهورة',
      'سؤال الصراحة والضحك: أغرب موقف صار لك بمناسبة رسمية'
    ],
    tagsAr: ['الأكثر طلباً', 'تحميل فوري', 'جمعات وعائلة', 'بوربوينت'],
    tagsEn: ['Top Download', 'Instant Delivery', 'Gatherings', 'PowerPoint']
  },
  {
    id: 'hn-file-games-02',
    sku: 'FUN-GAME-002',
    titleAr: 'ملف لعبة "تحدي مين فينا؟" و "كشف الأسرار" - نسخة البنات والجلسات الخاصة',
    titleEn: 'Girls Night & Besties Icebreaker Game (Interactive PDF Edition)',
    categoryId: 'fun-games',
    categoryNameAr: 'ملفات الألعاب والفعاليات (Hanan Fun)',
    categoryNameEn: 'Interactive Games & Fun Files',
    price: 35,
    originalPrice: 75,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'لعبة مصممة خصيصاً لجلسات البنات والصديقات! تحتوي على أكثر من 90 سؤال وتحدي مرح وصريح يكشف خبايا الشخصيات ويشعل أجواء الجلسة بالضحك والمرح. تأتي بتصميم أنيق وبناتي متوافق بالكامل مع الجوال والأيباد مع أزرار تنقل تفاعلية.',
    descriptionEn: 'Curated specifically for girls nights and close friends! Over 90 hilarious, witty, and deep conversation starters, trivia, and voting questions. Designed with chic aesthetics for smartphones and tablets.',
    featuresAr: [
      'أكثر من 90 سؤال صراحة وتصويت عفوي',
      'تصميم أنيق بألوان باستيل راقية وسهلة القراءة',
      'أزرار تفاعلية للتنقل بين الأسئلة بلمسة واحدة',
      'تحميل مباشر فوري وصلاحية استخدام دائمة'
    ],
    featuresEn: [
      'Over 90 witty questions and voting rounds',
      'Chic pastel aesthetic with legible typography',
      'One-tap interactive navigation buttons',
      'Instant direct download and lifetime validity'
    ],
    specsAr: {
      'نوع الملف': 'PDF تفاعلي (Interactive Mobile PDF)',
      'عدد الصفحات': '95 صفحة وبطاقة',
      'حجم الملف': '14 ميجابايت',
      'التوافق': 'جميع هواتف آيفون وأندرويد وأجهزة الأيباد'
    },
    specsEn: {
      'Format': 'Interactive Mobile PDF',
      'Cards / Pages': '95 interactive cards',
      'Size': '14 MB',
      'Compatibility': 'iPhone, Android, iPad & Tablets'
    },
    inStock: true,
    stockCount: 9999,
    isFeatured: false,
    isBestSeller: true,
    isDigitalFile: true,
    fileType: 'PDF تفاعلي للجوال',
    fileSize: '14 MB',
    filePagesOrItems: '95 بطاقة تفاعلية',
    downloadFileName: 'Hanan_Girls_Night_Game.pdf',
    sampleContentPreview: [
      'لو كنا بعالم ديزني، مين مننا تكون الشريرة ومين الأميرة؟',
      'مين أكثر وحدة تسوي تسوق إلكتروني وهي نايمة؟',
      'تحدي: ورّونا آخر صورة حفظتوها في ألبوم الصور فوراً!'
    ],
    tagsAr: ['جلسات بنات', 'تحميل فوري', 'تصميم أنيق'],
    tagsEn: ['Girls Night', 'Instant Download', 'Chic Design']
  },

  // --- 2. DIGITAL FILES: PLANNERS (البلانرات والمخططات الرقمية) ---
  {
    id: 'hn-file-planner-01',
    sku: 'PLN-2026-001',
    titleAr: 'مخطط حنان الرقمي الملكي 2026 للأيباد والتابلت (Hyperlinked GoodNotes & PDF)',
    titleEn: 'Hanan 2026 Imperial Digital Planner for iPad & Tablets (Hyperlinked PDF)',
    categoryId: 'planners',
    categoryNameAr: 'البلانرات والمخططات الرقمية',
    categoryNameEn: 'Digital Planners & Organizers',
    price: 59,
    originalPrice: 150,
    rating: 5.0,
    reviewsCount: 298,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'المخطط الأكثر تنظيماً وفخامة لعام 2026! ملف رقمي تفاعلي متكامل يحتوي على أكثر من 450 صفحة مزودة بروابط تشعبية ذكية (Hyperlinks) فائقة السرعة للتنقل الفوري بين الأشهر والأسابيع والأيام بنقرة قلم واحدة. يشتمل على: تقويم سنوي، منظم أسبوعي، جدول يومي بالمواعيد والمهام، متتبع عادات، ميزانية شخصية، منظم صحي ونفسي، بالإضافة إلى حزمة 500+ ستيكر رقمي مذهب مجاناً.',
    descriptionEn: 'The ultimate 2026 digital life organizer! Over 450 hyperlinked pages allowing instantaneous tab switching with your Apple Pencil. Includes annual views, weekly layouts, hourly daily planning, habit trackers, financial budgets, and 500+ complimentary luxury digital stickers.',
    featuresAr: [
      'أكثر من 450 صفحة تفاعلية بروابط تشعبية فورية وسريعة جداً',
      'متوافق 100% مع تطبيقات GoodNotes 5/6 و Notability و CollaNote و Xodo',
      'يحتوي على متتبع العادات الشهرية والميزانية المالية اليومية',
      'هدية مرفقة: باقة 500+ ستيكر وملصق رقمي بصيغة PNG شفافة ومجهزة للنسخ',
      'يدعم التكبير عالي الدقة دون أي فقدان للجودة Retina Display'
    ],
    featuresEn: [
      'Over 450 hyperlinked pages with instant navigation tabs',
      '100% compatible with GoodNotes 5/6, Notability, CollaNote & Xodo',
      'Includes habit trackers, daily planners, and personal finance sheets',
      'Bonus gift: 500+ pre-cropped digital stickers in transparent PNG',
      'Optimized for iPad Pro, Air, Mini, and Galaxy Tab displays'
    ],
    specsAr: {
      'صيغة الملف': 'PDF تفاعلي ذكي + حزمة ستيكرات ZIP',
      'عدد الصفحات': '468 صفحة كاملة بروابط فائقة السرعة',
      'اللغة': 'عربي وأرقام إنجليزية واضحة',
      'التطبيقات المدعومة': 'GoodNotes, Notability, Noteshelf, Samsung Notes'
    },
    specsEn: {
      'Format': 'Hyperlinked Smart PDF + Digital Stickers ZIP',
      'Pages': '468 full interactive pages',
      'Language': 'Arabic & English bilingual layout',
      'Apps Supported': 'GoodNotes, Notability, Samsung Notes, Xodo'
    },
    options: ['النسخة الذهبية الكلاسيكية', 'نسخة الروز جولد الفاخرة'],
    inStock: true,
    stockCount: 9999,
    isFeatured: true,
    isBestSeller: true,
    isDigitalFile: true,
    fileType: 'PDF تفاعلي + ستيكرات GoodNotes',
    fileSize: '42 MB',
    filePagesOrItems: '468 صفحة تفاعلية',
    downloadFileName: 'Hanan_Digital_Planner_2026_Edition.zip',
    sampleContentPreview: [
      'صفحة رؤية وأهداف عام 2026 والخطة الربعية',
      'المخطط الشهري مع خانات تتبع المصاريف والالتزامات',
      'جدول اليوم التفصيلي بالساعات ومربعات الإنجاز والامتنان',
      'سجل متابعة شرب الماء والرياضة وساعات النوم'
    ],
    tagsAr: ['بلانر 2026', 'أيباد وتابلت', 'جود نوتس', 'تحميل فوري'],
    tagsEn: ['Planner 2026', 'iPad & GoodNotes', 'Hyperlinked', 'Instant Download']
  },
  {
    id: 'hn-file-planner-02',
    sku: 'PLN-FIN-002',
    titleAr: 'شيت ميزانية حنان الذكية لإدارة الرواتب والادخار (Excel & Google Sheets)',
    titleEn: 'Hanan Smart Personal Finance & Budget Tracker (Excel & Google Sheets)',
    categoryId: 'planners',
    categoryNameAr: 'البلانرات والمخططات الرقمية',
    categoryNameEn: 'Digital Planners & Organizers',
    price: 39,
    originalPrice: 89,
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'تحكمي بأموالك ومصاريفك كالمحترفين! جدول ذكي مبرمج بالكامل يقوم باحتساب الرواتب، وتوزيع المصاريف على قاعدة 50/30/20، وتتبع الادخار الشهري والاستثمارات، وتنبيهات تجاوز الميزانية برسوم بيانية آلية ودقيقة. متوافق مع جوالك والكمبيوتر عبر قوقل شيتس وإكسل.',
    descriptionEn: 'Master your finances effortlessly! Automated personal budget template based on the 50/30/20 rule, with interactive dashboards, savings goals trackers, and expense category analytics for Google Sheets & Excel.',
    featuresAr: [
      'حسابات تلقائية بالكامل (أدخلي الأرقام والجدول يحسب كل شيء آلياً)',
      'لوحة تحكم تفاعلية (Dashboard) برسوم بيانية توضح أين تذهب أموالك',
      'يعمل على قوقل شيتس السحابي المجاني أو برنامج إكسل على الكمبيوتر والجوال',
      'شرح فيديو تفصيلي لكيفية استخدام الشيت في دقيقتين'
    ],
    featuresEn: [
      'Fully automated formulas and financial calculations',
      'Visual interactive dashboard showing your spending breakdown',
      'Compatible with free Google Sheets & Microsoft Excel',
      'Includes quick 2-minute video walkthrough guide'
    ],
    specsAr: {
      'صيغة الملف': 'رابط قوقل شيتس مباشر + ملف Microsoft Excel (.xlsx)',
      'العملات المدعومة': 'الريال السعودي، الدرهم الإماراتي، الدينار، والدولار',
      'حجم الملف': 'ملف سحابي خفيف وسريع الفتح'
    },
    specsEn: {
      'Format': 'Google Sheets Direct Link + Microsoft Excel (.xlsx)',
      'Currencies': 'SAR, AED, KWD, USD adaptable'
    },
    inStock: true,
    stockCount: 9999,
    isFeatured: false,
    isBestSeller: true,
    isDigitalFile: true,
    fileType: 'جداول إكسل + قوقل شيتس',
    fileSize: '3 MB',
    filePagesOrItems: 'لوحة تحكم + 12 شهر',
    downloadFileName: 'Hanan_Smart_Budget_Tracker_2026.xlsx',
    tagsAr: ['إدارة أموال', 'إكسل ذكي', 'قوقل شيتس', 'توفير'],
    tagsEn: ['Finance', 'Excel', 'Google Sheets', 'Savings']
  },

  // --- 3. DIGITAL FILES: CANVA TEMPLATES (قوالب كانفا والتصاميم) ---
  {
    id: 'hn-file-canva-01',
    sku: 'CNV-TMP-001',
    titleAr: 'حزمة قوالب كانفا الذهبية للمتاجر والسوشيال ميديا (120+ قالب قابل للتعديل)',
    titleEn: 'Hanan Luxe Canva Social Media & E-Commerce Kit (120+ Editable Templates)',
    categoryId: 'templates',
    categoryNameAr: 'قوالب كانفا والتصاميم',
    categoryNameEn: 'Canva & Design Templates',
    price: 45,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 182,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'حوّلي حسابك أو متجرك إلى علامة تجارية فاخرة في دقائق! حزمة ضخمة تضم أكثر من 120 قالب كانفا مصممة بأعلى معايير الفخامة والاحترافية: بوستات انستقرام، ستوريات تفاعلية، إعلانات عروض، أوراق تقييمات العملاء، وأغلفة هايلايت. تُفتح برابط واحد وتعدلين عليها بسهولة على تطبيق كانفا المجاني من جوالك.',
    descriptionEn: 'Transform your brand or storefront aesthetic in minutes! Over 120 luxury Canva templates: Instagram posts, interactive stories, sale announcements, customer reviews, and highlight covers. 100% editable on free Canva.',
    featuresAr: [
      'تعديل فوري من الجوال أو الكمبيوتر عبر حساب كانفا المجاني أو برو',
      'خطوط عربية ملكية وصور عالية الدقة مشمولة ومجانية بالكامل',
      'تشمل بوستات المنتجات، الخصومات، آراء العملاء، وأسئلة التفاعل',
      'رابط وصول دائم مع إمكانية تكرار وتغيير الألوان والنصوص بلا حدود'
    ],
    featuresEn: [
      'Instant editing on mobile or desktop via Free or Pro Canva',
      'Includes curated Arabic luxury typography and high-res photography',
      'Covers product showcases, promotions, testimonials & stories',
      'Lifetime access link with unlimited color & text customization'
    ],
    specsAr: {
      'المنصة': 'Canva (رابط استخدام مباشر للقوالب)',
      'عدد القوالب': '120+ قالب بوست وستوري',
      'النوع': 'هوية بصرية فاخرة وألوان عاجية وذهبية'
    },
    specsEn: {
      'Platform': 'Canva (Direct template link)',
      'Template Count': '120+ Posts & Stories'
    },
    inStock: true,
    stockCount: 9999,
    isFeatured: true,
    isBestSeller: false,
    isDigitalFile: true,
    fileType: 'رابط قوالب كانفا المباشر',
    fileSize: 'رابط سحابي فوري',
    filePagesOrItems: '120+ قالب كانفا',
    canvaTemplateLink: 'https://canva.com/templates/hanan-store-luxe-pack',
    downloadFileName: 'Hanan_Canva_Templates_Access.pdf',
    tagsAr: ['قوالب كانفا', 'سوشيال ميديا', 'تعديل فوري', 'تصاميم'],
    tagsEn: ['Canva Templates', 'Social Media', 'Instant Edit']
  },

  // --- 4. DIGITAL FILES: GUIDES & E-BOOKS (أدلة التجارة والكتب الرقمية) ---
  {
    id: 'hn-file-guide-01',
    sku: 'GUD-DIG-001',
    titleAr: 'دليل حنان الشامل لإنشاء وبيع المنتجات الرقمية (من الفكرة حتى أول 10,000 ر.س)',
    titleEn: 'Hanan Blueprint to Launching & Selling Profitable Digital Products (A to Z)',
    categoryId: 'guides',
    categoryNameAr: 'أدلة التجارة والكتب الرقمية',
    categoryNameEn: 'E-Books & Business Guides',
    price: 65,
    originalPrice: 160,
    rating: 5.0,
    reviewsCount: 143,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'الكتاب الإرشادي الأكثر وضوحاً وعملية لدخول عالم المنتجات الرقمية بدون رأس مال وبدون تخزين! يشرح خطوة بخطوة: كيفية صناعة ملفات الألعاب والبلانرات والقوالب، وكيفية إنشاء متجر إلكتروني جذاب، وطرق التسويق الفيروسي على تيك توك وانستقرام، وبوابات الدفع الإلكترونية في السعودية والخليج.',
    descriptionEn: 'The definitive pragmatic handbook for generating passive income through digital assets. Covers product creation, store setup, viral TikTok marketing strategies, and payment gateway configuration across the GCC.',
    featuresAr: [
      '85 صفحة من الخطوات التطبيقية المباشرة بدون حشو أو تنظير',
      'قائمة بأفضل 50 فكرة منتج رقمي مطلوبة في السوق العربي حالياً',
      'نصوص ورسائل تسويقية جاهزة للنسخ والاستخدام في الإعلانات',
      'دليل إعداد متجر إلكتروني وربط الدفع التلقائي خطوة بخطوة'
    ],
    featuresEn: [
      '85 pages of actionable step-by-step guidance',
      'List of top 50 in-demand digital product niches in the GCC',
      'Ready-to-use copy templates for social media advertising',
      'Guide to store setup and instant payment automation'
    ],
    specsAr: {
      'نوع الملف': 'كتاب إلكتروني E-Book بصيغة PDF عالي الجودة',
      'عدد الصفحات': '85 صفحة ممتلئة بالمعلومات العملية',
      'حجم الملف': '12 ميجابايت'
    },
    specsEn: {
      'Format': 'High-Res E-Book PDF',
      'Pages': '85 pages',
      'Size': '12 MB'
    },
    inStock: true,
    stockCount: 9999,
    isFeatured: false,
    isBestSeller: true,
    isDigitalFile: true,
    fileType: 'كتاب إلكتروني PDF',
    fileSize: '12 MB',
    filePagesOrItems: '85 صفحة عملية',
    downloadFileName: 'Hanan_Digital_Products_Master_Guide.pdf',
    tagsAr: ['تجارة رقمية', 'دخل إضافي', 'كتاب إلكتروني', 'شرح عملي'],
    tagsEn: ['Digital Business', 'Passive Income', 'E-Book']
  },

  // --- 5. DIGITAL FILES: ULTIMATE BUNDLE (البكج الشامل) ---
  {
    id: 'hn-file-bundle-01',
    sku: 'BND-ULT-001',
    titleAr: 'البكج الملكي الشامل لجميع ملفات متجر حنان 2026 (كل الألعاب + المخططات + القوالب + الأدلة)',
    titleEn: 'Hanan Ultimate 2026 Royal Digital Bundle (All Games, Planners & Templates)',
    categoryId: 'bundles',
    categoryNameAr: 'البكجات الشاملة والحزم الكبرى',
    categoryNameEn: 'All-in-One Digital Bundles',
    price: 119,
    originalPrice: 380,
    rating: 5.0,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'البكج الأقوى والأوفر على الإطلاق! احصلي على كافة ملفات متجر حنان في طلب واحد بخصم يتجاوز 65%! يشمل: لعبة جمعات حنان التفاعلية الكبرى 150 شريحة + لعبة جلسات البنات + مخطط 2026 الرقمي للأيباد + شيت ميزانية الإكسل الذكي + حزمة قوالب كانفا 120 قالب + كتاب دليل المنتجات الرقمية الشامل. تحميل فوري لحزمة ZIP كاملة.',
    descriptionEn: 'The most comprehensive, high-value bundle on Hanan Store! Get all store files in one download with over 65% savings. Includes: Ultimate Gathering Game (150 slides), Besties Icebreaker Game, 2026 iPad Planner, Smart Budget Spreadsheet, 120+ Canva Templates, and the Digital Business Handbook.',
    featuresAr: [
      'توفير أكثر من 260 ريال مقارنة بشراء كل ملف على حدة',
      'تحميل فوري بضغطة زر لملف ZIP منظم يحتوي على كافة الملفات',
      'ملفات صالحة للاستخدام الدائم مع تحديثات مجانية لعام 2026',
      'صيغ متعددة: بوربوينت PPTX، بي دي إف تفاعلي PDF، إكسل XLSX، وقوالب Canva'
    ],
    featuresEn: [
      'Save over 65% compared to purchasing individual files',
      'Instant 1-click organized ZIP download containing everything',
      'Lifetime unrestricted personal access with free 2026 updates',
      'Formats: PowerPoint PPTX, Interactive PDF, Excel XLSX & Canva'
    ],
    specsAr: {
      'المحتويات': '6 ملفات رقمية كبرى كاملة ومفصلة',
      'حجم الحزمة': '95 ميجابايت (ملف مضغوط ZIP منظم في مجلدات)',
      'التسليم': 'تحميل فوري مباشر + رابط دائم عبر الواتساب والإيميل'
    },
    specsEn: {
      'Contents': '6 complete master digital assets',
      'Package Size': '95 MB (Organized ZIP file)',
      'Delivery': 'Instant on-screen download + permanent email & WhatsApp link'
    },
    inStock: true,
    stockCount: 9999,
    isFeatured: true,
    isBestSeller: true,
    isLuxuryNiche: true,
    isDigitalFile: true,
    fileType: 'حزمة ملفات شاملة ZIP',
    fileSize: '95 MB',
    filePagesOrItems: '6 منتجات رقمية متكاملة',
    downloadFileName: 'Hanan_Fun_Complete_Royal_Vault_2026.zip',
    sampleContentPreview: [
      'ملف لعبة جمعات حنان التفاعلية (150 شريحة)',
      'مخطط حنان 2026 بروابط تشعبية للأيباد (468 صفحة)',
      'شيت إدارة الميزانية والرواتب لإكسل وقوقل شيتس',
      'حزمة قوالب كانفا السوشيال ميديا (120 قالب)',
      'كتاب دليل المنتجات الرقمية العملي'
    ],
    tagsAr: ['البكج الأوفر', 'وفر 65%', 'جميع الملفات', 'تحميل فوري'],
    tagsEn: ['Ultimate Bundle', 'Save 65%', 'All In One', 'Instant Download']
  },

  // --- 6. LUXURY PHYSICAL GOODS (PERFUMES & SIGNATURE GIFTS) ---
  {
    id: 'hn-perfume-01',
    sku: 'HN-PRF-001',
    titleAr: 'عطر سحر الشرق الملكي - أو دو بارفيوم 100 مل',
    titleEn: 'Royal Orient Oud & Amber - Eau de Parfum 100ml',
    categoryId: 'luxury',
    categoryNameAr: 'مجموعة حنان الفاخرة (عطور وهدايا)',
    categoryNameEn: 'Hanan Royal Scents & Gifts',
    price: 480,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'توليفة نيش استثنائية تمزج بين دهن العود الكمبودي المعتق ونفحات العنبر البلوري مع لمسة ساحرة من الفانيليا التاهيتية والزعفران الملكي. ثبات يدوم لأكثر من 48 ساعة.',
    descriptionEn: 'An exceptional niche composition blending aged Cambodian oud, crystalline amber, and royal saffron.',
    featuresAr: [
      'ثبات استثنائي يدوم لأكثر من 48 ساعة',
      'تركيز عالي: Extrait de Parfum 30%',
      'زجاجة كريستالية فاخرة بغطاء معدني مطلي بالذهب'
    ],
    featuresEn: [
      'Exceptional 48+ hour longevity',
      'High concentration: Extrait de Parfum 30%'
    ],
    specsAr: {
      'الافتتاحية': 'الزعفران الإيراني، الهيل، الماندرين',
      'القاعدة': 'دهن عود معتق، عنبر بلوري، مسك أبيض'
    },
    specsEn: {
      'Top': 'Iranian Saffron, Cardamom',
      'Base': 'Aged Oud, Crystal Amber'
    },
    options: ['50 مل', '100 مل'],
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    isBestSeller: true,
    isLuxuryNiche: true,
    isDigitalFile: false,
    tagsAr: ['الأكثر مبيعاً', 'نيش حصري', 'شحن فاخر'],
    tagsEn: ['Best Seller', 'Royal Niche', 'Luxury Shipping']
  },
  {
    id: 'hn-gifts-01',
    sku: 'HN-GFT-401',
    titleAr: 'صندوق إهداء حنان الإمبراطوري (عطر نيش + رقائق عود مروكي + سبحة لؤلؤ)',
    titleEn: 'Hanan Imperial Signature Gift Set (Niche Perfume + Royal Oud + Pearl Rosary)',
    categoryId: 'luxury',
    categoryNameAr: 'مجموعة حنان الفاخرة (عطور وهدايا)',
    categoryNameEn: 'Hanan Royal Scents & Gifts',
    price: 790,
    originalPrice: 1100,
    rating: 5.0,
    reviewsCount: 168,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop'
    ],
    descriptionAr: 'الهدية الأكثر فخامة في متجر حنان. صندوق خشبي فاخر مكسو بالمخمل الإيطالي الأسود ومطرز بالذهب، يحتوي على عطر نيش 100 مل، تولة عود مروكي، وسبحة لؤلؤ طبيعي.',
    descriptionEn: 'The pinnacle of luxury gifting. Velvet presentation box containing niche perfume, natural Maroke oud wood, and handcrafted pearl prayer beads.',
    featuresAr: [
      'تغليف ملكي بصندوق مخمل إيطالي أسود',
      'توصيل سريع ومبرد في كرتون خاص',
      'طباعة كارت إهداء مجاني بالخط العربي'
    ],
    featuresEn: [
      'Velvet Italian keepsake chest',
      'Express climate-controlled delivery',
      'Free customized calligraphy gift card'
    ],
    options: ['الصندوق الأسود الملكي', 'الصندوق الأخضر الزمردي'],
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isBestSeller: true,
    isDigitalFile: false,
    tagsAr: ['هدية فاخرة', 'تغليف مجاني', 'شحن مجاني'],
    tagsEn: ['Luxury Gift', 'Free Packaging', 'Free Shipping']
  }
];
