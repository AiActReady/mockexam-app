import Link from "next/link";
import { notFound } from "next/navigation";
import AcademyAssessment from "@/components/AcademyAssessment";
import { ACADEMY_LEVELS } from "@/data/curriculum";
import { getAssessmentQuestions } from "@/data/assessments";

export function generateStaticParams() {
  return ACADEMY_LEVELS.map((level) => ({ level: level.id }));
}

export default async function AcademyCheckPage({ params }: { params: Promise<{ level: string }> }) {
  const { level: levelId } = await params;
  const level = ACADEMY_LEVELS.find((item) => item.id === levelId);
  if (!level) notFound();

  const questions = getAssessmentQuestions(levelId);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link href={`/academy/${levelId}`} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
        ← {level.title}
      </Link>
      <header className="mt-8 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Stage {level.number} · Knowledge check</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">{level.title} knowledge check</h1>
        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
          Work through the questions after the modules. Each answer includes an explanation and source basis.
        </p>
      </header>
      <div className="mt-8">
        {questions.length > 0 ? (
          <AcademyAssessment levelTitle={level.title} questions={questions} />
        ) : (
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">Practical stage</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              This stage currently uses the practical exercises and case work shown on the stage overview.
            </p>
          </div>
        )}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        Educational internal training content. Check current authoritative sources for live client work.
      </p>
    </div>
  );
}
