"use client";

import { useState } from "react";
import type { AcademyAssessmentQuestion } from "@/data/assessments/types";

type Props = {
  levelTitle: string;
  questions: AcademyAssessmentQuestion[];
};

export default function AcademyAssessment({ levelTitle, questions }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [criticalMisses, setCriticalMisses] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  if (!current) {
    return (
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
        No automated knowledge check has been published for this stage yet.
      </div>
    );
  }

  const choose = (option: string) => {
    if (selected) return;
    setSelected(option);
    if (option === current.correct) {
      setScore((value) => value + 1);
    } else if (current.critical) {
      setCriticalMisses((value) => value + 1);
    }
  };

  const next = () => {
    if (!selected) return;
    if (index === questions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setCriticalMisses(0);
    setFinished(false);
  };

  const finalScore = finished ? score : score;
  const percentage = Math.round((finalScore / questions.length) * 100);
  const knowledgePass = percentage >= 80;

  if (finished) {
    return (
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Knowledge check complete</div>
        <h2 className="mt-2 font-display text-3xl font-semibold">{percentage}%</h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          You answered {score} of {questions.length} questions correctly.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Knowledge threshold</div>
            <div className="mt-1 font-semibold">{knowledgePass ? "Reached (80%+)" : "Not yet reached"}</div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">Critical misses</div>
            <div className="mt-1 font-semibold">{criticalMisses}</div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
          This is a training knowledge check only. A high score does not by itself create AI Act Ready client-readiness or an external qualification; practical work and human review remain separate.
        </p>
        <button
          onClick={restart}
          className="mt-5 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
        >
          Retake {levelTitle} check
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="font-medium text-[var(--color-primary)]">Question {index + 1} of {questions.length}</span>
        <span className="text-[var(--color-text-subtle)]">Score {score}</span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--color-bg)]">
        <div
          className="h-full bg-[var(--color-primary)]"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <h2 className="mt-6 font-display text-2xl font-semibold leading-snug">{current.prompt}</h2>
      {current.critical && (
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">Core judgement question</p>
      )}

      <div className="mt-6 space-y-3">
        {current.options.map((option, optionIndex) => {
          const answered = selected !== null;
          const isCorrect = option === current.correct;
          const isChosen = selected === option;
          let className = "border-[var(--color-border)] bg-[var(--color-bg)]";
          if (answered && isCorrect) className = "border-emerald-500/60 bg-emerald-500/10";
          else if (answered && isChosen && !isCorrect) className = "border-red-500/60 bg-red-500/10";

          return (
            <button
              key={option}
              onClick={() => choose(option)}
              disabled={answered}
              className={`w-full rounded-2xl border p-4 text-left text-sm leading-relaxed transition ${className}`}
            >
              <span className="mr-2 font-semibold">{String.fromCharCode(65 + optionIndex)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
          <div className="font-semibold">{selected === current.correct ? "Correct" : "Not quite"}</div>
          {selected !== current.correct && (
            <p className="mt-2 text-sm"><span className="font-semibold">Correct answer:</span> {current.correct}</p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{current.explanation}</p>
          <p className="mt-3 text-xs text-[var(--color-text-subtle)]">Source basis: {current.sourceLabel}</p>
          <button
            onClick={next}
            className="mt-5 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
          >
            {index === questions.length - 1 ? "See result" : "Next question →"}
          </button>
        </div>
      )}
    </div>
  );
}
