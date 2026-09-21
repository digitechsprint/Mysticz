import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { services } from '@/lib/content';

export function generateStaticParams() {
  return services.flatMap((service) => service.list.map((item) => ({ slug: service.slug, subSlug: item.slug })));
}

function find(slug: string, subSlug: string) {
  const service = services.find((s) => s.slug === slug);
  const item = service?.list.find((i) => i.slug === subSlug);
  if (!service || !item) return null;
  return { service, item };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; subSlug: string }> }): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const found = find(slug, subSlug);
  if (!found) return {};
  return { title: `${found.item.title} | ${found.service.title}`, description: found.item.copy };
}

export default async function SubServicePage({ params }: { params: Promise<{ slug: string; subSlug: string }> }) {
  const { slug, subSlug } = await params;
  const found = find(slug, subSlug);
  if (!found) notFound();
  const { service, item } = found;

  return (
    <Section>
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <Link href={'/services/' + service.slug} className="mb-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover">
            ← {service.title}
          </Link>
          <div className="mb-4 text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.2em] text-gold-text">
            {service.num} · {service.title}
          </div>
          <h1 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink text-pretty">
            {item.title}
          </h1>
          <p className="m-0 mb-9 text-lg leading-[1.8] text-body text-pretty">{item.intro}</p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/book-consultation" className="btn btn-primary">{service.bookCta}</Link>
            <Link href={'/services/' + service.slug} className="btn btn-secondary">Explore all of {service.title}</Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
