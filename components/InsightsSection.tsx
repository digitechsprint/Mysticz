import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

export default function InsightsSection({ limit = 3 }: { limit?: number }) {
  return (
    <Section>
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div>
            <div className="label mb-[18px]">Insights</div>
            <h2 className="m-0 font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.1] text-ink">
              Reading, before you decide
            </h2>
          </div>
          <Link href="/insights" className="border-b border-gold-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover">
            All insights →
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
        {articles.slice(0, limit).map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.06}>
            <Link href={'/insights/' + article.slug} className="group block text-ink transition-transform duration-500 ease-premium hover:-translate-y-1">
              <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden bg-sand">
                <Image src={article.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]" />
              </div>
              <div className="mb-3 text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.2em] text-gold-text">{article.category}</div>
              <h3 className="m-0 mb-2.5 font-display text-[22px] font-semibold leading-snug text-ink text-pretty">{article.title}</h3>
              <p className="m-0 mb-3.5 text-[14.5px] leading-[1.7] text-muted">{article.excerpt}</p>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">Read article →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
