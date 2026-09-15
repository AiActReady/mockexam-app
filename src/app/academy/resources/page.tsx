import Link from "next/link";

const RESOURCES = [
  {
    title: "Current-law desk guide",
    description: "Current implementation dates, source hierarchy and legal concepts that are easy to misremember from older training material.",
    href: "/academy/reference",
  },
  {
    title: "EU AI Act practitioner map",
    description: "A practical route from client facts to the relevant Article, role, classification pathway, evidence request and escalation decision.",
    href: "/academy/eu-ai-act-map",
  },
  {
    title: "ISO/IEC 42001 learning map",
    description: "Clauses 4–10, Plan-Do-Check-Act, Annex A control themes and the evidence an AIMS consultant should understand.",
    href: "/academy/iso-42001",
  },
  {
    title: "Practice case library",
    description: "Six realistic fictional client situations covering HR, healthcare, credit, Shadow AI, public-sector decisions and SaaS feature drift.",
    href: "/academy/cases",
  },
  {
    title: "Deliverable blueprints",
    description: "Training structures for inventories, role maps, classification memos, evidence registers, remediation roadmaps and executive readouts.",
    href: "/academy/templates",
  },
  {
    title: "Supervised practice review guide",
    description: "A human coaching guide for reviewing simulated delivery across scope, role mapping, classification, evidence, communication and escalation.",
    href: "/academy/client-ready/review-guide",
  },
  {
    title: "Discovery & AI inventory",
    description: "Workshop prompts, minimum inventory fields, Shadow AI clues and a repeatable discovery workflow.",
    href: "/academy/resources/discovery",
  },
  {
    title: "Evidence quality & working papers",
    description: "How to test evidence, document assumptions, maintain traceability and write defensible findings.",
    href: "/academy/resources/evidence",
  },
  {
    title: "Vendor due diligence",
    description: "AI-specific procurement questions covering role, data, testing, oversight, security, changes and conformity evidence.",
    href: "/academy/resources/vendor",
  },
  {
    title: "Client delivery & handover",
    description: "From kickoff and scope through gap analysis, remediation, executive readout and internal quality review.",
    href: "/academy/resources/delivery",
  },
];

export default function AcademyResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">← Consultant Academy</Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">CONSULTANT RESOURCE LIBRARY</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Practical field guides</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          Use these alongside the staged learning modules. They are deliberately practical: what to ask, what to record, what evidence to expect, where to look next and when to escalate.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {RESOURCES.map((resource) => (
          <Link key={resource.href} href={resource.href} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition hover:border-[var(--color-primary)]">
            <h2 className="font-display text-xl font-semibold">{resource.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{resource.description}</p>
            <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">Open guide →</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
        <div className="font-semibold">Use the field guides as prompts, not substitutes for judgement.</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          For live work, confirm current authoritative sources, record the facts and evidence behind material decisions, and escalate specialist legal, privacy, security or technical questions when required.
        </p>
      </div>
    </div>
  );
}
