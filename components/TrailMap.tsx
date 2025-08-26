'use client'

import { motion } from 'framer-motion'

const TrailMap = () => {
  return (
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
            Oficjalna <span className="text-gradient">Trasa Szlaku</span>
          </h2>
          
          <div className="vintage-divider" />
          
          <p className="text-xl text-mountain-600 max-w-5xl mx-auto font-medium leading-relaxed mb-8">
            Nadszedł moment, by oficjalnie przedstawić trasę wyznaczoną specjalnie na potrzeby tej wyprawy. 
            To nie przypadkowy kierunek ani luźny pomysł – to <strong className="text-accent">przemyślana ścieżka</strong>, 
            która idealnie wpisuje się w ideę i wartości całego przedsięwzięcia.
          </p>
          
          {/* Download GPX Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
              download="sudety-grand-trail.gpx"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Pobierz Mapę GPX</span>
            </a>
            <a 
              href="https://mapy.com/s/barusofola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-3 group border-forest-600 text-forest-700 hover:bg-forest-700 hover:text-cream"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Otwórz w Mapy.com</span>
            </a>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Map Container */}
          <div className="relative card-vintage overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://mapy.com/s/barusofola"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Grand Trail Sudety Map"
                frameBorder="0"
              />
            </div>
            
            {/* Overlay with info */}
            <div className="absolute top-6 left-6 bg-forest-800/90 backdrop-blur-sm rounded-xl p-4 border-2 border-forest-600 shadow-vintage">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
                <span className="text-cream font-bold uppercase tracking-wide text-sm">Grand Trail Sudety</span>
              </div>
            </div>
          </div>

          {/* Map Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Długość</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="stats-number text-2xl">900 km</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Najwyższy punkt</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 font-bold">Śnieżka</p>
              <p className="stats-number text-2xl">1602 m</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-vintage p-8 text-center group hover:scale-105"
            >
              <div className="badge-circle w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Przewyższenia</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="stats-number text-2xl">30 000 m</p>
            </motion.div>

            {/* GPX Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="card-vintage p-8 text-center group hover:scale-105 bg-gradient-to-br from-accent/10 to-earth/10 border-accent/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-earth-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-vintage">
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="section-title text-xl mb-2">Plik GPX</h3>
              <div className="vintage-divider w-12 mx-auto my-3" />
              <p className="text-mountain-600 font-bold mb-3">Gotowy do pobrania</p>
              <a 
                href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
                download="sudety-grand-trail.gpx"
                className="btn-outline text-sm px-4 py-2 border-accent text-accent hover:bg-accent hover:text-cream"
              >
                Pobierz GPX
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrailMap