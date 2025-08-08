import posthog from 'posthog-js';
import { env } from '@/lib/env';

posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  debug: process.env.NODE_ENV === 'development',
  defaults: '2025-05-24',
});
