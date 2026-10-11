import { useState } from 'react';
import ProductDetail from '@/components/sections/ProductDetail';
import RequestProductModal from '@/components/RequestProductModal';
import { Product } from '@/data/products';

export default function ProductDetailPage() {
  const [requestProduct, setRequestProduct] = useState<Product | null>(null);

  return (
    <>
      <ProductDetail onRequest={setRequestProduct} />
      <RequestProductModal product={requestProduct} onClose={() => setRequestProduct(null)} />
    </>
  );
}
