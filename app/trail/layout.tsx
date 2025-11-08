import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
