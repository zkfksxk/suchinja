import type { Metadata } from 'next';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { SITE_CONFIG } from '@/shared/constant';
import { THEME } from '@/shared/theme';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | 수친자 테스트',
    default: SITE_CONFIG.title,
  },
  description: '개발 지식과 경험을 공유하는 블로그입니다.',
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
