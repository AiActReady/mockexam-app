import Link from "next/link";

const PHASES = [
  {
    title: "1. Kickoff & scope",
    items: ["Confirm entities, systems, business units, geographies and dates in scope.", "Agree deliverables, stakeholders, cadence and escalation route.", "Create assumptions, decisions, evidence-request and change logs."],
  },
  {
    title: "2. Discovery",
    items: ["Build the AI inventory from workshops plus technical, procurement and financial evidence.", "Look for Shadow AI and newly enabled SaaS features.", "Capture intended purpose, owners, people affected, data, vendor/model, geography and change history."],
  },
  {
    title: "3. Role & classification",
    items: ["Map provider/deployer/importer/distributor and relevant GPAI relationships per system.", "Screen prohibited practices, high-risk pathways and Article 50 transparency duties separately.", "Document negative as well as positive classifications so another reviewer can reproduce the reasoning."],
  },
  {
    title: "4. Evidence & gap analysis",
    items: ["Map applicable requirements/controls to evidence reviewed.", "Separate control design from evidence that the control operates.", "Record missing, stale or insufficient evidence as gaps with a clear closure requirement."],
  },
  {
    title: "5. Remediation",
    items: ["Prioritise by consequence, urgency, dependency and effort.", "Give each action an owner, target date, evidence of completion and definition of done.", "Track residual risk and management decisions where risks cannot be fully removed."],
  },
  {
    title: "6. Executive readout",
    items: ["Lead with the few material findings and business decisions leadership must understand.", "Show priority actions, owners, dependencies and timeline rather than replaying every working paper.", "State scope, assumptions and unresolved escalations clearly."],
  },
  {
    title: "7. Handover & follow-through",
    items: ["Reconcile the final inventory, role map, classifications, gaps, actions and evidence pack.", "Agree how the client will maintain the inventory, detect changes and monitor actions.", "Define next review points and any work requiring legal, privacy, security or technical specialists."],
  },
];

const REVIEW = [
  "Can another consultant reproduce every material classification from the facts and evidence?",
  "Does the report distinguish facts, assumptions, interpretations and unresolved questions?",
  "Do system versions and dates match the evidence and current deployment?",
  "Are current authoritative sources used where the training pack may be outdated?",
  "Does every material finding explain why it matters and what closes it?",
  "Do remediation actions have owners, dates and evidence-based definitions of done?",
  "Are scope limitations and deferred systems visible rather than implied to be assessed?",
  "Are specialist escalations precise, tracked and reflected back into final decisions?",
];

export default function DeliveryGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy/resources" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Resource library</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">FIELD GUIDE</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Client delivery & handover</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          A practical engagement flow for supervised training and later real delivery using the AI Act Ready tool. The objective is a defensible evidence-backed plan, not a vague compliance score.
        </p>
      </header>

      <div className="mt-8 space-y-4">
        {PHASES.map((phase) => (
          <section key={phase.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">{phase.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {phase.items.map((item) => <li key={item} className="flex gap-3"><span className="text-[var(--color-primary)]">✓</span><span>{item}</span></li>)}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Internal quality review before handover</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {REVIEW.map((item) => <li key={item} className="flex gap-3"><span className="text-[var(--color-primary)]">□</span><span>{item}</span></li>)}
        </ul>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6">
        <div className="font-semibold">Final handover pack</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          At minimum, expect a reconciled AI inventory, role/exposure map, classification rationale, evidence/gap register, prioritised remediation roadmap, decisions/assumptions/escalation record and executive readout. The exact pack should remain proportionate to the engagement scope.
        </p>
      </section>
    </div>
  );
}
