'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PreTrailRegistration = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/10 to-earth/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-600 to-earth-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
          >
            <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </motion.div>

          <h2 className="section-title text-4xl md:text-5xl mb-6">
            Zanim <span className="text-gradient">Wyruszysz</span>
          </h2>
          
          <div className="vintage-divider" />
          
          <p className="text-xl text-mountain-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Planujesz podbój Korony Sudetów? Najpierw zgłoś swoją próbę przejścia 
            i otrzymaj darmowy tracker GPS do śledzenia postępów!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="section-title text-2xl mb-8 text-left">
              Proces Przejścia SGT
            </h3>

            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 rounded-full flex items-center justify-center text-cream font-bold text-lg shadow-vintage flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-forest-800 text-lg mb-2">
                  Zgłoś Próbę Przejścia
                </h4>
                <p className="text-mountain-600 leading-relaxed">
                  Przed startem wypełnij formularz zgłoszenia próby przejścia. 
                  Otrzymasz darmowy tracker GPS i będziesz widoczny na mapie live tracking.
                </p>
                <Link 
                  href="/live#tracker-form" 
                  className="inline-flex items-center text-accent font-bold mt-2 hover:text-accent-dark transition-colors"
                >
                  Zgłoś próbę przejścia
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-earth-600 to-earth-700 rounded-full flex items-center justify-center text-cream font-bold text-lg shadow-vintage flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-forest-800 text-lg mb-2">
                  Pokonaj Szlak
                </h4>
                <p className="text-mountain-600 leading-relaxed">
                  Wyrusz na trasę z trackerem GPS. Twoje postępy będą widoczne 
                  na żywo dla wszystkich obserwujących. Zdobądź wszystkie 24 najwyższe szczyty pasm Sudetów.
                </p>
                <Link 
                  href="/trail" 
                  className="inline-flex items-center text-accent font-bold mt-2 hover:text-accent-dark transition-colors"
                >
                  Poznaj trasę
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-600 rounded-full flex items-center justify-center text-cream font-bold text-lg shadow-vintage flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-forest-800 text-lg mb-2">
                  Zgłoś Ukończenie
                </h4>
                <p className="text-mountain-600 leading-relaxed">
                  Po ukończeniu szlaku zgłoś swoje przejście z materiałami (zdjęcia, GPX). 
                  Po weryfikacji dołączysz do oficjalnego Hall of Fame!
                </p>
                <a 
                  href="#zglos-przejscie" 
                  className="inline-flex items-center text-accent font-bold mt-2 hover:text-accent-dark transition-colors"
                >
                  Formularz ukończenia
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="card-vintage p-10 bg-gradient-to-br from-forest-700/10 to-earth-700/10 border-forest-300"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-vintage">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="section-title text-2xl mb-4">
                Korzyści z Rejestracji
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-800 mb-1">Darmowy Tracker GPS</h4>
                  <p className="text-mountain-600 text-sm">Profesjonalny tracker Poltrax za darmo na czas przejścia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-800 mb-1">Live Tracking</h4>
                  <p className="text-mountain-600 text-sm">Twoje postępy na żywo na mapie - rodzina i przyjaciele mogą Cię śledzić</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-800 mb-1">Oficjalne Uznanie</h4>
                  <p className="text-mountain-600 text-sm">Po ukończeniu - miejsce w Hall of Fame i certyfikat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-forest-800 mb-1">Społeczność</h4>
                  <p className="text-mountain-600 text-sm">Dołącz do grona zdobywców Korony Sudetów</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-forest-200 text-center">
              <Link 
                href="/live#tracker-form" 
                className="btn-primary w-full text-lg py-4"
              >
                Zgłoś Próbę Przejścia
              </Link>
              <p className="text-mountain-500 text-sm mt-3">
                Bezpłatne zgłoszenie • Darmowy tracker • Live tracking
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <div className="card-vintage p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-yellow-800 text-lg mb-2">
                  ⚠️ Ważne: Zgłoś się przed startem!
                </h4>
                <p className="text-yellow-700 leading-relaxed">
                  <strong>Aby Twoje przejście zostało uznane za oficjalne</strong>, musisz zgłosić próbę przejścia 
                  <strong> przed rozpoczęciem wędrówki</strong>. Przejścia rozpoczęte bez wcześniejszego zgłoszenia 
                  mogą nie zostać uwzględnione w oficjalnych statystykach Hall of Fame.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PreTrailRegistration
