import Image from 'next/image';
import { siteConfig } from '@/app/(marketing)/_lib/config';

export function QuoteSection() {
  const { quoteSection } = siteConfig;

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent/20 z-20"
      id="quote"
    >
      <blockquote className="max-w-3xl text-left px-4">
        <p className="text-xl md:text-2xl text-primary leading-relaxed tracking-tighter font-medium mb-6">
          {quoteSection.quote}
        </p>

        <div className="flex gap-4">
          <div className="size-10 rounded-full bg-primary border border-border">
            <Image
              alt={quoteSection.author.name}
              className="size-full rounded-full object-contain"
              height={40}
              src={quoteSection.author.image}
              width={40}
            />
          </div>
          <div className="text-left">
            <cite className="text-lg font-medium text-primary not-italic">
              {quoteSection.author.name}
            </cite>
            <p className="text-sm text-primary">{quoteSection.author.role}</p>
          </div>
        </div>
      </blockquote>
    </section>
  );
}
