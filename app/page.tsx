import { FooterSection } from '@/components/footer-section';
import { BentoSection } from '@/components/landing/bento-section';
import { CTASection } from '@/components/landing/cta-section';
import { FeatureSection } from '@/components/landing/feature-section';
import HeroSection from '@/components/landing/hero-section';
import { Navbar } from '@/components/navbar';
import { TestimonialSection } from '@/components/testimonial-section';
import { getNextEvent } from '@/lib/luma';

export default async function Page() {
  // Fetch the next event server-side with caching
  const nextEvent = await getNextEvent();

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      {/* <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10" /> */}
      {/* <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10" /> */}
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full gap-12 sm:gap-20">
        <HeroSection nextEvent={nextEvent} />
        {/* <CompanyShowcase /> */}

        {/* Code Analysis Interface Section */}
        {/* <CodeAnalysisSection
          description="Experience our powerful code analysis tool with type-safe AI development"
          title="AI-Powered Code Analysis"
        /> */}

        {/* Feature Showcase Section - Compact for limited vertical space */}
        {/* <FeatureShowcaseSection
          compact={true}
          description="Choose the right tool for your development workflow"
          title="Development Tools"
        /> */}
        {/* <VscodeLikeEditor /> */}

        <FeatureSection />
        {/* <QuoteSection /> */}
        <BentoSection />
        <TestimonialSection />
        {/* <FAQSection /> */}
        <CTASection />
        <FooterSection />
      </main>
    </div>
  );
}
