'use client';

import Link from 'next/link';
import { LogoImage } from '../LogoImage';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { FacebookIcon, MapIcon } from '../icons';
import { useTranslations } from '@/lib/i18n-utils';
import { useNavigation } from '@/lib/get-navigation';

export const Footer = () => {
  const { t } = useTranslations('footer');
  const navigation = useNavigation();

  return (
    <footer className="bg-forest-900 py-4 text-cream sm:py-6 lg:py-8">
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
                  {t('tagline')}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mountain-300 sm:text-base">
              {t('description')}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h4 className="mb-4 font-display text-base font-bold sm:mb-5 sm:text-lg lg:mb-6">
              {t('navigation')}
            </h4>
            <div className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3 lg:grid-cols-2">
              <div className="space-y-1.5 sm:space-y-2">
                {navigation.slice(0, 5).map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {navigation.slice(5).map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
                <FooterLink href="https://mapy.com/s/barusofola" isExternal>
                  {t('mapLink')}
                </FooterLink>
                <FooterLink href={siteRoutes.privacyPolicy}>
                  {t('privacyPolicy')}
                </FooterLink>
              </div>
            </div>
          </div>

          {/* Social & Stats Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="mb-4 font-display text-base font-bold sm:mb-5 sm:text-lg lg:mb-6">
              {t('community')}
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex gap-3 border-forest-600">
                {siteConfig.socialLinks.map((link) => {
                  const getIcon = () => {
                    switch (link.icon) {
                      case 'map':
                        return <MapIcon />;
                      case 'facebook':
                        return <FacebookIcon />;
                      default:
                        return null;
                    }
                  };

                  const getTitle = () => {
                    if (link.icon === 'map') {
                      return t('mapIconTitle');
                    }
                    return link.label;
                  };

                  // Use regular <a> tag for external links to avoid issues on some mobile devices
                  // Next.js Link can have problems with external links on certain browsers/devices
                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-cream/70 transition-all duration-300 hover:scale-110 hover:bg-forest-700/50 hover:text-accent-hover"
                        title={getTitle()}
                      >
                        {getIcon()}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg p-2 text-cream/70 transition-all duration-300 hover:scale-110 hover:bg-forest-700/50 hover:text-accent-hover"
                      title={getTitle()}
                    >
                      {getIcon()}
                    </Link>
                  );
                })}
                {/* Private Facebook Group */}
                <a
                  href="https://www.facebook.com/groups/opowiescizeszlaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg p-2 text-cream/70 transition-all duration-300 hover:scale-110 hover:bg-forest-700/50 hover:text-accent"
                  title="Facebook - Opowieści ze szlaku"
                >
                  <FacebookIcon />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent/20">
                    <svg
                      className="h-2.5 w-2.5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
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
                {t('copyright')}
              </p>
            </div>
            <div className="text-xs text-mountain-400 sm:text-sm">
              {t('madeWith')}
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
    'group flex items-center text-xs text-mountain-300 transition-colors hover:text-accent-hover focus:text-accent focus:outline-none sm:text-sm';

  const content = (
    <>
      <span className="mr-2 h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
      {children}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
};
