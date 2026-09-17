import Link from 'next/link';
import { listArticles, listFaqs, listLeads, listTestimonials } from '@/lib/data';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const [articles, faqs, testimonials, leads] = await Promise.all([listArticles(), listFaqs(), listTestimonials(), listLeads()]);
  const recentLeads = leads.slice(0, 5);

  const stats = [
    { label: 'Articles', value: articles.length, href: '/admin/articles' },
    { label: 'FAQs', value: faqs.length, href: '/admin/faqs' },
    { label: 'Testimonials', value: testimonials.length, href: '/admin/testimonials' },
    { label: 'Leads', value: leads.length, href: '/admin/leads' },
  ];

  return (
    <div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">Dashboard</h1>

      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 transition-colors hover:border-neutral-700">
            <div className="text-2xl font-semibold text-neutral-100">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">{s.label}</div>
          </Link>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="m-0 text-sm font-semibold uppercase tracking-wide text-neutral-400">Recent leads</h2>
        <Link href="/admin/leads" className="text-xs text-neutral-500 hover:text-neutral-300">View all →</Link>
      </div>

      {recentLeads.length === 0 ? (
        <p className="text-sm text-neutral-500">No enquiries yet.</p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-800 text-xs uppercase tracking-wide text-neutral-500">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Received</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-neutral-900 last:border-0">
                  <td className="px-4 py-3 text-neutral-200">{lead.name}</td>
                  <td className="px-4 py-3 capitalize text-neutral-400">{lead.type}</td>
                  <td className="px-4 py-3 text-neutral-400">{lead.service ?? '—'}</td>
                  <td className="px-4 py-3 text-neutral-500">{new Date(lead.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
