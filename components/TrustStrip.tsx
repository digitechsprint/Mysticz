import { trust } from '@/lib/content';

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-sand">
      <div className="mx-auto grid max-w-shell sm:grid-cols-2 lg:grid-cols-4">
        {trust.map((item, i) => (
          <div
            key={item.num}
            className={['px-5 py-9 sm:px-8 lg:px-10', i < trust.length - 1 ? 'lg:border-r lg:border-line' : ''].join(' ')}
          >
            <div className="label mb-3">{item.num}</div>
            <div className="mb-2 font-display text-[21px] font-semibold leading-tight text-ink">{item.title}</div>
            <p className="m-0 text-sm leading-[1.7] text-muted">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
