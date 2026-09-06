"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

const TERMS = [
  {
    term: "Provider",
    formal: "The natural or legal person that develops an AI system and places it on the market under its own name or trademark.",
    plain: "Whoever builds the AI and puts their name on it.",
  },
  {
    term: "Deployer",
    formal: "The natural or legal person using an AI system under its authority, except for personal non-professional use.",
    plain: "Whoever actually uses the AI day-to-day, inside their own organisation.",
  },
  {
    term: "High-risk AI",
    formal: "An AI system listed in Annex III, or a safety component of a product already subject to EU conformity assessment.",
    plain: "AI that could seriously affect someone's rights, safety, or livelihood — so it gets extra rules.",
  },
];

export function JargonFlip() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const current = TERMS[index];

  return (
    <div className="w-full max-w-sm">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="group w-full text-left rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-colors hover:border-[var(--color-primary)]/50"
        aria-live="polite"
      >
        {!flipped ? (
          <>
            <p className="text-sm text-[var(--color-text-subtle)]">A term from the Act</p>
            <p className="mt-2 font-display text-2xl font-semibold">{current.term}</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
              {current.formal}
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--color-primary)]">Tap for plain English</p>
          </>
        ) : (
          <>
            <p className="text-sm text-[var(--color-text-subtle)]">In plain English</p>
            <p className="mt-2 font-display text-2xl font-semibold">{current.term}</p>
            <p className="mt-4 text-lg leading-relaxed">{current.plain}</p>
            <p className="mt-4 text-sm font-medium text-[var(--color-primary)]">Tap to see the formal version</p>
          </>
        )}
      </button>
      <button
        onClick={() => {
          setIndex((i) => (i + 1) % TERMS.length);
          setFlipped(false);
        }}
        className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
      >
        <RotateCcw size={14} />
        Try another term
      </button>
    </div>
  );
}
