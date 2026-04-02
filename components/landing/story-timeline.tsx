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
  const isOdd = index % 2 !== 0;
  const isBaml = node.label === 'BAML';

  const textCol = (
    <div
      style={{
        flex: '0 0 60%',
        maxWidth: '60%',
        paddingLeft: isOdd ? (node.label === 'Java, JavaScript' || node.label === 'Python' ? 96 : 64) : 0,
        paddingRight: isOdd ? 0 : 64,
      }}
    >
      <h2
        className="font-bold tracking-tight"
        style={{
          fontSize: isBaml ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(1.5rem, 3vw, 2.25rem)',
          color: isBaml ? '#8b5cf6' : undefined,
        }}
      >
        {node.label}
      </h2>
      <p
        className="text-sm font-normal leading-loose text-muted-foreground"
        style={{ marginTop: 12, maxWidth: 400 }}
      >
        {node.body}
      </p>
    </div>
  );

  const iconCol = (
    <div
      style={{
        flex: '0 0 40%',
        maxWidth: '40%',
        paddingLeft: isOdd ? 0 : (node.label === 'C, Unix' || node.label === 'TypeScript' ? 36 : 64),
        paddingRight: isOdd ? (node.label === 'C, Unix' || node.label === 'TypeScript' ? 36 : 64) : 0,
        paddingTop: 40,
        paddingBottom: 40,
        display: 'flex',
        justifyContent: 'center',
        // bg-background color to mask the line behind it
        backgroundColor: 'var(--background)',
        marginTop: -20,
      }}
    >
      {image && (
        <div style={{ maxWidth: 400, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={isBaml ? { filter: 'drop-shadow(0 0 12px rgba(139,92,246,0.45))' } : undefined}>
            <LazyParticleImage
              src={image}
              width={350}
              height={350}
              jitter={0.15}
              hoverRepel={5}
              density={6}
              particleSize={3}
              streamDuration={1.2}
              streamStyle={isBaml ? 'radial' : 'cascade'}
              spring={0.02}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl">
      {isBaml && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 75%)',
          }}
        />
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {isOdd ? <>{iconCol}{textCol}</> : <>{textCol}{iconCol}</>}
      </div>
    </div>
  );
}

export function StoryTimeline() {
  return (
    <div className="relative w-full px-4 sm:px-8 md:px-12">
      {/* Vertical line: 1px wide, gradient from near-transparent gray → BAML purple.
          mask-image punches the dash pattern so spacing feels architectural. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={{
          width: 1,
          background: 'linear-gradient(to bottom, rgba(209,213,219,0.9) 0%, rgba(209,213,219,0.9) 55%, rgba(139,92,246,0.9) 80%, rgba(139,92,246,1) 100%)',
          maskImage: 'repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 18px)',
          WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0px, black 4px, transparent 4px, transparent 18px)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
        {timeline.map((node, i) => (
          <div key={node.era} style={node.label === 'BAML' ? { marginTop: 36 } : undefined}>
            <EraCard node={node} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
