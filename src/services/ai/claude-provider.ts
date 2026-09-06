import type {
  AiTutorProvider,
  MistakeExplanationInput,
  MistakeExplanationOutput,
  TutorContext,
  TutorMessage,
} from "./types";

const MODEL = "claude-sonnet-4-6";

const TUTOR_SYSTEM_PROMPT = `You are the AI tutor inside "AI Act Ready: Learn", a learning app that
teaches the EU AI Act to complete novices preparing for a certification exam.

Rules:
- Explain things in plain English first, then add precision.
- Keep replies short (a few sentences) — this is a mobile-friendly, low-attention-span product.
- If the learner is in a graded assessment that has not yet been submitted, refuse to give
  the answer and say tutoring resumes after they submit.
- Never invent AI Act provisions. If unsure, say so plainly rather than guessing.
- Match the tone of the app: encouraging, direct, never patronising.`;

/**
 * Server-only. Never import this file into a client component — it reads
 * process.env.ANTHROPIC_API_KEY directly.
 */
export class ClaudeTutorProvider implements AiTutorProvider {
  private apiKey: string;

  constructor(apiKey = process.env.ANTHROPIC_API_KEY) {
    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY is not set — check your .env / deployment config.");
    }
    this.apiKey = apiKey;
  }

  private async callClaude(system: string, messages: { role: "user" | "assistant"; content: string }[]) {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 600,
        system,
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    const textBlock = data.content?.find((block: { type: string }) => block.type === "text");
    return textBlock?.text ?? "";
  }

  async getTutorResponse(history: TutorMessage[], context: TutorContext): Promise<string> {
    if (context.isGradedAndUnsubmitted) {
      return "I can help once you've submitted this question — for graded tests I hold back so the result reflects what you actually know.";
    }

    const contextNote = `Learner context: concepts=[${context.conceptIds.join(", ")}]${
      context.learnerWeakAreas?.length ? `, known weak areas=[${context.learnerWeakAreas.join(", ")}]` : ""
    }.`;

    return this.callClaude(`${TUTOR_SYSTEM_PROMPT}\n\n${contextNote}`, history);
  }

  async explainMistake(input: MistakeExplanationInput): Promise<MistakeExplanationOutput> {
    const prompt = `Question: ${input.questionPrompt}
Correct answer: ${input.correctAnswer}
Learner's answer: ${input.learnerAnswer}
Concepts tested: ${input.conceptIds.join(", ")}

Respond ONLY with JSON, no preamble, matching exactly this shape:
{"whyCorrectAnswerIsCorrect": string, "likelyMisunderstanding": string, "conceptToRevise": string, "memoryTechnique": string, "examRelevance": string}`;

    const raw = await this.callClaude(TUTOR_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
    return JSON.parse(raw.replace(/```json|```/g, "").trim());
  }

  async generateMockQuestions(params: { trackId: string; conceptIds: string[]; count: number }) {
    const prompt = `Generate ${params.count} exam-style multiple choice questions on the EU AI Act
for concepts: ${params.conceptIds.join(", ")} (exam track: ${params.trackId}).
Respond ONLY with a JSON array, each item: {"prompt": string, "options": string[4], "correctIndex": number, "explanation": string}.`;

    const raw = await this.callClaude(TUTOR_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
    return JSON.parse(raw.replace(/```json|```/g, "").trim());
  }
}
