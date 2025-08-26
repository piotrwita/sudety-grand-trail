'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutCreator = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh-subtle opacity-30" />
      <div className="absolute inset-0 bg-[url('/images/vintage-mountains.svg')] bg-cover bg-center opacity-5" />
      
      <div className="container-custom relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left - Photo & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Photo Container */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/creator-photo.svg"
                    alt="Twórca Sudety Grand Trail"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-800/20 to-transparent" />
                </div>
                
                {/* Photo Caption */}
                <div className="mt-6 text-center">
                  <p className="text-forest-700 font-medium text-sm">
                    "Zwykły chłopak z Łodzi z plecakiem, butami i głową pełną pomysłów"
                  </p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent backdrop-blur-xl border-4 border-cream rounded-full p-4 shadow-2xl">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l6 6 6-6M5 21l6-6 6 6M12 3v18" />
                </svg>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center shadow-xl"
              >
                <div className="text-2xl font-bold text-accent mb-1">∞</div>
                <div className="text-sm text-forest-600 font-medium">Kilometrów za sobą</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center shadow-xl"
              >
                <div className="text-2xl font-bold text-accent mb-1">1</div>
                <div className="text-sm text-forest-600 font-medium">Wielki sen</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Moja historia
              </motion.div>
              
              <h2 className="section-title text-left mb-6">
                Sudety Grand Trail – <span className="gradient-text-mesh">O Mnie</span>
              </h2>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-fluid-base text-forest-700 leading-relaxed"
              >
                Zanim wyruszę na szlak, pomyślałem, że warto powiedzieć kilka słów o sobie. 
                Może wtedy łatwiej będzie zrozumieć skąd się w ogóle wziąłem i jak to się stało, 
                że właśnie w taki sposób próbuję nadawać sens codzienności. Bo choć każdy z moich 
                projektów to inna przygoda, wszystkie mają wspólny początek.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-fluid-base text-forest-700 leading-relaxed"
              >
                <strong className="text-accent">Nie jestem zawodowym sportowcem</strong>, nie mam sztabu trenerów 
                ani sponsorów na zawołanie. Jestem zwykłym chłopakiem z Łodzi, który postanowił użyć własnych nóg, 
                by zmieniać świat na lepszy. Mam plecak, buty, głowę pełną pomysłów i chyba trochę za dużo ambicji. 
                Od kilku lat wędruję po górach, czasem długo, czasem szybko, najczęściej z jakimś głupim planem 
                i jeszcze szlachetniejszym celem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-fluid-base text-forest-700 leading-relaxed"
              >
                Ta strona to przestrzeń poświęcona projektowi mojego życia, ale to tylko jeden rozdział większej historii. 
                Bo takich dzikich, długich, czasem kompletnie nielogicznych tras przeszedłem już kilka w swoim życiu. 
                <strong className="text-accent"> Każda z tych wędrówek zmieniała mnie na swój sposób</strong> i prowadziła 
                krok po kroku do miejsca, w którym się obecnie znajduję.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-fluid-base text-forest-700 leading-relaxed"
              >
                To właśnie one nauczyły mnie, jak ważne jest docenianie tych małych, często niezauważalnych momentów, 
                które naprawdę nadają życiu sens. Dzięki nim zacząłem poznawać siebie na nowo, polubiłem swoje wady i zalety, 
                nauczyłem się żyć w zgodzie ze sobą, a przede wszystkim <strong className="text-accent">zrozumiałem, 
                kim naprawdę jestem i czego naprawdę potrzebuję</strong>.
              </motion.p>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-forest-800">Dołącz do społeczności</h3>
                
                <p className="text-forest-600 leading-relaxed">
                  Jeśli chcesz się dowiedzieć, jak to wszystko się zaczęło, co mnie napędza i jak wyglądają góry 
                  oczami kogoś, kto zna wagę ciszy i potrafi znaleźć dom w miejscu, gdzie inni widzą tylko drzewa, 
                  to zapraszam Cię na moją prywatną grupę.
                </p>
                
                <a
                  href="https://www.facebook.com/groups/opowiescizeszlaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-cream font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Opowieści ze Szlaku</span>
                </a>
                
                <p className="text-sm text-forest-500 italic">
                  "Bo marsz to nie tylko kilometry. To też ludzie, emocje, porażki i małe zwycięstwa. 
                  A ja po prostu lubię się tym dzielić."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCreator
