export interface RevisionState {
  intervalDays: number;
  easeFactor: number; // starts at 2.5, SM-2 style
}

export type AttemptOutcome = {
  isCorrect: boolean;
  confidenceRating: 1 | 2 | 3 | 4 | 5; // 1 = guessed, 5 = certain
};

const MIN_EASE = 1.3;

/**
 * Given the learner's previous revision state and the outcome of their most
 * recent attempt at a Concept, returns the next state (interval + ease) and
 * the next due date. Deliberately simple and explainable rather than a
 * black box — product principle is "learner should know exactly what they
 * understand and what needs revision."
 */
export function scheduleNextRevision(
  prev: RevisionState,
  outcome: AttemptOutcome,
  now: Date = new Date()
): RevisionState & { nextDueAt: Date } {
  let { intervalDays, easeFactor } = prev;

  if (!outcome.isCorrect) {
    // Wrong answers always resurface soon, regardless of prior interval.
    intervalDays = 1;
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.2);
  } else if (outcome.confidenceRating <= 2) {
    // Correct but unsure — treat like a near-miss, short interval.
    intervalDays = Math.max(1, Math.round(intervalDays * 0.5)) || 1;
  } else {
    // Correct and confident — grow the interval.
    intervalDays = intervalDays <= 0 ? 1 : Math.round(intervalDays * easeFactor);
    easeFactor = easeFactor + (outcome.confidenceRating === 5 ? 0.1 : 0.05);
  }

  const nextDueAt = new Date(now);
  nextDueAt.setDate(nextDueAt.getDate() + intervalDays);

  return { intervalDays, easeFactor, nextDueAt };
}

/**
 * Mastery score (0-100) for a Concept, given recent attempts. Recency-
 * weighted so old mistakes matter less than what the learner can do today,
 * and confidence-aware so "confident but wrong" is penalised more than
 * "unsure and wrong" (a bigger red flag for exam readiness).
 */
export function calculateMastery(
  attempts: Array<{ isCorrect: boolean; confidenceRating: 1 | 2 | 3 | 4 | 5 }>
): number {
  if (attempts.length === 0) return 0;

  const recent = attempts.slice(-8); // last 8 attempts
  let weightedSum = 0;
  let weightTotal = 0;

  recent.forEach((attempt, i) => {
    const recencyWeight = i + 1; // later attempts weigh more
    let points = attempt.isCorrect ? 100 : 0;

    if (!attempt.isCorrect && attempt.confidenceRating >= 4) {
      points -= 15; // confident-but-wrong is a bigger gap than unsure-and-wrong
    }
    if (attempt.isCorrect && attempt.confidenceRating <= 2) {
      points -= 10; // right by luck still needs more practice
    }

    weightedSum += Math.max(0, points) * recencyWeight;
    weightTotal += recencyWeight;
  });

  return Math.round(weightedSum / weightTotal);
}

export function masteryLabel(score: number): "strong" | "developing" | "needs-revision" {
  if (score >= 80) return "strong";
  if (score >= 50) return "developing";
  return "needs-revision";
}
