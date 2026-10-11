import { Link } from 'react-router-dom';
import { ArrowUpRight, Sprout } from 'lucide-react';
import { Category, getVarietyCount } from '@/data/products';

export default function CategoryCard({ category }: { category: Category }) {
  const varietyCount = getVarietyCount(category.name);

  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative block min-h-[280px] overflow-hidden rounded-3xl bg-forest-900 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-forest-950/5" />

      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-cream-50 mb-1 font-display tracking-tight">
              {category.name}
            </h3>
            <p className="text-sm text-cream-200/80 leading-relaxed line-clamp-2 mb-3">
              {category.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-botanical-300">
              <Sprout className="w-3.5 h-3.5" />
              {varietyCount} varieties
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-cream-50/15 backdrop-blur-md flex items-center justify-center text-cream-50 group-hover:bg-cream-50 group-hover:text-forest-800 transition-all duration-500 shrink-0">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
}
