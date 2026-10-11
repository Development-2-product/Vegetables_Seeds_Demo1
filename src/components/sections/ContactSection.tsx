import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'kasiv931@gmail.com', href: 'mailto:kasiv931@gmail.com' },
  { icon: MapPin, label: 'Office', value: 'KPHB Colony, Hyderabad, Telangana 500072', href: null },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM IST', href: null },
];

export default function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {showHeading && <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mx-auto mb-14 max-w-2xl text-center`}>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600">Product Request</span>
          <h2 className="mb-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">Looking for a Specific Seed?</h2>
          <p className="text-base leading-relaxed text-charcoal-500 sm:text-lg">Tell us what you are looking for and our team will help you find the right product.</p>
        </div>}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 rounded-2xl bg-cream-50 p-5 shadow-soft transition-shadow duration-500 hover:shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800"><info.icon className="h-5 w-5 text-cream-50" /></div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-botanical-600">{info.label}</p>
                  {info.href ? <a href={info.href} className="text-sm text-charcoal-700 transition-colors hover:text-forest-800">{info.value}</a> : <p className="text-sm text-charcoal-700">{info.value}</p>}
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl p-1 shadow-soft">
              <iframe
                title="Verdant Seeds location in KPHB Colony, Hyderabad"
                src="https://www.google.com/maps?q=KPHB%20Colony%2C%20Hyderabad%2C%20Telangana%20500072&output=embed"
                className="aspect-[16/9] w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=KPHB%20Colony%2C%20Hyderabad%2C%20Telangana%20500072" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-forest-800 transition-colors hover:text-forest-950">
                <MapPin className="h-4 w-4 text-botanical-600" /> View on Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-3"><div className="rounded-3xl bg-white p-6 shadow-card sm:p-8"><ContactForm /></div></div>
        </div>
      </div>
    </section>
  );
}
