import Link from 'next/link';
import Section from '@/components/Section';

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-[52ch]">
        <div className="label mb-[18px]">404</div>
        <h1 className="m-0 mb-5 font-display text-[clamp(24px,2.2vw,30px)] font-semibold leading-[1.12] text-ink">
          This page has wandered off.
        </h1>
        <p className="m-0 mb-8 text-base leading-[1.8] text-body">
          The page you are looking for does not exist, or may have moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </Section>
  );
}
