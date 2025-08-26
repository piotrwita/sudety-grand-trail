'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TrailMotivation = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-earth-800">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vintage-mountains.svg"
          alt="Trail motivation background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-earth-800/95 via-forest-800/90 to-earth-900/95" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-forest-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
            >
              <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            <h2 className="hero-title text-4xl md:text-5xl mb-6">
              <span className="text-accent">Motywacja</span> do Działania
            </h2>
            
            <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />
            
            <p className="text-xl text-cream/90 leading-relaxed font-medium max-w-4xl mx-auto">
              To propozycja dla każdego, kto pragnie odkryć Sudety w ich pełni – nie tylko fizycznie, ale też duchowo. 
              Dla wędrowców, marzycieli, samotników, sportowców i ludzi gór.
            </p>
          </motion.div>

          {/* Motivation Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card-vintage p-10 bg-cream/95">
                <h3 className="section-title text-2xl mb-6 text-left">
                  Przekrocz Swoje Granice
                </h3>
                
                <div className="vintage-divider mx-0 mb-6" />
                
                <p className="text-mountain-600 leading-relaxed mb-8 font-medium text-lg">
                  Ten projekt powstał z miłości do gór, ale też z potrzeby stworzenia czegoś własnego – 
                  ścieżki, która nie tylko prowadzi przez szczyty, ale łączy pasma, kraje, emocje i doświadczenia.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="badge-circle w-12 h-12 flex-shrink-0">
                      <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-forest-800 font-bold uppercase tracking-wide">Nieprzewidywalna przygoda</h4>
                      <p className="text-mountain-500 text-sm font-medium">Ale i przemyślana koncepcja łącząca wszystkie pasma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="badge-circle w-12 h-12 flex-shrink-0">
                      <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-forest-800 font-bold uppercase tracking-wide">Na własnych zasadach</h4>
                      <p className="text-mountain-500 text-sm font-medium">We własnym tempie, według własnej filozofii wędrowania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="badge-circle w-12 h-12 flex-shrink-0">
                      <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-forest-800 font-bold uppercase tracking-wide">Korona Sudetów w jednym szlaku</h4>
                      <p className="text-mountain-500 text-sm font-medium">24 najwyższe szczyty plus 16 szczytów KGP</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card-vintage p-8 text-center bg-cream/95">
                  <div className="stats-number text-4xl mb-2">900</div>
                  <div className="text-mountain-600 font-bold uppercase tracking-wide text-sm">Kilometrów</div>
                </div>
                <div className="card-vintage p-8 text-center bg-cream/95">
                  <div className="stats-number text-4xl mb-2">24</div>
                  <div className="text-mountain-600 font-bold uppercase tracking-wide text-sm">Pasma</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="card-vintage p-10 text-center bg-gradient-to-br from-forest-700/20 to-earth-700/20 border-forest-600">
                <h3 className="hero-title text-2xl text-cream mb-6">
                  Gotowy na Przygodę?
                </h3>
                <p className="text-cream/90 mb-8 font-medium text-lg">
                  Zapraszam do zmierzenia się z tym wyzwaniem – na własnych zasadach, we własnym tempie
                </p>
                <div className="space-y-6">
                  <a 
                    href="#" 
                    className="btn-primary w-full inline-block text-lg py-4"
                  >
                    Rozpocznij Swoją Przygodę
                  </a>
                  <div className="flex space-x-4">
                    <a 
                      href="https://mapy.com/s/barusofola" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 text-center border-cream/60 text-cream/90 hover:bg-cream/90 hover:text-forest-800"
                    >
                      Mapa
                    </a>
                    <a 
                      href="https://www.facebook.com/SudetyGrandTrail" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 text-center border-cream/60 text-cream/90 hover:bg-cream/90 hover:text-forest-800"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-cream/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-cream/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-cream/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-cream/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-cream/20" />
    </section>
  )
}

export default TrailMotivation