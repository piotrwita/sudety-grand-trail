import Image, { ImageProps } from 'next/image';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface LogoImageProps extends Omit<ImageProps, 'src' | 'alt'> {}

export const LogoImage = ({ className, ...props }: LogoImageProps) => {
  return (
    <Image
      className={cn('object-cover', className)}
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      {...props}
    />
  );
};
