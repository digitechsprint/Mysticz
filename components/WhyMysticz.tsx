import { whyMysticz } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

export default function WhyMysticz() {
  return (
    <Section>
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-[72px]">
        <Reveal>
          <div className="lg:sticky lg:top-[120px]">
            <div className="label mb-[18px]">Why Mysticz</div>
            <h2 className="m-0 mb-5 font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.1] text-ink text-pretty">
              Guidance that is personal, practical and grounded
            </h2>
            <p className="m-0 max-w-[38ch] text-base leading-[1.8] text-body">
              Five things you can expect from every session, whichever service brings you here.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {whyMysticz.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={[
                  'grid gap-5 border-t border-line py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]',
                  i === whyMysticz.length - 1 ? 'border-b' : '',
                ].join(' ')}
              >
                <h3 className="m-0 font-display text-[23px] font-semibold leading-tight text-ink">{item.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.75] text-muted">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
