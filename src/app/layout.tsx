import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Montserrat } from 'next/font/google'
// import Head from 'next/head'
import { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export const metadata: Metadata = {
  title: 'Tom Gallagher',
  description: 'Professional Tinkerer',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-large-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-small-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        {/* <Script
          id="theme-switcher"
          strategy="beforeInteractive"
        >{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}`}</Script> */}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
