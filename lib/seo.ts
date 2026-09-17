import 'server-only';
import type { Metadata } from 'next';
import { getSeoMeta } from '@/lib/data';

/** Merges a page's default metadata with any admin-set override for that path. */
export async function pageMetadata(path: string, fallback: { title: string; description: string }): Promise<Metadata> {
  const row = await getSeoMeta(path);
  const title = row?.title?.trim() || fallback.title;
  const description = row?.description?.trim() || fallback.description;

  return {
    title,
    description,
    openGraph: { title, description, ...(row?.og_image ? { images: [row.og_image] } : {}) },
  };
}
