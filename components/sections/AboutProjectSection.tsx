'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const AboutProjectSection = () => {
	return (
		<section className='section-padding bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700 relative overflow-hidden'>
			{/* Decorative background elements */}
			<div className='absolute inset-0 bg-vintage-texture opacity-5' />
			<div className='absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl' />
			<div className='absolute bottom-20 left-20 w-48 h-48 bg-cream/5 rounded-full blur-2xl' />
			<div className='container-custom relative z-10'>
				<motion.div
					initial='initial'
					whileInView='animate'
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
					className='max-w-6xl mx-auto'>
					{/* Header */}
					<motion.div variants={fadeInUp} className='text-center mb-16 relative'>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-earth-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20'>
							<svg className='w-8 h-8 text-cream' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
						</motion.div>

						<h2 className='hero-title text-4xl md:text-5xl mb-6 text-cream'>
							O <span className='text-accent'>Projekcie</span>
						</h2>

						<div className='vintage-divider bg-gradient-to-r from-accent to-cream' />
					</motion.div>

					{/* Main Content */}
					<div className='space-y-12'>
						{/* Koncepcja Szlaku */}
						<motion.div variants={fadeInUp} className='card-vintage p-8 lg:p-12 bg-forest-800/50 backdrop-blur-sm border border-cream/10'>
							<div className='space-y-6 text-cream/90 leading-relaxed text-lg'>
								<p>
									<span className='text-accent font-bold'>SUDETY GRAND TRAIL</span> to nie tylko kolejna linia na mapie. 
									To koncepcyjny szlak, który łączy wszystkie pasma górskie Sudetów w jedną logiczną i wymagającą całość.
								</p>
								<p>
									Mierzy <span className='font-bold text-cream'>900 kilometrów</span> długości, 
									<span className='font-bold text-cream'> niespełna 30 000 metrów przewyższeń</span>, a także przebiega przez{' '}
									<span className='font-bold text-cream'>24 pasma</span>, prowadząc przy tym przez{' '}
									<span className='font-bold text-cream'>trzy kraje</span>: Polskę, Czechy, zahaczając także o Niemcy.
								</p>
								<p>
									Początek trasy znajduje się w <span className='font-bold text-cream'>Jarnołtówku (Góry Opawskie)</span>, a finał – 
									symboliczny i majestatyczny – pod <span className='font-bold text-cream'>Ślężą</span>, 
									górą o duchowym znaczeniu, tuż pod Wrocławiem.
								</p>
							</div>
						</motion.div>

						{/* Cel Szlaku */}
						<motion.div variants={fadeInUp} className='card-vintage p-8 lg:p-12 bg-accent/10 backdrop-blur-sm border border-accent/30'>
							<div className='space-y-4 text-cream/90 leading-relaxed text-lg'>
								<p>
									Celem szlaku jest <span className='font-bold text-cream'>kompletne przejście Sudetów</span>: zdobycie wszystkich 
									najwyższych szczytów każdego pasma, a także – po Polskiej stronie – wszystkich{' '}
									<span className='font-bold text-cream'>16 sudeckich szczytów należących do Korony Gór Polski</span>.
								</p>
								<p className='text-xl font-medium italic text-cream border-l-4 border-accent pl-6 py-2'>
									W wielu przypadkach oznacza to podwójne wejścia – na faktyczny najwyższy punkt i na szczyt koronny, 
									jeśli różnią się od siebie. To czyni trasę jeszcze bardziej wymagającą i wyjątkową.
								</p>
							</div>
						</motion.div>

						{/* Legendarny Szlak */}
						<motion.div variants={fadeInUp} className='card-vintage p-8 lg:p-12 bg-forest-800/50 backdrop-blur-sm border border-cream/10'>
							<div className='space-y-4 text-cream/90 leading-relaxed text-lg'>
								<p>
									Na trasie nie zabraknie legendarnych szczytów Sudetów – od majestatycznej{' '}
									<span className='font-bold text-cream'>Śnieżki</span>, najwyższego wierzchołka całego pasma, 
									przez potężny <span className='font-bold text-cream'>Śnieżnik</span> i dumnie górującego nad 
									Jesionikami <span className='font-bold text-cream'>Pradziada</span>, po charakterystyczną{' '}
									<span className='font-bold text-cream'>Wielką Sowę</span>, skalny labirynt{' '}
									<span className='font-bold text-cream'>Szczelińca Wielkiego</span>, graniczną{' '}
									<span className='font-bold text-cream'>Biskupią Kopę</span> i mistyczną{' '}
									<span className='font-bold text-cream'>Ślężę</span>.
								</p>
								<p className='text-xl font-medium text-cream'>
									A to dopiero początek tej górskiej mozaiki.
								</p>
							</div>
						</motion.div>

						{/* Filozofia */}
						<motion.div variants={fadeInUp} className='card-vintage p-8 lg:p-12 bg-forest-800/50 backdrop-blur-sm border border-cream/10'>
							<div className='space-y-6 text-cream/90 leading-relaxed text-lg'>
								<p>
									Ten projekt powstał z <span className='font-bold text-cream'>miłości do gór</span>, ale też z potrzeby 
									stworzenia czegoś własnego – ścieżki, która nie tylko prowadzi przez szczyty, ale{' '}
									<span className='font-bold text-cream'>łączy pasma, kraje, emocje i doświadczenia</span>.
								</p>
								<p>
									<span className='text-accent font-bold'>SUDETY GRAND TRAIL</span> to propozycja dla każdego, kto pragnie 
									odkryć Sudety w ich pełni – nie tylko fizycznie, ale też duchowo. Dla wędrowców, marzycieli, samotników, 
									sportowców i ludzi gór.
								</p>
							</div>
						</motion.div>

						{/* Zakończenie */}
						<motion.div variants={fadeInUp} className='text-center'>
							<div className='card-vintage p-8 lg:p-12 bg-gradient-to-br from-accent/20 to-earth-700/20 backdrop-blur-sm border border-accent/40'>
								<p className='text-2xl md:text-3xl font-bold italic leading-relaxed mb-4 text-cream'>
									To nieprzewidywalna przygoda, ale i przemyślana koncepcja.
								</p>
								<p className='text-xl text-cream/90'>
									Zapraszam do zmierzenia się z tym wyzwaniem – na własnych zasadach, we własnym tempie.
								</p>
							</div>
						</motion.div>
					</div>

					{/* Corner decorative elements */}
					<div className='absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-cream/20' />
					<div className='absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-cream/20' />
					<div className='absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-cream/20' />
					<div className='absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-cream/20' />
				</motion.div>
			</div>
		</section>
	)
}

export default AboutProjectSection

