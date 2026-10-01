import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import { getCustomHeadCode } from '@/lib/data';
import { parseHeadCode } from '@/lib/headCode';
import { site } from '@/lib/site';
import './globals.css';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Vastu, Numerology & Holistic Wellness`, template: `%s | ${site.name}` },
  description:
    'Practical Vastu consultancy, numerology, meditation and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.',
  openGraph: {
    title: `${site.name} | Vastu, Numerology & Holistic Wellness`,
    description:
      'Practical Vastu consultancy, numerology, meditation and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.',
    url: site.url,
    siteName: site.name,
    images: ['/images/logo-lockup.png'],
    locale: 'en_IN',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headCode = await getCustomHeadCode();
  const headTags = parseHeadCode(headCode);

  const localBusinessJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    founder: { '@type': 'Person', name: site.founder },
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
  }).replace(/</g, '\\u003c');

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        {headTags.map((tag, i) => {
          if (tag.type === 'meta') return <meta key={i} {...tag.attrs} />;
          if (tag.type === 'link') return <link key={i} {...tag.attrs} />;
          return <script key={i} {...tag.attrs} dangerouslySetInnerHTML={{ __html: tag.content }} />;
        })}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
