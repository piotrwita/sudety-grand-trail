import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sudety Grand Trail - Odkryj Magię Gór',
  description: 'Wyrusz w niezapomnianą podróż przez najpiękniejsze szlaki Sudetów. Przygoda, natura i wyzwanie czekają na Ciebie.',
  keywords: 'sudety, szlaki górskie, trekking, przygoda, natura, góry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <ScrollProgressBar />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

