"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Lesson = {
  title: string;
  tag: string;
  explain: string;
  plain: string;
  remember: string;
  examTip: string;
  example: string;
};

type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

const LESSONS: Lesson[] = [
  {
    title: "Who is the provider?",
    tag: "Roles & definitions",
    explain:
      "A provider is the natural or legal person, public authority, agency or other body that develops an AI system or GPAI model, or has it developed, and places it on the market or puts it into service under its own name or trademark.",
    plain:
      "Think: the organisation whose name is on the AI product when it is launched or put into use.",
    remember: "Provider = puts it out under their name.",
    examTip:
      "Do not assume the provider must have written every line of code. Having the system developed for you can still make you the provider.",
    example:
      "A retailer commissions an AI recruitment tool from a software studio and launches it under the retailer's own brand. The retailer can be the provider.",
  },
  {
    title: "Who is the deployer?",
    tag: "Roles & definitions",
    explain:
      "A deployer is a person or organisation using an AI system under its authority, except where the system is used in the course of a personal, non-professional activity.",
    plain:
      "Think: the organisation actually using the AI in its work.",
    remember: "Deployer = uses it in practice.",
    examTip:
      "Provider and deployer are different roles, but one organisation can sometimes perform more than one role depending on what it does.",
    example:
      "A hospital uses a third-party AI system to support clinical workflows. The hospital is acting as a deployer of that system.",
  },
  {
    title: "The risk-based structure",
    tag: "Risk classification",
    explain:
      "The AI Act applies different obligations depending on the kind of AI system and the risk it presents. Some practices are prohibited, some systems are high-risk, some trigger transparency duties, and many other systems face lighter or no specific AI Act obligations.",
    plain:
      "Not all AI is regulated the same way. The more serious the potential harm, the heavier the rules tend to be.",
    remember: "Ban → High-risk → Transparency → Minimal/lower risk.",
    examTip:
      "In exam questions, identify the use case first. The same underlying technology can face different obligations depending on how it is used.",
    example:
      "An AI system used in a high-stakes employment decision may face much stricter rules than an AI tool used to generate decorative images.",
  },
  {
    title: "Prohibited AI practices",
    tag: "Risk classification",
    explain:
      "The Act prohibits specified AI practices considered incompatible with fundamental rights and Union values. These include certain manipulative or exploitative practices and other specifically listed uses.",
    plain:
      "Some uses of AI are not just high-risk — they are banned outright when they fall within the prohibited categories and conditions in the Act.",
    remember: "Prohibited = do not deploy the practice.",
    examTip:
      "Be careful with absolute statements. Many prohibited-practice provisions contain precise conditions, thresholds or exceptions, so read the scenario closely.",
    example:
      "If a scenario describes AI intentionally exploiting a person's vulnerability in a way that is likely to cause significant harm, check the prohibited-practices rules carefully.",
  },
  {
    title: "What high-risk systems need",
    tag: "High-risk obligations",
    explain:
      "High-risk AI systems are subject to a structured set of obligations that can include risk management, data and data governance controls, technical documentation, record-keeping, transparency to deployers, human oversight, accuracy, robustness and cybersecurity.",
    plain:
      "High-risk systems need evidence that they are controlled, documented, monitored and capable of being overseen by people.",
    remember: "High-risk = manage, document, log, explain, oversee, secure.",
    examTip:
      "Questions often test whether you can distinguish organisational governance duties from technical system requirements.",
    example:
      "A provider of a high-risk system should be able to show how risks were identified, mitigated, documented and monitored over the system lifecycle.",
  },
  {
    title: "Human oversight",
    tag: "High-risk obligations",
    explain:
      "Human oversight measures are intended to enable people to understand the system's capacities and limitations, detect anomalies where appropriate, interpret outputs correctly and intervene or stop use where necessary.",
    plain:
      "A human must not be reduced to a rubber stamp. Oversight needs to be meaningful.",
    remember: "Human oversight = understand, watch, challenge, intervene.",
    examTip:
      "If the human cannot realistically understand or challenge the output, the oversight arrangement may be weak even if a person is technically 'in the loop'.",
    example:
      "A reviewer who is trained to recognise when an AI recommendation is unreliable and can override it is a stronger oversight mechanism than someone who simply clicks approve.",
  },
  {
    title: "Transparency obligations",
    tag: "Transparency",
    explain:
      "Certain AI systems have specific transparency duties, including rules designed to ensure people know when they are interacting with AI or when particular synthetic or manipulated content is involved, subject to the exact conditions in the Act.",
    plain:
      "Sometimes the key obligation is simply making sure people are not misled about the fact that AI is involved.",
    remember: "Transparency = make AI involvement clear where required.",
    examTip:
      "Do not confuse transparency duties with high-risk classification. A system may trigger transparency rules without being a high-risk AI system.",
    example:
      "A conversational AI service may need to inform a person that they are interacting with an AI system where the relevant legal conditions apply.",
  },
  {
    title: "GPAI in one minute",
    tag: "GPAI",
    explain:
      "General-purpose AI models are regulated through a dedicated set of obligations. Providers of GPAI models have duties such as maintaining certain technical information and providing information to downstream providers; additional obligations apply to GPAI models with systemic risk.",
    plain:
      "Foundation-style models have their own rule set, and the largest or most capable models can face extra systemic-risk duties.",
    remember: "GPAI = model-level duties; systemic risk = extra duties.",
    examTip:
      "Distinguish the GPAI model from a downstream AI system built using that model. The legal role and obligations can differ.",
    example:
      "A company providing a general-purpose model may have model-level obligations even when another company later builds a separate application on top of it.",
  },
];

const QUESTIONS: Question[] = [
  {
    prompt: "A company commissions an AI tool from a developer and launches it under its own brand. Which role is it most likely performing?",
    options: ["Deployer only", "Provider", "Distributor only", "Not covered"],
    answer: 1,
    explanation:
      "Provider status can arise where an organisation has the AI system developed and places it on the market or puts it into service under its own name or trademark.",
  },
  {
    prompt: "Which statement best describes a deployer?",
    options: [
      "Only the company that trained the model",
      "An organisation using an AI system under its authority in a professional context",
      "Any consumer using an AI photo app at home",
      "Only an importer into the EU",
    ],
    answer: 1,
    explanation:
      "A deployer is the person or organisation using the system under its authority, excluding personal non-professional use.",
  },
  {
    prompt: "Which is the best way to think about the AI Act's risk structure?",
    options: [
      "Every AI system has identical obligations",
      "Only generative AI is regulated",
      "Obligations vary according to the type and risk of the use case",
      "Only public-sector AI is covered",
    ],
    answer: 2,
    explanation:
      "The Act is risk-based. Different categories and use cases trigger different obligations.",
  },
  {
    prompt: "Which phrase best captures meaningful human oversight?",
    options: [
      "A human must always agree with the AI",
      "A person can understand, challenge and intervene when needed",
      "The AI system should never be overridden",
      "A human only needs to be named in a policy",
    ],
    answer: 1,
    explanation:
      "Meaningful oversight is about practical ability to understand limitations, monitor use, interpret outputs and intervene where necessary.",
  },
  {
    prompt: "Which of these is commonly associated with high-risk AI requirements?",
    options: [
      "No documentation at all",
      "Risk management and technical documentation",
      "A ban on all automated processing",
      "A requirement that the model be open source",
    ],
    answer: 1,
    explanation:
      "High-risk obligations include a structured set of controls such as risk management, documentation, logging, oversight, accuracy, robustness and cybersecurity.",
  },
  {
    prompt: "True or false: every AI system with a transparency obligation is automatically a high-risk AI system.",
    options: ["True", "False"],
    answer: 1,
    explanation:
      "False. Transparency duties are a distinct part of the Act and can apply without the system being classified as high-risk.",
  },
  {
    prompt: "Which statement about GPAI is most accurate?",
    options: [
      "GPAI models have no dedicated obligations",
      "GPAI model providers can have model-level duties, with extra duties for systemic-risk models",
      "All GPAI models are prohibited",
      "GPAI rules only apply to deployers",
    ],
    answer: 1,
    explanation:
      "The Act contains dedicated obligations for GPAI model providers, and additional obligations apply to models with systemic risk.",
  },
  {
    prompt: "What should you do first when an exam scenario asks whether an AI system is high-risk?",
    options: [
      "Look only at the model size",
      "Identify the actual intended use and context",
      "Assume every workplace tool is high-risk",
      "Ignore who is using the system",
    ],
    answer: 1,
    explanation:
      "Classification depends heavily on the intended use and context. Start with what the system is actually being used to do.",
  },
];

export default function LearnPage() {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [showPlain, setShowPlain] = useState(true);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const lesson = LESSONS[lessonIndex];
  const question = QUESTIONS[quizIndex];
  const answered = selected !== null;
  const isCorrect = answered && selected === question.answer;
  const progress = useMemo(
    () => (mode === "learn" ? ((lessonIndex + 1) / LESSONS.length) * 100 : ((quizIndex + 1) / QUESTIONS.length) * 100),
    [mode, lessonIndex, quizIndex]
  );

  function answerQuestion(index: number) {
    if (answered) return;
    setSelected(index);
    if (index === question.answer) setScore((s) => s + 1);
  }

  function nextQuestion() {
    if (quizIndex === QUESTIONS.length - 1) {
      setQuizIndex(0);
      setSelected(null);
      setScore(0);
      return;
    }
    setQuizIndex((i) => i + 1);
    setSelected(null);
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/dashboard" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
          ← Dashboard
        </Link>
        <div className="flex rounded-full border border-[var(--color-border)] p-1 text-sm">
          <button
            onClick={() => setMode("learn")}
            className={`rounded-full px-4 py-2 ${mode === "learn" ? "bg-[var(--color-primary)] text-[var(--color-bg)]" : ""}`}
          >
            Learn
          </button>
          <button
            onClick={() => setMode("quiz")}
            className={`rounded-full px-4 py-2 ${mode === "quiz" ? "bg-[var(--color-primary)] text-[var(--color-bg)]" : ""}`}
          >
            Quick quiz
          </button>
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--color-border)]">
        <div className="h-full bg-[var(--color-primary)] transition-all" style={{ width: `${progress}%` }} />
      </div>

      {mode === "learn" ? (
        <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 md:p-9">
          <div className="text-sm font-medium text-[var(--color-primary)]">{lesson.tag}</div>
          <h1 className="mt-2 font-display text-3xl font-semibold">{lesson.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">{lesson.explain}</p>

          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
            <button
              onClick={() => setShowPlain((v) => !v)}
              className="text-sm font-semibold text-[var(--color-primary)]"
            >
              {showPlain ? "Hide plain English" : "Show plain English"}
            </button>
            {showPlain && <p className="mt-3 leading-relaxed">{lesson.plain}</p>}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] p-5">
              <div className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">Remember it</div>
              <p className="mt-2 font-display text-lg font-semibold">{lesson.remember}</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] p-5">
              <div className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">Exam tip</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{lesson.examTip}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[var(--color-border)] p-5">
            <div className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">Example</div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{lesson.example}</p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              disabled={lessonIndex === 0}
              onClick={() => setLessonIndex((i) => Math.max(0, i - 1))}
              className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm disabled:opacity-30"
            >
              Previous
            </button>
            <div className="text-sm text-[var(--color-text-subtle)]">{lessonIndex + 1} / {LESSONS.length}</div>
            {lessonIndex < LESSONS.length - 1 ? (
              <button
                onClick={() => setLessonIndex((i) => i + 1)}
                className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
              >
                Next lesson
              </button>
            ) : (
              <button
                onClick={() => setMode("quiz")}
                className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
              >
                Take the quiz
              </button>
            )}
          </div>
        </section>
      ) : (
        <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 md:p-9">
          <div className="flex items-center justify-between gap-4 text-sm text-[var(--color-text-subtle)]">
            <span>Question {quizIndex + 1} of {QUESTIONS.length}</span>
            <span>Score: {score}</span>
          </div>
          <h1 className="mt-5 font-display text-2xl font-semibold leading-snug">{question.prompt}</h1>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              const chosen = selected === index;
              const correct = answered && index === question.answer;
              const wrongChosen = answered && chosen && index !== question.answer;
              return (
                <button
                  key={option}
                  onClick={() => answerQuestion(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    correct
                      ? "border-emerald-500 bg-emerald-500/10"
                      : wrongChosen
                        ? "border-red-500 bg-red-500/10"
                        : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  <span className="mr-3 text-[var(--color-text-subtle)]">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`mt-6 rounded-2xl border p-5 ${isCorrect ? "border-emerald-500/50" : "border-amber-500/50"}`}>
              <div className="font-semibold">{isCorrect ? "Correct" : "Not quite"}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{question.explanation}</p>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              disabled={!answered}
              onClick={nextQuestion}
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] disabled:opacity-30"
            >
              {quizIndex === QUESTIONS.length - 1 ? "Restart quiz" : "Next question"}
            </button>
          </div>
        </section>
      )}

      <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        Educational test content only. Before public release, each lesson should be reviewed against the final text of Regulation (EU) 2024/1689 and official guidance.
      </p>
    </div>
  );
}
