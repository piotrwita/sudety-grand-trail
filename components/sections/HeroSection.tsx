'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.05])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/vintage-mountains.svg"
          alt="Sudety Mountains"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 backdrop-blur-sm" />
      </motion.div>

      {/* Parallax Background Logo */}
      <motion.div 
        className="absolute inset-0 z-5"
        style={{ scale: logoScale, opacity: logoOpacity }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px]">
          <Image
            src="/images/logo.png"
            alt="SGT Background Logo"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-full blur-[1px]"
          />
        </div>
      </motion.div>

      {/* Parallax Content Container */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-16 lg:-mt-20"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <motion.h1 
            className="hero-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block">Sudety</span>
            <span className="block gradient-text-mesh">Grand Trail</span>
            <span className="block font-black" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>900 KM</span>
          </motion.h1>
          
          <motion.p 
            className="text-fluid-xl text-cream/90 mb-12 max-w-5xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="gradient-text-mesh font-bold">KORONA SUDETÓW</span> w jednym szlaku! 
            Pierwszy autorski projekt zdobycia najwyższego szczytu każdego z 24 pasm Sudetów. 
            900 km przez 3 kraje – od Jarnołtówka po Ślężę. To nie tylko trasa – to kompletne podbicie Sudetów!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link href="/trail" className="btn-primary text-xl px-12 py-5">
              Rozpocznij Podróż
            </Link>
            <a 
              href="https://mapy.com/s/barusofola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-xl px-12 py-5 border-cream/60 text-cream/90 hover:bg-cream/90 hover:text-forest-800"
            >
              Zobacz Mapę
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-16"
          >
            <div className="text-center">
              <div className="stats-number text-cream">900</div>
              <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Kilometrów</div>
            </div>
            <div className="text-center">
              <div className="stats-number text-cream">24</div>
              <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Pasma</div>
            </div>
            <div className="text-center">
              <div className="stats-number text-cream">3</div>
              <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Kraje</div>
            </div>
            <div className="text-center">
              <div className="stats-number text-cream">30k</div>
              <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Przewyższeń</div>
            </div>
            <div className="text-center">
              <div className="stats-number text-cream">16</div>
              <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Szczytów KGP</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cream/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Decorative vintage elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-forest-700/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default HeroSection