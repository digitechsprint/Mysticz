'use server';

import { createLead, type LeadInput } from '@/lib/data';
import { sendLeadEmail } from '@/lib/email';

async function submit(lead: LeadInput): Promise<{ ok: boolean }> {
  try {
    await createLead(lead);
  } catch {
    return { ok: false };
  }
  // Email notification is best-effort — the lead is already saved either way.
  await sendLeadEmail(lead).catch(() => {});
  return { ok: true };
}

export async function submitContactLead(formData: FormData): Promise<{ ok: boolean }> {
  return submit({
    type: 'contact',
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim() || null,
    phone: String(formData.get('phone') ?? '').trim() || null,
    service: String(formData.get('service') ?? '').trim() || null,
    message: String(formData.get('message') ?? '').trim() || null,
    consultation_type: null,
    preferred_date: null,
  });
}

export async function submitBookingLead(formData: FormData): Promise<{ ok: boolean }> {
  return submit({
    type: 'booking',
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim() || null,
    phone: String(formData.get('phone') ?? '').trim() || null,
    service: String(formData.get('service') ?? '').trim() || null,
    message: String(formData.get('message') ?? '').trim() || null,
    consultation_type: String(formData.get('consultation_type') ?? '').trim() || null,
    preferred_date: String(formData.get('preferred_date') ?? '').trim() || null,
  });
}
