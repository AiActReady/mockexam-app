import Link from "next/link";

const TEMPLATES = [
  {
    title: "AI system inventory",
    fields: ["System/use case", "Intended purpose", "Business/technical owner", "Vendor/model", "Users and affected people", "Data", "Geography", "Role", "Risk/classification status", "Evidence links", "Open questions", "Last review/change trigger"],
  },
  {
    title: "Role & exposure map",
    fields: ["System/model", "Entity", "Activity", "Likely role", "Reasoning", "Evidence", "EU market/output connection", "Open legal question", "Reviewer/date"],
  },
  {
    title: "Classification memo",
    fields: ["Facts", "Intended purpose", "Relevant actor", "Article 5 screen", "Article 6/Annex pathway", "Exception analysis if relevant", "Article 50 screen", "GPAI considerations", "Conclusion", "Evidence", "Assumptions", "Source/date", "Escalations"],
  },
  {
    title: "Evidence register",
    fields: ["Evidence ID", "Claim/control", "Artefact", "Source/owner", "Date/version", "Relevance", "Sufficiency", "Limitation", "Reviewer", "Status"],
  },
  {
    title: "Gap register",
    fields: ["Finding", "System/control", "Requirement/criterion", "Evidence reviewed", "Gap", "Consequence", "Priority", "Owner", "Target date", "Closure evidence", "Residual risk"],
  },
  {
    title: "Assumptions & decisions log",
    fields: ["Date", "Issue", "Known facts", "Assumption/decision", "Reason", "Consequence if wrong", "Evidence needed", "Owner", "Review date", "Final resolution"],
  },
  {
    title: "Escalation brief",
    fields: ["Question needing specialist input", "Why it matters", "Relevant system/use", "Known facts", "Evidence", "Current working assumption", "Decision required", "Specialist owner", "Due date", "Returned advice/action"],
  },
  {
    title: "Remediation roadmap",
    fields: ["Action", "Finding addressed", "Priority", "Owner", "Dependencies", "Start/target dates", "Definition of done", "Completion evidence", "Residual risk", "Status"],
  },
  {
    title: "Executive readout",
    fields: ["Scope and limitations", "Current AI estate", "Material exposures", "Priority findings", "Decisions required", "30/60/90-day actions", "Owners", "Key dependencies", "Outstanding escalations", "Next review"],
  },
  {
    title: "AIMS evidence map",
    fields: ["AIMS topic/requirement", "Risk/objective", "Control/process", "Owner", "Evidence", "Monitoring measure", "Internal audit result", "Management-review decision", "Improvement action"],
  },
];

export default function TemplatesGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Consultant Academy</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">DELIVERABLE BLUEPRINTS</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">What a consultant should be able to produce</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          These are training blueprints for the structure of common AI Act Ready working papers and client deliverables. They help learners practise consistent evidence and reasoning before using the live delivery tool.
        </p>
      </header>

      <div className="mt-8 space-y-4">
        {TEMPLATES.map((template) => (
          <section key={template.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">{template.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {template.fields.map((field) => (
                <span key={field} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm">{field}</span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Quality rule</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          A template is not evidence and completing every field is not the objective. The learner should be able to explain why each material field matters, which source supports it, what remains uncertain and how the artefact connects to the wider evidence chain.
        </p>
      </section>
    </div>
  );
}
