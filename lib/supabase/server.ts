import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Service-role Supabase client. Bypasses RLS — only ever import this from
 * server components, server actions or route handlers. Never expose to the client.
 *
 * Passes cache: 'no-store' on every request. Next.js patches the global
 * fetch() to cache indefinitely by default, which would otherwise apply to
 * supabase-js's internal requests too — meaning a page could keep serving
 * data from whatever was in the database the first time it was ever built,
 * regardless of revalidatePath calls after admin edits. Freshness here is
 * handled entirely by revalidatePath + each page's own caching, not by
 * Next's opaque fetch cache.
 */
export function supabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set.');
  }
  return createClient(url, key, {
    auth: { persistSession: false },
    global: { fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }) },
  });
}
