import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Bhavika Gupta',
  description:
    'Bhavika Gupta is a Vastu consultant for homes and commercial spaces, and a numerologist based in Noida, working across Delhi NCR and online.',
};

const highlights = ['Personalised guidance', 'Practical approach', 'Vastu expertise', 'Numerology', 'Holistic wellbeing'];

const audiences = [
  {
    title: 'Individual sessions',
    copy: 'For those looking for guidance around relationships, career decisions, personal growth, or a situation that feels difficult to navigate alone. Each session is personalised based on what you are experiencing and seeking clarity on.',
  },
  {
    title: 'Corporate sessions',
    copy: 'For organisations looking to better understand their people, support employee wellbeing, create positive workplace environments and navigate important business decisions. Each session is tailored to the needs of the organisation.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="!pb-0 sm:!pb-0 lg:!pb-0">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-[34px] bg-gold-line" />
            <span className="label !font-semibold" style={{ letterSpacing: '0.26em' }}>
              Vastu Consultant • Numerologist • Holistic Guide
            </span>
          </div>
          <h1 className="m-0 max-w-[20ch] font-display text-[clamp(28px,2.6vw,38px)] font-semibold leading-[1.06] tracking-[-0.015em] text-ink text-pretty">
            Meet Bhavika Gupta
          </h1>
        </Reveal>
      </Section>

      <Section className="!pt-9 sm:!pt-12 lg:!pt-16">
        <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full">
              <div className="pointer-events-none absolute -inset-3.5 border border-line" />
              <Image src="/images/bhavika-portrait.png" alt="Bhavika Gupta, Vastu consultant and numerologist" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="m-0 mb-7 font-display text-[clamp(17px,1.1vw,19px)] font-semibold leading-[1.5] text-ink text-pretty">
              Bhavika helps people better understand themselves, the situations they are facing, and the choices in front of them.
            </p>
            <p className="m-0 mb-[18px] text-base leading-[1.8] text-body text-pretty">
              Her approach is thoughtful, practical and tailored to the individual, because no two people arrive with the same questions. A consultation may begin with a floor plan, a birth date or a decision that has been sitting unresolved for months — what stays constant is the attention given to the specifics of your case.
            </p>
            <p className="m-0 mb-[18px] text-base leading-[1.8] text-body text-pretty">
              Bhavika works with Vastu Shastra for homes and commercial spaces, Vedic numerology, inner child healing and Lama Fera energy healing. Where more than one lens is useful, she will say so; where a single conversation is enough, she will say that too.
            </p>
            <p className="m-0 mb-9 text-base leading-[1.8] text-body text-pretty">
              She consults from Noida and works with clients across Delhi NCR, and online with clients around the world.
            </p>

            <div className="mb-9 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h} className="bg-ivory px-[18px] py-5">
                  <div className="font-display text-[19px] font-semibold leading-[1.3] text-ink">{h}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <a href={'tel:' + site.phoneRaw} className="btn btn-primary">Talk to Bhavika</a>
              <Link href="/book-consultation" className="btn btn-secondary">Book a Consultation</Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ground="sand" topRule>
        <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal>
            <div className="label mb-[18px]">Who she works with</div>
            <h2 className="m-0 font-display text-[clamp(21px,1.8vw,25px)] font-semibold leading-[1.12] text-ink">
              Individuals and organisations
            </h2>
          </Reveal>
          <div className="flex flex-col gap-7">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="border-t border-line-2 pt-6">
                  <h3 className="m-0 mb-3 font-display text-2xl font-semibold leading-[1.25] text-ink">{a.title}</h3>
                  <p className="m-0 text-[15px] leading-[1.8] text-body">{a.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
