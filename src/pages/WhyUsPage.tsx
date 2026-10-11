import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PageIntro from '@/components/ui/PageIntro';

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <PageIntro eyebrow="Why Verdant Seeds" title="Quality You Can Grow With" description="See the practical standards and support behind our carefully selected seed collection." image="https://images.pexels.com/photos/5528984/pexels-photo-5528984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop" />
      <WhyChooseUs />
    </div>
  );
}
