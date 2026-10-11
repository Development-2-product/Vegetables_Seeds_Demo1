import CategoryGrid from '@/components/sections/CategoryGrid';
import PageIntro from '@/components/ui/PageIntro';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <PageIntro eyebrow="Seed Categories" title="Find Seeds by Crop Type" description="Explore our curated seed categories and move directly to the varieties that match your growing needs." image="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop" />
      <CategoryGrid />
    </div>
  );
}
