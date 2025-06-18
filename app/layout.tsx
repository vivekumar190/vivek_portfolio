import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software Developer Portfolio',
  description: 'Personal portfolio showcasing my software development projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeSwitcher />
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 