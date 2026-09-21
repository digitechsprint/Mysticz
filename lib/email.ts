import 'server-only';
import { site } from '@/lib/site';
import type { LeadInput } from '@/lib/data';

/**
 * Emails a new lead to the site owner via Resend. No-ops (logs a warning)
 * if RESEND_API_KEY isn't configured, so form submissions never fail
 * because email isn't set up yet.
 */
export async function sendLeadEmail(lead: LeadInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY not set — skipping lead notification email.');
    return;
  }

  const to = process.env.LEAD_NOTIFICATION_EMAIL || site.email;
  const from = process.env.RESEND_FROM_EMAIL || 'Mysticz Website <onboarding@resend.dev>';
  const kind = lead.type === 'booking' ? 'Booking request' : 'Contact enquiry';

  const rows: Array<[string, string | null]> = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Service', lead.service],
    ['Consultation type', lead.consultation_type],
    ['Preferred date', lead.preferred_date],
  ];

  const html = `
    <div style="font-family: sans-serif; color: #16130F;">
      <h2 style="margin: 0 0 16px;">${kind}, Mysticz</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .filter(([, value]) => value)
          .map(([label, value]) => `<tr><td style="font-weight:600; vertical-align:top;">${label}</td><td>${value}</td></tr>`)
          .join('')}
      </table>
      ${lead.message ? `<p style="margin-top:16px; white-space: pre-wrap;"><strong>Message</strong><br/>${lead.message}</p>` : ''}
    </div>
  `.trim();

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: lead.email || undefined,
        subject: `${kind} from ${lead.name}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error('[email] Resend request failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('[email] Failed to send lead notification:', err);
  }
}
