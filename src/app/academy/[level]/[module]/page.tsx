import Link from "next/link";
import { notFound } from "next/navigation";
import { ACADEMY_LEVELS } from "@/data/curriculum";
import { ACADEMY_MODULES, getModule, getModulesForLevel } from "@/data/academy-content";

export function generateStaticParams() {
  return ACADEMY_MODULES.map((item) => ({ level: item.levelId, module: item.slug }));
}

export default async function AcademyModulePage({
  params,
}: {
  params: Promise<{ level: string; module: string }>;
}) {
  const { level: levelId, module: moduleSlug } = await params;
  const level = ACADEMY_LEVELS.find((item) => item.id === levelId);
  const module = getModule(levelId, moduleSlug);

  if (!level || !module) notFound();

  const levelModules = getModulesForLevel(levelId);
  const moduleIndex = levelModules.findIndex((item) => item.slug === moduleSlug);
  const previous = moduleIndex > 0 ? levelModules[moduleIndex - 1] : null;
  const next = moduleIndex < levelModules.length - 1 ? levelModules[moduleIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/academy/${levelId}`}
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        >
          ← {level.title}
        </Link>
        <div className="text-sm text-[var(--color-text-subtle)]">
          Module {moduleIndex + 1} of {levelModules.length} · {module.duration}
        </div>
      </div>

      <header className="mt-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Stage {level.number} · {level.subtitle}
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold">{module.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">{module.objective}</p>
      </header>

      <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Learn</div>
        <div className="mt-4 space-y-4 leading-relaxed text-[var(--color-text-muted)]">
          {module.lesson.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-[var(--color-border)] p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Remember</div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {module.keyPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Client practice</div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{module.clientPractice}</p>
        </div>
      </section>

      <section className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Evidence you should be able to produce</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {module.evidence.map((item) => (
            <span key={item} className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)]">Source basis</div>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-subtle)]">{module.sourceNote}</p>
      </section>

      {levelId === "foundation" && moduleIndex === levelModules.length - 1 && (
        <section className="mt-5 rounded-3xl border border-[var(--color-primary)]/40 bg-[var(--color-surface-raised)] p-6">
          <h2 className="font-display text-xl font-semibold">Ready for the Foundation knowledge check?</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            The current validated quiz tests core role, classification, transparency, oversight, GPAI, timetable and penalty knowledge.
          </p>
          <Link
            href="/learn"
            className="mt-4 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
          >
            Take the validated quiz
          </Link>
        </section>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {previous ? (
          <Link
            href={`/academy/${levelId}/${previous.slug}`}
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm"
          >
            ← Previous module
          </Link>
        ) : (
          <Link href={`/academy/${levelId}`} className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm">
            ← Stage overview
          </Link>
        )}
        {next ? (
          <Link
            href={`/academy/${levelId}/${next.slug}`}
            className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
          >
            Next module →
          </Link>
        ) : (
          <Link href="/academy" className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm">
            Academy overview →
          </Link>
        )}
      </div>
    </div>
  );
}
