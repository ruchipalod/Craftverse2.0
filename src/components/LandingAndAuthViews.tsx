import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  TrendingUp,
  BookOpen,
  PlayCircle,
  ShieldCheck,
  Calculator,
  Sparkles,
  AlertCircle,
  Lock,
  Mail,
  User,
  MapPin,
  Calendar,
  Globe,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useAuth, PreferredLanguage } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { AppView } from './Navbar';

/**
 * Full-Screen Background Video for Landing & Login/Signup Screens (CHANGE 5)
 * Uses /videos/login-bg.mp4 and /videos/login-bg-poster.jpg with:
 * - prefers-reduced-motion & low-power respect
 * - smooth loop cross-fade near loop boundary
 * - silent error fallback to existing background
 * - theme-aware semi-transparent gradient overlay for Dark & Light mode readability
 */
export const FirstPageVideoBackground: React.FC = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [loopFadeOpacity, setLoopFadeOpacity] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const navConn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    const shouldPause = mq.matches || Boolean(navConn?.saveData);
    setReduceMotion(shouldPause);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (reduceMotion) {
      vid.pause();
    } else {
      vid.play().catch(() => {
        // Autoplay blocked or low-power mode: poster remains visible cleanly
      });
    }
  }, [reduceMotion]);

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid || !vid.duration || !Number.isFinite(vid.duration)) return;
    const remaining = vid.duration - vid.currentTime;
    // Gentle cross-fade at loop boundary so end-to-start transition is completely smooth
    if (remaining < 0.55) {
      setLoopFadeOpacity(Math.max(0.72, remaining / 0.55));
    } else if (vid.currentTime < 0.45) {
      setLoopFadeOpacity(Math.min(1, 0.72 + (vid.currentTime / 0.45) * 0.28));
    } else if (loopFadeOpacity !== 1) {
      setLoopFadeOpacity(1);
    }
  };

  if (videoFailed) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Static poster layer underneath for seamless loop cross-fade and reduced-motion mode */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/videos/login-bg-poster.jpg")' }}
      />

      {!reduceMotion && (
        <video
          ref={videoRef}
          src="/videos/login-bg.mp4"
          poster="/videos/login-bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onError={() => setVideoFailed(true)}
          style={{ opacity: loopFadeOpacity }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      {/* Semi-transparent gradient overlay ensuring full readability in both Dark and Light modes */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-300"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(180deg, rgba(11, 17, 32, 0.78) 0%, rgba(11, 17, 32, 0.86) 50%, rgba(11, 17, 32, 0.94) 100%)'
              : 'linear-gradient(180deg, rgba(248, 250, 252, 0.84) 0%, rgba(241, 245, 249, 0.90) 50%, rgba(248, 250, 252, 0.95) 100%)',
        }}
      />
    </div>
  );
};

interface LandingViewProps {
  onNavigate: (view: AppView) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onNavigate }) => {
  const { user, language } = useAuth();

  const heroCopy = {
    English: {
      kicker: 'Indian Personal Finance & Wealth Vision Platform',
      title: 'Clarity on Every Rupee — From First CTC to Financial Freedom',
      subtitle:
        'Simulate career jumps, compare Old vs New Tax Regimes, master Indian financial terms in English, Hindi & Marathi, and track your real wealth trajectory.',
      primaryCta: user ? 'Go to Your Dashboard' : 'Get Started — Create Account',
      secondaryCta: 'Explore Video Guides',
    },
    Hindi: {
      kicker: 'भारतीय व्यक्तिगत वित्त और संपत्ति नियोजन मंच',
      title: 'हर रुपये की स्पष्टता — पहले CTC से आर्थिक स्वतंत्रता तक',
      subtitle:
        'अपनी भाषा (हिन्दी, मराठी, अंग्रेजी) में SIP, टैक्स प्लानिंग, आपातकालीन निधि और What-If सिम्युलेटर के साथ अपने वित्तीय भविष्य की योजना बनाएं।',
      primaryCta: user ? 'डैशबोर्ड पर जाएं' : 'शुरू करें — अकाउंट बनाएं',
      secondaryCta: 'वीडियो गाइड देखें',
    },
    Marathi: {
      kicker: 'भारतीय वैयक्तिक अर्थशास्त्र आणि संपत्ती नियोजन व्यासपीठ',
      title: 'प्रत्येक रुपयाची स्पष्टता — पहिल्या पगारापासून आर्थिक स्वातंत्र्यापर्यंत',
      subtitle:
        'मराठी, हिंदी आणि इंग्रजीमध्ये SIP, कर नियोजन, आपत्कालीन निधी आणि What-If सिम्युलेटरच्या मदतीने तुमच्या आर्थिक भविष्याचा आराखडा तयार करा.',
      primaryCta: user ? 'डॅशबोर्डवर जा' : 'सुरुवात करा — खाते तयार करा',
      secondaryCta: 'व्हिडिओ मार्गदर्शक पहा',
    },
  }[language];

  const features = [
    {
      icon: TrendingUp,
      title: 'What-If Wealth Simulator',
      desc: 'Test how a 30% CTC hike, a 10% Step-Up SIP, or a major purchase shifts your 10-to-20 year net worth trajectory.',
      target: (user ? 'whatif' : 'auth') as AppView,
    },
    {
      icon: Calculator,
      title: 'Tax & Goal Roadmap Planners',
      desc: 'Compare FY 2025-26 New vs Old Tax Regime slabs on your exact CTC and map out SIP targets for home, education, and retirement.',
      target: (user ? 'planners' : 'auth') as AppView,
    },
    {
      icon: PlayCircle,
      title: 'Multilingual Video Explainer Hub',
      desc: 'Curated, verified financial education lessons from RBI, CA Rachana Ranade, Zerodha Varsity, and Pranjal Kamra in English, Hindi & Marathi.',
      target: 'explainer' as AppView,
    },
    {
      icon: BookOpen,
      title: 'Term-O-Pedia & Myth vs Fact',
      desc: 'Decode CTC vs In-Hand, XIRR, ELSS 80C, CIBIL, and RBI Repo Rate through relatable everyday Indian analogies.',
      target: 'termopedia' as AppView,
    },
    {
      icon: ShieldCheck,
      title: '6-Pillar Financial Health Check',
      desc: 'Evaluate your emergency buffer, savings ratio, insurance protection, and tax efficiency in one diagnostic score.',
      target: (user ? 'health' : 'auth') as AppView,
    },
    {
      icon: Sparkles,
      title: 'Personalized AI Financial Mentor',
      desc: 'Ask questions tailored to your saved Dream Job, Annual CTC, Monthly Expenses, and Current Savings.',
      target: (user ? 'mentor' : 'auth') as AppView,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <FirstPageVideoBackground />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        {/* Hero Section with Official DhanaDrishti Logo */}
        <section className="theme-card rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {heroCopy.kicker}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] leading-tight">
              {heroCopy.title}
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {heroCopy.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() =>
                  onNavigate(user ? (user.profileCompleted ? 'dashboard' : 'profile') : 'auth')
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base transition-colors cursor-pointer shadow-md"
              >
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('explainer')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] hover:border-emerald-500/50 text-[var(--text-primary)] font-medium text-sm sm:text-base transition-colors cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-amber-500" />
                <span>{heroCopy.secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Right Hero Brand Card showcasing the official DhanaDrishti Logo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col items-center text-center space-y-5">
              <BrandLogo size="xl" showText={true} />
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xs">
                Your financial profile, CTC scenarios, language preference, and theme follow you securely across every session.
              </p>
              <div className="w-full grid grid-cols-3 gap-3 pt-3 border-t border-[var(--border-subtle)] text-left">
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)]">Languages</div>
                  <div className="font-mono font-semibold text-sm text-[var(--text-primary)] mt-0.5">
                    EN · हिं · म
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)]">Tax Slabs</div>
                  <div className="font-mono font-semibold text-sm text-emerald-600 dark:text-emerald-400 mt-0.5">
                    FY 25–26
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)]">Persistence</div>
                  <div className="font-mono font-semibold text-sm text-amber-600 dark:text-amber-400 mt-0.5">
                    Cloud DB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
              Complete Financial Vision Suite
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Every module adapts automatically to your saved profile and Light/Dark theme preference.
            </p>
          </div>
        </div>

        {/* Vertically Stacked Single-Column Feature Cards (CHANGE 2) */}
        <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(feat.target)}
                className="theme-card rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>Open Module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </div>
    </div>
  );
};

interface AuthViewProps {
  onAuthSuccess: (profileCompleted: boolean) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onAuthSuccess }) => {
  const { login, signup, sessionExpiredMessage } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup state (CHANGE 3: Full Name, Email, Password, Age, Location, Preferred Language)
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [age, setAge] = useState('25');
  const [location, setLocation] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<PreferredLanguage>('English');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    if (!loginEmail.trim() || !loginPassword) {
      setError('Please enter both your email address and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const loggedInUser = await login(loginEmail.trim(), loginPassword);
      onAuthSuccess(loggedInUser.profileCompleted);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to log in. Please verify your credentials.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);

    const parsedAge = Number(age);
    if (fullName.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }
    if (!signupEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!Number.isFinite(parsedAge) || parsedAge < 15 || parsedAge > 100) {
      setError('Please enter a valid age between 15 and 100.');
      return;
    }
    if (location.trim().length < 2) {
      setError('Please enter your location (City, State).');
      return;
    }

    setIsSubmitting(true);
    try {
      const createdUser = await signup({
        fullName: fullName.trim(),
        email: signupEmail.trim(),
        password: signupPassword,
        age: Math.round(parsedAge),
        location: location.trim(),
        preferredLanguage,
      });
      // After signup, profileCompleted is false so user is taken to the Financial Profile form
      onAuthSuccess(createdUser.profileCompleted);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to create account. Your typed inputs are preserved.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <FirstPageVideoBackground />
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="theme-card rounded-3xl p-6 sm:p-10 space-y-6">
        {/* Official DhanaDrishti Logo on Login/Signup */}
        <div className="flex flex-col items-center text-center space-y-3">
          <BrandLogo size="lg" showText={true} />
          <h1 className="text-2xl font-display font-bold text-[var(--text-primary)] pt-1">
            {mode === 'login'
              ? 'Welcome Back to DhanaDrishti'
              : 'Create Your DhanaDrishti Account'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md">
            {mode === 'login'
              ? 'Sign in to restore your saved Financial Profile, Dashboard projections, What-If scenarios, language, and theme.'
              : 'Sign up once — your personal details and financial profile stay saved in our database across sessions.'}
          </p>
        </div>

        {/* Mode Switch Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError(null);
            }}
            className={`py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError(null);
            }}
            className={`py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Sign Up
          </button>
        </div>

        {sessionExpiredMessage && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs sm:text-sm flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{sessionExpiredMessage}</span>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2.5"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
            >
              {isSubmitting ? 'Signing In & Restoring Profile...' : 'Login to DhanaDrishti'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Aarav Deshmukh"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="aarav@example.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Password (min 6 chars) *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Create password"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Age *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                  <input
                    type="number"
                    min="15"
                    max="100"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm font-mono"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                  Location (City, State) *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., Mumbai, Maharashtra"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                Preferred Language *
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
                <select
                  value={preferredLanguage}
                  onChange={(e) => setPreferredLanguage(e.target.value as PreferredLanguage)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl theme-input text-sm"
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिन्दी (Hindi)</option>
                  <option value="Marathi">मराठी (Marathi)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account & Continue to Financial Profile'}
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};
