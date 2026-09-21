'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/lib/content';
import { nav } from '@/lib/site';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-line bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-shell items-center gap-6 px-5 py-3.5 sm:px-8 lg:px-11">
          <Link href="/" aria-label="Mysticz home" className="shrink-0">
            <Image src="/images/logo-wordmark.png" alt="Mysticz" width={391} height={96} priority className="h-[34px] w-auto mix-blend-multiply" />
          </Link>

          <nav className="ml-auto flex items-center gap-3 lg:gap-6">
            <div className="hidden items-center gap-3 lg:flex lg:gap-6">
              {nav.map((item) =>
                item.href === '/services' ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 whitespace-nowrap border-b border-transparent py-2 text-[12.5px] font-medium tracking-wide text-ink-2 transition-colors group-hover:border-gold-line group-hover:text-olive"
                    >
                      {item.label}
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" className="mt-px transition-transform duration-200 group-hover:rotate-180">
                        <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="border border-line bg-card py-2 shadow-[0_18px_44px_rgba(60,48,20,.12)]">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={'/services/' + service.slug}
                            className="flex items-baseline gap-3 px-5 py-3 text-[13px] text-ink-2 transition-colors hover:bg-sand hover:text-olive"
                          >
                            <span className="text-[10px] font-medium tracking-[0.1em] text-gold-text">{service.num}</span>
                            <span>{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap border-b border-transparent py-2 text-[12.5px] font-medium tracking-wide text-ink-2 transition-colors hover:border-gold-line hover:text-olive"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <Link href="/book-consultation" className="btn btn-primary !px-5 !py-3.5">
              Book a Consultation
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1.5 p-2.5 lg:hidden"
            >
              <span className="block h-px w-[22px] bg-ink-2" />
              <span className="block h-px w-[22px] bg-ink-2" />
              <span className="block h-px w-[14px] bg-ink-2" />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
