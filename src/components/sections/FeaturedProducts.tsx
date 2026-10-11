import { useReveal } from '@/hooks/useReveal';
import SectionHeading, { SectionWrapper } from '@/components/ui/SectionHeading';
import ProductCard from '@/components/cards/ProductCard';
import Button from '@/components/ui/Button';
import { getFeaturedProducts, Product } from '@/data/products';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  onRequest: (product: Product) => void;
}

export default function FeaturedProducts({ onRequest }: FeaturedProductsProps) {
  const { ref, visible } = useReveal();
  const featured = getFeaturedProducts();

  return (
    <SectionWrapper id="featured-varieties" className="bg-cream-100">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <SectionHeading
          eyebrow="Featured Varieties"
          title="Selected Varieties"
          description="A showcase of our featured seed varieties, chosen for consistent cultivation results and broad adaptability."
          align="left"
        />
        <Button to="/products" variant="outline" size="md" className="shrink-0 group">
          View All Products
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>

      <div
        ref={ref}
        className={`reveal-stagger ${visible ? 'visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} onRequest={onRequest} />
        ))}
      </div>
    </SectionWrapper>
  );
}
