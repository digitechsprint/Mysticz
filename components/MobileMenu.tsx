'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { nav } from '@/lib/site';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-ivory px-5 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        <Image src="/images/logo-wordmark.png" alt="Mysticz" width={391} height={96} className="h-8 w-auto mix-blend-multiply" />
        <button type="button" aria-label="Close menu" onClick={onClose} className="font-display text-4xl leading-none text-ink-2">
          ×
        </button>
      </div>

      <div className="mt-11 flex flex-1 flex-col">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-line py-1.5 font-display text-3xl leading-[1.5] text-ink"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link href="/book-consultation" onClick={onClose} className="btn btn-primary mt-6 justify-center !py-5">
        Book a Consultation
      </Link>
    </div>
  );
}
