import Link from "next/link";

const INVENTORY_FIELDS = [
  "System/use-case name and plain-English description",
  "Intended purpose and decisions or content influenced",
  "Business owner, technical owner and day-to-day users",
  "Vendor/provider, model or upstream AI dependency",
  "Who is affected, including employees, customers or vulnerable groups",
  "Data inputs/outputs and indicators of personal or sensitive data",
  "Countries where the system is offered, deployed or its outputs are used",
  "Lifecycle status, system/model version and material change history",
  "Role hypothesis: provider, deployer, importer, distributor or other relevant role",
  "Evidence links, open questions, last review date and next review trigger",
];

const SHADOW_AI = [
  "Interview teams about what they actually use, including browser tools and personal/department subscriptions.",
  "Review procurement and expense-card records for low-value SaaS and AI subscriptions that bypassed central IT.",
  "Look at API and SSO/application telemetry where appropriate and authorised.",
  "Review vendor release notes and existing SaaS products for newly introduced AI features.",
  "Ask about spreadsheets, scripts, copilots and AI functions embedded inside tools already considered ‘approved’.",
  "Prioritise HR, finance, customer eligibility, healthcare, security, safety and other higher-consequence functions.",
];

const QUESTIONS = [
  "What does this system actually do, in one sentence?",
  "What decision, recommendation, ranking, prediction or content does it produce?",
  "Who decided to use it and for what intended purpose?",
  "Who built/provides it and whose name or trademark is on the final system?",
  "Who uses the output and how much influence does the output have?",
  "Who can be affected by a wrong, biased or misleading output?",
  "What data goes in, and where did the data/model come from?",
  "Has the purpose, model, data or feature set changed since approval?",
  "What monitoring, review and escalation happens after deployment?",
  "What evidence exists for each important statement we have just been told?",
];

export default function DiscoveryGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy/resources" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Resource library</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">FIELD GUIDE</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Discovery & AI inventory</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          The inventory is the factual foundation for role mapping, classification, evidence requests and remediation. Do not begin by scoring risk before you understand the use case.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Minimum inventory record</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {INVENTORY_FIELDS.map((item) => <div key={item} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm leading-relaxed">{item}</div>)}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Ten discovery questions</h2>
        <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {QUESTIONS.map((item, index) => <li key={item} className="flex gap-3"><span className="font-semibold text-[var(--color-primary)]">{index + 1}.</span><span>{item}</span></li>)}
        </ol>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Shadow AI discovery</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          The uploaded lesson pack emphasises that official records can be a ‘miasma map’: neat but incomplete. Use multiple discovery channels rather than relying on the approved software list.
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {SHADOW_AI.map((item) => <li key={item} className="flex gap-3"><span className="text-[var(--color-primary)]">✓</span><span>{item}</span></li>)}
        </ul>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">What good looks like</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Another consultant can read the inventory record and understand the system, purpose, people, data, supplier, geography, owners, version and evidence without needing the original workshop facilitator in the room.
        </p>
      </section>
    </div>
  );
}
