import type { MetadataRoute } from 'next';
import { siteUrl } from './common/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/faq', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/about', priority: 0.6 },
  ];
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
