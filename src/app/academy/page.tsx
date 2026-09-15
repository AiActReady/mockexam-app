import Link from "next/link";
import { ACADEMY_LEVELS } from "@/data/curriculum";
import { ACADEMY_MODULES } from "@/data/academy-content";
import { ACADEMY_ASSESSMENT_QUESTIONS } from "@/data/assessments";

export default function AcademyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-[var(--color-primary)]">AI ACT READY CONSULTANT ACADEMY</p>
        <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
          Learn safely before working with real clients.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
          This pathway is designed to take someone from first principles through to an internally signed-off,
          client-ready AI governance consultant. Start small, build confidence, practise on simulated engagements,
          then prove readiness before using the AI Act Ready delivery tool with a real client.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-3xl font-semibold text-[var(--color-primary)]">{ACADEMY_LEVELS.length}</div>
          <div className="mt-1 text-sm text-[var(--color-text-muted)]">progressive stages</div>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-3xl font-semibold text-[var(--color-primary)]">{ACADEMY_MODULES.length}</div>
          <div className="mt-1 text-sm text-[var(--color-text-muted)]">populated training modules</div>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-3xl font-semibold text-[var(--color-primary)]">{ACADEMY_ASSESSMENT_QUESTIONS.length}</div>
          <div className="mt-1 text-sm text-[var(--color-text-muted)]">stage knowledge questions</div>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
          <div className="text-3xl font-semibold text-[var(--color-primary)]">1</div>
          <div className="mt-1 text-sm text-[var(--color-text-muted)]">client-ready capstone case</div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
        <div className="text-sm font-semibold">The rule throughout the Academy</div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Consultants are trained to explain governance requirements and gather evidence - not to improvise legal advice.
          When a point is uncertain, material or legally sensitive, the correct behaviour is to document the assumption and escalate it.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/academy/resources" className="rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 transition hover:border-[var(--color-primary)]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Consultant resource library</div>
          <h2 className="mt-2 font-display text-2xl font-semibold">Practical field guides</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Discovery, evidence quality, vendor due diligence, delivery and handover checklists designed for simulated and supervised client work.
          </p>
          <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">Open resource library →</div>
        </Link>
        <Link href="/academy/reference" className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition hover:border-[var(--color-primary)]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Current-law reference</div>
          <h2 className="mt-2 font-display text-2xl font-semibold">Avoid outdated dates and shortcuts</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Current implementation timeline, source hierarchy and key concepts checked against the consolidated Act and current Commission material.
          </p>
          <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">Open desk guide →</div>
        </Link>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/50 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">New features & pilots</div>
            <h2 className="mt-2 font-display text-2xl font-semibold">Ideas being kept separate while the core Academy is tested</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Consultant Passport, AI literacy evidence, an AI Governance Mentor, branching simulations, evidence-pack challenges,
              Shadow AI discovery, red-flag drills, regulatory updates and future handoff into the real AI Act Ready delivery tool.
            </p>
          </div>
          <Link
            href="/academy/new-features"
            className="inline-flex shrink-0 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
          >
            Open New Features Lab
          </Link>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-[var(--color-text-subtle)]">
          These items are roadmap concepts or pilots and are not part of the current readiness gate unless explicitly promoted into the core Academy later.
        </p>
      </section>

      <section className="mt-10 space-y-5">
        {ACADEMY_LEVELS.map((level, index) => (
          <article
            key={level.id}
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Stage {level.number} · {level.recommendedTime}
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold">{level.title}</h2>
                <p className="mt-1 text-[var(--color-text-muted)]">{level.subtitle}</p>
                <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">{level.purpose}</p>
                <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm">
                  <span className="font-semibold">Exit outcome:</span> {level.outcome}
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/academy/${level.id}`}
                  className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
                >
                  {index === 0 ? "Start here" : "View stage"}
                </Link>
              </div>
            </div>

            <div className="mt-5 text-sm text-[var(--color-text-subtle)]">
              <span className="font-semibold text-[var(--color-text-muted)]">Readiness gate:</span> {level.gate}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/academy/orientation" className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]">
          Begin Orientation
        </Link>
        <Link href="/learn" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium">
          Open validated Foundation quiz
        </Link>
        <Link href="/dashboard" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium">
          Back to dashboard
        </Link>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        AI Act Ready Academy stages are an internal learning and readiness framework. They are not an external accredited qualification and do not replace legal advice or an accredited ISO certification programme.
      </p>
    </div>
  );
}
