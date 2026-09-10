import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  Sliders, 
  Layers, 
  Film, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  X, 
  Tv, 
  Smartphone, 
  Square,
  Wand2,
  Clock,
  Palette,
  Camera,
  Share2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface TextToVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface Scene {
  sceneNumber: number;
  timecode: string;
  cameraMovement: string;
  visualDescriptionAr: string;
  visualDescriptionEn: string;
  narrationAr: string;
  narrationEn: string;
  promptAr: string;
  promptEn: string;
}

const PRESET_SCRIPTS = [
  {
    titleAr: 'إعلان تجاري لعطر ملكي فاخر',
    titleEn: 'Royal Perfume Luxury Commercial',
    icon: '✨',
    prompt: 'لقطة مقربة سينمائية لزجاجة عطر ذهبية فاخرة موضوعة على رمال صحراوية ناعمة مع انبعاث دخان العود الملكي بهدوء تحت أشعة الشمس الذهبية عند الغروب، مع رذاذ عطر يلمع في الهواء بحركة بطيئة 4K.'
  },
  {
    titleAr: 'فيديو تيك توك حماسي للجمعات والألعاب',
    titleEn: 'Viral TikTok Party Games Reel',
    icon: '🎮',
    prompt: 'جمعة عائلية مليئة بالبهجة والضحك حول شاشة تلفزيون تعرض لعبة تفاعلية من حنان فن، تفاعل سريع وتصفيق حماسي بين الفرق مع تأثيرات بصرية مشوقة وألوان دافئة مبهجة.'
  },
  {
    titleAr: 'فيديو وثائقي ساحر عن خشب العود والمروكي',
    titleEn: 'Cinematic Agarwood Documentary',
    icon: '🪵',
    prompt: 'مشهد وثائقي درامي بطيء لغابات العود العتيقة ثم انتقال إلى كسرة عود مروكي تغلي بالزيت العطري على جمر هادئ، يتصاعد منها دخان أزرق نقي مع إضاءة سينمائية عميقة.'
  },
  {
    titleAr: 'استعراض بلانر الأيباد وتطبيقات الإنتاجية',
    titleEn: 'iPad Digital Planner Showcase',
    icon: '📱',
    prompt: 'تصوير احترافي من الأعلى (Top-Down Flatlay) لجهاز أيباد برو مع قلم أبل ينقر بسلاسة على صفحات بلانر 2026 الرقمي التفاعلي، مع فنجان قهوة مبخر وأجواء صباحية مريحة ومنظمة.'
  }
];

export const TextToVideoModal: React.FC<TextToVideoModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const isAr = lang === 'ar';

  const [promptText, setPromptText] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9' | '1:1'>('9:16');
  const [visualStyle, setVisualStyle] = useState<'cinematic' | 'luxury_ad' | '3d_animation' | 'moody_documentary' | 'drone_aerial'>('cinematic');
  const [duration, setDuration] = useState<'5s' | '10s' | '15s'>('10s');
  const [motionPacing, setMotionPacing] = useState<'smooth_slow' | 'dynamic_fast' | 'orbit_360' | 'macro_dramatic'>('smooth_slow');
  const [audioMood, setAudioMood] = useState<'luxury_ambient' | 'energetic_modern' | 'oriental_strings'>('luxury_ambient');

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generationStep, setGenerationStep] = useState('');
  const [generatedResult, setGeneratedResult] = useState<{
    title: string;
    overview: string;
    scenes: Scene[];
    masterPrompt: string;
    bgStyleColor: string;
  } | null>(null);

  // Player preview simulation
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedStoryboard, setCopiedStoryboard] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Video playback simulation animation
  useEffect(() => {
    if (!isPlaying || !generatedResult) return;

    const totalSeconds = duration === '5s' ? 5 : duration === '10s' ? 10 : 15;
    const interval = 100; // update every 100ms

    const timer = setInterval(() => {
      setCurrentTime(prev => {
        const next = prev + 0.1;
        if (next >= totalSeconds) {
          setIsPlaying(false);
          return 0;
        }
        // update active scene index based on ratio
        if (generatedResult.scenes.length > 0) {
          const sceneDuration = totalSeconds / generatedResult.scenes.length;
          const idx = Math.min(
            Math.floor(next / sceneDuration),
            generatedResult.scenes.length - 1
          );
          setActiveSceneIndex(idx);
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, generatedResult, duration]);

  // Canvas visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const render = () => {
      time += 0.02;
      const w = canvas.width;
      const h = canvas.height;

      // Draw background gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      if (visualStyle === 'luxury_ad') {
        grad.addColorStop(0, '#1c1917');
        grad.addColorStop(0.5, '#78350f');
        grad.addColorStop(1, '#0c0a09');
      } else if (visualStyle === '3d_animation') {
        grad.addColorStop(0, '#1e1b4b');
        grad.addColorStop(0.5, '#4338ca');
        grad.addColorStop(1, '#0f172a');
      } else if (visualStyle === 'drone_aerial') {
        grad.addColorStop(0, '#064e3b');
        grad.addColorStop(0.5, '#0284c7');
        grad.addColorStop(1, '#0f172a');
      } else {
        grad.addColorStop(0, '#18181b');
        grad.addColorStop(0.5, '#27272a');
        grad.addColorStop(1, '#09090b');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw cinematic golden particles & light waves
      const particleCount = 24;
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time + i * 0.5) * 0.4 + 0.5) * w;
        const y = ((time * 20 + i * (h / particleCount)) % h);
        const radius = (Math.sin(time + i) + 2) * 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${0.15 + (Math.sin(time + i) * 0.1)})`;
        ctx.fill();
      }

      // Draw central cinematic light orb with pulse
      const pulse = Math.sin(time * 2) * 15;
      const radGrad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) * 0.45);
      radGrad.addColorStop(0, 'rgba(251, 191, 36, 0.25)');
      radGrad.addColorStop(0.5, 'rgba(180, 83, 9, 0.1)');
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, w, h);

      // Equalizer bars at the bottom if playing
      if (isPlaying && !isMuted) {
        const barCount = 18;
        const barWidth = w / (barCount * 1.5);
        const startX = (w - (barCount * barWidth * 1.2)) / 2;
        for (let b = 0; b < barCount; b++) {
          const barHeight = Math.abs(Math.sin(time * 4 + b)) * (h * 0.12) + 5;
          ctx.fillStyle = 'rgba(251, 191, 36, 0.75)';
          ctx.fillRect(startX + (b * barWidth * 1.2), h - 30 - barHeight, barWidth * 0.8, barHeight);
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [visualStyle, isPlaying, isMuted]);

  // Handle generation action
  const handleGenerate = () => {
    if (!promptText.trim()) {
      setPromptText(PRESET_SCRIPTS[0].prompt);
    }
    const finalPrompt = promptText.trim() || PRESET_SCRIPTS[0].prompt;

    setIsGenerating(true);
    setGenerationProgress(10);
    setGenerationStep(isAr ? 'تحليل النص واستنباط الأسلوب البصري...' : 'Analyzing text & extracting visual style...');

    setTimeout(() => {
      setGenerationProgress(35);
      setGenerationStep(isAr ? 'تأليف السيناريو وتقسيم اللقطات الزمنية...' : 'Composing storyboard & scene cuts...');
    }, 700);

    setTimeout(() => {
      setGenerationProgress(65);
      setGenerationStep(isAr ? 'تطبيق إعدادات الكاميرا والإضاءة السينمائية 4K...' : 'Applying 4K camera & cinematic lighting...');
    }, 1400);

    setTimeout(() => {
      setGenerationProgress(90);
      setGenerationStep(isAr ? 'إنهاء معالجة الفيديو والمؤثرات الجمالية...' : 'Finalizing video layers & sound design...');
    }, 2100);

    setTimeout(() => {
      setGenerationProgress(100);
      setIsGenerating(false);

      // Generate structured scenes
      const scenes: Scene[] = [
        {
          sceneNumber: 1,
          timecode: '00:00 - 00:03',
          cameraMovement: motionPacing === 'orbit_360' ? 'دوران محيطي 360 درجة هادئ' : 'حركة تقريب انسيابية بطيئة (Slow Push-In)',
          visualDescriptionAr: `المشهد الافتتاحي: لقطة تأسيسية ساحرة تعكس تفاصيل الفكرة "${finalPrompt.slice(0, 45)}..." بتباين ضوئي ملكي وعمق ميداني ضيق يعزل العنصر الأساسي.`,
          visualDescriptionEn: `Opening Scene: Cinematic establishing frame capturing high-contrast lighting with shallow depth-of-field focusing on the main visual element.`,
          narrationAr: 'في اللحظة التي تتجسد فيها الرؤية، تكتمل تفاصيل الفخامة وتأسر الحواس بأناقة لا تُنسى...',
          narrationEn: 'In the instant where vision comes alive, sensory luxury unfolds with breathtaking elegance...',
          promptAr: `لقطة سينمائية واقعية 8K، إضاءة ذهبية درامية، عمق ميداني سينمائي، حركة كاميرا انسيابية: ${finalPrompt}`,
          promptEn: `Cinematic 8K hyper-realistic footage, dramatic golden hour lighting, anamorphic lens, shallow depth of field: ${finalPrompt}`
        },
        {
          sceneNumber: 2,
          timecode: '00:03 - 00:07',
          cameraMovement: 'لقطة ماكرو مكبرة (Extreme Macro) مع انعكاسات ضوئية حية',
          visualDescriptionAr: `المشهد الأوسط: التركيز على التفاصيل الدقيقة وحركة الأسطح والانعكاسات، مع لمسات ذهبية تتلألأ وتبرز الجودة الملكية.`,
          visualDescriptionEn: `Mid Scene: Extreme macro shot emphasizing texture, subtle glimmers, and fluid motion with premium highlights.`,
          narrationAr: 'كل زاوية تروي قصة إتقان وشغف، لتمنحك حضوراً استثنائياً يلهم كل من حولك.',
          narrationEn: 'Every contour reflects dedication and mastery, inspiring lasting confidence and admiration.',
          promptAr: `لقطة ماكرو سينمائية مع إضاءة حافة (Rim Lighting)، جزيئات غبار ذهبية تطفو، عدسة سينمائية 50mm f/1.2: ${finalPrompt}`,
          promptEn: `Cinematic macro shot, rim light accents, floating golden dust particles, photorealistic 50mm f/1.2 lens: ${finalPrompt}`
        },
        {
          sceneNumber: 3,
          timecode: '00:07 - 00:10',
          cameraMovement: 'ابتعاد تدريجي هادئ (Slow Pull-Back) مع ثبات التكوين',
          visualDescriptionAr: `المشهد الختامي: استقرار الكاميرا على المشهد النهائي المتكامل، جاهز لشعار المتجر أو عبارة الحث على اتخاذ قرار الشراء.`,
          visualDescriptionEn: `Closing Scene: Elegant pull-back reveal settling on a balanced composition ready for the brand emblem or CTA.`,
          narrationAr: 'حنان ستور — حيث يلتقي التميز الرقمي بالفخامة الأصيلة. اطلب نسختك الآن.',
          narrationEn: 'Hanan Store — Where curated digital excellence meets timeless luxury.',
          promptAr: `لقطة ختامية متوازنة، إضاءة هادئة فاخرة، وضوح كريستالي بدون تشويش، مساحة مخصصة للعلامة التجارية.`,
          promptEn: `Closing cinematic frame, majestic studio lighting, clean background negative space for typography and branding.`
        }
      ];

      setGeneratedResult({
        title: finalPrompt.length > 50 ? `${finalPrompt.slice(0, 50)}...` : finalPrompt,
        overview: isAr 
          ? 'تم توليد مخطط الفيديو السينمائي بنجاح مع 3 لقطات متناسقة وحركات كاميرا احترافية وبرومبت جاهز للاستخدام في كافة محركات الفيديو التوليدي.' 
          : 'Cinematic video storyboard generated successfully with 3 seamless shots, camera pacing, and production-ready AI prompts.',
        scenes,
        masterPrompt: `Cinematic 4K video, ${visualStyle.replace('_', ' ')} style, ${aspectRatio} aspect ratio, photorealistic textures, dynamic ${motionPacing.replace('_', ' ')} camera movement, anamorphic lens blur, professional color grading, studio lighting: ${finalPrompt}`,
        bgStyleColor: visualStyle === 'luxury_ad' ? 'from-amber-900/40 to-stone-950' : 'from-stone-900 to-stone-950'
      });

      setIsPlaying(true);
      setCurrentTime(0);
      setActiveSceneIndex(0);
    }, 2700);
  };

  const handleCopyPrompt = () => {
    if (!generatedResult) return;
    navigator.clipboard.writeText(generatedResult.masterPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleCopyStoryboard = () => {
    if (!generatedResult) return;
    const text = `🎬 مخطط سيناريو الفيديو (Hanan AI Video Studio)\n` +
      `العنوان: ${generatedResult.title}\n` +
      `الأبعاد: ${aspectRatio} | النمط: ${visualStyle} | المدة: ${duration}\n\n` +
      generatedResult.scenes.map(s => 
        `[المشهد ${s.sceneNumber}] (${s.timecode})\n` +
        `• حركة الكاميرا: ${s.cameraMovement}\n` +
        `• الوصف: ${s.visualDescriptionAr}\n` +
        `• التعليق الصوتي: "${s.narrationAr}"\n` +
        `• برومبت التوليد: ${s.promptAr}\n`
      ).join('\n') +
      `\n📌 البرومبت الشامل (Master Prompt):\n${generatedResult.masterPrompt}\n` +
      `تم التوليد عبر متجر حنان ستور: https://xn--mgblao3hjb.store`;

    navigator.clipboard.writeText(text);
    setCopiedStoryboard(true);
    setTimeout(() => setCopiedStoryboard(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="bg-stone-950 text-stone-100 rounded-3xl max-w-5xl w-full my-auto overflow-hidden shadow-2xl border border-stone-800 relative flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800/80 bg-stone-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-md">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black font-serif text-white flex items-center gap-1.5">
                  {isAr ? 'أداة تحويل النص إلى فيديو بالذكاء الاصطناعي' : 'AI Text-to-Video Generator Tool'}
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                  {isAr ? 'أداة مجانية 2026' : 'Free 2026 Tool'}
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                {isAr 
                  ? 'حوّل سيناريوهاتك ونصوصك التسويقية إلى مقاطع فيديو ومخططات إخراج سينمائية متكاملة'
                  : 'Transform marketing scripts and textual prompts into cinematic video storyboards & AI reels'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Quick Presets Carousel */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'أفكار وسيناريوهات مقترحة وسريعة:' : 'Quick Prompt Inspirations:'}</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {PRESET_SCRIPTS.map((preset, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setPromptText(preset.prompt)}
                  className="p-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/50 text-start transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{preset.icon}</span>
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-300 line-clamp-1">
                      {isAr ? preset.titleAr : preset.titleEn}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-500 line-clamp-2 leading-relaxed">
                    {preset.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Input Textarea */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'أدخل نص الفيديو أو السيناريو المطلوب:' : 'Enter Video Description or Script:'}</span>
              </label>
              <span className="text-[11px] text-stone-500 font-mono">
                {promptText.length} {isAr ? 'حرف' : 'chars'}
              </span>
            </div>
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              rows={3}
              placeholder={isAr 
                ? 'اكتب تفاصيل الفيديو، المشهد، حركة الكاميرا، ونوع الإضاءة (مثال: لقطة سينمائية لزجاجة عطر ذهبية تظهر وسط رمال الصحراء مع دخان البخور والألعاب النارية بهدوء...)' 
                : 'Describe the video scene, mood, camera dynamics, lighting...'}
              className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-stone-100 rounded-2xl p-3.5 text-xs sm:text-sm placeholder:text-stone-600 focus:outline-none transition-all leading-relaxed"
            />
          </div>

          {/* Controls Bar: Format, Style, Duration, Motion */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-900/80 p-3.5 rounded-2xl border border-stone-800/80 text-xs">
            
            {/* 1. Aspect Ratio */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'أبعاد الفيديو' : 'Aspect Ratio'}</span>
              </label>
              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  onClick={() => setAspectRatio('9:16')}
                  className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                    aspectRatio === '9:16' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="Reels & TikTok 9:16"
                >
                  9:16
                </button>
                <button
                  type="button"
                  onClick={() => setAspectRatio('16:9')}
                  className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                    aspectRatio === '16:9' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="YouTube 16:9"
                >
                  16:9
                </button>
                <button
                  type="button"
                  onClick={() => setAspectRatio('1:1')}
                  className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                    aspectRatio === '1:1' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="Square 1:1"
                >
                  1:1
                </button>
              </div>
            </div>

            {/* 2. Visual Style */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Palette className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'النمط البصري' : 'Visual Style'}</span>
              </label>
              <select
                value={visualStyle}
                onChange={(e) => setVisualStyle(e.target.value as any)}
                className="w-full bg-stone-800 text-stone-200 rounded-lg p-1.5 text-[11px] border border-stone-700 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="cinematic">{isAr ? 'سينمائي واقعي 4K' : 'Cinematic 4K'}</option>
                <option value="luxury_ad">{isAr ? 'إعلان تجاري فاخر' : 'Luxury Commercial'}</option>
                <option value="3d_animation">{isAr ? 'أنيميشن ثلاثي الأبعاد' : '3D Animation'}</option>
                <option value="moody_documentary">{isAr ? 'وثائقي درامي' : 'Dramatic Documentary'}</option>
                <option value="drone_aerial">{isAr ? 'تصوير درون جوي' : 'Drone Aerial'}</option>
              </select>
            </div>

            {/* 3. Duration */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'مدة المقطع' : 'Duration'}</span>
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(['5s', '10s', '15s'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                      duration === d ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Motion & Camera */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Camera className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'حركة الكاميرا' : 'Camera Pacing'}</span>
              </label>
              <select
                value={motionPacing}
                onChange={(e) => setMotionPacing(e.target.value as any)}
                className="w-full bg-stone-800 text-stone-200 rounded-lg p-1.5 text-[11px] border border-stone-700 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="smooth_slow">{isAr ? 'انسيابي بطيء (Slow Push)' : 'Smooth Slow Push'}</option>
                <option value="dynamic_fast">{isAr ? 'حماسي وسريع (Reels)' : 'Dynamic Fast'}</option>
                <option value="orbit_360">{isAr ? 'دوران محيطي 360' : '360 Orbit'}</option>
                <option value="macro_dramatic">{isAr ? 'ماكرو مقرب وتفاصيل' : 'Macro Details'}</option>
              </select>
            </div>

          </div>

          {/* Action Generate Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'يعتمد على خوارزميات الذكاء الاصطناعي التوليدي لعام 2026' : 'Powered by 2026 GenAI Diffusion Models'}</span>
            </div>

            <button
              id="generate-video-action-btn"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 font-black text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>{isAr ? 'جاري المعالجة والتوليد...' : 'Generating Video Storyboard...'}</span>
                </>
              ) : (
                <>
                  <Video className="w-4 h-4" />
                  <span>{isAr ? 'توليد الفيديو بالذكاء الاصطناعي' : 'Generate Video Now'}</span>
                </>
              )}
            </button>
          </div>

          {/* Generation Progress Bar */}
          {isGenerating && (
            <div className="p-4 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-2 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                <span>{generationStep}</span>
                <span className="font-mono">{generationProgress}%</span>
              </div>
              <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                  style={{ width: `${generationProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Generated Video Player & Storyboard Presentation */}
          {generatedResult && !isGenerating && (
            <div className="space-y-6 pt-4 border-t border-stone-800/90 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Header of Results */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono">
                    {isAr ? 'تم التوليد بنجاح ✓' : 'Generated Successfully ✓'}
                  </span>
                  <h3 className="font-serif font-black text-white text-base sm:text-lg mt-0.5">
                    {generatedResult.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 max-w-xl">
                    {generatedResult.overview}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyPrompt}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    title={isAr ? 'نسخ برومبت الفيديو' : 'Copy Master Prompt'}
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ البرومبت' : 'Copy Prompt')}</span>
                  </button>

                  <button
                    onClick={handleCopyStoryboard}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedStoryboard ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{copiedStoryboard ? (isAr ? 'تم حفظ المخطط!' : 'Saved!') : (isAr ? 'تحميل السيناريو' : 'Export Script')}</span>
                  </button>
                </div>
              </div>

              {/* Video Player Box with Aspect Ratio Adaptability */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Visual Video Simulation Player (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div 
                    className={`relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl bg-black flex items-center justify-center transition-all ${
                      aspectRatio === '9:16' 
                        ? 'w-64 h-[420px]' 
                        : aspectRatio === '16:9'
                          ? 'w-full max-w-md h-64'
                          : 'w-72 h-72'
                    }`}
                  >
                    {/* Animated Canvas */}
                    <canvas
                      ref={canvasRef}
                      width={aspectRatio === '9:16' ? 360 : aspectRatio === '16:9' ? 640 : 400}
                      height={aspectRatio === '9:16' ? 640 : aspectRatio === '16:9' ? 360 : 400}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtitle / Narration Overlay */}
                    <div className="absolute bottom-12 inset-x-3 text-center pointer-events-none">
                      <div className="inline-block bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-amber-200 font-medium max-w-full leading-snug">
                        {isAr 
                          ? generatedResult.scenes[activeSceneIndex]?.narrationAr 
                          : generatedResult.scenes[activeSceneIndex]?.narrationEn}
                      </div>
                    </div>

                    {/* Scene Tag Overlay */}
                    <div className="absolute top-3 start-3 bg-stone-950/80 backdrop-blur-xs px-2 py-1 rounded-lg text-[10px] font-mono text-amber-300 border border-stone-800">
                      {isAr ? `مشهد ${activeSceneIndex + 1}` : `Scene ${activeSceneIndex + 1}`} • {generatedResult.scenes[activeSceneIndex]?.timecode}
                    </div>

                    {/* Format Badge */}
                    <div className="absolute top-3 end-3 bg-amber-500/90 text-stone-950 px-2 py-0.5 rounded-md text-[9px] font-black tracking-wider uppercase">
                      {aspectRatio} • 4K AI
                    </div>

                    {/* Play/Pause Center Overlay when paused */}
                    {!isPlaying && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] text-amber-400 hover:text-white transition-colors cursor-pointer group"
                      >
                        <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </button>
                    )}

                    {/* Bottom Controls Strip */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => {
                            setCurrentTime(0);
                            setActiveSceneIndex(0);
                            setIsPlaying(true);
                          }}
                          className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-[10px] text-stone-300">
                          {currentTime.toFixed(1)}s / {duration}
                        </span>
                      </div>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1 text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-500 text-center mt-2.5">
                    {isAr 
                      ? 'محاكاة تفاعلية للمشهد السينمائي ومخطط الصوت والحركة 2026'
                      : 'Interactive video preview with animated motion layers & audio'}
                  </p>
                </div>

                {/* Scene-by-Scene Breakdown (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-stone-800">
                    <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>{isAr ? 'تقسيم اللقطات والمشاهد الإخراجية:' : 'Production Scene Breakdown:'}</span>
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {generatedResult.scenes.length} {isAr ? 'مشاهد' : 'scenes'}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {generatedResult.scenes.map((scene, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => {
                          setActiveSceneIndex(sIdx);
                          setIsPlaying(true);
                        }}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          activeSceneIndex === sIdx
                            ? 'bg-amber-950/30 border-amber-500/60 shadow-md'
                            : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                              activeSceneIndex === sIdx ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                            }`}>
                              {scene.sceneNumber}
                            </span>
                            <span className="text-xs font-bold text-white">
                              {isAr ? `المشهد ${scene.sceneNumber}` : `Scene ${scene.sceneNumber}`}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                            {scene.timecode}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          <div className="text-[11px] text-stone-400 flex items-center gap-1">
                            <Camera className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{scene.cameraMovement}</span>
                          </div>
                          <p className="text-stone-300 text-xs leading-relaxed">
                            {isAr ? scene.visualDescriptionAr : scene.visualDescriptionEn}
                          </p>
                          <div className="p-2 rounded-xl bg-stone-950/60 border border-stone-800/80 text-[11px] text-amber-200/90 italic">
                            💬 "{isAr ? scene.narrationAr : scene.narrationEn}"
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Master Prompt Ready for Sora / Runway / Kling */}
                  <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{isAr ? 'البرومبت الاحترافي الشامل (جاهز للنسخ إلى Sora / Runway / Kling):' : 'Production Master Prompt (Ready for Sora / Runway):'}</span>
                      </span>
                      <button
                        onClick={handleCopyPrompt}
                        className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold cursor-pointer"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? (isAr ? 'تم!' : 'Copied!') : (isAr ? 'نسخ' : 'Copy')}</span>
                      </button>
                    </div>
                    <p className="text-[11px] font-mono text-stone-400 bg-stone-950 p-2.5 rounded-xl border border-stone-800 leading-relaxed select-all">
                      {generatedResult.masterPrompt}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{isAr ? 'أداة حنان ستور الرسمية المدمجة — مجانية لجميع الزوار' : 'Official Hanan Store AI Tool — Free for all visitors'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
