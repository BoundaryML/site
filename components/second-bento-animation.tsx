/** biome-ignore-all lint/performance/noImgElement: no need */
import { Icons } from '@/components/icons';
import { OrbitingCircles } from '@/components/magicui/orbiting-circle';

function getBrandLogoUrl(domain: string) {
  return `https://cdn.brandfetch.io/${domain}/w/60/h/60?c=1idGJK6TyS2PPBb74bA`;
}

export function SecondBentoAnimation() {
  // Brand logo URLs using brandfetch.io

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20" />

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-primary-foreground border border-primary/50 p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <Icons.logo className="fill-white size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            iconSize={60}
            index={0}
            radius={100}
            reverse
            speed={1}
          >
            <img
              alt="OpenAI logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('openai.com')}
            />
            <img
              alt="Anthropic logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('anthropic.com')}
            />
            <img
              alt="Google logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('google.com')}
            />
          </OrbitingCircles>

          <OrbitingCircles iconSize={60} index={1} speed={0.5}>
            <img
              alt="Microsoft logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('microsoft.com')}
            />
            <img
              alt="Meta logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('meta.com')}
            />
            <img
              alt="Typescript logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('typescriptlang.org')}
            />
          </OrbitingCircles>

          <OrbitingCircles
            iconSize={60}
            index={2}
            radius={230}
            reverse
            speed={0.5}
          >
            <img
              alt="Python logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('python.org')}
            />
            <img
              alt="Go logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('go.dev')}
            />
            <img
              alt="Ruby logo"
              className="size-12 rounded-full"
              src={getBrandLogoUrl('ruby-lang.org')}
            />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
