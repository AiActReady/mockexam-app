import Link from "next/link";

const AREAS = [
  {
    title: "Scope & discovery",
    good: "Defines scope clearly, finds likely Shadow AI, captures intended purpose and keeps unknowns visible.",
    watch: "Relies only on the official software list or implies coverage of systems not actually reviewed."
  },
  {
    title: "Role mapping",
    good: "Assigns roles system-by-system using contracts, branding, development/use facts and supply-chain evidence.",
    watch: "Labels the whole organisation once or equates provider with whoever wrote the code."
  },
  {
    title: "Classification reasoning",
    good: "Follows the current legal pathway, records evidence and explains exceptions/uncertainties reproducibly.",
    watch: "Uses gut feeling, old dates or broad labels such as ‘HR = prohibited’."
  },
  {
    title: "Evidence discipline",
    good: "Distinguishes design from operation, challenges weak claims and links conclusions to current evidence.",
    watch: "Treats interviews, policies or vendor marketing as proof without corroboration."
  },
  {
    title: "Implementation judgement",
    good: "Turns findings into proportionate actions with owners, dates, dependencies and closure evidence.",
    watch: "Produces vague recommendations or compliance scores with no executable plan."
  },
  {
    title: "Client communication",
    good: "Explains issues calmly in plain English, prioritises what matters and preserves trust while challenging evidence.",
    watch: "Uses alarmist penalty language, overclaims certainty or overwhelms executives with working-paper detail."
  },
  {
    title: "Escalation & boundaries",
    good: "Recognises material legal, privacy, security or technical uncertainty and escalates a precise evidence-backed question.",
    watch: "Bluffs through uncertainty, gives unsupported legal conclusions or forwards an unstructured problem to specialists."
  },
  {
    title: "Handover quality",
    good: "Leaves a reconciled inventory, decisions, evidence gaps, remediation roadmap, owners and clear next review triggers.",
    watch: "Leaves contradictions between working papers or unresolved issues that disappear from the final pack."
  },
];

export default function ClientReadyReviewGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy/client-ready" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Client-Ready stage</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">HUMAN REVIEW GUIDE</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">What good supervised practice looks like</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          Use this after a simulated engagement to structure coaching and peer review. It deliberately does not calculate an automated ‘client-ready’ decision; the reviewer should use the actual work, evidence and discussion to decide what further supervised practice is needed.
        </p>
      </header>

      <div className="mt-8 space-y-4">
        {AREAS.map((area) => (
          <section key={area.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">{area.title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Strong evidence</div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{area.good}</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)]">Coach / review</div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{area.watch}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Reviewer close-out</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Record specific strengths, specific gaps, examples from the learner's work, and the next supervised exercise needed. A quiz score alone should never be used as evidence that someone can independently handle a real client engagement.
        </p>
      </section>
    </div>
  );
}
