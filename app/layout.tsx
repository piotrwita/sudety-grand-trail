import type { Metadata } from 'next'
import { Inter, Oswald, Montserrat_Alternates } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { siteConfig } from '@/config/site'

import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-inter',
	display: 'swap',
})

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-oswald',
	display: 'swap',
})

const montserratAlternates = Montserrat_Alternates({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-montserrat-alternates',
	display: 'swap',
})

export const metadata: Metadata = {
	title: `${siteConfig.name} - Odkryj Magię Gór`,
	description:
		'Wyrusz w niezapomnianą podróż przez najpiękniejsze szlaki Sudetów. Przygoda, natura i wyzwanie czekają na Ciebie.',
	keywords: 'sudety, szlaki górskie, trekking, przygoda, natura, góry',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang='pl' className={`${inter.variable} ${oswald.variable} ${montserratAlternates.variable}`}>
			<body className='antialiased'>
				<ScrollProgressBar />
				<Navigation />
				<main className='min-h-screen'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
