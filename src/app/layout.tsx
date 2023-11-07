import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import ContextWrapper from '@/components/ContextWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '11VERSE',
  description: 'Best place to glammer your beuty.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-center items-center ${inter.className}`}>
        <ContextWrapper>
          {children}
        </ContextWrapper>
      </body>
    </html>
  )
}
