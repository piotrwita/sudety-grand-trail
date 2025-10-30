'use client'

import { motion } from 'framer-motion'
import FeatureCards from '../FeatureCards'

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const WhyChooseSection = () => {
	return (
		<section className='section-padding bg-gradient-to-br from-mountain-100 to-cream'>
			<div className='container-custom'>
				<motion.div
					initial='initial'
					whileInView='animate'
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className='text-center mb-16'>
					<motion.h2 variants={fadeInUp} className='section-title text-4xl md:text-5xl mb-6'>
						Czym jest <span className='text-gradient'>Sudety Grand Trail</span>?
					</motion.h2>

					<div className='vintage-divider' />

					<motion.p
						variants={fadeInUp}
						className='text-xl text-mountain-600 max-w-5xl mx-auto font-medium leading-relaxed'>
						Pierwszy w Polsce autorski projekt długodystansowego szlaku górskiego, który narodził się z pasji i
						niedosytu. To koncepcyjny szlak łączący wszystkie pasma górskie Sudetów w jedną logiczną i wymagającą
						całość. Szlak stworzony dla tych, którzy szukają czegoś więcej niż tylko oznakowanej drogi.
					</motion.p>
				</motion.div>

				<FeatureCards />
			</div>
		</section>
	)
}

export default WhyChooseSection
