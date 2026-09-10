import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Sparkles, X, Share2, Check } from 'lucide-react';
import { Language } from '../types';

interface Article {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  categoryKey: 'gifting' | 'digital' | 'lifestyle' | 'fun' | 'luxury' | 'ai';
  toolActionType?: 'text-to-video' | 'article-writer';
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
    id: 'ai-text-to-video-tools-guide-2026',
    titleAr: 'دليل أداة تحويل النص إلى فيديو بالذكاء الاصطناعي: كيف تصنع مقاطع سينمائية وتسويقية مذهلة من مجرد كلمات في 2026',
    titleEn: 'AI Text-to-Video Generation Guide: Crafting Cinematic & Commercial Videos from Words in 2026',
    categoryAr: 'أدوات الذكاء الاصطناعي 🤖',
    categoryEn: 'AI Video & Creative Tech 🤖',
    categoryKey: 'ai',
    toolActionType: 'text-to-video',
    date: '2026-09-10',
    readTime: '8 دقائق',
    summaryAr: 'كل ما تحتاج لمعرفته عن أداة تحويل النص إلى فيديو: نماذج التوليد السينمائي Sora وRunway وKling، أسرار صياغة البرومبت الإخراجي وحركة الكاميرا، وكيف تحول أفكارك ومنتجاتك إلى ريلز وإعلانات احترافية مجاناً.',
    summaryEn: 'The definitive guide to AI Text-to-Video tools in 2026: exploring diffusion models, cinematic camera movement prompts, luxury commercial workflows, and hands-on video creation for TikTok and YouTube.',
    contentAr: [
      'يشهد عام 2026 ثورة بصرية غير مسبوقة في صناعة المحتوى الرقمي، حيث تحولت فكرة تحويل الكلمات والسيناريوهات المكتوبة إلى مقاطع فيديو فائقة الدقة والواقعية من خيال علمي إلى حقيقة يومية في متناول الجميع. لم يعد صناع المحتوى ورواد الأعمال بحاجة إلى معدات تصوير باهظة الثمن أو استوديوهات إضاءة معقدة لإنتاج مقاطع فيديو تسويقية أو سينمائية تأسر الأنظار.',
      'أطلقت منصة حنان ستور أداة تحويل النص إلى فيديو المدمجة مجاناً لجميع زوار الموقع، لتمكين الجميع من تجربة التوليد الفوري للمشاهد السينمائية ومخططات الإخراج (Storyboards). إليك في هذا الدليل الشامل كل ما تحتاج لمعرفته لاحتراف هذه التقنية وصناعة فيديوهات تتصدر المشاهدات:',
      '1. كيف تعمل تقنية تحويل النص إلى فيديو (Diffusion & Spatio-Temporal Video Models): تعتمد خوارزميات الفيديو الحديثة (مثل OpenAI Sora، Runway Gen-3 Alpha، Kling AI، وPika) على فهم العلاقات المكانية والزمنية. يقوم النموذج بتحليل الكلمات المفتاحية في النص، وتوليد إطارات متتالية تحافظ على ثبات ملامح الشخصيات والمنتجات وحركة الضوء والفيزياء الواقعية دون اهتزاز أو تشوهات بصرية.',
      '2. هندسة البرومبت الإخراجي (Cinematic Prompt Engineering): للحصول على فيديو فائق الواقعية، يجب ألا تكتفي بوصف العنصر فقط، بل حدد أربعة عناصر إخراجية جوهرية: زاوية وحركة الكاميرا (مثل Slow Push-in، أو 360 Orbit، أو Extreme Macro)، نوع العدسة والعمق الميداني (Anamorphic Lens, Shallow Depth of Field f/1.2)، الإضاءة والأجواء (Cinematic Golden Hour, Dramatic Rim Lighting, Volumetric Fog)، ومعدل الإطارات ونعومة الحركة (4K 60fps Photorealistic).',
      '3. صناعة إعلانات المنتجات الفاخرة للريلز والتيك توك: إذا كنت تدير متجراً للمنتجات الرقمية أو العطور أو الهدايا، فإن الفيديوهات القصيرة (بأبعاد 9:16) هي الأسرع انتشاراً ومبيعات. يمكنك إدخال سيناريو يركز على تفاصيل المنتج، كانبعاث دخان العود الملكي بهدوء فوق رمال الصحراء الذهبية، مع تعليق صوتي فخم يجذب المشاهد في أول 3 ثوانٍ وهي اللحظة الحاسمة لمنع التخطي (Hook).',
      '4. تنظيم المخطط الزمني للمشاهد (Storyboard Breakdown): أفضل الفيديوهات الناجحة لا تعتمد على لقطة واحدة ممتدة، بل تتكون من 3 لقطات متناسقة: لقطة تأسيسية خاطفة (00:00 - 00:03) تلفت الانتباه، لقطة تفصيلية مقربة للمنتج أو الفكرة (00:03 - 00:07)، ولقطة ختامية متوازنة مع دعوة صريحة للعمل (00:07 - 00:10).',
      '5. جرب الأداة التفاعلية المدمجة الآن: وفرنا لك في حنان ستور أداة تحويل النص إلى فيديو التفاعلية مباشرة على الموقع، لتوليد سيناريوهاتك، معاينة المحاكاة البصرية، ونسخ البرومبت الشامل الجاهز للاستخدام الفوري بضغطة زر واحدة.'
    ],
    contentEn: [
      'In 2026, generative video AI has democratized high-end cinematography, enabling solopreneurs and creators to turn raw text into breathtaking 4K footage within seconds.',
      'Hanan Store has introduced an integrated AI Text-to-Video tool directly on the platform to empower creators. Here is your roadmap to mastering generative video prompts and storyboard production:',
      '1. Understanding Temporal Video Models: Cutting-edge systems (Sora, Runway Gen-3, Kling) leverage spatio-temporal diffusion to ensure consistent physics, lighting coherence, and character fidelity across consecutive video frames.',
      '2. Cinematic Prompt Architecture: Specify camera dynamics (Slow Push-In, 360 Orbit), lens depth (50mm f/1.2 anamorphic), volumetric lighting, and color grading to unlock cinematic elegance.',
      '3. Formats for Viral Reach: Leverage 9:16 vertical orientation for TikTok and Instagram Reels. Craft high-impact 3-second visual hooks focusing on tactile textures and emotional storytelling.',
      '4. Three-Act Storyboard: Structure your clip into an establishing opener, a detailed macro feature showcase, and an authoritative closing call-to-action.',
      '5. Try the Interactive Built-in Tool: Click the button below to launch our free AI Text-to-Video tool and generate your custom storyboards right now.'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'ai-article-generator-seo-mastery-2026',
    titleAr: 'دليل أداة إنشاء المقالات بالذكاء الاصطناعي: أسرار كتابة محتوى متصدر لمحركات البحث ومتوافق تماماً مع Google AdSense',
    titleEn: 'AI Article Generator & SEO Mastery Guide: Writing High-Ranking Content Compliant with AdSense',
    categoryAr: 'أدوات الذكاء الاصطناعي 🤖',
    categoryEn: 'AI Content & SEO Growth 🤖',
    categoryKey: 'ai',
    toolActionType: 'article-writer',
    date: '2026-09-10',
    readTime: '9 دقائق',
    summaryAr: 'دليلك الحصري لاستخدام أداة كتابة المقالات بالذكاء الاصطناعي: صياغة محتوى حصري 100%، استراتيجيات تصدر محركات البحث (SEO)، معايير قبول وتحقيق الدخل عبر Google AdSense، وتوليد المقالات الجاهزة للنشر بضغطة زر.',
    summaryEn: 'How to utilize AI article generation tools to craft unique, authoritative, SEO-dominating long-form articles that strictly adhere to Google AdSense helpful content guidelines.',
    contentAr: [
      'تطورت خوارزميات محركات البحث في عام 2026 بشكل جذري؛ فلم يعد التنافس مقتصراً على حشو الكلمات المفتاحية أو نشر نصوص آلية مكررة، بل أصبح التركيز المطلق منصباً على تقديم "محتوى ذي قيمة بشرية حقيقية" (Helpful Content) يرتكز على الخبرة والمصداقية وموثوقية المصدر (Google EEAT Guidelines).',
      'ولمساعدة الكتاب وأصحاب المواقع وزوار حنان ستور في إنتاج محتوى استثنائي يجذب القراء ويتوافق مع اشتراطات برنامج Google AdSense الربحي، قمنا بتضمين "أداة إنشاء مقالات بالذكاء الاصطناعي" مباشرة على موقعنا. إليك أسرار استخدام الأداة لتحقيق أفضل النتائج:',
      '1. ركائز المحتوى المتوافق مع Google AdSense: تشترط جوجل أن يقدم المقال معلومات أصلية غير منسوخة، وأن يكون منسقاً بشكل احترافي يسهل تصفحه على الجوال، مع وضوح حقوق النشر وسياسات الخصوصية والشفافية التحريرية. المقالات المنشورة عبر أداتنا مصممة هيكلياً لتلبي هذه المعايير بنسبة 100%.',
      '2. الهيكلية الذهبية للمقالات المتصدرة (H1, H2, H3 Architecture): احرص دائماً على أن يبدأ المقال بعنوان رئيسي جذاب يتضمن نية البحث (Search Intent)، يليه وصف ميتا دقيق يجذب النقرات في صفحة نتائج جوجل (CTR). ثم قسّم الموضوع إلى ترويسات فرعية واضحة، مع تدعيم الأفكار بنقاط بارزة (Bullet Points) وجداول محتويات مريحة للعين.',
      '3. تضمين الكلمات الدلالية الثانوية (LSI Keywords): بدلاً من تكرار الكلمة المفتاحية الرئيسية بشكل مصطنع، وجه الأداة للتركيز على المرادفات والمصطلحات المرتبطة بالمجال، مما يمنح المقال ثراءً لغوياً تفضله خوارزميات الذكاء الاصطناعي في محركات البحث الحديثة.',
      '4. إضافة قسم الأسئلة الشائعة (FAQ Schema): تشير أحدث إحصائيات السيو إلى أن المقالات التي تتضمن إجابات دقيقة ومباشرة على أسئلة المستخدمين تحظى بفرصة أكبر بنسبة 65% للظهور في المقتطفات المميزة (Featured Snippets) أعلى نتائج البحث.',
      '5. استخدام أداة حنان ستور المجانية للكتابة: يمكنك الآن النقر على زر الأداة الموجود في الموقع، إدخال أي موضوع تريده، واختيار النبرة والعمق، لتحصل في ثوانٍ على مقال متكامل منسق وجاهز للنشر أو النسخ أو التصدير بصيغة Markdown مع نقاط تقييم السيو الفورية.'
    ],
    contentEn: [
      'Search ranking criteria in 2026 place unprecedented weight on genuine user utility, domain trust, and transparent editorial craftsmanship under Google’s EEAT framework.',
      'Hanan Store’s embedded AI Article Writer empowers website owners and creators to generate comprehensive, compliant, and engaging long-form content. Here are the principles for commanding search traffic and AdSense monetization:',
      '1. AdSense Policy Alignment: Google demands authentic, original perspectives with zero spammy scraping. Articles must feature clear structural hierarchy, high dwell-time elements, and transparent authorship.',
      '2. The H1/H2/H3 Typographic Architecture: Balance a compelling, query-focused title with structured subheadings, bullet summaries, and an intuitive table of contents.',
      '3. Semantic & LSI Keyword Density: Weave natural synonyms and contextual terminology rather than forced repetitive keywords.',
      '4. High-Impact FAQ Sections: Directly resolving common user inquiries triggers Google Featured Snippets and voice search visibility.',
      '5. Launch the Built-in AI Writer: Click below to open our free AI Article Writer tool, configure your topic, and generate publish-ready markdown in seconds.'
    ],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'oud-incense-masterclass-2026',
    titleAr: 'دليل العود الفاخر والمروكي الملكي: كيف تميزين خشب العود الطبيعي وأسرار التبخير وتثبيت الرائحة 48 ساعة',
    titleEn: 'The Connoisseur’s Guide to Royal Oud: Identifying Pure Agarwood & Secrets to 48-Hour Incense Longevity',
    categoryAr: 'بخور وعطور فاخرة',
    categoryEn: 'Royal Oud & Incense',
    categoryKey: 'luxury',
    date: '2026-09-08',
    readTime: '7 دقائق',
    summaryAr: 'دليلكِ العملي للتمييز بين خشب العود الطبيعي والمحسن كالمروكي والكلمنتان، اختبارات جودة الزبد ورائحة الراتنج النقي، وسر الرماد البارد في تثبيت البخور بالأقمشة والمجالس لأيام.',
    summaryEn: 'An essential guide to inspecting natural vs. enhanced agarwood chips, observing resin bubbling, and mastering the cool-ash technique to infuse fabrics and interiors with enduring luxury.',
    contentAr: [
      'يحتل خشب العود والبخور مكانة رفيعة في الثقافة العربية الأصيلة؛ فهو ليس مجرد طيب يفوح في المجالس، بل رمز متوارث للضيافة الرفيعة والاحتفاء الكريم بالضيوف. ومع تنوع الأسواق واختلاط الأنواع، تبحث السيدة الذواقة دائماً عن المعايير الدقيقة التي تضمن لها اقتناء خشب العود النقي بأعلى درجات الفخامة.',
      'إليكِ دليلكِ العملي الشامل لفحص العود واكتشاف أسرار التبخير الملكي خطوة بخطوة:',
      '1. التمييز بين العود الطبيعي والعود المحسن (Natural vs. Enhanced Chips): العود الطبيعي الخالص ينشأ بفعل تفاعل طبيعي داخل جذوع الأشجار المعمرة لعدة عقود، وتكون عروقه الزيتية متفرقة بلون بني داكن أو أسود مائل للرمادي. أما العود المحسن الفاخر (مثل مروكي دبل سوبر محسن بريسين نقي) فيتم تزويده براتنج طبيعي بيور ليعطي كثافة وثباتاً متجانساً في الجمعات الكبيرة دون روائح غريبة.',
      '2. اختبار الغليان والزبد على الجمر (The Resin Bubble Test): عند وضع كسرة العود الأصلية على الجمر الهادئ، يظهر فوراً زيت العود النقي وهو يغلي على شكل فقاعات لامعة (يُعرف شعبياً بالزبد). إذا استمر الزبد في الغليان مع انبعاث دخان بارد أبيض مائل للزرقة لا يدمع العين ولا يخدش الحلق، فأنتِ أمام خشب أصيل ذي جودة ملكية.',
      '3. قاعدة الرماد البارد (The Cool-Ash Technique): أكبر خطأ يقع فيه الكثيرون هو رمي كسرة العود مباشرة على فحم متوهج شديد الاحمرار؛ فالحرارة المباشرة تحرق ألياف الخشب قبل أن يتبخر الزيت، مما يولد رائحة كربون غير مرغوبة. السر: اتركي الجمر حتى يهدأ تماماً وتتكون عليه طبقة رقيقة من الرماد الأبيض، أو ضعي رقاقة خفيفة جداً من القصدير أو الميكا، لتتسخن الكسرة بنعومة وتطلق عبيرها الساحر لأطول وقت ممكن.',
      '4. فن تثبيت البخور بالأقمشة والمجالس (Scent Locking Method): جزيئات دخان العود تبحث عن وسيط دهني أو رطب لتستقر فيه. قبل إشعال المبخرة، رشي الستائر، العبايات، ووسائد المجلس برذاذ ماء الورد المخفف أو مسحة خفيفة من المسك الأبيض. ستمسك الألياف الرطبة بدخان البخور وتحتجزه لأكثر من 48 ساعة حتى مع تهوية الغرفة.',
      '5. التخزين الذكي للعود ودهن العود: احتفظي بكسر العود داخل صناديق خشبية مبطنة بالمخمل أو علب زجاجية محكمة في مكان جاف ومعتدل الحرارة بعيداً عن الرطوبة وأشعة الشمس، وتجنبي حفظها في أكياس بلاستيكية رديئة قد تسحب الزيوت العطرية من الخشب مع مرور الوقت.'
    ],
    contentEn: [
      'Pure agarwood (Oud) is the pinnacle of Arabian fragrance heritage, representing timeless hospitality, dignity, and elevated sensory luxury.',
      'Mastering the art of royal incense evaluation and home application:',
      '1. Distinguishing Natural vs. Enhanced: Wild natural chips feature irregular dark resin veins formed over decades, while high-grade enhanced chips (like premium Moroki) are infused with clean natural resin to ensure consistent, rich aroma throughout large halls.',
      '2. The Resin Bubbling Indicator: Genuine agarwood will visually bubble with glistening aromatic oil over gentle heat. The resulting smoke should be soothing, smooth, and gentle on the eyes and throat.',
      '3. The Cool-Ash Technique: Never drop delicate oud chips onto scorching red coals. Wait until coals develop a gentle blanket of white ash or place a thin mica plate over the ember. This prevents wood charring and releases pure aromatic oils slowly.',
      '4. Scent Locking with Moisture: Fragrance molecules adhere exceptionally well to hydrated textiles. Lightly mist curtains, velvet cushions, and abayas with pure rosewater or white musk before fumigation for a scent trail that persists for days.',
      '5. Proper Storage: Keep precious wood chips sealed in velvet-lined boxes or airtight glass jars away from humidity and direct sunlight to preserve volatile essential oils.'
    ],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 'goodnotes-time-blocking-mastery-2026',
    titleAr: 'دليل التخطيط الأسبوعي وإدارة الوقت عبر الأيباد: 5 استراتيجيات ذكية لمضاعفة الإنتاجية والتوازن الشخصي',
    titleEn: 'Digital Planning Mastery on iPad: 5 Proven Strategies to Double Focus & Prevent Burnout in 2026',
    categoryAr: 'تخطيط رقمي وإنتاجية',
    categoryEn: 'Digital Productivity & Growth',
    categoryKey: 'digital',
    date: '2026-09-08',
    readTime: '6 دقائق',
    summaryAr: 'وداعاً للتشتت وقوائم المهام المحبطة: كيف تحولين جهاز الأيباد وتطبيقات GoodNotes والبلانر التفاعلي إلى نظام إدارة حياة متكامل يعيد إليك راحة البال والتركيز العميق.',
    summaryEn: 'Say goodbye to chaotic to-do lists. Learn how to transform your iPad, GoodNotes, and interactive digital planners into a seamless life-operating system.',
    contentAr: [
      'في عصر الإشعارات المتلاحقة والمهام المتراكمة، يجد الكثير منا صعوبة في التوفيق بين التزامات العمل، رعاية الأسرة، وتخصيص وقت للراحة والنمو الشخصي. الانتقال إلى التخطيط الرقمي عبر الأيباد لم يعد مجرد رفاهية، بل أصبح الأداة الأكثر فاعلية لتنظيم الفوضى الذهنية وتحويل الأهداف الكبرى إلى خطوات يومية ملموسة.',
      'إليكِ 5 استراتيجيات مجربة لتنظيم أسبوعك باحترافية عبر البلانر الرقمي التفاعلي:',
      '1. منهجية حجب الوقت (Time Blocking Framework): بدلاً من كتابة قائمة مهام طويلة وغير واقعية (To-Do List) تصيبك بالإحباط بنهاية اليوم، قسمي يومك في البلانر إلى كتل زمنية ملونة: كتلة للعمل المركز الخالي من التشتت (Deep Work)، كتلة للأمور العائلية والمنزلية، وكتلة غير قابلة للتفاوض للاعتناء بذاتك وراحتك.',
      '2. قاعدة 1-3-5 للأولويات اليومية: في بداية كل صباح، افتحي صفحة اليوم بالبلانر وحددي: مهمة واحدة رئيسية إذا أنجزتهاِ اعتبرتِ يومك ناجحاً، 3 مهام متوسطة، و5 مهام روتينية سريعة (مثل الرد على الإيميل أو دفع الفاتورة). هذا التوزيع يمنع التشتت ويمنحك شعوراً مستمراً بالتقدم.',
      '3. الاستفادة من الروابط التشعبية التفاعلية (Hyperlinked Navigation): ميزة بلانر 2026 التفاعلي هي إمكانية التنقل الفوري؛ فبلمسة واحدة بقلم الأبل على أي يوم أو شهر، تنتقلين مباشرة لصفحته التفصيلية دون الحاجة لتصفح مئات الصفحات يدوياً، مما يوفر وقتك ويجعل جلسة التخطيط ممتعة ومريحة.',
      '4. تتبع العادات اليومية بصرياً (Habit Tracking): بناء العادات الإيجابية يحتاج إلى تحفيز بصري مستمر. استخدمي جدول تتبع العادات في البلانر لتوثيق شرب لترين من الماء، أداء التمارين، قراءة 10 صفحات، وأذكار الصباح والمساء. رؤية سلسلة الإنجاز الخضراء كل يوم تفرز هرمون الدوبامين وتبقيكِ ملتزمة طوال الشهر.',
      '5. جلسة المراجعة الأسبوعية وفصل الأجهزة (The Weekly Reset Ritual): مساء كل جمعة أو سبت، خصصي 15 دقيقة هادئة مع فنجان قهوة لمراجعة ما تم إنجازه، وتدوين نقاط القوة، ونقل المهام المؤجلة للأسبوع القادم، ثم إغلاق التطبيق بسلام نفسي وبدء الأسبوع الجديد برؤية واضحة وطاقة متجددة.'
    ],
    contentEn: [
      'In our hyper-connected world, daily overwhelm often stems from fragmented attention rather than lack of time. Digital planning on iPad bridges clarity with intentional execution.',
      'Five core frameworks to maximize your digital planner in 2026:',
      '1. Visual Time Blocking: Group your calendar into designated color blocks—uninterrupted focus hours, household logistics, and personal recharging. This protects your boundaries against daily reactive tasks.',
      '2. The 1-3-5 Priority Architecture: Every morning, define 1 major outcome, 3 medium projects, and 5 quick operational items. This ensures substantial progress without evening burnout.',
      '3. Utilizing Hyperlinked Indexing: Take full advantage of GoodNotes interactive tabs to jump seamlessly from annual overviews to detailed weekly spreads in a single tap.',
      '4. Visual Habit Chains: Tracking physical hydration, daily reading, and mental wellness routines visually triggers positive reinforcement and ensures long-term consistency.',
      '5. The Weekend Reset Ritual: Dedicate 15 peaceful minutes every weekend to audit accomplishments, migrate pending goals, and welcome the upcoming week with zero cognitive debt.'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
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
      '3. فقرة الترفيه الجماعي التفاعلي: أكبر خطأ يقع فيه المنظمون هو ترك السهرة بدون مسار ترفيهي واضح، مما يدفع الحضور للانشغال بهواتفهم. جهزي مسبقاً باقة ألعاب حنان التفاعلية على الشاشة، وقسمي الضيوف إلى فرق للمنافسة في مسابقات مسلية تناسب الكبار والصغار.',
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
      '2. المنتجات الرقمية الأعلى طلباً في 2026: تتصدر المخططات الرقمية التفاعلية لأجهزة الأيباد وتطبيقات GoodNotes، ألعاب الجمعات التفاعلية العائلية للشاشات الذكية، وقوالب تنظيم الميزانيات الذكية قائمة المنتجات الأكثر رواجاً.',
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
    titleAr: 'دليل حنان ستور: كيف تخلقين أجواء حماسية لا تُنسى في جمعاتك العائلية ومناسباتك؟',
    titleEn: 'Hanan Gathering Guide: How to Create Unforgettable Gathering Energy for Family & Events',
    categoryAr: 'ألعاب وجمعات تفاعلية',
    categoryEn: 'Gathering Games',
    categoryKey: 'fun',
    date: '2026-09-01',
    readTime: '4 دقائق',
    summaryAr: 'أسرار تحويل أي جمعة عادية إلى ليلة من الضحك والمنافسة الذكية باستخدام ملفات الألعاب التفاعلية والشاشات الذكية بدون ملل.',
    summaryEn: 'Secrets to turning any casual gathering into a night of laughter and friendly rivalry using interactive game decks.',
    contentAr: [
      'تعتبر الجمعات العائلية ولقاءات الأصدقاء من أغلى اللحظات الإنسانية التي تجدد الطاقة وتبني الذكريات. لكن مع كثرة الانشغال بالهواتف، قد تفقد الجمعات بريقها الحماسي.',
      'هنا يأتي دور ألعاب الجمعات التفاعلية الحديثة المبتكرة في متجر حنان، حيث يتم عرض الأسئلة والتحديات على شاشة التلفاز أو الأيباد ليشترك الجميع في التصويت والضحك والتنافس.',
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
  onOpenTextToVideo?: () => void;
  onOpenArticleWriter?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  lang,
  onOpenTextToVideo,
  onOpenArticleWriter
}) => {
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
    { key: 'ai', labelAr: 'أدوات الذكاء الاصطناعي 🤖', labelEn: 'AI Tools 🤖' },
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

                    {/* Quick Direct Action Tool Button on Card */}
                    {article.toolActionType === 'text-to-video' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenTextToVideo) onOpenTextToVideo();
                        }}
                        className="w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>{isAr ? 'جرّب أداة تحويل النص إلى فيديو الآن 🎬' : 'Launch Text to Video Tool 🎬'}</span>
                      </button>
                    )}

                    {article.toolActionType === 'article-writer' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenArticleWriter) onOpenArticleWriter();
                        }}
                        className="w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>{isAr ? 'جرّب أداة كتابة المقالات بالذكاء الاصطناعي ✍️' : 'Launch AI Article Writer ✍️'}</span>
                      </button>
                    )}
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

              {/* Dedicated Tool Launch Callout inside Reading Modal */}
              {selectedArticle.toolActionType === 'text-to-video' && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border border-amber-500/40 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1 text-center sm:text-start">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">
                      {isAr ? 'أداة تفاعلية مدمجة على الموقع' : 'Interactive In-Site Tool'}
                    </span>
                    <h3 className="font-serif font-bold text-white text-base">
                      {isAr ? 'جرّب أداة تحويل النص إلى فيديو الآن مجاناً' : 'Try AI Text to Video Generator Now'}
                    </h3>
                    <p className="text-xs text-stone-300">
                      {isAr ? 'أدخل النص وشاهد محاكاة المشاهد، حركة الكاميرا، والبرومبت الإخراجي الشامل.' : 'Enter your script and view simulated scene cuts, 4K prompts and storyboard.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      if (onOpenTextToVideo) onOpenTextToVideo();
                    }}
                    className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs shadow-md transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    {isAr ? 'فتح أداة الفيديو الآن 🎬' : 'Open Video Tool 🎬'}
                  </button>
                </div>
              )}

              {selectedArticle.toolActionType === 'article-writer' && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 border border-emerald-500/40 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1 text-center sm:text-start">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                      {isAr ? 'أداة تفاعلية مدمجة على الموقع' : 'Interactive In-Site Tool'}
                    </span>
                    <h3 className="font-serif font-bold text-white text-base">
                      {isAr ? 'جرّب أداة كتابة المقالات بالذكاء الاصطناعي الآن' : 'Try AI Article Writer Tool Now'}
                    </h3>
                    <p className="text-xs text-stone-300">
                      {isAr ? 'اكتب مقالات حصرية متوافقة مع السيو وأدسنس بضغطة زر مع تصدير Markdown.' : 'Generate 100% original, SEO and AdSense compliant long-form articles.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      if (onOpenArticleWriter) onOpenArticleWriter();
                    }}
                    className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-xs shadow-md transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    {isAr ? 'فتح أداة المقالات الآن ✍️' : 'Open Writer Tool ✍️'}
                  </button>
                </div>
              )}

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
