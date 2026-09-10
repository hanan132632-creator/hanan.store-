import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Mail, 
  PhoneCall, 
  MapPin, 
  ExternalLink,
  Cookie,
  Award,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

export type LegalTab = 'privacy' | 'terms' | 'adsense' | 'about' | 'contact';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTab?: LegalTab;
  onOpenAdSenseAudit?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTab = 'privacy',
  onOpenAdSenseAudit
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const tabHeaderData = {
    privacy: {
      titleAr: 'وثيقة سياسة الخصوصية وحماية البيانات',
      titleEn: 'Official Privacy & Data Protection Policy',
      badgeAr: 'سارية ومحدثة لعام 2026',
      badgeEn: 'Active 2026',
      subAr: 'متوافقة مع نظام حماية البيانات الشخصية السعودي (PDPL) ومعايير Google AdSense وGDPR',
      subEn: 'Compliant with Saudi PDPL, Google AdSense Policies, and GDPR requirements',
      icon: ShieldCheck,
      iconColor: 'text-amber-700 bg-amber-100',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    about: {
      titleAr: 'من نحن • قصة متجر حنان',
      titleEn: 'About Hanan Store',
      badgeAr: 'علامة موثقة وهوية مسجلة',
      badgeEn: 'Verified Brand',
      subAr: 'حنان ستور (xn--mgblao3hjb.store) — ألعاب جمعات، منتجات رقمية، وعطور فاخرة',
      subEn: 'Authentic brand crafting memorable gathering games, digital planners, and curated luxury',
      icon: Sparkles,
      iconColor: 'text-amber-600 bg-amber-50',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    contact: {
      titleAr: 'اتصل بنا وقنوات الدعم المباشر والشكاوى',
      titleEn: 'Official Contact & Customer Support Desk',
      badgeAr: 'خدمة عملاء 24/7',
      badgeEn: 'Active Support 24/7',
      subAr: 'وسائل التواصل المعتمدة لزوار المتجر، العملاء، والجهات الإشرافية والإعلانية',
      subEn: 'Direct verified contact lines for customers, visitors, and advertising auditors',
      icon: Mail,
      iconColor: 'text-emerald-700 bg-emerald-100',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    terms: {
      titleAr: 'الشروط والأحكام العامة ورخص الاستخدام',
      titleEn: 'Terms of Service & Licensing Agreements',
      badgeAr: 'لوائح تجارية معتمدة',
      badgeEn: 'Commercial Terms',
      subAr: 'ضوابط التجارة الإلكترونية، ترخيص الملفات الرقمية، وضمانات المعاملات الآمنة',
      subEn: 'Official e-commerce regulations, digital product licensing, and buyer guarantees',
      icon: FileText,
      iconColor: 'text-stone-700 bg-stone-200',
      badgeColor: 'bg-stone-100 text-stone-800 border-stone-200'
    },
    adsense: {
      titleAr: 'إفصاح إعلانات Google AdSense ومعايير الجودة',
      titleEn: 'Google AdSense Policy & Publisher Quality',
      badgeAr: 'متوافق مع إرشادات جوجل',
      badgeEn: 'AdSense Compliant',
      subAr: 'شفافية الإعلانات الممولة، حماية تجربة المستخدم، واعتماد ملف ads.txt الرسمي',
      subEn: 'Transparent ad labeling, non-intrusive layouts, and verified ads.txt integration',
      icon: Award,
      iconColor: 'text-amber-800 bg-amber-100',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    }
  };

  const currentHeader = tabHeaderData[activeTab];
  const IconComponent = currentHeader.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[92vh]"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/90">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${currentHeader.iconColor}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                  {isAr ? currentHeader.titleAr : currentHeader.titleEn}
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${currentHeader.badgeColor}`}>
                  {isAr ? currentHeader.badgeAr : currentHeader.badgeEn}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                {isAr ? currentHeader.subAr : currentHeader.subEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto border-b border-stone-200 bg-stone-100/60 px-4 py-2 gap-1.5 scrollbar-none text-xs font-bold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'سياسة الخصوصية والكوكيز' : 'Privacy & Cookies'}</span>
          </button>

          <button
            onClick={() => setActiveTab('adsense')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'adsense'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{isAr ? 'إفصاح جوجل أدسنس (AdSense)' : 'Google AdSense Policy'}</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'الشروط والأحكام' : 'Terms of Service'}</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'about'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'من نحن (فريق العمل)' : 'About Us'}</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{isAr ? 'اتصل بنا والشكاوى' : 'Contact Us'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-stone-700 leading-relaxed text-xs sm:text-sm">
          
          {/* 1. PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80">
                <h4 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>{isAr ? 'وثيقة سياسة الخصوصية المعتمدة (Privacy Policy)' : 'Official Privacy Policy Statement'}</span>
                </h4>
                <p className="text-xs text-amber-900/80 mt-1">
                  {isAr 
                    ? 'آخر تحديث: سبتمبر 2026. هذه الوثيقة مصممة لتتوافق مع معايير برنامج Google AdSense، نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL)، ومعايير GDPR و CCPA.'
                    : 'Last Updated: September 2026. Compliant with Google AdSense terms, Saudi Personal Data Protection Law (PDPL), GDPR, and CCPA.'}
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? '1. من نحن ونطاق سريان هذه السياسة' : '1. Who We Are & Scope'}
                </h5>
                <p>
                  {isAr
                    ? 'متجر حنان ستور (المشار إليه بـ "حنان ستور"، "حنان.store"، أو "xn--mgblao3hjb.store") يلتزم بأعلى معايير الشفافية وحماية خصوصية زواره وعملائه الكرام. توضح هذه السياسة كيف نقوم بجمع واستخدام ومشاركة وحماية معلوماتك عند زيارة موقعنا أو شراء منتجاتنا وملفاتنا الرقمية.'
                    : 'Hanan Store ("xn--mgblao3hjb.store" and "حنان.store") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your data.'}
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-amber-600" />
                  <span>{isAr ? '2. ملفات تعريف الارتباط (Cookies) وشبكات الإعلانات الخارجية' : '2. Cookies & Third-Party Advertising Vendors'}</span>
                </h5>
                <p>
                  {isAr
                    ? 'يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح، وتحليل حركة المرور، وتخصيص المحتوى والإعلانات المعروضة. نحن نتعامل مع مزودي خدمات إعلانية كبار مثل Google AdSense.'
                    : 'We use cookies to personalize content and ads, provide social media features, and analyze traffic. We partner with Google AdSense and third-party advertising vendors.'}
                </p>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <p className="font-semibold text-stone-900">
                    {isAr ? 'بنود جوجل الإعلانية وملف تعريف الارتباط DART:' : 'Google Advertising & DART Cookie:'}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-stone-600">
                    <li>
                      {isAr 
                        ? 'تستخدم Google، بصفتها مورداً لطرف ثالث، ملفات تعريف الارتباط لعرض الإعلانات على موقعنا.' 
                        : 'Google, as a third-party vendor, uses cookies to serve ads on our site.'}
                    </li>
                    <li>
                      {isAr
                        ? 'يسمح استخدام Google لملف تعريف الارتباط DART بعرض إعلانات للمستخدمين استناداً إلى زياراتهم لموقعنا ومواقع أخرى على شبكة الإنترنت.'
                        : 'Google’s use of the DART cookie enables it to serve ads to users based on their visit to our sites and other sites on the Internet.'}
                    </li>
                    <li>
                      {isAr
                        ? 'يمكن للمستخدمين إلغاء الاشتراك في استخدام ملف تعريف الارتباط DART عبر زيارة سياسة خصوصية شبكة الإعلانات والمحتوى من Google على الرابط: https://policies.google.com/technologies/ads'
                        : 'Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy at https://policies.google.com/technologies/ads'}
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? '3. البيانات التي نقوم بجمعها' : '3. Information We Collect'}
                </h5>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  <li>{isAr ? 'بيانات التصفح وسجلات الخادم (Log Files): عناوين IP، نوع المتصفح، الصفحات التي تمت زيارتها، والوقت المستغرق.' : 'Log files, IP addresses, browser type, referring pages.'}</li>
                  <li>{isAr ? 'بيانات إتمام الطلب: الاسم، البريد الإلكتروني، رقم الهاتف/الواتساب لتسليم المنتجات الرقمية وروابط التحميل الفورية.' : 'Order information: name, email, phone/WhatsApp for digital delivery.'}</li>
                  <li>{isAr ? 'لا نقوم إطلاقاً بتخزين أرقام البطاقات الائتمانية أو بيانات الدفع الحساسة، حيث تتم معالجتها عبر بوابات دفع بنكية معتمدة ومحمية بتشفير 256-bit SSL.' : 'We never store credit card numbers; transactions are processed through certified PCI-DSS compliant gateways.'}</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? '4. حقوق المستخدم وإلغاء الاشتراك (GDPR & PDPL)' : '4. User Privacy Rights'}
                </h5>
                <p>
                  {isAr
                    ? 'يحق لكل مستخدم وزائر طلب الاطلاع على بياناته أو تعديلها أو حذفها بالكامل من سجلاتنا في أي وقت عبر التواصل المباشر مع مسؤول الخصوصية على support@hanan.store.'
                    : 'Users have the right to access, rectify, or erase their personal data at any time by contacting privacy@hanan.store.'}
                </p>
              </section>
            </div>
          )}

          {/* 2. ADSENSE POLICY */}
          {activeTab === 'adsense' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300">
                <h4 className="font-bold text-stone-950 flex items-center gap-2 text-sm sm:text-base">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>{isAr ? 'التوافق مع سياسات برنامج Google AdSense' : 'Google AdSense Program Policies Compliance'}</span>
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  {isAr 
                    ? 'يلتزم موقع متجر حنان ستور وحنان فن نصاً وروحاً بجميع إرشادات جودة مشرفي المواقع وسياسات المحتوى المعتمدة من Google.' 
                    : 'Hanan Store strictly adheres to Google Webmaster quality guidelines and AdSense content policies.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'محتوى أصلي وقيمة معرفية حقيقية' : 'Original High-Value Content'}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr
                      ? 'يقدم الموقع مقالات وأدلة إرشادية حصرية حول تنظيم الفعاليات، ألعاب الجمعات العائلية، وتخطيط الميزانيات، مكتوبة بأيدي متخصصين، بعيداً عن المحتوى المنسوخ أو التوليد العشوائي.'
                      : 'We provide unique, original gathering guides, productivity planners, and lifestyle insights crafted for real readers.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'فصل واضح ومميز للإعلانات' : 'Clear Ad Labelling'}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr
                      ? 'جميع الوحدات الإعلانية تحمل وسماً صريحاً ومقروءاً بعنوان "إعلان ممول" أو "إعلانات Google" ولا يتم وضعها بطريقة تضلل المستخدمين أو تحثهم على النقرات الزائفة غير المقصودة.'
                      : 'All ad units are distinctly labeled as "Advertisement" and placed without deceptive layouts.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'ملف البائعين الرقميين المعتمدين (ads.txt)' : 'Authorized Sellers (ads.txt)'}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr
                      ? 'تم نشر ملف ads.txt معتمد في الجذر الرئيسي للنطاق لتأكيد ملكية الناشر وحماية المخزون الإعلاني من الانتحال وفق متطلبات منظمة IAB وجوجل.'
                      : 'An authorized ads.txt file is published at root domain according to IAB tech lab standards.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'تجربة مستخدم سريعة وخالية من النوافذ المنبثقة' : 'Fast, Non-Intrusive UX'}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isAr
                      ? 'الموقع خالٍ تماماً من النوافذ المنبثقة التطفلية (Pop-unders) أو المحولات التلقائية المزعجة، ومتوافق بنسبة 100% مع معايير Core Web Vitals.'
                      : 'Clean navigation with zero intrusive pop-unders or deceptive redirects.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-stone-900 block mb-1">
                    {isAr ? 'بيانات الناشر المعتمدة لدى جوجل:' : 'Publisher Details:'}
                  </span>
                  <div className="font-mono text-stone-600 space-y-0.5 text-[11px]">
                    <p>Domain: xn--mgblao3hjb.store (حنان.store)</p>
                    <p>AdSense File: /ads.txt</p>
                  </div>
                </div>

                {onOpenAdSenseAudit && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAdSenseAudit();
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>📊</span>
                    <span>{isAr ? 'فتح تقرير تدقيق أدسنس الحي' : 'Open Live AdSense Report'}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 3. TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200">
                <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm sm:text-base">
                  <FileText className="w-4 h-4 text-stone-700" />
                  <span>{isAr ? 'الشروط والأحكام العامة للمتجر (Terms & Conditions)' : 'Store Terms and Conditions'}</span>
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isAr ? 'تحدد هذه الشروط حقوق والتزامات المشتري والناشر وتخضع لأنظمة التجارة الإلكترونية السعودية.' : 'General terms governing purchases, file licenses, and delivery.'}
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? '1. رخصة استخدام الملفات الرقمية (Digital Licensing)' : '1. Digital Product Licensing'}
                </h5>
                <p>
                  {isAr
                    ? 'جميع الملفات الرقمية وألعاب الجمعات التفاعلية، البلانرات، والقوالب المعروضة في المتجر مخصصة للاستخدام الشخصي غير التجاري مدى الحياة. يحظر منعاً باتاً إعادة بيعها أو توزيعها مجاناً أو نشرها على مواقع أخرى دون إذن خطي مسبق من إدارة حنان ستور.'
                    : 'Digital files and gathering games are licensed for personal, non-commercial lifetime use. Reselling or public redistribution is strictly prohibited.'}
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? '2. سياسة الاسترجاع والاستبدال' : '2. Refund & Return Policy'}
                </h5>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  <li>
                    {isAr 
                      ? 'الملفات الرقمية: نظراً لطبيعة المنتجات الرقمية القابلة للتحميل الفوري، فإن عمليات الشراء نهائية، ولا يمكن استرجاع المبالغ إلا في حال وجود خلل تقني مثبت في الملف لم يتم حله خلال 24 ساعة من الشكوى.'
                      : 'Digital downloads: purchases are final once downloaded, unless an unresolvable technical fault occurs within 24 hours.'}
                  </li>
                  <li>
                    {isAr
                      ? 'المنتجات الملموسة (عطور ومجوهرات): يمكن الاسترجاع خلال 7 أيام من الاستلام بشرط بقاء المنتج في تغليفه الأصلي غير مفتوح.'
                      : 'Physical products: 7 days return guarantee if unopened and in original packaging.'}
                  </li>
                </ul>
              </section>
            </div>
          )}

          {/* 4. ABOUT US */}
          {activeTab === 'about' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-200/60 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-serif text-3xl font-black shadow-md shrink-0">
                  H
                </div>
                <div>
                  <h4 className="font-bold text-stone-950 font-serif text-base sm:text-lg">
                    {isAr ? 'قصة متجر حنان' : 'Story of Hanan Store'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {isAr
                      ? 'علامة سعودية رائدة تجمع بين سحر الفخامة الشرقية وابتكار الألعاب التفاعلية وصناعة المحتوى الرقمي المبهج للجمعات والمناسبات.'
                      : 'A boutique celebrating oriental elegance and innovative gathering games under one authentic brand.'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-stone-700">
                <h5 className="font-bold text-stone-900 text-sm">
                  {isAr ? 'رسالتنا وهدفنا' : 'Our Mission'}
                </h5>
                <p>
                  {isAr
                    ? 'انطلقت منصة متجر حنان لتكون مساحة تجمع بين الجمال والترفيه الراقي. نبتكر ألعاباً عائلية تفاعلية تحيي الجمعات وتخلق ذكريات لا تُنسى، ونختار بعناية أجود العطور والمجوهرات التي تعكس الأصالة والذوق الرفيع.'
                    : 'We craft memorable gatherings through interactive games while presenting curated royal fragrances and jewelry.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div>
                  <span className="text-xl font-black text-amber-700 font-serif block">+12,500</span>
                  <span className="text-[11px] text-stone-500">{isAr ? 'عميل سعيد بالجمعات' : 'Happy Customers'}</span>
                </div>
                <div>
                  <span className="text-xl font-black text-amber-700 font-serif block">100%</span>
                  <span className="text-[11px] text-stone-500">{isAr ? 'تسليم فوري موثوق' : 'Instant Delivery'}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xl font-black text-emerald-700 font-serif block">الرياض</span>
                  <span className="text-[11px] text-stone-500">{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
                </div>
              </div>
            </div>
          )}

          {/* 5. CONTACT US */}
          {activeTab === 'contact' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  {isAr ? 'قنوات الاتصال الرسمية ومكتب الدعم' : 'Official Contact Channels'}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isAr ? 'فريق خدمة العملاء والكونسيرج متواجد للإجابة على استفساراتكم وملاحظاتكم على مدار الساعة.' : 'Our concierge team is available to assist you 24/7.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">{isAr ? 'البريد الإلكتروني للإدارة والدعم:' : 'Support Email:'}</span>
                    <a href="mailto:support@hanan.store" className="text-amber-800 font-mono font-bold hover:underline">
                      support@hanan.store
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">{isAr ? 'خدمة العملاء والواتساب المباشر:' : 'WhatsApp Concierge:'}</span>
                    <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-mono font-bold hover:underline">
                      +966 50 000 0000
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start gap-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">{isAr ? 'العنوان المسجل بالمملكة:' : 'Headquarters:'}</span>
                    <span className="text-stone-600">
                      {isAr ? 'طريق الملك فهد، الرياض، المملكة العربية السعودية (رمز بريدي 12214)' : 'King Fahd Rd, Riyadh, Saudi Arabia'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Domain: xn--mgblao3hjb.store</span>
            <span>•</span>
            <span>حنان.store</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white font-bold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
