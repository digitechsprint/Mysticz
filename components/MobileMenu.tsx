'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { services } from '@/lib/content';
import { nav } from '@/lib/site';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ivory px-5 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={onClose} aria-label="Mysticz home">
          <Image src="/images/logo-wordmark.png" alt="Mysticz" width={391} height={96} className="h-8 w-auto mix-blend-multiply" />
        </Link>
        <button type="button" aria-label="Close menu" onClick={onClose} className="font-display text-4xl leading-none text-ink-2">
          ×
        </button>
      </div>

      <div className="mt-11 flex flex-1 flex-col">
        {nav.map((item) =>
          item.href === '/services' ? (
            <div key={item.href} className="border-b border-line">
              <div className="flex items-center justify-between py-1.5">
                <Link href={item.href} onClick={onClose} className="font-display text-3xl leading-[1.5] text-ink">
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-label={servicesOpen ? 'Collapse services' : 'Expand services'}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className="p-2.5 text-ink-2"
                >
                  <svg width="14" height="9" viewBox="0 0 9 6" fill="none" className={['transition-transform duration-200', servicesOpen ? 'rotate-180' : ''].join(' ')}>
                    <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {servicesOpen && (
                <div className="flex flex-col gap-1 pb-4 pl-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={'/services/' + service.slug}
                      onClick={onClose}
                      className="py-1.5 text-base text-muted"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="border-b border-line py-1.5 font-display text-3xl leading-[1.5] text-ink"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      <Link href="/book-consultation" onClick={onClose} className="btn btn-primary mt-6 justify-center !py-5">
        Book a Consultation
      </Link>
    </div>
  );
}
