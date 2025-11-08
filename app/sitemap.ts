import { MetadataRoute } from 'next';
import { siteMetadata } from '@/config/metadata';
import { routeConfig } from '@/config/site-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return routeConfig.map((route) => ({
    url: `${siteMetadata.siteUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
