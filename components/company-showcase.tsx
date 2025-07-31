import Image from 'next/image';

const customerLogos = [
  {
    alt: 'Aer Compliance',
    src: '/testimonials/aer_compliance_logo.png',
  },
  {
    alt: 'PMMI',
    src: '/testimonials/logos/pmmi.png',
  },
  {
    alt: 'Product Hunt',
    src: '/testimonials/logos/product-hunt.png',
  },
  {
    alt: 'SAP',
    src: '/testimonials/logos/sapLogo.png',
  },
  {
    alt: 'AI Tinkerers',
    src: '/testimonials/logos/ai-tinkerers.png',
  },
  {
    alt: 'Cerebral Valley',
    src: '/testimonials/logos/cerebral.png',
  },
  {
    alt: 'Vetrec',
    src: '/testimonials/logos/vetrec.png',
  },
];

export function CompanyShowcase() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 pt-20 w-full relative"
      id="company"
    >
      <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-8 px-12 pt-0">
        <div className="text-xl font-light text-primary/50">
          Trusted by developers at
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-3 gap-y-0 opacity-50 grayscale">
          {customerLogos.map((logo) => (
            <div
              className="relative h-[60px] w-[140px] md:h-[80px] md:w-[160px]"
              key={logo.alt}
            >
              <Image
                alt={logo.alt}
                className="object-contain"
                fill
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
