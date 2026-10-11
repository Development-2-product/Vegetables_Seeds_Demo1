import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onRequest: (product: Product) => void;
}

export default function ProductCard({ product, onRequest }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-cream-50 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cream-50/85 backdrop-blur-md text-forest-800 shadow-soft">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-forest-900 font-display tracking-tight mb-1.5">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-forest-50 text-forest-700">
            <Calendar className="w-3.5 h-3.5" />
            {product.season}
          </span>
          {product.characteristics[0] && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-botanical-50 text-botanical-700">
              <Sparkles className="w-3.5 h-3.5" />
              {product.characteristics[0]}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-forest-800/15 text-forest-800 hover:bg-forest-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
          <button
            onClick={() => onRequest(product)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-2"
          >
            Request
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
