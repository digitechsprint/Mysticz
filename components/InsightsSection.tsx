import Link from 'next/link';
import { articles as fallbackArticles } from '@/lib/content';
import { listArticles } from '@/lib/data';
import Reveal from './Reveal';
import Section from './Section';

export default async function InsightsSection({ limit = 3 }: { limit?: number }) {
  const dbArticles = await listArticles({ publishedOnly: true });
  const articles = dbArticles.length > 0 ? dbArticles : fallbackArticles;

  return (
    <Section>
      <Reveal>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 lg:mb-8">
          <div>
            <div className="label mb-[18px]">Insights</div>
            <h2 className="m-0 font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.1] text-ink">
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
                {/* eslint-disable-next-line @next/next/no-img-element -- article images are admin-managed, arbitrary URLs */}
                <img src={article.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]" loading="lazy" />
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
