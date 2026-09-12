'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { Faq } from '@/lib/content';

export default function FAQAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-t border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-5 py-6 text-left"
            >
              <span className="flex-1 font-display text-xl font-semibold leading-snug text-ink">{item.q}</span>
              <span className="shrink-0 font-display text-2xl font-medium leading-tight text-gold-text">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="m-0 max-w-[64ch] pb-7 text-[15.5px] leading-[1.8] text-body text-pretty">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <div className="border-t border-line" />
    </div>
  );
}
