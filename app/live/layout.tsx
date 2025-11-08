import { pageMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.live;

export default function LiveLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
