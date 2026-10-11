import ProductGallery from '@/components/sections/ProductGallery';
import PageIntro from '@/components/ui/PageIntro';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageIntro eyebrow="Product Gallery" title="Our Complete Seed Collection" description="Browse every variety visually, then open a product to review its growing information and available pack sizes." image="https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop" />
      <ProductGallery />
    </div>
  );
}
