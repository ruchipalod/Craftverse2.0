import React, { useEffect } from 'react';
import {
  Sun,
  Moon,
  LogOut,
  User,
  Globe,
  ShieldCheck,
  Menu,
  X,
  LayoutDashboard,
  Sliders,
  BookOpen,
  HeartPulse,
  CheckCircle2,
  Sparkles,
  Home,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth, PreferredLanguage } from '../context/AuthContext';
import { BrandLogo } from './BrandLogo';

export type AppView =
  | 'landing'
  | 'auth'
  | 'profile'
  | 'dashboard'
  | 'termopedia'
  | 'whatif'
  | 'planners'
  | 'explainer'
  | 'health'
  | 'mythfact'
  | 'mentor';

export type TermOPediaTab = 'terms' | 'planner' | 'videos' | 'flashcards' | 'quiz';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  mobileMenuOpen?: boolean;
  onToggleMobileMenu?: () => void;
}

interface SidebarItem {
  id: AppView;
  icon: React.ComponentType<{ className?: string }>;
  label: { English: string; Hindi: string; Marathi: string };
}

// Ordered vertical feature list (Planner & Video Explainers moved inside Term-O-Pedia per CHANGE 3)
export const SIDEBAR_NAV_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: { English: 'Dashboard', Hindi: 'डैशबोर्ड', Marathi: 'डॅशबोर्ड' },
  },
  {
    id: 'whatif',
    icon: Sliders,
    label: { English: 'What-If', Hindi: 'What-If सिम्युलेटर', Marathi: 'What-If सिम्युलेटर' },
  },
  {
    id: 'termopedia',
    icon: BookOpen,
    label: { English: 'Term-O-Pedia', Hindi: 'Term-O-Pedia', Marathi: 'Term-O-Pedia' },
  },
  {
    id: 'health',
    icon: HeartPulse,
    label: { English: 'Health Check', Hindi: 'हेल्थ स्कोर', Marathi: 'आर्थिक आरोग्य' },
  },
  {
    id: 'mythfact',
    icon: CheckCircle2,
    label: { English: 'Myth / Fact', Hindi: 'मिथक / तथ्य', Marathi: 'गैरसमज / सत्य' },
  },
  {
    id: 'mentor',
    icon: Sparkles,
    label: { English: 'AI Mentor', Hindi: 'AI मेंटर', Marathi: 'AI मार्गदर्शक' },
  },
];

export const GUEST_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'landing',
    icon: Home,
    label: { English: 'Overview', Hindi: 'होम / परिचय', Marathi: 'मुख्य पृष्ठ' },
  },
  {
    id: 'termopedia',
    icon: BookOpen,
    label: { English: 'Term-O-Pedia', Hindi: 'Term-O-Pedia', Marathi: 'Term-O-Pedia' },
  },
  {
    id: 'mythfact',
    icon: CheckCircle2,
    label: { English: 'Myth / Fact', Hindi: 'मिथक / तथ्य', Marathi: 'गैरसमज / सत्य' },
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  mobileMenuOpen = false,
  onToggleMobileMenu,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, language, setLanguage } = useAuth();

  const handleLogout = async () => {
    await logout();
    onNavigate('auth');
  };

  return (
    <header className="sticky top-0 z-40 w-full theme-glass border-b border-[var(--border-subtle)] transition-colors">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Mobile & Tablet Slide-in Drawer Button (CHANGE 2) */}
          {onToggleMobileMenu && (
            <button
              type="button"
              onClick={onToggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-emerald-500/50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}

          {/* Official DhanaDrishti Logo */}
          <button
            type="button"
            onClick={() =>
              onNavigate(user ? (user.profileCompleted ? 'dashboard' : 'profile') : 'landing')
            }
            className="cursor-pointer text-left focus:outline-none"
          >
            <BrandLogo size="sm" showText={true} />
          </button>
        </div>

        {/* Controls: Language, Theme Toggle, Profile / Auth (kept in their exact top-bar place) */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs">
            <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <select
              aria-label="Select Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as PreferredLanguage)}
              className="bg-transparent text-[var(--text-primary)] font-medium focus:outline-none cursor-pointer"
            >
              <option value="English" className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                English
              </option>
              <option value="Hindi" className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                हिन्दी (Hindi)
              </option>
              <option value="Marathi" className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                मराठी (Marathi)
              </option>
            </select>
          </div>

          {/* Working Light / Dark Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Current theme: ${theme === 'dark' ? 'Dark' : 'Light'}. Click to switch.`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-emerald-500/50 text-xs font-medium text-[var(--text-primary)] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Moon className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-600" />
                <span className="hidden sm:inline">Light</span>
              </>
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('profile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  currentView === 'profile'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-emerald-500/50'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="max-w-[120px] truncate">{user.fullName}</span>
              </button>
              <button
                type="button"
                onClick={handleLogout}
                title="Log out safely (your saved profile remains in the database)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('auth')}
              className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

interface FeatureSidebarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const FeatureSidebar: React.FC<FeatureSidebarProps> = ({
  currentView,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}) => {
  const { user, language } = useAuth();
  const items = user ? SIDEBAR_NAV_ITEMS : GUEST_SIDEBAR_ITEMS;

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseMobile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, onCloseMobile]);

  const handleSelect = (view: AppView) => {
    onNavigate(view);
    onCloseMobile();
  };

  const renderNavList = () => (
    <nav aria-label="Main Features Navigation" className="space-y-1.5 p-4">
      <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        {language === 'Hindi' ? 'मुख्य सुविधाएँ' : language === 'Marathi' ? 'मुख्य वैशिष्ट्ये' : 'Features'}
      </div>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer text-left border ${
              isActive
                ? 'bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border-transparent'
            }`}
          >
            <Icon
              className={`w-5 h-5 shrink-0 ${
                isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--text-muted)]'
              }`}
            />
            <span>{item.label[language]}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Vertical Sidebar (CHANGE 2) */}
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col theme-glass border-r border-[var(--border-subtle)] min-h-[calc(100vh-4rem)] sticky top-16 self-start z-20">
        {renderNavList()}
      </aside>

      {/* Mobile & Tablet Slide-In Drawer (CHANGE 2) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Features Menu"
            className="relative z-10 w-72 max-w-[85vw] h-full theme-card border-r border-[var(--border-strong)] flex flex-col justify-between overflow-y-auto shadow-2xl"
          >
            <div>
              <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
                <BrandLogo size="sm" showText={true} />
                <button
                  type="button"
                  onClick={onCloseMobile}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {renderNavList()}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export const Footer: React.FC<{ onNavigate: (view: AppView) => void }> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-10 transition-colors relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <BrandLogo
            size="sm"
            showText={true}
            subtitle="Empowering Indian households with clarity on CTC, SIPs, Taxes & Long-Term Wealth."
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--text-secondary)]">
          <button
            type="button"
            onClick={() => onNavigate('termopedia')}
            className="hover:text-[var(--text-primary)] cursor-pointer"
          >
            Term-O-Pedia
          </button>
          <button
            type="button"
            onClick={() => onNavigate('explainer')}
            className="hover:text-[var(--text-primary)] cursor-pointer"
          >
            Explainer Videos
          </button>
          <button
            type="button"
            onClick={() => onNavigate('mythfact')}
            className="hover:text-[var(--text-primary)] cursor-pointer"
          >
            Myth vs Fact
          </button>
          <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Educational Financial Literacy Platform · © {new Date().getFullYear()} DhanaDrishti
          </span>
        </div>
      </div>
    </footer>
  );
};
