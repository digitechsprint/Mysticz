import { listFaqs } from '@/lib/data';
import { createFaqAction, deleteFaqAction, updateFaqAction } from '../../actions';

export const dynamic = 'force-dynamic';

const inputClass = 'w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-400';
const labelClass = 'mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500';

export default async function AdminFaqsPage() {
  const faqs = await listFaqs();

  return (
    <div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">FAQs</h1>

      <div className="flex flex-col gap-4">
        {faqs.map((faq) => {
          const action = updateFaqAction.bind(null, faq.id);
          return (
            <div key={faq.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
              <form action={action} className="flex flex-col gap-3">
                <label className="block">
                  <span className={labelClass}>Question</span>
                  <input name="question" required defaultValue={faq.question} className={inputClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Answer</span>
                  <textarea name="answer" required rows={3} defaultValue={faq.answer} className={inputClass + ' resize-y'} />
                </label>
                <div className="flex items-center gap-3">
                  <label className="block">
                    <span className={labelClass}>Order</span>
                    <input name="sort_order" type="number" defaultValue={faq.sort_order} className={inputClass + ' w-20'} />
                  </label>
                  <button type="submit" className="mt-5 rounded bg-neutral-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white">
                    Save
                  </button>
                </div>
              </form>
              <form action={deleteFaqAction.bind(null, faq.id)} className="mt-2">
                <button type="submit" className="text-xs font-medium text-red-400 hover:text-red-300">Delete</button>
              </form>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-lg border border-dashed border-neutral-700 p-5">
        <h2 className="m-0 mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">Add a FAQ</h2>
        <form action={createFaqAction} className="flex flex-col gap-3">
          <label className="block">
            <span className={labelClass}>Question</span>
            <input name="question" required className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Answer</span>
            <textarea name="answer" required rows={3} className={inputClass + ' resize-y'} />
          </label>
          <label className="block w-20">
            <span className={labelClass}>Order</span>
            <input name="sort_order" type="number" defaultValue={faqs.length} className={inputClass} />
          </label>
          <button type="submit" className="mt-1 w-fit rounded bg-neutral-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-900 hover:bg-white">
            Add FAQ
          </button>
        </form>
      </div>
    </div>
  );
}
