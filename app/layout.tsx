import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  description:
    'BAML is a tool for developers to build AI applications with type safety and reliability',
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? 'https://boundaryml.com'
      : 'http://localhost:3000',
  ),
  openGraph: {
    description:
      'BAML is a tool for developers to build AI applications with type safety and reliability',
    siteName: 'BAML',
    title: 'BAML',
    url: 'https://boundaryml.com',
  },
  title: 'BAML',
  twitter: {
    card: 'summary_large_image',
    creator: '@boundaryml',
    site: '@boundaryml',
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
          {/* <AnalyticsProviders identifyUser> */}
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {props.children}
          </ThemeProvider>
          {/* </AnalyticsProviders> */}
        </Suspense>
      </body>
    </html>
  );
}
