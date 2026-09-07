import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Sparkles, X, Share2, Check } from 'lucide-react';
import { Language } from '../types';

interface Article {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  categoryKey: 'gifting' | 'digital' | 'lifestyle' | 'fun' | 'luxury';
  date: string;
  readTime: string;
  summaryAr: string;
  summaryEn: string;
  contentAr: string[];
  contentEn: string[];
  image: string;
  isNew?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 'fragrance-chemistry-sillage-secrets',
    titleAr: 'كيمياء الفوحان وسيكولوجية العطور: الدليل العلمي والعملي لثبات يدوم 48 ساعة وصناعة بصمتك الملكية',
    titleEn: 'The Chemistry of Sillage & Scent Psychology: Blueprint for 48-Hour Longevity & Signature Aura',
    categoryAr: 'كيمياء العطور والجاذبية',
    categoryEn: 'Fragrance Science & Luxury',
    categoryKey: 'luxury',
    date: '2026-09-07',
    readTime: '7 دقائق',
    summaryAr: 'لماذا تختفي بعض العطور الفاخرة سريعاً بينما تدوم أخرى لأيام؟ أسرار كسر الروابط الجزيئية بفرك المعصمين، قاعدة الطبقات الدهنية (Sandwich Method)، وخريطة حرارة الجسم التي تمنحك فوحاناً استثنائياً.',
    summaryEn: 'Why do some luxury scents vanish within hours while others linger for days? Explore molecular fixation, the lipid sandwich technique, and thermodynamic pulse mapping to unlock 48-hour sillage.',
    contentAr: [
      'هل تساءلتِ يوماً لماذا يرتبط عطر معين في ذهنك بشخص أو ذكرى لا تمحى مهما مرت السنين؟ علمياً، حاسة الشم هي الحاسة البشرية الوحيدة التي ترتبط تشريحياً ومباشرة بالجهاز الحوفي (Limbic System) ومركز الذاكرة العاطفية في الدماغ دون المرور بمحطات الفلترة العقلية الأخرى. هذا يعني أن عطرك ليس مجرد زينة خارجية، بل هو رسالة سيكولوجية فورية تصنع انطباعك الأول وتخلد حضورك.',
      'ومع ذلك، يقع أكثر من 85% من عشاق العطور في أخطاء يومية شائعة تؤدي إلى تبخر الزيوت الثمينة خلال ساعات معدودة، وتفقدهم الاستمتاع بالهرم العطري الكامل. إليكِ الدليل الكيميائي والعملي المثبت لتحقيق ثبات أسطوري يتجاوز 48 ساعة:',
      '1. الخطأ الكيميائي القاتل: فرك المعصمين (Friction Breakage): بمجرد رش العطر على المعصم، يقوم الكثيرون بفركهما معاً بحركة تلقائية. هذا الاحتكاك يولد حرارة فورية تكسر الروابط الجزيئية الحساسة لقمة الهرم العطري (Top Notes) مثل أزهار البرتقال، البرغموت، واللافندر، مما يشوه نقاء الرائحة ويسرع تطايرها. القاعدة الذهبية: رشي ودعي الجزيئات تستقر وتتنفس على بشرتك بهدوء تام.',
      '2. قاعدة الساندوتش الدهنية (The Lipid Sandwich Method): الجزيئات العطرية بطبيعتها مواد محبة للدهون (Lipophilic). إذا رشت على جلد جاف، تقوم مسام الجلد بامتصاص مذيب الكحول فوراً ويتبخر الزيت العطري في الهواء دون رابط يمسكه. الحل: ضعي طبقة ترطيب غير معطرة (مثل كريم بالسيراميد أو لمسة نقية من زبدة الشيا)، ثم مسحة خفيفة من المسك الأبيض النقي أو دهن العود المعتق، ثم رشي عطر النيش المركز من مسافة 15 سم. هذه الطبقة الدهنية تحتجز جزيئات العطر وتطلقها ببطء وتدرج ساحر.',
      '3. الخريطة الحرارية لنقاط النبض (Thermodynamic Pulse Mapping): العطر يحتاج إلى طاقة حرارية لينتشر (Sillage). بدلاً من الاكتفاء بالمعصمين فقط، ركزي على: خلف شحمة الأذن ومنبت الشعر الخلفي (حيث تظل الرائحة حية مع حركة شعرك)، تجويف الترقوة (مكان دافئ محمي من تيارات الهواء الباردة)، وثنايا الكوع والركبتين (لأن الحرارة تصعد للأعلى، مما يخلق هالة عطرية متصاعدة تحيط بك أينما خطوتِ).',
      '4. فن التبخير الملكي وحبس الجزيئات في الأنسجة (Incense Textile Layering): الألياف الطبيعية كالحرير، القطن، والمخمل تحفظ العطر لفترة أطول بعشر مرات من الجلد. السر الخليجي المتوارث للعرائس والمناسبات الكبرى: بخرّي ملابسك وعبايتك أولاً بدخان عود المروكي أو الكلمنتان الطبيعي وهو رطب، حيث تتشبع الألياف بمركبات الراتنج الزيتية، ثم رشي عطر النيش؛ سيلتصق العطر بجزيئات العود مشكلاً مزيجاً ملكياً لا يزول حتى بعد الغسيل الخفيف.',
      '5. فك شفرة التركيزات (EDT مقابل EDP مقابل Extrait): للتأكد من حصولك على قيمة حقيقية، راجعي تركيز العطر. ماء التواليت (EDT) يحتوي على 8-12% زيت، بينما ماء العطر (EDP) يحتوي 15-20%، وتتصدر العطور الملكية النقية فئة (Extrait de Parfum) بتركيز يفوق 30% من الزيوت النقية، وهو ما يضمن بقاء النوتات القاعدية كالعنبر، خشب الصندل، والباتشولي ثابتة لعدة أيام.'
    ],
    contentEn: [
      'The human sense of smell is anatomically hardwired into the limbic system—the emotional and memory center of the brain. Your fragrance is never just an accessory; it is your enduring sensory signature.',
      'Key scientific secrets for 48-hour sillage:',
      '1. Stop rubbing your wrists: Friction generates heat that shatters delicate top-note esters (citrus, neroli, florals), corrupting the pyramid.',
      '2. The Lipid Sandwich: Fragrance molecules are lipophilic. Applying a fragrance-free ceramide lotion or pure white musk before spraying traps volatile compounds, slowing down evaporation.',
      '3. Thermodynamic Pulse Mapping: Target the nape of the neck, collarbone hollow, and inner elbows to create a rising thermal aura with body movement.',
      '4. Incense Textile Layering: Infuse natural fabrics (cashmere, silk, velvet) with gentle agarwood smoke first, then spray niche perfume for an indestructible bond.',
      '5. Invest in Extrait de Parfum: Formulations with over 25-30% perfume oil concentration guarantee that warm base notes (amber, sandalwood, patchouli) remain vibrant for days.'
    ],
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'cybersecurity-ecommerce-2026',
    titleAr: 'دليل الأمان الرقمي وحماية المدفوعات في المتاجر الإلكترونية لعام 2026',
    titleEn: 'Digital Security & Payment Protection Guide for E-Commerce in 2026',
    categoryAr: 'ريادة وأمان رقمي',
    categoryEn: 'Cybersecurity & Tech',
    categoryKey: 'digital',
    date: '2026-09-07',
    readTime: '6 دقائق',
    summaryAr: 'كيف تحمين متجرك وبيانات عملائك من الاحتيال المالي وهجمات التصيد؟ معايير التشفير SSL، بوابات الدفع الآمنة، والتحقق بخطوتين في التجارة الإلكترونية.',
    summaryEn: 'A comprehensive guide on safeguarding your online boutique, encrypting customer data, and adhering to PCI-DSS compliance in modern e-commerce.',
    contentAr: [
      'مع التوسع الهائل في التسوق الرقمي والمدفوعات الفورية في منطقة الشرق الأوسط، أصبح الأمان السيبراني هو خط الدفاع الأول والركيزة الأساسية لبناء ثقة المتسوقين في أي متجر إلكتروني ناجح.',
      'لماذا يعتبر الأمان الرقمي عاملاً حاسماً في نمو متجرك؟',
      '1. شهادات التشفير وحماية البيانات الحساسة (SSL & TLS 1.3): يجب ألا تتم أي عملية إدخال بيانات أو دفع إلا عبر بروتوكولات HTTPS المشفرة ذات التشفير المتقدم (256-bit). هذا يحمي أرقام الهواتف، العناوين، وبيانات الفواتير من اعتراض المتسللين ويمنح متجرك الشارة الخضراء في متصفحات الويب.',
      '2. بوابات الدفع المعتمدة دولياً وتوافق PCI-DSS: احرصي دائماً على الربط مع مزودي دفع معتمدين (مثل Apple Pay، مدى، فيزا، وماستركارد). ميزة هذه البوابات أنها تعالج بيانات البطاقات البنكية في خوادم مشفرة معزولة وخاضعة لأعلى معايير الأمان العالمية دون تخزين أي أرقام سرية في خادم متجرك.',
      '3. تفعيل المصادقة الثنائية (2FA) ومكافحة التصيد: حماية لوحة تحكم المتجر والبريد الإلكتروني المالي باستخدام تطبيقات المصادقة (Authenticator Apps) يقلل احتمالية الاختراق بنسبة 99.9%. بالإضافة إلى توعية العملاء بأن المتجر لا يطلب كلمات المرور أو رموز OTP عبر رسائل SMS أو الواتساب إطلاقاً.',
      '4. التخزين الاحتياطي التلقائي وسياسة الخصوصية الشفافة: إنشاء نسخ احتياطية مشفرة لقاعدة البيانات بصورة يومية يضمن استمرارية الأعمال وحماية سجلات الشراء حتى في حالات الطوارئ التقنية، وهو ما يلبي اشتراطات جوجل وأدسنس لحماية حقوق المستخدم.'
    ],
    contentEn: [
      'As digital transactions accelerate across the globe, cybersecurity and consumer trust have become the foundational pillars of thriving e-commerce brands.',
      'Essential security practices: implement TLS 1.3 encryption across all endpoints, rely exclusively on PCI-DSS certified payment gateways (Apple Pay, Mada, Visa), enforce Multi-Factor Authentication (2FA) for administrative access, and educate shoppers against phishing attempts.'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'ai-tools-for-solopreneurs-2026',
    titleAr: 'أفضل أدوات الذكاء الاصطناعي لرواد الأعمال وأصحاب المشاريع المنزلية في 2026',
    titleEn: 'Essential AI Tools for Solopreneurs & Home Business Owners in 2026',
    categoryAr: 'إنتاجية وذكاء اصطناعي',
    categoryEn: 'AI & Productivity',
    categoryKey: 'digital',
    date: '2026-09-07',
    readTime: '7 دقائق',
    summaryAr: 'دليل عملي لاختيار واستخدام تقنيات الذكاء الاصطناعي في كتابة الإعلانات، توليد الصور التسويقية، خدمة العملاء الذكية، وأتمتة المهام اليومية بأقل تكلفة.',
    summaryEn: 'Explore how solopreneurs leverage modern generative AI to automate copywriting, visual asset creation, and 24/7 client support to scale with zero team overhead.',
    contentAr: [
      'لم يعد إطلاق مشروع ناجح وإدارته يتطلب توظيف فرق عمل ضخمة بميزانيات باهظة؛ فقد أحدث الذكاء الاصطناعي التوليدي ثورة حقيقية تتيح لشخص واحد إدارة وتوسيع متجر متكامل بكفاءة تفوق كبرى الشركات التقليدية.',
      'محاور تسخير الذكاء الاصطناعي في مشروعك المنزلي:',
      '1. صناعة المحتوى وكتابة الأوصاف البيعية (Copywriting): استخدام النماذج اللغوية المتقدمة (مثل Gemini) لصياغة أوصاف المنتجات بأسلوب عاطفي جذاب يُبرز الفوائد الحقيقية للعميل، بالإضافة إلى كتابة مقالات المدونة المتوافقة مع معايير السيو (SEO) وتوليد نصوص إعلانات تيك توك وسناب شات.',
      '2. تصميم وتنسيق الهويات البصرية والمنتجات الرقمية: دمج أدوات توليد الصور الاحترافية وأدوات كانفا الذكية (Canva Magic Studio) لتصميم قوالب البلانرات، بوسترات الفعاليات، وخلفيات الهدايا الراقية في دقائق معدودة بدلاً من قضاء أيام في الرسم اليدوي.',
      '3. أتمتة الرد على العملاء (AI Customer Support): ربط روبوتات المحادثة الذكية للإجابة الفورية عن الأسئلة الشائعة (مثل: كيفية تحميل الملف، طرق الدفع المتاحة، ورمز الخصم الفعال) على مدار 24 ساعة دون أن يفقد المتجر أي عميل مستعجل في ساعات الليل المتأخرة.',
      '4. تحليل البيانات وتوقع توجهات السوق: الاستفادة من تحليلات الذكاء الاصطناعي لمعرفة أي المنتجات الرقمية أو العطور الأكثر طلباً في كل موسم، مما يساعدك على تسعير منتجاتك وتقديم بكجات حصرية ترفع من متوسط قيمة السلة الشرائية.'
    ],
    contentEn: [
      'Generative AI has democratized enterprise-grade leverage for solopreneurs, enabling individual creators to scale their operations with unmatched speed.',
      'Key application areas: utilizing modern LLMs for persuasive SEO-optimized copywriting, employing visual AI tools for rapid mockup and digital asset prototyping, and deploying intelligent 24/7 customer resolution systems.'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'tiktok-snapchat-content-marketing-2026',
    titleAr: 'أسرار التسويق بالمحتوى والبراند الشخصي عبر تيك توك وسناب شات لعام 2026',
    titleEn: 'Content Marketing & Personal Branding Playbook on TikTok & Snapchat in 2026',
    categoryAr: 'تسويق وصناعة محتوى',
    categoryEn: 'Marketing & Branding',
    categoryKey: 'lifestyle',
    date: '2026-09-07',
    readTime: '5 دقائق',
    summaryAr: 'كيف تبنين حضوراً رقمياً مؤثراً يجذب آلاف الزوار والعملاء بدون إعلانات مدفوعة؟ خطافات المشاهدة الأولى (Hooks)، رواية القصص (Storytelling)، واستراتيجيات الانتشار العضوي.',
    summaryEn: 'How to build an authentic personal brand, craft viral visual hooks, and transform short-form video engagement into loyal e-commerce conversions.',
    contentAr: [
      'في عالم السوشيال ميديا المعاصر، لم يعد الجمهور ينجذب للإعلانات الترويجية الصريحة والمباشرة؛ فالعميل اليوم يبحث عن القصة، العفوية، والقيمة الحقيقية التي تلامس يومياته.',
      'استراتيجيات التسويق العضوي الأكثر فاعلية في 2026:',
      '1. قاعدة أول 3 ثوانٍ (The 3-Second Hook): خوارزميات تيك توك وسناب شات شورتس تعتمد بالكامل على نسبة إكمال الفيديو (Watch Time). ابدئي دائماً بجملة غير متوقعة أو سؤال يثير الفضول مثل: "هل كنتِ تعرفين أن هذه الحركة البسيطة تضاعف ثبات بخورك 3 أيام؟" أو "السبب الذي جعل جمعتنا الأخيرة أكثر متعة بدون هواتف!".',
      '2. كواليس العمل والتعبئة (Behind the Scenes): تصوير خطوات تجهيز طلبات العملاء، طريقة تغليف الهدايا بالشرائط المخملية، أو مشاركة شاشة تجربة لعبة بوربوينت جديدة يولد ارتباطاً عاطفياً وثقة فورية لا تحققها أي صورة ثابتة.',
      '3. تقديم حلول مجانية ومحتوى تعليمي: عندما تنشرين مقاطع تشرح كيفية تنظيم اليوم عبر الأيباد، أو نصائح لاختيار دهن العود، فإنك تثبتين خبرتك ومصداقيتك (Authority)، وحينها يقبل المتابعون على شراء منتجات متجرك بثقة تامة.',
      '4. الاستمرارية الذكية وجدولة النشر: خوارزميات المنصات تكافئ الحسابات النشطة بانتظام. نشر مقطع واحد مدروس يومياً في أوقات الذروة المسائية يضمن وصول محتواك لآلاف المشاهدين الجدد كل أسبوع.'
    ],
    contentEn: [
      'Modern social commerce thrives on authentic storytelling and genuine educational value rather than intrusive traditional advertising.',
      'Key growth tactics: optimize the initial 3-second visual hook, document behind-the-scenes packaging and product crafting, provide actionable micro-tutorials, and maintain consistent publishing momentum.'
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'family-event-planning-checklist',
    titleAr: 'دليل تنظيم وتنسيق الفعاليات العائلية والمناسبات الخاصة خطوة بخطوة',
    titleEn: 'Step-by-Step Guide to Planning & Hosting Unforgettable Family Celebrations',
    categoryAr: 'تنظيم مناسبات وجمعات',
    categoryEn: 'Event Planning',
    categoryKey: 'fun',
    date: '2026-09-07',
    readTime: '6 دقائق',
    summaryAr: 'جدول عملي لتنظيم حفلات التخرج، جمعات الأعياد، وليالي الألعاب المنزلية: اختيار الثيم، توزيع المهام، إعداد الضيافة، وتنسيق الأنشطة الترفيهية لجميع الأعمار.',
    summaryEn: 'A master checklist for hosting memorable family milestones, festive banquets, and lively game nights with effortless grace.',
    contentAr: [
      'تنظيم مناسبة عائلية ناجحة أو جمعة أصدقاء راقية لا يتطلب التوتر والقلق بشأن التفاصيل؛ بل يعتمد على خطة مسبقة واضحة وتوزيع ذكي للوقت يتيح لأصحاب الدعوة الاستمتاع باللحظة جنباً إلى جنب مع ضيوفهم.',
      'المراحل الأربع لإقامة مناسبة استثنائية:',
      '1. مرحلة التخطيط المسبق وتحديد الفكرة (قبل أسبوع): حددي طابع المناسبة (Theme)، ألوان الديكور، وقائمة المدعوين التقريبية. كتابة هذه التفاصيل في جدول منظم يمنع النسيان ويسهل طلب المستلزمات مبكراً.',
      '2. إعداد الضيافة والمشروبات بتدرج ذكي: ابدئي بالقهوة السعودية والبخور الترحيبي، ثم قدمي المأكولات الخفيفة والعصائر المنعشة في أوانٍ متناسقة وراقية، مع تخصيص ركن أنيق للحلويات والمشروبات الساخنة.',
      '3. فقرة الترفيه الجماعي التفاعلي: أكبر خطأ يقع فيه المنظمون هو ترك السهرة بدون مسار ترفيهي واضح، مما يدفع الحضور للانشغال بهواتفهم. جهزي مسبقاً باقة ألعاب حنان فن (hanan.fun) التفاعلية على الشاشة، وقسمي الضيوف إلى فرق للمنافسة في مسابقات مسلية تناسب الكبار والصغار.',
      '4. توزيع هدايا الشكر الرمزية (Giveaways): توديع الضيوف بهدية رمزية بسيطة (مثل مسك صغير فاخر، أو بطاقة إهداء مكتوبة، أو كوكيز مغلف بأناقة) يترك أثراً طيباً ومحفوراً في وجدان كل حاضر.'
    ],
    contentEn: [
      'Hosting flawless family celebrations and social gatherings hinges on structured early preparation, sensory hospitality pacing, and energetic group activities.',
      'Four-stage event framework: establish a thematic color palette early, stage progressive welcoming refreshments with aromatic incense, run interactive team challenges via living room screens, and conclude with memorable token giveaways.'
    ],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'luxury-gifting-etiquette',
    titleAr: 'فن الإهداء الذكي: دليلك لاختيار هدايا استثنائية تأسر القلوب في كافة المناسبات',
    titleEn: 'The Art of Thoughtful Luxury Gifting: How to Curate Unforgettable Presents for Every Occasion',
    categoryAr: 'هدايا ومناسبات فاخرة',
    categoryEn: 'Luxury Gifting',
    categoryKey: 'gifting',
    date: '2026-09-07',
    readTime: '5 دقائق',
    summaryAr: 'كيف تختارين هدية فاخرة تترك أثراً عاطفياً دائماً؟ أسرار اختيار العطور النيش، الإكسسوارات الفضية، ودمج المنتجات الرقمية مع بطاقات التهنئة الراقية.',
    summaryEn: 'Discover how to curate memorable luxury gifts with personal storytelling, bespoke packaging, and emotional touchpoints.',
    contentAr: [
      'الهدية الاستثنائية ليست مجرد قطعة مادية تُشترى، بل هي رسالة تقدير صامتة تعبر عن مدى فهمك لشخصية المهدى إليه، وتُخلّد لحظات الفرح في الذاكرة لسنوات.',
      'في متجر حنان ستور، نؤمن بأن الهدية الناجحة تُبنى على ثلاثة ركائز أساسية: القيمة الجمالية، الفائدة العملية المستدامة، واللمسة العاطفية المخصصة.',
      'أسرار اختيار الهدية المثالية دون حيرة:',
      '1. قاعدة التخصيص والملاءمة: تجنبي الهدايا العشوائية، واختاري ما يُكمل شغف المهدى إليه. إذا كان شغوفاً بالتنظيم، فإن بلانر 2026 الرقمي التفاعلي مع بطاقة إهداء مخصصة يُعتبر هدية لا تقدر بثمن.',
      '2. فن الجمع بين القطعة الملموسة والرمزية: تقديم باقة عطرية ملكية بنوتات النيش أو طقم مجوهرات فضية مرصع بالزركون مع رسالة إهداء مكتوبة بخط يدوي معبر يرفع من القيمة المعنوية عشرات الأضعاف.',
      '3. سحر التغليف المخملي والتفاصيل الصغيرة: الانطباع الأول يبدأ من طريقة التقديم؛ استخدام الصناديق الفاخرة المبطنة بالساتان أو درجات البيج والذهبي مع شريط حريري ناعم يُعطي شعوراً بالفخامة والاهتمام منذ اللحظة الأولى.'
    ],
    contentEn: [
      'A truly memorable luxury gift is not defined solely by price, but by thoughtful curation and deep empathy for the recipient.',
      'Key pillars of luxury gifting: personalize the choice to their lifestyle, combine sensory items (like niche fragrances or silver jewelry) with personal handwritten sentiments, and invest in velvet or silk-accented presentation boxes.'
    ],
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'digital-products-business-2026',
    titleAr: 'أسرار إطلاق متجر منتجات رقمية ناجح في 2026: كيف تبدأين من الصفر بدون تكاليف شحن؟',
    titleEn: 'Launching a Profitable Digital Products Store in 2026: From Zero to First Sale Without Shipping Costs',
    categoryAr: 'ريادة الأعمال والمنتجات الرقمية',
    categoryEn: 'Digital Commerce',
    categoryKey: 'digital',
    date: '2026-09-06',
    readTime: '6 دقائق',
    summaryAr: 'دليل المبتدئين الشامل لتصميم وبيع البلانرات، قوالب الألعاب التفاعلية، والملفات الرقمية بهامش ربح يصل إلى 95% وتسليم فوري للمشترين.',
    summaryEn: 'A beginner-friendly playbook for creating and selling digital planners, game packs, and templates with 95% profit margins.',
    contentAr: [
      'تشهد التجارة الرقمية طفرة غير مسبوقة في منطقة الشرق الأوسط، حيث أصبحت المنتجات الرقمية القابلة للتحميل الفوري هي الخيار الأذكى للمستقلين وأصحاب المشاريع المنزلية الراغبين في بناء دخل مستدام.',
      'لماذا تتفوق المنتجات الرقمية على التجارة التقليدية؟',
      '1. انعدام تكاليف التخزين والشحن: لا توجد تكلفة لتصنيع كل نسخة جديدة، ولا رسوم لشركات الشحن، ولا مخاوف من تلف البضائع أو إرجاعها. بمجرد تصميم الملف مرة واحدة، يمكنك بيعه لآلاف العملاء حول العالم بهامش ربح يقارب 95%.',
      '2. المنتجات الرقمية الأعلى طلباً في 2026: تتصدر المخططات الرقمية التفاعلية لأجهزة الأيباد وتطبيقات GoodNotes، ألعاب الجمعات التفاعلية العائلية للشاشات الذكية (مثل hanan.fun)، وقوالب تنظيم الميزانيات الذكية قائمة المنتجات الأكثر رواجاً.',
      '3. سر النجاح في التسليم الفوري وتجربة العميل: العميل الرقمي يتوقع استلام ملفه في ثوانٍ معدودة. توفير روابط تحميل آمنة وفورية، مع دليل إرشادي واضح لكيفية الاستخدام، يبني سمعة استثنائية لمتجرك ويجلب تقييمات إيجابية مستمرة.'
    ],
    contentEn: [
      'Digital products and instant downloadables represent the modern frontier for creators seeking high-margin, scalable micro-businesses.',
      'Zero shipping fees, zero inventory depreciation, and worldwide 24/7 delivery allow solopreneurs to achieve up to 95% profit margins.',
      'Key winning formats for 2026 include GoodNotes interactive planners, living room gathering party games, and automated financial tracking spreadsheets.'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'majlis-hospitality-incense-rituals',
    titleAr: 'طقوس الضيافة الخليجية المعاصرة: فنون التبخير الفاخر وتنسيق المجالس لاستقبال الضيوف',
    titleEn: 'Contemporary Arabian Hospitality: Luxury Incense Layering & Warm Majlis Styling',
    categoryAr: 'ديكور وضيافة عصرية',
    categoryEn: 'Home & Hospitality',
    categoryKey: 'lifestyle',
    date: '2026-09-05',
    readTime: '5 دقائق',
    summaryAr: 'كيف تصنعين هالة ترحيبية ساحرة في منزلك؟ أسرار مزج خشب المروكي الطبيعي مع المستكة والمسك الأبيض، وتنسيق الإضاءة الدافئة لجمعات لا تُنسى.',
    summaryEn: 'Master the art of atmospheric hosting with oud layering, warm mood lighting, and modern table presentation.',
    contentAr: [
      'كرم الضيافة ليس مجرد عادة متوارثة، بل هو فن حسي يبدأ من اللحظة التي يخطو فيها الضيف عتبة بيتك، حيث تلتقي الروائح الأصيلة مع الإضاءة المريحة لتبث السكينة والشعور بالترحيب الصادق.',
      'أسرار هرم التبخير الاحترافي وأجواء المجالس:',
      '1. التبخير المتدرج (Layering Ritual): ابدئي بتبخير المجلس بحبات المستكة الحجازية قبل وصول الضيوف بنصف ساعة لتعقيم وتثبيت جو الغرفة، ثم ضعي كسرة من عود المروكي المحسن أو الكلمنتان الطبيعي على جمر هادئ مغطى بطبقة رقيقة من الرماد، لتفوح الرائحة العطرية بدون احتراق سريع أو دخان كثيف.',
      '2. هندسة الإضاءة الدافئة والمريحة: تجنبي تماماً الإضاءة البيضاء المباشرة، واعتمدي على مصادر إنارة دافئة بدرجة (2700K - 3000K) موزعة في زوايا المجلس مع أباجورات جانبية وشموع طبيعية معطرة برائحة الفانيليا وخشب الصندل.',
      '3. صواني الضيافة التفاعلية: نسقي أطباق الضيافة بتدرج لوني وبصري متناسق يجمع بين التمور المحشوة، فناجين القهوة السعودية المذهبة، مع شاشات تفاعلية تعرض مسابقات خفيفة من حنان فن تكسر الحواجز وتضفي بهجة فورية على الجلسة.'
    ],
    contentEn: [
      'True Arabian hospitality is a multi-sensory experience that begins the moment a guest enters, guided by evocative scent trails and ambient lighting.',
      'Steps to majestic hosting: prepare the room with natural mastic incense before layering with aged Moroki agarwood on gentle ash embers, curate warm 2700K corner illumination, and pair ceremonial cardamom coffee with welcoming games.'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'mindful-journaling-habits',
    titleAr: 'قوة التدوين الصباحي والامتنان: 10 دقائق يومياً لتصفية الذهن ومضاعفة الإنتاجية',
    titleEn: 'The Power of Morning Journaling: 10 Minutes Daily to Clear Mental Fog & Boost Focus',
    categoryAr: 'تطوير الذات ونمط الحياة',
    categoryEn: 'Mindfulness & Wellbeing',
    categoryKey: 'lifestyle',
    date: '2026-09-04',
    readTime: '4 دقائق',
    summaryAr: 'دليلك العملي لممارسة التدوين الذهني (Journaling) والتخلص من التشتت الرقمي، مع أساليب مثبتة لترتيب الأولويات وبدء اليوم بسلام نفسي وتركيز عالٍ.',
    summaryEn: 'Practical morning journaling routines to eliminate digital overwhelm, reduce stress, and cultivate daily gratitude.',
    contentAr: [
      'في عالم مليء بالإشعارات المستمرة والمنبهات الرقمية، يمثل تخصيص 10 دقائق هادئة صباح كل يوم ملاذاً ذهنياً يعيد إليك السيطرة على وقتك وسلامك الداخلي.',
      'خطوات بسيطة لبناء عادة تدوين مستدامة:',
      '1. تفريغ الشحنات الذهنية الصباحية (Brain Dump): افتحي صفحة الملاحظات في البلانر الرقمي واكتبي كل فكرة أو التزام يشغل بالك بدون ترتيب أو رقابة ذاتية. هذا التمرين البسيط يحرر سعة الذاكرة العاملة في الدماغ ويخفض هرمون التوتر (الكورتيزول) بشكل فوري.',
      '2. ثلاثية الامتنان اليومي (Daily Gratitude): دوني ثلاث نعم صغيرة ومحددة حدثت معك خلال الساعات الماضية (كاستمتاعك برشفة قهوة دافئة، أو محادثة لطيفة، أو نسمة هواء عليلة). التركيز على التفاصيل اليومية الصغيرة يعيد برمجة عقلك لرؤية الوفرة والفرص الإيجابية.',
      '3. مصفوفة الأولويات الثلاث: بدلاً من كتابة قائمة مهام طويلة تسبب الإحباط، حددي ثلاثة أهداف رئيسية فقط تركزين عليها لإنجازها خلال اليوم، واستمتعي بشعور الإنجاز والرضا عند وضع علامة الصح في نهاية يومك.'
    ],
    contentEn: [
      'Carving out ten intentional morning minutes before checking notifications creates a protective sanctuary for mental wellness and daily peak performance.',
      'Actionable ritual: execute a stream-of-consciousness brain dump to release lingering cognitive clutter, write three hyper-specific gratitude moments, and commit to only three essential daily outcomes.'
    ],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'gathering-games-guide',
    titleAr: 'دليل حنان فن: كيف تخلقين أجواء حماسية لا تُنسى في جمعاتك العائلية ومناسباتك؟',
    titleEn: 'Hanan Fun Guide: How to Create Unforgettable Gathering Energy for Family & Events',
    categoryAr: 'ألعاب وجمعات (hanan.fun)',
    categoryEn: 'Gathering Games',
    categoryKey: 'fun',
    date: '2026-09-01',
    readTime: '4 دقائق',
    summaryAr: 'أسرار تحويل أي جمعة عادية إلى ليلة من الضحك والمنافسة الذكية باستخدام ملفات الألعاب التفاعلية والشاشات الذكية بدون ملل.',
    summaryEn: 'Secrets to turning any casual gathering into a night of laughter and friendly rivalry using interactive game decks.',
    contentAr: [
      'تعتبر الجمعات العائلية ولقاءات الأصدقاء من أغلى اللحظات الإنسانية التي تجدد الطاقة وتبني الذكريات. لكن مع كثرة الانشغال بالهواتف، قد تفقد الجمعات بريقها الحماسي.',
      'هنا يأتي دور ألعاب الجمعات التفاعلية الحديثة المبتكرة في منصة حنان فن (hanan.fun)، حيث يتم عرض الأسئلة والتحديات على شاشة التلفاز أو الأيباد ليشترك الجميع في التصويت والضحك والتنافس.',
      'نصائح ذهبية لجمعة ناجحة:',
      '1. اختيار الألعاب الجماعية السريعة: تجنبي الألعاب الطويلة المعقدة، واعتمدي على ألعاب التخمين، أسئلة الصراحة الطريفة، وألعاب "من الأكثر احتمالاً".',
      '2. استخدام الشاشات الكبيرة: تشغيل ملف التحديات التفاعلي عبر التلفزيون الذكي يجعل كل الحاضرين في قلب الحدث دون انعزال.',
      '3. تقسيم الحضور إلى فرق متوازنة: خلق روح الفريق والمنافسة الودية مع جوائز رمزية طريفة يزيد من متعة السهرة وضحكاتها.'
    ],
    contentEn: [
      'Family gatherings and social get-togethers are priceless moments that build lifelong memories.',
      'Modern interactive gathering games bring everyone into a shared screen experience, replacing isolated screen-scrolling with laughter and competition.',
      'Top tips for memorable hosting: choose snappy guess-and-trivia games, cast the interactive file to the living room TV, and distribute fun symbolic prizes.'
    ],
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'digital-planner-tips',
    titleAr: 'دليل التخطيط الرقمي 2026: كيف تنظمين يومك وميزانيتك على الأيباد باحترافية؟',
    titleEn: 'Digital Planning 2026: How to Organize Your Schedule & Budget on iPad',
    categoryAr: 'تخطيط وإنتاجية',
    categoryEn: 'Productivity & Planning',
    categoryKey: 'digital',
    date: '2026-08-28',
    readTime: '5 دقائق',
    summaryAr: 'طرق الاستفادة القصوى من بلانر 2026 التفاعلي مع GoodNotes والروابط التشعبية لتحقيق التوازن بين العمل والمنزل والادخار.',
    summaryEn: 'How to maximize the 2026 interactive iPad planner with hyperlinked tabs to balance work, family, and financial habits.',
    contentAr: [
      'الانتقال من التخطيط الورقي إلى البلانر الرقمي ليس مجرد صيحة عصرية، بل نقلة نوعية في كفاءة إدارة الوقت وسهولة الوصول إلى أهدافك في أي مكان.',
      'مع بلانر حنان 2026 التفاعلي المصمم بدقة، يمكنك التنقل بضغطة زر بين التقويم السنوي، الأهداف الشهرية، والصفحات اليومية عبر روابط تشعبية سريعة.',
      'خطوات عملية لتنظيم مثمر:',
      '1. خططي للأسبوع في مساء الأحد: حددي 3 أولويات رئيسية غير قابلة للتفاوض.',
      '2. تابعي ميزانيتك أولاً بأول: خصصي دقيقتين يومياً لتدوين المصروفات في خانة الميزانية الذكية المرفقة.',
      '3. احرصي على العادات الإيجابية: تتبعي شرب الماء، القراءة، والرياضة لتري تقدمك الأسبوعي بشكل بصري محفز.'
    ],
    contentEn: [
      'Switching to digital planning streamlines goal tracking and habit formation into an organized, portable experience.',
      'Using hyperlinked tabs in GoodNotes allows instant navigation between monthly roadmaps and daily trackers.',
      'Actionable practices: set 3 non-negotiable weekly priorities, log daily expenses, and maintain a visual habit tracker.'
    ],
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'royal-perfumes-guide',
    titleAr: 'أسرار ثبات العطور الملكية والنيش في المناسبات الكبرى',
    titleEn: 'Secrets of Long-Lasting Royal Niche Fragrances for Gala Events',
    categoryAr: 'ثقافة العطور الفاخرة',
    categoryEn: 'Luxury Fragrance Culture',
    categoryKey: 'luxury',
    date: '2026-08-20',
    readTime: '3 دقائق',
    summaryAr: 'كيف تدمجين بين دهن العود المعتق وعطور النيش الفرنسية للحصول على هالة عطرية فواحة تدوم طوال اليوم.',
    summaryEn: 'How to master fragrance layering with aged oud oil and French niche notes for exceptional longevity.',
    contentAr: [
      'العطر الملكي ليس مجرد رائحة طيبة، بل هو بصمة شخصية تعلن عن حضورك قبل أن تتحدثي وتبقى بعد رحيلك.',
      'في متجر حنان ستور، نحرص على انتقاء العطور ذات النوتات الطبيعية المركزة (Extrait de Parfum) التي تمنح ثباتاً استثنائياً.',
      'قواعد ثبات العطر الفاخر:',
      '1. الترطيب أولاً: رش العطر على بشرة رطبة بعد الاستحمام مباشرة يضاعف مدة ثبات الجزيئات العطرية.',
      '2. مواضع النبض: معصم اليدين، خلف شحمة الأذن، وعلى الرقبة حيث يساعد دفء الدورة الدموية على فوحان العطر بصورة تدريجية راقية.',
      '3. فن التعتيق والمزج: وضع لمسة خفيفة من دهن العود الملكي ثم رش عطر النيش الزهري أو التوابلي يعطي عمقاً وسحراً منفرداً.'
    ],
    contentEn: [
      'Fragrance layering is a refined art in oriental perfumery.',
      'Moisturize pulse points prior to spraying, spray from a distance of 15cm, and harmonize warm wood bases with crisp floral accents for maximum elegance.'
    ],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jewelry-care-guide',
    titleAr: 'دليل العناية بالمجوهرات الفضية والذهبية لتدوم براقة مدى الحياة',
    titleEn: 'Complete Guide to Gold and Silver Jewelry Care for Lifelong Shine',
    categoryAr: 'مجوهرات وإكسسوارات',
    categoryEn: 'Fine Jewelry Care',
    categoryKey: 'luxury',
    date: '2026-08-15',
    readTime: '4 دقائق',
    summaryAr: 'طرق صحيحة لتنظيف وتخزين المجوهرات الفاخرة وحمايتها من العوامل الكيميائية والعطور للحفاظ على لمعانها الأصلي.',
    summaryEn: 'Proper cleaning and storage methods for luxury jewelry to protect against chemicals and maintain original brilliance.',
    contentAr: [
      'المجوهرات الراقية استثمار عاطفي وجمالي يستحق عناية فائقة لتبقى متألقة طوال السنين.',
      'أفضل ممارسات الحفاظ على المجوهرات:',
      '1. القاعدة الذهبية "آخر ما يُرتدى وأول ما يُخلع": تجنبي تعريض المجوهرات للعطور، الكريمات، ومنظفات المنزل.',
      '2. التخزين المنفصل: احفظي كل قطعة في صندوق مبطن بالمخمل لمنع الاحتكاك والخدوش.',
      '3. التنظيف اللطيف بماء فاتر وصابون طبيعي مع قطعة قماش قطنية ناعمة للحفاظ على الطلاء واللمعان.'
    ],
    contentEn: [
      'Fine jewelry is an emotional and aesthetic investment that requires pristine maintenance.',
      'Golden rules: wear jewelry last after perfume and lotion, store items in velvet-lined boxes separately, and clean gently with mild soap and warm water.'
    ],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'abayas-styling-guide',
    titleAr: 'فن تنسيق العبايات الراقية مع الإكسسوارات للمناسبات الرسمية',
    titleEn: 'The Art of Styling Haute Couture Abayas with Accessories for Formal Events',
    categoryAr: 'عبايات وأزياء',
    categoryEn: 'Haute Couture Abayas',
    categoryKey: 'luxury',
    date: '2026-08-10',
    readTime: '4 دقائق',
    summaryAr: 'نصائح الخبراء في اختيار الحقائب، الأحذية، والمجوهرات المناسبة لتتألقي بإطلالة ملكية متكاملة في السهرات.',
    summaryEn: 'Expert tips on selecting bags, shoes, and jewelry to complete a majestic evening look in luxury abayas.',
    contentAr: [
      'العباية الخليجية المعاصرة تمثل عنواناً للرقي والفخامة المتجددة في المناسبات الرسمية والأعياد.',
      'أسرار الإطلالة المتكاملة:',
      '1. التوازن في التطريز: إذا كانت العباية مزينة بتطريز يدوي كثيف، فليكن السوار والحقيبة بتصميم ناعم وبسيط.',
      '2. اختيار الحقيبة والحذاء: الحقائب الجلدية الصغيرة (Clutch) ذات اللمسات المعدنية تضفي فخامة فورية.',
      '3. طرحة متناسقة: اختيار قماش الطرحة المناسب لنوع قماش العباية يضمن ثباتها وانسدالها الأنيق طوال السهرة.'
    ],
    contentEn: [
      'Modern couture abayas represent timeless elegance and refined luxury for formal occasions.',
      'Key styling tips: balance heavy embroidery with minimalist accessories, opt for metallic clutch bags, and match headscarf fabrics to the abaya textile.'
    ],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skincare-routine-guide',
    titleAr: 'روتين العناية الملكية بالبشرة: خطوات بسيطة لنضارة تدوم',
    titleEn: 'Royal Skincare Routine: Simple Steps for Lasting Radiance',
    categoryAr: 'عناية وجمال',
    categoryEn: 'Royal Skincare',
    categoryKey: 'luxury',
    date: '2026-08-05',
    readTime: '5 دقائق',
    summaryAr: 'دليلك اليومي لتنظيف وترطيب البشرة بأفضل المكونات الطبيعية والمنتجات الفاخرة لإشراقة طبيعية ساحرة.',
    summaryEn: 'Your daily guide to cleansing and hydrating with top natural ingredients and luxury formulas for a glowing complexion.',
    contentAr: [
      'البشرة المشرقة والصحية تبدأ بروتين يومي منتظم ومكونات نقية عالية الجودة.',
      'خطوات الروتين الملكي:',
      '1. التنظيف المزدوج مساءً لإزالة آثار المكياج والشوائب دون جفاف.',
      '2. استخدام السيروم الغني بمضادات الأكسدة وفيتامين C صباحاً لحماية البشرة.',
      '3. الترطيب العميق والنوم الهادئ الكافي لتجديد خلايا البشرة طبيعياً.'
    ],
    contentEn: [
      'Radiant skin starts with a consistent daily routine and high-purity ingredients.',
      'Key routine steps: double cleanse at night, apply antioxidant serums in the morning, and ensure deep hydration and restful sleep.'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
  }
];

interface BlogSectionProps {
  lang: Language;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);
  const isAr = lang === 'ar';

  // Deep-linking: auto-open article modal if URL contains #article-<id> or #blog-<id>
  React.useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash && (hash.startsWith('#article-') || hash.startsWith('#blog-'))) {
        const articleId = hash.replace(/^#(article-|blog-)/, '');
        const matched = ARTICLES.find(
          (a) => a.id === articleId || a.id.includes(articleId) || articleId.includes(a.id)
        );
        if (matched) {
          setSelectedArticle(matched);
        }
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const categories = [
    { key: 'all', labelAr: `جميع المقالات (${ARTICLES.length})`, labelEn: `All Articles (${ARTICLES.length})` },
    { key: 'gifting', labelAr: 'هدايا ومناسبات ✨', labelEn: 'Gifting & Events ✨' },
    { key: 'digital', labelAr: 'أمان وريادة ومنتجات رقمية', labelEn: 'Tech & Digital Business' },
    { key: 'lifestyle', labelAr: 'تسويق وضيافة وتطوير الذات', labelEn: 'Marketing & Hospitality' },
    { key: 'fun', labelAr: 'تنظيم فعاليات وألعاب', labelEn: 'Event Planning & Games' },
    { key: 'luxury', labelAr: 'عطور وأزياء راقية', labelEn: 'Luxury & Fashion' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter((art) => art.categoryKey === selectedCategory);

  const handleShare = () => {
    if (navigator.clipboard && selectedArticle) {
      const shareUrl = `${window.location.origin}/#article-${selectedArticle.id}`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="hanan-blog" className="py-16 bg-[#FAF8F5] border-y border-stone-200" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300/80">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>{isAr ? 'مقالات وأدلة حنان ستور الحصرية' : 'Hanan Editorial & Guides'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 font-serif">
            {isAr ? 'محتوى أصلي ومعرفة تلهم أوقاتك وجمعاتك' : 'Original Insights for Gatherings & Lifestyle'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {isAr 
              ? 'أدلة إرشادية وتجارب متجددة مكتوبة لمساعدتك في تنظيم أمتع الجمعات، استثمار الوقت، واختيار أندر القطع.'
              : 'Helpful articles and expert tips to organize joyful gatherings, enhance digital planning, and discover rare beauty.'}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-300 hover:bg-stone-50'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const title = isAr ? article.titleAr : article.titleEn;
            const category = isAr ? article.categoryAr : article.categoryEn;
            const summary = isAr ? article.summaryAr : article.summaryEn;

            return (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all flex flex-col group cursor-pointer relative"
              >
                {/* Image Cover */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-stone-900/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold">
                    {category}
                  </span>

                  {article.isNew && (
                    <span className="absolute top-3 end-3 px-2.5 py-1 rounded-full bg-emerald-600/95 backdrop-blur-xs text-white text-[10px] font-bold shadow-xs">
                      {isAr ? '✨ مقال جديد' : '✨ New Post'}
                    </span>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-stone-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                      {title}
                    </h3>

                    <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed">
                      {summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
                    <span>{isAr ? 'قراءة الدليل كاملاً' : 'Read Full Guide'}</span>
                    {isAr ? (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2 text-xs text-amber-800 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? selectedArticle.categoryAr : selectedArticle.categoryEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                  title={isAr ? 'نسخ الرابط' : 'Share'}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Reading Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-stone-800 leading-relaxed text-xs sm:text-sm">
              <h1 className="font-serif font-black text-stone-900 text-lg sm:text-2xl leading-tight">
                {isAr ? selectedArticle.titleAr : selectedArticle.titleEn}
              </h1>

              <div className="flex items-center gap-4 text-xs text-stone-500 pb-4 border-b border-stone-100">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{isAr ? 'بقلم: فريق تحرير حنان ستور' : 'By: Hanan Editorial Team'}</span>
              </div>

              <div className="rounded-2xl overflow-hidden h-56 sm:h-72">
                <img
                  src={selectedArticle.image}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 pt-2">
                {(isAr ? selectedArticle.contentAr : selectedArticle.contentEn).map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-stone-700 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-2">
                <span className="font-bold text-amber-950 block">
                  {isAr ? 'تنويه تحريري ومصداقية المحتوى (AdSense Transparency):' : 'Editorial Disclosure:'}
                </span>
                <p className="text-amber-900/80">
                  {isAr
                    ? 'جميع مقالاتنا وإرشاداتنا أصلية ومكتوبة بواسطة فريق حنان ستور بهدف إثراء المحتوى العربي وتقديم قيمة حقيقية للزوار وفق إرشادات الجودة المعتمدة.'
                    : 'All articles are original and curated by our editorial team to provide genuine information to our readers.'}
                </p>
              </div>
            </div>

            {/* Modal Bottom Close */}
            <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                {isAr ? 'إغلاق المقال' : 'Close Article'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
