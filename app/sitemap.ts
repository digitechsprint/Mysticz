import type { MetadataRoute } from 'next';
import { articles, services } from '@/lib/content';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/insights',
    '/faq',
    '/contact',
    '/book-consultation',
    '/privacy-policy',
    '/terms',
  ];

  const serviceRoutes = services.map((s) => '/services/' + s.slug);
  const subServiceRoutes = services.flatMap((s) => s.list.map((item) => `/services/${s.slug}/${item.slug}`));
  const articleRoutes = articles.map((a) => '/insights/' + a.slug);

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes, ...articleRoutes].map((path) => ({
    url: site.url + path,
    lastModified: new Date(),
  }));
}
