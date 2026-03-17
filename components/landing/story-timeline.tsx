'use client';

import { useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { siteConfig } from '@/app/_lib/config';
import { cn } from '@/lib/utils';

const timeline = siteConfig.storyPage.timeline;
const ERAS = timeline.length;
const SECTION_HEIGHT_VH = 70;
const STICKY_HEIGHT_VH = 70;
const TOTAL_HEIGHT_VH = STICKY_HEIGHT_VH + ERAS * SECTION_HEIGHT_VH; // sticky + scroll-through

function ProgressTrack({ progress }: { progress: number }) {
  const activeIndex = Math.min(ERAS - 1, Math.floor(progress * ERAS));
  return (
    <div className="flex gap-1.5" aria-hidden>
      {timeline.map((_, i) => (
        <div
          key={timeline[i].era}
          className={cn(
            'h-1 flex-1 rounded-full transition-colors duration-300',
            i <= activeIndex ? 'bg-secondary' : 'bg-border',
          )}
        />
      ))}
    </div>
  );
}

function EraSlide({
  node,
  isActive,
}: {
  node: (typeof timeline)[number];
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col justify-center px-4 transition-all duration-500 ease-out sm:px-8 md:px-12',
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none',
      )}
    >
      <div className="mx-auto w-full max-w-2xl">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          {node.era}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {node.label}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {node.body}
        </p>
      </div>
    </div>
  );
}

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  const activeIndex = Math.min(ERAS - 1, Math.floor(progress * ERAS));

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${TOTAL_HEIGHT_VH}vh`, position: 'relative' }}
    >
      {/* Sticky viewport: stays in place while user scrolls through the spacer height below */}
      <div
        className="sticky top-0 left-0 right-0 z-10 flex min-h-[320px] flex-col justify-between bg-background/95 py-6 backdrop-blur-sm sm:min-h-[360px] md:py-8"
        style={{ height: `${STICKY_HEIGHT_VH}vh` }}
      >
        <ProgressTrack progress={progress} />

        <div className="relative flex-1 overflow-hidden">
          {timeline.map((node, i) => (
            <EraSlide key={node.era} isActive={activeIndex === i} node={node} />
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Scroll to explore
        </p>
      </div>

      {/* Invisible spacer sections that create the scroll length */}
      {timeline.map((_, i) => (
        <div
          key={timeline[i].era}
          aria-hidden
          className="pointer-events-none"
          style={{ height: `${SECTION_HEIGHT_VH}vh` }}
        />
      ))}
    </div>
  );
}
