import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.hallOfFame;

export default function HallOfFameLayout({
  children,
}: React.PropsWithChildren) {
  return <>{children}</>;
}
