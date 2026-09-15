import Link from "next/link";
import { notFound } from "next/navigation";
import { ACADEMY_LEVELS } from "@/data/curriculum";
import { getModulesForLevel } from "@/data/academy-content";
import { getAssessmentQuestionCount } from "@/data/assessments";

export function generateStaticParams() {
  return ACADEMY_LEVELS.map((level) => ({ level: level.id }));
}

export default async function AcademyLevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level: levelId } = await params;
  const level = ACADEMY_LEVELS.find((item) => item.id === levelId);

  if (!level) notFound();

  const currentIndex = ACADEMY_LEVELS.findIndex((item) => item.id === levelId);
  const previous = currentIndex > 0 ? ACADEMY_LEVELS[currentIndex - 1] : null;
  const next = currentIndex < ACADEMY_LEVELS.length - 1 ? ACADEMY_LEVELS[currentIndex + 1] : null;
  const modules = getModulesForLevel(levelId);
  const questionCount = getAssessmentQuestionCount(levelId);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/academy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
          ← Consultant Academy
        </Link>
        <div className="text-sm text-[var(--color-text-subtle)]">Stage {level.number} of 5</div>
      </div>

      <header className="mt-8 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          {level.recommendedTime}
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold">{level.title}</h1>
        <p className="mt-2 text-lg text-[var(--color-text-muted)]">{level.subtitle}</p>
        <p className="mt-5 leading-relaxed text-[var(--color-text-muted)]">{level.purpose}</p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Learn</div>
            <h2 className="mt-2 font-display text-xl font-semibold">Training modules</h2>
          </div>
          <div className="text-sm text-[var(--color-text-subtle)]">{modules.length} modules populated</div>
        </div>

        <div className="mt-6 space-y-3">
          {modules.map((module, index) => (
            <Link
              key={module.slug}
              href={`/academy/${levelId}/${module.slug}`}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-primary)] md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Module {index + 1} · {module.duration}
                </div>
                <div className="mt-1 font-display text-lg font-semibold">{module.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{module.objective}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-[var(--color-primary)]">Open →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Practise</div>
        <h2 className="mt-2 font-display text-xl font-semibold">Simulated client work</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {level.practical.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[var(--color-primary)]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {levelId === "client-ready" && (
          <Link
            href="/academy/client-ready/simulation"
            className="mt-5 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
          >
            Open Northstar capstone simulation
          </Link>
        )}
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Evidence you should be able to produce
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {level.clientDeliverables.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Readiness gate</div>
        <p className="mt-3 font-display text-xl font-semibold">{level.gate}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          The goal is not to memorise wording. It is to show that you can reason, document assumptions, ask for evidence and know when to escalate.
        </p>

        {questionCount > 0 && (
          <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
            <div className="font-semibold">Stage knowledge check · {questionCount} questions</div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Work through the stage-specific scenarios after completing the modules. Answers include explanations and source-basis notes.
            </p>
            <Link
              href={`/academy/${levelId}/check`}
              className="mt-4 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
            >
              Start stage knowledge check
            </Link>
          </div>
        )}

        {level.id === "foundation" && (
          <Link
            href="/learn"
            className="mt-5 inline-flex rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium"
          >
            Open original validated Foundation quiz
          </Link>
        )}

        {questionCount === 0 && (
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
            This advanced stage currently relies on practical case work and review rather than an automated score.
          </p>
        )}
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {previous ? (
          <Link href={`/academy/${previous.id}`} className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm">
            ← {previous.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/academy/${next.id}`} className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm">
            {next.title} →
          </Link>
        ) : null}
      </div>
    </div>
  );
}
