import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-[1.15] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function SectionWrapper({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
