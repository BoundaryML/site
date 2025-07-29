'use client';

import { motion } from 'motion/react';
import type { Post } from '@/app/blog/_lib/get-posts';
import { DotPattern } from '@/components/magicui/dot-pattern';
import Particles from '@/components/magicui/particles';
import { cn } from '@/lib/utils';

interface BlogCoverImageProps {
  post: Post;
  className?: string;
}

// Generate a consistent color palette based on post title
function generateColorPalette(title: string) {
  const hash = title.split('').reduce((acc, char) => {
    const newAcc = (acc << 5) - acc + char.charCodeAt(0);
    return newAcc & newAcc;
  }, 0);

  const colorPalettes = [
    ['indigo', 'purple', 'pink'], // Purple to pink
    ['blue', 'cyan', 'emerald'], // Blue to teal to green
    ['amber', 'red', 'purple'], // Orange to red to purple
    ['emerald', 'blue', 'indigo'], // Green to blue to purple
    ['pink', 'amber', 'emerald'], // Pink to orange to green
    ['purple', 'blue', 'cyan'], // Purple to blue to teal
  ];

  return colorPalettes[Math.abs(hash) % colorPalettes.length];
}

// Generate a pattern type based on post tags and title
function getPatternType(tags: string[], title: string) {
  const tag = tags[0]?.toLowerCase() || '';
  const titleLower = title.toLowerCase();

  if (
    tag.includes('ai') ||
    tag.includes('ml') ||
    tag.includes('machine') ||
    titleLower.includes('ai') ||
    titleLower.includes('llm')
  ) {
    return 'particles';
  }
  if (
    tag.includes('web') ||
    tag.includes('frontend') ||
    tag.includes('ui') ||
    tag.includes('react') ||
    tag.includes('next')
  ) {
    return 'dots';
  }
  if (
    tag.includes('tutorial') ||
    tag.includes('guide') ||
    tag.includes('how') ||
    titleLower.includes('tutorial')
  ) {
    return 'gradient';
  }
  if (
    tag.includes('announcement') ||
    tag.includes('release') ||
    titleLower.includes('announcing')
  ) {
    return 'animated';
  }
  if (
    tag.includes('workflow') ||
    tag.includes('integration') ||
    titleLower.includes('workflow')
  ) {
    return 'flowing';
  }

  return 'gradient'; // default
}

// Convert Tailwind color names to CSS classes
function getTailwindGradientClasses(colors: string[]) {
  const gradientMap: Record<string, string> = {
    amber: 'from-amber-500 to-amber-600',
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    emerald: 'from-emerald-500 to-emerald-600',
    indigo: 'from-indigo-500 to-indigo-600',
    pink: 'from-pink-500 to-pink-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
  };

  return {
    primary: gradientMap[colors[0]] || 'from-indigo-500 to-indigo-600',
    primaryColor: colors[0],
    secondary: gradientMap[colors[1]] || 'from-purple-500 to-purple-600',
    secondaryColor: colors[1],
    tertiary: gradientMap[colors[2]] || 'from-pink-500 to-pink-600',
    tertiaryColor: colors[2],
  };
}

export function BlogCoverImage({ post, className }: BlogCoverImageProps) {
  const colors = generateColorPalette(post.title);
  const patternType = getPatternType(post.tags, post.title);
  const gradientClasses = getTailwindGradientClasses(colors);

  const renderPattern = () => {
    switch (patternType) {
      case 'particles':
        return (
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientClasses.primary} opacity-20`}
            />
            <Particles
              className="absolute inset-0"
              color={`var(--${gradientClasses.primaryColor}-500)`}
              ease={50}
              quantity={50}
              size={1}
              staticity={30}
            />
          </div>
        );
      case 'dots':
        return (
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientClasses.secondary} opacity-30`}
            />
            <DotPattern
              className="opacity-40 text-white"
              cr={1}
              cx={1}
              cy={1}
              glow={true}
              height={20}
              width={20}
            />
          </div>
        );
      case 'animated':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  `linear-gradient(45deg, var(--${gradientClasses.primaryColor}-500), var(--${gradientClasses.secondaryColor}-500))`,
                  `linear-gradient(45deg, var(--${gradientClasses.secondaryColor}-500), var(--${gradientClasses.tertiaryColor}-500))`,
                  `linear-gradient(45deg, var(--${gradientClasses.tertiaryColor}-500), var(--${gradientClasses.primaryColor}-500))`,
                ],
              }}
              className="absolute inset-0"
              transition={{
                duration: 8,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <DotPattern
              className="opacity-20 text-white"
              cr={1.5}
              cx={1}
              cy={1}
              glow={true}
              height={30}
              width={30}
            />
          </div>
        );
      case 'flowing':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientClasses.primary} opacity-10`}
            />
            <motion.div
              animate={{
                background: [
                  `radial-gradient(circle at 20% 80%, var(--${gradientClasses.primaryColor}-400) 0%, transparent 50%)`,
                  `radial-gradient(circle at 80% 20%, var(--${gradientClasses.secondaryColor}-400) 0%, transparent 50%)`,
                  `radial-gradient(circle at 40% 40%, var(--${gradientClasses.tertiaryColor}-400) 0%, transparent 50%)`,
                  `radial-gradient(circle at 20% 80%, var(--${gradientClasses.primaryColor}-400) 0%, transparent 50%)`,
                ],
              }}
              className="absolute inset-0"
              transition={{
                duration: 12,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <Particles
              className="absolute inset-0"
              color={`var(--${gradientClasses.secondaryColor}-500)`}
              ease={60}
              quantity={30}
              size={0.8}
              staticity={40}
            />
          </div>
        );
      default:
        return (
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientClasses.primary} opacity-20`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-tl ${gradientClasses.secondary} opacity-10`}
            />
            <DotPattern
              className="opacity-40 text-white"
              cr={1}
              cx={1}
              cy={1}
              height={25}
              width={25}
            />
          </div>
        );
    }
  };

  return (
    <div
      className={cn('relative h-48 overflow-hidden rounded-t-lg', className)}
    >
      {renderPattern()}

      {/* Overlay with post info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Floating elements based on post type */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category badge */}
            <div className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              {post.tags[0]}
            </div>

            {/* Reading time */}
            <div className="text-sm opacity-80">{post.readingTime}</div>
          </motion.div>
        </div>
      </div>

      {/* Animated accent elements */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1],
        }}
        className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${gradientClasses.primaryColor}-500`}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 2, 1],
        }}
        className={`absolute bottom-8 left-4 w-1 h-1 rounded-full bg-${gradientClasses.secondaryColor}-500`}
        transition={{
          delay: 1,
          duration: 3,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </div>
  );
}
