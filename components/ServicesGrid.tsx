import { services } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  return (
    <Section ground="sand" topRule>
      <Reveal>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 lg:mb-8">
          <div>
            <div className="label mb-[18px]">Services</div>
            <h2 className="m-0 font-display text-[clamp(24px,2.1vw,29px)] font-semibold leading-[1.08] tracking-[-0.01em] text-ink">
              Ways we can help
            </h2>
          </div>
          <p className="m-0 max-w-[40ch] text-[15px] leading-[1.75] text-muted">
            Four practices, used on their own or together, depending on what you are trying to resolve.
          </p>
        </div>
      </Reveal>

      {/* Fixed tracks (1 / 2 / 4) so the row is always full — no orphan cell. */}
      <Reveal delay={0.08}>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
