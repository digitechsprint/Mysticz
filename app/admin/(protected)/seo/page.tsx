import { SEO_PATHS, getSiteSettings, listSeoMeta } from '@/lib/data';
import { saveSeoMeta, saveSiteSettingsAction } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function AdminSeoPage() {
  const rows = await listSeoMeta();
  const byPath = new Map(rows.map((r) => [r.path, r]));
  const settings = await getSiteSettings();
  const customMetaLines = (settings?.custom_meta ?? []).map((t) => `${t.name}: ${t.content}`).join('\n');

  return (
    <div>
      <h1 className="m-0 mb-2 text-xl font-semibold text-neutral-100">SEO</h1>
      <p className="m-0 mb-8 text-sm text-neutral-500">
        Per-page title, meta description and Open Graph image. Leave a field blank to fall back to the site default for that page.
      </p>

      <div className="mb-10 rounded-lg border border-neutral-800 bg-neutral-900 p-5">
        <h2 className="m-0 mb-1 text-base font-semibold text-neutral-100">Site-wide head tags</h2>
        <p className="m-0 mb-5 text-sm text-neutral-500">
          Applies to every page. Use this for search engine verification, analytics, and any other tag a platform asks
          you to add — without needing a code change.
        </p>
        <form action={saveSiteSettingsAction} className="flex flex-col gap-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Google Search Console verification code
            </span>
            <input
              name="google_site_verification"
              defaultValue={settings?.google_site_verification ?? ''}
              placeholder="Paste just the content value, e.g. abc123XYZ..."
              className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Bing Webmaster Tools verification code
            </span>
            <input
              name="bing_site_verification"
              defaultValue={settings?.bing_site_verification ?? ''}
              placeholder="Paste just the content value"
              className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Google Analytics (GA4) measurement ID
            </span>
            <input
              name="ga4_measurement_id"
              defaultValue={settings?.ga4_measurement_id ?? ''}
              placeholder="G-XXXXXXXXXX"
              className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Other meta tags (one per line, as <code>name: content</code>)
            </span>
            <textarea
              name="custom_meta_lines"
              rows={4}
              defaultValue={customMetaLines}
              placeholder={'facebook-domain-verification: abc123\np:domain_verify: abc123'}
              className="w-full resize-y rounded border border-neutral-700 bg-neutral-950 px-3 py-2 font-mono text-sm text-neutral-100 outline-none focus:border-neutral-400"
            />
          </label>
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
