import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { categories } from '@/data/products';

export default function AboutSection() {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-botanical-200/40 rounded-3xl rotate-12 blur-xl" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.pexels.com/photos/27176769/pexels-photo-27176769.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop"
                alt="Farmer planting seedlings in rich garden soil"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-glass max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-forest-900 font-display">{categories.length}</p>
                  <p className="text-xs text-charcoal-500">Seed Categories</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600 mb-3">
              About Verdant Seeds
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-[1.15] tracking-tight font-display mb-6">
              Growing Better, Together.
            </h2>
            <p className="text-base sm:text-lg text-charcoal-500 leading-relaxed mb-5">
              Verdant Seeds focuses on providing quality seed varieties and supporting customers with suitable agricultural products. Our collection is built around practical cultivation needs — from home gardens to commercial fields.
            </p>
            <p className="text-base text-charcoal-500 leading-relaxed mb-8">
              We work closely with growers, distributors, and agricultural businesses to understand what works in real conditions, and we select our varieties accordingly. Our goal is simple: dependable seeds, clearly presented, with support when you need it.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 shadow-soft hover:shadow-card-hover active:scale-95"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
