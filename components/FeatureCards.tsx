'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Korona Sudetów',
    description: 'Pierwszy szlak umożliwiający zdobycie najwyższego szczytu każdego z 24 pasm Sudetów. Od Śnieżki (1603m) po Lázek (714m) – kompletne podbicie gór.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l6 6 6-6M5 21l6-6 6 6M12 3v18" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700'
  },
  {
    title: 'Międzynarodowość',
    description: 'Przekrocz granice nie tylko fizyczne, ale i mentalne. Wędruj przez Polskę, Czechy i Niemcy, odkrywając różnorodność kulturową i przyrodniczą.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  {
    title: 'Transformacja',
    description: 'To nie tylko szlak – to podróż transformacyjna. 900 km, które zmienią Twoje postrzeganie gór, siebie i własnych możliwości.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700'
  }
]

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  hover: { 
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

const FeatureCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, margin: "-50px" }}
          className="group"
        >
          <div className={`${feature.bgColor} rounded-2xl p-8 h-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill={`url(#pattern-${index})`} className={feature.textColor}/>
              </svg>
            </div>
            
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            
            {/* Content */}
            <h3 className={`text-2xl font-bold mb-4 ${feature.textColor} group-hover:${feature.textColor.replace('700', '800')} transition-colors duration-300`}>
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed font-medium">
              {feature.description}
            </p>
            
            {/* Decorative Element */}
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FeatureCards
