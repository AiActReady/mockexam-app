import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only admin client using the service role key. This bypasses RLS —
 * NEVER import this into a client component or expose the service role key
 * to the browser. Use only in trusted server contexts (route handlers,
 * server actions) for tasks like seeding, aggregate analytics, or admin
 * content moderation that legitimately needs to cross RLS boundaries.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
