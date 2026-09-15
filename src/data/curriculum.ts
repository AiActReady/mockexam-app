export type AcademyLevel = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  purpose: string;
  outcome: string;
  recommendedTime: string;
  gate: string;
  modules: string[];
  practical: string[];
  clientDeliverables: string[];
};

export const ACADEMY_LEVELS: AcademyLevel[] = [
  {
    id: "orientation",
    number: "0",
    title: "Orientation",
    subtitle: "How AI Act Ready works with clients",
    purpose:
      "Understand the consulting approach, professional boundaries, evidence discipline and how to use the AI Act Ready tool before learning the detailed regulation.",
    outcome: "I understand how an AI Act Ready engagement should be run and when to escalate rather than guess.",
    recommendedTime: "30-45 min",
    gate: "Complete the consultant code, engagement workflow and escalation check.",
    modules: [
      "What AI Act Ready does - and does not do",
      "Governance support vs legal advice",
      "Evidence-first consulting and audit trails",
      "Client communication: clear, calm and non-alarmist",
      "Using the AI Act Ready tool: inventory to evidence pack",
      "When to escalate to legal, security, privacy or technical specialists",
    ],
    practical: [
      "Review a fictional client brief and identify what is in scope",
      "Spot five statements that would cross the line into legal advice",
      "Draft a simple client-facing explanation of the engagement process",
    ],
    clientDeliverables: ["Engagement scope", "Assumptions log", "Escalation notes"],
  },
  {
    id: "foundation",
    number: "1",
    title: "Foundation",
    subtitle: "Understand the map",
    purpose:
      "Build confidence with the essential EU AI Act and ISO/IEC 42001 concepts in short, low-pressure learning chunks.",
    outcome: "I can explain the core concepts accurately in plain English without bluffing.",
    recommendedTime: "2-3 hours in short sessions",
    gate: "Pass the Foundation knowledge check at 80% or better.",
    modules: [
      "EU AI Act purpose, scope and risk-based structure",
      "Provider, deployer, importer, distributor and authorised representative",
      "Prohibited practices and high-risk AI basics",
      "Transparency duties and Article 50 basics",
      "GPAI and systemic-risk basics",
      "Human oversight and automation bias",
      "ISO/IEC 42001: what an AI management system is",
      "Plan-Do-Check-Act and continual improvement",
    ],
    practical: [
      "Classify ten simple role scenarios",
      "Identify which scenarios need transparency, high-risk review or escalation",
      "Explain AIMS and the AI Act to a non-technical manager in two minutes",
    ],
    clientDeliverables: ["Basic role map", "Initial AI inventory notes", "Plain-English client explanation"],
  },
  {
    id: "practitioner",
    number: "2",
    title: "Practitioner",
    subtitle: "Apply the rules to real scenarios",
    purpose:
      "Move from definitions to judgement: determine roles, intended purpose, likely risk classification and applicable obligations from realistic client scenarios.",
    outcome: "I can analyse a client situation, explain my reasoning and identify what evidence is still missing.",
    recommendedTime: "4-6 hours",
    gate: "Pass scenario assessment at 80% and no critical role/classification errors.",
    modules: [
      "Territorial scope and applicability",
      "Intended purpose and substantial modification",
      "Article 5 prohibited-practice analysis",
      "Article 6 and Annex III high-risk classification",
      "High-risk provider and deployer obligations",
      "Article 50 transparency scenarios",
      "GPAI provider vs downstream responsibilities",
      "Current implementation dates and enforcement",
      "ISO/IEC 42001 clauses 4-10 at practitioner level",
      "AI policy, objectives, roles, competence and documented information",
    ],
    practical: [
      "Classify a mixed portfolio of 20 fictional AI systems",
      "Build a provider/deployer/importer/distributor role map",
      "Write a defensible rationale for three systems that are not high-risk",
      "Review a vendor response and identify evidence gaps",
    ],
    clientDeliverables: ["AI system inventory", "Role/exposure map", "Risk classification rationale", "Evidence request list"],
  },
  {
    id: "implementer",
    number: "3",
    title: "Implementer",
    subtitle: "Turn requirements into working governance",
    purpose:
      "Learn how to run the practical work: build controls, evidence, governance routines and a remediation plan using the AI Act Ready tool.",
    outcome: "I can take a client from discovery through a practical, evidence-backed implementation plan.",
    recommendedTime: "1-2 days in modules",
    gate: "Complete the simulated client engagement and produce the required evidence pack.",
    modules: [
      "Discovery interviews and AI inventory workshops",
      "Risk and opportunity assessment",
      "AI impact assessment and fundamental-rights triage",
      "Data governance and representativeness",
      "Human oversight design",
      "Technical documentation and record-keeping",
      "Supplier and model governance",
      "Transparency notice implementation",
      "Post-market monitoring and incident management",
      "ISO/IEC 42001 AIMS implementation and Annex A control themes",
      "Management review, internal audit and corrective action",
    ],
    practical: [
      "Run a complete fictional client discovery",
      "Create a gap analysis and prioritised remediation plan",
      "Draft governance controls and evidence requirements",
      "Prepare an executive readout with risks, actions and owners",
      "Use the AI Act Ready tool to build a simulated evidence pack",
    ],
    clientDeliverables: [
      "Validated AI inventory",
      "Gap analysis",
      "Implementation roadmap",
      "Control/evidence matrix",
      "Executive readout",
      "Evidence pack",
    ],
  },
  {
    id: "client-ready",
    number: "4",
    title: "Client-Ready Consultant",
    subtitle: "Prove you can do the work safely",
    purpose:
      "Demonstrate client judgement, communication and delivery quality before working independently on a real engagement.",
    outcome: "I am ready to support a real AI Act Ready client within defined scope and escalation rules.",
    recommendedTime: "Half-day assessment plus review",
    gate: "Internal sign-off after a full case simulation. This is an AI Act Ready readiness badge, not an external accredited certification.",
    modules: [
      "Complex mixed-role case analysis",
      "Handling ambiguity without inventing an answer",
      "Client challenge and difficult conversations",
      "Evidence quality and defensibility",
      "Scope control and change management",
      "Escalation decisions",
      "Final client handover and action planning",
    ],
    practical: [
      "Complete a timed simulated client case from intake to executive readout",
      "Defend five classification decisions to an internal reviewer",
      "Handle three deliberately ambiguous client questions",
      "Identify what must be escalated rather than answered",
    ],
    clientDeliverables: ["Complete assessment pack", "Executive presentation", "Decision log", "Escalation record", "Client handover plan"],
  },
  {
    id: "lead-assurance",
    number: "5",
    title: "Lead & Assurance",
    subtitle: "Review, challenge and mentor",
    purpose:
      "Advanced pathway for people reviewing other consultants, leading programmes, preparing for audits or coordinating legal, privacy, security and technical specialists.",
    outcome: "I can review another consultant's work, identify weak evidence and lead a complex governance programme.",
    recommendedTime: "Advanced / experience-based",
    gate: "Evidence of successful delivery plus advanced review assessment.",
    modules: [
      "Assurance planning and sampling",
      "Evaluating evidence quality",
      "Internal audit and management review",
      "Nonconformity and corrective action",
      "Complex supply-chain and GPAI scenarios",
      "Cross-framework mapping: EU AI Act, ISO/IEC 42001, GDPR and NIST AI RMF",
      "Coaching and quality assurance for delivery teams",
    ],
    practical: [
      "Review a deliberately flawed client evidence pack",
      "Write findings and corrective actions",
      "Chair a simulated management review",
      "Mentor a Practitioner through a difficult classification case",
    ],
    clientDeliverables: ["Assurance report", "Findings log", "Corrective action plan", "Management review pack"],
  },
];
