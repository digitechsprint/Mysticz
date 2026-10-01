import { SEO_PATHS, getCustomHeadCode, listSeoMeta } from '@/lib/data';
import { saveHeadCodeAction, saveSeoMeta } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function AdminSeoPage() {
  const rows = await listSeoMeta();
  const byPath = new Map(rows.map((r) => [r.path, r]));
  const headCode = await getCustomHeadCode();

  return (
    <div>
      <h1 className="m-0 mb-2 text-xl font-semibold text-neutral-100">SEO</h1>
      <p className="m-0 mb-8 text-sm text-neutral-500">
        Per-page title, meta description and Open Graph image. Leave a field blank to fall back to the site default for that page.
      </p>

      <div className="mb-10 rounded-lg border border-neutral-800 bg-neutral-900 p-5">
        <h2 className="m-0 mb-1 text-base font-semibold text-neutral-100">Site-wide head code</h2>
        <p className="m-0 mb-5 text-sm text-neutral-500">
          Paste tags here exactly as a platform gives them to you — a Search Console verification tag, a Google
          Analytics / GA4 snippet, a Meta Pixel, anything. Applies to every page. Only <code>&lt;meta&gt;</code>,{' '}
          <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> tags are recognised; anything else is ignored.
        </p>
        <form action={saveHeadCodeAction} className="flex flex-col gap-4">
          <textarea
            name="head_code"
            rows={8}
            defaultValue={headCode}
            placeholder={'<meta name="google-site-verification" content="..." />'}
            className="w-full resize-y rounded border border-neutral-700 bg-neutral-950 px-3 py-2 font-mono text-sm text-neutral-100 outline-none focus:border-neutral-400"
          />
          <button type="submit" className="mt-1 w-fit rounded bg-neutral-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white">
            Save
          </button>
        </form>
      </div>

      <h2 className="m-0 mb-4 text-base font-semibold text-neutral-100">Per-page overrides</h2>
      <div className="flex flex-col gap-4">
        {SEO_PATHS.map((path) => {
          const row = byPath.get(path);
          return (
            <details key={path} className="rounded-lg border border-neutral-800 bg-neutral-900 open:pb-5" open={SEO_PATHS.indexOf(path) === 0}>
              <summary className="cursor-pointer select-none px-5 py-4 text-sm font-medium text-neutral-100">
                {path} {row?.title ? <span className="ml-2 font-normal text-neutral-500">— {row.title}</span> : null}
              </summary>
              <form action={saveSeoMeta} className="flex flex-col gap-3 px-5 pt-1">
                <input type="hidden" name="path" value={path} />
                <label className="block">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Title</span>
                  <input
                    name="title"
                    defaultValue={row?.title ?? ''}
                    className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Meta description</span>
                  <textarea
                    name="description"
                    rows={2}
                    defaultValue={row?.description ?? ''}
                    className="w-full resize-y rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">OG image URL</span>
                  <input
                    name="og_image"
                    defaultValue={row?.og_image ?? ''}
                    placeholder="/images/logo-lockup.png"
                    className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
                  />
                </label>
                <button type="submit" className="mt-1 w-fit rounded bg-neutral-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white">
                  Save
                </button>
              </form>
            </details>
          );
        })}
      </div>
    </div>
  );
}
