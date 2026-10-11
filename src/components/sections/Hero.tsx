import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Leaf, Sprout } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative flex min-h-[640px] items-start overflow-hidden sm:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5980/food-sunset-love-field.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Golden agricultural field at sunset with crops ready for harvest"
          className="h-full w-full object-cover object-[58%_center]"
          loading="eager"
          decoding="async"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/70 via-forest-900/50 to-forest-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-forest-950/20" />
      </div>

      <div className="absolute top-1/4 left-0 w-72 h-72 bg-botanical-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-forest-600/20 rounded-full blur-3xl animate-blob-slow" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cream-100 text-xs font-medium mb-6 animate-fade-in">
            <Leaf className="w-3.5 h-3.5 text-botanical-300" />
            Premium Seed Collection
          </div>

          <h1 className="mb-5 font-display text-4xl font-bold leading-[1.06] tracking-tight text-cream-50 text-shadow-lg animate-fade-up sm:mb-6 sm:text-5xl lg:text-7xl">
            Seeds for
            <br />
            <span className="text-botanical-300">Better Growth.</span>
          </h1>

          <p className="mb-7 max-w-xl text-base leading-relaxed text-cream-100/90 text-shadow animate-fade-up sm:mb-8 sm:text-lg lg:text-xl" style={{ animationDelay: '100ms' }}>
            Quality-focused seed varieties selected to support healthier crops, stronger cultivation, and better agricultural outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <button
              onClick={() => navigate('/products')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-cream-50 text-forest-800 hover:bg-white transition-all duration-300 shadow-glass hover:shadow-card-hover active:scale-95"
            >
              Explore Seeds
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold glass-dark text-cream-50 hover:bg-forest-800/60 transition-all duration-300 active:scale-95"
            >
              Request a Product
            </button>
          </div>

          <div className="mt-7 animate-fade-up sm:mt-9" style={{ animationDelay: '300ms' }}>
            <aside className="hero-status-card max-w-md rounded-2xl p-4 shadow-glass sm:p-5" aria-label="How Verdant Seeds helps you choose">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-botanical-400/20 ring-1 ring-botanical-300/25">
                  <Sprout className="w-5 h-5 text-botanical-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream-50">Choose with more clarity</p>
                  <p className="mt-0.5 text-xs text-cream-100/75">Product details and practical support at every step</p>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 border-t border-cream-50/10 pt-4 text-xs font-medium text-cream-50">
                {['Browse by crop type', 'Compare key growing details', 'Send a product enquiry'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-botanical-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-cream-100/60">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-100/40 to-transparent" />
      </div>
    </section>
  );
}
