import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
      <Script id="theme-switcher" strategy="beforeInteractive">
        {`
          // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
      </Script>
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 