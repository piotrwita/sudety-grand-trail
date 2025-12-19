'use client';

import { MousePointerClickIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import type { IframeHTMLAttributes, ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

type InteractiveIframeProps = {
  className?: string;
  overlayAriaLabel?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  icon?: ReactNode;
  aspectRatio?: string;
} & IframeHTMLAttributes<HTMLIFrameElement>;

export const InteractiveIframe = ({
  className,
  overlayAriaLabel,
  overlayTitle = 'Interaktywny element',
  overlayDescription = 'Kliknij lub dotknij, aby korzystać',
  icon,
  aspectRatio = 'aspect-[3/4] md:aspect-video',
  ...iframeProps
}: InteractiveIframeProps) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

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
    <div className={cn('group relative overflow-hidden', className)}>
      <div
        className={cn(
          'relative w-full transition-all duration-500',
          aspectRatio
        )}
      >
        <iframe
          {...iframeProps}
          width={iframeProps.width ?? '100%'}
          height={iframeProps.height ?? '100%'}
          className="h-full w-full"
          style={{
            border: 'none',
            ...(iframeProps.style ?? {}),
            pointerEvents,
          }}
          loading={iframeProps.loading ?? 'lazy'}
          allowFullScreen={iframeProps.allowFullScreen ?? true}
        />

        {/* Overlay for interaction */}
        {(!isInteractive || isScrolling) && (
          <div
            onClick={enableInteraction}
            className="absolute inset-0 z-10 cursor-pointer bg-forest-900/5 transition-colors duration-300 hover:bg-forest-900/10"
            aria-label={overlayAriaLabel ?? overlayTitle}
          >
            <div className="flex h-full flex-col items-center justify-center p-4 text-center sm:p-6">
              <div
                className={cn(
                  'flex flex-col items-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105',
                  isMobile ? 'gap-2 p-4' : 'gap-4 p-6 sm:p-8'
                )}
              >
                <div
                  className={cn(
                    'relative flex items-center justify-center rounded-full bg-forest-100 text-forest-600',
                    isMobile ? 'h-12 w-12' : 'h-16 w-16 sm:h-20 sm:w-20'
                  )}
                >
                  {icon || (
                    <MousePointerClickIcon
                      className={isMobile ? 'size-6' : 'size-8 sm:size-10'}
                    />
                  )}
                  {icon && (
                    <div
                      className={cn(
                        'absolute -bottom-1 -right-1 flex animate-bounce items-center justify-center rounded-full bg-accent text-white shadow-lg',
                        isMobile ? 'h-6 w-6' : 'h-8 w-8'
                      )}
                    >
                      <MousePointerClickIcon
                        className={isMobile ? 'size-3' : 'size-4'}
                      />
                    </div>
                  )}
                </div>
                <div className="max-w-[180px] sm:max-w-none">
                  <h4
                    className={cn(
                      'font-bold text-forest-800',
                      isMobile ? 'text-sm' : 'mb-1 text-lg sm:text-xl'
                    )}
                  >
                    {overlayTitle}
                  </h4>
                  <p
                    className={cn(
                      'font-medium text-forest-600',
                      isMobile
                        ? 'text-[10px] leading-tight'
                        : 'text-sm sm:text-base'
                    )}
                  >
                    {overlayDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
