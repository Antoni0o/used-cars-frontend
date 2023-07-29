import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers';

const poppins = Poppins({ weight: ['200', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Used Cars',
  description: 'Buy used cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-orange-50`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html >
  )
}
