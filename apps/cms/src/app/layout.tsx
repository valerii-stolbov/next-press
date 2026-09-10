import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | NextPress: CMS',
    default: 'NextPress: CMS',
  },
  description: 'Content management system on NextPress',
  appleWebApp: {
    capable: true,
    title: 'NextPress: CMS',
    statusBarStyle: 'default',
  },
  icons: [
    { url: '/favicon-16x16.png', rel: 'icon', type: 'image/png', sizes: '16x16' },
    { url: '/favicon-32x32.png', rel: 'icon', type: 'image/png', sizes: '32x32' },
  ],
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
