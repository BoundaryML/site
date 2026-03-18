'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const BRANDFETCH_CLIENT_ID = '1idQbe1D_SxVi_WjGRi';

const customerLogos = [
  { alt: 'Aer Compliance', src: '/testimonials/aer_compliance_logo.png', type: 'local' as const },
  { alt: 'PMMI', src: '/testimonials/logos/pmmi.png', type: 'local' as const },
  { alt: 'Product Hunt', src: '/testimonials/logos/product-hunt.png', type: 'local' as const },
  { alt: 'SAP', src: '/testimonials/logos/sapLogo.png', type: 'local' as const },
  { alt: 'EY', src: '/testimonials/logos/ey.png', type: 'local' as const },
  { alt: 'AI Tinkerers', src: '/testimonials/logos/ai-tinkerers.png', type: 'local' as const },
  { alt: 'Cerebral Valley', src: '/testimonials/logos/cerebral.png', type: 'local' as const },
  { alt: 'AMD', src: '/testimonials/logos/amd.png', type: 'local' as const },
  { alt: 'Vetrec', src: '/testimonials/logos/vetrec.png', type: 'local' as const },
  { alt: 'AWS', src: '/testimonials/logos/aws.png', type: 'local' as const },
];

function LogoCell({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="relative flex h-10 w-[120px] items-center justify-center rounded-lg border border-border/60 bg-muted/30 px-3 py-2 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:grayscale-0 sm:h-11 sm:w-[130px] md:h-12 md:w-[140px] [.logo-grid_&]:grayscale [.logo-grid_&]:opacity-80">
      <Image
        alt={alt}
        className="object-contain"
        fill
        priority
        sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, 140px"
        src={src}
      />
    </div>
  );
}

export function CompanyShowcase() {
  const theme = useTheme();
  const isDark = theme.theme === 'dark';

  const logosWithUrls = customerLogos.map((logo) => {
    if (logo.type === 'brandfetch') {
      const themeSegment = isDark ? 'theme/light' : 'theme/dark';
      return {
        alt: logo.alt,
        src: `https://cdn.brandfetch.io/${logo.domain}/w/256/h/128/${themeSegment}/symbol?c=${BRANDFETCH_CLIENT_ID}`,
      };
    }
    return { alt: logo.alt, src: logo.src };
  });

  return (
    <section
      className="flex flex-col items-center justify-center gap-6 py-10 w-full relative sm:py-12"
      id="company"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by developers at
      </p>
      <div
        className="logo-grid grid w-full max-w-4xl grid-cols-5 gap-2 px-4 sm:gap-3 sm:px-6"
        style={{ gridTemplateRows: 'repeat(2, 1fr)' }}
      >
        {logosWithUrls.map((logo) => (
          <LogoCell key={logo.alt} alt={logo.alt} src={logo.src} />
        ))}
      </div>
    </section>
  );
}
