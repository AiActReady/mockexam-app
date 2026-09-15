import Link from "next/link";

const TESTS = [
  ["Relevant", "Does the artefact actually support the claim being made?"],
  ["Current", "Does it match the live system/version and the period being assessed?"],
  ["Attributable", "Can you identify the source, owner, approver and date?"],
  ["Sufficient", "Is it enough to support the consequence of the conclusion?"],
  ["Operational", "Does it show the control actually worked, not only that it was designed?"],
  ["Consistent", "Does it agree with interviews, logs, contracts, configuration and other evidence?"],
];

const EXAMPLES = [
  ["Claim", "A human reviews every AI-generated shortlist before candidates are rejected."],
  ["Weak evidence", "A policy saying human review is required."],
  ["Better evidence", "Procedure + reviewer training/competence + sampled review records + overrides/escalations + workflow/configuration evidence."],
  ["Possible conclusion", "Control is designed and appears to operate for the sampled period, subject to stated sampling limits."],
];

const WORKING_PAPERS = [
  "Separate facts, assumptions, interpretations and final conclusions.",
  "Give every material decision a date, owner/reviewer and evidence link.",
  "Record system/model version where a change could affect the conclusion.",
  "If evidence is missing, record the gap and what would close it instead of assuming completion.",
  "Retain why a conclusion changed when new evidence or updated guidance arrives.",
  "Write limitations so the reader knows what the evidence does not prove.",
  "Use neutral finding language: ‘we have not yet seen evidence that…’ rather than personal blame.",
];

export default function EvidenceGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy/resources" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Resource library</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">FIELD GUIDE</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Evidence quality & working papers</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          A client's statement is useful discovery information. It becomes a defensible conclusion only when the evidence is strong enough for the claim being made.
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTS.map(([title, body]) => (
          <article key={title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
            <h2 className="font-display text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Example: human oversight</h2>
        <div className="mt-5 space-y-3">
          {EXAMPLES.map(([label, text]) => (
            <div key={label} className="grid gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 md:grid-cols-[130px_1fr]">
              <div className="text-sm font-semibold text-[var(--color-primary)]">{label}</div>
              <div className="text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Working-paper discipline</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {WORKING_PAPERS.map((item) => <li key={item} className="flex gap-3"><span className="text-[var(--color-primary)]">✓</span><span>{item}</span></li>)}
        </ul>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Evidence chain</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Use the mental model: <span className="font-semibold">claim → evidence → owner/source → date/version → analysis → conclusion → limitation/action.</span> Another reviewer should be able to reproduce the reasoning.
        </p>
      </section>
    </div>
  );
}
