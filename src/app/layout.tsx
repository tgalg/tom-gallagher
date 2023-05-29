import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { Montserrat } from 'next/font/google'
// import Head from 'next/head'
import { Metadata } from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export const metadata: Metadata = {
  title: 'Tom Gallagher',
  description: 'Tinkering Away',
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
