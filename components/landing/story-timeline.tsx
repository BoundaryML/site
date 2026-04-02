'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleImage from '@/components/ParticleImage';
import { siteConfig } from '@/app/_lib/config';

function LazyParticleImage(props: React.ComponentProps<typeof ParticleImage>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: props.width, height: props.height }}>
      {visible && <ParticleImage {...props} />}
    </div>
  );
}

const timeline = siteConfig.storyPage.timeline;

const ERA_IMAGES: Record<string, string> = {
  'C, Unix': '/Sphinx Icon.png',
  'Java, JavaScript': '/Satellite Icon.png',
  'TypeScript': '/Bridge Icon.png',
  'Python': '/Telescope Icon.png',
  'BAML': '/Constellation Icon.png',
};

function EraCard({ node, index }: { node: (typeof timeline)[number]; index: number }) {
  const image = ERA_IMAGES[node.label];
  const isEven = index % 2 === 0;
  const isBaml = node.label === 'BAML';
  return (
    <div
      className={`relative z-10 mx-auto w-full max-w-4xl py-10 flex flex-col gap-8 sm:flex-row sm:items-center ${isEven ? '' : 'sm:flex-row-reverse'}`}
    >
      {isBaml && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 75%)',
          }}
        />
      )}
      <div className="flex-1">
        <h2
          className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          style={isBaml ? { color: '#8b5cf6' } : undefined}
        >
          {node.label}
        </h2>
        <p className="mt-4 text-sm font-normal leading-loose text-muted-foreground">
          {node.body}
        </p>
      </div>
      {image && (
        <div className="shrink-0 flex justify-center">
          <LazyParticleImage src={image} width={300} height={300} jitter={0.15} hoverRepel={5} density={5} particleSize={3} streamDuration={1.3} />
        </div>
      )}
    </div>
  );
}

export function StoryTimeline() {
  return (
    <div className="relative w-full px-4 sm:px-8 md:px-12">
      {/* Vertical dashed center line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)',
        }}
      />
      {timeline.map((node, i) => (
        <EraCard key={node.era} node={node} index={i} />
      ))}
    </div>
  );
}
