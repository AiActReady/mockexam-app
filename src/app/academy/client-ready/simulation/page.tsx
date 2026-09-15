import Link from "next/link";

const SYSTEMS = [
  {
    name: "TalentRank EU",
    use: "Ranks job applicants and recommends who should progress to interview.",
    vendor: "Built internally using a third-party GPAI API plus proprietary ranking logic.",
    geography: "Used for hiring in the UK, Germany, France and the Netherlands.",
    evidence: "Product brief, prompt/ranking specification, sample outputs, HR process map. No formal role/classification memo yet.",
  },
  {
    name: "InterviewSense",
    use: "Analyses recorded candidate interviews and produces engagement and communication scores.",
    vendor: "US SaaS vendor.",
    geography: "Enabled for some EU recruitment campaigns.",
    evidence: "Vendor marketing page and contract only. HR says the feature is 'just analytics'.",
  },
  {
    name: "Support Copilot",
    use: "Drafts customer-support replies for staff; staff review before sending.",
    vendor: "Commercial GPAI service via API.",
    geography: "Global.",
    evidence: "Security review, basic acceptable-use guidance and API contract. No AI-specific monitoring metrics.",
  },
  {
    name: "Sales Prospect Score",
    use: "Scores B2B sales prospects for likelihood to buy.",
    vendor: "Feature inside an existing CRM platform.",
    geography: "UK and EU sales teams.",
    evidence: "No separate procurement. Feature appeared after a platform update six months ago.",
  },
  {
    name: "Shadow AI tools",
    use: "Employees expense or use free generative-AI tools for presentations, code, research and document drafting.",
    vendor: "Multiple unknown services.",
    geography: "Company-wide.",
    evidence: "Finance identified 14 AI-related card transactions; IT inventory lists only four approved AI tools.",
  },
];

const TASKS = [
  "Define the engagement scope, assumptions and immediate red flags.",
  "Build an AI inventory and identify missing fields/evidence for each system.",
  "Map likely provider/deployer/importer/distributor/GPAI relationships without over-claiming certainty.",
  "Triage prohibited-practice, high-risk, transparency and other applicable pathways.",
  "Identify what requires legal, privacy, security or technical escalation.",
  "Create an evidence request list and rate each current evidence set as strong, partial or missing.",
  "Produce a prioritised 30/60/90-day remediation plan with owners and definitions of done.",
  "Prepare a five-slide executive readout: what we found, why it matters, top decisions, actions and residual unknowns.",
];

export default function ClientReadySimulationPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/academy/client-ready" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
          ← Client-Ready Consultant
        </Link>
        <div className="text-sm text-[var(--color-text-subtle)]">Simulated engagement · internal readiness case</div>
      </div>

      <header className="mt-8 max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Northstar HR Technologies Ltd</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Client-ready capstone simulation</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
          Northstar is a 220-person UK SaaS company selling recruitment technology into Germany, France and the Netherlands.
          Leadership wants an AI Act Ready assessment before a major enterprise procurement cycle. You are the consultant.
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Business</div>
          <div className="mt-2 font-semibold">Recruitment SaaS</div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">Enterprise clients, EU expansion and investor due diligence.</p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Current governance</div>
          <div className="mt-2 font-semibold">Fragmented</div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">Security and GDPR processes exist; no central AI inventory or AIMS.</p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Your constraint</div>
          <div className="mt-2 font-semibold">Two-week assessment</div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">You must prioritise material risk and evidence rather than boil the ocean.</p>
        </div>
      </section>

      <section className="mt-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Discovered AI portfolio</div>
        <div className="mt-4 space-y-4">
          {SYSTEMS.map((system) => (
            <article key={system.name} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
              <h2 className="font-display text-xl font-semibold">{system.name}</h2>
              <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                <div><span className="font-semibold">Use:</span> <span className="text-[var(--color-text-muted)]">{system.use}</span></div>
                <div><span className="font-semibold">Vendor / build:</span> <span className="text-[var(--color-text-muted)]">{system.vendor}</span></div>
                <div><span className="font-semibold">Geography:</span> <span className="text-[var(--color-text-muted)]">{system.geography}</span></div>
                <div><span className="font-semibold">Evidence available:</span> <span className="text-[var(--color-text-muted)]">{system.evidence}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Your assignment</div>
        <h2 className="mt-2 font-display text-2xl font-semibold">Work the case as if this were a real client.</h2>
        <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {TASKS.map((task, index) => (
            <li key={task} className="flex gap-3">
              <span className="font-semibold text-[var(--color-primary)]">{index + 1}.</span>
              <span>{task}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Assessment standard</div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          You are not assessed on producing the most confident answer. You are assessed on correct role and risk reasoning, evidence discipline,
          prioritisation, clear client communication, and knowing which unresolved points must be escalated rather than guessed.
        </p>
      </section>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        Fictional training case. It is deliberately incomplete so that asking for evidence and recording uncertainty are part of the exercise.
      </p>
    </div>
  );
}
