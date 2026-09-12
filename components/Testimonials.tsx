'use client';
import { useState } from 'react';
import { testimonials } from '@/lib/content';
import Section from './Section';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const go = (delta: number) => setIndex((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <Section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-6 lg:mb-8">
        <div>
          <div className="label mb-[18px]">Testimonials</div>
          <h2 className="m-0 font-display text-[clamp(22px,2vw,27px)] font-semibold leading-[1.1] text-ink">
            Words from those who reached out
          </h2>
        </div>
        <div className="flex gap-2.5">
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className="h-12 w-12 border border-line-3 text-[17px] text-ink-2 transition-colors hover:border-olive hover:text-olive">←</button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className="h-12 w-12 border border-line-3 text-[17px] text-ink-2 transition-colors hover:border-olive hover:text-olive">→</button>
        </div>
      </div>

      <div className="grid items-start gap-7 border-t border-line pt-8 lg:grid-cols-2 lg:gap-16 lg:pt-13">
        <div>
          <div className="mb-5 font-display text-[64px] font-semibold leading-[0.6] text-gold-text">“</div>
          <blockquote className="m-0 mb-7 font-display text-[clamp(17px,1.1vw,19px)] font-medium leading-[1.45] text-ink text-pretty">
            {'“' + current.quote + '”'}
          </blockquote>
          <div className="flex flex-wrap items-center gap-3.5">
            <span className="block h-px w-7 bg-gold-line" />
            <span className="text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-body">{current.name}</span>
            <span className="text-[11.5px] leading-relaxed tracking-[0.1em] text-muted">{current.service}</span>
          </div>
        </div>

        <div className="flex flex-col">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index}
              className={[
                'flex items-baseline gap-3.5 border-b border-line px-1 py-4 text-left transition-colors hover:bg-sand',
                i === index ? 'bg-sand' : '',
              ].join(' ')}
            >
              <span className="min-w-[22px] text-[10.5px] font-medium leading-relaxed tracking-[0.14em] text-gold-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-base leading-snug text-ink-2">{t.name}</span>
              <span className="ml-auto text-xs leading-snug text-muted">{t.service}</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
