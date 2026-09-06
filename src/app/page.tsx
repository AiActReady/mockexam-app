import Link from "next/link";
import { JargonFlip } from "@/components/marketing/jargon-flip";

const STEPS = [
  {
    n: "1",
    title: "Learn in short bursts",
    body: "Two to five minutes at a time. One concept, explained plainly, then a memory trick so it sticks.",
  },
  {
    n: "2",
    title: "Get quizzed, not graded",
    body: "Every question comes back with a real explanation — what you got right, what you missed, and why.",
  },
  {
    n: "3",
    title: "Revise what you're weak on",
    body: "The system tracks every topic and brings back exactly what needs another look, right when you need it.",
  },
];

const TOPICS = [
  { name: "Prohibited AI Practices", score: 92 },
  { name: "Risk Classification", score: 78 },
  { name: "AI Act Roles", score: 61 },
  { name: "High-Risk Obligations", score: 55 },
];

function scoreColor(score: number) {
  if (score >= 80) return "var(--color-success)";
  if (score >= 50) return "var(--color-warning)";
  return "var(--color-danger)";
}

export default function LandingPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Learn the EU AI Act like it actually makes sense.
            </h1>
            <p className="mt-5 max-w-md text-lg text-[var(--color-text-muted)]">
              Short, visual lessons built for people who don&apos;t have three hours to
              read a regulation. Get exam-ready without the compliance-course slog.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
              >
                Start learning free
              </Link>
              <Link
                href="/glossary"
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                Browse the glossary
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <JargonFlip />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n}>
              <div className="font-display text-sm text-[var(--color-primary)]">{step.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge map preview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8">
          <h2 className="font-display text-xl font-semibold">
            Always know exactly where you stand
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Every topic gets its own score, so revision time goes where it actually
            helps.
          </p>
          <div className="mt-6 space-y-4">
            {TOPICS.map((topic) => (
              <div key={topic.name}>
                <div className="flex items-center justify-between text-sm">
                  <span>{topic.name}</span>
                  <span className="text-[var(--color-text-subtle)]">{topic.score}%</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-[var(--color-border)]">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${topic.score}%`, background: scoreColor(topic.score) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="border-t border-[var(--color-border)] pt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
          <p>
            AI Act Ready: Learn is an educational tool and does not constitute legal
            advice. Lesson content is reviewed against official EU AI Act sources and
            guidance, with the review date shown on each lesson and glossary entry.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} AI Act Ready. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
