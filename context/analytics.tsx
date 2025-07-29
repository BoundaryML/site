'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { PropsWithChildren } from 'react';
import { env } from '@/lib/env';
import {
  PostHogPageView,
  PostHogProvider,
  PosthogWebVitals,
} from '../lib/posthog';
import { WebVitals } from '../lib/web-vitals';

const isProduction = env.NODE_ENV === 'production';

export function AnalyticsProvider(props: PropsWithChildren) {
  return (
    <>
      {isProduction && (
        <PostHogProvider>
          <PosthogWebVitals />
          <PostHogPageView />
          <WebVitals />
          {props.children}
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      )}
      {!isProduction && props.children}
    </>
  );
}
