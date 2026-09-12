import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { articles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Short pieces on Vastu, numerology and everyday wellbeing, written between consultations.',
};

export default function InsightsPage() {
  return (
    <>
      <Section className="!pb-9 sm:!pb-12 lg:!pb-16">
        <Reveal>
          <div className="label mb-[22px]">Insights</div>
          <h1 className="m-0 mb-6 max-w-[22ch] font-display text-[clamp(34px,4.2vw,56px)] font-semibold leading-[1.06] tracking-[-0.015em] text-ink text-pretty">
            Notes on space, numbers and wellbeing
          </h1>
          <p className="m-0 max-w-[52ch] text-[17px] leading-[1.75] text-body">
            Short pieces written between consultations, on the questions that come up most often.
          </p>
        </Reveal>
      </Section>

      <Section className="!pt-0 sm:!pt-0 lg:!pt-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link href={'/insights/' + article.slug} className="group block text-ink transition-transform duration-500 ease-premium hover:-translate-y-1">
                <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden bg-sand">
                  <Image src={article.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]" />
                </div>
                <div className="mb-3 text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.2em] text-gold-text">{article.category}</div>
                <h2 className="m-0 mb-2.5 font-display text-[23px] font-semibold leading-[1.3] text-ink text-pretty">{article.title}</h2>
                <p className="m-0 mb-3.5 text-[14.5px] leading-[1.7] text-muted">{article.excerpt}</p>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">Read article →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="m-0 mt-11 border-t border-line pt-5 text-[13px] leading-[1.7] text-muted">
          Placeholder titles — article copy to be supplied.
        </p>
      </Section>
    </>
  );
}
