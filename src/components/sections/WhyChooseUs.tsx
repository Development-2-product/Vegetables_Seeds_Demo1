import { BadgeCheck, BookOpen, CheckCircle2, ClipboardCheck, Handshake, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';

const commitments = [
  'Carefully selected varieties for practical growing conditions',
  'Clear growing information to support confident decisions',
  'Helpful guidance before you send an enquiry',
];

const benefits = [
  { icon: BadgeCheck, title: 'Focused product selection', text: 'Browse a considered range of vegetable, fruit, herb, flower, and specialty varieties without unnecessary complexity.' },
  { icon: BookOpen, title: 'Information that helps', text: 'Review the variety, season, growing type, characteristics, and available formats before you contact us.' },
  { icon: Handshake, title: 'A simpler enquiry', text: 'Share your product interest, location, and required quantity in one clear request.' },
  { icon: UsersRound, title: 'Helpful human support', text: 'When you need more clarity, our team is ready to discuss the practical details of your requirement.' },
];

const steps = [
  { number: '01', title: 'Explore your crop', text: 'Start by category or search the catalogue for the varieties relevant to your plan.' },
  { number: '02', title: 'Compare the details', text: 'Review growing information and formats, then shortlist the options that suit your needs.' },
  { number: '03', title: 'Send your requirement', text: 'Tell us the variety and quantity you are looking for, and we will help you move forward.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <>
      <section className="bg-cream-50 py-16 lg:py-24">
        <div ref={ref} className={`reveal mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${visible ? 'visible' : ''}`}>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600">Why choose Verdant Seeds</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">A clearer way to choose the right seed.</h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-500 sm:text-lg">Good results begin with a clear choice. Verdant Seeds brings together useful varieties, easy-to-understand product information, and practical support so you can move from research to planting with confidence.</p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500">Instead of leaving you to guess, we make the next step simple: identify your crop, compare what matters, and send a well-informed enquiry.</p>
            <ul className="mt-7 space-y-4">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-botanical-600" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-forest-900 hover:shadow-card-hover">Talk to our team</Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-botanical-100/70 blur-2xl" aria-hidden="true" />
            <img src="https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Grower examining healthy plants in a cultivated field" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-card" loading="lazy" />
            <div className="relative mx-5 -mt-8 rounded-2xl border border-cream-50/60 bg-cream-50 px-5 py-4 shadow-card sm:mx-8">
              <p className="text-xl font-bold text-forest-900 sm:text-2xl">Clear choices. Better starts.</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-botanical-700">Selected varieties, practical guidance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-300">What we provide</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl">More confidence at every stage of your selection.</h2>
            <p className="mt-4 text-base leading-relaxed text-cream-100/70">Our role is to make choosing a variety feel more informed, more organised, and easier to act on.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-cream-50/10 bg-forest-900/60 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-botanical-400/15 text-botanical-300"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-xl font-bold text-cream-50">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-600">How it benefits you</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl">From browsing to a better-informed request.</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal-500">A straightforward process helps you spend less time searching and more time focusing on what your crop needs.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map(({ number, title, text }) => (
                <article key={number} className="rounded-2xl bg-cream-50 p-6 shadow-soft">
                  <span className="text-xs font-bold tracking-[0.18em] text-botanical-600">{number}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-forest-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-0 bg-cream-50 pb-24 pt-4 lg:pb-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-forest-800 px-7 py-10 text-center shadow-card sm:px-12 sm:py-14">
            <ClipboardCheck className="mx-auto h-7 w-7 text-botanical-300" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl">Ready to find the right variety?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-100/80">Browse the collection or send us your crop and quantity requirements. We will help you take a clear next step.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/products" className="rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-white">Browse products</Link>
              <Link to="/contact" className="rounded-full border border-cream-50/30 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-50/10">Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
