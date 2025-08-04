'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { usePostHog } from 'posthog-js/react';

export function PosthogWebVitals() {
  const posthog = usePostHog();

  useReportWebVitals((metric) => {
    posthog.capture(metric.name, metric);
  });

  return null;
}

export { usePostHog } from 'posthog-js/react';
