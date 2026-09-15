import Link from "next/link";

const DATES = [
  ["2 February 2025", "Prohibited-practice and AI-literacy provisions began applying."],
  ["2 August 2025", "Governance rules and GPAI-model obligations began applying."],
  ["2 August 2026", "The Act became generally applicable; Article 50 transparency rules are in application."],
  ["2 December 2027", "Relevant high-risk rules apply to Annex III use cases such as employment, education and other listed sensitive areas."],
  ["2 August 2028", "Relevant high-risk rules apply to high-risk AI embedded in Annex I regulated products."],
];

const RULES = [
  {
    title: "Roles are system-specific",
    body: "Do not label an entire company simply as a provider or deployer. Map the role for each system and activity. A company can hold several roles across its portfolio."
  },
  {
    title: "High-risk is not the same as prohibited",
    body: "Prohibited practices are a separate Article 5 analysis. High-risk systems can be permitted but face extensive requirements and obligations when the relevant provisions apply."
  },
  {
    title: "Intended purpose drives classification",
    body: "The same technology can produce different regulatory outcomes depending on what it is used to do, who it affects and the decision context."
  },
  {
    title: "Article 50 is a separate transparency analysis",
    body: "A system does not need to be high-risk before a transparency duty can arise. Analyse the specific interaction or content scenario and the relevant provider/deployer duty."
  },
  {
    title: "GPAI model and downstream system are different layers",
    body: "Map model-level GPAI responsibilities separately from the roles and obligations of a downstream AI system that incorporates the model."
  },
  {
    title: "10^25 FLOP is not the entire systemic-risk test",
    body: "The training-compute threshold creates an important quantitative presumption, while the Commission can also designate a GPAI model based on broader capability and impact criteria."
  },
  {
    title: "Not every high-risk system needs a Notified Body",
    body: "Conformity-assessment routes depend on the system category and applicable product framework. Do not tell a client that all high-risk AI requires third-party approval."
  },
  {
    title: "ISO/IEC 42001 supports governance; it does not replace law",
    body: "An AIMS can provide repeatable governance, evidence and continual improvement. Certification does not by itself prove compliance with every EU AI Act obligation."
  },
];

const SOURCES = [
  ["Current consolidated EU AI Act", "https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng"],
  ["European Commission AI Act overview and implementation timeline", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
  ["Commission high-risk AI guidance page", "https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems"],
  ["Commission AI Act navigation FAQ", "https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act"],
  ["ISO/IEC 42001 public overview", "https://www.iso.org/standard/42001"],
];

export default function AcademyReferencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
        ← Consultant Academy
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">QUICK REFERENCE · REVIEWED 15 SEPTEMBER 2026</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Current-law desk guide</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          Use this page to avoid relying on older course dates or simplified memory cues. It is a training reference, not legal advice. For live client work, open the authoritative source and confirm the current wording.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Current implementation timeline</div>
        <div className="mt-5 space-y-4">
          {DATES.map(([date, text]) => (
            <div key={date} className="grid gap-1 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0 md:grid-cols-[160px_1fr]">
              <div className="font-semibold">{date}</div>
              <div className="text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2">
        {RULES.map((rule) => (
          <article key={rule.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
            <h2 className="font-display text-xl font-semibold">{rule.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{rule.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Source discipline</div>
        <h2 className="mt-2 font-display text-2xl font-semibold">Source hierarchy for client work</h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <li><span className="font-semibold">1. Current legislation:</span> use the consolidated EUR-Lex text for the rule itself.</li>
          <li><span className="font-semibold">2. Current Commission guidance:</span> use it to support application, examples and implementation.</li>
          <li><span className="font-semibold">3. Standards:</span> use the licensed ISO/IEC 42001 standard and approved organisational material for formal implementation work.</li>
          <li><span className="font-semibold">4. Academy lesson pack:</span> use it for learning and memory support, but re-check live conclusions where the material may pre-date amendments or guidance.</li>
        </ol>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Authoritative starting points</div>
        <div className="mt-4 space-y-3">
          {SOURCES.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-[var(--color-border)] p-4 text-sm font-medium hover:border-[var(--color-primary)]">
              {label} ↗
            </a>
          ))}
        </div>
      </section>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        The uploaded EU AI Specialist lesson notes remain a core learning source in the Academy. Where an older lesson statement conflicts with current legislation or current official guidance, the current authoritative source should be used for client work.
      </p>
    </div>
  );
}
