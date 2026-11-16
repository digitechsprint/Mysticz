'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { messageTestimonials, videoTestimonial } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

const initials = (name: string) =>
  name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

function Attribution({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-line bg-[linear-gradient(180deg,#F3E9D3_0%,#E9DAB3_100%)] font-display text-[15px] font-semibold tracking-wide text-gold-text">
        {initials(name)}
      </span>
      <div>
        <div className="font-display text-[17px] font-semibold leading-tight text-ink">{name}</div>
        <div className="mt-1 text-[12px] leading-snug tracking-[0.06em] text-muted">{role}</div>
      </div>
    </div>
  );
}

/** Featured video testimonial beside written client testimonials. */
export default function TestimonialProof() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <Section ground="sand" topRule>
      <Reveal>
        <div className="label mb-[18px]">Client stories</div>
        <h2 className="m-0 mb-9 max-w-[24ch] font-display text-[clamp(24px,2.6vw,34px)] font-semibold leading-[1.12] text-ink text-pretty lg:mb-12">
          Change that clients have felt in their homes, work and lives
        </h2>
      </Reveal>

      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Featured video */}
        <Reveal className="lg:col-span-5">
          <figure className="m-0 flex h-full flex-col bg-ink p-3 shadow-[0_24px_60px_rgba(60,48,20,.18)] sm:p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black lg:aspect-auto lg:min-h-[520px] lg:flex-1">
              {playing ? (
                <video
                  ref={videoRef}
                  src={videoTestimonial.src}
                  poster={videoTestimonial.poster}
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                  aria-label={`Video testimonial from ${videoTestimonial.name}`}
                />
              ) : (
                <button type="button" onClick={play} className="group absolute inset-0 block w-full" aria-label={`Play video testimonial from ${videoTestimonial.name}`}>
                  <Image src={videoTestimonial.poster} alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-[50%_40%] transition-transform duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,8,.15)_0%,rgba(20,16,8,.1)_45%,rgba(20,16,8,.85)_100%)]" />
                  <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory">
                      <svg width="18" height="20" viewBox="0 0 22 24" aria-hidden className="ml-1"><path d="M2 2.5v19L20 12 2 2.5Z" fill="#8A6A1F" /></svg>
                    </span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-7">
                    <span className="mb-2 flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#E9D6A6]">
                      <span className="block h-px w-6 bg-[#E9D6A6]" />
                      Video testimonial
                    </span>
                    <span className="block font-display text-[26px] font-semibold leading-tight text-white">{videoTestimonial.name}</span>
                    <span className="mt-1 block text-[13px] tracking-[0.06em] text-white/75">{videoTestimonial.role}</span>
                  </span>
                </button>
              )}
            </div>
          </figure>
        </Reveal>

        {/* Written testimonials */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
          {messageTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * (i + 1)} className="flex-1">
              <figure className="relative m-0 flex h-full flex-col overflow-hidden border border-line-2 bg-card p-7 sm:p-9">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gold-line" aria-hidden />
                <svg width="34" height="26" viewBox="0 0 34 26" aria-hidden className="mb-5 text-gold-line">
                  <path fill="currentColor" d="M0 26V15.6C0 6.9 4.6 1.7 13.4 0l1.5 3.6C10 5 7.6 8 7.3 12.3H14V26H0Zm19 0V15.6C19 6.9 23.6 1.7 32.4 0l1.5 3.6C29 5 26.6 8 26.3 12.3H33V26H19Z" />
                </svg>
                <blockquote className="m-0 mb-8 font-display text-[clamp(17px,1.45vw,21px)] font-medium leading-[1.55] text-ink text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <Attribution name={t.name} role={t.role} />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-text">{t.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
