'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

// Mock data - przykładowe przejścia
const mockCompletions = [
  {
    id: 1,
    rank: 1,
    name: "Jan Kowalski",
    nickname: "Górski",
    startDate: "2024-05-15",
    endDate: "2024-06-30",
    days: 45,
    type: "Solo",
    description: "Najpiękniejsza przygoda mojego życia. Każdy dzień przynosił nowe wyzwania i niesamowite widoki.",
    photo: "/images/creator-photo.svg", // placeholder
    isFirstCompleter: true,
    achievements: ["Pierwszy zdobywca", "Najszybsze przejście", "KGP Complete"],
    favoriteSection: "Karkonosze - Śnieżka",
    hardestSection: "Góry Sowie w deszczu"
  },
  {
    id: 2,
    rank: 2,
    name: "Anna Nowak",
    nickname: "Wędrowniczka",
    startDate: "2024-06-01",
    endDate: "2024-08-15",
    days: 75,
    type: "Solo",
    description: "Szlak zmienił moje życie. Odkryłam w sobie siłę, o której nie wiedziałam.",
    photo: "/images/creator-photo.svg",
    isFirstCompleter: false,
    achievements: ["Pierwsza kobieta", "KGP Complete"],
    favoriteSection: "Masyw Śnieżnika",
    hardestSection: "Góry Stołowe - mgła"
  },
  {
    id: 3,
    rank: 3,
    name: "Piotr Górnik",
    nickname: "Sudecki",
    startDate: "2024-07-10",
    endDate: "2024-09-20",
    days: 72,
    type: "Z psem",
    description: "Razem z moim psem Reksem pokonaliśmy wszystkie 24 pasma. Niezapomniane chwile!",
    photo: "/images/creator-photo.svg",
    isFirstCompleter: false,
    achievements: ["Pierwszy z psem", "KGP Complete"],
    favoriteSection: "Góry Izerskie",
    hardestSection: "Pradziad w burzy"
  },
  {
    id: 4,
    rank: 4,
    name: "Michał Szczyciński",
    nickname: "Ultralight",
    startDate: "2024-08-01",
    endDate: "2024-10-10",
    days: 70,
    type: "Ultralight",
    description: "Minimalizm w górach - tylko 8kg plecak i maksimum doświadczeń.",
    photo: "/images/creator-photo.svg",
    isFirstCompleter: false,
    achievements: ["Najlżejszy ekwipunek", "KGP Complete"],
    favoriteSection: "Góry Złote",
    hardestSection: "Hanušovická vrchovina"
  }
]

const HallOfFameList = () => {
  const [selectedCompletion, setSelectedCompletion] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'time' | 'name'>('date')

  const sortedCompletions = [...mockCompletions].sort((a, b) => {
    switch (sortBy) {
      case 'time':
        return a.days - b.days
      case 'name':
        return a.name.localeCompare(b.name)
      case 'date':
      default:
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    }
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section id="hall-of-fame" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
          >
            <span className="text-2xl">🏆</span>
          </motion.div>

          <h2 className="section-title text-4xl md:text-5xl mb-6">
            <span className="text-gradient">Zdobywcy</span> Korony Sudetów
          </h2>
          
          <div className="vintage-divider" />
          
          <p className="text-xl text-mountain-600 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Ci odważni wędrowcy ukończyli pełny szlak Sudety Grand Trail. 
            Każde przejście to unikalna historia determinacji i pasji do gór.
          </p>

          {/* Sort Controls */}
          <div className="flex justify-center mb-8">
            <div className="bg-forest-100 rounded-xl p-1 flex">
              <button
                onClick={() => setSortBy('date')}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${
                  sortBy === 'date' 
                    ? 'bg-forest-700 text-cream shadow-vintage' 
                    : 'text-forest-700 hover:bg-forest-200'
                }`}
              >
                Data
              </button>
              <button
                onClick={() => setSortBy('time')}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${
                  sortBy === 'time' 
                    ? 'bg-forest-700 text-cream shadow-vintage' 
                    : 'text-forest-700 hover:bg-forest-200'
                }`}
              >
                Czas
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wide text-sm transition-all ${
                  sortBy === 'name' 
                    ? 'bg-forest-700 text-cream shadow-vintage' 
                    : 'text-forest-700 hover:bg-forest-200'
                }`}
              >
                Nazwa
              </button>
            </div>
          </div>
        </motion.div>

        {/* Completions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sortedCompletions.map((completion, index) => (
            <motion.div
              key={completion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCompletion(selectedCompletion === completion.id ? null : completion.id)}
              className="card-vintage p-8 cursor-pointer group relative overflow-hidden"
            >
              {/* Rank Badge */}
              <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-lg shadow-vintage ${
                completion.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                completion.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                completion.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white' :
                'bg-gradient-to-br from-forest-400 to-forest-600 text-cream'
              }`}>
                #{completion.rank}
              </div>

              {/* Special Badges */}
              {completion.isFirstCompleter && (
                <div className="absolute top-6 right-20 w-10 h-10 bg-accent text-cream rounded-full flex items-center justify-center text-xs font-bold shadow-vintage">
                  1st
                </div>
              )}

              <div className="flex items-start space-x-6">
                {/* Photo */}
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-vintage flex-shrink-0">
                  <Image
                    src={completion.photo}
                    alt={completion.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="section-title text-xl text-left">
                      {completion.name}
                    </h3>
                    <span className="text-sm text-mountain-500 font-medium">
                      "{completion.nickname}"
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-mountain-500">Start:</span>
                      <div className="font-bold text-forest-800">{formatDate(completion.startDate)}</div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Koniec:</span>
                      <div className="font-bold text-forest-800">{formatDate(completion.endDate)}</div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Czas:</span>
                      <div className="font-bold text-accent">{completion.days} dni</div>
                    </div>
                    <div>
                      <span className="text-mountain-500">Typ:</span>
                      <div className="font-bold text-forest-800">{completion.type}</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {completion.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="badge-circle text-xs px-3 py-1 text-cream font-bold"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-mountain-600 text-sm leading-relaxed mb-4">
                    "{completion.description}"
                  </p>

                  {/* Expanded Details */}
                  {selectedCompletion === completion.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-forest-200 pt-4 mt-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-mountain-500 font-medium">Ulubiony odcinek:</span>
                          <div className="text-forest-800 font-bold">{completion.favoriteSection}</div>
                        </div>
                        <div>
                          <span className="text-mountain-500 font-medium">Najtrudniejszy moment:</span>
                          <div className="text-forest-800 font-bold">{completion.hardestSection}</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-forest-100">
                        <div className="flex space-x-4 text-xs">
                          <button className="btn-outline text-xs px-4 py-2">
                            📸 Zdjęcia
                          </button>
                          <button className="btn-outline text-xs px-4 py-2">
                            📍 Trasa GPX
                          </button>
                          <button className="btn-outline text-xs px-4 py-2">
                            🏆 Certyfikat
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-700/5 to-earth-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="card-vintage p-10 bg-gradient-to-br from-forest-700/10 to-earth-700/10 border-forest-300">
            <h3 className="section-title text-2xl mb-6">
              Dołącz do Elitarnego Grona!
            </h3>
            <p className="text-mountain-600 mb-8 font-medium text-lg max-w-3xl mx-auto">
              Ukończyłeś Sudety Grand Trail? Zgłoś swoje przejście i zostań oficjalnym zdobywcą Korony Sudetów!
            </p>
            <a href="#zglos-przejscie" className="btn-primary text-lg px-10 py-4">
              Zgłoś Swoje Przejście
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HallOfFameList
