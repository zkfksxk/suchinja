import type { Metadata } from 'next';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { THEME } from '@/shared/common/theme';
import { SITE_CONFIG } from '@/shared/content/swimming/constant';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | 수친자 테스트',
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    type: 'website',
  },
  icons: {
    icon: 'favicon.ico',
  },
  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={THEME}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
