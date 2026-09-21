import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import InsightsSection from '@/components/InsightsSection';
import IntroSection from '@/components/IntroSection';
import ProcessSection from '@/components/ProcessSection';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import TrustStrip from '@/components/TrustStrip';
import WhyMysticz from '@/components/WhyMysticz';
import { testimonials as fallbackTestimonials } from '@/lib/content';
import { listTestimonials } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('/', {
    title: 'Vastu, Numerology & Holistic Wellness',
    description:
      'Practical Vastu consultancy, numerology, meditation and holistic healing with Bhavika Gupta. Personalised guidance for homes, offices and businesses across Delhi NCR and online.',
  });
}

export default async function HomePage() {
  const dbTestimonials = await listTestimonials();
  const testimonials = dbTestimonials.length > 0 ? dbTestimonials : fallbackTestimonials;

  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesGrid />
      <ProcessSection />
      <WhyMysticz />
      <Testimonials items={testimonials} />
      <InsightsSection />
      <CTASection />
    </>
  );
}
