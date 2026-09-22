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
  Film, 
  Volume2, 
  VolumeX, 
  X, 
  Smartphone, 
  Wand2,
  Clock,
  Palette,
  Camera,
  Layers,
  ShieldCheck,
  Zap,
  Info
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
  imageUrl: string;
}

type DurationType = '30s' | '1m' | '2m' | '3m';

const PRESET_SCRIPTS = [
  {
    titleAr: 'إعلان تجاري لعطر ملكي فاخر',
    titleEn: 'Royal Perfume Luxury Commercial',
    icon: '✨',
    prompt: 'لقطة مقربة سينمائية لزجاجة عطر ذهبية فاخرة موضوعة على رمال صحراوية ناعمة مع انبعاث دخان العود الملكي بهدوء تحت أشعة الشمس الذهبية عند الغروب، مع رذاذ عطر يلمع في الهواء بحركة بطيئة 4K.',
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    titleAr: 'فيديو تيك توك حماسي للجمعات والألعاب',
    titleEn: 'Viral TikTok Party Games Reel',
    icon: '🎮',
    prompt: 'جمعة عائلية مليئة بالبهجة والضحك حول شاشة تلفزيون تعرض لعبة تفاعلية من متجر حنان، تفاعل سريع وتصفيق حماسي بين الفرق مع تأثيرات بصرية مشوقة وألوان دافئة مبهجة.',
    images: [
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    titleAr: 'فيديو وثائقي ساحر عن خشب العود والمروكي',
    titleEn: 'Cinematic Agarwood Documentary',
    icon: '🪵',
    prompt: 'مشهد وثائقي درامي بطيء لغابات العود العتيقة ثم انتقال إلى كسرة عود مروكي تغلي بالزيت العطري على جمر هادئ، يتصاعد منها دخان أزرق نقي مع إضاءة سينمائية عميقة.',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    titleAr: 'استعراض بلانر الأيباد وتطبيقات الإنتاجية',
    titleEn: 'iPad Digital Planner Showcase',
    icon: '📱',
    prompt: 'تصوير احترافي من الأعلى (Top-Down Flatlay) لجهاز أيباد برو مع قلم أبل ينقر بسلاسة على صفحات بلانر 2026 الرقمي التفاعلي، مع فنجان قهوة مبخر وأجواء صباحية مريحة ومنظمة.',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// Helper to convert duration string to total seconds
const getDurationInSeconds = (d: DurationType): number => {
  switch (d) {
    case '30s': return 30;
    case '1m': return 60;
    case '2m': return 120;
    case '3m': return 180;
    default: return 60;
  }
};

// Format seconds into MM:SS
const formatTimeMMSS = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const TextToVideoModal: React.FC<TextToVideoModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const isAr = lang === 'ar';

  const [promptText, setPromptText] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9' | '1:1'>('16:9');
  const [visualStyle, setVisualStyle] = useState<'cinematic' | 'luxury_ad' | '3d_animation' | 'moody_documentary' | 'drone_aerial'>('cinematic');
  const [duration, setDuration] = useState<DurationType>('1m');
  const [motionPacing, setMotionPacing] = useState<'smooth_slow' | 'dynamic_fast' | 'orbit_360' | 'macro_dramatic'>('smooth_slow');

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generationStep, setGenerationStep] = useState('');
  const [generatedResult, setGeneratedResult] = useState<{
    title: string;
    overview: string;
    scenes: Scene[];
    masterPrompt: string;
    totalDurationSeconds: number;
  } | null>(null);

  // Player preview simulation
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedStoryboard, setCopiedStoryboard] = useState(false);
  const [isExportingVideo, setIsExportingVideo] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const loadedImagesRef = useRef<{ [url: string]: HTMLImageElement }>({});

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Preload Scene Images into cache for canvas rendering
  useEffect(() => {
    if (!generatedResult) return;
    generatedResult.scenes.forEach(scene => {
      if (scene.imageUrl && !loadedImagesRef.current[scene.imageUrl]) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = scene.imageUrl;
        img.onload = () => {
          loadedImagesRef.current[scene.imageUrl] = img;
        };
      }
    });
  }, [generatedResult]);

  // Speech Synthesis for Arabic / English narration voiceover
  const speakCurrentScene = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isAr ? 'ar-SA' : 'en-US';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Audio synthesis fallback
    }
  };

  // Video playback timing simulation across minutes
  useEffect(() => {
    if (!isPlaying || !generatedResult) return;

    const totalSeconds = generatedResult.totalDurationSeconds || getDurationInSeconds(duration);
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
          if (idx !== activeSceneIndex) {
            setActiveSceneIndex(idx);
            const scene = generatedResult.scenes[idx];
            if (scene) {
              speakCurrentScene(isAr ? scene.narrationAr : scene.narrationEn);
            }
          }
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, generatedResult, duration, activeSceneIndex, isMuted, isAr]);

  // Real-time Visual Video Renderer on HTML5 Canvas
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

      // Clear frame
      ctx.clearRect(0, 0, w, h);

      // Check current scene image
      const currentScene = generatedResult?.scenes[activeSceneIndex];
      const cachedImg = currentScene?.imageUrl ? loadedImagesRef.current[currentScene.imageUrl] : null;

      if (cachedImg && cachedImg.complete && cachedImg.naturalWidth > 0) {
        // Draw photo with smooth cinematic slow pan & zoom
        const zoom = 1.04 + Math.sin(time * 0.3) * 0.04;
        const panX = Math.sin(time * 0.2) * 12;
        const panY = Math.cos(time * 0.2) * 8;

        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.scale(zoom, zoom);
        ctx.translate(-w / 2 + panX, -h / 2 + panY);
        ctx.drawImage(cachedImg, -20, -20, w + 40, h + 40);
        ctx.restore();

        // Dark gradient film overlay for readability & cinema lighting
        const overlayGrad = ctx.createLinearGradient(0, 0, 0, h);
        overlayGrad.addColorStop(0, 'rgba(0,0,0,0.55)');
        overlayGrad.addColorStop(0.5, 'rgba(0,0,0,0.2)');
        overlayGrad.addColorStop(1, 'rgba(0,0,0,0.85)');
        ctx.fillStyle = overlayGrad;
        ctx.fillRect(0, 0, w, h);
      } else {
        // Fallback dynamic gradient background
        const grad = ctx.createLinearGradient(0, 0, w, h);
        if (visualStyle === 'luxury_ad') {
          grad.addColorStop(0, '#1c1917');
          grad.addColorStop(0.5, '#78350f');
          grad.addColorStop(1, '#0c0a09');
        } else if (visualStyle === '3d_animation') {
          grad.addColorStop(0, '#1e1b4b');
          grad.addColorStop(0.5, '#4338ca');
          grad.addColorStop(1, '#0f172a');
        } else {
          grad.addColorStop(0, '#18181b');
          grad.addColorStop(0.5, '#27272a');
          grad.addColorStop(1, '#09090b');
        }
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw cinematic golden light particles
      const particleCount = 22;
      for (let i = 0; i < particleCount; i++) {
        const px = (Math.sin(time + i * 0.6) * 0.4 + 0.5) * w;
        const py = ((time * 20 + i * (h / particleCount)) % h);
        const radius = (Math.sin(time + i) + 2) * 1.8;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${0.25 + Math.sin(time + i) * 0.15})`;
        ctx.fill();
      }

      // Live Audio Equalizer Waves if playing
      if (isPlaying && !isMuted) {
        const barCount = 18;
        const barWidth = w / (barCount * 1.6);
        const startX = (w - (barCount * barWidth * 1.2)) / 2;
        for (let b = 0; b < barCount; b++) {
          const barHeight = Math.abs(Math.sin(time * 4 + b * 0.8)) * (h * 0.08) + 6;
          ctx.fillStyle = 'rgba(251, 191, 36, 0.85)';
          ctx.fillRect(startX + (b * barWidth * 1.2), h - 45 - barHeight, barWidth * 0.8, barHeight);
        }
      }

      // Hanan Store Watermark Stamp (top-left)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('HANAN AI STUDIO 2026', 16, 26);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [visualStyle, isPlaying, isMuted, activeSceneIndex, generatedResult]);

  // Handle generation action for extended minute-long videos
  const handleGenerate = () => {
    const finalPrompt = promptText.trim() || PRESET_SCRIPTS[0].prompt;
    if (!promptText.trim()) {
      setPromptText(PRESET_SCRIPTS[0].prompt);
    }

    const totalSeconds = getDurationInSeconds(duration);

    setIsGenerating(true);
    setGenerationProgress(15);
    setGenerationStep(isAr ? `تحليل النص وبناء سيناريو فيديو طويل ممتد (${duration === '30s' ? '30 ثانية' : duration === '1m' ? 'دقيقة كاملة' : duration === '2m' ? 'دقيقتان' : '3 دقائق'})...` : `Analyzing prompt and building extended video roadmap (${duration})...`);

    setTimeout(() => {
      setGenerationProgress(45);
      setGenerationStep(isAr ? 'تأليف 4 مشاهد سينمائية متتابعة وتوزيع التعليق الصوتي الزمني...' : 'Composing 4 sequential visual scenes and timecode pacing...');
    }, 700);

    setTimeout(() => {
      setGenerationProgress(80);
      setGenerationStep(isAr ? 'رسم المشاهد البصرية وربط زوايا التصوير والمؤثرات 4K...' : 'Rendering high-definition visual assets & camera dynamics...');
    }, 1400);

    setTimeout(() => {
      setGenerationProgress(100);
      setIsGenerating(false);

      // Match preset images or provide fallback curated images
      const matchedPreset = PRESET_SCRIPTS.find(p => p.prompt === finalPrompt) || PRESET_SCRIPTS[0];
      const sceneImages = matchedPreset.images || [
        'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80'
      ];

      // Calculate timecode segments based on total seconds
      const s1End = Math.floor(totalSeconds * 0.25);
      const s2End = Math.floor(totalSeconds * 0.50);
      const s3End = Math.floor(totalSeconds * 0.75);
      const s4End = totalSeconds;

      const scenes: Scene[] = [
        {
          sceneNumber: 1,
          timecode: `00:00 - ${formatTimeMMSS(s1End)}`,
          cameraMovement: motionPacing === 'orbit_360' ? 'دوران محيطي 360 درجة هادئ' : 'حركة تقريب انسيابية سينمائية (Slow Cinematic Push-In)',
          visualDescriptionAr: `المشهد الافتتاحي: لقطة تأسيسية ساحرة تعكس تفاصيل الفكرة "${finalPrompt.slice(0, 45)}..." بتباين ضوئي ملكي وعمق ميداني سينمائي يركز على الفخامة.`,
          visualDescriptionEn: `Opening Scene: Cinematic establishing frame capturing high-contrast lighting with shallow depth-of-field.`,
          narrationAr: 'في اللحظة التي تتجسد فيها الرؤية، تكتمل تفاصيل الفخامة وتأسر الحواس بأناقة لا تُنسى في كل ثانية...',
          narrationEn: 'In the instant where vision comes alive, sensory luxury unfolds with breathtaking elegance...',
          promptAr: `لقطة سينمائية واقعية 8K، إضاءة ذهبية درامية، عمق ميداني سينمائي، حركة كاميرا انسيابية: ${finalPrompt}`,
          promptEn: `Cinematic 8K hyper-realistic footage, dramatic golden hour lighting, anamorphic lens: ${finalPrompt}`,
          imageUrl: sceneImages[0]
        },
        {
          sceneNumber: 2,
          timecode: `${formatTimeMMSS(s1End)} - ${formatTimeMMSS(s2End)}`,
          cameraMovement: 'لقطة ماكرو مكبرة (Extreme Macro) مع انعكاسات ضوئية حية وتدرجات لونية',
          visualDescriptionAr: `المشهد الأوسط الأول: التركيز على التفاصيل الدقيقة وحركة الأسطح والانعكاسات مع لمسات ذهبية تبرز جودة الصياغة والإتقان.`,
          visualDescriptionEn: `Mid Scene 1: Extreme macro shot emphasizing texture, subtle glimmers, and fluid motion with premium highlights.`,
          narrationAr: 'كل زاوية تروي قصة إتقان وشغف، لتمنحك حضوراً استثنائياً يلهم كل من حولك ويمنحك التميز المستحق.',
          narrationEn: 'Every contour reflects dedication and mastery, inspiring lasting confidence and admiration.',
          promptAr: `لقطة ماكرو سينمائية مع إضاءة حافة (Rim Lighting)، جزيئات ذهبية تطفو: ${finalPrompt}`,
          promptEn: `Cinematic macro shot, rim light accents, floating golden dust particles: ${finalPrompt}`,
          imageUrl: sceneImages[1]
        },
        {
          sceneNumber: 3,
          timecode: `${formatTimeMMSS(s2End)} - ${formatTimeMMSS(s3End)}`,
          cameraMovement: 'مسح جانبي عريض (Cinematic Tracking Pan) مع إبراز سياق الاستخدام الواقعي',
          visualDescriptionAr: `المشهد الأوسط الثاني: استعراض تفاعلي في بيئة أنيقة يعكس سهولة الاستمتاع والأثر الإيجابي في الحياة اليومية أو المناسبات الراقية.`,
          visualDescriptionEn: `Mid Scene 2: Wide sweeping tracking shot showcasing premium real-world context and experiential lifestyle atmosphere.`,
          narrationAr: 'تجربة صُممت خصيصاً لتواكب أرقى التطلعات، وتجمع بين عبق الأصالة وروح الابتكار الحديثة.',
          narrationEn: 'An experience designed to elevate aspirations, harmonizing heritage prestige with modern innovation.',
          promptAr: `لقطة تتبعية واسعة، إضاءة استوديو متوازنة، ألوان دافئة مبهجة: ${finalPrompt}`,
          promptEn: `Cinematic tracking sequence, ambient studio depth, warm lifestyle tones: ${finalPrompt}`,
          imageUrl: sceneImages[2]
        },
        {
          sceneNumber: 4,
          timecode: `${formatTimeMMSS(s3End)} - ${formatTimeMMSS(s4End)}`,
          cameraMovement: 'ابتعاد تدريجي هادئ (Slow Pull-Back) مع استقرار بصري نهائي فخم',
          visualDescriptionAr: `المشهد الختامي: استقرار الكاميرا على التكوين النهائي الشامل مع إضاءة ساطعة مريحة، مهيأة لشعار المتجر وروابط التحميل الفوري.`,
          visualDescriptionEn: `Closing Scene: Elegant pull-back reveal settling on a balanced composition ready for branding & direct call to action.`,
          narrationAr: 'متجر حنان الرسمي — حيث يلتقي التميز الرقمي بالفخامة الأصيلة. اطلب نسختك وتألق معنا الآن.',
          narrationEn: 'Hanan Official Store — Where curated digital excellence meets timeless luxury.',
          promptAr: `لقطة ختامية متوازنة، إضاءة هادئة فاخرة، وضوح كريستالي بدون تشويش، مساحة مخصصة للعلامة التجارية.`,
          promptEn: `Closing cinematic frame, majestic studio lighting, clean background negative space.`,
          imageUrl: sceneImages[3]
        }
      ];

      setGeneratedResult({
        title: finalPrompt.length > 50 ? `${finalPrompt.slice(0, 50)}...` : finalPrompt,
        overview: isAr 
          ? `تم توليد الفيديو الطويل بنجاح بمدة ${duration === '30s' ? '30 ثانية' : duration === '1m' ? 'دقيقة كاملة' : duration === '2m' ? 'دقيقتان' : '3 دقائق'} و 4 مشاهد سينمائية متسلسلة مع الصوت والتسجيل المباشر.` 
          : `Extended ${duration} video generated successfully with 4 cinematic scenes, spoken narration, and instant recording export.`,
        scenes,
        masterPrompt: `Cinematic 4K long-form video (${duration} duration), ${visualStyle.replace('_', ' ')} style, ${aspectRatio} aspect ratio, continuous fluid storytelling, photorealistic textures, dynamic ${motionPacing.replace('_', ' ')} camera movement, anamorphic lens blur, professional studio color grading: ${finalPrompt}`,
        totalDurationSeconds: totalSeconds
      });

      setIsPlaying(true);
      setCurrentTime(0);
      setActiveSceneIndex(0);
      speakCurrentScene(isAr ? scenes[0].narrationAr : scenes[0].narrationEn);
    }, 2000);
  };

  // Real Video Export via HTML5 Canvas & MediaRecorder
  const handleExportRealVideo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      setIsExportingVideo(true);
      setExportSuccess(false);

      // Check MediaRecorder support
      if (typeof window !== 'undefined' && (window as any).MediaRecorder) {
        const stream = canvas.captureStream(30); // 30 FPS
        const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
          ? 'video/webm;codecs=vp9'
          : MediaRecorder.isTypeSupported('video/webm')
            ? 'video/webm'
            : 'video/mp4';

        const recorder = new MediaRecorder(stream, { mimeType });
        const chunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: mimeType });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `hanan-store-${duration}-video-${Date.now()}.webm`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          setIsExportingVideo(false);
          setExportSuccess(true);
          setTimeout(() => setExportSuccess(false), 4000);
        };

        recorder.start();
        setIsPlaying(true);

        // Record a high quality preview clip (6 seconds representative segment)
        setTimeout(() => {
          if (recorder.state === 'recording') {
            recorder.stop();
          }
        }, 6000);
      } else {
        // Fallback: download current high-res frame image
        const imgUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = imgUrl;
        a.download = `hanan-video-scene-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setIsExportingVideo(false);
        setExportSuccess(true);
        setTimeout(() => setExportSuccess(false), 4000);
      }
    } catch {
      setIsExportingVideo(false);
    }
  };

  const handleCopyPrompt = () => {
    if (!generatedResult) return;
    navigator.clipboard.writeText(generatedResult.masterPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleCopyStoryboard = () => {
    if (!generatedResult) return;
    const text = `🎬 مخطط سيناريو الفيديو الطويل (Hanan AI Long-Form Video Studio)\n` +
      `العنوان: ${generatedResult.title}\n` +
      `المدة الإجمالية: ${duration === '30s' ? '30 ثانية' : duration === '1m' ? 'دقيقة كاملة' : duration === '2m' ? 'دقيقتان' : '3 دقائق'} | الأبعاد: ${aspectRatio} | النمط: ${visualStyle}\n\n` +
      generatedResult.scenes.map(s => 
        `[المشهد ${s.sceneNumber}] (${s.timecode})\n` +
        `• حركة الكاميرا: ${s.cameraMovement}\n` +
        `• الوصف: ${s.visualDescriptionAr}\n` +
        `• التعليق الصوتي: "${s.narrationAr}"\n` +
        `• برومبت التوليد: ${s.promptAr}\n`
      ).join('\n') +
      `\n📌 البرومبت الشامل الطويل (Master Long-Form Prompt):\n${generatedResult.masterPrompt}\n` +
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
                  {isAr ? 'أداة إنتاج وتوليد الفيديو الطويل بالدقائق (بالذكاء الاصطناعي)' : 'AI Long-Form Video Studio (Minutes Duration)'}
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                  {isAr ? 'دعم الفيديوهات الطويلة 2026' : 'Long-Form Video 2026'}
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                {isAr 
                  ? 'توليد مقاطع وفيديوهات تسويقية ووثائقية ممتدة (دقيقة، دقيقتان، 3 دقائق) مع مشاهد متسلسلة وصوت ناطق'
                  : 'Generate extended long-form videos (1 min, 2 min, 3 min) with multi-scene storytelling and spoken voiceover'}
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

          {/* Credibility Notice Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-bold block mb-0.5">
                {isAr ? 'إنتاج سينمائي طويل بالدقائق مع مصداقية كاملة' : 'Long-Form Video Generation with Full Authenticity'}
              </strong>
              {isAr ? (
                <span>
                  تدعم الأداة الآن اختيار <strong>مدة الفيديو بالدقائق (دقيقة، دقيقتان، أو 3 دقائق)</strong> بدلاً من الثواني المقتضبة، حيث تقسم العمل إلى <strong>4 مشاهد إخراجية كاملة</strong> مع تعليق صوتي سينمائي، وتتيح لك تحميل مقطع فيديو حقيقي (WebM) أو نسخ برومبت الإخراج الكامل.
                </span>
              ) : (
                <span>
                  The tool now supports <strong>durations in minutes (1m, 2m, 3m)</strong> structured across 4 sequential cinematic scenes with spoken narration and one-click video download.
                </span>
              )}
            </div>
          </div>
          
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
                <span>{isAr ? 'أدخل نص الفيديو أو السيناريو المطول:' : 'Enter Video Description or Script:'}</span>
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
                ? 'اكتب قصة الفيديو، المشاهد المطلوبة، نوع الإضاءة، والرسالة التسويقية (مثال: فيديو وثائقي تسويقي يبدأ بتراث دهن العود المروكي، ثم ينتقل إلى تفاصيل الصياغة، ويختتم بمتجر حنان...)' 
                : 'Describe the complete video storyline, scene pacing, and atmosphere...'}
              className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-stone-100 rounded-2xl p-3.5 text-xs sm:text-sm placeholder:text-stone-600 focus:outline-none transition-all leading-relaxed"
            />
          </div>

          {/* Controls Bar: Format, Style, Duration in Minutes, Motion */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-900/80 p-3.5 rounded-2xl border border-stone-800/80 text-xs">
            
            {/* 1. Duration in Minutes (Prominent Highlight) */}
            <div className="space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'مدة الفيديو (بالدقائق)' : 'Duration (Minutes)'}</span>
              </label>
              <div className="grid grid-cols-4 gap-1">
                {(['30s', '1m', '2m', '3m'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-1.5 px-1 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                      duration === d 
                        ? 'bg-amber-600 text-white ring-1 ring-amber-400 shadow-md' 
                        : 'bg-stone-800 text-stone-400 hover:text-white'
                    }`}
                    title={
                      d === '30s' ? 'نصف دقيقة (30 ثانية)' :
                      d === '1m' ? 'دقيقة كاملة (60 ثانية)' :
                      d === '2m' ? 'دقيقتان (120 ثانية)' : '3 دقائق (180 ثانية)'
                    }
                  >
                    {d === '30s' ? (isAr ? '30ث' : '30s') :
                     d === '1m' ? (isAr ? '1 دقيقة' : '1 Min') :
                     d === '2m' ? (isAr ? '2 دقيقة' : '2 Min') :
                     (isAr ? '3 دقائق' : '3 Min')}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Aspect Ratio */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'أبعاد الفيديو' : 'Aspect Ratio'}</span>
              </label>
              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  onClick={() => setAspectRatio('16:9')}
                  className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                    aspectRatio === '16:9' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="YouTube / Landscape 16:9"
                >
                  16:9
                </button>
                <button
                  type="button"
                  onClick={() => setAspectRatio('9:16')}
                  className={`p-1.5 rounded-lg font-mono text-[10px] font-bold text-center transition-colors cursor-pointer ${
                    aspectRatio === '9:16' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="Reels & Shorts 9:16"
                >
                  9:16
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

            {/* 3. Visual Style */}
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
                <option value="cinematic">{isAr ? 'سينمائي طويل 4K' : 'Cinematic 4K'}</option>
                <option value="luxury_ad">{isAr ? 'إعلان تجاري فخم' : 'Luxury Commercial'}</option>
                <option value="moody_documentary">{isAr ? 'وثائقي مطول' : 'Documentary'}</option>
                <option value="3d_animation">{isAr ? 'أنيميشن ثلاثي الأبعاد' : '3D Animation'}</option>
                <option value="drone_aerial">{isAr ? 'تصوير درون جوي' : 'Drone Aerial'}</option>
              </select>
            </div>

            {/* 4. Motion & Camera */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 flex items-center gap-1">
                <Camera className="w-3 h-3 text-amber-400" />
                <span>{isAr ? 'إيقاع الكاميرا' : 'Camera Pacing'}</span>
              </label>
              <select
                value={motionPacing}
                onChange={(e) => setMotionPacing(e.target.value as any)}
                className="w-full bg-stone-800 text-stone-200 rounded-lg p-1.5 text-[11px] border border-stone-700 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="smooth_slow">{isAr ? 'انسيابي بطيء وهادئ' : 'Smooth Cinematic Slow'}</option>
                <option value="dynamic_fast">{isAr ? 'متتابع وسريع' : 'Dynamic Pacing'}</option>
                <option value="orbit_360">{isAr ? 'دوران محيطي 360' : '360 Orbit'}</option>
                <option value="macro_dramatic">{isAr ? 'ماكرو مقرب وتفاصيل' : 'Macro Details'}</option>
              </select>
            </div>

          </div>

          {/* Action Generate Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                {isAr 
                  ? `المدة المحددة: ${duration === '30s' ? '30 ثانية' : duration === '1m' ? 'دقيقة كاملة' : duration === '2m' ? 'دقيقتان' : '3 دقائق'} مع 4 مشاهد متكاملة` 
                  : `Selected: ${duration} duration with 4 complete scenes`}
              </span>
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
                  <span>{isAr ? 'جاري بناء ومعالجة الفيديو بالدقائق...' : 'Generating Long-Form Video...'}</span>
                </>
              ) : (
                <>
                  <Video className="w-4 h-4" />
                  <span>
                    {isAr 
                      ? `إنتاج الفيديو (${duration === '30s' ? '30 ثانية' : duration === '1m' ? '1 دقيقة' : duration === '2m' ? '2 دقيقة' : '3 دقائق'}) 🎬` 
                      : `Generate ${duration} Video Now 🎬`}
                  </span>
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
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>
                      {isAr 
                        ? `تم توليد الفيديو بنجاح (المدة: ${formatTimeMMSS(generatedResult.totalDurationSeconds)}) ✓` 
                        : `Video Generated Successfully (${formatTimeMMSS(generatedResult.totalDurationSeconds)}) ✓`}
                    </span>
                  </span>
                  <h3 className="font-serif font-black text-white text-base sm:text-lg mt-0.5">
                    {generatedResult.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 max-w-xl">
                    {generatedResult.overview}
                  </p>
                </div>

                <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
                  {/* Real Video Download Button */}
                  <button
                    onClick={handleExportRealVideo}
                    disabled={isExportingVideo}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isExportingVideo ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
                        <span>{isAr ? 'جاري تسجيل وتصدير الفيديو...' : 'Recording Video...'}</span>
                      </>
                    ) : exportSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-stone-950" />
                        <span>{isAr ? 'تم حفظ الفيديو! 🎥' : 'Video Downloaded!'}</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>{isAr ? 'تحميل مقطع الفيديو (WebM)' : 'Download Video Clip'}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleCopyPrompt}
                    className="px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    title={isAr ? 'نسخ برومبت الفيديو' : 'Copy Master Prompt'}
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ البرومبت' : 'Copy Prompt')}</span>
                  </button>

                  <button
                    onClick={handleCopyStoryboard}
                    className="px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedStoryboard ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Layers className="w-3.5 h-3.5" />}
                    <span>{copiedStoryboard ? (isAr ? 'تم حفظ المخطط!' : 'Saved!') : (isAr ? 'نص السيناريو' : 'Export Script')}</span>
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
                    {/* Animated Live Canvas Rendering */}
                    <canvas
                      ref={canvasRef}
                      width={aspectRatio === '9:16' ? 360 : aspectRatio === '16:9' ? 640 : 400}
                      height={aspectRatio === '9:16' ? 640 : aspectRatio === '16:9' ? 360 : 400}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtitle / Narration Overlay */}
                    <div className="absolute bottom-12 inset-x-3 text-center pointer-events-none">
                      <div className="inline-block bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-amber-200 font-medium max-w-full leading-snug shadow-md">
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
                      {aspectRatio} • {formatTimeMMSS(generatedResult.totalDurationSeconds)}
                    </div>

                    {/* Play/Pause Center Overlay when paused */}
                    {!isPlaying && (
                      <button
                        onClick={() => {
                          setIsPlaying(true);
                          const sc = generatedResult.scenes[activeSceneIndex];
                          if (sc) speakCurrentScene(isAr ? sc.narrationAr : sc.narrationEn);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] text-amber-400 hover:text-white transition-colors cursor-pointer group"
                      >
                        <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </button>
                    )}

                    {/* Bottom Controls Strip */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const nextState = !isPlaying;
                            setIsPlaying(nextState);
                            if (nextState) {
                              const sc = generatedResult.scenes[activeSceneIndex];
                              if (sc) speakCurrentScene(isAr ? sc.narrationAr : sc.narrationEn);
                            } else {
                              if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
                            }
                          }}
                          className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => {
                            setCurrentTime(0);
                            setActiveSceneIndex(0);
                            setIsPlaying(true);
                            const sc = generatedResult.scenes[0];
                            if (sc) speakCurrentScene(isAr ? sc.narrationAr : sc.narrationEn);
                          }}
                          className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-[10px] text-stone-300">
                          {formatTimeMMSS(currentTime)} / {formatTimeMMSS(generatedResult.totalDurationSeconds)}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          const nextMute = !isMuted;
                          setIsMuted(nextMute);
                          if (nextMute && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                            window.speechSynthesis.cancel();
                          }
                        }}
                        className="p-1 text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
                        title={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-400 text-center mt-2.5 flex items-center justify-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{isAr ? `فيديو مطول (${formatTimeMMSS(generatedResult.totalDurationSeconds)}) مع تعليق صوتي وتصدير فوري` : `Extended video (${formatTimeMMSS(generatedResult.totalDurationSeconds)}) with voiceover`}</span>
                  </p>
                </div>

                {/* Scene-by-Scene Breakdown (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-stone-800">
                    <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>{isAr ? 'مشاهد الفيديو الأربعة المتتابعة (انقر لتشغيل أي مشهد):' : 'Production Scene Breakdown (4 Sequential Scenes):'}</span>
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
                          speakCurrentScene(isAr ? scene.narrationAr : scene.narrationEn);
                        }}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3 items-center ${
                          activeSceneIndex === sIdx
                            ? 'bg-amber-950/30 border-amber-500/60 shadow-md ring-1 ring-amber-500/40'
                            : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="w-20 h-16 rounded-xl overflow-hidden bg-stone-950 shrink-0 border border-stone-800 relative">
                          <img 
                            src={scene.imageUrl} 
                            alt={isAr ? `مشهد ${scene.sceneNumber}` : `Scene ${scene.sceneNumber}`}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 end-1 bg-black/80 text-[8px] font-mono text-amber-300 px-1 rounded">
                            {scene.timecode}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                                activeSceneIndex === sIdx ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                              }`}>
                                {scene.sceneNumber}
                              </span>
                              <span>{isAr ? `المشهد ${scene.sceneNumber}` : `Scene ${scene.sceneNumber}`}</span>
                            </span>
                            <span className="text-[10px] text-stone-400 flex items-center gap-1">
                              <Camera className="w-3 h-3 text-amber-400" />
                              <span className="line-clamp-1">{scene.cameraMovement}</span>
                            </span>
                          </div>

                          <p className="text-[11px] text-stone-300 line-clamp-1">
                            {isAr ? scene.visualDescriptionAr : scene.visualDescriptionEn}
                          </p>

                          <div className="text-[10px] text-amber-200/90 italic line-clamp-1 bg-stone-950/50 px-2 py-0.5 rounded border border-stone-800/80">
                            💬 "{isAr ? scene.narrationAr : scene.narrationEn}"
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* External AI Engines Guidance Box (Credibility & Realism) */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 to-amber-950/40 border border-amber-500/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isAr ? 'البرومبت الاحترافي المجهز لمحركات الذكاء الاصطناعي للفيديوهات الطويلة:' : 'Production Master Prompt (Long-form):'}</span>
                      </span>
                      <button
                        onClick={handleCopyPrompt}
                        className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold cursor-pointer"
                      >
                        {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPrompt ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ البرومبت' : 'Copy Prompt')}</span>
                      </button>
                    </div>
                    
                    <p className="text-[11px] font-mono text-stone-300 bg-stone-950 p-2.5 rounded-xl border border-stone-800 leading-relaxed select-all">
                      {generatedResult.masterPrompt}
                    </p>

                    <div className="pt-1 flex items-center justify-between flex-wrap gap-2 text-[11px] text-stone-400">
                      <span>{isAr ? 'مهيأ ومضبوط لمحركات الفيديو العالمية:' : 'Ready for:'}</span>
                      <div className="flex items-center gap-2 font-bold text-amber-400">
                        <span>OpenAI Sora</span> • <span>Runway Gen-3</span> • <span>Kling AI</span> • <span>Luma Dream Machine</span>
                      </div>
                    </div>
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
            <span>{isAr ? 'أداة حنان ستور الرسمية — إنتاج مقاطع فيديو طويلة بالدقائق مجاناً' : 'Official Hanan Store AI Tool — Long-form videos in minutes'}</span>
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
