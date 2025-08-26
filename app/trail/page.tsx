'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TrailMap from '@/components/TrailMap'

import TrailDescription from '@/components/TrailDescription'
import TrailMotivation from '@/components/TrailMotivation'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function TrailPage() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-32 bg-gradient-to-br from-forest-800 via-earth-800 to-forest-700">
        <div className="absolute inset-0 bg-vintage-texture opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-earth-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
            >
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </motion.div>

            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl mb-6">
              Poznaj <span className="text-accent">Trasę</span>
            </h1>
            
            <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />
            
            <p className="text-2xl text-cream/90 leading-relaxed font-medium">
              <span className="text-accent font-bold">KORONA SUDETÓW</span> w jednym szlaku! 
              900 km przez 24 pasma i zdobycie najwyższego szczytu każdego z nich. 
              Od Jarnołtówka (Góry Opawskie) po Ślężę – kompletne podbicie Sudetów.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-cream/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-cream/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-cream/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-cream/20" />
      </section>

      {/* Map Section */}
      <TrailMap />



      {/* Trail Description */}
      <TrailDescription />

      {/* Motivation Section */}
      <TrailMotivation />
    </div>
  )
}

