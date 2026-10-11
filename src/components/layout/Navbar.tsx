import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Categories', to: '/categories' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // Every route transitions from its top surface into the same readable glass
  // navigation. Product details are the one light-surface variant.
  const usesLightTopSurface = location.pathname.startsWith('/products/');
  const useTransparentHeader = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    const frame = window.requestAnimationFrame(() => setScrolled(window.scrollY > 30));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      if (path === '/' && location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          useTransparentHeader ? 'bg-transparent py-5' : 'glass-nav py-3 shadow-soft'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Primary navigation">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Verdant Seeds home">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-500 ${useTransparentHeader ? 'bg-cream-50/90 backdrop-blur-sm' : 'bg-forest-800'}`}>
              <Leaf className={`w-5 h-5 transition-colors duration-500 ${useTransparentHeader ? 'text-forest-800' : 'text-cream-50'}`} />
            </div>
            <span className={`text-xl font-bold font-display tracking-tight transition-colors duration-500 ${useTransparentHeader && !usesLightTopSurface ? 'text-cream-50' : 'text-forest-900'}`}>
              Verdant<span className="text-botanical-400">Seeds</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to)}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical-400 focus-visible:ring-offset-2 ${
                  useTransparentHeader
                    ? usesLightTopSurface
                      ? 'text-charcoal-600 hover:text-forest-800 hover:bg-forest-50'
                      : 'text-cream-50/90 hover:text-cream-50 hover:bg-white/10'
                    : location.pathname === link.to
                      ? 'bg-forest-100 text-forest-900'
                      : 'text-charcoal-600 hover:text-forest-800 hover:bg-forest-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical-400 focus-visible:ring-offset-2 ${
                useTransparentHeader
                  ? usesLightTopSurface
                    ? 'bg-forest-800 text-cream-50 hover:bg-forest-900 shadow-soft'
                    : 'bg-cream-50 text-forest-800 hover:bg-white shadow-soft'
                  : 'bg-forest-800 text-cream-50 hover:bg-forest-900 shadow-soft hover:shadow-card-hover'
              }`}
            >
              Request Product
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical-400 focus-visible:ring-offset-2 ${
              useTransparentHeader && !usesLightTopSurface ? 'text-cream-50' : 'text-forest-800'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-forest-950/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.to)}
                  className="flex items-center justify-between py-4 px-4 text-lg font-semibold text-forest-900 rounded-xl hover:bg-forest-50 transition-colors duration-300"
                  style={{
                    animation: mobileOpen ? `fadeUp 0.4s ease-out ${i * 60 + 100}ms both` : 'none',
                  }}
                >
                  {link.label}
                  <ChevronRight className="w-5 h-5 text-botanical-400" />
                </button>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-colors duration-300 shadow-soft"
              >
                Request Product
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
