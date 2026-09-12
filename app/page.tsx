import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import InsightsSection from '@/components/InsightsSection';
import IntroSection from '@/components/IntroSection';
import ProcessSection from '@/components/ProcessSection';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import TrustStrip from '@/components/TrustStrip';
import VastuSection from '@/components/VastuSection';
import WhyMysticz from '@/components/WhyMysticz';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesGrid />
      <VastuSection />
      <ProcessSection />
      <WhyMysticz />
      <Testimonials />
      <InsightsSection />
      <CTASection />
    </>
  );
}
