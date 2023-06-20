"use client";
import { Header } from '@/components/Header'
import { Nabvar } from '@/components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Nabvar />
          {children}
        </ThemeProvider>
        
        </body>
    </html>
  )
}
