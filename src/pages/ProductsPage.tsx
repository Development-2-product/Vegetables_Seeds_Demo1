import { useState } from 'react';
import PageIntro from '@/components/ui/PageIntro';
import ProductExplorer from '@/components/sections/ProductExplorer';
import RequestProductModal from '@/components/RequestProductModal';
import { Product } from '@/data/products';

export default function ProductsPage() {
  const [requestProduct, setRequestProduct] = useState<Product | null>(null);
  return (
    <div className="min-h-screen bg-cream-50">
      <PageIntro eyebrow="Product Catalogue" title="Our Seed Collection" description="Browse our complete range of seed varieties. Search, filter, and explore detailed information for each product." image="https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-20">
        <ProductExplorer onRequest={setRequestProduct} />
      </div>

      <RequestProductModal product={requestProduct} onClose={() => setRequestProduct(null)} />
    </div>
  );
}
