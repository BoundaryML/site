import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';
import { Suspense } from 'react';
import { AnalyticsProvider } from '@/context/analytics';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');
export const metadata: Metadata = {
  alternates: {
    canonical: `${baseUrl}/`,
  },
  description:
    'BAML is a tool for developers to build AI applications with type safety and reliability',
  icons: {
    icon: '/favico.ico',
  },
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? 'https://boundaryml.com'
      : 'http://localhost:3000',
  ),
  openGraph: {
    description:
      'BAML is a tool for developers to build AI applications with type safety and reliability',
    locale: 'en_US',
    siteName: 'BAML',
    title: 'BAML',
    type: 'website',
    url: 'https://boundaryml.com',
  },
  title: 'BAML',
  twitter: {
    card: 'summary_large_image',
    creator: '@boundaryml',
    description:
      'Boundary makes it easy to build, test, and develop LLM applications.',
    site: '@boundaryml',
    title: 'Boundary | The best way to get structured data with LLMs',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-foreground relative min-h-screen font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Suspense>
          <AnalyticsProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
            >
              {props.children}
            </ThemeProvider>
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
