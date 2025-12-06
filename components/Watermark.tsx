import Image from 'next/image';
import { cn } from '@/lib/utils';
import { memo } from 'react';
import logoPng from 'public/images/logo-transparent-dg.png';

interface WatermarkProps {
  className?: string;
}

export const Watermark = memo(({ className }: WatermarkProps) => (
  <div className={cn('pointer-events-none select-none grayscale', className)}>
    <Image
      src={logoPng}
      alt="Watermark Sudety Grand Trail"
      width={140}
      height={140}
      className="rotate-12 object-contain"
    />
  </div>
));

Watermark.displayName = 'Watermark';
