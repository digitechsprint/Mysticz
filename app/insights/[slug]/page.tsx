import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { articles } from '@/lib/content';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <Section>
      <div className="mx-auto max-w-[760px]">
        <Reveal>
          <Link href="/insights" className="mb-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover">
            ← All insights
          </Link>
          <div className="mb-4 text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.2em] text-gold-text">{article.category}</div>
          <h1 className="m-0 mb-8 font-display text-[clamp(26px,3.2vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink text-pretty">
            {article.title}
          </h1>
          <div className="relative mb-9 aspect-[3/2] w-full overflow-hidden bg-sand">
            <Image src={article.image} alt="" fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
          </div>
          <p className="m-0 mb-4 text-lg leading-[1.8] text-body text-pretty">{article.excerpt}</p>
          <p className="m-0 border-t border-line pt-5 text-[13px] leading-[1.7] text-muted">
            This is a placeholder summary — full article copy is still to be supplied.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
