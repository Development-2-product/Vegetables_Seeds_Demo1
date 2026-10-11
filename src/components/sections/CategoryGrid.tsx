import { ArrowRight, ClipboardCheck, MessageCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading, { SectionWrapper } from '@/components/ui/SectionHeading';
import CategoryCard from '@/components/cards/CategoryCard';
import { categories } from '@/data/products';

export default function CategoryGrid() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper id="categories" className="bg-cream-50 py-14 lg:py-20">
      <SectionHeading
        className="hidden"
        eyebrow="Seed Categories"
        title="Explore Our Seed Collection"
        description="Browse our curated categories spanning vegetables, fruits, herbs, flowers, and specialty seeds — each selected for cultivation reliability."
      />

      <div
        ref={ref}
        className={`reveal-stagger ${visible ? 'visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6`}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mt-14 grid gap-6 rounded-3xl bg-forest-900 p-7 text-cream-50 shadow-card sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-300">Need a hand choosing?</span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Find the right category, then refine your selection.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[{ icon: Search, text: 'Browse by crop type' }, { icon: ClipboardCheck, text: 'Compare product details' }, { icon: MessageCircle, text: 'Send us your requirement' }].map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-2 text-sm text-cream-100/80"><Icon className="h-4 w-4 shrink-0 text-botanical-300" />{text}</div>)}
          </div>
        </div>
        <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-white">View all products <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </SectionWrapper>
  );
}
