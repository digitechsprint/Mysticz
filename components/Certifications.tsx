import Image from 'next/image';
import Reveal from './Reveal';
import Section from './Section';

const certifications = [
  {
    title: 'Chakra & Inner Child Healing Practitioner',
    issuer: 'IPHM (UK) accredited, Your Safe Self™',
    image: '/images/cert-inner-child-healing.jpg',
  },
  {
    title: 'Vedic Numerologist',
    issuer: 'Academy of Vedic Vidya',
    image: '/images/cert-vedic-numerology.jpg',
  },
  {
    title: 'Diploma in Numerology Research',
    issuer: 'IPHM accredited, Astrology Club',
    image: '/images/cert-numerology-diploma.jpg',
  },
];

export default function Certifications() {
  return (
    <Section ground="sand" topRule>
      <Reveal>
        <div className="label mb-[18px]">Credentials</div>
        <h2 className="m-0 mb-9 max-w-[28ch] font-display text-[clamp(24px,3vw,36px)] font-semibold leading-[1.12] text-ink text-pretty lg:mb-11">
          Trained and accredited across each practice
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.07}>
            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden border border-line-2 bg-card">
              <Image src={cert.image} alt={cert.title + ' certificate'} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            <h3 className="m-0 mb-1.5 font-display text-lg font-semibold leading-[1.3] text-ink">{cert.title}</h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-muted">{cert.issuer}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
