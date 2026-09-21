'use client';
import { useState, useTransition } from 'react';
import { submitContactLead } from '@/app/actions/leads';
import { services } from '@/lib/content';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();

  if (sent) {
    return (
      <div className="animate-[riseIn_.5s_ease_both]">
        <div className="mb-5 font-display text-[46px] leading-none text-gold-text">✓</div>
        <div className="mb-3.5 font-display text-[30px] font-medium leading-tight text-ink">Enquiry noted</div>
        <p className="m-0 mb-6 max-w-[38ch] text-[15px] leading-[1.8] text-body">
          Thank you. Your enquiry has been received, and Bhavika will get back to you within working hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="border border-line-3 px-[30px] py-[17px] text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-2 transition-colors hover:border-gold-hover hover:text-olive"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      action={(formData: FormData) => {
        setError(false);
        startTransition(async () => {
          const result = await submitContactLead(formData);
          if (result.ok) setSent(true);
          else setError(true);
        });
      }}
      className="flex flex-col gap-5"
    >
      <div className="font-display text-2xl font-semibold text-ink">Send an enquiry</div>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Name</span>
        <input name="name" type="text" required className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Email</span>
        <input name="email" type="email" required className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Phone</span>
        <input name="phone" type="tel" className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Service</span>
        <select name="service" className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover">
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Message</span>
        <textarea name="message" rows={4} className="resize-y border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] leading-[1.6] text-ink outline-none focus:border-gold-hover" />
      </label>
      <button type="submit" disabled={pending} className="btn btn-primary mt-1 justify-center disabled:opacity-60">
        {pending ? 'Sending…' : 'Send Enquiry'}
      </button>
      {error && <p className="m-0 text-xs leading-[1.6] text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
