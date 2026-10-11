import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}

export default function PageIntro({ eyebrow, title, description, image, children }: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      {image ? <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" /> : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-950/95 via-forest-900/90 to-forest-800/80" />
      <div className="absolute -right-24 top-8 -z-10 h-64 w-64 rounded-full bg-botanical-400/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-16 -z-10 h-72 w-72 rounded-full bg-forest-600/50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-botanical-300">{eyebrow}</span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
