import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.18em] ${
            light ? 'text-navy-300' : 'text-navy-500'
          }`}
        >
          <span className={`h-px w-6 ${light ? 'bg-navy-400' : 'bg-navy-400'}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-balance text-3xl font-700 leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${light ? 'text-navy-200' : 'text-navy-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Badge({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-600 ${
        light ? 'bg-white/10 text-navy-100 ring-1 ring-white/15' : 'bg-navy-50 text-navy-700 ring-1 ring-navy-100'
      }`}
    >
      {children}
    </span>
  );
}
