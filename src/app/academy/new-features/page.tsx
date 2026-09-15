import Link from "next/link";

const FEATURES = [
  {
    title: "Consultant Passport",
    status: "Planned",
    summary: "A personal competency record showing stage completion, scores, supervised practice and internal sign-off.",
    value: "Gives AI Act Ready a clear evidence trail that a consultant has been trained and assessed before client work.",
    experience: [
      "Foundation, Practitioner and Implementer status",
      "EU AI Act and ISO/IEC 42001 readiness scores",
      "Scenario and practical-work results",
      "Areas requiring supervision or refresher training",
      "Internal reviewer sign-off and review date",
    ],
  },
  {
    title: "AI Literacy Evidence Record",
    status: "Planned",
    summary: "Generate a training record showing what the learner studied, when they completed it and what they understood.",
    value: "Useful internally for consultant onboarding and later as a client-facing AI literacy training capability.",
    experience: [
      "Modules and assessments completed",
      "Completion dates and refresher dates",
      "Assessment results and weak areas",
      "Exportable training evidence",
      "Role-appropriate learning paths for client teams",
    ],
  },
  {
    title: "AI Governance Mentor",
    status: "Pilot idea",
    summary: "An in-context learning assistant that can simplify a concept, give another example or test the learner again.",
    value: "Supports different learning styles and makes the Academy easier to use in short, low-pressure sessions.",
    experience: [
      "Explain this more simply",
      "Give me another example",
      "How would this appear with a client?",
      "Test me on this topic",
      "Show me what evidence I would ask for",
    ],
  },
  {
    title: "Branching Client Simulations",
    status: "Planned",
    summary: "Interactive engagements where the learner chooses what to ask or do next and receives different consequences.",
    value: "Moves training beyond memory tests and teaches consulting judgement, sequencing and evidence discipline.",
    experience: [
      "Choose discovery questions",
      "Decide when to classify, investigate or escalate",
      "See the consequence of weak evidence requests",
      "Recover from poor decisions",
      "Complete the engagement with a defensible client pack",
    ],
  },
  {
    title: "Evidence Pack Challenges",
    status: "Planned",
    summary: "Deliberately imperfect fictional policies, contracts, model cards and risk records for trainees to review.",
    value: "Builds the skill of distinguishing plausible-looking paperwork from evidence that genuinely supports a conclusion.",
    experience: [
      "Find missing ownership and approval",
      "Spot stale or contradictory evidence",
      "Identify design evidence that does not prove operation",
      "Write concise findings and evidence requests",
      "Escalate material uncertainty",
    ],
  },
  {
    title: "AI Act Ready Tool Handoff",
    status: "Future integration",
    summary: "Move from Academy training into a fictional project inside the real AI Act Ready delivery platform.",
    value: "Lets a consultant learn the governance method and the delivery software together before working on a live client.",
    experience: [
      "Open a simulated client project",
      "Build the AI inventory in the real tool",
      "Map roles and classifications",
      "Record evidence and remediation actions",
      "Produce a practice executive readout and evidence pack",
    ],
  },
  {
    title: "Shadow AI Discovery Simulation",
    status: "Planned",
    summary: "A fictional organisation containing approved tools, hidden subscriptions, AI browser extensions and feature drift.",
    value: "Connects consultant training directly to AI discovery and the future device/network scanning capability.",
    experience: [
      "Compare the official inventory with real usage clues",
      "Review expense and procurement signals",
      "Identify suspicious integrations and browser tools",
      "Prioritise high-risk departments",
      "Create a defensible discovery record",
    ],
  },
  {
    title: "Red Flag Drills",
    status: "Quick-win",
    summary: "Very short client statements where the learner must spot the issue, ask for evidence and decide whether to escalate.",
    value: "Ideal for refresher training and helps consultants build instinct without long study sessions.",
    experience: [
      "What is the red flag?",
      "What evidence would you request?",
      "What assumption must be recorded?",
      "Who should own the action?",
      "Does this need specialist escalation?",
    ],
  },
  {
    title: "Regulatory Update Centre",
    status: "Planned",
    summary: "Short update modules when important EU AI Act, Commission guidance or standards-related changes affect delivery.",
    value: "Keeps previously trained consultants current without forcing them to repeat the whole Academy.",
    experience: [
      "What changed?",
      "Why it matters to client work",
      "Which existing playbooks need updating",
      "Five-minute refresher lesson",
      "Mini knowledge check and completion record",
    ],
  },
];

export default function AcademyNewFeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
        ← Consultant Academy
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">NEW FEATURES LAB</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Ideas that can extend the Academy</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
          These features are deliberately separated from the core training pathway while the Academy is being tested.
          They are roadmap concepts and pilots, not current readiness requirements unless explicitly marked otherwise later.
        </p>
      </header>

      <div className="mt-8 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Core Academy first, enhancements second.</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Feedback on the current stages, questions and client simulations should drive which of these features gets built out first.
          Keeping them here means none of the ideas are lost while testers can still focus on the main learning journey.
        </p>
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{feature.title}</h2>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                {feature.status}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{feature.summary}</p>

            <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Why it adds value</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{feature.value}</p>
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)]">Planned experience</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {feature.experience.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--color-primary)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/academy" className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]">
          Back to Academy
        </Link>
        <Link href="/academy/resources" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium">
          Open consultant resources
        </Link>
      </div>
    </div>
  );
}
