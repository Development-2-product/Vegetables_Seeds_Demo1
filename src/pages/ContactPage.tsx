import ContactSection from '@/components/sections/ContactSection';
import PageIntro from '@/components/ui/PageIntro';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <PageIntro eyebrow="Product Request" title="Looking for a Specific Seed?" description="Tell us what you are looking for and our team will help you find the right product." image="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop" />
      <ContactSection showHeading={false} />
    </div>
  );
}
