import Link from 'next/link';
import { SocialLinkList } from './SocialLinkList';
import { LogoImage } from '../LogoImage';

export const Footer = () => {
  const stats = ['23 Pasma Górskie', '16 Szczytów KGP', '900 km Wyzwania'];

  return (
    <footer className="bg-forest-900 py-12 text-cream sm:py-16 lg:py-20">
      <div className="fluid-container">
        {/* Main Grid */}
        <div className="mb-8 grid gap-8 sm:mb-10 sm:gap-10 md:grid-cols-2 md:gap-12 lg:mb-12 lg:grid-cols-3">
          {/* Logo & Brand Section */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full shadow-vintage sm:h-16 sm:w-16">
                <LogoImage width={64} height={64} className="rounded-full" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold sm:text-xl">
                  Sudety Grand Trail
                </h3>
                <p className="text-xs text-mountain-400 sm:text-sm">
                  Korona Sudetów w jednym szlaku
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mountain-300 sm:text-base">
              900 km przez 23 pasma górskie. Zdobądź najwyższe szczyty Sudetów i
              16 szczytów Korony Gór Polski w jednej epickiej wędrówce.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="mb-4 font-display text-base font-bold sm:mb-5 sm:text-lg lg:mb-6">
              Szlak
            </h4>
            <div className="space-y-2.5 sm:space-y-3">
              <FooterLink href="/">Strona Główna</FooterLink>
              <FooterLink href="/trail">Poznaj Trasę</FooterLink>
              <FooterLink href="/live">Live Tracking</FooterLink>
              <FooterLink href="/hall-of-fame">Hall of Fame</FooterLink>
              <FooterLink href="/about">O Mnie</FooterLink>
              <FooterLink href="https://mapy.com/s/barusofola" isExternal>
                Mapa Szlaku
              </FooterLink>
            </div>
          </div>

          {/* Social & Stats Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="mb-4 font-display text-base font-bold sm:mb-5 sm:text-lg lg:mb-6">
              Społeczność
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <SocialLinkList className="flex gap-3 border-forest-600" />

              <div className="space-y-2 pt-2 sm:space-y-2.5 sm:pt-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-mountain-400 sm:gap-2.5"
                  >
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent sm:h-2 sm:w-2"></div>
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-7 w-7 flex-shrink-0 overflow-hidden rounded-full sm:h-8 sm:w-8">
                <LogoImage width={32} height={32} className="rounded-full" />
              </div>
              <p className="text-xs text-mountain-400 sm:text-sm">
                © 2025 Sudety Grand Trail. Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div className="text-xs text-mountain-400 sm:text-sm">
              Stworzony z ❤️ dla miłośników gór
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  isExternal = false,
  children,
}: {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}) => {
  const linkClass =
    'block text-sm text-mountain-300 transition-colors hover:text-accent-hover focus:text-accent focus:outline-none sm:text-base';

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
};
