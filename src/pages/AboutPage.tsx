import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, Target, Eye, HandHeart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  { icon: Target, title: 'Our Approach', description: 'We select varieties based on real-world cultivation performance, not just theoretical data. Every seed in our catalogue has been chosen for practical reliability.' },
  { icon: Eye, title: 'Transparency', description: 'We provide clear, honest information about each variety — growing conditions, season, seed type, and characteristics — so you can make informed decisions.' },
  { icon: HandHeart, title: 'Customer Support', description: 'Our team is available to help you find the right product for your needs. Send us your requirements and we will guide you to a suitable match.' },
  { icon: Leaf, title: 'Practical Focus', description: 'We focus on seeds that work. Our collection spans everyday crops and specialty varieties, all selected with cultivation outcomes in mind.' },
];

function ValueCard({ icon: Icon, title, description, delay }: { icon: typeof Leaf; title: string; description: string; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group p-8 bg-cream-100 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-forest-800 flex items-center justify-center shrink-0 group-hover:bg-botanical-500 transition-colors duration-500">
          <Icon className="w-7 h-7 text-cream-50" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-forest-900 mb-2 font-display tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-charcoal-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();
  const { ref, visible } = useReveal();

  return (
    <div className="bg-cream-50 min-h-screen">
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1251026/pexels-photo-1251026.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Green seedlings growing in a sunlit garden"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/75 via-forest-900/60 to-forest-950/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-300 mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 leading-[1.1] tracking-tight font-display text-shadow-lg mb-6">
              Growing Better, Together.
            </h1>
            <p className="text-base sm:text-lg text-cream-100/90 leading-relaxed text-shadow max-w-xl">
              Verdant Seeds is a seed company focused on providing quality seed varieties and supporting customers with suitable agricultural products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.pexels.com/photos/1251026/pexels-photo-1251026.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop"
                  alt="Green seedlings sprouting from rich dark soil"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest-900 font-display tracking-tight mb-5 leading-tight">
                Our Story
              </h2>
              <p className="text-base text-charcoal-500 leading-relaxed mb-4">
                Verdant Seeds began with a straightforward idea: provide growers with dependable seed varieties, presented clearly and supported honestly. We work directly with farmers, distributors, and agricultural businesses to understand what works in real field conditions.
              </p>
              <p className="text-base text-charcoal-500 leading-relaxed mb-4">
                Our collection is deliberately curated rather than exhaustive. Each variety is selected because it performs reliably across a range of growing conditions and serves a practical cultivation need.
              </p>
              <p className="text-base text-charcoal-500 leading-relaxed">
                We are not just a seed supplier. We are a partner in cultivation — ready to help you find the right product, understand its characteristics, and plan your planting with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600 mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-[1.15] tracking-tight font-display">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ValueCard key={value.title} {...value} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-forest-900 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-forest-800/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-botanical-800/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-[1.15] tracking-tight font-display mb-5">
            Ready to explore our collection?
          </h2>
          <p className="text-base sm:text-lg text-cream-100/80 leading-relaxed mb-8 max-w-xl mx-auto">
            Browse our seed varieties or get in touch with our team to find the right product for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-cream-50 text-forest-800 hover:bg-white transition-all duration-300 shadow-soft active:scale-95"
            >
              Browse Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold glass-dark text-cream-50 hover:bg-forest-800/60 transition-all duration-300 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
