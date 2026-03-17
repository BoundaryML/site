import { CompanyShowcase } from '@/components/company-showcase';
import { FooterSection } from '@/components/footer-section';
import { BentoSection } from '@/components/landing/bento-section';
import { CTASection } from '@/components/landing/cta-section';
import { FeatureSection } from '@/components/landing/feature-section';
import HeroSection, { LogoSection } from '@/components/landing/hero-section';
import { StoryTimeline } from '@/components/landing/story-timeline';
import { Navbar } from '@/components/navbar';
import { TestimonialSection } from '@/components/testimonial-section';
import { getNextEvent } from '@/lib/luma';

export default async function Page() {
  // Fetch the next event server-side with caching
  const nextEvent = await getNextEvent();

  return (
    <>
      <div className="max-w-7xl mx-auto border-x relative">
        <Navbar />
      </div>
      <main className="flex flex-col items-center min-h-screen w-full gap-12 sm:gap-20">
        <HeroSection nextEvent={nextEvent} />
      </main>
      <div className="relative z-10 max-w-7xl mx-auto border-x flex flex-col items-center w-full gap-12 sm:gap-20">
        <CompanyShowcase />
      {/* Story timeline - history of languages (scroll to explore) */}
        <section
          className="w-full relative"
          id="story"
          aria-label="A brief history of languages"
        >
          <div className="mx-auto max-w-5xl px-4 pb-1 pt-2 sm:px-8 md:px-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              A brief history of languages
            </h2>
          </div>
          <StoryTimeline />
        </section>

        <FeatureSection />
        <BentoSection />
        <LogoSection />
        <TestimonialSection />
        {/* <FAQSection /> */}
        <CTASection />
        <FooterSection />
      </div>
    </>
  );
}
