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
  const grounds = {
    ivory: 'bg-[linear-gradient(180deg,#FBF7EE_0%,#F6EFE0_100%)]',
    sand: 'bg-[linear-gradient(180deg,#F3E9D3_0%,#EBDEC0_100%)]',
    band: 'bg-[linear-gradient(180deg,#E9DAB3_0%,#E0C88F_100%)]',
  } as const;
  return (
    <section
      id={id}
      className={[
        grounds[ground],
        topRule ? (ground === 'band' ? 'border-t border-gold-line' : 'border-t border-line') : '',
        'px-5 py-10 sm:px-8 sm:py-12 lg:px-[72px] lg:py-14',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-shell">{children}</div>
    </section>
  );
}
