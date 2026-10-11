import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CategoriesPage from '@/pages/CategoriesPage';
import GalleryPage from '@/pages/GalleryPage';
import WhyUsPage from '@/pages/WhyUsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-shell">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <ScrollToTop />
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <main id="main-content" key={location.pathname} className="app-main page-transition" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
    </main>
  );
}
