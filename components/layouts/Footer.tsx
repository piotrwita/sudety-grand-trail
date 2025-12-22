'use client';

import Link from 'next/link';
import { LogoImage } from '../LogoImage';
import { siteConfig } from '@/config/site';
import { siteRoutes } from '@/config/site-routes';
import { FacebookIcon, LockIcon } from '@/components/icons';
import { useTranslations } from '@/lib/i18n-utils';
import { useNavigation } from '@/lib/get-navigation';
import { SocialLinkList } from './SocialLinkList';

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
            <div className="space-y-2.5 sm:space-y-3">
              {navigation.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Social & Legal Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="mb-4 font-display text-base font-bold sm:mb-5 sm:text-lg lg:mb-6">
              {t('community')}
            </h4>
            <div className="space-y-6">
              <div className="flex gap-3 border-forest-600">
                <SocialLinkList className="flex gap-3">
                  {/* Private Facebook Group */}
                  <a
                    href={siteConfig.links.facebookGroup.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg p-2 text-cream/70 transition-all duration-300 hover:scale-110 hover:bg-forest-700/50 hover:text-accent"
                    title={siteConfig.links.facebookGroup.label}
                  >
                    <FacebookIcon />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent/20">
                      <LockIcon className="h-2.5 w-2.5 text-accent" />
                    </span>
                  </a>
                </SocialLinkList>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col space-y-2.5 border-t border-forest-700/50 pt-5 sm:space-y-3">
                <FooterLink href={siteRoutes.privacyPolicy}>
                  {t('privacyPolicy')}
                </FooterLink>
                <FooterLink href={siteRoutes.termsOfService}>
                  {t('termsOfService')}
                </FooterLink>
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
