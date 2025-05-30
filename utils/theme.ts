import { createTheme, DEFAULT_THEME } from '@mantine/core';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretandard',
  weight: '45 920',
});

export const THEME = createTheme({
  fontFamily: pretendard.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${pretendard.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
});
