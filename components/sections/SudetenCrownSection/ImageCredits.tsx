'use client';

import { useTranslations } from '@/lib/i18n-utils';

export const ImageCredits = () => {
  const { t } = useTranslations('sudetenCrown');
  const text = t('imageCredits.text');
  const parts = text.split('Mapy.cz');

  return (
    <div className="mt-8 pb-6 text-center sm:mt-10 sm:pb-8">
      <p className="text-[10px] leading-relaxed text-earth-500/60 sm:text-xs">
        {parts[0]}
        <a
          href="https://mapy.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-earth-500/70 underline decoration-earth-400/30 underline-offset-2 transition-colors hover:text-earth-600/70 hover:decoration-earth-400/50"
        >
          Mapy.cz
        </a>
        {parts[1]}
      </p>
    </div>
  );
};

