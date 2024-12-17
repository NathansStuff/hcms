import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/features/common/Footer';
import Header from '@/features/common/Header';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'A sample project showcasing the power of Sanity CMS and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* Favicon */}
      <link
        rel='icon'
        href='/logo/favicon.svg'
      />
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
