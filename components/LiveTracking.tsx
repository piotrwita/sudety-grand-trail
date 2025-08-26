'use client'

import { motion } from 'framer-motion'

const LiveTracking = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-forest-50 to-cream" />
      <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-10" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Live Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-accent/20 backdrop-blur-sm border-2 border-accent rounded-full px-6 py-3 mb-8"
          >
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-bold uppercase tracking-wide text-sm">ŚLEDŹ NA ŻYWO</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title text-4xl md:text-5xl lg:text-6xl mb-6 text-forest-800"
          >
            Live <span className="text-gradient">Tracking</span>
          </motion.h2>
          
          <div className="vintage-divider" />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-mountain-600 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Dzięki współpracy z <strong className="text-accent">Poltrax</strong> możesz śledzić moją wyprawę w czasie rzeczywistym. 
            Mapa pokazuje aktualną pozycję, przebytą trasę oraz <strong className="text-accent">orientacyjne punkty noclegów</strong>. 
            Widoczny jest także limit czasowy – to będzie <strong className="text-forest-800">wyścig z czasem</strong> 
            przez wszystkie 22 pasma Sudetów.
          </motion.p>
        </motion.div>

        {/* Live Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative card-vintage overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://poltrax.live/sgt"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                title="Sudety Grand Trail - Live Tracking"
                frameBorder="0"
              />
            </div>
            
            {/* Live Overlay */}
            <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-sm rounded-xl p-4 border-2 border-accent shadow-vintage">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-cream rounded-full animate-pulse" />
                <span className="text-cream font-bold uppercase tracking-wide text-sm">OFICJALNA TRASA</span>
              </div>
            </div>



            {/* Info Badge */}
            <div className="absolute top-6 right-6 bg-forest-800/90 backdrop-blur-sm rounded-xl p-4 border border-forest-600 shadow-vintage">
              <div className="text-center">
                <div className="text-accent font-bold text-sm uppercase tracking-wide">Powered by</div>
                <div className="text-cream font-bold text-lg">POLTRAX</div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-forest-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-forest-800 font-bold text-lg mb-2">Aktualna Pozycja</h3>
              <p className="text-mountain-600 text-sm">Lokalizacja w czasie rzeczywistym</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-forest-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-forest-800 font-bold text-lg mb-2">Limit Czasowy</h3>
              <p className="text-mountain-600 text-sm">Wyścig z czasem przez Sudety</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-forest-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-forest-800 font-bold text-lg mb-2">Punkty Etapów</h3>
              <p className="text-mountain-600 text-sm">Planowane miejsca noclegów</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveTracking
