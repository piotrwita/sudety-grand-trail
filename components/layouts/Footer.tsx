'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SocialLinkList } from './SocialLinkList';

export const Footer = () => {
  return (
    <footer className="bg-forest-900 py-16 text-cream">
      <div className="fluid-container">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          {/* Logo & Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 overflow-hidden rounded-full shadow-vintage">
                <Image
                  src="/images/logo.png"
                  alt="Sudety Grand Trail Logo"
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Sudety Grand Trail
                </h3>
                <p className="text-sm text-mountain-400">
                  Korona Sudetów w jednym szlaku
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mountain-300">
              900 km przez 24 pasma górskie. Zdobądź najwyższe szczyty Sudetów i
              16 szczytów Korony Gór Polski w jednej epickiej wędrówce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-display text-lg font-bold">Szlak</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                Strona Główna
              </Link>
              <Link
                href="/trail"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                Poznaj Trasę
              </Link>
              <Link
                href="/live"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                Live Tracking
              </Link>
              <Link
                href="/hall-of-fame"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                Hall of Fame
              </Link>
              <Link
                href="/about"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                O Mnie
              </Link>
              <a
                href="https://mapy.com/s/barusofola"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-mountain-300 transition-colors hover:text-accent"
              >
                Mapa Szlaku
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="mb-6 font-display text-lg font-bold">Społeczność</h4>
            <div className="space-y-3">
              <SocialLinkList className="flex space-x-3 border-forest-600" />

              <div className="pt-4">
                <div className="flex items-center space-x-2 text-sm text-mountain-400">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>24 Pasma Górskie</span>
                </div>
                <div className="mt-1 flex items-center space-x-2 text-sm text-mountain-400">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>16 Szczytów KGP</span>
                </div>
                <div className="mt-1 flex items-center space-x-2 text-sm text-mountain-400">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span>900 km Wyzwania</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt="SGT Logo"
                  width={32}
                  height={32}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-mountain-400">
                © 2024 Sudety Grand Trail. Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div className="text-sm text-mountain-400">
              Stworzony z ❤️ dla miłośników gór
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
