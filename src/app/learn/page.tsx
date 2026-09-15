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
  correct: string;
  explanation: string;
  source: string;
};

const LESSONS: Lesson[] = [
  {
    title: "Who is the provider?",
    tag: "Roles & definitions",
    explain:
      "A provider is the natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or has it developed, and places it on the market or puts it into service under its own name or trademark.",
    plain:
      "Think: whose name is on the AI system when it is launched, sold or first put into use? That organisation can be the provider even if someone else wrote the code.",
    remember: "Provider = puts it out under their name.",
    examTip:
      "Do not equate provider with programmer. White-labelling or commissioning a system can make an organisation the provider.",
    example:
      "A fintech licenses an AI engine, brands the finished service as its own product and sells it to banks. The fintech can be the provider of that AI system.",
  },
  {
    title: "Who is the deployer?",
    tag: "Roles & definitions",
    explain:
      "A deployer is a natural or legal person, public authority, agency or other body using an AI system under its authority, except where the system is used in the course of a personal, non-professional activity.",
    plain:
      "Think: the organisation actually using the AI in its professional work.",
    remember: "Deployer = uses it in practice.",
    examTip:
      "Roles are system-specific. The same company can be a deployer for one AI system and a provider for another.",
    example:
      "A hospital uses a third-party AI recruitment tool to screen job applicants. The hospital is a deployer of that system.",
  },
  {
    title: "Risk classification: use case first",
    tag: "Risk classification",
    explain:
      "The AI Act uses different legal regimes for different systems and practices. Some practices are prohibited, some systems are classified as high-risk, some systems trigger specific transparency duties, and many other systems face lighter or no system-specific obligations under the Act.",
    plain:
      "Do not classify AI by how clever or expensive it is. Start with what it is actually intended to do and where it is used.",
    remember: "Use case before technology.",
    examTip:
      "For high-risk questions, check Article 6 and the relevant Annex. Employment, education and credit-related uses are common exam scenarios, but the exact function matters.",
    example:
      "A text model drafting marketing copy is not classified the same way as a system using AI to rank candidates for recruitment, even if both use similar underlying technology.",
  },
  {
    title: "Prohibited AI practices",
    tag: "Prohibited practices",
    explain:
      "Article 5 prohibits specified AI practices that cross defined red lines. The prohibitions contain precise legal conditions and, in some cases, exceptions, so the wording of the scenario matters.",
    plain:
      "Some AI uses are not merely high-risk: the specific practice is banned when the legal conditions are met.",
    remember: "Prohibited = check the exact Article 5 conditions.",
    examTip:
      "Avoid broad shortcuts such as 'all biometrics are banned'. The Act prohibits particular practices, not entire technologies in every context.",
    example:
      "Emotion recognition in workplaces and education is prohibited subject to the exceptions in the Act, including uses intended for medical or safety reasons.",
  },
  {
    title: "What high-risk systems require",
    tag: "High-risk obligations",
    explain:
      "The AI Act sets requirements for high-risk systems covering risk management, data and data governance, technical documentation, record-keeping, transparency and information for deployers, human oversight, and accuracy, robustness and cybersecurity.",
    plain:
      "High-risk AI needs evidence that it has been controlled, documented, tested, logged and designed for meaningful human oversight.",
    remember: "Manage · document · log · explain · oversee · secure.",
    examTip:
      "The requirements exist in the Regulation, but after the 2026 AI Omnibus the main high-risk rules apply later: 2 December 2027 for Annex III systems and 2 August 2028 for Annex I product-related systems.",
    example:
      "A recruitment system classified under Annex III will ultimately need to meet the high-risk requirements, but the amended application date for those rules is 2 December 2027.",
  },
  {
    title: "Human oversight",
    tag: "High-risk obligations",
    explain:
      "Article 14 requires high-risk AI systems to be designed and developed so they can be effectively overseen by natural persons. Oversight measures should help people understand capabilities and limitations, remain alert to automation bias, interpret outputs correctly, and intervene or stop the system where appropriate.",
    plain:
      "A human should be able to challenge the machine, not simply rubber-stamp it.",
    remember: "Understand · monitor · challenge · intervene.",
    examTip:
      "A person being 'in the loop' is not enough if they cannot realistically understand, disregard, override or interrupt the output when needed.",
    example:
      "A loan officer who can inspect key factors, see uncertainty and override a recommendation is a stronger oversight mechanism than someone who only clicks Approve.",
  },
  {
    title: "Transparency obligations",
    tag: "Article 50",
    explain:
      "Article 50 transparency rules apply from 2 August 2026. Providers of certain interactive AI systems must ensure people are informed when they are interacting directly with AI. Providers also have marking duties for certain AI-generated or manipulated content, while deployers have disclosure duties for specified uses such as deepfakes, emotion recognition and biometric categorisation.",
    plain:
      "Where Article 50 applies, people should not be misled about AI involvement or the artificial origin of relevant content.",
    remember: "Transparency is separate from high-risk classification.",
    examTip:
      "A transparency duty does not automatically make a system high-risk. Also distinguish provider duties from deployer duties.",
    example:
      "A chatbot may need to tell a person they are interacting with AI at the latest at the time of the first interaction, unless this is obvious from the circumstances and context of use.",
  },
  {
    title: "GPAI in one minute",
    tag: "General-purpose AI",
    explain:
      "General-purpose AI models have a dedicated model-level regime. Providers have baseline transparency, documentation and copyright-related duties. Models with systemic risk face additional risk-assessment, safety, cybersecurity and incident-reporting obligations.",
    plain:
      "A general-purpose model is regulated at model level, while a downstream application built on it can have its own separate system-level obligations.",
    remember: "GPAI = model duties; systemic risk = extra duties.",
    examTip:
      "The AI Act currently presumes high-impact capabilities when cumulative training compute exceeds 10^25 FLOP, although models can also be designated as systemic-risk based on equivalent impact.",
    example:
      "A company providing a versatile foundation model has GPAI-provider duties even though another company may later build a separate customer-service system on top of it.",
  },
  {
    title: "Conformity assessment is not always third-party",
    tag: "Conformity assessment",
    explain:
      "High-risk providers must follow the conformity-assessment route required by Article 43. Not every high-risk system requires a notified body. For many Annex III categories, the route is internal control under Annex VI; notified-body involvement is required in specified circumstances and for particular categories.",
    plain:
      "High-risk does not automatically mean 'external auditor'. First identify the correct conformity route.",
    remember: "High-risk ≠ always Notified Body.",
    examTip:
      "This is a common exam trap. Check the category and Article 43 rather than assuming every CE-marked high-risk AI system needs third-party pre-approval.",
    example:
      "Many Annex III systems in employment, education or credit use the internal-control procedure, while some biometric systems can require notified-body involvement.",
  },
  {
    title: "2026 update: dates and penalties",
    tag: "Current law",
    explain:
      "The AI Act was amended by Regulation (EU) 2026/1744. Most of the Act applies from 2 August 2026, but the main high-risk requirements were postponed. Annex III high-risk rules apply from 2 December 2027 and Annex I product-related high-risk rules from 2 August 2028. Article 99 keeps the top fines at €35 million/7% and €15 million/3%, while supplying incorrect, incomplete or misleading information can attract up to €7.5 million or 1% of worldwide annual turnover for undertakings.",
    plain:
      "Some older training notes still say '24 months / 36 months' and '1.5%' for incorrect information. Those figures are now out of date.",
    remember: "2027 Annex III · 2028 Annex I · incorrect info = 1%.",
    examTip:
      "Use the consolidated AI Act current from 27 July 2026 for date and penalty questions, not pre-Omnibus summaries.",
    example:
      "A question asking when Annex III employment-system high-risk requirements apply should now point to 2 December 2027, not 2 August 2026.",
  },
];

const QUESTIONS: Question[] = [
  {
    prompt: "A company licenses a generic AI engine, puts its own brand on the finished AI product and sells it to customers. What is its most likely role for that AI system?",
    options: ["Deployer only", "Distributor only", "Provider", "Authorized representative"],
    correct: "Provider",
    explanation:
      "Provider status is linked to developing or having an AI system developed and placing it on the market or putting it into service under the organisation's own name or trademark. Writing the underlying code is not required.",
    source: "Lesson notes: Stakeholder Role Analysis · AI Act Article 3(3)",
  },
  {
    prompt: "A hospital's HR department uses a third-party AI tool to screen job applications. What role is the hospital performing in relation to that tool?",
    options: ["Provider", "Deployer", "Importer automatically", "Notified body"],
    correct: "Deployer",
    explanation:
      "The hospital is using the AI system under its authority in a professional activity, so it is acting as a deployer. The fact that recruitment can be high-risk does not itself make the hospital the provider.",
    source: "Lesson notes: Stakeholder Role Analysis · AI Act Article 3(4)",
  },
  {
    prompt: "What should you examine first when deciding whether a stand-alone AI system falls into an Annex III high-risk category?",
    options: ["The model's parameter count", "Its intended purpose and actual use case", "The company's annual revenue", "Whether it uses generative AI"],
    correct: "Its intended purpose and actual use case",
    explanation:
      "High-risk classification is tied to the system's intended purpose and the legally defined use cases. The same underlying technology can be treated differently in different contexts.",
    source: "Lesson notes: Inventory Classification Audit · AI Act Articles 6-7 and Annex III",
  },
  {
    prompt: "True or false: if an AI system has an Article 50 transparency obligation, it is automatically a high-risk AI system.",
    options: ["True", "False"],
    correct: "False",
    explanation:
      "Transparency obligations are a separate regime. An AI system can be subject to Article 50 without being classified as high-risk.",
    source: "AI Act Article 50 · Commission transparency guidelines (2026)",
  },
  {
    prompt: "Which statement best captures meaningful human oversight for high-risk AI?",
    options: ["The human must always agree with the AI", "The human only needs to be named in a policy", "The person can understand, monitor, challenge and intervene when needed", "The AI output must never be overridden"],
    correct: "The person can understand, monitor, challenge and intervene when needed",
    explanation:
      "Article 14 is aimed at effective oversight, including understanding limitations, avoiding automation bias, correctly interpreting output and being able to disregard, override, reverse or interrupt where appropriate.",
    source: "Lesson notes: Oversight Mechanism Design · AI Act Article 14",
  },
  {
    prompt: "Automation bias means:",
    options: ["The AI is deliberately biased by its developer", "Humans over-rely on automated suggestions and discount contradictory information", "The model uses too little training data", "The AI refuses human input"],
    correct: "Humans over-rely on automated suggestions and discount contradictory information",
    explanation:
      "The lesson notes identify automation bias as a core human-oversight risk, and Article 14 specifically requires overseers to remain aware of the possible tendency to automatically rely or over-rely on system output.",
    source: "Lesson notes: Oversight Mechanism Design · AI Act Article 14",
  },
  {
    prompt: "For an interactive AI system covered by Article 50(1), when must a person be informed that they are interacting with AI?",
    options: ["Only if they ask", "Within 24 hours", "At the latest at the time of the first interaction", "Only in the privacy policy"],
    correct: "At the latest at the time of the first interaction",
    explanation:
      "The Article 50 rule is designed to make the AI nature of the interaction clear from the outset, subject to the statutory obviousness exception.",
    source: "Lesson notes: Transparency Notice Drafting · AI Act Article 50(1)",
  },
  {
    prompt: "Which statement is correct about Article 50 transparency duties?",
    options: ["Only providers ever have transparency duties", "Only deployers ever have transparency duties", "Providers and deployers can have different transparency duties depending on the use", "Transparency rules do not apply until 2028"],
    correct: "Providers and deployers can have different transparency duties depending on the use",
    explanation:
      "Article 50 assigns different duties. Providers have duties for direct AI interaction and machine-readable marking of certain generated/manipulated content; deployers have duties for uses such as emotion recognition, biometric categorisation, deepfakes and certain public-interest text.",
    source: "AI Act Article 50 · Commission transparency guidelines (20 July 2026)",
  },
  {
    prompt: "What is the defining idea behind a general-purpose AI (GPAI) model?",
    options: ["It is used only by governments", "It can competently perform a wide range of distinct tasks", "It must always be open source", "It is automatically a high-risk AI system"],
    correct: "It can competently perform a wide range of distinct tasks",
    explanation:
      "GPAI is defined around significant generality and capability across a wide range of distinct tasks, rather than one narrow task or a particular customer sector.",
    source: "Lesson notes: GPAI Compliance Matrix · AI Act Article 3(63)",
  },
  {
    prompt: "What training-compute threshold currently creates a presumption that a GPAI model has high-impact capabilities associated with systemic risk?",
    options: ["10^20 FLOP", "10^23 FLOP", "10^25 FLOP", "10^30 FLOP"],
    correct: "10^25 FLOP",
    explanation:
      "The AI Act currently uses 10^25 floating-point operations used for training as the quantitative threshold for the presumption of high-impact capabilities. The Commission can also designate models based on equivalent impact.",
    source: "Lesson notes: GPAI Compliance Matrix · AI Act Article 51",
  },
  {
    prompt: "Which is a baseline obligation for providers of GPAI models, rather than only an obligation for systemic-risk models?",
    options: ["Provide downstream information about model capabilities and limitations", "Mandatory systemic-risk incident reporting for every model", "Mandatory adversarial testing for every model", "A ban on commercial deployment"],
    correct: "Provide downstream information about model capabilities and limitations",
    explanation:
      "Baseline GPAI-provider obligations include technical documentation and information for downstream providers. Additional safety and systemic-risk duties apply to models with systemic risk.",
    source: "Lesson notes: GPAI Compliance Matrix · AI Act Article 53",
  },
  {
    prompt: "After the 2026 AI Omnibus, when do the main Chapter III high-risk requirements apply to Annex III stand-alone high-risk AI systems such as specified employment uses?",
    options: ["2 August 2026", "2 December 2026", "2 December 2027", "2 August 2028"],
    correct: "2 December 2027",
    explanation:
      "Regulation (EU) 2026/1744 postponed application of Chapter III Sections 1-3 for Article 6(2)/Annex III high-risk systems to 2 December 2027.",
    source: "Current consolidated AI Act Article 113, amended 27 July 2026",
  },
  {
    prompt: "When do the main high-risk requirements apply to AI systems classified as high-risk under Article 6(1) because they are linked to products covered by Annex I?",
    options: ["2 August 2026", "2 December 2027", "2 August 2028", "2 August 2030"],
    correct: "2 August 2028",
    explanation:
      "The 2026 amendment sets 2 August 2028 for the main Chapter III high-risk requirements applicable to Article 6(1)/Annex I product-related systems.",
    source: "Current consolidated AI Act Article 113, amended 27 July 2026",
  },
  {
    prompt: "True or false: every high-risk AI system requires a third-party conformity assessment by a Notified Body.",
    options: ["True", "False"],
    correct: "False",
    explanation:
      "Article 43 provides different conformity routes. Many Annex III systems use the internal-control procedure under Annex VI, while notified-body involvement applies in specified circumstances and categories.",
    source: "Lesson notes: Conformity Roadmap · AI Act Article 43 and Annex VI",
  },
  {
    prompt: "What is the maximum administrative fine for prohibited AI practices under Article 5 for an undertaking?",
    options: ["€7.5 million or 1% of worldwide annual turnover, whichever is higher", "€15 million or 3%, whichever is higher", "€35 million or 7%, whichever is higher", "A fixed €35 million only"],
    correct: "€35 million or 7%, whichever is higher",
    explanation:
      "Article 99(3) sets the maximum at €35 million or, for an undertaking, 7% of total worldwide annual turnover for the preceding financial year, whichever is higher. SME caps use the lower-of rule.",
    source: "Lesson notes: Financial Risk Calculation · current AI Act Article 99(3), (6)",
  },
  {
    prompt: "Under the current consolidated AI Act, supplying incorrect, incomplete or misleading information to a notified body or competent authority in reply to a request can be fined up to:",
    options: ["€7.5 million or 1% of worldwide annual turnover, whichever is higher", "€7.5 million or 1.5%, whichever is higher", "€15 million or 3%, whichever is higher", "€35 million or 7%, whichever is higher"],
    correct: "€7.5 million or 1% of worldwide annual turnover, whichever is higher",
    explanation:
      "The current consolidated Article 99(5) uses 1%, not 1.5%. Some older lesson material still contains the earlier 1.5% figure, so this question intentionally tests the current law.",
    source: "Current consolidated AI Act Article 99(5), version 27 July 2026",
  },
];

export default function LearnPage() {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [showPlain, setShowPlain] = useState(true);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const lesson = LESSONS[lessonIndex];
  const question = QUESTIONS[quizIndex];
  const answered = selected !== null;
  const isCorrect = answered && selected === question.correct;
  const progress = useMemo(
    () =>
      mode === "learn"
        ? ((lessonIndex + 1) / LESSONS.length) * 100
        : finished
          ? 100
          : ((quizIndex + 1) / QUESTIONS.length) * 100,
    [mode, lessonIndex, quizIndex, finished]
  );

  function answerQuestion(option: string) {
    if (answered || finished) return;
    setSelected(option);
    if (option === question.correct) setScore((s) => s + 1);
  }

  function nextQuestion() {
    if (quizIndex === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setQuizIndex((i) => i + 1);
    setSelected(null);
  }

  function restartQuiz() {
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
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
            Validated quiz
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
                onClick={() => {
                  restartQuiz();
                  setMode("quiz");
                }}
                className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
              >
                Take validated quiz
              </button>
            )}
          </div>
        </section>
      ) : finished ? (
        <section className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7 text-center md:p-9">
          <div className="text-sm font-medium text-[var(--color-primary)]">Quiz complete</div>
          <h1 className="mt-3 font-display text-4xl font-semibold">{score} / {QUESTIONS.length}</h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            These questions were reviewed against the uploaded lesson notes and current official EU sources. Use the explanations to revisit any weak areas.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              onClick={restartQuiz}
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
            >
              Try again
            </button>
            <button
              onClick={() => setMode("learn")}
              className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm"
            >
              Review lessons
            </button>
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
              const chosen = selected === option;
              const correct = answered && option === question.correct;
              const wrongChosen = answered && chosen && option !== question.correct;
              return (
                <button
                  key={option}
                  onClick={() => answerQuestion(option)}
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
              {!isCorrect && (
                <p className="mt-2 text-sm font-medium">Correct answer: {question.correct}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{question.explanation}</p>
              <p className="mt-3 text-xs text-[var(--color-text-subtle)]">Source basis: {question.source}</p>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              disabled={!answered}
              onClick={nextQuestion}
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] disabled:opacity-30"
            >
              {quizIndex === QUESTIONS.length - 1 ? "See result" : "Next question"}
            </button>
          </div>
        </section>
      )}

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] p-4 text-xs leading-relaxed text-[var(--color-text-subtle)]">
        <p><strong>Reviewed 15 September 2026.</strong> Educational exam-preparation content only; not legal advice.</p>
        <p className="mt-2">
          Official checks: {" "}
          <a className="underline hover:text-[var(--color-text)]" href="https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng" target="_blank" rel="noreferrer">consolidated EU AI Act</a>
          {" · "}
          <a className="underline hover:text-[var(--color-text)]" href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noreferrer">Commission implementation timeline</a>
          {" · "}
          <a className="underline hover:text-[var(--color-text)]" href="https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations" target="_blank" rel="noreferrer">Article 50 guidance</a>
          {" · "}
          <a className="underline hover:text-[var(--color-text)]" href="https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers" target="_blank" rel="noreferrer">GPAI guidance</a>
        </p>
      </div>
    </div>
  );
}
