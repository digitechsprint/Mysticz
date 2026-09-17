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
  // ivory is flat, not a gradient: it's the default ground and often appears in two
  // consecutive Sections with no divider between them (e.g. a page's hero label section
  // followed directly by its body section). A per-section gradient restarts at each
  // section's own top edge, which produced a visible seam exactly at that boundary.
  // sand/band are only ever used with topRule, so their gradient's reset at the boundary
  // reads as intentional (there's already a rule line marking a new section there).
  const grounds = {
    ivory: 'bg-ivory',
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
