import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client. Bypasses RLS — only ever import this from
 * server components, server actions or route handlers. Never expose to the client.
 */
export function supabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set.');
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
