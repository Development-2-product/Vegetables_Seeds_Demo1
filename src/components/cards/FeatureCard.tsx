import { Award, Layers, Sprout, Truck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Sprout,
    title: 'Quality Focused',
    description: 'Carefully selected seed varieties chosen for consistent performance and reliable cultivation results.',
  },
  {
    icon: Layers,
    title: 'Diverse Collection',
    description: 'Solutions across vegetables, fruits, herbs, flowers, and specialty seed varieties.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    description: 'Designed around consistent product availability to support your planting schedules and requirements.',
  },
  {
    icon: Award,
    title: 'Agricultural Expertise',
    description: 'Focused on supporting cultivation needs with practical knowledge across diverse growing conditions.',
  },
];

export default function FeatureCard() {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={`reveal-stagger ${visible ? 'visible' : ''} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
      {features.map((feature) => (
        <div key={feature.title} className="group relative overflow-hidden rounded-3xl bg-cream-50 p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-botanical-100/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 transition-colors duration-500 group-hover:bg-botanical-500">
              <feature.icon className="h-7 w-7 text-cream-50" />
            </div>
            <h3 className="font-display text-lg font-bold tracking-tight text-forest-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
