'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    startDate: '',
    endDate: '',
    type: 'Solo',
    description: '',
    favoriteSection: '',
    hardestSection: '',
    isFirstSudety: false,
    additionalAchievements: '',
    photo: null as File | null,
    gpxFile: null as File | null,
    additionalPhotos: [] as File[]
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const files = e.target.files
    if (!files) return

    if (fieldName === 'additionalPhotos') {
      setFormData(prev => ({
        ...prev,
        [fieldName]: Array.from(files)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [fieldName]: files[0]
      }))
    }
  }

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const diffTime = Math.abs(end.getTime() - start.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Tutaj będzie logika wysyłania emaila
      // Na razie symulujemy wysyłanie
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        nickname: '',
        email: '',
        startDate: '',
        endDate: '',
        type: 'Solo',
        description: '',
        favoriteSection: '',
        hardestSection: '',
        isFirstSudety: false,
        additionalAchievements: '',
        photo: null,
        gpxFile: null,
        additionalPhotos: []
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="zglos-przejscie" className="section-padding bg-forest-800">
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-earth-700 rounded-full mb-8 shadow-vintage-xl border-4 border-cream/20"
          >
            <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.div>

          <h2 className="hero-title text-4xl md:text-5xl mb-6 text-cream">
            Zgłoś Swoje <span className="text-accent">Przejście</span>
          </h2>
          
          <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />
          
          <p className="text-xl text-cream/90 max-w-4xl mx-auto font-medium leading-relaxed">
            Ukończyłeś Sudety Grand Trail? Podziel się swoją historią i dołącz do oficjalnego Hall of Fame!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-vintage p-10 bg-cream/95"
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="section-title text-2xl mb-4">Zgłoszenie Wysłane!</h3>
                <p className="text-mountain-600 mb-6">
                  Dziękujemy za zgłoszenie! Twoje przejście zostanie zweryfikowane i wkrótce pojawi się w Hall of Fame.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-primary"
                >
                  Zgłoś Kolejne Przejście
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dane podstawowe */}
                <div>
                  <h3 className="section-title text-xl mb-6 text-left">Dane Podstawowe</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Pseudonim/Nick
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="Górski"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="jan@example.com"
                      />
                      <p className="text-xs text-mountain-500 mt-1">Email nie będzie publikowany</p>
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Typ Przejścia
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      >
                        <option value="Solo">Solo</option>
                        <option value="Grupa">Grupa</option>
                        <option value="Z psem">Z psem</option>
                        <option value="Ultralight">Ultralight</option>
                        <option value="Inne">Inne</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Daty */}
                <div>
                  <h3 className="section-title text-xl mb-6 text-left">Terminy Przejścia</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Data Rozpoczęcia *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Data Zakończenia *
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Czas Przejścia
                      </label>
                      <div className="px-4 py-3 bg-forest-50 border border-forest-200 rounded-lg">
                        <span className="stats-number text-2xl text-forest-700">
                          {calculateDays()}
                        </span>
                        <span className="text-forest-600 font-bold ml-2">dni</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Materiały */}
                <div>
                  <h3 className="section-title text-xl mb-6 text-left">Materiały</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Zdjęcie Profilowe *
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'photo')}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      />
                      <p className="text-xs text-mountain-500 mt-1">Zdjęcie z trasy lub portretowe</p>
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Plik GPX *
                      </label>
                      <input
                        type="file"
                        accept=".gpx"
                        onChange={(e) => handleFileChange(e, 'gpxFile')}
                        required
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      />
                      <p className="text-xs text-mountain-500 mt-1">Ślad GPS z przejścia</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-forest-800 font-bold mb-2">
                      Dodatkowe Zdjęcia (opcjonalnie)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileChange(e, 'additionalPhotos')}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    />
                    <p className="text-xs text-mountain-500 mt-1">Maksymalnie 5 zdjęć z trasy</p>
                  </div>
                </div>

                {/* Opis przejścia */}
                <div>
                  <h3 className="section-title text-xl mb-6 text-left">Opis Przejścia</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Krótki Opis Przejścia (max 200 znaków)
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        maxLength={200}
                        rows={3}
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="Najpiękniejsza przygoda mojego życia..."
                      />
                      <p className="text-xs text-mountain-500 mt-1">
                        {formData.description.length}/200 znaków
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-forest-800 font-bold mb-2">
                          Najpiękniejszy Moment/Odcinek
                        </label>
                        <input
                          type="text"
                          name="favoriteSection"
                          value={formData.favoriteSection}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          placeholder="Wschód słońca na Śnieżce"
                        />
                      </div>
                      <div>
                        <label className="block text-forest-800 font-bold mb-2">
                          Najtrudniejszy Fragment
                        </label>
                        <input
                          type="text"
                          name="hardestSection"
                          value={formData.hardestSection}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          placeholder="Góry Sowie w deszczu"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dodatkowe informacje */}
                <div>
                  <h3 className="section-title text-xl mb-6 text-left">Dodatkowe Informacje</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isFirstSudety"
                        checked={formData.isFirstSudety}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-forest-600 border-forest-300 rounded focus:ring-forest-500"
                      />
                      <label className="ml-3 text-forest-800 font-medium">
                        To moje pierwsze przejście Sudetów
                      </label>
                    </div>
                    
                    {/* Tracker Info */}
                    <div className="card-vintage p-6 bg-gradient-to-r from-blue-50 to-forest-50 border-forest-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-forest-800 mb-2">
                            📍 Czy zgłosiłeś próbę przejścia przed startem?
                          </h4>
                          <p className="text-mountain-600 text-sm leading-relaxed mb-3">
                            Aby przejście zostało uznane za oficjalne, powinieneś wcześniej zgłosić próbę przejścia 
                            i otrzymać tracker GPS. Jeśli tego nie zrobiłeś, Twoje przejście może zostać dodane 
                            jako "nieoficjalne".
                          </p>
                          <Link 
                            href="/live#tracker-form" 
                            className="inline-flex items-center text-forest-600 font-bold text-sm hover:text-forest-800 transition-colors"
                          >
                            Zgłoś próbę przejścia na przyszłość
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-forest-800 font-bold mb-2">
                        Dodatkowe Osiągnięcia
                      </label>
                      <textarea
                        name="additionalAchievements"
                        value={formData.additionalAchievements}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="Np. ukończenie KGP, inne szlaki długodystansowe..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center pt-8 border-t border-forest-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary text-lg px-12 py-4 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij Zgłoszenie'
                    )}
                  </button>
                  <p className="text-mountain-600 text-sm mt-4">
                    Twoje zgłoszenie zostanie zweryfikowane przed publikacją w Hall of Fame
                  </p>
                </div>
              </form>
            )}
          </motion.div>
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

export default SubmissionForm
