import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-gold-line bg-band">
      <div className="absolute inset-0 opacity-[0.34]">
        <Image src="/images/vastu.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(233,219,192,.94) 0%, rgba(233,219,192,.78) 62%, rgba(233,219,192,.62) 100%)',
        }}
      />
      <div className="relative mx-auto max-w-shell px-5 py-14 sm:px-8 lg:px-[72px] lg:py-20">
        <div className="max-w-[760px]">
          <div className="label mb-5">Begin here</div>
          <h2 className="m-0 mb-6 font-display text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.08] tracking-[-0.01em] text-ink text-pretty">
            Sometimes, clarity begins with one conversation.
          </h2>
          <p className="m-0 mb-9 max-w-[52ch] text-[16.5px] leading-[1.8] text-body text-pretty">
            Whether you are planning a new home, navigating a business decision or simply looking for greater clarity,
            begin with a personalised consultation.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/book-consultation" className="btn btn-primary">Book Your Consultation</Link>
            <a href={'tel:' + site.phoneRaw} className="btn btn-secondary">Talk to Bhavika</a>
          </div>
        </div>
      </div>
    </section>
  );
}
