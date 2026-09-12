import type { ReactNode } from 'react';

export default function SectionHeading({
  label,
  title,
  children,
  as: Tag = 'h2',
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  as?: 'h1' | 'h2';
}) {
  return (
    <div>
      {label && <div className="label mb-[18px]">{label}</div>}
      <Tag className="m-0 font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink text-pretty">
        {title}
      </Tag>
      {children}
    </div>
  );
}
