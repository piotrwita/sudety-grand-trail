'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import type { IframeHTMLAttributes } from 'react';

type InteractiveIframeProps = {
  className?: string;
  overlayAriaLabel?: string;
} & IframeHTMLAttributes<HTMLIFrameElement>;

export const InteractiveIframe = ({
  className,
  overlayAriaLabel,
  ...iframeProps
}: InteractiveIframeProps) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsInteractive(false);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const enableInteraction = () => {
    setIsInteractive(true);
  };

  const pointerEvents = isInteractive && !isScrolling ? 'auto' : 'none';

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="relative aspect-video">
        <iframe
          {...iframeProps}
          width={iframeProps.width ?? '100%'}
          height={iframeProps.height ?? '100%'}
          style={{
            border: 'none',
            ...(iframeProps.style ?? {}),
            pointerEvents,
          }}
          loading={iframeProps.loading ?? 'lazy'}
          allowFullScreen={iframeProps.allowFullScreen ?? true}
        />
        {(!isInteractive || isScrolling) && (
          <div
            onClick={enableInteraction}
            className="absolute inset-0 z-10 cursor-pointer bg-transparent transition-opacity duration-200"
            aria-label={overlayAriaLabel ?? 'Kliknij na mapę, aby ją przesunąć'}
          />
        )}
      </div>
    </div>
  );
};
