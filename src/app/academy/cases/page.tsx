import Link from "next/link";

const CASES = [
  {
    title: "Case 1 · HireRightly",
    level: "Foundation → Practitioner",
    brief: "A UK SaaS company sells an AI CV-ranking tool to employers in France and Germany. The product uses a third-party US model but is sold under HireRightly's brand. Customers decide who progresses to interview.",
    tasks: ["Map likely provider/deployer roles.", "Identify the intended purpose and likely high-risk pathway.", "List the minimum vendor/model evidence you would request.", "Explain what remains the employer customer's responsibility."],
  },
  {
    title: "Case 2 · CareFlow Hospital",
    level: "Practitioner",
    brief: "A hospital uses third-party AI for staff recruitment, patient appointment prioritisation and a public chatbot. The three tools come from different vendors and have different functions.",
    tasks: ["Do not classify the hospital once: map each system separately.", "Run high-risk and Article 50 analyses by use case.", "Identify privacy and fundamental-rights questions needing specialist input.", "Create an evidence-request list for human oversight and monitoring."],
  },
  {
    title: "Case 3 · LendWise",
    level: "Practitioner → Implementer",
    brief: "A lender uses an AI model to support consumer credit decisions. The vendor says the model is ‘fair and explainable’, but provides only aggregate accuracy figures. Staff accept 99% of recommendations.",
    tasks: ["Identify the classification and evidence questions.", "Challenge the vendor's fairness evidence.", "Assess whether human oversight looks meaningful.", "Draft three remediation actions with owners and evidence of completion."],
  },
  {
    title: "Case 4 · BuildCo Copilot",
    level: "Implementer",
    brief: "A 600-person engineering consultancy has approved one enterprise AI assistant, but staff also use public chatbots, browser extensions and low-cost AI subscriptions. Commercially sensitive client documents may be included in prompts.",
    tasks: ["Design a Shadow AI discovery plan.", "Separate AI Act classification from broader confidentiality, privacy and security risk.", "Create an acceptable-use and notification control.", "Define what evidence would show the control operates after launch."],
  },
  {
    title: "Case 5 · CivicBenefits",
    level: "Implementer → Client Ready",
    brief: "A public-sector organisation plans to use AI to prioritise applications for a social-benefit programme. The system may affect vulnerable people and uses personal information from several government data sources.",
    tasks: ["Map affected people and decision influence.", "Triage high-risk, FRIA and privacy/DPIA considerations without merging them into one undefined assessment.", "Design human oversight and complaint/escalation evidence.", "Prepare an executive summary of the unresolved decisions."],
  },
  {
    title: "Case 6 · NovaAssist Product Change",
    level: "Implementer → Lead",
    brief: "A vendor's approved customer-service SaaS quietly adds automated emotion analysis, lead scoring and a new GPAI model. The client discovers the changes during annual renewal rather than through change notification.",
    tasks: ["Identify feature-drift and supplier-governance failures.", "Re-run intended-purpose, role, classification and transparency analysis for each new feature.", "Define contractual/change-notification controls.", "Write an assurance finding and corrective-action plan."],
  },
];

export default function CaseLibraryPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Consultant Academy</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">PRACTICE CASE LIBRARY</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Learn the judgement before the client meeting</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          Use these cases as workshop exercises. The aim is not to guess a single answer quickly; it is to identify facts, evidence, legal pathways, assumptions and escalation questions in a repeatable way.
        </p>
      </header>

      <div className="mt-8 space-y-5">
        {CASES.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">{item.level}</div>
            <h2 className="mt-2 font-display text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{item.brief}</p>
            <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
              <div className="text-sm font-semibold">Your tasks</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.tasks.map((task) => <li key={task} className="flex gap-3"><span className="text-[var(--color-primary)]">□</span><span>{task}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Review standard</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          A strong response separates facts from assumptions, maps roles system-by-system, follows the correct classification pathway, requests evidence before closing a control and identifies specialist questions rather than bluffing through them.
        </p>
      </section>
    </div>
  );
}
