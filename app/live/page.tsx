'use client'

import { motion } from 'framer-motion'
import LiveTracking from '@/components/LiveTracking'
import TimePressure from '@/components/TimePressure'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function LivePage() {
  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-800/50 to-forest-900" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Live Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-3 bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-full px-8 py-4 mb-8"
            >
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
              <span className="text-cream font-bold uppercase tracking-wide text-lg">LIVE TRACKING</span>
            </motion.div>

            <motion.h1 
              className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight text-cream"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Śledź <span className="text-gradient">Wyprawę</span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl text-cream/80 mb-8 font-medium leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Śledź moją wyprawę przez 900 kilometrów i 22 pasma Sudetów. 
              Zobacz na żywo, gdzie jestem i jak przebiega zdobywanie Korony Sudetów.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="stats-number text-accent text-4xl sm:text-5xl">900</div>
                <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Kilometrów</div>
              </div>
              <div className="text-center">
                <div className="stats-number text-accent text-4xl sm:text-5xl">22</div>
                <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Pasma</div>
              </div>
              <div className="text-center">
                <div className="stats-number text-accent text-4xl sm:text-5xl">24/7</div>
                <div className="text-cream/70 font-bold uppercase tracking-wide text-sm">Tracking</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-forest-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Live Tracking Section */}
      <LiveTracking />

      {/* Time Pressure Section */}
      <TimePressure />

      {/* Modern Tracker Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Bezpłatny Tracker
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Twoja <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">Własna Historia</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A jeśli kiedyś sami będziecie chcieli spróbować przejść ten szlak, to mam dla Was dobrą wiadomość.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">POLTRAX</h3>
                    <p className="text-slate-500">Partner technologiczny</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-accent">Poltrax udostępni Wam specjalny tracker zupełnie bezpłatnie</strong>, 
                  abyście i Wy mogli zapisać swoją własną historię na tej trasie.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Kompletnie darmowy - bez ukrytych kosztów</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Profesjonalne narzędzie do trackingu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Zapisz i udostępnij swoją przygodę</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Skontaktuj się z Poltrax</span>
                </button>
                <button className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-slate-50 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Dowiedz się więcej</span>
                </button>
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent/10 to-orange-500/10 rounded-3xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900">Zostań Legendą</h4>
                    <p className="text-slate-600">Dołącz do grona zdobywców Korony Sudetów</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent">900</div>
                      <div className="text-sm text-slate-600">Kilometrów</div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent">22</div>
                      <div className="text-sm text-slate-600">Pasma</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl md:text-5xl mb-6">
              Jak działa <span className="text-gradient">Live Tracking</span>?
            </h2>
            
            <div className="vintage-divider" />
            
            <p className="text-xl text-mountain-600 max-w-4xl mx-auto font-medium leading-relaxed">
              Dzięki współpracy z firmą <strong className="text-accent">Poltrax</strong> powstała interaktywna mapa, 
              która pokazuje moją lokalizację w czasie rzeczywistym oraz orientacyjne punkty etapów.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Real-time GPS</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 text-sm">Aktualna pozycja co kilka minut</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Przebyta Trasa</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 text-sm">Historia całej wędrówki</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Limit Czasowy</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 text-sm">Presja czasu widoczna na mapie</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Punkty Etapów</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 text-sm">Planowane miejsca noclegów</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
