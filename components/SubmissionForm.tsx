'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

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
    additionalPhotos: [] as File[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const files = e.target.files;
    if (!files) return;

    if (fieldName === 'additionalPhotos') {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: files[0],
      }));
    }
  };

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Tutaj będzie logika wysyłania emaila
      // Na razie symulujemy wysyłanie
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus('success');
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
        additionalPhotos: [],
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="zglos-przejscie" className="section-padding bg-forest-800">
      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream/20 bg-gradient-to-br from-accent to-earth-700 shadow-vintage-xl"
          >
            <svg
              className="h-8 w-8 text-cream"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.div>

          <h2 className="hero-title mb-6 text-4xl text-cream md:text-5xl">
            Zgłoś Swoje <span className="text-accent">Przejście</span>
          </h2>

          <div className="vintage-divider bg-gradient-to-r from-accent to-cream" />

          <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-cream/90">
            Ukończyłeś Sudety Grand Trail? Podziel się swoją historią i dołącz
            do oficjalnego Hall of Fame!
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-vintage bg-cream/95 p-10"
          >
            {submitStatus === 'success' ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="section-title mb-4 text-2xl">
                  Zgłoszenie Wysłane!
                </h3>
                <p className="mb-6 text-mountain-600">
                  Dziękujemy za zgłoszenie! Twoje przejście zostanie
                  zweryfikowane i wkrótce pojawi się w Hall of Fame.
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
                  <h3 className="section-title mb-6 text-left text-xl">
                    Dane Podstawowe
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Pseudonim/Nick
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                        placeholder="Górski"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                        placeholder="jan@example.com"
                      />
                      <p className="mt-1 text-xs text-mountain-500">
                        Email nie będzie publikowany
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Typ Przejścia
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
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
                  <h3 className="section-title mb-6 text-left text-xl">
                    Terminy Przejścia
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Data Rozpoczęcia *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Data Zakończenia *
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Czas Przejścia
                      </label>
                      <div className="rounded-lg border border-forest-200 bg-forest-50 px-4 py-3">
                        <span className="stats-number text-2xl text-forest-700">
                          {calculateDays()}
                        </span>
                        <span className="ml-2 font-bold text-forest-600">
                          dni
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Materiały */}
                <div>
                  <h3 className="section-title mb-6 text-left text-xl">
                    Materiały
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Zdjęcie Profilowe *
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'photo')}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                      />
                      <p className="mt-1 text-xs text-mountain-500">
                        Zdjęcie z trasy lub portretowe
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Plik GPX *
                      </label>
                      <input
                        type="file"
                        accept=".gpx"
                        onChange={(e) => handleFileChange(e, 'gpxFile')}
                        required
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                      />
                      <p className="mt-1 text-xs text-mountain-500">
                        Ślad GPS z przejścia
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block font-bold text-forest-800">
                      Dodatkowe Zdjęcia (opcjonalnie)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileChange(e, 'additionalPhotos')}
                      className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                    />
                    <p className="mt-1 text-xs text-mountain-500">
                      Maksymalnie 5 zdjęć z trasy
                    </p>
                  </div>
                </div>

                {/* Opis przejścia */}
                <div>
                  <h3 className="section-title mb-6 text-left text-xl">
                    Opis Przejścia
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Krótki Opis Przejścia (max 200 znaków)
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        maxLength={200}
                        rows={3}
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                        placeholder="Najpiękniejsza przygoda mojego życia..."
                      />
                      <p className="mt-1 text-xs text-mountain-500">
                        {formData.description.length}/200 znaków
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-bold text-forest-800">
                          Najpiękniejszy Moment/Odcinek
                        </label>
                        <input
                          type="text"
                          name="favoriteSection"
                          value={formData.favoriteSection}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                          placeholder="Wschód słońca na Śnieżce"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block font-bold text-forest-800">
                          Najtrudniejszy Fragment
                        </label>
                        <input
                          type="text"
                          name="hardestSection"
                          value={formData.hardestSection}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                          placeholder="Góry Sowie w deszczu"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dodatkowe informacje */}
                <div>
                  <h3 className="section-title mb-6 text-left text-xl">
                    Dodatkowe Informacje
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isFirstSudety"
                        checked={formData.isFirstSudety}
                        onChange={handleInputChange}
                        className="h-5 w-5 rounded border-forest-300 text-forest-600 focus:ring-forest-500"
                      />
                      <label className="ml-3 font-medium text-forest-800">
                        To moje pierwsze przejście Sudetów
                      </label>
                    </div>

                    {/* Tracker Info */}
                    <div className="card-vintage border-forest-300 bg-gradient-to-r from-blue-50 to-forest-50 p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest-600">
                          <svg
                            className="h-5 w-5 text-cream"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 font-bold text-forest-800">
                            📍 Czy zgłosiłeś próbę przejścia przed startem?
                          </h4>
                          <p className="mb-3 text-sm leading-relaxed text-mountain-600">
                            Aby przejście zostało uznane za oficjalne,
                            powinieneś wcześniej zgłosić próbę przejścia i
                            otrzymać tracker GPS. Jeśli tego nie zrobiłeś, Twoje
                            przejście może zostać dodane jako "nieoficjalne".
                          </p>
                          <Link
                            href="/live#tracker-form"
                            className="inline-flex items-center text-sm font-bold text-forest-600 transition-colors hover:text-forest-800"
                          >
                            Zgłoś próbę przejścia na przyszłość
                            <svg
                              className="ml-1 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-bold text-forest-800">
                        Dodatkowe Osiągnięcia
                      </label>
                      <textarea
                        name="additionalAchievements"
                        value={formData.additionalAchievements}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full rounded-lg border border-forest-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-forest-500"
                        placeholder="Np. ukończenie KGP, inne szlaki długodystansowe..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-forest-200 pt-8 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary px-12 py-4 text-lg ${
                      isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="-ml-1 mr-3 inline h-5 w-5 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij Zgłoszenie'
                    )}
                  </button>
                  <p className="mt-4 text-sm text-mountain-600">
                    Twoje zgłoszenie zostanie zweryfikowane przed publikacją w
                    Hall of Fame
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative vintage elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
      <div
        className="absolute bottom-20 right-10 h-24 w-24 animate-pulse rounded-full bg-cream/10 blur-xl"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

export default SubmissionForm;
