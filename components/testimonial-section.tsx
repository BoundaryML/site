import { siteConfig } from '@/app/(marketing)/_lib/config';
import { SectionHeader } from './section-header';
import { SocialProofTestimonials } from './testimonial-scroll';

export function TestimonialSection() {
  const { testimonials } = siteConfig;

  return (
    <section
      className="flex flex-col items-center justify-center w-full"
      id="testimonials"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          People love BAML
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          And so do agents
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}
