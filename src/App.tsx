import { useState, useEffect, useRef, RefObject, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ChevronRight,
  Smile,
  Frown,
  Stethoscope,
  Baby,
  Activity,
  Lightbulb,
  Volume2,
  VolumeX,
  Shuffle,
  Info,
  Settings,
  Moon,
  Sun,
  Palette,
  X,
  ShieldCheck,
  Heart,
  Plus,
  Pause,
  Play,
  ArrowLeft,
  Hand,
  Mail,
  User,
  Phone,
  Pointer,
  MessageSquare,
  LogOut
} from 'lucide-react';
import { QUIZ_SETS, QUESTIONS } from './questions';
import { QuizState, Question, ThemeMode, AccentColor, QuizSet } from './types';

// Sound effect URLs
const SOUNDS = {
  correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  incorrect: 'https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3',
  click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  finish: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  bgm: 'https://assets.mixkit.co/music/preview/mixkit-happy-and-joyful-155.mp3'
};

// Utility to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ACCENT_COLORS: { name: AccentColor; color: string }[] = [
  { name: 'blue', color: '#0ea5e9' },
  { name: 'teal', color: '#10b981' },
  { name: 'purple', color: '#8b5cf6' },
  { name: 'rose', color: '#f43f5e' },
  { name: 'amber', color: '#f59e0b' },
];

export default function App() {
  const [gameState, setGameState] = useState<QuizState>({
    currentQuestionIndex: -1, // -1 means start screen
    score: 0,
    showResult: false,
    answers: [],
    isGameOver: false,
  });

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bgmEnabled, setBgmEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Timer for next question
  const nextQuestionTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Theme State
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('quiz-theme-mode');
    return (saved as ThemeMode) || 'light';
  });
  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('quiz-accent-color');
    return (saved as AccentColor) || 'blue';
  });
  const [showSettings, setShowSettings] = useState(false);

  // Audio refs
  const correctAudio = useRef<HTMLAudioElement | null>(null);
  const incorrectAudio = useRef<HTMLAudioElement | null>(null);
  const clickAudio = useRef<HTMLAudioElement | null>(null);
  const finishAudio = useRef<HTMLAudioElement | null>(null);
  const bgmAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctAudio.current = new Audio(SOUNDS.correct);
    incorrectAudio.current = new Audio(SOUNDS.incorrect);
    clickAudio.current = new Audio(SOUNDS.click);
    finishAudio.current = new Audio(SOUNDS.finish);
    bgmAudio.current = new Audio(SOUNDS.bgm);
    bgmAudio.current.loop = true;
    bgmAudio.current.volume = 0.2;
  }, []);

  // Handle BGM Playback
  useEffect(() => {
    if (bgmAudio.current) {
      if (bgmEnabled && soundEnabled && gameState.currentQuestionIndex !== -1) {
        bgmAudio.current.play().catch(e => console.log("BGM play blocked", e));
      } else {
        bgmAudio.current.pause();
      }
    }
  }, [bgmEnabled, soundEnabled, gameState.currentQuestionIndex]);

  // Apply Theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
    root.setAttribute('data-accent', accentColor);
    localStorage.setItem('quiz-theme-mode', themeMode);
    localStorage.setItem('quiz-accent-color', accentColor);
  }, [themeMode, accentColor]);

  const playSound = (audioRef: RefObject<HTMLAudioElement | null>) => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const currentQuestion = gameState.currentQuestionIndex >= 0 ? shuffledQuestions[gameState.currentQuestionIndex] : null;

  const handleStart = (quizSet?: QuizSet) => {
    playSound(clickAudio);
    const questionsToUse = quizSet ? quizSet.questions : QUESTIONS;
    setShuffledQuestions(shuffleArray(questionsToUse));
    setIsPaused(false);
    if (quizSet) setSelectedQuizSet(quizSet);
    if (nextQuestionTimer.current) clearTimeout(nextQuestionTimer.current);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      answers: [],
      isGameOver: false,
    });
  };

  const handleResetToSelection = () => {
    playSound(clickAudio);
    if (nextQuestionTimer.current) clearTimeout(nextQuestionTimer.current);
    setSelectedQuizSet(null);
    setShuffledQuestions([]);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setIsPaused(false);
    setGameState({
      currentQuestionIndex: -1,
      score: 0,
      showResult: false,
      answers: [],
      isGameOver: false,
    });
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    playSound(clickAudio);
    
    // Simulate API call for demo purposes
    setFormSubmitted(true);
    
    /* 
    // Real implementation would look like this:
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactInfo),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
    */
  };

  const goToNextQuestion = (currentIndex: number, lastAnswerIndex: number) => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsPaused(false);
    
    if (currentIndex < shuffledQuestions.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      playSound(finishAudio);
      setGameState(prev => ({
        ...prev,
        showResult: true,
        isGameOver: true,
      }));
    }
  };

  const handlePause = () => {
    playSound(clickAudio);
    if (isPaused) {
      // If unpausing, go to next question immediately
      setIsPaused(false);
      if (showFeedback) {
        if (nextQuestionTimer.current) clearTimeout(nextQuestionTimer.current);
        goToNextQuestion(gameState.currentQuestionIndex, selectedAnswer || 0);
      }
    } else {
      // If pausing, clear the timer
      setIsPaused(true);
      if (nextQuestionTimer.current) {
        clearTimeout(nextQuestionTimer.current);
      }
    }
  };

  const handleBack = () => {
    if (gameState.currentQuestionIndex > 0) {
      playSound(clickAudio);
      if (nextQuestionTimer.current) clearTimeout(nextQuestionTimer.current);
      
      const prevIndex = gameState.currentQuestionIndex - 1;
      const prevAnswer = gameState.answers[prevIndex];
      
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prevIndex,
      }));
      
      setSelectedAnswer(prevAnswer);
      setIsCorrect(prevAnswer === shuffledQuestions[prevIndex].correctAnswer);
      setShowFeedback(true);
      setIsPaused(true); // Stay on the previous question for review
    }
  };

  const handleShuffleMidGame = () => {
    if (gameState.currentQuestionIndex === -1 || gameState.showResult) return;
    playSound(clickAudio);
    // Shuffle the remaining questions and the current one
    const remaining = shuffledQuestions.slice(gameState.currentQuestionIndex);
    const shuffledRemaining = shuffleArray(remaining);
    const newQuestions = [...shuffledQuestions.slice(0, gameState.currentQuestionIndex), ...shuffledRemaining];
    setShuffledQuestions(newQuestions);
  };

  const handleAnswer = (index: number) => {
    if (showFeedback) return;

    setSelectedAnswer(index);
    const correct = index === currentQuestion?.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      playSound(correctAudio);
      setGameState(prev => ({ 
        ...prev, 
        score: prev.score + 1,
        answers: [...prev.answers, index]
      }));
    } else {
      playSound(incorrectAudio);
      setGameState(prev => ({ 
        ...prev, 
        answers: [...prev.answers, index]
      }));
    }

    if (!isPaused) {
      nextQuestionTimer.current = setTimeout(() => {
        goToNextQuestion(gameState.currentQuestionIndex, index);
      }, 1000); // Transition time around 1s as requested
    }
  };

  const handleRestart = () => {
    playSound(clickAudio);
    handleStart();
  };

  // Progress percentage
  const progress = shuffledQuestions.length > 0 ? ((gameState.currentQuestionIndex + 1) / shuffledQuestions.length) * 100 : 0;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Kiến thức cơ bản": return <Lightbulb className="w-5 h-5 text-yellow-500" />;
      case "Sâu răng - Viêm nướu": return <Activity className="w-5 h-5 text-red-500" />;
      case "Thói quen hằng ngày": return <Stethoscope className="w-5 h-5 text-accent-500" />;
      case "Phụ huynh & Trẻ em": return <Baby className="w-5 h-5 text-purple-500" />;
      default: return <Sparkles className="w-5 h-5 text-teal-500" />;
    }
  };

  const getQuizSetIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb size={size} className="text-yellow-500" />;
      case 'Activity': return <Activity size={size} className="text-red-500" />;
      case 'Stethoscope': return <Stethoscope size={size} className="text-blue-500" />;
      case 'Baby': return <Baby size={size} className="text-pink-500" />;
      case 'Sparkles': return <Sparkles size={size} className="text-purple-500" />;
      default: return <Sparkles size={size} className="text-accent-500" />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeMode === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-accent-50 text-slate-800'} font-serif flex flex-col items-center p-4 pr-16 md:pr-24 overflow-x-hidden`}>
      {/* Brand Header (Static at top) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center space-y-1 z-30 py-6 px-4 shrink-0"
      >
        <h3 className="text-accent-600 dark:text-accent-400 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
          DỊCH VỤ NHA KHOA CHUYÊN SÂU
        </h3>
        <h2 className="text-lg md:text-3xl font-black text-slate-800 dark:text-white tracking-wider">
          NHA KHOA SAO VIỆT
        </h2>
        <p className="text-slate-500 dark:text-slate-400 italic text-[10px] md:text-sm">
          Kiến tạo nụ cười đẹp tự tin cho người Việt
        </p>
      </motion.div>

      {/* Top Controls - Vertical on the right */}
      <div className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 z-50 flex flex-col items-center gap-4 bg-white/10 dark:bg-black/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-2xl">
        {gameState.currentQuestionIndex >= 0 && !gameState.showResult && (
          <>
            {gameState.currentQuestionIndex > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                title="Quay lại"
                className={`p-3 rounded-full shadow-lg transition-all border ${
                  themeMode === 'dark' 
                    ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
                    : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400'
                }`}
              >
                <ArrowLeft size={20} />
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePause}
              title={isPaused ? "Tiếp tục" : "Tạm dừng"}
              className={`p-3 rounded-full shadow-lg transition-all border ${
                isPaused 
                  ? 'bg-accent-600 border-accent-600 text-white' 
                  : (themeMode === 'dark' 
                      ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
                      : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400')
              }`}
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShuffleMidGame}
              title="Xáo trộn câu hỏi còn lại"
              className={`p-3 rounded-full shadow-lg transition-all border ${
                themeMode === 'dark' 
                  ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
                  : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400'
              }`}
            >
              <Shuffle size={20} />
            </motion.button>
          </>
        )}
        {gameState.currentQuestionIndex === -1 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
            className={`p-3 rounded-full shadow-lg transition-all border ${
              themeMode === 'dark' 
                ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
                : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400'
            }`}
          >
            {themeMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-3 rounded-full shadow-lg transition-all border ${
            themeMode === 'dark' 
              ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
              : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400'
          }`}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettings(true)}
          className={`p-3 rounded-full shadow-lg transition-all border ${
            themeMode === 'dark' 
              ? 'bg-[#121212] border-white/10 text-accent-500 hover:border-accent-500/50' 
              : 'bg-white border-slate-100 text-accent-600 hover:border-accent-400'
          }`}
        >
          <Settings size={20} />
        </motion.button>

        {gameState.currentQuestionIndex >= 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResetToSelection}
            title="Thoát"
            className={`p-3 rounded-full shadow-lg transition-all border ${
              themeMode === 'dark' 
                ? 'bg-red-900/20 border-red-500/30 text-red-400 hover:bg-red-900/40' 
                : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'
            }`}
          >
            <LogOut size={20} />
          </motion.button>
        )}
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`w-full max-w-sm rounded-3xl shadow-2xl p-8 relative ${themeMode === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={20} />
              </motion.button>
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Palette className="text-accent-500" /> Cài đặt giao diện
              </h2>

              <div className="space-y-8">
                {/* Mode Selection */}
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Chế độ</label>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setThemeMode('light')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 transition-all ${themeMode === 'light' ? 'border-accent-500 bg-accent-50 text-accent-700' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <Sun size={18} /> Sáng
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setThemeMode('dark')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 transition-all ${themeMode === 'dark' ? 'border-accent-500 bg-accent-900/30 text-accent-400' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <Moon size={18} /> Tối
                    </motion.button>
                  </div>
                </div>

                {/* Accent Color Selection */}
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Màu chủ đạo</label>
                  <div className="flex flex-wrap gap-3">
                    {ACCENT_COLORS.map((color) => (
                      <motion.button
                        key={color.name}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setAccentColor(color.name)}
                        className={`w-10 h-10 rounded-full border-4 transition-all transform ${accentColor === color.name ? 'border-accent-500 scale-110' : 'border-transparent'}`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Sound Settings */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-accent-600 dark:text-accent-500 uppercase tracking-[0.2em] mb-4 block">Trải nghiệm âm thanh</label>
                    <div className="grid gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                          soundEnabled 
                            ? 'bg-accent-500/10 border-accent-500/50 text-accent-700 dark:text-accent-400' 
                            : 'bg-transparent border-slate-100 dark:border-white/5 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${soundEnabled ? 'bg-accent-500 text-white' : 'bg-slate-100 dark:bg-white/5'}`}>
                            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                          </div>
                          <span className="font-serif italic text-lg">Âm thanh hiệu ứng</span>
                        </div>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${soundEnabled ? 'bg-accent-500' : 'bg-slate-200 dark:bg-white/10'}`}>
                          <motion.div 
                            animate={{ x: soundEnabled ? 20 : 0 }}
                            className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-sm" 
                          />
                        </div>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setBgmEnabled(!bgmEnabled)}
                        className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                          bgmEnabled 
                            ? 'bg-accent-500/10 border-accent-500/50 text-accent-700 dark:text-accent-400' 
                            : 'bg-transparent border-slate-100 dark:border-white/5 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${bgmEnabled ? 'bg-accent-500 text-white' : 'bg-slate-100 dark:bg-white/5'}`}>
                            <Activity size={16} />
                          </div>
                          <span className="font-serif italic text-lg">Nhạc nền thư giãn</span>
                        </div>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${bgmEnabled ? 'bg-accent-500' : 'bg-slate-200 dark:bg-white/10'}`}>
                          <motion.div 
                            animate={{ x: bgmEnabled ? 20 : 0 }}
                            className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-sm" 
                          />
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowSettings(false)}
                className="w-full mt-10 bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all uppercase tracking-[0.2em] text-xs"
              >
                Lưu thay đổi
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          themeMode === 'dark' 
            ? 'bg-[#0a0a0a]' 
            : 'bg-slate-50'
        }`} />
        
        {/* Subtle Gradient Overlay */}
        <div className={`absolute inset-0 opacity-40 ${
          themeMode === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,#f0f9ff_0%,transparent_100%)]'
        }`} />
        
        {/* Floating Icons - More cheerful and vibrant */}
        <div className={`absolute inset-0 opacity-[0.08] dark:opacity-[0.05] ${themeMode === 'dark' ? 'text-accent-400' : 'text-accent-500'}`}>
          <motion.div 
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%]"
          >
            <Smile size={120} />
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 20, 0], 
              rotate: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-[10%]"
          >
            <Heart size={80} />
          </motion.div>

          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[15%]"
          >
            <Sparkles size={100} />
          </motion.div>
          
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[10%]"
          >
            <Activity size={60} />
          </motion.div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className={`absolute inset-0 opacity-[0.03] ${themeMode === 'dark' ? 'bg-[grid_#fff_40px_40px]' : 'bg-[grid_#0ea5e9_40px_40px]'}`} 
             style={{ backgroundImage: `radial-gradient(${themeMode === 'dark' ? '#ffffff' : '#0ea5e9'} 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Start Screen / Quiz Set Selection */}
        {gameState.currentQuestionIndex === -1 && (
          <div className="flex flex-col items-center gap-6 relative z-10 flex-1 justify-center w-full max-w-4xl px-4">
            <motion.div
              key="header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <div className="inline-block mb-4">
                <div className={`h-px w-12 mx-auto mb-4 ${themeMode === 'dark' ? 'bg-accent-700' : 'bg-accent-300'}`} />
                <span className={`text-xs uppercase tracking-[0.3em] font-medium ${themeMode === 'dark' ? 'text-accent-500' : 'text-accent-600'}`}>
                  Kiến Thức Nha Khoa
                </span>
              </div>
              <h1 className={`text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight ${themeMode === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>
                Nâng Tầm Nụ Cười
              </h1>
              <p className={`text-base font-medium max-w-lg mx-auto leading-relaxed ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Khám phá bí quyết chăm sóc răng miệng chuyên nghiệp qua các bộ câu hỏi được chọn lọc.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {QUIZ_SETS.map((set, idx) => (
                <motion.button
                  key={set.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleStart(set)}
                  className={`p-8 rounded-2xl text-left border transition-all duration-500 flex flex-col gap-6 h-full group ${
                    themeMode === 'dark' 
                      ? 'bg-[#121212] border-white/5 hover:border-accent-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
                      : 'bg-white border-slate-100 hover:border-accent-400 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                  }`}
                >
                  <div className={`p-4 rounded-full inline-block w-fit transition-colors duration-500 ${
                    themeMode === 'dark' ? 'bg-slate-800 group-hover:bg-accent-900/40' : 'bg-accent-50 group-hover:bg-accent-100'
                  }`}>
                    {getQuizSetIcon(set.icon, 28)}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-serif font-semibold mb-2 transition-colors duration-500 ${
                      themeMode === 'dark' ? 'text-slate-100 group-hover:text-accent-400' : 'text-slate-800 group-hover:text-accent-700'
                    }`}>{set.title}</h3>
                    <p className={`text-sm font-medium leading-relaxed opacity-70 ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{set.description}</p>
                  </div>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100/5 dark:border-white/5">
                    <span className="text-[10px] font-bold text-accent-600 dark:text-accent-500 uppercase tracking-[0.2em]">{set.questions.length} CÂU HỎI</span>
                    <div className="w-8 h-8 rounded-full border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.button>
              ))}

              {/* All Questions Option */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: QUIZ_SETS.length * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleStart()}
                className={`p-8 rounded-2xl text-left border border-dashed transition-all duration-500 flex flex-col gap-6 h-full group ${
                  themeMode === 'dark' 
                    ? 'bg-[#0f0f0f] border-white/10 hover:border-accent-500' 
                    : 'bg-white border-accent-200 hover:border-accent-400'
                }`}
              >
                <div className={`p-4 rounded-full inline-block w-fit transition-colors duration-500 ${
                  themeMode === 'dark' ? 'bg-slate-800 group-hover:bg-accent-900/40' : 'bg-accent-50 group-hover:bg-accent-100'
                }`}>
                  <Shuffle size={28} className="text-accent-500" />
                </div>
                <div>
                  <h3 className={`text-2xl font-serif font-semibold mb-2 transition-colors duration-500 ${
                    themeMode === 'dark' ? 'text-slate-100 group-hover:text-accent-400' : 'text-slate-800 group-hover:text-accent-700'
                  }`}>Tất cả câu hỏi</h3>
                  <p className={`text-sm font-medium leading-relaxed opacity-70 ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Thử thách bản thân với toàn bộ 50 câu hỏi ngẫu nhiên.</p>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100/5 dark:border-white/5">
                  <span className="text-[10px] font-bold text-accent-600 dark:text-accent-500 uppercase tracking-[0.2em]">{QUESTIONS.length} CÂU HỎI</span>
                  <div className="w-8 h-8 rounded-full border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        )}
        {/* Quiz Screen */}
        {gameState.currentQuestionIndex >= 0 && !gameState.showResult && currentQuestion && (
          <motion.div
            key={`question-${gameState.currentQuestionIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 my-auto flex flex-col border min-h-[450px] md:min-h-[550px] max-h-[90vh] ${
              themeMode === 'dark' ? 'bg-[#121212] border-white/5' : 'bg-white border-slate-100'
            }`}
          >
            {/* Progress Bar */}
            <div className={`h-1 w-full ${themeMode === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
              <motion.div 
                className="h-full bg-accent-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "circOut" }}
              />
            </div>

            <div className="p-6 md:p-10 flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center mb-8">
                <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${
                  themeMode === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'
                }`}>
                  {getCategoryIcon(currentQuestion.category)}
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {currentQuestion.category}
                  </span>
                </div>
                <div className="text-accent-600 dark:text-accent-400 font-bold text-sm tracking-widest">
                  {gameState.currentQuestionIndex + 1} <span className="opacity-30 mx-1">/</span> {shuffledQuestions.length}
                </div>
              </div>

              <motion.h2 
                key={`text-${gameState.currentQuestionIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight min-h-[80px] flex items-center ${themeMode === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}
              >
                {currentQuestion.text}
              </motion.h2>

              {/* Feedback Alert - Reserved space to prevent layout shift */}
              <div className="h-10 flex items-center justify-center mb-2">
                <AnimatePresence mode="wait">
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex justify-center w-full"
                    >
                      <div className={`px-8 py-2.5 rounded-full shadow-lg flex items-center gap-3 font-bold text-white text-sm tracking-wide ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
                        {isCorrect ? (
                          <motion.div className="flex items-center gap-2" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity }}>
                            <Sparkles size={16} /> Chính xác
                          </motion.div>
                        ) : (
                          <motion.div className="flex items-center gap-2" animate={{ x: [-1, 1, -1] }} transition={{ repeat: Infinity }}>
                            <Frown size={16} /> Chưa chính xác
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid gap-3 md:gap-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === currentQuestion.correctAnswer;
                  
                  let buttonClass = "w-full p-4 md:p-5 rounded-xl text-left font-medium text-[14px] md:text-[16px] transition-all duration-300 border relative overflow-hidden ";
                  
                  if (showFeedback) {
                    if (isCorrectOption) {
                      buttonClass += themeMode === 'dark' 
                        ? "bg-green-500/10 border-green-500/50 text-green-400"
                        : "bg-green-50 border-green-200 text-green-800";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += themeMode === 'dark'
                        ? "bg-red-500/10 border-red-500/50 text-red-400"
                        : "bg-red-50 border-red-200 text-red-800";
                    } else {
                      buttonClass += themeMode === 'dark'
                        ? "bg-transparent border-white/5 text-slate-600 opacity-40"
                        : "bg-transparent border-slate-100 text-slate-400 opacity-40";
                    }
                  } else {
                    buttonClass += themeMode === 'dark'
                      ? "bg-white/5 border-white/10 hover:border-accent-500/50 hover:bg-white/10 text-slate-300"
                      : "bg-slate-50/50 border-slate-100 hover:border-accent-400 hover:bg-white text-slate-700";
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showFeedback ? { x: 4, scale: 1.02 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(index)}
                      disabled={showFeedback}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <span className="flex-1 pr-4">{option}</span>
                        {showFeedback && isCorrectOption && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <CheckCircle2 className="text-green-500" size={20} />
                          </motion.div>
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <XCircle className="text-red-500" size={20} />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation display - Simple fade to avoid pushing content too much */}
              <div className="min-h-[100px]">
                <AnimatePresence>
                  {showFeedback && currentQuestion.explanation && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`mt-6 p-5 rounded-xl border-l-4 flex gap-4 items-start ${
                        themeMode === 'dark' 
                          ? 'bg-accent-900/10 border-accent-600 text-slate-300' 
                          : 'bg-accent-50 border-accent-500 text-slate-700'
                      }`}
                    >
                      <Info className="text-accent-500 shrink-0 mt-1" size={20} />
                      <div className="text-sm leading-snug">
                        <span className="font-bold block mb-1 uppercase tracking-wider text-[10px] opacity-60 leading-normal">Giải thích chuyên môn</span>
                        {currentQuestion.explanation}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {/* Result Screen */}
        {gameState.showResult && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-sm w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 text-center relative z-10 border flex flex-col justify-center ${
              themeMode === 'dark' ? 'bg-[#121212] border-white/5' : 'bg-white border-slate-100'
            }`}
          >
            <div className="mb-6 relative inline-block">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 5, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Trophy className="w-20 h-20 text-accent-500 mx-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="text-accent-400 w-10 h-10" />
              </motion.div>
            </div>

            <h2 className={`text-3xl font-serif font-bold mb-1 ${themeMode === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>Hoàn Thành!</h2>
            <p className={`mb-6 text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Kết quả hành trình của bạn</p>

            <motion.div 
              className={`rounded-2xl p-6 mb-8 border ${
                themeMode === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-6xl font-serif font-bold text-accent-600 dark:text-accent-400 mb-2">
                {gameState.score}
                <span className={`text-xl font-sans font-bold opacity-30 ml-2`}>/ {shuffledQuestions.length}</span>
              </div>
              <div className="h-px w-10 bg-accent-500/30 mx-auto mb-3" />
              <p className={`text-sm font-medium leading-relaxed ${themeMode === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {gameState.score === shuffledQuestions.length ? "Tuyệt vời! Bạn thực sự là một chuyên gia về nụ cười." : 
                 gameState.score > shuffledQuestions.length * 0.8 ? "Rất tốt! Bạn có kiến thức nha khoa rất đáng nể." :
                 gameState.score > shuffledQuestions.length * 0.5 ? "Khá tốt! Hãy tiếp tục hành trình chăm sóc nụ cười nhé." :
                 "Bạn cần tìm hiểu thêm để bảo vệ nụ cười của mình nhé!"}
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResetToSelection}
                className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 tracking-widest uppercase text-xs"
              >
                <RotateCcw size={18} /> Thử lại hành trình
              </motion.button>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowContactForm(true)}
                className={`w-full font-bold py-4 px-8 rounded-xl transition-all border flex items-center justify-center gap-3 tracking-widest uppercase text-xs ${
                  themeMode === 'dark' 
                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <MessageSquare size={18} /> Nhận tư vấn chuyên sâu
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`max-w-md w-full rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] p-10 relative border ${
                themeMode === 'dark' ? 'bg-[#121212] border-white/5 text-slate-100' : 'bg-white border-slate-100 text-slate-800'
              }`}
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowContactForm(false)}
                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
                  themeMode === 'dark' ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-50 text-slate-400'
                }`}
              >
                <X size={20} />
              </motion.button>

              <div className="text-center mb-10">
                <div className={`p-5 rounded-full inline-block mb-6 border ${
                  themeMode === 'dark' ? 'bg-accent-900/20 border-accent-500/20' : 'bg-accent-50 border-accent-500/10'
                }`}>
                  <Hand className="text-accent-500" size={32} />
                </div>
                <h2 className="text-3xl font-serif italic mb-3">Liên hệ tư vấn</h2>
                <p className={`text-xs font-medium tracking-widest uppercase opacity-50 ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Đặc quyền dành riêng cho bạn
                </p>
              </div>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className={`p-6 rounded-full inline-block mb-6 ${themeMode === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
                    <CheckCircle2 className="text-green-500" size={48} />
                  </div>
                  <h3 className="text-2xl font-serif italic text-green-600 dark:text-green-400 mb-4">Gửi thành công!</h3>
                  <p className="text-sm font-medium leading-relaxed opacity-70">
                    Gửi thông tin thành công, bộ phận tư vấn sẽ liên hệ lại sớm nhất.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-1">Họ tên</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-500/50" size={18} />
                      <input
                        required
                        type="text"
                        placeholder="Quý danh của bạn"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all outline-none text-sm font-medium ${
                          themeMode === 'dark' 
                            ? 'bg-white/5 border-white/10 focus:border-accent-500/50' 
                            : 'bg-slate-50 border-slate-100 focus:border-accent-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-500/50" size={18} />
                      <input
                        required
                        type="email"
                        placeholder="Địa chỉ email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all outline-none text-sm font-medium ${
                          themeMode === 'dark' 
                            ? 'bg-white/5 border-white/10 focus:border-accent-500/50' 
                            : 'bg-slate-50 border-slate-100 focus:border-accent-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-1">Số điện thoại</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-500/50" size={18} />
                      <input
                        required
                        type="tel"
                        placeholder="Số điện thoại liên hệ"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all outline-none text-sm font-medium ${
                          themeMode === 'dark' 
                            ? 'bg-white/5 border-white/10 focus:border-accent-500/50' 
                            : 'bg-slate-50 border-slate-100 focus:border-accent-400'
                        }`}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-6 uppercase tracking-[0.2em] text-xs"
                  >
                    Gửi yêu cầu tư vấn
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-slate-400 text-sm font-medium flex items-center gap-2"
      >
        <Stethoscope size={16} /> Chăm sóc răng miệng mỗi ngày
      </motion.div>
    </div>
  );
}
