"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinkList } from "./SocialLinkList";

export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-cream py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-vintage">
                <Image
                  src="/images/logo.png"
                  alt="Sudety Grand Trail Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">
                  Sudety Grand Trail
                </h3>
                <p className="text-mountain-400 text-sm">
                  Korona Sudetów w jednym szlaku
                </p>
              </div>
            </div>
            <p className="text-mountain-300 text-sm leading-relaxed">
              900 km przez 24 pasma górskie. Zdobądź najwyższe szczyty Sudetów i
              16 szczytów Korony Gór Polski w jednej epickiej wędrówce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Szlak</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                Strona Główna
              </Link>
              <Link
                href="/trail"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                Poznaj Trasę
              </Link>
              <Link
                href="/live"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                Live Tracking
              </Link>
              <Link
                href="/hall-of-fame"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                Hall of Fame
              </Link>
              <Link
                href="/about"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                O Mnie
              </Link>
              <a
                href="https://mapy.com/s/barusofola"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-mountain-300 hover:text-accent transition-colors"
              >
                Mapa Szlaku
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Społeczność</h4>
            <div className="space-y-3">
              <SocialLinkList className="flex space-x-3 border-forest-600" />

              <div className="pt-4">
                <div className="flex items-center space-x-2 text-sm text-mountain-400">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24 Pasma Górskie</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-mountain-400 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>16 Szczytów KGP</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-mountain-400 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>900 km Wyzwania</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="SGT Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-mountain-400 text-sm">
                © 2024 Sudety Grand Trail. Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div className="text-mountain-400 text-sm">
              Stworzony z ❤️ dla miłośników gór
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
