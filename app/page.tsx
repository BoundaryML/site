import { FooterSection } from '@/components/footer-section';
import { BentoSection } from '@/components/landing/bento-section';
import { CTASection } from '@/components/landing/cta-section';
import { FeatureSection } from '@/components/landing/feature-section';
import HeroSection from '@/components/landing/hero-section';
import { VariantHome } from '@/components/landing/variant-home';
import { StoryTimeline } from '@/components/landing/story-timeline';
import { TestimonialSection } from '@/components/testimonial-section';
import { getNextEvent } from '@/lib/luma';

export default async function Page() {
  // Fetch the next event server-side with caching
  const nextEvent = await getNextEvent();

  return (
    <div className="w-full bg-background text-foreground">
      {/* Variant UI shell (Nav + Hero + Statement + Exhibit) */}
      <VariantHome />

      {/* Existing marketing sections appended after Variant layout */}
      <div className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-col items-center gap-12 border-x border-border bg-background sm:gap-20">
        {/* Story timeline */}
        <section className="w-full relative" id="story">
          <StoryTimeline />
        </section>

        <FeatureSection />
        <BentoSection />
        <TestimonialSection />
        {/* <FAQSection /> */}
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
}
