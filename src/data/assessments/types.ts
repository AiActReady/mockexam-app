export type AcademyAssessmentQuestion = {
  id: string;
  levelId: string;
  prompt: string;
  options: string[];
  correct: string;
  explanation: string;
  sourceLabel: string;
  critical?: boolean;
};

export const question = (
  id: string,
  levelId: string,
  prompt: string,
  options: string[],
  correct: string,
  explanation: string,
  sourceLabel: string,
  critical = false
): AcademyAssessmentQuestion => ({ id, levelId, prompt, options, correct, explanation, sourceLabel, critical });
