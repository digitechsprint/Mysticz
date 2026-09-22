import type { Metadata } from 'next';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('/book-consultation', {
    title: 'Book a Consultation',
    description: 'Request a Vastu, numerology or healing consultation with Bhavika Gupta, online or in person.',
  });
}

const steps = [
  'You send your details and preferred timing.',
  'Bhavika confirms the slot and what to prepare.',
  'The session happens online or in person, as you prefer.',
];

export default function BookConsultationPage() {
  return (
    <Section>
      <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="label mb-[22px]">Book a Consultation</div>
          <h1 className="m-0 mb-6 font-display text-[clamp(26px,2.4vw,34px)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink text-pretty">
            One session, one honest conversation
          </h1>
          <p className="m-0 mb-9 max-w-[44ch] text-[16.5px] leading-[1.8] text-body text-pretty">
            Share a few details and a preferred time. Bhavika confirms availability before anything is fixed.
          </p>

          <div className="relative mb-8 aspect-[4/3] w-full bg-sand">
            <Image src="/images/sessions-corporate.jpg" alt="Consultation setting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="flex flex-col gap-3.5">
            {steps.map((step, i) => (
              <div key={step} className="flex items-baseline gap-3.5">
                <span className="text-[10.5px] leading-[1.6] tracking-[0.18em] text-gold-text">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[15px] leading-[1.7] text-body">{step}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line bg-card p-6 sm:p-11">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
