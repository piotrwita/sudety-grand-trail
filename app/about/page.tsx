'use client'

import { motion } from 'framer-motion'
import AboutCreator from '@/components/AboutCreator'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-earth-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 gradient-mesh-overlay opacity-20" />
        <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />
        


        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>


            <motion.h1 
              className="hero-title mb-6 text-cream"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Poznaj <span className="gradient-text-mesh">Człowieka</span>
              <span className="block text-fluid-lg font-medium normal-case tracking-normal mt-4 text-cream/80">
                za Sudety Grand Trail
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-fluid-xl text-cream/80 mb-8 max-w-3xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Historia zwykłego chłopaka z Łodzi, który postanowił użyć własnych nóg, 
              by zmieniać świat na lepszy.
            </motion.p>
          </motion.div>
        </div>


      </section>

      {/* About Creator Section */}
      <AboutCreator />
    </div>
  )
}

export default AboutPage
