'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { messageTestimonials, videoTestimonial } from '@/lib/content';
import Reveal from './Reveal';
import Section from './Section';

/** Featured video testimonial beside verbatim client messages, with the original chats viewable as proof. */
export default function TestimonialProof() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; name: string; index: number } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length });
      if (e.key === 'ArrowLeft') setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length });
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [lightbox]);

  const play = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <Section ground="sand" topRule>
      <Reveal>
        <div className="label mb-[18px]">In their own words</div>
        <h2 className="m-0 mb-8 max-w-[30ch] font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.1] text-ink text-pretty lg:mb-11">
          Real messages from real clients
        </h2>
      </Reveal>

      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Featured video */}
        <Reveal className="lg:col-span-5">
          <figure className="m-0 flex h-full flex-col border border-line-2 bg-card p-4 sm:p-5">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-black lg:max-w-[380px]">
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
                  <Image src={videoTestimonial.poster} alt="" fill sizes="(max-width: 1024px) 340px, 40vw" className="object-cover opacity-90 transition-opacity group-hover:opacity-100" />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,.72)_100%)]" />
                  <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 shadow-[0_10px_30px_rgba(0,0,0,.35)] transition-transform duration-300 group-hover:scale-110">
                    <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden><path d="M2 2.5v19L20 12 2 2.5Z" fill="#8A6A1F" /></svg>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <span className="mb-1 block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#E9D6A6]">Video testimonial</span>
                    <span className="block font-display text-xl font-semibold leading-tight text-white">Hear it from {videoTestimonial.name.split(' ')[0]}</span>
                  </span>
                </button>
              )}
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center gap-3.5">
              <span className="block h-px w-7 bg-gold-line" />
              <span className="text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-body">{videoTestimonial.name}</span>
              <span className="text-[11.5px] leading-relaxed tracking-[0.1em] text-muted">{videoTestimonial.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Message quotes */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
          {messageTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * (i + 1)} className="flex-1">
              <figure className="m-0 flex h-full flex-col border border-line-2 bg-card p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="font-display text-[56px] font-semibold leading-[0.5] text-gold-text" aria-hidden>“</div>
                  <span className="border border-line-2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">{t.service}</span>
                </div>
                <blockquote className="m-0 mb-6 font-display text-[clamp(17px,1.5vw,22px)] font-medium leading-[1.5] text-ink text-pretty">
                  {t.quote}
                </blockquote>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                  <figcaption className="flex flex-wrap items-center gap-x-3.5 gap-y-1">
                    <span className="block h-px w-7 bg-gold-line" />
                    <span className="text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-body">{t.name}</span>
                    <span className="text-[11.5px] leading-relaxed tracking-[0.1em] text-muted">{t.role}</span>
                  </figcaption>
                  <button
                    type="button"
                    onClick={() => setLightbox({ images: t.screenshots, name: t.name, index: 0 })}
                    className="group flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-olive"
                  >
                    <span className="flex -space-x-3">
                      {t.screenshots.map((s) => (
                        <span key={s} className="relative block h-11 w-8 overflow-hidden border border-line-2 bg-[#2b2536] shadow-sm transition-transform group-hover:-translate-y-0.5">
                          <Image src={s} alt="" fill sizes="32px" className="object-cover object-top" />
                        </span>
                      ))}
                    </span>
                    <span className="border-b border-transparent transition-colors group-hover:border-olive">
                      View {t.screenshots.length > 1 ? 'messages' : 'message'}
                    </span>
                  </button>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Message from ${lightbox.name}`}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(24,20,12,.86)] p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative flex max-h-full w-full max-w-[420px] flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex w-full items-center justify-between text-ivory">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                {lightbox.name}
                {lightbox.images.length > 1 && <span className="ml-2 font-normal opacity-70">{lightbox.index + 1} / {lightbox.images.length}</span>}
              </span>
              <button type="button" aria-label="Close" onClick={() => setLightbox(null)} className="font-display text-3xl leading-none">×</button>
            </div>
            <div className="relative h-[min(80vh,760px)] w-full">
              <Image src={lightbox.images[lightbox.index]} alt={`Message from ${lightbox.name}`} fill sizes="420px" className="object-contain" />
            </div>
            {lightbox.images.length > 1 && (
              <div className="mt-3 flex gap-2.5">
                <button type="button" aria-label="Previous message" onClick={() => setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })} className="h-11 w-11 border border-ivory/40 text-ivory transition-colors hover:border-ivory">←</button>
                <button type="button" aria-label="Next message" onClick={() => setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })} className="h-11 w-11 border border-ivory/40 text-ivory transition-colors hover:border-ivory">→</button>
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
