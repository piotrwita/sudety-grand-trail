'use client'

import { motion } from 'framer-motion'
import HallOfFameStats from '@/components/HallOfFameStats'
import PreTrailRegistration from '@/components/PreTrailRegistration'
import HallOfFameList from '@/components/HallOfFameList'
import SubmissionForm from '@/components/SubmissionForm'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const HallOfFamePage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 gradient-mesh-overlay opacity-20" />
        <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
            >
              <span className="text-3xl">🏆</span>
            </motion.div>

            <motion.h1 
              className="hero-title mb-6 text-cream"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text-mesh">Hall of Fame</span>
              <span className="block text-fluid-lg font-medium normal-case tracking-normal mt-4 text-cream/80">
                Oficjalne Przejścia Sudety Grand Trail
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-fluid-xl text-cream/80 mb-8 max-w-4xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ci odważni zdobyli pełną <span className="text-accent font-bold">Koronę Sudetów</span> – 
              900 km przez 24 pasma górskie. Dołącz do elitarnego grona zdobywców!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a href="#zglos-przejscie" className="btn-primary text-lg px-10 py-4">
                Zgłoś Swoje Przejście
              </a>
              <a href="#hall-of-fame" className="btn-secondary text-lg px-10 py-4 border-cream/60 text-cream/90 hover:bg-cream/90 hover:text-forest-800">
                Zobacz Zdobywców
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-cream/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-cream/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-cream/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-cream/20" />
      </section>

      {/* Global Stats */}
      <HallOfFameStats />

      {/* Pre-Trail Registration Info */}
      <PreTrailRegistration />

      {/* Hall of Fame List */}
      <HallOfFameList />

      {/* Submission Form */}
      <SubmissionForm />
    </div>
  )
}

export default HallOfFamePage
