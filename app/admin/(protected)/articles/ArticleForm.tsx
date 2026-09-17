'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import type { DbArticle } from '@/lib/data';

const inputClass = 'w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400';
const labelClass = 'mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500';

export default function ArticleForm({ article, action }: { article?: DbArticle; action: (formData: FormData) => Promise<void> }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      action={(formData: FormData) => {
        setError(null);
        startTransition(async () => {
          try {
            await action(formData);
            router.push('/admin/articles');
            router.refresh();
          } catch (e) {
            setError(e instanceof Error ? e.message : 'Something went wrong.');
          }
        });
      }}
      className="flex max-w-2xl flex-col gap-4"
    >
      {error && <p className="rounded border border-red-900 bg-red-950 px-3 py-2 text-sm text-red-300">{error}</p>}

      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className={labelClass}>Slug</span>
          <input name="slug" required defaultValue={article?.slug} className={inputClass} placeholder="my-article-slug" />
        </label>
        <label className="block">
          <span className={labelClass}>Category</span>
          <input name="category" defaultValue={article?.category} className={inputClass} placeholder="Vastu" />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Title</span>
        <input name="title" required defaultValue={article?.title} className={inputClass} />
      </label>

      <label className="block">
        <span className={labelClass}>Excerpt</span>
        <textarea name="excerpt" rows={2} defaultValue={article?.excerpt} className={inputClass + ' resize-y'} />
      </label>

      <label className="block">
        <span className={labelClass}>Body</span>
        <textarea name="body" rows={10} defaultValue={article?.body} className={inputClass + ' resize-y font-mono text-[13px]'} />
      </label>

      <label className="block">
        <span className={labelClass}>Image URL</span>
        <input name="image" defaultValue={article?.image} className={inputClass} placeholder="/images/vastu.png" />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className={labelClass}>Sort order</span>
          <input name="sort_order" type="number" defaultValue={article?.sort_order ?? 0} className={inputClass} />
        </label>
        <label className="flex items-center gap-2 pt-6">
          <input type="checkbox" name="published" defaultChecked={article?.published ?? true} className="h-4 w-4 rounded border-neutral-700 bg-neutral-950" />
          <span className="text-sm text-neutral-300">Published</span>
        </label>
      </div>

      <button type="submit" disabled={pending} className="mt-2 w-fit rounded bg-neutral-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white disabled:opacity-60">
        {pending ? 'Saving…' : 'Save article'}
      </button>
    </form>
  );
}
