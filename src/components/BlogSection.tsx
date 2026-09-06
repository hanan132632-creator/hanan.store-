import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, Sparkles, X, Share2, Check } from 'lucide-react';
import { Language } from '../types';

interface Article {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  date: string;
  readTime: string;
  summaryAr: string;
  summaryEn: string;
  contentAr: string[];
  contentEn: string[];
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: 'gathering-games-guide',
    titleAr: 'دليل حنان فن: كيف تخلقين أجواء حماسية لا تُنسى في جمعاتك العائلية ومناسباتك؟',
    titleEn: 'Hanan Fun Guide: How to Create Unforgettable Gathering Energy for Family & Events',
    categoryAr: 'ألعاب وجمعات (hanan.fun)',
    categoryEn: 'Gathering Games',
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
  const [copied, setCopied] = useState(false);
  const isAr = lang === 'ar';

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
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

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => {
            const title = isAr ? article.titleAr : article.titleEn;
            const category = isAr ? article.categoryAr : article.categoryEn;
            const summary = isAr ? article.summaryAr : article.summaryEn;

            return (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all flex flex-col group cursor-pointer"
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
