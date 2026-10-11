import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ImageShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative min-h-[440px] overflow-hidden py-16 sm:min-h-[480px] sm:py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12208088/pexels-photo-12208088.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Aerial view of vibrant agricultural farmland with diverse crops"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/40 to-forest-950/50" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} max-w-lg`}
        >
          <div className="glass-dark rounded-3xl p-7 sm:p-8 shadow-glass">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-50 font-display leading-tight tracking-tight mb-4">
              From Seed to Harvest
            </h2>
            <p className="text-sm sm:text-base text-cream-100/85 leading-relaxed">
              Supporting better cultivation starts with selecting the right seed. Our varieties are chosen to perform across diverse growing conditions — from small plots to large fields.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/products" variant="white" size="md" className="group">
                Explore the collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button to="/contact" variant="outline" size="md" className="border-cream-50/30 text-cream-50 hover:border-cream-50/60 hover:bg-cream-50/10">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
