'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
		<section className='section-padding bg-gradient-to-br from-mountain-100 to-cream relative overflow-hidden'>
			{/* Delikatne tło w stylu szlaku górskiego */}
			<div className='absolute inset-0 opacity-[0.08]'>
				<Image
					src='/images/vintage-mountains.svg'
					alt=''
					fill
					className='object-cover'
					aria-hidden='true'
				/>
			</div>
			{/* Subtelny gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-forest-200/30 via-transparent to-earth-200/30 pointer-events-none' />
			
			<div className='container-custom relative z-10'>
				<motion.div
					initial='initial'
					whileInView='animate'
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className='mb-8'>
					<motion.div variants={fadeInUp} className='text-center mb-8'>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-700 to-earth-700 rounded-full mb-6 shadow-vintage-xl border-4 border-cream/20'>
							{/* Żarówka - ikona pomysłu/inspiracji */}
							<svg className='w-8 h-8 text-cream' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
								/>
							</svg>
						</motion.div>
						<motion.h2 className='section-title text-4xl md:text-5xl mb-3'>
							<span className='text-gradient'>Geneza Szlaku</span>
						</motion.h2>
						<div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-forest-700 to-transparent mx-auto mb-2' />
					</motion.div>

					<motion.div variants={fadeInUp} className='max-w-5xl mx-auto'>
						<div className='p-8 lg:p-12 relative'>
							<div className='space-y-10 text-lg text-mountain-700 leading-relaxed'>
								<div className='text-center'>
									<p className='text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto'>
										<span className="bg-gradient-to-r from-forest-700 via-accent to-earth-700 bg-clip-text text-transparent font-bold drop-shadow-sm">SUDETY GRAND TRAIL</span> to autorski projekt długodystansowego szlaku górskiego, który narodził się z pasji, doświadczenia i… niedosytu.
									</p>
								</div>
								
								<blockquote className='border-l-4 border-forest-700 pl-10 py-8 bg-forest-50/50 rounded-r-lg my-12 max-w-3xl mx-auto'>
									<p className='text-lg md:text-xl text-forest-800 italic leading-relaxed'>
										Choć Sudety zostały przeze mnie przebyte już czterokrotnie,<br />
										żaden z istniejących szlaków nie poprowadził mnie kompleksowo<br />
										przez to niezwykle różnorodne pasmo.
									</p>
								</blockquote>

								<p className='text-xl md:text-2xl font-medium leading-relaxed text-center'>
									Właśnie dlatego powstała idea stworzenia nowej, kompletnej trasy,<br />
									czyli szlaku, który stanie się nie tylko zwieńczeniem moich sudeckich wędrówek, ale i nowym wyzwaniem dla wszystkich miłośników gór.
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<FeatureCards />
			</div>
		</section>
	)
}

export default WhyChooseSection
