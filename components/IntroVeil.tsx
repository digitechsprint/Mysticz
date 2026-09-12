'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/** Opening sequence: lockup rises, gold rule draws, tagline opens, veil fades. */
export default function IntroVeil() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('mz-intro-seen')) { setDone(true); return; }
    const t = setTimeout(() => { sessionStorage.setItem('mz-intro-seen', '1'); setDone(true); }, 2150);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-ivory"
      style={{ animation: 'veilOut 2.2s ease forwards' }}
    >
      <Image
        src="/images/logo-lockup.png"
        alt=""
        width={412}
        height={141}
        priority
        className="h-16 w-auto mix-blend-multiply sm:h-[92px]"
        style={{ animation: 'markRise 1.1s cubic-bezier(.22,.61,.36,1) both' }}
      />
      <div className="h-px bg-gold-line" style={{ animation: 'ruleGrow 1.5s .2s cubic-bezier(.22,.61,.36,1) both' }} />
      <div
        className="text-[10px] font-semibold uppercase leading-relaxed text-gold-text"
        style={{ letterSpacing: '0.34em', animation: 'tagIn 1.7s both' }}
      >
        Vastu • Numerology • Healing
      </div>
    </div>
  );
}
