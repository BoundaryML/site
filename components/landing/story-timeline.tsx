'use client';

import { useMotionValueEvent, useScroll, motion } from 'motion/react';
import { useRef, useState } from 'react';
import { siteConfig } from '@/app/_lib/config';
import { cn } from '@/lib/utils';

const timeline = siteConfig.storyPage.timeline;
const ERAS = timeline.length;
const SECTION_HEIGHT_VH = 50;
const STICKY_HEIGHT_VH = 60;
const TOTAL_HEIGHT_VH = STICKY_HEIGHT_VH + ERAS * SECTION_HEIGHT_VH;

function ProgressTrack({ progress }: { progress: number }) {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      <div className="h-px w-full bg-border" />
      <motion.div
        className="absolute top-0 left-0 h-px bg-foreground"
        style={{ width: `${Math.min(progress * 100, 100)}%` }}
      />
      <div className="flex justify-between mt-2">
        {timeline.map((node, i) => {
          const isActive = progress >= i / ERAS;
          return (
            <span
              key={node.era}
              className={cn(
                'text-[10px] uppercase tracking-[0.15em] transition-colors duration-300',
                isActive ? 'text-foreground font-medium' : 'text-muted-foreground/40',
              )}
            >
              {node.era}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function EraSlide({
  node,
  index,
  isActive,
}: {
  node: (typeof timeline)[number];
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out',
        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none',
      )}
    >
      <div className="text-center max-w-xl px-6">
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">
          {String(index + 1).padStart(2, '0')} / {String(ERAS).padStart(2, '0')}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {node.label}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-md mx-auto">
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
      style={{ height: `${TOTAL_HEIGHT_VH}vh` }}
    >
      <div
        className="sticky top-0 left-0 right-0 z-10 flex flex-col bg-background"
        style={{ height: `${STICKY_HEIGHT_VH}vh` }}
      >
        {/* Content area */}
        <div className="relative flex-1 overflow-hidden">
          {timeline.map((node, i) => (
            <EraSlide key={node.era} index={i} isActive={activeIndex === i} node={node} />
          ))}
        </div>

        {/* Bottom bar: progress + hint */}
        <div className="px-6 pb-4 sm:px-12 flex flex-col gap-3">
          <ProgressTrack progress={progress} />
          <p className="text-center text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40">
            ↓ Scroll
          </p>
        </div>
      </div>

      {/* Invisible spacers */}
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
