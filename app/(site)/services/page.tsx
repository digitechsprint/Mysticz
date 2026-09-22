import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('/services', {
    title: 'Services',
    description: 'Vastu consultancy, numerology, inner child healing and Lama Fera energy healing: four practices, used on their own or together.',
  });
}

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
            Practices used on their own or together. If you are not sure where to begin, start with a conversation and the right starting point becomes clear.
          </p>
        </Reveal>
      </Section>

      <Section className="!pt-0 sm:!pt-0 lg:!pt-0">
        <Reveal>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
