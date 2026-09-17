import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/lib/content';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col bg-ivory text-ink transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:bg-card hover:shadow-[0_18px_44px_rgba(60,48,20,.10)]">
      <Link href={'/services/' + service.slug} className="relative block h-48 w-full overflow-hidden bg-sand">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col px-7 pb-8 pt-7">
        <div className="mb-4 flex items-baseline justify-between">
          <span className="label !tracking-[0.2em]">{service.num}</span>
          <span className="font-display text-xs uppercase tracking-[0.18em] text-muted">{service.tag}</span>
        </div>

        <Link href={'/services/' + service.slug}>
          <h3 className="m-0 mb-3.5 font-display text-[27px] font-semibold leading-tight text-ink transition-colors group-hover:text-gold-hover">{service.title}</h3>
        </Link>
        <p className="m-0 mb-5 text-[14.5px] leading-[1.75] text-muted text-pretty">{service.blurb}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {service.subs.map((sub, i) => {
            const item = service.list[i];
            const chip = (
              <span className="border border-line px-2.5 py-[7px] text-[10.5px] font-medium uppercase tracking-[0.1em] text-body transition-colors hover:border-gold-line hover:text-olive">
                {sub}
              </span>
            );
            return item ? (
              <Link key={sub} href={`/services/${service.slug}/${item.slug}`}>
                {chip}
              </Link>
            ) : (
              <span key={sub} className="border border-line px-2.5 py-[7px] text-[10.5px] font-medium uppercase tracking-[0.1em] text-body">
                {sub}
              </span>
            );
          })}
        </div>

        <Link href={'/services/' + service.slug} className="mt-auto inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">
          {service.cta} <span className="text-[15px] transition-transform duration-500 ease-premium group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
