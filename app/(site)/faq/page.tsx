import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { faqs as fallbackFaqs } from '@/lib/content';
import { listFaqs } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('/faq', {
    title: 'FAQs',
    description: 'Answers to common questions about Vastu, numerology, energy healing and consultations with Bhavika Gupta.',
  });
}

export default async function FaqPage() {
  const dbFaqs = await listFaqs();
  const items = dbFaqs.length > 0 ? dbFaqs.map((f) => ({ q: f.question, a: f.answer })) : fallbackFaqs;

  return (
    <Section>
      <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-[120px]">
            <div className="label mb-[22px]">FAQs</div>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(26px,2.4vw,34px)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink text-pretty">
              Questions you may have
            </h1>
            <p className="m-0 mb-7 max-w-[38ch] text-base leading-[1.8] text-body">
              If your question is not here, send it over. A short reply costs nothing.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2.5 border-b border-gold-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover">
              Ask a question <span className="text-[15px]">→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <FAQAccordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}
