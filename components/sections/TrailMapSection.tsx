'use client';

import { useState, useEffect, useRef } from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import { ScaleIn } from '@/components/motion/ScaleIn';
import {
  MapIcon,
  DownloadIcon,
} from '@/components/icons';
import Link from 'next/link';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { VintageMountainsBackground } from '@/components/VintageMountainsBackground';
import { siteConfig } from '@/config/site';

export const TrailMapSection = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      setIsMapInteractive(false);

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  const handleMapClick = () => {
    setIsMapInteractive(true);
  };
  return (
    <Section
      ariaLabel="Oficjalna Trasa Szlaku"
      className="relative min-h-0 overflow-hidden bg-gradient-to-br from-earth-50 to-cream"
    >
      <VintageMountainsBackground className="opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-earth-200/30 via-transparent to-earth-300/30" />
      <div className="fluid-container relative z-10">
        <SectionHeader
          title="Poznaj Mapę"
          icon={<MapIcon className="size-6 text-cream" />}
          variant="default"
        />

        <FadeIn
          direction="down"
          offset={30}
          duration={0.8}
          delay={0.3}
          inView={true}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <p className="text-fluid-lg font-medium leading-relaxed text-mountain-600">
            Poniżej znajduje się mapa trasy prowadzącej przez wszystkie 22 pasma
            Sudetów. Każdy odcinek został starannie wyznaczony i dopracowany,
            tworząc spójną drogę od pierwszego kroku w Jarnołtówku po finał pod
            Ślężą.
          </p>
        </FadeIn>

        <ScaleIn
          initialScale={0.95}
          finalScale={1}
          duration={0.8}
          delay={0.2}
          inView={true}
          className="relative"
        >
          {/* Map Container - Hidden on mobile */}
          <div
            ref={mapContainerRef}
            className="card-vintage relative hidden overflow-hidden md:block"
          >
            <div className="aspect-video relative">
              <iframe
                src="https://mapy.com/s/barusofola"
                width="100%"
                height="100%"
                style={{
                  border: 'none',
                  pointerEvents: isMapInteractive && !isScrolling ? 'auto' : 'none',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                title="Grand Trail Sudety Map"
                frameBorder="0"
              />
              {/* Overlay that blocks interaction during scroll */}
              {(!isMapInteractive || isScrolling) && (
                <div
                  onClick={handleMapClick}
                  className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent transition-opacity duration-200 hover:bg-black/5"
                  aria-label="Kliknij, aby korzystać z mapy"
                >
                  {!isMapInteractive && (
                    <div className="rounded-lg bg-cream/95 px-4 py-2 text-sm font-medium text-forest-700 shadow-lg backdrop-blur-sm">
                      Kliknij, aby korzystać z mapy
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScaleIn>

        {/* Modest Summary Section */}
        <FadeIn
          direction="up"
          offset={30}
          duration={0.6}
          delay={0.3}
          inView={true}
          className="mt-12"
        >
          <div className="mx-auto max-w-4xl space-y-6">
            {/* Summary Stats - Simple List */}
            <div className="rounded-lg border border-earth-300/30 bg-cream/50 p-6 backdrop-blur-sm sm:p-8">
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="text-2xl font-bold text-earth-700 sm:text-3xl">900 km</p>
                  <p className="mt-1 text-sm text-mountain-600">Długość trasy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth-700 sm:text-3xl">30 000 m</p>
                  <p className="mt-1 text-sm text-mountain-600">Przewyższenia</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth-700 sm:text-3xl">1602 m</p>
                  <p className="mt-1 text-sm text-mountain-600">Śnieżka</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={siteConfig.links.map.href}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn-base theme-trail-btn-secondary flex w-full items-center justify-center gap-2 px-6 py-3 sm:w-auto"
              >
                <MapIcon className="size-5" />
                Otwórz na Mapy.cz
              </Link>
              <Link
                href="https://pro.mapy.com/mapybox-export/v1/path/gpx?id=688fa97f662a3fae890f5f13&rand=0.7002222504750357"
                download="sudety-grand-trail.gpx"
                className="btn-primary flex w-full items-center justify-center gap-2 px-6 py-3 sm:w-auto"
              >
                <DownloadIcon className="size-5" />
                Pobierz Plik GPX
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
