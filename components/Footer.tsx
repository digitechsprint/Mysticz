import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/content';
import { nav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-gold-line bg-footer text-ink-2">
      <div className="mx-auto grid max-w-shell gap-9 px-5 pb-14 pt-14 sm:grid-cols-2 sm:px-8 sm:pt-20 lg:grid-cols-4 lg:gap-14 lg:px-[72px]">
        <div>
          <Image src="/images/logo-lockup.png" alt="Mysticz — Nurture Your Soul" width={412} height={141} className="mb-5 h-[52px] w-auto mix-blend-multiply" />
          <p className="m-0 mb-6 max-w-[34ch] text-sm leading-[1.8] text-muted">
            Personalised Vastu, numerology and holistic guidance for greater balance, clarity and wellbeing.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="border border-line-2 px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener" className="border border-line-2 px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">Facebook</a>
            <a href={site.social.linkedin} target="_blank" rel="noopener" className="border border-line-2 px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">LinkedIn</a>
          </div>
        </div>

        <div>
          <div className="label mb-[22px] !text-gold-text">Explore</div>
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-gold-hover">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="label mb-[22px] !text-gold-text">Services</div>
          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="text-sm text-muted transition-colors hover:text-gold-hover">
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="label mb-[22px] !text-gold-text">Get in touch</div>
          <div className="flex flex-col gap-3">
            <a href={'tel:' + site.phoneRaw} className="text-sm text-muted transition-colors hover:text-gold-hover">{site.phone}</a>
            <a href={'mailto:' + site.email} className="break-words text-sm text-muted transition-colors hover:text-gold-hover">{site.email}</a>
            <span className="text-sm leading-[1.6] text-muted">{site.address.street}<br />{site.address.city}, {site.address.country}</span>
            <span className="text-sm text-muted">{site.hours}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 border-t border-line-2 px-5 py-7 sm:px-8 lg:px-[72px]">
        <span className="text-[12.5px] text-muted">© {new Date().getFullYear()} Mysticz. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-[12.5px] text-muted transition-colors hover:text-gold-hover">Privacy Policy</Link>
          <Link href="/terms" className="text-[12.5px] text-muted transition-colors hover:text-gold-hover">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
