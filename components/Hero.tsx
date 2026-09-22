'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { services } from '@/lib/content';

const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  vastu: { src: '/images/hero-vastu.jpg', alt: 'A model home set on a Vastu compass chart' },
  numerology: { src: '/images/hero-numerology.jpg', alt: 'A numerology chart with numbers and patterns' },
  'inner-child-healing': { src: '/images/hero-inner-child-healing.jpg', alt: 'A child embracing a soft toy in warm golden light' },
  'lama-fera': { src: '/images/hero-lama-fera.jpg', alt: 'Hands held above healing crystals and candles' },
};

const slides = services.map((s) => ({
  slug: s.slug,
  num: s.num,
  tag: s.tag,
  title: s.title,
  copy: s.heroCopy,
  cta: s.cta,
  ...HERO_IMAGES[s.slug],
}));

const AUTO_ADVANCE_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section
      className="relative overflow-hidden border-b border-line bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[600px] sm:h-[560px] lg:h-[640px]">
        <AnimatePresence>
          <motion.div
            key={slide.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(100deg, rgba(22,19,15,.88) 0%, rgba(22,19,15,.74) 34%, rgba(22,19,15,.4) 60%, rgba(22,19,15,.12) 84%)',
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex h-full max-w-shell items-center px-5 sm:px-8 lg:px-[72px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.slug + '-copy'}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="max-w-[560px]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-[34px] bg-gold-line" />
                <span
                  className="text-[10.5px] font-semibold uppercase text-[#E9DBC0]"
                  style={{ letterSpacing: '0.26em' }}
                >
                  {slide.num} &middot; {slide.tag}
                </span>
              </div>

              <h1 className="m-0 mb-5 font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white text-pretty">
                {slide.title}
              </h1>

              <p className="m-0 mb-8 max-w-[46ch] text-[16.5px] leading-[1.75] text-[#EDE4D2] text-pretty">
                {slide.copy}
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link href="/book-consultation" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <Link
                  href={'/services/' + slide.slug}
                  className="inline-flex items-center gap-2.5 border border-white/70 px-[34px] py-[19px] text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  {slide.cta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center border border-white/40 bg-ink/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-ink/55 sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center border border-white/40 bg-ink/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-ink/55 sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              onClick={() => go(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
