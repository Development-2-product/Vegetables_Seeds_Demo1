import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ImageShowcase from '@/components/sections/ImageShowcase';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HomeHighlights from '@/components/sections/HomeHighlights';
import RequestProductModal from '@/components/RequestProductModal';
import { Product } from '@/data/products';

export default function HomePage() {
  const [requestProduct, setRequestProduct] = useState<Product | null>(null);

  return (
    <>
      <Hero />
      <HomeHighlights />
      <FeaturedProducts onRequest={setRequestProduct} />
      <AboutSection />
      <WhyChooseUs />
      <ImageShowcase />
      <RequestProductModal product={requestProduct} onClose={() => setRequestProduct(null)} />
    </>
  );
}
