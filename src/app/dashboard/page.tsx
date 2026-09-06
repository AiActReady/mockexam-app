import Link from "next/link";

const MODULES = [
  {
    title: "1. Scope, roles & definitions",
    body: "Provider, deployer, importer and distributor — explained in plain English.",
    status: "Ready to test",
  },
  {
    title: "2. Risk levels & prohibited practices",
    body: "Learn the risk-based structure and spot prohibited AI practices.",
    status: "Ready to test",
  },
  {
    title: "3. High-risk AI obligations",
    body: "Risk management, data governance, documentation, oversight and monitoring.",
    status: "Ready to test",
  },
  {
    title: "4. Transparency & GPAI",
    body: "Transparency duties and the basics of general-purpose AI model obligations.",
    status: "Ready to test",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-sm font-medium text-[var(--color-primary)]">PUBLIC CONTENT TEST MODE</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Test the EU AI Act learning experience</h1>
      <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
        No login required. Work through short lessons, memory aids and practice questions so we can test the experience before adding accounts and progress tracking.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/learn"
          className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          Start content test
        </Link>
        <Link
          href="/"
          className="rounded-full border border-[var(--color-border)] px-6 py-3 font-medium"
        >
          Back to home
        </Link>
      </div>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {MODULES.map((module) => (
          <div
            key={module.title}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
          >
            <div className="text-xs font-medium text-[var(--color-primary)]">{module.status}</div>
            <h2 className="mt-2 font-display text-xl font-semibold">{module.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{module.body}</p>
          </div>
        ))}
      </section>

      <div className="mt-10 rounded-2xl border border-[var(--color-border)] p-6 text-sm text-[var(--color-text-muted)]">
        This is an educational test build, not legal advice. The content should be reviewed against the official EU AI Act before public release.
      </div>
    </div>
  );
}
