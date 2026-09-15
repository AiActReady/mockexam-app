import Link from "next/link";

const TOPICS = [
  ["Article 3", "Definitions", "Use the legal definitions rather than informal product language when role or system status matters."],
  ["Article 4", "AI literacy", "Providers and deployers take measures supporting AI literacy appropriate to people, experience and context."],
  ["Article 5", "Prohibited practices", "Screen exact conditions and exceptions; high-consequence ambiguity should be escalated."],
  ["Article 6 + Annexes I/III", "High-risk classification", "Follow the statutory pathway from intended purpose and listed use rather than classifying by model brand."],
  ["Articles 8–15", "Requirements for high-risk AI", "Risk management, data governance, technical documentation, logging, information, human oversight, accuracy, robustness and cybersecurity."],
  ["Article 16 onward", "Provider obligations", "Translate system requirements into provider responsibilities, conformity work and evidence."],
  ["Article 26", "Deployer obligations", "Operational use, oversight, monitoring, logs and other duties can remain with the deployer even when the system was purchased from a compliant provider."],
  ["Article 27", "Fundamental-rights impact assessment", "Determine whether the deployer/use triggers the FRIA duty and coordinate rather than confuse it with a GDPR DPIA."],
  ["Article 43", "Conformity assessment", "Select the applicable route; do not assume every high-risk system needs third-party approval."],
  ["Articles 47–49", "Declaration, CE marking and registration", "Understand the evidence and registration steps that follow the relevant conformity pathway."],
  ["Article 50", "Transparency", "Run a separate analysis for direct AI interaction and specified synthetic/manipulated content scenarios."],
  ["Articles 51–55", "GPAI and systemic risk", "Separate model-level obligations from downstream AI-system roles and identify additional systemic-risk duties where applicable."],
  ["Post-market & incidents", "Lifecycle compliance", "Monitor the deployed system, investigate material performance/risk signals and maintain incident/escalation processes."],
];

const METHOD = [
  "1. Define the AI use case and intended purpose in plain English.",
  "2. Identify entities, geography and role(s) for the specific system/model activity.",
  "3. Screen prohibited practices before assuming the use is merely high-risk or lower-risk.",
  "4. Run the Article 6 / Annex I or Annex III high-risk pathway where relevant.",
  "5. Run separate transparency and GPAI analyses instead of treating them as subcategories of high-risk.",
  "6. Map requirements to the correct actor: provider, deployer and other supply-chain roles.",
  "7. Identify required evidence, conformity/registration steps, monitoring and change triggers.",
  "8. Date-stamp the conclusion and retain the authoritative source used.",
];

export default function EuAiActMapPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Consultant Academy</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">EU AI ACT PRACTITIONER MAP</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Know where to look — not just what to memorise</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          A consultant does not need to recite the Regulation from memory. They do need a reliable route from client facts to the relevant legal topic, evidence request and escalation decision.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Eight-step analysis method</h2>
        <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {METHOD.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>

      <section className="mt-5 space-y-3">
        {TOPICS.map(([article, title, body]) => (
          <article key={`${article}-${title}`} className="grid gap-3 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:grid-cols-[170px_1fr] md:p-7">
            <div>
              <div className="text-sm font-semibold text-[var(--color-primary)]">{article}</div>
              <div className="mt-1 font-display text-lg font-semibold">{title}</div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Consultant evidence chain</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          For each material conclusion keep: <span className="font-semibold">client fact → evidence → relevant legal pathway → working conclusion → uncertainty/exception → action or escalation.</span> Do not replace this chain with a single red/amber/green score.
        </p>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng" target="_blank" rel="noreferrer" className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]">Open current consolidated Act ↗</a>
        <Link href="/academy/reference" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium">Open current-law desk guide</Link>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        Reviewed 15 September 2026. Educational internal training map only. Confirm the current consolidated legislation and official guidance before using a conclusion with a live client.
      </p>
    </div>
  );
}
