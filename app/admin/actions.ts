'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { ADMIN_COOKIE_NAME, checkPassword, createSessionToken } from '@/lib/admin/auth';
import {
  createArticle,
  createFaq,
  createTestimonial,
  deleteArticle,
  deleteFaq,
  deleteLead,
  deleteTestimonial,
  updateArticle,
  updateFaq,
  updateTestimonial,
  upsertSeoMeta,
  type ArticleInput,
} from '@/lib/data';

// --- Auth ----------------------------------------------------------------

export async function login(formData: FormData): Promise<{ error: string } | void> {
  const password = String(formData.get('password') ?? '');
  if (!password || !checkPassword(password)) {
    return { error: 'Incorrect password.' };
  }
  const session = await createSessionToken();
  const jar = await cookies();
  jar.set(ADMIN_COOKIE_NAME, session.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: session.maxAge,
  });
  redirect('/admin');
}

export async function logout() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE_NAME);
  redirect('/admin/login');
}

// --- SEO -------------------------------------------------------------------

export async function saveSeoMeta(formData: FormData) {
  const path = String(formData.get('path') ?? '');
  if (!path) throw new Error('Missing path.');
  await upsertSeoMeta(path, {
    title: String(formData.get('title') ?? ''),
    description: String(formData.get('description') ?? ''),
    og_image: String(formData.get('og_image') ?? ''),
  });
  revalidatePath(path);
  revalidatePath('/admin/seo');
}

// --- Articles ----------------------------------------------------------------

function articleInputFromForm(formData: FormData): ArticleInput {
  return {
    slug: String(formData.get('slug') ?? '').trim(),
    category: String(formData.get('category') ?? '').trim(),
    title: String(formData.get('title') ?? '').trim(),
    excerpt: String(formData.get('excerpt') ?? '').trim(),
    body: String(formData.get('body') ?? ''),
    image: String(formData.get('image') ?? '').trim(),
    published: formData.get('published') === 'on',
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
  };
}

export async function createArticleAction(formData: FormData) {
  const input = articleInputFromForm(formData);
  await createArticle(input);
  revalidatePath('/insights');
  revalidatePath('/admin/articles');
  redirect('/admin/articles');
}

export async function updateArticleAction(id: string, formData: FormData) {
  const input = articleInputFromForm(formData);
  await updateArticle(id, input);
  revalidatePath('/insights');
  revalidatePath('/insights/' + input.slug);
  revalidatePath('/admin/articles');
  redirect('/admin/articles');
}

export async function deleteArticleAction(id: string) {
  await deleteArticle(id);
  revalidatePath('/insights');
  revalidatePath('/admin/articles');
}

// --- FAQs ----------------------------------------------------------------

export async function createFaqAction(formData: FormData) {
  await createFaq({
    question: String(formData.get('question') ?? '').trim(),
    answer: String(formData.get('answer') ?? '').trim(),
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
  });
  revalidatePath('/faq');
  revalidatePath('/admin/faqs');
}

export async function updateFaqAction(id: string, formData: FormData) {
  await updateFaq(id, {
    question: String(formData.get('question') ?? '').trim(),
    answer: String(formData.get('answer') ?? '').trim(),
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
  });
  revalidatePath('/faq');
  revalidatePath('/admin/faqs');
}

export async function deleteFaqAction(id: string) {
  await deleteFaq(id);
  revalidatePath('/faq');
  revalidatePath('/admin/faqs');
}

// --- Testimonials ----------------------------------------------------------

export async function createTestimonialAction(formData: FormData) {
  await createTestimonial({
    name: String(formData.get('name') ?? '').trim(),
    service: String(formData.get('service') ?? '').trim(),
    quote: String(formData.get('quote') ?? '').trim(),
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
  });
  revalidatePath('/');
  revalidatePath('/admin/testimonials');
}

export async function updateTestimonialAction(id: string, formData: FormData) {
  await updateTestimonial(id, {
    name: String(formData.get('name') ?? '').trim(),
    service: String(formData.get('service') ?? '').trim(),
    quote: String(formData.get('quote') ?? '').trim(),
    sort_order: Number(formData.get('sort_order') ?? 0) || 0,
  });
  revalidatePath('/');
  revalidatePath('/admin/testimonials');
}

export async function deleteTestimonialAction(id: string) {
  await deleteTestimonial(id);
  revalidatePath('/');
  revalidatePath('/admin/testimonials');
}

// --- Leads -------------------------------------------------------------

export async function deleteLeadAction(id: string) {
  await deleteLead(id);
  revalidatePath('/admin/leads');
}
