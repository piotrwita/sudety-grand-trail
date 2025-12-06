import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.trail;

export default function TrailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

