import 'server-only';
import { supabaseAdmin } from '@/lib/supabase/server';

export interface SeoMeta {
  path: string;
  title: string | null;
  description: string | null;
  og_image: string | null;
  updated_at: string;
}

export interface DbArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface DbFaq {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
}

export interface DbTestimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  sort_order: number;
  created_at: string;
}

export interface DbLead {
  id: string;
  type: 'contact' | 'booking';
  name: string;
  email: string | null;
  phone: string | null;
  service: string | null;
  message: string | null;
  consultation_type: string | null;
  preferred_date: string | null;
  created_at: string;
}

// --- SEO -------------------------------------------------------------

/** Known site routes the admin can attach SEO overrides to. */
export const SEO_PATHS = [
  '/',
  '/about',
  '/services',
  '/services/vastu',
  '/services/numerology',
  '/services/inner-child-healing',
  '/services/lama-fera',
  '/insights',
  '/faq',
  '/contact',
  '/book-consultation',
] as const;

export async function getSeoMeta(path: string): Promise<SeoMeta | null> {
  const { data, error } = await supabaseAdmin().from('seo_meta').select('*').eq('path', path).maybeSingle();
  if (error) return null;
  return data;
}

export async function listSeoMeta(): Promise<SeoMeta[]> {
  const { data, error } = await supabaseAdmin().from('seo_meta').select('*');
  if (error) return [];
  return data ?? [];
}

export async function upsertSeoMeta(path: string, fields: { title: string; description: string; og_image: string }) {
  const { error } = await supabaseAdmin()
    .from('seo_meta')
    .upsert({ path, ...fields, updated_at: new Date().toISOString() }, { onConflict: 'path' });
  if (error) throw new Error(error.message);
}

// --- Articles ----------------------------------------------------------

export async function listArticles(opts: { publishedOnly?: boolean } = {}): Promise<DbArticle[]> {
  let query = supabaseAdmin().from('articles').select('*').order('sort_order', { ascending: true });
  if (opts.publishedOnly) query = query.eq('published', true);
  const { data, error } = await query;
  if (error) return [];
  return data ?? [];
}

export async function getArticleBySlug(slug: string): Promise<DbArticle | null> {
  const { data, error } = await supabaseAdmin().from('articles').select('*').eq('slug', slug).maybeSingle();
  if (error) return null;
  return data;
}

export async function getArticleById(id: string): Promise<DbArticle | null> {
  const { data, error } = await supabaseAdmin().from('articles').select('*').eq('id', id).maybeSingle();
  if (error) return null;
  return data;
}

export type ArticleInput = Pick<DbArticle, 'slug' | 'category' | 'title' | 'excerpt' | 'body' | 'image' | 'published' | 'sort_order'>;

export async function createArticle(input: ArticleInput) {
  const { error } = await supabaseAdmin().from('articles').insert(input);
  if (error) throw new Error(error.message);
}

export async function updateArticle(id: string, input: ArticleInput) {
  const { error } = await supabaseAdmin()
    .from('articles')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteArticle(id: string) {
  const { error } = await supabaseAdmin().from('articles').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// --- FAQs ----------------------------------------------------------------

export async function listFaqs(): Promise<DbFaq[]> {
  const { data, error } = await supabaseAdmin().from('faqs').select('*').order('sort_order', { ascending: true });
  if (error) return [];
  return data ?? [];
}

export type FaqInput = Pick<DbFaq, 'question' | 'answer' | 'sort_order'>;

export async function createFaq(input: FaqInput) {
  const { error } = await supabaseAdmin().from('faqs').insert(input);
  if (error) throw new Error(error.message);
}

export async function updateFaq(id: string, input: FaqInput) {
  const { error } = await supabaseAdmin().from('faqs').update(input).eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteFaq(id: string) {
  const { error } = await supabaseAdmin().from('faqs').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// --- Testimonials ----------------------------------------------------------

export async function listTestimonials(): Promise<DbTestimonial[]> {
  const { data, error } = await supabaseAdmin().from('testimonials').select('*').order('sort_order', { ascending: true });
  if (error) return [];
  return data ?? [];
}

export type TestimonialInput = Pick<DbTestimonial, 'name' | 'service' | 'quote' | 'sort_order'>;

export async function createTestimonial(input: TestimonialInput) {
  const { error } = await supabaseAdmin().from('testimonials').insert(input);
  if (error) throw new Error(error.message);
}

export async function updateTestimonial(id: string, input: TestimonialInput) {
  const { error } = await supabaseAdmin().from('testimonials').update(input).eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteTestimonial(id: string) {
  const { error } = await supabaseAdmin().from('testimonials').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// --- Leads -------------------------------------------------------------

export type LeadInput = Omit<DbLead, 'id' | 'created_at'>;

export async function createLead(input: LeadInput) {
  const { error } = await supabaseAdmin().from('leads').insert(input);
  if (error) throw new Error(error.message);
}

export async function listLeads(): Promise<DbLead[]> {
  const { data, error } = await supabaseAdmin().from('leads').select('*').order('created_at', { ascending: false });
  if (error) return [];
  return data ?? [];
}

export async function deleteLead(id: string) {
  const { error } = await supabaseAdmin().from('leads').delete().eq('id', id);
  if (error) throw new Error(error.message);
}
