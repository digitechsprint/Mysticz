import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Vastu consultancy, numerology, inner child healing and Lama Fera energy healing — four practices, used on their own or together.',
};

export default function ServicesPage() {
  return (
    <>
      <Section className="!pb-9 sm:!pb-12 lg:!pb-16">
        <Reveal>
          <div className="label mb-[22px]">Services</div>
          <h1 className="m-0 mb-6 max-w-[22ch] font-display text-[clamp(28px,2.6vw,38px)] font-semibold leading-[1.06] tracking-[-0.015em] text-ink text-pretty">
            Ways we can help
          </h1>
          <p className="m-0 max-w-[54ch] text-[17px] leading-[1.75] text-body text-pretty">
            Four practices, used on their own or together. If you are not sure where to begin, start with a conversation and the right starting point becomes clear.
          </p>
        </Reveal>
      </Section>

      <Section className="!pt-0 sm:!pt-0 lg:!pt-0">
        <div className="flex flex-col gap-px border border-line bg-line">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Link
                href={'/services/' + service.slug}
                className="grid grid-cols-1 bg-ivory text-ink transition-all duration-500 ease-premium hover:bg-card hover:shadow-[0_18px_44px_rgba(60,48,20,.09)] sm:grid-cols-2"
              >
                <div className="relative min-h-[240px] w-full overflow-hidden bg-sand">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-12">
                  <div className="mb-[18px] flex items-center gap-3.5">
                    <span className="label !tracking-[0.2em]">{service.num}</span>
                    <span className="block h-px w-6 bg-gold-line" />
                    <span className="text-[11.5px] uppercase tracking-[0.18em] text-muted">{service.tag}</span>
                  </div>
                  <h2 className="m-0 mb-4 font-display text-[clamp(21px,1.8vw,25px)] font-semibold leading-[1.15] text-ink">{service.title}</h2>
                  <p className="m-0 mb-[22px] max-w-[52ch] text-[15.5px] leading-[1.8] text-body text-pretty">{service.blurb}</p>
                  <div className="mb-[26px] flex flex-wrap gap-2">
                    {service.subs.map((sub) => (
                      <span key={sub} className="border border-line px-[11px] py-[7px] text-[10.5px] font-medium uppercase tracking-[0.1em] text-body">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
                    {service.cta} <span className="text-[15px]">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
