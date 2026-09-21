import type { Metadata } from 'next';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="max-w-[70ch]">
        <h1 className="m-0 mb-6 font-display text-[clamp(24px,2.2vw,30px)] font-semibold leading-[1.15] text-ink">Privacy Policy</h1>
        <p className="m-0 mb-4 text-base leading-[1.8] text-body">
          {site.name} respects your privacy. Information you share through the contact or booking forms, including your
          name, email, phone number and message, is used only to respond to your enquiry and is never sold or shared
          with third parties.
        </p>
        <p className="m-0 text-base leading-[1.8] text-body">
          For any questions about how your information is handled, contact {site.email}.
        </p>
      </div>
    </Section>
  );
}
