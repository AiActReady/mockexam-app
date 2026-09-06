export interface TutorContext {
  lessonId?: string;
  questionId?: string;
  conceptIds: string[];
  learnerWeakAreas?: string[];
  /** True during a graded run (Topic Test / Mock Exam) — providers must
   *  refuse to reveal answers when this is set, and the UI should not even
   *  call the tutor in this state until the question has been submitted. */
  isGradedAndUnsubmitted: boolean;
}

export interface TutorMessage {
  role: "user" | "assistant";
  content: string;
}

export interface MistakeExplanationInput {
  questionPrompt: string;
  correctAnswer: string;
  learnerAnswer: string;
  conceptIds: string[];
}

export interface MistakeExplanationOutput {
  whyCorrectAnswerIsCorrect: string;
  likelyMisunderstanding: string;
  conceptToRevise: string;
  memoryTechnique: string;
  examRelevance: string;
}

/**
 * Every AI provider (Claude, OpenAI, ...) implements this interface.
 * UI components and API routes depend only on this contract, never on a
 * specific vendor SDK — swapping providers means writing one new adapter,
 * not touching the frontend.
 */
export interface AiTutorProvider {
  getTutorResponse(
    history: TutorMessage[],
    context: TutorContext
  ): Promise<string>;

  explainMistake(input: MistakeExplanationInput): Promise<MistakeExplanationOutput>;

  generateMockQuestions(params: {
    trackId: string;
    conceptIds: string[];
    count: number;
  }): Promise<Array<{ prompt: string; options: string[]; correctIndex: number; explanation: string }>>;
}
