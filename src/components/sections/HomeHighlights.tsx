import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const featuredCategories = categories.slice(0, 3);

export default function HomeHighlights() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-cream-50 py-16 sm:py-20 lg:py-24" aria-labelledby="crop-browser-title">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-botanical-100/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600">Browse by crop</span>
            <h2 id="crop-browser-title" className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">Start with the crop you want to grow.</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">Explore seed types selected for everyday gardens, commercial plots, and field cultivation.</p>
          </div>
          <Link to="/categories" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-forest-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-4">
            View all categories <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={ref} className={`reveal-stagger ${visible ? 'visible' : ''} grid gap-5 sm:grid-cols-3 lg:gap-6`}>
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="group relative min-h-[280px] overflow-hidden rounded-3xl bg-forest-900 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-4"
            >
              <img src={category.image} alt={category.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm leading-relaxed text-cream-100/80">{category.description}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-cream-50">{category.name}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-50/15 text-cream-50 backdrop-blur-sm transition-all duration-300 group-hover:bg-cream-50 group-hover:text-forest-800">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
