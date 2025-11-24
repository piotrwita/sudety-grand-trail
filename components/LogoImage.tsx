import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import logoJpg from 'public/images/logo.jpg';

interface LogoImageProps extends Omit<ImageProps, 'src' | 'alt'> {}

export const LogoImage = ({ className, ...props }: LogoImageProps) => {
  return (
    <Image
      className={cn('rounded-full object-cover', className)}
      src={logoJpg}
      alt="Logo Sudety Grand Trail"
      {...props}
    />
  );
};
