import type { AcademyAssessmentQuestion } from "./types";
import { ORIENTATION_QUESTIONS } from "./orientation";
import { FOUNDATION_QUESTIONS } from "./foundation";
import { PRACTITIONER_QUESTIONS } from "./practitioner";
import { IMPLEMENTER_QUESTIONS } from "./implementer";

export const ACADEMY_ASSESSMENT_QUESTIONS: AcademyAssessmentQuestion[] = [
  ...ORIENTATION_QUESTIONS,
  ...FOUNDATION_QUESTIONS,
  ...PRACTITIONER_QUESTIONS,
  ...IMPLEMENTER_QUESTIONS,
];

export function getAssessmentQuestions(levelId: string) {
  return ACADEMY_ASSESSMENT_QUESTIONS.filter((question) => question.levelId === levelId);
}

export function getAssessmentQuestionCount(levelId: string) {
  return getAssessmentQuestions(levelId).length;
}

export function hasAutomatedAssessment(levelId: string) {
  return getAssessmentQuestionCount(levelId) > 0;
}
