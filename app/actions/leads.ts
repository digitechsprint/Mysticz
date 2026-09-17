'use server';

import { createLead } from '@/lib/data';

export async function submitContactLead(formData: FormData): Promise<{ ok: boolean }> {
  try {
    await createLead({
      type: 'contact',
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim() || null,
      phone: String(formData.get('phone') ?? '').trim() || null,
      service: String(formData.get('service') ?? '').trim() || null,
      message: String(formData.get('message') ?? '').trim() || null,
      consultation_type: null,
      preferred_date: null,
    });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export async function submitBookingLead(formData: FormData): Promise<{ ok: boolean }> {
  try {
    await createLead({
      type: 'booking',
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim() || null,
      phone: String(formData.get('phone') ?? '').trim() || null,
      service: String(formData.get('service') ?? '').trim() || null,
      message: String(formData.get('message') ?? '').trim() || null,
      consultation_type: String(formData.get('consultation_type') ?? '').trim() || null,
      preferred_date: String(formData.get('preferred_date') ?? '').trim() || null,
    });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
