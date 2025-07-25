/* eslint-disable @next/next/no-img-element */
/** biome-ignore-all lint/performance/noImgElement: we need to use img for the images */
'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRef } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import TextShimmer from '@/components/magicui/text-shimmer';
import { ScriptCopyBtn } from '../magicui/script-copy-btn';
import { SphereMask } from '../magicui/sphere-mask';
import { HeroTerminalSection } from './hero-terminal-section';
import Link from 'next/link';

// Logo section component
function LogoSection() {
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
    <div className="mt-24 mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Effect works everywhere */}
        <div className="text-center">
          <h3 className="font-medium text-gray-400 mb-6 tracking-wide">
            Works with every LLM provider
          </h3>
          <div className="flex justify-center items-center gap-6">
            {logos.map((logo, index) => (
              <div
                className="w-12 h-12 rounded-lg bg-white/5 border border-border flex items-center justify-center transition-all duration-300 hover:bg-border/50 hover:scale-110"
                key={logo.name}
                style={{
                  animationDelay: `${900 + index * 100}ms`,
                }}
              >
                <img
                  alt={logo.alt}
                  className="w-6 h-6 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src={logo.url}
                />
              </div>
            ))}
          </div>
          {/* <p className="text-sm text-gray-500 mt-4">and more</p> */}
        </div>

        {/* And with everything */}
        <div className="text-center">
          <h3 className="font-medium text-gray-400 mb-6 tracking-wide">
            And every language
          </h3>
          <div className="flex justify-center items-center gap-6">
            {frameworks.map((framework, index) => (
              <div
                className="w-12 h-12 rounded-lg bg-white/5 border border-border flex items-center justify-center transition-all duration-300 hover:bg-border/50 hover:scale-110"
                key={framework.name}
                style={{
                  animationDelay: `${900 + index * 100}ms`,
                }}
              >
                <img
                  alt={framework.alt}
                  className="w-6 h-6 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-100px', once: true });
  // biome-ignore assist/source/useSortedKeys: needs to be in this order
  const commandMap = {
    python: 'uv add baml-py && uv run baml-cli init',
    typescript: 'npm install @boundaryml/baml && npx baml-cli init',
    ruby: 'bundle add baml && bundle exec baml-cli init',
    go: 'go install github.com/boundaryml/baml/go/baml-cli@latest && baml-cli init',
  };
  return (
    <section
      className="relative mx-auto mt-24 max-w-[80rem] px-6 text-center md:px-8"
      id="hero"
    >
      <Link href="/playground">
      <div className="backdrop-filter-[12px] inline-flex h-10 items-center justify-between rounded-full border border-border bg-accent/20 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-accent/40 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span className="text-sm">✨ Try BAML online</span>{' '}
          <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left column - Text content */}
        <div className="text-left">
          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            The First Language for Building Agents
          </h1>
          <p className="mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            React changed the way we think about UIs
            <br />
            <span className="text-secondary font-bold">BAML</span> changes the
            way you think about AI
          </p>
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 ease-in-out [--animation-delay:600ms]">
            <ScriptCopyBtn
              className="block"
              codeLanguage="bash"
              commandMap={commandMap}
              darkTheme="none"
              lightTheme="none"
              showMultiplePackageOptions={true}
            />
            {/* <span>Get Started for free </span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" /> */}
          </div>
        </div>

        {/* Right column - Hero image */}
        <div
          className="relative animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px]"
          ref={ref}
        >
          <div
            className={`rounded-xl border border-border bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--secondary),var(--secondary),transparent_40%)] ${
              inView ? 'before:animate-image-glow' : ''
            }`}
          >
            <BorderBeam
              colorFrom="var(--color-one)"
              colorTo="var(--secondary)"
              delay={11}
              duration={12}
              size={200}
            />
            <div className="w-full text-left relative z-10">
              <div className="w-full max-w-full min-h-[360px] rounded-lg overflow-hidden">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[360px] relative z-10"
                  frameBorder="0"
                  src="https://www.youtube.com/embed/gxckvkNg6KM"
                  title="BoundaryML Demo"
                />
              </div>
            </div>
            {/* <img
              alt="Hero Hero"
              className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
              src="/hero-dark.png"
            />
            <img
              alt="Hero Hero"
              className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
              src="/hero-light.png"
            /> */}
            {/* <HeroTerminalSection /> */}
          </div>
        </div>
      </div>

      <LogoSection />
      <SphereMask />
    </section>
  );
}
