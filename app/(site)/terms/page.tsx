import type { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = { title: 'Terms & Conditions' };

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using the Mysticz website, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or booking our services.',
  },
  {
    title: '2. Our Services',
    body: 'Mysticz provides consultations and guidance in Vastu, Numerology, Lama Fera Energy Healing and Inner Child Healing. Our services are intended to provide personal guidance, self-awareness and spiritual insight. They should not be considered a substitute for professional medical, legal, financial or psychological advice.',
  },
  {
    title: '3. Eligibility',
    body: 'Our services are intended for individuals who are at least 18 years of age. By using this website or booking a consultation, you confirm that you meet this age requirement. If under 18, a legal guardian should be accompanied.',
  },
  {
    title: '4. Privacy',
    body: 'Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, store and protect your personal information.',
  },
  {
    title: '5. Intellectual Property',
    body: 'All content published on this website, including text, graphics, images, logos, designs and other materials, is the property of Mysticz unless otherwise stated. No part of this website may be copied, reproduced, modified, distributed or used for commercial purposes without prior written permission.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'While every consultation is conducted with care and professionalism, Mysticz and Bhavika Gupta shall not be held responsible for any direct, indirect, incidental or consequential loss or damages connected with the use of this website or the services. The decisions made after a consultation remain solely the responsibility of the client.',
  },
  {
    title: '7. Third-Party Websites',
    body: 'This website may contain links to external websites or third-party services for your convenience. Mysticz does not control or endorse the content, policies or practices of these external websites and accepts no responsibility for them.',
  },
  {
    title: '8. Changes to These Terms',
    body: 'Mysticz reserves the right to update or revise these Terms & Conditions at any time without prior notice. Continued use of the website after any changes constitutes acceptance of the revised terms.',
  },
];

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-[70ch]">
        <h1 className="m-0 mb-9 font-display text-[clamp(24px,2.2vw,30px)] font-semibold leading-[1.15] text-ink">Terms &amp; Conditions</h1>
        <div className="flex flex-col gap-7">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="m-0 mb-2.5 font-display text-lg font-semibold leading-[1.3] text-ink">{s.title}</h2>
              <p className="m-0 text-[15px] leading-[1.8] text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
