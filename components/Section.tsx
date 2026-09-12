import type { ReactNode } from 'react';

/** Page section shell: ground colour, generous vertical rhythm, 1400px shell. */
export default function Section({
  children,
  ground = 'ivory',
  topRule = false,
  className = '',
  id,
}: {
  children: ReactNode;
  ground?: 'ivory' | 'sand' | 'band';
  topRule?: boolean;
  className?: string;
  id?: string;
}) {
  const grounds = { ivory: 'bg-ivory', sand: 'bg-sand', band: 'bg-band' } as const;
  return (
    <section
      id={id}
      className={[
        grounds[ground],
        topRule ? (ground === 'band' ? 'border-t border-gold-line' : 'border-t border-line') : '',
        'px-5 py-16 sm:px-8 sm:py-24 lg:px-[72px] lg:py-[120px]',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-shell">{children}</div>
    </section>
  );
}
