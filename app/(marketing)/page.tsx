import { CompanyShowcase } from '@/components/company-showcase';
import { FooterSection } from '@/components/footer-section';
import { BentoSection } from '@/components/landing/bento-section';
import { CTASection } from '@/components/landing/cta-section';
import { FAQSection } from '@/components/landing/faq-section';
import { FeatureSection } from '@/components/landing/feature-section';
import HeroSection from '@/components/landing/hero-section';
import { Navbar } from '@/components/navbar';
import { QuoteSection } from '@/components/quote-section';
import { TestimonialSection } from '@/components/testimonial-section';

export default async function Page() {
  return (
    <div className="max-w-7xl mx-auto relative">
      {/* <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10" /> */}
      {/* <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10" /> */}
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full gap-20">
        <HeroSection />
        <CompanyShowcase />

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
        <QuoteSection />
        <BentoSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </div>
  );
}
