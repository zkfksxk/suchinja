import localFont from 'next/font/local';
import { DEFAULT_THEME, MantineColorsTuple, createTheme } from '@mantine/core';

export const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretandard',
  weight: '45 920',
});

const blue: MantineColorsTuple = [
  '#e7f5ff',
  '#d1e6fd',
  '#a1c9f9',
  '#6facf6',
  '#4793f3',
  '#3083f2',
  '#227bf3',
  '#1669d9',
  '#0763cf',
  '#0050ac',
];

export const THEME = createTheme({
  fontFamily: `${pretendard.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  colors: {
    blue,
  },
});
