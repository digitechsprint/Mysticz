import Image from 'next/image';
import Link from 'next/link';
import { vastuCategories } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

export default function VastuSection() {
  return (
    <Section>
      <Reveal>
        <div className="mb-6 max-w-[760px] lg:mb-8">
          <div className="label mb-[18px]">Vastu Consultancy</div>
          <h2 className="m-0 mb-5 font-display text-[clamp(24px,2.1vw,29px)] font-semibold leading-[1.08] tracking-[-0.01em] text-ink text-pretty">
            Your premises hold energy. Let them work for your business.
          </h2>
          <p className="m-0 text-[16.5px] leading-[1.8] text-body text-pretty">
            The energy of a commercial premises influences how it operates — footfall, decision-making, staff retention
            and growth. Most of our work is with businesses: retail outlets, offices, showrooms and factories, alongside
            residential consultations. Guidance is practical, usually through placement, layout and use of space rather
            than structural change.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[34px]">
        {vastuCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.07}>
            <div>
              <div className="relative mb-5 aspect-[3/4] w-full bg-sand">
                <Image src={cat.image} alt={cat.imageAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="mb-2.5 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-gold-text">
                {cat.kicker}
              </div>
              <h3 className="m-0 mb-2.5 font-display text-2xl font-semibold leading-tight text-ink">{cat.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.75] text-muted">{cat.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-9 lg:mt-14">
        <Link href="/book-consultation" className="btn btn-primary">Book a Commercial Vastu Consultation</Link>
      </div>
    </Section>
  );
}
