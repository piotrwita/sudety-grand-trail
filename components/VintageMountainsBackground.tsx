import Image from 'next/image';
import backgroundImg from 'public/images/vintage-mountains.svg';
import { cn } from '@/lib/utils';

interface VintageMountainsBackgroundProps {
  className?: string;
  alt?: string;
  priority?: boolean;
}

export const VintageMountainsBackground = ({
  className,
  alt = 'Widok gór Sudetów w stylu vintage',
  priority = true,
}: VintageMountainsBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0', className)}>
      <Image
        src={backgroundImg}
        alt={alt}
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority={priority}
      />
    </div>
  );
};
