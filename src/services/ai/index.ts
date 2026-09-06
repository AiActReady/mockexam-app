import { ClaudeTutorProvider } from "./claude-provider";
import type { AiTutorProvider } from "./types";

export * from "./types";

let cachedProvider: AiTutorProvider | null = null;

/**
 * Single entry point the rest of the app should use to reach the AI tutor.
 * UI components call the /api/tutor route, which calls this — nothing
 * outside this folder should import a vendor SDK directly.
 *
 * To switch providers later (e.g. OpenAI), write an OpenAiTutorProvider
 * implementing AiTutorProvider and swap the instantiation below — no other
 * file needs to change.
 */
export function getAiProvider(): AiTutorProvider {
  if (!cachedProvider) {
    cachedProvider = new ClaudeTutorProvider();
  }
  return cachedProvider;
}
