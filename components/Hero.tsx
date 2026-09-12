import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#FBF7EE_0%,#F6EFE0_100%)]">
      <div className="mx-auto grid max-w-shell items-start gap-9 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-[76px] lg:px-[72px] lg:pb-14 lg:pt-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-[34px] bg-gold-line" />
            <span className="label !font-semibold" style={{ letterSpacing: '0.26em' }}>
              Vastu • Numerology • Holistic Wellness
            </span>
          </div>

          <h1 className="m-0 mb-6 font-display text-[clamp(30px,3vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink text-pretty">
            Create spaces that support the life you want to live.
          </h1>

          <p className="m-0 mb-7 max-w-[48ch] text-[17.5px] leading-[1.75] text-body text-pretty">
            Practical Vastu and personalised guidance to bring greater balance, harmony and clarity to your home,
            your workplace and your life.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Link href="/book-consultation" className="btn btn-primary">Book a Consultation</Link>
            <Link href="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            {/* Vastu-grid hairlines */}
            <div className="pointer-events-none absolute -inset-3.5 border border-line" />
            <div className="pointer-events-none absolute -left-3.5 -right-3.5 top-1/3 h-px bg-line" />
            <div className="pointer-events-none absolute -left-3.5 -right-3.5 top-2/3 h-px bg-line" />
            <div className="pointer-events-none absolute -bottom-3.5 -top-3.5 left-1/3 w-px bg-line" />
            <div className="pointer-events-none absolute -bottom-3.5 -top-3.5 left-2/3 w-px bg-line" />
            <div className="relative aspect-[6/5] w-full bg-sand">
              <Image
                src="/images/bhavika-portrait.png"
                alt="Bhavika Gupta, Vastu consultant and numerologist"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
