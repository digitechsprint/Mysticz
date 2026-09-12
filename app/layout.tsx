import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroVeil from '@/components/IntroVeil';
import WhatsAppButton from '@/components/WhatsAppButton';
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
  title: { default: `${site.name} — Vastu, Numerology & Holistic Wellness`, template: `%s — ${site.name}` },
  description:
    'Practical Vastu consultancy, numerology and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.',
  openGraph: {
    title: `${site.name} — Vastu, Numerology & Holistic Wellness`,
    description:
      'Practical Vastu consultancy, numerology and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.',
    url: site.url,
    siteName: site.name,
    images: ['/images/logo-lockup.png'],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <IntroVeil />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
