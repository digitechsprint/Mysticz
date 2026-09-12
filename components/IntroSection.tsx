import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import Section from './Section';

export default function IntroSection() {
  return (
    <Section>
      <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-[84px]">
        <Reveal>
          <div className="relative aspect-square w-full bg-sand">
            <Image src="/images/sessions-individual.png" alt="A personalised consultation in progress" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex gap-6">
            <div className="shrink-0 pt-1.5">
              <div className="font-display text-[13px] tracking-[0.1em] text-gold-text">01</div>
              <div className="ml-1.5 mt-2.5 h-14 w-px bg-line" />
            </div>
            <div>
              <div className="label mb-[18px]">The Mysticz approach</div>
              <h2 className="m-0 mb-6 font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink text-pretty">
                Vastu, numerology and guidance with a practical approach
              </h2>
              <p className="m-0 mb-4 text-base leading-[1.8] text-body text-pretty">
                Mysticz exists to make ancient systems usable. Vastu Shastra, Vedic numerology and energy work each
                offer a way of reading patterns — in a building, in a name, in a recurring situation — and translating
                them into something you can act on.
              </p>
              <p className="m-0 mb-4 text-base leading-[1.8] text-body text-pretty">
                Every consultation starts with your specific circumstances rather than a template. We look at the space
                you live or work in, the numbers that surround you, and the decision in front of you, then set out what
                can realistically be changed.
              </p>
              <p className="m-0 mb-8 text-base leading-[1.8] text-body text-pretty">
                The result is guidance you can put into practice without demolition, disruption or a leap of faith.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border-b border-gold-line pb-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-olive transition-colors hover:text-gold-hover"
              >
                Meet Bhavika <span className="text-[15px]">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
