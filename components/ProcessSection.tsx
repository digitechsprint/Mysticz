import { process } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

export default function ProcessSection({ ground = 'sand', heading = 'Four steps, start to finish' }: { ground?: 'ivory' | 'sand'; heading?: string }) {
  return (
    <Section ground={ground} topRule={ground === 'sand'}>
      <Reveal>
        <div className="label mb-[18px]">How it works</div>
        <h2 className="m-0 mb-10 font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.1] text-ink lg:mb-[68px]">
          {heading}
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {process.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.06}>
            <div className="border-t border-line-3 pt-6">
              <div className="mb-4 font-display text-[44px] font-semibold leading-none text-gold-text">{step.num}</div>
              <h3 className="m-0 mb-2.5 font-display text-[22px] font-semibold leading-tight text-ink">{step.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.75] text-muted">{step.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
