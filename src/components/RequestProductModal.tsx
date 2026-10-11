import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Send } from 'lucide-react';
import { Product } from '@/data/products';
import { ProductInquiry } from '@/lib/supabase';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface RequestProductModalProps {
  product: Product | null;
  onClose: () => void;
}

interface FormErrors {
  full_name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function RequestProductModal({ product, onClose }: RequestProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ProductInquiry>({
    full_name: '',
    company_name: '',
    phone: '',
    email: '',
    location: '',
    product_interest: '',
    required_quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product_interest: product.name,
      }));
      setStatus('idle');
      setErrors({});
    }
  }, [product]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = product ? 'hidden' : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => dialogRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [product, onClose]);

  if (!product) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Please enter your full name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitError('');
    const whatsappUrl = getWhatsAppUrl(formData);
    if (!whatsappUrl) {
      setStatus('error');
      setSubmitError('WhatsApp is not configured yet. Add VITE_WHATSAPP_NUMBER to the deployment environment.');
      return;
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  const handleClose = () => {
    if (status === 'success') {
      setFormData({
        full_name: '',
        company_name: '',
        phone: '',
        email: '',
        location: '',
        product_interest: '',
        required_quantity: '',
        message: '',
      });
    }
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl bg-cream-50 shadow-2xl animate-scale-in scrollbar-hide sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 flex items-center justify-center transition-colors duration-300"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-forest-800" />
        </button>

        {status === 'success' ? (
          <div className="p-7 text-center sm:p-10">
            <div className="w-16 h-16 rounded-full bg-botanical-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-botanical-600" />
            </div>
            <h3 className="text-2xl font-bold text-forest-900 font-display mb-3">Request Received</h3>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              Your request has been prepared in WhatsApp. Send the opened message and our team will get back to you shortly.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            <div className="mb-6 pr-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600 mb-2 block">
                Product Request
              </span>
              <h3 id="modal-title" className="text-2xl font-bold text-forest-900 font-display mb-1">
                Request {product.name}
              </h3>
              <p className="text-sm text-charcoal-500">
                Send us your requirement and our team will get in touch with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Full Name *"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  error={errors.full_name}
                  placeholder="John Doe"
                />
                <Field
                  label="Company / Farm Name"
                  name="company_name"
                  value={formData.company_name ?? ''}
                  onChange={handleChange}
                  placeholder="Green Valley Farms"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+91 98765 43210"
                />
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>

              <Field
                label="Location"
                name="location"
                value={formData.location ?? ''}
                onChange={handleChange}
                placeholder="City, Country"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Product / Variety"
                  name="product_interest"
                  value={formData.product_interest ?? ''}
                  onChange={handleChange}
                  placeholder="Product of interest"
                />
                <Field
                  label="Required Quantity"
                  name="required_quantity"
                  value={formData.required_quantity ?? ''}
                  onChange={handleChange}
                  placeholder="e.g. 5 kg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-800 mb-1.5" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className={`w-full px-4 py-3 rounded-xl text-base sm:text-sm bg-white border transition-colors duration-300 outline-none resize-none ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-cream-300 focus:border-forest-600'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 active:scale-[0.98]"
              >
                <><Send className="w-4 h-4" />Send</>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-forest-800 mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl text-base sm:text-sm bg-white border transition-colors duration-300 outline-none ${
          error ? 'border-red-400 focus:border-red-500' : 'border-cream-300 focus:border-forest-600'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
