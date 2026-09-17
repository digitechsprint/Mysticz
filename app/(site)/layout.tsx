import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroVeil from '@/components/IntroVeil';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IntroVeil />
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
