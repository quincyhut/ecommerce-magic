import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import ContextWrapper from '@/components/ContextWrapper';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';

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
      <body className={inter.className}>
        <Navbar />
        <ContextWrapper children={children} />
        <Footer />
      </body>
    </html>
  )
}
