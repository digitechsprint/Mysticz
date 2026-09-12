import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/content';
import { nav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-gold-line bg-[linear-gradient(180deg,#E9DAB3_0%,#E2CD9B_100%)] text-ink-2">
      <div className="mx-auto grid max-w-shell gap-8 px-5 pb-9 pt-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-10 lg:px-[72px]">
        <div>
          <Image src="/images/logo-lockup.png" alt="Mysticz — Nurture Your Soul" width={412} height={141} className="mb-3.5 h-10 w-auto mix-blend-multiply" />
          <p className="m-0 mb-4 max-w-[34ch] text-[13px] leading-[1.7] text-muted">
            Personalised Vastu, numerology and holistic guidance for greater balance, clarity and wellbeing.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="border border-line-2 px-2.5 py-2 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener" className="border border-line-2 px-2.5 py-2 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">Facebook</a>
            <a href={site.social.linkedin} target="_blank" rel="noopener" className="border border-line-2 px-2.5 py-2 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-gold-line">LinkedIn</a>
          </div>
        </div>

        <div>
          <div className="label mb-3 !text-gold-text">Explore</div>
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[13px] text-muted transition-colors hover:text-gold-hover">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="label mb-3 !text-gold-text">Services</div>
          <div className="flex flex-col gap-2">
            {services.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="text-[13px] text-muted transition-colors hover:text-gold-hover">
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="label mb-3 !text-gold-text">Get in touch</div>
          <div className="flex flex-col gap-2">
            <a href={'tel:' + site.phoneRaw} className="text-[13px] text-muted transition-colors hover:text-gold-hover">{site.phone}</a>
            <a href={'mailto:' + site.email} className="break-words text-[13px] text-muted transition-colors hover:text-gold-hover">{site.email}</a>
            <span className="text-[13px] leading-[1.5] text-muted">{site.address.street}, {site.address.city}, {site.address.country}</span>
            <span className="text-[13px] text-muted">{site.hours}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-3 border-t border-line-2 px-5 py-4 sm:px-8 lg:px-[72px]">
        <span className="text-[11.5px] text-muted">© {new Date().getFullYear()} Mysticz. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="text-[11.5px] text-muted transition-colors hover:text-gold-hover">Privacy Policy</Link>
          <Link href="/terms" className="text-[11.5px] text-muted transition-colors hover:text-gold-hover">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
