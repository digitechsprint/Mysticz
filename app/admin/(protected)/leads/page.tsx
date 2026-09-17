import { listLeads } from '@/lib/data';
import { deleteLeadAction } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function AdminLeadsPage() {
  const leads = await listLeads();

  return (
    <div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">Leads</h1>

      {leads.length === 0 ? (
        <p className="text-sm text-neutral-500">No enquiries yet. Contact and booking form submissions will appear here.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {leads.map((lead) => (
            <div key={lead.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${lead.type === 'booking' ? 'bg-amber-900 text-amber-200' : 'bg-neutral-800 text-neutral-300'}`}>
                    {lead.type}
                  </span>
                  <span className="text-sm font-medium text-neutral-100">{lead.name}</span>
                </div>
                <span className="text-xs text-neutral-500">{new Date(lead.created_at).toLocaleString()}</span>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Email</dt>
                  <dd className="text-neutral-300">{lead.email || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Phone</dt>
                  <dd className="text-neutral-300">{lead.phone || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">Service</dt>
                  <dd className="text-neutral-300">{lead.service || '—'}</dd>
                </div>
                {lead.type === 'booking' && (
                  <>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-neutral-500">Preference</dt>
                      <dd className="text-neutral-300">{lead.consultation_type || '—'}{lead.preferred_date ? ` · ${lead.preferred_date}` : ''}</dd>
                    </div>
                  </>
                )}
              </dl>

              {lead.message && <p className="mt-3 whitespace-pre-wrap text-sm text-neutral-400">{lead.message}</p>}

              <form action={deleteLeadAction.bind(null, lead.id)} className="mt-3">
                <button type="submit" className="text-xs font-medium text-red-400 hover:text-red-300">Delete</button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
