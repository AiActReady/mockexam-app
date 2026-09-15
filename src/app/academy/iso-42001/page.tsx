import Link from "next/link";

const CLAUSES = [
  {
    clause: "4",
    title: "Context of the organisation",
    focus: "Why the AIMS exists, its scope, interested parties and the organisational context that shapes AI governance.",
    evidence: "AIMS scope, context analysis, interested-party needs, boundaries and interfaces."
  },
  {
    clause: "5",
    title: "Leadership",
    focus: "Leadership commitment, governance direction, policy and clear responsibility for the management system.",
    evidence: "AI policy, leadership decisions, roles/RACI, governance forums and accountability."
  },
  {
    clause: "6",
    title: "Planning",
    focus: "Risks and opportunities, objectives, planned changes and the actions needed to achieve responsible AI outcomes.",
    evidence: "Risk methodology/register, objectives, treatment plans, change planning and ownership."
  },
  {
    clause: "7",
    title: "Support",
    focus: "Resources, competence, awareness, communication and controlled documented information.",
    evidence: "Competence matrix, literacy/training evidence, communications, document control and resource decisions."
  },
  {
    clause: "8",
    title: "Operation",
    focus: "The repeatable operational processes that turn policy and plans into AI risk, impact and lifecycle governance.",
    evidence: "Operational procedures, AI risk assessment/treatment, impact assessments, supplier/lifecycle controls and records."
  },
  {
    clause: "9",
    title: "Performance evaluation",
    focus: "How the organisation knows whether the AIMS is working through measurement, internal audit and management review.",
    evidence: "KPIs/monitoring, audit programme and reports, management-review inputs, decisions and action tracking."
  },
  {
    clause: "10",
    title: "Improvement",
    focus: "How problems are corrected, causes addressed and the AIMS continually improved.",
    evidence: "Nonconformities, root-cause analysis, corrective actions, effectiveness checks and improvement log."
  },
];

const ANNEX_THEMES = [
  "Policies for AI",
  "Internal organisation and accountability",
  "Resources for AI systems",
  "Assessment of impacts of AI systems",
  "AI system lifecycle governance",
  "Data governance",
  "Information for interested parties",
  "Responsible use of AI systems",
  "Third-party and customer relationships",
];

const PDCA = [
  ["PLAN", "Context + leadership + risks/opportunities + objectives + selected controls."],
  ["DO", "Resources, competence, communication and operational lifecycle/risk/impact processes."],
  ["CHECK", "Monitor performance, audit the system and bring results to management review."],
  ["ACT", "Correct problems, address root causes and improve the management system."],
];

export default function Iso42001GuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Consultant Academy</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">ISO/IEC 42001 LEARNING MAP</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">AIMS structure for AI Act Ready consultants</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          This is a training map of the management-system structure and practical evidence you should understand. It does not reproduce the ISO standard. Formal implementation and certification work should use a properly licensed copy of ISO/IEC 42001.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Plan · Do · Check · Act</div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PDCA.map(([stage, text]) => (
            <div key={stage} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
              <div className="font-semibold text-[var(--color-primary)]">{stage}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 space-y-4">
        {CLAUSES.map((item) => (
          <article key={item.clause} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)] text-lg font-semibold text-[var(--color-primary)]">{item.clause}</div>
              <div>
                <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.focus}</p>
                <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm leading-relaxed">
                  <span className="font-semibold">Evidence examples:</span> <span className="text-[var(--color-text-muted)]">{item.evidence}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Annex A control themes</div>
        <h2 className="mt-2 font-display text-2xl font-semibold">Think in control families, not paperwork</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ANNEX_THEMES.map((theme) => <div key={theme} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 text-sm">{theme}</div>)}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
          A consultant should be able to explain why a control is relevant, who owns it, how it operates, what evidence exists and how effectiveness is monitored. Annex A should not be treated as a tick-box substitute for risk assessment and organisational context.
        </p>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Link to EU AI Act work</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          AIMS evidence can support AI Act readiness — for example inventories, risk processes, data governance, oversight, supplier controls, monitoring and corrective action — but the legal obligations still need their own role, classification and requirement analysis.
        </p>
      </section>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        Source basis: public ISO description of ISO/IEC 42001 as an AI management-system standard for establishing, implementing, maintaining and continually improving an AIMS using Plan-Do-Check-Act. Use the licensed standard for exact normative requirements.
      </p>
    </div>
  );
}
