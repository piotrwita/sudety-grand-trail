import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.about;

export default function AboutLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
