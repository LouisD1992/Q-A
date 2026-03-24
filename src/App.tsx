import { useState, useEffect, useRef, RefObject } from 'react';
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
  Plus
} from 'lucide-react';
import { QUESTIONS } from './questions';
import { QuizState, Question, ThemeMode, AccentColor } from './types';

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
  { name: 'blue', color: '#3b82f6' },
  { name: 'teal', color: '#14b8a6' },
  { name: 'purple', color: '#a855f7' },
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

  const handleStart = () => {
    playSound(clickAudio);
    setShuffledQuestions(shuffleArray(QUESTIONS));
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      answers: [],
      isGameOver: false,
    });
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
      setGameState(prev => ({ ...prev, score: prev.score + 1 }));
    } else {
      playSound(incorrectAudio);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
      
      if (gameState.currentQuestionIndex < shuffledQuestions.length - 1) {
        setGameState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          answers: [...prev.answers, index]
        }));
      } else {
        playSound(finishAudio);
        setGameState(prev => ({
          ...prev,
          showResult: true,
          isGameOver: true,
          answers: [...prev.answers, index]
        }));
      }
    }, 2500); // Increased time to read explanation
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeMode === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-accent-50 text-slate-800'} font-serif flex flex-col items-center p-4 overflow-x-hidden`}>
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

      {/* Top Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {gameState.currentQuestionIndex >= 0 && !gameState.showResult && (
          <button 
            onClick={handleShuffleMidGame}
            title="Xáo trộn câu hỏi còn lại"
            className={`p-3 rounded-full shadow-md transition-colors group ${themeMode === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}
          >
            <Shuffle size={20} className="text-accent-500 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        )}
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-3 rounded-full shadow-md transition-colors ${themeMode === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}
        >
          {soundEnabled ? <Volume2 size={20} className="text-accent-500" /> : <VolumeX size={20} className="text-slate-400" />}
        </button>
        <button 
          onClick={() => setShowSettings(true)}
          className={`p-3 rounded-full shadow-md transition-colors ${themeMode === 'dark' ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}
        >
          <Settings size={20} className="text-slate-500" />
        </button>
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
              <button 
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Palette className="text-accent-500" /> Cài đặt giao diện
              </h2>

              <div className="space-y-8">
                {/* Mode Selection */}
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Chế độ</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setThemeMode('light')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 transition-all ${themeMode === 'light' ? 'border-accent-500 bg-accent-50 text-accent-700' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <Sun size={18} /> Sáng
                    </button>
                    <button
                      onClick={() => setThemeMode('dark')}
                      className={`flex items-center justify-center gap-2 p-3 rounded-2xl border-2 transition-all ${themeMode === 'dark' ? 'border-accent-500 bg-accent-900/30 text-accent-400' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <Moon size={18} /> Tối
                    </button>
                  </div>
                </div>

                {/* Accent Color Selection */}
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Màu chủ đạo</label>
                  <div className="flex flex-wrap gap-3">
                    {ACCENT_COLORS.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setAccentColor(color.name)}
                        className={`w-10 h-10 rounded-full border-4 transition-all transform hover:scale-110 ${accentColor === color.name ? 'border-accent-500 scale-110' : 'border-transparent'}`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Sound Settings */}
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 block">Âm thanh</label>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${soundEnabled ? 'border-accent-500 bg-accent-50 text-accent-700' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <div className="flex items-center gap-3">
                        {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                        <span className="font-bold">Âm thanh chung</span>
                      </div>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${soundEnabled ? 'bg-accent-500' : 'bg-slate-300'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${soundEnabled ? 'left-6' : 'left-1'}`} />
                      </div>
                    </button>

                    <button
                      onClick={() => setBgmEnabled(!bgmEnabled)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${bgmEnabled ? 'border-accent-500 bg-accent-50 text-accent-700' : 'border-slate-100 dark:border-slate-800 text-slate-500'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Activity size={20} />
                        <span className="font-bold">Nhạc nền</span>
                      </div>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${bgmEnabled ? 'bg-accent-500' : 'bg-slate-300'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${bgmEnabled ? 'left-6' : 'left-1'}`} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="w-full mt-10 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
              >
                Hoàn tất
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradients */}
        <div className={`absolute inset-0 opacity-20 transition-colors duration-1000 ${
          themeMode === 'dark' 
            ? 'bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_50%)]' 
            : 'bg-[radial-gradient(circle_at_50%_50%,var(--accent-100)_0%,transparent_70%)]'
        }`} />
        
        {/* Floating Icons */}
        <div className={`absolute inset-0 opacity-[0.07] dark:opacity-[0.05] ${themeMode === 'dark' ? 'text-accent-400' : 'text-accent-600'}`}>
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%]"
          >
            <Smile size={120} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-[10%]"
          >
            <Sparkles size={80} />
          </motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] left-[12%]"
          >
            <ShieldCheck size={100} />
          </motion.div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[25%] right-[15%]"
          >
            <Stethoscope size={90} />
          </motion.div>
          
          <motion.div 
            animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] left-[20%]"
          >
            <Heart size={60} />
          </motion.div>
          
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[40%] right-[25%]"
          >
            <Plus size={70} />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[60%] left-[8%]"
          >
            <Activity size={85} />
          </motion.div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className={`absolute inset-0 opacity-[0.03] ${themeMode === 'dark' ? 'bg-[grid_#fff_20px_20px]' : 'bg-[grid_#000_20px_20px]'}`} 
             style={{ backgroundImage: `radial-gradient(${themeMode === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <AnimatePresence mode="wait">
        {/* Start Screen */}
        {gameState.currentQuestionIndex === -1 && (
          <div className="flex flex-col items-center gap-8 relative z-10 flex-1 justify-center">
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className={`max-w-md w-full rounded-3xl shadow-xl p-8 text-center border-4 ${themeMode === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-accent-100'}`}
            >
              <motion.div 
                className={`mb-6 inline-block p-4 rounded-full ${themeMode === 'dark' ? 'bg-accent-900/20' : 'bg-accent-50'}`}
                animate={{ 
                  rotateY: [0, 360],
                  rotateZ: [0, 5, -5, 0]
                }}
                transition={{ 
                  rotateY: { repeat: Infinity, duration: 3, ease: "linear" },
                  rotateZ: { repeat: Infinity, duration: 4 }
                }}
                style={{ perspective: 1000 }}
              >
                <Sparkles className="w-16 h-16 text-accent-500" />
              </motion.div>
              <h1 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4 uppercase tracking-tighter">NỤ CƯỜI SAO VIỆT</h1>
              <p className={`mb-8 leading-relaxed font-bold ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Bạn có tự tin về kiến thức chăm sóc răng miệng của mình không? 
                Hãy cùng tham gia 50 câu hỏi thú vị nhé!
              </p>
              <motion.button
                onClick={handleStart}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Bắt đầu ngay <ChevronRight />
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* Quiz Screen */}
        {gameState.currentQuestionIndex >= 0 && !gameState.showResult && currentQuestion && (
          <motion.div
            key={`question-${gameState.currentQuestionIndex}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className={`max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden relative z-10 flex-1 flex flex-col ${themeMode === 'dark' ? 'bg-slate-900' : 'bg-white'}`}
          >
            {/* Progress Bar */}
            <div className={`h-1.5 w-full ${themeMode === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <motion.div 
                className="h-full bg-accent-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-4 md:p-8 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${themeMode === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                  {getCategoryIcon(currentQuestion.category)}
                  <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider font-sans ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {currentQuestion.category}
                  </span>
                </div>
                <div className="text-accent-500 font-bold text-base font-sans">
                  {gameState.currentQuestionIndex + 1} / {shuffledQuestions.length}
                </div>
              </div>

              <motion.h2 
                key={`text-${gameState.currentQuestionIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xl md:text-2xl font-bold mb-6 leading-tight ${themeMode === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}
              >
                {currentQuestion.text}
              </motion.h2>

              <div className="grid gap-2 md:gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === currentQuestion.correctAnswer;
                  
                  let buttonClass = "w-full p-3 md:p-4 rounded-xl text-left font-medium text-sm md:text-base transition-all border-2 relative overflow-hidden ";
                  
                  if (showFeedback) {
                    if (isCorrectOption) {
                      buttonClass += themeMode === 'dark' 
                        ? "bg-green-900/30 border-green-500 text-green-400 shadow-sm"
                        : "bg-green-50 border-green-500 text-green-700 shadow-sm";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += themeMode === 'dark'
                        ? "bg-red-900/30 border-red-500 text-red-400 shadow-sm"
                        : "bg-red-50 border-red-500 text-red-700 shadow-sm";
                    } else {
                      buttonClass += themeMode === 'dark'
                        ? "bg-slate-900 border-slate-800 text-slate-600 opacity-50"
                        : "bg-white border-slate-100 text-slate-400 opacity-50";
                    }
                  } else {
                    buttonClass += themeMode === 'dark'
                      ? "bg-slate-800 border-slate-700 hover:border-accent-500 hover:bg-slate-700 text-slate-300 shadow-sm"
                      : "bg-white border-slate-100 hover:border-accent-300 hover:bg-accent-50 text-slate-700 hover:text-accent-700 shadow-sm";
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showFeedback ? { x: 5 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      animate={showFeedback && isSelected && !isCorrect ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleAnswer(index)}
                      disabled={showFeedback}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <span>{option}</span>
                        {showFeedback && isCorrectOption && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <CheckCircle2 className="text-green-500" size={18} />
                          </motion.div>
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <XCircle className="text-red-500" size={18} />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Ripple effect on click */}
                      {isSelected && !showFeedback && (
                        <motion.div 
                          className={`absolute inset-0 opacity-30 ${themeMode === 'dark' ? 'bg-accent-900' : 'bg-accent-100'}`}
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 2, opacity: 0 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation display */}
              <AnimatePresence>
                {showFeedback && currentQuestion.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-4 p-3 rounded-xl border flex gap-2 items-start ${themeMode === 'dark' ? 'bg-accent-900/20 border-accent-900/30' : 'bg-accent-50 border-accent-100'}`}
                  >
                    <Info className="text-accent-500 shrink-0 mt-0.5" size={16} />
                    <p className={`text-xs font-bold leading-relaxed ${themeMode === 'dark' ? 'text-accent-300' : 'text-accent-800'}`}>
                      <span className="font-black">Giải thích:</span> {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Feedback Overlay */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none"
                >
                  <div className={`px-6 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-white text-sm ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    {isCorrect ? (
                      <motion.div className="flex items-center gap-2" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }}>
                        <Sparkles size={16} /> Chính xác!
                      </motion.div>
                    ) : (
                      <motion.div className="flex items-center gap-2" animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity }}>
                        <Frown size={16} /> Tiếc quá!
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Result Screen */}
        {gameState.showResult && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className={`max-w-md w-full rounded-3xl shadow-2xl p-10 text-center relative z-10 border-4 flex-1 flex flex-col justify-center ${themeMode === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-accent-100'}`}
          >
            <div className="mb-8 relative inline-block">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 10, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Trophy className="w-24 h-24 text-yellow-500 mx-auto" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles className="text-accent-400 w-10 h-10" />
              </motion.div>
            </div>

            <h2 className={`text-3xl font-bold mb-2 ${themeMode === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}>Hoàn Thành!</h2>
            <p className={`mb-8 ${themeMode === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Kết quả của bạn là:</p>

            <motion.div 
              className={`rounded-3xl p-8 mb-10 ${themeMode === 'dark' ? 'bg-accent-900/20' : 'bg-accent-50'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-6xl font-black text-accent-600 dark:text-accent-400 mb-2 font-sans">
                {gameState.score}
                <span className={`text-2xl font-bold ${themeMode === 'dark' ? 'text-accent-800' : 'text-accent-300'}`}>/{shuffledQuestions.length}</span>
              </div>
              <p className={`font-bold ${themeMode === 'dark' ? 'text-accent-300' : 'text-accent-700'}`}>
                {gameState.score === shuffledQuestions.length ? "Tuyệt vời! Bạn là chuyên gia!" : 
                 gameState.score > shuffledQuestions.length * 0.8 ? "Rất tốt! Bạn chăm sóc răng rất kỹ!" :
                 gameState.score > shuffledQuestions.length * 0.5 ? "Khá tốt! Hãy cố gắng hơn nhé!" :
                 "Bạn cần tìm hiểu thêm về nha khoa nhé!"}
              </p>
            </motion.div>

            <button
              onClick={handleRestart}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> Chơi lại
            </button>
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
