import Link from "next/link";

const QUESTIONS = [
  ["Role & product", "Who is the provider of the AI system/model, what is the intended purpose, and which version/service is being supplied?"],
  ["Upstream dependencies", "Which third-party models, APIs or material AI components does the service depend on?"],
  ["Data provenance", "What data was used where relevant, what is its provenance, and what governance/quality controls were applied?"],
  ["Performance", "What metrics and test populations support the claimed performance for the intended use?"],
  ["Bias & impacts", "What groups and failure modes were tested, what limitations remain, and how are residual risks communicated?"],
  ["Human oversight", "What information and controls enable the customer to understand, challenge, override or stop the AI where needed?"],
  ["Logging", "What logs are generated, who can access them, how long are they retained and how can the customer use them for monitoring?"],
  ["Security", "What AI-specific security testing, vulnerability management and incident response are in place?"],
  ["Transparency", "What technical or user-facing features help the customer meet applicable transparency duties?"],
  ["Changes", "How will customers be notified of model, data, functionality, intended-purpose or material performance changes?"],
  ["Incidents", "What is the process and timeframe for notifying customers of serious incidents, material failures or relevant regulatory issues?"],
  ["Conformity evidence", "Where relevant, provide applicable technical documentation, instructions for use, declaration/CE evidence and registration information."],
];

const RED_FLAGS = [
  "Absolute claims such as ‘fully compliant’, ‘zero bias’ or ‘100% explainable’ with no supporting scope or evidence.",
  "Refusal to disclose material upstream model dependencies or change-notification arrangements.",
  "Performance metrics with no intended population, methodology or limitation statement.",
  "No documented route for customer incident notification or service/model changes.",
  "Human oversight described only as ‘the customer is responsible’ without usable instructions or controls.",
  "Conformity or certification claims that do not identify the exact product/version and scope.",
];

export default function VendorGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy/resources" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Resource library</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">FIELD GUIDE</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">AI vendor due diligence</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          The goal is not to collect reassuring answers. It is to obtain enough relevant evidence for the client to understand supplier dependency, limitations and the controls it still owns as a deployer or downstream provider.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Core evidence questions</h2>
        <div className="mt-5 space-y-3">
          {QUESTIONS.map(([title, body]) => (
            <div key={title} className="grid gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 md:grid-cols-[150px_1fr]">
              <div className="text-sm font-semibold text-[var(--color-primary)]">{title}</div>
              <div className="text-sm leading-relaxed text-[var(--color-text-muted)]">{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Red flags</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {RED_FLAGS.map((item) => <li key={item} className="flex gap-3"><span className="text-[var(--color-primary)]">!</span><span>{item}</span></li>)}
        </ul>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Consultant habit</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          For every important vendor answer, ask: <span className="font-semibold">“What evidence supports that, which system/version does it cover, and what remains the customer's responsibility?”</span>
        </p>
      </section>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        This guide reflects AI Act Ready training and themes in the uploaded Vendor Due Diligence lesson. Live procurement decisions should be checked against current law, contract requirements and appropriate legal, privacy, security and technical review.
      </p>
    </div>
  );
}
