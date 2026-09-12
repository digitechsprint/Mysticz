import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { faqs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about Vastu, numerology, energy healing and consultations with Bhavika Gupta.',
};

export default function FaqPage() {
  return (
    <Section>
      <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-[120px]">
            <div className="label mb-[22px]">FAQs</div>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink text-pretty">
              Questions you may have
            </h1>
            <p className="m-0 mb-7 max-w-[38ch] text-base leading-[1.8] text-body">
              If your question is not here, send it over — a short reply costs nothing.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2.5 border-b border-gold-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover">
              Ask a question <span className="text-[15px]">→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <FAQAccordion items={[...faqs]} />
        </Reveal>
      </div>
    </Section>
  );
}
