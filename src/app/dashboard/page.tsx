import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// MVP placeholder: readiness/streak/weakest-area will be computed from
// question_attempts + revision_items once seed content exists (Stage 2).
// Wired to real auth now so the shell is genuinely functional.
export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .single();

  const name = (profile as { display_name?: string } | null)?.display_name ?? "there";

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold">Good to see you, {name}</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Once seed content is loaded (Stage 2), this page shows your readiness
        score, streak, revision due, and weakest topic — with one button:
        Continue learning.
      </p>

      <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8">
        <p className="text-sm text-[var(--color-text-subtle)]">Coming in Stage 2</p>
        <p className="mt-2 font-display text-lg font-semibold">
          Readiness ring · streak · revision due · weakest area
        </p>
      </div>
    </div>
  );
}
