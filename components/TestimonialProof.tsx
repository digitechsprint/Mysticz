import Image from 'next/image';
import { proofTestimonials } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

/** Real client messages and a video testimonial, shown under the quote carousel. */
export default function TestimonialProof() {
  return (
    <Section ground="sand" topRule>
      <Reveal>
        <div className="label mb-[18px]">In their own words</div>
        <h2 className="m-0 mb-8 max-w-[30ch] font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.1] text-ink text-pretty lg:mb-10">
          Messages and stories shared by clients
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {proofTestimonials.map((t, i) => (
          <Reveal key={t.src} delay={i * 0.07}>
            <figure className="m-0">
              <div className="relative mb-4 aspect-[9/16] w-full overflow-hidden border border-line-2 bg-card">
                {t.kind === 'video' ? (
                  <video
                    src={t.src}
                    poster={t.poster}
                    controls
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full bg-black object-contain"
                    aria-label={`Video testimonial from ${t.name}`}
                  />
                ) : (
                  <a href={t.src} target="_blank" rel="noopener" aria-label={`Open message from ${t.name} in full size`}>
                    <Image
                      src={t.src}
                      alt={`Message from ${t.name}, ${t.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="bg-[#2b2536] object-contain object-top transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </a>
                )}
              </div>
              <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-body">{t.name}</span>
                <span className="text-[11.5px] leading-relaxed tracking-[0.1em] text-muted">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
