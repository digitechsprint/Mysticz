import type { Metadata } from 'next';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-[70ch]">
        <h1 className="m-0 mb-6 font-display text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.15] text-ink">Terms &amp; Conditions</h1>
        <p className="m-0 mb-4 text-base leading-[1.8] text-body">
          Consultations booked through {site.name} are provided for guidance purposes. Recommendations shared during
          a session are advisory, and any changes to your home, workplace or plans remain your decision and
          responsibility.
        </p>
        <p className="m-0 text-base leading-[1.8] text-body">
          For questions about a booking or session, contact {site.email} or {site.phone}.
        </p>
      </div>
    </Section>
  );
}
