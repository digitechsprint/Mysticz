import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { services } from '@/lib/content';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.heroCopy };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Section className="!pb-0 sm:!pb-0 lg:!pb-0">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal>
            <div className="label mb-[22px]">{service.num} — {service.title}</div>
            <h1 className="m-0 mb-[22px] max-w-[20ch] font-display text-[clamp(27px,2.5vw,36px)] font-semibold leading-[1.07] tracking-[-0.015em] text-ink text-pretty">
              {service.heroHeading}
            </h1>
            <p className="m-0 mb-8 max-w-[50ch] text-[17px] leading-[1.75] text-body text-pretty">{service.heroCopy}</p>
            <Link href="/book-consultation" className="btn btn-primary">{service.bookCta}</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square w-full bg-sand">
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ground="band" topRule className="!mt-8 lg:!mt-10">
        <div className="grid gap-9 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal>
            <div className="label mb-[18px]">Overview</div>
            <h2 className="m-0 mb-5 font-display text-[clamp(21px,1.8vw,25px)] font-semibold leading-[1.12] text-ink text-pretty">
              {service.overviewHeading}
            </h2>
            {service.overview.map((p) => (
              <p key={p} className="m-0 mb-4 text-base leading-[1.8] text-body last:mb-0">{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="label mb-[18px]">{service.listHeading}</div>
            <div className="flex flex-col">
              {service.list.map((item, i) => (
                <div key={item.title} className={['border-t border-line-2 py-[18px]', i === service.list.length - 1 ? 'border-b' : ''].join(' ')}>
                  <div className="mb-1.5 font-display text-xl font-semibold leading-[1.3] text-ink">{item.title}</div>
                  <p className="m-0 text-[14.5px] leading-[1.7] text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ground="band" topRule>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="m-0 max-w-[24ch] font-display text-[clamp(21px,1.8vw,25px)] font-semibold leading-[1.12] text-ink text-pretty">
            {service.closing}
          </h2>
          <Link href="/book-consultation" className="btn btn-primary">{service.closingCta}</Link>
        </div>
      </Section>
    </>
  );
}
