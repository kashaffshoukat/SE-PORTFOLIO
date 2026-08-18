import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!url || !anonKey) {
  // Fallback to non-prefixed env names for compatibility.
}

export const supabase = createClient(
  url ?? '',
  anonKey ?? '',
  {
    auth: { persistSession: false },
  }
);

export const supabaseConfigured = Boolean(url && anonKey);
