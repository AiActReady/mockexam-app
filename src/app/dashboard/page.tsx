import Link from "next/link";

const PATHWAY = [
  {
    title: "0. Orientation",
    body: "How AI Act Ready works with clients, where the boundaries are, and when to escalate.",
  },
  {
    title: "1. Foundation",
    body: "Core EU AI Act and ISO/IEC 42001 concepts in short, confidence-building lessons.",
  },
  {
    title: "2. Practitioner",
    body: "Apply roles, risk classification, intended purpose and obligations to realistic scenarios.",
  },
  {
    title: "3. Implementer",
    body: "Run discovery, build governance controls, evidence and a practical remediation roadmap.",
  },
  {
    title: "4. Client-Ready Consultant",
    body: "Complete a simulated engagement and internal readiness gate before real client delivery.",
  },
  {
    title: "5. Lead & Assurance",
    body: "Advanced review, assurance, corrective action and mentoring for experienced consultants.",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm font-medium text-[var(--color-primary)]">AI ACT READY CONSULTANT ACADEMY</p>
      <h1 className="mt-2 max-w-4xl font-display text-4xl font-semibold">
        Train here before using AI Act Ready with real clients.
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
        Start with the basics, practise on realistic scenarios, then complete a simulated client engagement before working independently in the field. No login is required during this content-testing phase.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/academy"
          className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          Open consultant pathway
        </Link>
        <Link
          href="/learn"
          className="rounded-full border border-[var(--color-border)] px-6 py-3 font-medium"
        >
          Take validated quiz
        </Link>
        <Link
          href="/"
          className="rounded-full border border-[var(--color-border)] px-6 py-3 font-medium"
        >
          Back to home
        </Link>
      </div>

      <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PATHWAY.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
          >
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.body}</p>
          </div>
        ))}
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--color-border)] p-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
        <span className="font-semibold text-[var(--color-text)]">Client-readiness principle:</span> passing a knowledge quiz is not enough. A consultant should demonstrate sound judgement, evidence gathering, clear client communication, scope control and appropriate escalation before being signed off for real engagements.
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        This is an internal AI Act Ready learning and readiness framework, not an external accredited qualification or legal-advice service.
      </p>
    </div>
  );
}
