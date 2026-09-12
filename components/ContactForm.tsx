'use client';
import { useState } from 'react';
import { services } from '@/lib/content';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="animate-[riseIn_.5s_ease_both]">
        <div className="mb-5 font-display text-[46px] leading-none text-gold-text">✓</div>
        <div className="mb-3.5 font-display text-[30px] font-medium leading-tight text-ink">Enquiry noted</div>
        <p className="m-0 mb-6 max-w-[38ch] text-[15px] leading-[1.8] text-body">
          In the live site this is where the confirmation appears. Nothing has been sent — the form is waiting to be wired to email or a CRM.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="border border-line-3 px-[30px] py-[17px] text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-2 transition-colors hover:border-gold-hover hover:text-olive"
        >
          Reset form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="flex flex-col gap-5"
    >
      <div className="font-display text-2xl font-semibold text-ink">Send an enquiry</div>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Name</span>
        <input type="text" required className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Email</span>
        <input type="email" required className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Phone</span>
        <input type="tel" className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Service</span>
        <select className="border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover">
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Message</span>
        <textarea rows={4} className="resize-y border border-line-2 bg-ivory px-3.5 py-3.5 text-[15px] leading-[1.6] text-ink outline-none focus:border-gold-hover" />
      </label>
      <button type="submit" className="btn btn-primary mt-1 justify-center">Send Enquiry</button>
      <p className="m-0 text-xs leading-[1.6] text-muted">Demo form — not yet connected to a mail service.</p>
    </form>
  );
}
