import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Sprout, Sun, Droplets, Layers, Ruler, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { getProductById, Product } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

interface ProductDetailProps {
  onRequest: (product: Product) => void;
}

export default function ProductDetail({ onRequest }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const { ref, visible } = useReveal();

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream-50 pt-20">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-4">
            <Sprout className="w-8 h-8 text-charcoal-400" />
          </div>
          <h1 className="text-2xl font-bold text-forest-900 font-display mb-3">Product Not Found</h1>
          <p className="text-charcoal-500 mb-6">
            The product you're looking for doesn't exist or may have been moved.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const infoItems = [
    { label: 'Crop Type', value: product.cropType },
    { label: 'Category', value: product.category },
    { label: 'Growing Season', value: product.season },
    { label: 'Suitable Conditions', value: product.suitableConditions },
    { label: 'Seed Type', value: product.seedType },
    { label: 'Growing Type', value: product.growingType },
  ];

  const growingInfo = [
    { icon: Sprout, label: 'Sowing', value: product.growingInformation.sowing },
    { icon: Ruler, label: 'Spacing', value: product.growingInformation.spacing },
    { icon: Clock, label: 'Germination', value: product.growingInformation.germination },
    { icon: Calendar, label: 'Maturity', value: product.growingInformation.maturity },
    { icon: Droplets, label: 'Watering', value: product.growingInformation.watering },
    { icon: Sun, label: 'Sunlight', value: product.growingInformation.sunlight },
  ];

  return (
    <div className="bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-charcoal-400 mb-8">
          <Link to="/" className="hover:text-forest-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-forest-800 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-forest-800 font-medium">{product.name}</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-cream-50/90 backdrop-blur-md text-forest-800 shadow-soft">
                {product.category}
              </span>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600 mb-3">
              {product.cropType}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-[1.15] tracking-tight font-display mb-4">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-500 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.characteristics.map((char) => (
                <span
                  key={char}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-botanical-50 text-botanical-700"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {char}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-forest-50 text-forest-700">
                <Calendar className="w-4 h-4" />
                {product.season}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-forest-50 text-forest-700">
                <Sprout className="w-4 h-4" />
                {product.seedType}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-forest-50 text-forest-700">
                <Layers className="w-4 h-4" />
                {product.growingType}
              </span>
            </div>

            <button
              onClick={() => onRequest(product)}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 shadow-soft hover:shadow-card-hover active:scale-95"
            >
              Request This Product
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-display tracking-tight mb-5">
                Product Information
              </h2>
              <p className="text-base text-charcoal-500 leading-relaxed mb-8">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col p-4 bg-cream-50 rounded-xl shadow-soft"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-botanical-600 mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm text-charcoal-700">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-cream-50 rounded-xl shadow-soft">
                <h3 className="text-sm font-semibold text-forest-800 mb-3">Available Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-forest-50 text-forest-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-botanical-500" />
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-display tracking-tight mb-5">
                Growing Information
              </h2>
              <div className="space-y-3">
                {growingInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-3 p-4 bg-cream-50 rounded-xl shadow-soft"
                  >
                    <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-cream-50" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-botanical-600 mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm text-charcoal-700 leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className={`reveal ${visible ? 'visible' : ''} py-16 lg:py-24`}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-card">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest-900 font-display tracking-tight mb-4">
              Interested in this variety?
            </h2>
            <p className="text-base text-charcoal-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Send us your requirement and our team will get in touch with you to discuss availability and details.
            </p>
            <button
              onClick={() => onRequest(product)}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 shadow-soft hover:shadow-card-hover active:scale-95"
            >
              Request This Product
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
