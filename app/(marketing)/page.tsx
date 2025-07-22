import { CompanyShowcase } from '@/components/company-showcase';
import { FooterSection } from '@/components/footer-section';
// import CallToActionSection from '@/components/landing/cta-section';
import HeroSection from '@/components/landing/hero-section';
// import Particles from '@/components/magicui/particles';
import { SphereMask } from '@/components/magicui/sphere-mask';
import { Navbar } from '@/components/navbar';
import { QuoteSection } from '@/components/quote-section';
import { TestimonialSection } from '@/components/testimonial-section';
// import { CTASection } from '@/todo/(marketing)/_components/sections/cta-section';
// import { FAQSection } from '@/todo/(marketing)/_components/sections/faq-section';
// import { FooterSection } from '@/todo/(marketing)/_components/sections/footer-section';
// import { HeroSection } from '@/todo/(marketing)/_components/sections/hero-section';
// import { Navbar } from '@/todo/(marketing)/_components/sections/navbar';

export default async function Page() {
  return (
    <div className="max-w-7xl mx-auto border-x relative">
      {/* <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10" /> */}
      {/* <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10" /> */}
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        <HeroSection />
        <CompanyShowcase />
        <QuoteSection />
        <TestimonialSection />
        <FooterSection />
      </main>
    </div>
  );
}
