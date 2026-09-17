import Link from 'next/link';
import { listArticles } from '@/lib/data';
import { deleteArticleAction } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function AdminArticlesPage() {
  const articles = await listArticles();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0 text-xl font-semibold text-neutral-100">Insights articles</h1>
        <Link href="/admin/articles/new" className="rounded bg-neutral-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white">
          New article
        </Link>
      </div>

      {articles.length === 0 ? (
        <p className="text-sm text-neutral-500">No articles yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {articles.map((a) => (
            <div key={a.id} className="flex items-center justify-between gap-4 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-100">{a.title}</span>
                  {!a.published && <span className="rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400">Draft</span>}
                </div>
                <div className="mt-0.5 truncate text-xs text-neutral-500">/insights/{a.slug} · {a.category}</div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <Link href={`/admin/articles/${a.id}`} className="text-xs font-medium text-neutral-300 hover:text-neutral-100">Edit</Link>
                <form action={deleteArticleAction.bind(null, a.id)}>
                  <button type="submit" className="text-xs font-medium text-red-400 hover:text-red-300">Delete</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
