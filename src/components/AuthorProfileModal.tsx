import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  FileCheck,
  HeartHandshake,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';

interface AuthorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectArticle?: (articleId: string) => void;
}

export const AuthorProfileModal: React.FC<AuthorProfileModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectArticle
}) => {
  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const publishedArticles = [
    {
      id: 'mindful-financial-intelligence-wealth-preservation-2026',
      titleAr: 'دليل الذكاء المالي والادخار الذكي للأسر والموظفين 2026 (قاعدة 50/30/20 وشيتات الإكسل)',
      titleEn: 'Mindful Financial Intelligence & Wealth Preservation 2026',
      categoryAr: 'ذكاء مالي وميزانيات',
      categoryEn: 'Financial Wellness'
    },
    {
      id: 'sterling-silver-925-jewelry-preservation-eeat-2026',
      titleAr: 'دليل العناية بالفضة الإسترلينية 925 وتفادي الأكسدة واسوداد المعادن وفحص الأصالة',
      titleEn: '925 Sterling Silver & Fine Jewelry Preservation Masterclass 2026',
      categoryAr: 'مجوهرات وفضة إسترلينية',
      categoryEn: 'Fine Jewelry'
    },
    {
      id: 'digital-products-business-freelance-saudi-eeat-2026',
      titleAr: 'دليل تجارة وصناعة المنتجات الرقمية والعمل الحر في السعودية والخليج 2026',
      titleEn: 'Launching & Scaling a High-Margin Digital Products Storefront in Saudi Arabia 2026',
      categoryAr: 'منتجات رقمية وعمل حر',
      categoryEn: 'Digital Commerce'
    },
    {
      id: 'ipad-goodnotes-digital-planner-mastery-eeat-2026',
      titleAr: 'فن التخطيط الرقمي على الآيباد وتطبيقات GoodNotes لعام 2026 (تجارب 1200 مستخدم)',
      titleEn: 'Mastering Digital Planning on iPad & GoodNotes in 2026',
      categoryAr: 'بلانرات وإنتاجية رقمية',
      categoryEn: 'Digital Planners'
    },
    {
      id: 'royal-gifting-emotional-intelligence-etiquette-eeat-2026',
      titleAr: 'فن الإهداء الملكي والذكاء العاطفي لعام 2026 وسيكولوجية المفاجأة (500 بوكس إهداء)',
      titleEn: 'The Art of Royal Gifting & Emotional Intelligence 2026',
      categoryAr: 'إتيكيت الإهداء والضيافة',
      categoryEn: 'Luxury Gifting'
    },
    {
      id: 'royal-fragrance-layering-scent-architecture-eeat-2026',
      titleAr: 'أسرار فن طبقات العطور الملكية (Fragrance Layering) وثبات 48 ساعة بدهن العود والمسك',
      titleEn: 'Royal Fragrance Layering & Scent Architecture 2026',
      categoryAr: 'عطور ملكية وبصمة نيش',
      categoryEn: 'Fragrance Science'
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[92vh]"
        dir={isAr ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Header */}
        <div className="relative bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white p-6 sm:p-8 border-b border-amber-500/30">
          <button
            onClick={onClose}
            className="absolute top-4 end-4 p-2 text-stone-400 hover:text-white rounded-full bg-stone-800/80 hover:bg-stone-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Author Avatar with Gold Verified Ring */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt={isAr ? 'أ. حنان الشمري - الكاتبة والمؤسسة' : 'Hanan Al-Shammari - Author & Founder'}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span 
                className="absolute -bottom-2 -end-2 bg-emerald-600 text-white p-1 rounded-full border-2 border-stone-900 shadow-md"
                title={isAr ? 'كاتب بشري معتمد وموثق' : 'Verified Human Author'}
              >
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            {/* Author Meta Details */}
            <div className="text-center sm:text-start space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                  {isAr ? 'الكاتب الرئيسي والمؤسس • E-E-A-T Certified' : 'Primary Author & Founder • E-E-A-T Certified'}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{isAr ? 'كتابة بشرية حقيقية 100%' : '100% Human-Authored'}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                {isAr ? 'أ. حنان الشمري' : 'Hanan Al-Shammari'}
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                {isAr 
                  ? 'مؤسسة متجر «حنان ستور»، باحثة وكاتبة متخصصة في التجارة الرقمية، الإنتاجية الذهنية، وهندسة نمط الحياة الفاخر. خبرة أكثر من 7 سنوات في السوق السعودي والخليجي.'
                  : 'Founder of Hanan Store, researcher and specialist in digital commerce, mindful productivity, and luxury lifestyle architecture. 7+ years GCC experience.'}
              </p>

              {/* Fast Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs text-stone-300">
                <span className="flex items-center gap-1 text-amber-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'المملكة العربية السعودية • الرياض' : 'Riyadh, Saudi Arabia'}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-stone-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href="mailto:editorial@hanan.store" className="hover:text-amber-300 underline font-mono">
                    editorial@hanan.store
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-stone-800 text-sm leading-relaxed">
          
          {/* Section 1: Academic & Professional Credentials */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2 border-b border-stone-200 pb-2">
              <GraduationCap className="w-5 h-5 text-amber-600" />
              <span>{isAr ? 'المؤهلات العلمية والخبرات المهنية المعتمدة' : 'Academic Credentials & Professional Track Record'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Briefcase className="w-4 h-4 text-amber-700" />
                  <h4>{isAr ? 'الترخيص والاعتماد المهني الرسمي' : 'Official Licensing & Verification'}</h4>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {isAr 
                    ? '• وثيقة عمل حر معتمدة من وزارة الموارد البشرية والتنمية الاجتماعية بالسعودية (freelance.sa) في مجال تطوير وإدارة المتاجر والمحتوى الرقمي.\n• بكالوريوس في إدارة الأعمال ونظم المعلومات الإدارية (جامعة الملك سعود).\n• شهادة متخصصة في إدارة سلاسل الإمداد والتجارة الإلكترونية الحديثة.'
                    : '• Officially certified by the Saudi Ministry of Human Resources (freelance.sa) for e-commerce management and specialized digital content.\n• B.S. in Business Administration & Information Systems (King Saud University).\n• Certified in modern digital supply chains and e-commerce optimization.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <h4>{isAr ? 'الخبرة الميدانية والتطبيقية المباشرة' : 'Firsthand Practical Experience'}</h4>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {isAr 
                    ? '• تطوير وإطلاق أكثر من 20 مخططاً وبلانراً رقمياً تفاعلياً لأجهزة الآيباد وGoodNotes يستخدمها أكثر من 1,200 عميل خليجي.\n• إشراف ميداني ومباشر على فحص واختبار وتنسيق أكثر من 500 بوكس إهداء ومجوهرات فضة إسترلينية عيار 925 ودهن العود الملكي.\n• تصميم شيتات الإكسل المحاسبية لميزانيات الأسر والموظفين وتتبع مؤشرات الاستهلاك الواعي.'
                    : '• Architected 20+ interactive digital GoodNotes planners used by 1,200+ clients across the GCC.\n• Firsthand inspection of 500+ bespoke luxury 925 sterling silver gift boxes and artisanal Oud oils.\n• Developed automated household budgeting models and conscious consumerism guides.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Editorial Integrity & Anti-AI-Slop Pledge */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 via-white to-amber-50/50 border border-amber-300/80 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base font-serif">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <h3>{isAr ? 'ميثاق النزاهة التحريرية والتأكد البشري (E-E-A-T Guarantee)' : 'Editorial Standards & Human Authenticity Guarantee'}</h3>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {isAr 
                ? 'تلتزم أ. حنان الشمري وهيئة تحرير «متجر حنان» بصرامة بأعلى المعايير المهنية لتوفير محتوى بشري 100% يخدم القارئ العربي ويحترم عقله ووقته، وفق المبادئ التالية:'
                : 'Hanan Al-Shammari and the Hanan Store editorial board strictly adhere to the highest standards to provide 100% human-crafted content:'}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-800">
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span>{isAr ? 'أصالة كاملة وخلو تام من التوليد الآلي المكرر أو الترجمات الآلية السطحية (Anti-Slop).' : 'Zero generic AI slop, no machine translations; every article is written with human intention.'}</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span>{isAr ? 'توثيق علمي مرقم [1] [2] [3] يستند إلى هيئات ومنظمات معتمدة محلياً ودولياً.' : 'Rigorous numbered citations [1] [2] [3] from certified governmental and academic bodies.'}</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span>{isAr ? 'تجارب ميدانية حقيقية وملموسة مستمدة من منتجات المتجر وتفاعل العملاء الواقعي.' : 'Empirical field observations derived directly from actual customer feedback and real store fulfillment.'}</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span>{isAr ? 'تدقيق فني مشترك من خبراء ومختصين (مثل فاحصة المعادن الثمينة أ. سارة المطيري).' : 'Peer review and fact-checking by domain specialists (e.g. Gemology specialist Sarah Al-Mutairi).'}</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Co-Reviewer & Peer Verification Box */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-amber-300">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
                alt={isAr ? 'أ. سارة المطيري - أخصائية فحص المعادن الثمينة' : 'Sarah Al-Mutairi - Gemology & Silver Specialist'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center sm:text-start flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="font-bold text-stone-900 text-sm font-serif">
                  {isAr ? 'أ. سارة المطيري (مدققة فنية ومراجعة شريكة)' : 'Sarah Al-Mutairi (Technical Peer Reviewer)'}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  {isAr ? 'أخصائية الفضة والمجوهرات' : 'Fine Jewelry & 925 Silver Specialist'}
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isAr 
                  ? 'متخصصة في فحص نقاء سبائك الفضة الإسترلينية الإيطالية 925، واختبار التوصيل الحراري، وأحجار الزركون السويسري. تشرف على المراجعة الفنية لمقالات الفضة والمجوهرات والعناية بها.'
                  : 'Specialist in 925 Italian silver assay testing, thermal conductivity verifications, and Swiss Zircon stone setting. Supervises peer review for jewelry masterclasses.'}
              </p>
            </div>
          </div>

          {/* Section 4: Published Human Masterclasses */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>{isAr ? 'أحدث الأدلة والمقالات المنشورة بقلم أ. حنان الشمري' : 'Published Masterclasses by Hanan Al-Shammari'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {publishedArticles.map((art) => (
                <div 
                  key={art.id}
                  onClick={() => {
                    if (onSelectArticle) {
                      onSelectArticle(art.id);
                      onClose();
                    }
                  }}
                  className="p-3.5 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between gap-2"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">
                      {isAr ? art.categoryAr : art.categoryEn}
                    </span>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm mt-1.5 group-hover:text-amber-800 transition-colors line-clamp-2">
                      {isAr ? art.titleAr : art.titleEn}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-amber-700 font-bold pt-1 border-t border-stone-100">
                    <span>{isAr ? 'قراءة المقال والتوثيق ←' : 'Read Article & Citations →'}</span>
                    <span className="text-stone-400 font-mono text-[10px]">2026</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Direct Contact Channels & Editorial Inquiries */}
          <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-start">
              <h4 className="font-serif font-bold text-white text-base flex items-center gap-2 justify-center sm:justify-start">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'التواصل المباشر مع الكاتبة وإدارة التحرير' : 'Direct Editorial Contact'}</span>
              </h4>
              <p className="text-xs text-stone-300">
                {isAr 
                  ? 'نرحب باستفسارات القراء، المقترحات التحريرية، والتعاون المعرفي عبر البريد المعتمد.'
                  : 'Direct inquiries, editorial feedback, and partnership notes are warmly welcomed.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:editorial@hanan.store"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>editorial@hanan.store</span>
              </a>
              <a
                href="https://wa.me/966500000000?text=استفسار%20تحريري%20لمتجر%20حنان"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>{isAr ? 'متجر حنان ستور • الرقم التعريفي للناشر: pub-8161307018337815' : 'Hanan Store • Publisher: pub-8161307018337815'}</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
