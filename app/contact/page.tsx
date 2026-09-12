import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Bhavika Gupta for Vastu, numerology and holistic wellness consultations, online or in Noida.',
};

const rows = [
  { label: 'Email', value: site.email, href: 'mailto:' + site.email },
  { label: 'Phone', value: '+91 78278 84418', href: 'tel:' + site.phoneRaw },
  { label: 'Visit', value: `${site.address.street}, ${site.address.city}, ${site.address.country}` },
  { label: 'Hours', value: site.hours },
];

export default function ContactPage() {
  return (
    <Section>
      <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="label mb-[22px]">Contact</div>
          <h1 className="m-0 mb-6 font-display text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink text-pretty">
            Let&rsquo;s begin your journey toward greater clarity
          </h1>
          <p className="m-0 mb-10 max-w-[44ch] text-[16.5px] leading-[1.8] text-body text-pretty">
            Send an enquiry, or message on WhatsApp if that is easier. You will hear back within working hours.
          </p>

          <div className="flex flex-col border-t border-line">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-5 border-b border-line py-5">
                <span className="min-w-[84px] text-[10.5px] font-medium uppercase leading-[1.6] tracking-[0.18em] text-muted">{row.label}</span>
                {row.href ? (
                  <a href={row.href} className="break-words text-[15.5px] leading-[1.6] text-olive">{row.value}</a>
                ) : (
                  <span className="text-[15.5px] leading-[1.6] text-ink-2">{row.value}</span>
                )}
              </div>
            ))}
          </div>

          <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-secondary mt-8">Chat on WhatsApp</a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line bg-sand p-6 sm:p-11">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
