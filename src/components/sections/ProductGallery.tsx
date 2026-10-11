import { Link } from 'react-router-dom';
import { ArrowRight, Image, PackageCheck, Search } from 'lucide-react';
import { products } from '@/data/products';
import SectionHeading, { SectionWrapper } from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

export default function ProductGallery() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper id="gallery" className="bg-cream-100 py-14 lg:py-20">
      <SectionHeading
        className="hidden"
        eyebrow="Product Gallery"
        title="See Every Variety We Offer"
        description="A visual overview of our complete seed collection. Select any product to explore growing details and available pack sizes."
      />

      <div className="mb-8 flex flex-col gap-4 border-b border-cream-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-charcoal-500">Each variety is selected for dependable cultivation. Open a card for growing guidance, characteristics, and available formats.</p>
        <p className="shrink-0 text-sm font-semibold text-forest-800">{products.length} varieties available</p>
      </div>

      <div ref={ref} className={`reveal-stagger ${visible ? 'visible' : ''} grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4`}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-forest-900 shadow-soft transition-shadow duration-300 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-4 sm:aspect-[4/5]"
            aria-label={`View ${product.name}`}
          >
            <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="truncate text-[11px] font-medium uppercase tracking-wide text-cream-100/75 sm:text-xs">{product.category}</p>
              <p className="mt-1 font-display text-sm font-bold text-cream-50 sm:text-base">{product.name}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-botanical-300 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-900">
          Browse and filter all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-14 grid gap-5 border-t border-cream-300 pt-10 sm:grid-cols-3">
        {[{ icon: Image, title: 'Visual overview', text: 'Use the gallery to quickly spot varieties that match your crop plan.' }, { icon: Search, title: 'Product details', text: 'Open any card to review characteristics, seasonality, and pack information.' }, { icon: PackageCheck, title: 'Request with clarity', text: 'Share your preferred variety and quantity with our Hyderabad team.' }].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl bg-cream-50 p-6 shadow-soft">
            <Icon className="h-5 w-5 text-botanical-600" />
            <h2 className="mt-4 font-display text-lg font-bold text-forest-900">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
