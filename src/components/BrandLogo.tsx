import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  subtitle?: string;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<BrandLogoProps['size']>, { box: string; img: string; title: string }> = {
  sm: {
    box: 'p-1 rounded-xl',
    img: 'h-9 w-9 rounded-lg',
    title: 'text-lg',
  },
  md: {
    box: 'p-1.5 rounded-xl',
    img: 'h-12 w-12 rounded-lg',
    title: 'text-xl',
  },
  lg: {
    box: 'p-2 rounded-2xl',
    img: 'h-16 w-16 rounded-xl',
    title: 'text-2xl',
  },
  xl: {
    box: 'p-2.5 rounded-2xl',
    img: 'h-24 w-24 rounded-xl',
    title: 'text-3xl',
  },
};

/**
 * Official DhanaDrishti Logo Component (CHANGE 4)
 * - Uses `/logo.png` directly without stretching, cropping, or SVG recreation.
 * - Dark navy background blends naturally in dark theme.
 * - In light theme, wraps inside a dark navy glass badge so the white "Dhana" text stays crisp and readable.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'sm',
  showText = true,
  subtitle,
  className = '',
}) => {
  const { theme } = useTheme();
  const dimensions = SIZE_CLASSES[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className={`inline-flex items-center justify-center shrink-0 transition-all ${dimensions.box} ${
          theme === 'light'
            ? 'bg-[#0B1120] border border-slate-800/90 shadow-md ring-1 ring-emerald-500/20'
            : 'bg-[#0B1120]/80 border border-slate-800/60'
        }`}
      >
        <img
          src="/logo.png"
          alt="DhanaDrishti Official Logo"
          referrerPolicy="no-referrer"
          className={`${dimensions.img} object-contain block`}
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <div
            className={`font-display font-bold tracking-tight ${dimensions.title} ${
              theme === 'light'
                ? 'bg-[#0B1120] px-2.5 py-0.5 rounded-lg border border-slate-800 shadow-sm'
                : ''
            }`}
          >
            <span className="text-white">Dhana</span>
            <span className="text-amber-400">Drishti</span>
          </div>
          {subtitle && (
            <span className="text-xs text-[var(--text-muted)] mt-0.5 font-normal">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
