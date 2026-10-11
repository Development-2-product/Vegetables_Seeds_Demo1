import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { ProductInquiry } from '@/lib/supabase';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface FormErrors {
  full_name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
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
    setFormData({ full_name: '', company_name: '', phone: '', email: '', location: '', product_interest: '', required_quantity: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-10 bg-cream-50 rounded-3xl shadow-card text-center">
        <div className="w-16 h-16 rounded-full bg-botanical-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-botanical-600" />
        </div>
        <h3 className="text-2xl font-bold text-forest-900 font-display mb-3">Request Received</h3>
        <p className="text-charcoal-500 leading-relaxed mb-8 max-w-md mx-auto">
          Your request has been prepared in WhatsApp. Send the opened message and our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-8 py-3 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-colors duration-300"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *" name="full_name" value={formData.full_name} onChange={handleChange} error={errors.full_name} placeholder="John Doe" />
        <Field label="Company / Farm Name" name="company_name" value={formData.company_name ?? ''} onChange={handleChange} placeholder="Green Valley Farms" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="+91 98765 43210" />
        <Field label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="john@example.com" />
      </div>

      <Field label="Location" name="location" value={formData.location ?? ''} onChange={handleChange} placeholder="City, Country" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Product / Variety Interested In" name="product_interest" value={formData.product_interest ?? ''} onChange={handleChange} placeholder="e.g. Tomato Seeds" />
        <Field label="Required Quantity" name="required_quantity" value={formData.required_quantity ?? ''} onChange={handleChange} placeholder="e.g. 5 kg" />
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
          rows={4}
          placeholder="Tell us about your requirements..."
          className={`w-full px-4 py-3 rounded-xl text-base sm:text-sm bg-white border transition-colors duration-300 outline-none resize-none ${
            errors.message ? 'border-red-400 focus:border-red-500' : 'border-cream-300 focus:border-forest-600'
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
