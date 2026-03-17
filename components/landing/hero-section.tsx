/* eslint-disable @next/next/no-img-element */
/** biome-ignore-all lint/performance/noImgElement: we need to use img for the images */
'use client';

import { useTheme } from 'next-themes';
import type { LumaEvent } from '@/lib/luma';
import { ScriptCopyBtn } from '../magicui/script-copy-btn';
import { SphereMask } from '../magicui/sphere-mask';
import { HeroPlaygroundMockup } from './hero-playground-mockup';
import { NextEpisodeLink } from './next-episode-link';

// Logo section component - exported for use after FeatureSection on homepage
export function LogoSection() {
  const theme = useTheme();
  const isDark = theme.theme === 'dark';

  const logos = [
    {
      alt: 'OpenAI',
      name: 'OpenAI',
      url: `https://cdn.brandfetch.io/openai.com/w/512/h/512/theme/${isDark ? 'light' : 'dark'}/symbol?c=1idQbe1D_SxVi_WjGRi`,
    },
    {
      alt: 'Anthropic',
      name: 'Anthropic',
      url: `https://cdn.brandfetch.io/anthropic.com/w/512/h/512/theme/${isDark ? 'light' : 'dark'}/symbol?c=1idQbe1D_SxVi_WjGRi`,
    },
    {
      alt: 'Google',
      name: 'Google',
      url: 'https://cdn.brandfetch.io/google.com/w/501/h/512/symbol?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Microsoft',
      name: 'Microsoft',
      url: 'https://cdn.brandfetch.io/microsoft.com/w/512/h/512/symbol?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Meta',
      name: 'Meta',
      url: 'https://cdn.brandfetch.io/meta.com/w/400/h/400?c=1idQbe1D_SxVi_WjGRi',
    },
  ];

  const frameworks = [
    {
      alt: 'Typescript',
      name: 'Typescript',
      url: 'https://cdn.brandfetch.io/typescriptlang.org/w/256/h/256?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Python',
      name: 'Python',
      url: 'https://cdn.brandfetch.io/python.org/w/467/h/512/logo?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Go',
      name: 'Go',
      url: 'https://cdn.brandfetch.io/go.dev/w/512/h/192/logo?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Ruby',
      name: 'Ruby',
      url: 'https://cdn.brandfetch.io/ruby-lang.org/w/512/h/511/logo?c=1idQbe1D_SxVi_WjGRi',
    },
    {
      alt: 'Java',
      name: 'Java',
      url: 'https://cdn.brandfetch.io/java.com/w/379/h/512/logo?c=1idQbe1D_SxVi_WjGRi',
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 sm:px-0">
        {/* Effect works everywhere */}
        <div className="text-center">
          <p className="font-medium text-muted-foreground mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">
            Works with every LLM provider
          </p>
          <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap">
            {logos.map((logo, index) => (
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-border flex items-center justify-center transition-all duration-300 hover:bg-border/50 hover:scale-110"
                key={logo.name}
                style={{
                  animationDelay: `${900 + index * 100}ms`,
                }}
              >
                <img
                  alt={logo.alt}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={logo.url}
                />
              </div>
            ))}
          </div>
          {/* <p className="text-sm text-gray-500 mt-4">and more</p> */}
        </div>

        {/* And with everything */}
        <div className="text-center">
          <p className="font-medium text-muted-foreground mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">
            And every language
          </p>
          <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap">
            {frameworks.map((framework, index) => (
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-border flex items-center justify-center transition-all duration-300 hover:bg-border/50 hover:scale-110"
                key={framework.name}
                style={{
                  animationDelay: `${900 + index * 100}ms`,
                }}
              >
                <img
                  alt={framework.alt}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={framework.url}
                />
              </div>
            ))}
          </div>
          {/* <p className="text-sm text-gray-500 mt-4">and more</p> */}
        </div>
      </div>
    </div>
  );
}

interface HeroSectionProps {
  nextEvent: LumaEvent | null;
}

export default function HeroSection({ nextEvent }: HeroSectionProps) {
  // biome-ignore assist/source/useSortedKeys: needs to be in this order
  const commandMap = {
    python: 'uv add baml-py && uv run baml-cli init',
    typescript: 'npm install @boundaryml/baml && npx baml-cli init',
    ruby: 'bundle add baml && bundle exec baml-cli init',
    go: 'go install github.com/boundaryml/baml/baml-cli@latest && baml-cli init',
    other: (
      <a
        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium underline-offset-4 hover:bg-accent hover:text-accent-foreground"
        href="https://docs.boundaryml.com/guide/installation-language/rest-api-other-languages"
      >
        Install BAML
      </a>
    ),
  };

  return (
    <section
      className="relative mt-12 sm:mt-24 w-full text-left"
      id="hero"
    >
      {/* Content above the sphere mask - ensure it stacks in front */}
      <div className="relative z-10">
      {/* Intro block - left aligned, constrained width */}
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6 md:px-8">
        {/* <NextEpisodeLink nextEvent={nextEvent} /> */}
        <div className="mt-8 sm:mt-12">
          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-4 sm:py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            The first language designed with LLMs in mind
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            The future of code is{' '}
            <span className="text-secondary font-semibold">
              cognitive.
            </span>
          </p>
        </div>
      </div>

      {/* Playground - full width of viewport, consumes most of viewport height */}
      <div className="mt-8 w-full sm:mt-10">
        <div className="min-h-[75vh] w-full px-4 sm:px-6 md:px-8">
          <HeroPlaygroundMockup />
        </div>
      </div>

      {/* Installation - under playground */}
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6 md:px-8 mt-8 sm:mt-10">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] rounded-xl border-2 border-violet-500/50 bg-violet-500/5 px-5 py-4 ring-2 ring-violet-500/20 sm:px-6 sm:py-5 dark:border-violet-400/50 dark:ring-violet-400/20">
          <p className="mb-3 text-sm font-medium text-foreground sm:mb-4 sm:text-base">
            Install BAML in one command
          </p>
          <p className="mb-4 text-xs text-muted-foreground sm:text-sm">
            Pick your language and run the command below. BAML runs in your repo and generates type-safe clients for your app.
          </p>
          <ScriptCopyBtn
            className="block w-full max-w-xl"
            codeLanguage="bash"
            commandMap={commandMap}
            darkTheme="none"
            lightTheme="none"
            showMultiplePackageOptions={true}
          />
        </div>
      </div>
      </div>
      <SphereMask />
    </section>
  );
}
