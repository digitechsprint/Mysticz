import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { getSiteSettings } from '@/lib/data';
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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `${site.name} | Vastu, Numerology & Holistic Wellness`;
  const description =
    'Practical Vastu consultancy, numerology, meditation and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.';

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    openGraph: {
      title,
      description,
      url: site.url,
      siteName: site.name,
      images: ['/images/logo-lockup.png'],
      locale: 'en_IN',
      type: 'website',
    },
    verification: {
      google: settings?.google_site_verification || undefined,
      other: settings?.bing_site_verification ? { 'msvalidate.01': settings.bing_site_verification } : undefined,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  const customMeta = settings?.custom_meta ?? [];
  const ga4Id = settings?.ga4_measurement_id;

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
        {customMeta.map((tag) => (
          <meta key={tag.name} name={tag.name} content={tag.content} />
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />
      </head>
      <body className="font-sans">
        {ga4Id && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}');`}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
