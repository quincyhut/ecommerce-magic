import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

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
      <body className={`flex flex-col justify-center items-center ${inter.className}`}>
        <div className='py-1 px-4 w-full md:w-[75vw]'>
          <Navbar />
        </div>
        <ContextWrapper children={children} />
        <Footer />
      </body>
    </html>
  )
}
