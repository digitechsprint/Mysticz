'use client';
import { useState, useTransition } from 'react';
import { submitBookingLead } from '@/app/actions/leads';
import { services } from '@/lib/content';

export default function BookingForm() {
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState<'online' | 'offline'>('online');
  const [pending, startTransition] = useTransition();

  if (booked) {
    return (
      <div className="animate-[riseIn_.5s_ease_both]">
        <div className="mb-5 font-display text-[46px] leading-none text-gold-text">✓</div>
        <div className="mb-3.5 font-display text-[30px] font-medium leading-tight text-ink">Request received</div>
        <p className="m-0 mb-6 max-w-[38ch] text-[15px] leading-[1.8] text-body">
          Thank you — your request has been received. Bhavika will reply to confirm your slot.
        </p>
        <button
          type="button"
          onClick={() => setBooked(false)}
          className="border border-line-3 px-[30px] py-[17px] text-[11.5px] font-semibold uppercase tracking-[0.16em] text-gold-text transition-colors hover:border-gold-hover"
        >
          Request another
        </button>
      </div>
    );
  }

  return (
    <form
      action={(formData: FormData) => {
        setError(false);
        startTransition(async () => {
          const result = await submitBookingLead(formData);
          if (result.ok) setBooked(true);
          else setError(true);
        });
      }}
      className="flex flex-col gap-5"
    >
      <div className="font-display text-[26px] font-medium leading-[1.3] text-ink">Request a session</div>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Name</span>
        <input name="name" type="text" required className="border border-line-2 bg-card px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex min-w-0 flex-col gap-2">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Phone</span>
          <input name="phone" type="tel" required className="min-w-0 border border-line-2 bg-card px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
        </label>
        <label className="flex min-w-0 flex-col gap-2">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Email</span>
          <input name="email" type="email" required className="min-w-0 border border-line-2 bg-card px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Service</span>
        <select name="service" className="border border-line-2 bg-card px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover">
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Corporate session</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <div className="flex flex-col gap-2.5">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Consultation type</span>
        <input type="hidden" name="consultation_type" value={mode === 'online' ? 'Online' : 'In person'} />
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => setMode('online')}
            className={['flex-1 border px-2.5 py-4 text-xs font-medium uppercase tracking-[0.1em] transition-colors', mode === 'online' ? 'border-gold-line bg-card text-ink' : 'border-line-2 bg-card text-body hover:border-gold-line'].join(' ')}
          >
            {mode === 'online' ? 'Online ✓' : 'Online'}
          </button>
          <button
            type="button"
            onClick={() => setMode('offline')}
            className={['flex-1 border px-2.5 py-4 text-xs font-medium uppercase tracking-[0.1em] transition-colors', mode === 'offline' ? 'border-gold-line bg-card text-ink' : 'border-line-2 bg-card text-body hover:border-gold-line'].join(' ')}
          >
            {mode === 'offline' ? 'In person ✓' : 'In person'}
          </button>
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Preferred date</span>
        <input name="preferred_date" type="date" className="border border-line-2 bg-card px-3.5 py-3.5 text-[15px] text-ink outline-none focus:border-gold-hover" />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">Message</span>
        <textarea name="message" rows={3} className="resize-y border border-line-2 bg-card px-3.5 py-3.5 text-[15px] leading-[1.6] text-ink outline-none focus:border-gold-hover" />
      </label>

      <button type="submit" disabled={pending} className="btn btn-primary mt-1 justify-center disabled:opacity-60">
        {pending ? 'Sending…' : 'Request Consultation'}
      </button>
      {error && <p className="m-0 text-xs leading-[1.6] text-red-600">Something went wrong — please try again.</p>}
    </form>
  );
}
