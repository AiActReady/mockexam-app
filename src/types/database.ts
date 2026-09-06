/**
 * Hand-maintained placeholder for the generated Supabase types.
 * Once the Supabase project exists, replace this file with the real
 * generated types:
 *
 *   npx supabase gen types typescript --project-id <project-ref> > src/types/database.ts
 *
 * Keeping the shape here in the meantime so the rest of the app can import
 * `Database` without every query being untyped.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, { Row: Record<string, Json>; Insert: Record<string, Json>; Update: Record<string, Json> }>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
