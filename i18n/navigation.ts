import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Navigation utilities for next-intl
 * These provide locale-aware routing components and hooks
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
