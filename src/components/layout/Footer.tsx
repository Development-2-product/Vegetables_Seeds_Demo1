import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Our Products', to: '/products' },
  { label: 'Categories', to: '/categories' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
];

const productLinks = [
  { label: 'Vegetables', to: '/products?category=vegetable-seeds' },
  { label: 'Fruits', to: '/products?category=fruit-seeds' },
  { label: 'Herbs', to: '/products?category=herb-seeds' },
  { label: 'Flowers', to: '/products?category=flower-seeds' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 isolate mt-auto shrink-0 overflow-hidden border-t-8 border-cream-100 bg-forest-950 text-cream-100 shadow-[0_-18px_35px_rgba(10,36,25,0.12)] lg:max-h-[440px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-botanical-400/40 to-transparent" />

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-forest-800/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cream-50 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest-800" />
              </div>
              <span className="text-xl font-bold font-display text-cream-50">
                Verdant<span className="text-botanical-400">Seeds</span>
              </span>
            </Link>
            <p className="text-sm text-cream-200/70 leading-relaxed mb-6 max-w-xs">
              Quality-focused seed varieties selected to support healthier crops and better agricultural outcomes.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-forest-800/60 flex items-center justify-center text-cream-200/70 hover:bg-botanical-500 hover:text-cream-50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-botanical-400 mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-botanical-400 mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/70 hover:text-cream-50 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-botanical-400 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-botanical-400 mt-0.5 shrink-0" />
                <a className="text-sm text-cream-200/70 transition-colors hover:text-cream-50" href="mailto:kasiv931@gmail.com">kasiv931@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-botanical-400 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-200/70">KPHB Colony, Hyderabad, Telangana 500072</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-forest-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/50">
            &copy; {new Date().getFullYear()} Verdant Seeds. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream-200/50 hover:text-cream-100 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-cream-200/50 hover:text-cream-100 transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
