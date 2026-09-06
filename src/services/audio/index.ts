"use client";

export interface TtsProvider {
  speak(text: string, opts?: { rate?: number }): void;
  pause(): void;
  resume(): void;
  stop(): void;
  isSupported(): boolean;
}

/**
 * MVP implementation using the browser's built-in SpeechSynthesis API —
 * zero cost, zero infra. Swap this for a hosted TTS provider (ElevenLabs,
 * Amazon Polly, etc.) later by writing a new class with the same interface;
 * nothing in the lesson/glossary components needs to change.
 */
class WebSpeechTtsProvider implements TtsProvider {
  private utterance: SpeechSynthesisUtterance | null = null;

  isSupported() {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  speak(text: string, opts?: { rate?: number }) {
    if (!this.isSupported()) return;
    window.speechSynthesis.cancel();
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.rate = opts?.rate ?? 1;
    window.speechSynthesis.speak(this.utterance);
  }

  pause() {
    if (this.isSupported()) window.speechSynthesis.pause();
  }

  resume() {
    if (this.isSupported()) window.speechSynthesis.resume();
  }

  stop() {
    if (this.isSupported()) window.speechSynthesis.cancel();
  }
}

let cachedProvider: TtsProvider | null = null;

export function getTtsProvider(): TtsProvider {
  if (!cachedProvider) {
    cachedProvider = new WebSpeechTtsProvider();
  }
  return cachedProvider;
}
