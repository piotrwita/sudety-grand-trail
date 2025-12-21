'use client';

import { siteConfig } from '@/config/site';
import { FacebookIcon, MapIcon } from '@/components/icons';
import Link from 'next/link';
import { useTranslations } from '@/lib/i18n-utils';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'map':
      return <MapIcon />;
    case 'facebook':
      return <FacebookIcon />;
    default:
      return null;
  }
};

export const SocialLinkList = ({ className }: { className?: string }) => {
  const { t } = useTranslations('footer');

  const getTitle = (link: typeof siteConfig.socialLinks[0]) => {
    if (link.icon === 'map') {
      return t('mapIconTitle');
    }
    return link.label;
  };

  return (
    <div className={className}>
      {siteConfig.socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-hover rounded-lg p-2 text-cream/70 transition-all duration-300 hover:scale-110 hover:bg-forest-700/50"
          title={getTitle(link)}
        >
          {getIcon(link.icon)}
        </Link>
      ))}
    </div>
  );
};
