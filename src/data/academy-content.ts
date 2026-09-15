export type AcademyModule = {
  levelId: string;
  slug: string;
  title: string;
  duration: string;
  objective: string;
  lesson: string[];
  keyPoints: string[];
  clientPractice: string;
  evidence: string[];
  sourceNote: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/iso\/iec/g, "iso-iec")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const module = (
  levelId: string,
  title: string,
  objective: string,
  lesson: string[],
  keyPoints: string[],
  clientPractice: string,
  evidence: string[],
  sourceNote: string,
  duration = "15 min"
): AcademyModule => ({
  levelId,
  slug: slugify(title),
  title,
  duration,
  objective,
  lesson,
  keyPoints,
  clientPractice,
  evidence,
  sourceNote,
});

const EU_SOURCE =
  "Based on the uploaded EU AI Specialist lesson notes and checked against the consolidated EU AI Act in force on 27 July 2026. Where the source pack and current law differ, the current law wins.";
const ISO_SOURCE =
  "Training summary based on public ISO and BSI descriptions of ISO/IEC 42001. It teaches the management-system structure and practical implementation approach without reproducing the copyrighted standard text.";
const INTERNAL_SOURCE =
  "AI Act Ready internal consulting method. This is an operational training convention, not a legal rule or accredited certification requirement.";

export const ACADEMY_MODULES: AcademyModule[] = [
  // ORIENTATION
  module(
    "orientation",
    "What AI Act Ready does - and does not do",
    "Understand the service boundary before discussing regulation with a client.",
    [
      "AI Act Ready helps organisations discover AI use, map roles and regulatory exposure, classify systems, identify governance gaps and assemble evidence-backed remediation plans.",
      "The consultant is not there to provide legal opinions, certify a system or guarantee compliance. The job is to create a defensible governance picture and identify where specialist legal, privacy, security or technical advice is required.",
      "A good engagement leaves the client with clearer ownership, documented decisions, evidence requests and a prioritised plan rather than a vague compliance score."
    ],
    ["Governance support is not legal advice.", "Document assumptions rather than hiding uncertainty.", "A defensible evidence trail is more valuable than confident guesswork."],
    "A client asks: 'Can you confirm we are legally compliant?' Draft a two-sentence response that keeps the engagement useful without giving a legal opinion.",
    ["Scope statement", "Assumptions log", "Escalation note"],
    INTERNAL_SOURCE,
    "10 min"
  ),
  module(
    "orientation",
    "Governance support vs legal advice",
    "Recognise the boundary between practical governance implementation and legal interpretation.",
    [
      "Consultants can explain how the AI Act is structured, what information is needed for classification, what controls are commonly required and what evidence should exist.",
      "Escalate where the answer depends on contested statutory interpretation, litigation exposure, employment law, data-protection law, contractual liability or another specialist legal judgement.",
      "Phrase uncertain points as issues to validate: 'Our working classification is X because of Y; legal confirmation is required on Z.'"
    ],
    ["Explain requirements; do not invent legal conclusions.", "Separate facts, assumptions and interpretations.", "Escalation is a sign of disciplined consulting, not weakness."],
    "Rewrite this risky statement: 'This system is definitely legal in the EU.'",
    ["Decision note separating fact / assumption / interpretation", "Legal escalation entry"],
    INTERNAL_SOURCE,
    "10 min"
  ),
  module(
    "orientation",
    "Evidence-first consulting and audit trails",
    "Learn to support every material conclusion with evidence.",
    [
      "A client's verbal assurance is useful discovery input but it is not the same as evidence. Ask what artefact demonstrates the claim: policy, contract, log, model card, test result, approval record, meeting decision or system configuration.",
      "Record where evidence came from, who provided it, when it was reviewed and whether it fully supports the claim.",
      "If evidence is missing, mark the status as an evidence gap rather than treating the control as complete."
    ],
    ["Claim -> evidence -> owner -> date -> conclusion.", "Missing evidence is a finding, not an invitation to assume.", "Keep rationale reproducible for another consultant."],
    "The HR Director says: 'A person always reviews the AI shortlist.' What evidence would you request before accepting that statement?",
    ["Evidence request", "Evidence register entry", "Control conclusion with rationale"],
    INTERNAL_SOURCE,
    "15 min"
  ),
  module(
    "orientation",
    "Client communication: clear, calm and non-alarmist",
    "Communicate risk without frightening or overwhelming the client.",
    [
      "Lead with the business decision the client needs to make, then explain the governance implication in plain English.",
      "Avoid presenting every AI issue as catastrophic. Distinguish immediate red flags, material remediation items and lower-priority maturity improvements.",
      "Use concise language: what we found, why it matters, what evidence is missing, what should happen next and who owns it."
    ],
    ["Prioritise, do not dramatise.", "Explain consequences without threatening the client.", "Always pair a finding with a practical next step."],
    "Explain a missing AI inventory to a non-technical COO in under 60 seconds.",
    ["Executive-ready finding", "Prioritised action", "Named owner"],
    INTERNAL_SOURCE,
    "10 min"
  ),
  module(
    "orientation",
    "Using the AI Act Ready tool: inventory to evidence pack",
    "Understand the end-to-end delivery flow the tool is designed to support.",
    [
      "Start with discovery and a living AI inventory. For each system capture use case, intended purpose, vendor/provider, deployment geography, affected people, data, business owner and technical owner.",
      "Then map legal role and exposure, classify risk, identify applicable obligations, record gaps, request evidence and assign remediation actions.",
      "The output should be an evidence-backed package: inventory, rationale, gap analysis, actions, owners, target dates and executive readout."
    ],
    ["Inventory before classification.", "Classification before obligations.", "Evidence before 'complete'."],
    "Sketch the minimum fields you would capture for a newly discovered recruitment AI system.",
    ["AI system record", "Role map", "Classification rationale", "Evidence list"],
    INTERNAL_SOURCE,
    "15 min"
  ),
  module(
    "orientation",
    "When to escalate to legal, security, privacy or technical specialists",
    "Know when a consultant should stop and bring in deeper expertise.",
    [
      "Escalate legal interpretation, high-consequence employment or fundamental-rights questions, ambiguous prohibited-practice analysis and contract/liability disputes.",
      "Escalate privacy issues involving special-category data, lawful basis, DPIAs or complex international data transfers to privacy specialists.",
      "Escalate security architecture, adversarial robustness, model vulnerabilities and technical validation when the consultant cannot independently verify the evidence."
    ],
    ["Escalate material uncertainty.", "Never disguise an expertise gap as certainty.", "Record the question, owner and required decision."],
    "Choose the right escalation owner for four issues: biometric data, model jailbreak vulnerability, contract indemnity, and missing bias test evidence.",
    ["Escalation record", "Open-question log", "Specialist action owner"],
    INTERNAL_SOURCE,
    "10 min"
  ),

  // FOUNDATION
  module(
    "foundation",
    "EU AI Act purpose, scope and risk-based structure",
    "Explain the basic logic of the AI Act and why use case matters.",
    [
      "The Act regulates AI using a risk-based structure. Some practices are prohibited, some systems are high-risk, some trigger transparency duties and many other systems face lighter AI-Act-specific requirements.",
      "Classification depends heavily on intended purpose and context. The same underlying technology can create different regulatory exposure when used for entertainment, recruitment, credit or safety functions.",
      "The Act can apply beyond the EU where the relevant market or use of outputs brings the activity within its territorial scope."
    ],
    ["Start with what the system is used to do.", "Do not classify by model brand alone.", "Risk category drives the compliance path."],
    "Compare an image generator used for marketing artwork with the same technology used to create manipulated evidence in an employment dispute. What changes in your analysis?",
    ["Use-case statement", "Initial risk pathway", "Scope questions"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "Provider, deployer, importer, distributor and authorised representative",
    "Identify the main AI supply-chain roles from simple scenarios.",
    [
      "A provider develops an AI system or has it developed and places it on the market or puts it into service under its own name or trademark.",
      "A deployer uses an AI system under its authority in a professional context. Importers and distributors act as supply-chain gatekeepers, while an authorised representative acts under mandate for certain non-EU providers.",
      "Roles are activity-based and system-specific. One organisation can be a provider for one system and a deployer for another."
    ],
    ["Provider = puts it out under its name.", "Deployer = uses it professionally.", "Map roles system by system."],
    "A UK company licenses a US model, wraps it in its own branded recruitment product and sells to Germany. Identify the likely roles to investigate.",
    ["Role map", "Role rationale", "Open evidence questions"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "Prohibited practices and high-risk AI basics",
    "Distinguish banned practices from high-risk systems.",
    [
      "Prohibited practices are specific uses the Act does not permit when the statutory conditions are met. High-risk systems are not banned; they are subject to extensive requirements and obligations.",
      "Do not rely on broad labels such as 'biometrics' or 'HR AI' without checking the actual use and legal conditions. Many rules contain exceptions or precise thresholds.",
      "For high-risk classification, begin with the Article 6 pathways and the relevant Annex categories rather than with business criticality."
    ],
    ["Prohibited is not the same as high-risk.", "Read the conditions, not just the headline.", "Business importance does not determine legal high-risk status."],
    "A manager says: 'Anything used in HR is automatically prohibited.' Explain why that is wrong.",
    ["Prohibited-practice triage", "High-risk pathway note", "Escalation where conditions are ambiguous"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "Transparency duties and Article 50 basics",
    "Recognise common transparency situations.",
    [
      "Article 50 contains transparency obligations for specified AI interactions and synthetic or manipulated content. The duty depends on the role and the relevant scenario.",
      "For conversational AI, the core practical idea is that people should know when they are interacting directly with AI where the provision applies.",
      "Transparency duties are distinct from high-risk classification: a system can trigger a transparency duty without being high-risk."
    ],
    ["Transparency is its own analysis.", "Make required AI involvement clear at the right time.", "Do not bury meaningful disclosure in unread terms."],
    "Review a customer-service chatbot opening message and rewrite it so the AI nature is clear in plain language.",
    ["Transparency notice", "Disclosure timing decision", "Evidence that notice is displayed"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "GPAI and systemic-risk basics",
    "Understand why general-purpose models have model-level obligations.",
    [
      "General-purpose AI models are capable of performing a wide range of tasks and are regulated at model level in addition to the rules that may apply to downstream AI systems.",
      "Providers of GPAI models have baseline documentation and information duties. Additional obligations apply to GPAI models with systemic risk.",
      "A key quantitative presumption for systemic risk is associated with very high training compute, while designation can also consider broader capability and impact factors."
    ],
    ["Model-level duties and system-level duties are different.", "GPAI provider is not automatically the downstream deployer.", "Systemic risk means additional obligations."],
    "A client uses a third-party foundation model through an API. List the questions needed to determine the client's role and its dependence on the upstream provider.",
    ["GPAI dependency map", "Upstream evidence request", "Downstream use-case record"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "Human oversight and automation bias",
    "Explain what meaningful human oversight looks like in practice.",
    [
      "For high-risk AI, human oversight is intended to enable natural persons to understand limitations, monitor operation, interpret outputs appropriately and intervene where necessary.",
      "A named human who always clicks 'approve' is not strong evidence of meaningful oversight. Automation bias can turn nominal review into rubber-stamping.",
      "Good oversight design gives the reviewer enough information, authority, time and technical ability to challenge or override the AI."
    ],
    ["Human in the loop is not enough by itself.", "Reviewers need authority and usable information.", "Look for real override and intervention capability."],
    "The client says every AI decision has human sign-off. Name three pieces of evidence you would request to test whether that sign-off is meaningful.",
    ["Oversight procedure", "Training/competence evidence", "Override and review logs"],
    EU_SOURCE
  ),
  module(
    "foundation",
    "ISO/IEC 42001: what an AI management system is",
    "Understand the purpose of an AIMS and how it complements regulation.",
    [
      "ISO/IEC 42001 specifies requirements for establishing, implementing, maintaining and continually improving an Artificial Intelligence Management System (AIMS).",
      "An AIMS is an organisational management framework: policies, objectives, responsibilities, processes, risk management, monitoring and improvement around responsible AI development or use.",
      "ISO/IEC 42001 does not replace laws such as the EU AI Act. It gives an organisation a repeatable governance system that can support regulatory readiness and evidence discipline."
    ],
    ["AIMS = the management system around AI.", "It is organisational, not just technical.", "Certification does not equal automatic legal compliance."],
    "Explain to a COO why an AIMS is useful even when the company already has individual AI risk assessments.",
    ["AIMS scope statement", "AI policy", "Governance roles"],
    ISO_SOURCE
  ),
  module(
    "foundation",
    "Plan-Do-Check-Act and continual improvement",
    "Use the PDCA cycle to explain how AI governance becomes an operating system rather than a project.",
    [
      "ISO management systems use a Plan-Do-Check-Act cycle. For an AIMS, planning covers context, leadership, risks, objectives and controls; doing covers support and operation; checking covers monitoring, internal audit and management review; acting covers corrective action and continual improvement.",
      "The key consulting lesson is that AI governance should continue after launch. New vendors, models, uses, incidents and regulatory changes should feed back into the management system.",
      "A static policy folder is not an effective AIMS if nobody measures performance or corrects problems."
    ],
    ["Plan governance, operate it, test it, improve it.", "Monitoring closes the loop.", "Corrective action should remove causes, not just symptoms."],
    "Take a recurring model-drift issue and map one action to each PDCA stage.",
    ["Objective/plan", "Operational control", "Monitoring measure", "Corrective action"],
    ISO_SOURCE
  ),

  // PRACTITIONER
  module("practitioner", "Territorial scope and applicability", "Determine what facts are needed before deciding whether the Act applies.", ["Check where the provider/deployer is established, where systems are placed on the market or put into service, and where relevant outputs are used.", "Do not reduce territorial analysis to company headquarters; cross-border supply chains and output use can matter.", "Document the facts that drive scope and escalate unresolved legal interpretation."], ["Jurisdiction starts with facts.", "Map geography to each system and role.", "Escalate borderline scope issues."], "A US SaaS provider has no EU office but a French bank uses its credit model. Build the scope fact pattern you would need before concluding anything.", ["Territorial scope note", "Geography map", "Open legal question"], EU_SOURCE),
  module("practitioner", "Intended purpose and substantial modification", "Use intended purpose and change history to recognise when obligations may shift.", ["Intended purpose is a key anchor for system classification and provider obligations.", "A material change in intended purpose or a change affecting compliance can trigger substantial-modification consequences.", "Do not assume 'fine-tuning' always has the same legal effect; analyse what changed, why, and whether the system's purpose or compliance profile changed."], ["Capture intended purpose explicitly.", "Maintain change history.", "Reclassify when material changes occur."], "Compare a routine security patch with retraining a CV summariser to rank candidates. Which change requires deeper role/classification review and why?", ["Intended-purpose statement", "Change assessment", "Role re-evaluation"], EU_SOURCE),
  module("practitioner", "Article 5 prohibited-practice analysis", "Analyse the exact factual conditions behind a prohibited-practice scenario.", ["Start with the relevant Article 5 practice, then work condition by condition rather than using labels.", "Ask who is affected, what technique is used, what objective/effect it has, and whether any stated exception applies.", "Because a prohibited-practice conclusion is high consequence, record reasoning and escalate genuine ambiguity."], ["Condition-by-condition analysis.", "Exceptions matter.", "High-consequence ambiguity gets escalated."], "Create a short Article 5 triage for an emotion-recognition feature proposed for employee performance monitoring.", ["Article 5 triage", "Evidence questions", "Escalation note"], EU_SOURCE),
  module("practitioner", "Article 6 and Annex III high-risk classification", "Build a repeatable classification rationale for stand-alone high-risk use cases.", ["For stand-alone systems, identify whether the intended use falls within Annex III and then consider the Article 6 conditions and any relevant exception.", "The use case matters more than the brand or model architecture.", "Document both positive and negative decisions so a reviewer can reproduce the classification."], ["Use the legal pathway, not gut feeling.", "Document why not high-risk as well as why high-risk.", "Profiling and decision influence deserve careful review."], "Classify three uses of the same LLM: marketing copy, CV shortlisting and loan application scoring.", ["Classification memo", "Annex reference", "Negative rationale where appropriate"], EU_SOURCE),
  module("practitioner", "High-risk provider and deployer obligations", "Distinguish what the system provider must build from what the deployer must do in operation.", ["High-risk providers face requirements around risk management, data/data governance, technical documentation, logging, information to deployers, human oversight, accuracy, robustness and cybersecurity.", "Deployers have their own operational obligations; buying a compliant product does not remove responsibility for appropriate use, oversight, monitoring and other duties that apply to the deployer.", "Map obligation ownership across the supply chain rather than assigning everything to the vendor."], ["Provider builds compliance into the system.", "Deployer must operate it compliantly.", "Contract and evidence flow link the two."], "Create a two-column obligation map for a third-party high-risk recruitment system: vendor/provider versus client/deployer.", ["Obligation matrix", "Vendor evidence request", "Internal operating controls"], EU_SOURCE),
  module("practitioner", "Article 50 transparency scenarios", "Choose the correct disclosure approach for different AI interactions and synthetic content.", ["Separate provider duties from deployer duties and identify the specific Article 50 scenario.", "Timing, clarity and accessibility of a notice matter; a disclosure that cannot realistically be understood is weak evidence of transparency.", "Synthetic or manipulated content may require different technical or user-facing measures from a chatbot interaction."], ["Identify the scenario first.", "Use plain language.", "Keep evidence that the disclosure is implemented."], "Draft two different notices: one for an AI chatbot and one for a synthetic voice used in public-facing media.", ["Transparency notice", "Implementation evidence", "Disclosure decision record"], EU_SOURCE),
  module("practitioner", "GPAI provider vs downstream responsibilities", "Map upstream and downstream responsibilities around general-purpose models.", ["A GPAI model provider has model-level duties; a downstream company may be a provider or deployer of a separate AI system built on that model.", "Gather upstream documentation on capabilities, limitations and relevant model information needed by the downstream organisation.", "If the client substantially changes or re-releases a model, reassess its role rather than assuming it remains a simple user."], ["Separate model and system.", "Map the supply chain.", "Demand the information needed downstream."], "Draw the responsibility chain for a client that uses a GPAI API to build a branded customer-risk product.", ["Supply-chain map", "Model evidence list", "Client role rationale"], EU_SOURCE),
  module("practitioner", "Current implementation dates and enforcement", "Use the current legal timetable rather than outdated training dates.", ["The general AI Act application date is 2 August 2026, but the consolidated law contains staggered dates for different provisions.", "Following the 2026 amendment, Chapter III Sections 1-3 apply from 2 December 2027 for Article 6(2)/Annex III high-risk systems and from 2 August 2028 for Article 6(1)/Annex I product-related high-risk systems.", "Always date-stamp legal timeline advice because amendments and guidance can change implementation planning."], ["Current dates matter.", "Annex III: 2 Dec 2027 for the relevant high-risk provisions.", "Annex I: 2 Aug 2028 for the relevant high-risk provisions."], "Review a project plan that still says 'all high-risk rules apply 2 August 2026'. Write the correction note.", ["Timeline note", "Source/date stamp", "Updated remediation milestone"], EU_SOURCE),
  module("practitioner", "ISO/IEC 42001 clauses 4-10 at practitioner level", "Understand the management-system requirements as a connected operating model.", ["The AIMS structure follows the management-system sequence: organisational context, leadership, planning, support, operation, performance evaluation and improvement.", "Operation includes AI risk assessment/treatment and AI system impact assessment activities within the organisation's defined processes.", "Performance evaluation includes monitoring/measurement, internal audit and management review; improvement includes continual improvement and corrective action."], ["Clauses 4-10 are the management-system backbone.", "Operation must turn policy into repeatable practice.", "Audit/review/improvement prove the system is alive."], "For a fictional company, name one practical artefact you would expect under each of clauses 4 through 10.", ["AIMS evidence map", "Clause-to-evidence matrix", "Gap list"], ISO_SOURCE),
  module("practitioner", "AI policy, objectives, roles, competence and documented information", "Translate AIMS requirements into visible organisational evidence.", ["A useful AI policy sets direction and principles but is supported by measurable objectives, assigned responsibilities, resources, competence and controlled documented information.", "Training records alone do not prove competence; consider role expectations, assessment and experience.", "Document control should make it clear which policy or record is current, approved and owned."], ["Policy needs owners and objectives.", "Competence is more than attendance.", "Controlled records support auditability."], "Review a one-page AI policy with no owner, objectives or review date. List the governance gaps.", ["AI policy", "Objectives register", "RACI", "Competence matrix", "Document-control record"], ISO_SOURCE),

  // IMPLEMENTER
  module("implementer", "Discovery interviews and AI inventory workshops", "Run a discovery session that produces a usable, evidence-oriented AI inventory.", ["Interview business, technology, procurement, security, privacy and legal stakeholders to uncover both authorised and shadow AI.", "Capture use case and intended purpose separately from product name. Include vendor, model, data, affected people, geography, owners and decision impact.", "Treat the inventory as a living register connected to procurement and change management."], ["Discover before classifying.", "Ask what the AI actually does.", "Track owner, evidence and change."], "Facilitate a 20-minute discovery for a fictional HR department and produce five inventory records.", ["AI inventory", "Interview notes", "Evidence requests", "Unknowns log"], EU_SOURCE),
  module("implementer", "Risk and opportunity assessment", "Build a practical AI risk process aligned with the AIMS and client objectives.", ["Define risk criteria, identify threats and opportunities, evaluate likelihood/impact in the client's context and assign treatment owners.", "Keep regulatory classification separate from broader organisational AI risk: a system can be legally lower-risk but still create security, privacy or operational exposure.", "Record residual risk and acceptance decisions so management ownership is visible."], ["Regulatory class is not the whole risk picture.", "Define criteria before scoring.", "Residual risk needs ownership."], "Build a risk entry for an internal generative-AI assistant handling commercially sensitive documents.", ["AI risk register", "Risk criteria", "Treatment plan", "Risk acceptance record"], ISO_SOURCE),
  module("implementer", "AI impact assessment and fundamental-rights triage", "Identify affected people and impacts before determining the depth of assessment required.", ["Map who may be affected directly or indirectly, the decisions influenced, potential benefits, foreseeable harms and vulnerable groups.", "For EU AI Act work, determine whether specific fundamental-rights impact assessment duties or other sector/privacy assessments are triggered; escalate legal uncertainty.", "For ISO/IEC 42001 implementation, impact assessment supports systematic consideration of consequences across the AI lifecycle."], ["Start with people and decisions.", "Benefits and harms both matter.", "Do not collapse FRIA, DPIA and generic impact assessment into one undefined exercise."], "Create an affected-person map for an AI recruitment system and identify the impact questions you would ask before deployment.", ["Impact assessment", "Affected-party map", "FRIA/DPIA triage note"], "EU AI Act source pack plus ISO/IEC 42001 impact-assessment concepts. Specialist legal/privacy review may still be required."),
  module("implementer", "Data governance and representativeness", "Turn data-quality obligations into evidence and controls.", ["For relevant high-risk AI, examine data provenance, relevance, representativeness, error management, bias testing and the relationship between training, validation and test data.", "The uploaded lesson pack emphasises the need to test whether data reflects the intended population and to look for proxy variables and leakage rather than claiming 'zero bias'.", "Operationalise the controls with dataset documentation, owners, quality gates, change control and reproducible test evidence."], ["Know where data came from.", "Representative for intended purpose beats merely 'large'.", "Record known limitations and mitigations."], "Review a medical dataset that is 90% drawn from one demographic and write the evidence gap and remediation action.", ["Dataset record", "Data provenance", "Representativeness analysis", "Bias/error test evidence"], EU_SOURCE),
  module("implementer", "Human oversight design", "Design oversight that works in the real workflow rather than only on paper.", ["Define who oversees the system, what they must understand, when they review, what information they see and how they override, stop or bypass the AI.", "Test workload, time pressure and interface design for automation bias. Evidence such as override rates, time-on-task and review logs can help show whether the process is genuine.", "Provide competence and escalation routes for the people doing the oversight."], ["Design for intervention.", "Give reviewers time and authority.", "Measure whether oversight is actually happening."], "Redesign a loan-review workflow where staff currently accept 99.9% of AI recommendations in under three seconds.", ["Oversight SOP", "RACI", "UI/control requirements", "Monitoring metrics"], EU_SOURCE),
  module("implementer", "Technical documentation and record-keeping", "Create an evidence structure that lets a reviewer understand the system and the decisions behind it.", ["Technical documentation should explain intended purpose, design, data, performance, limitations, risk controls, testing and change history to the depth required for the system and legal role.", "Logging supports traceability and post-market investigation. Decide what events need to be recorded, protected, retained and reviewed.", "Keep documentation synchronised with the live system; stale evidence can be worse than an acknowledged gap."], ["Documentation follows the real system.", "Logs need purpose and ownership.", "Version changes should trigger evidence review."], "Given a model update, list which technical-documentation sections and evidence artefacts should be rechecked.", ["Technical file index", "Version/change record", "Logging specification", "Evidence trace"], EU_SOURCE),
  module("implementer", "Supplier and model governance", "Control AI risk that enters through vendors and upstream models.", ["Tier suppliers by risk and role, define evidence requirements, capture model/service changes and build contract governance into renewals and onboarding.", "For GPAI dependencies, ensure downstream teams receive enough information on capabilities, limitations and relevant risks to integrate responsibly.", "Do not let procurement approval become a one-time event; cloud AI features can change after purchase."], ["Govern the supply chain continuously.", "Evidence obligations belong in procurement.", "Track model and feature changes."], "Design a vendor due-diligence checklist for a recruitment AI SaaS provider.", ["Supplier register", "Due-diligence checklist", "Contract requirements", "Review cadence"], "EU AI Act supply-chain concepts plus ISO/IEC 42001 Annex A third-party/customer relationship themes."),
  module("implementer", "Transparency notice implementation", "Move from a policy statement to a tested, visible disclosure control.", ["Identify each interaction or content type where transparency is required, define the responsible role and specify what the user must be told and when.", "Test the disclosure with non-technical users and accessibility needs rather than assuming technical wording is clear.", "Keep implementation evidence: UI screenshots/version, design acceptance, logs where appropriate and change-management records."], ["Notice must exist in the real interface.", "Plain language beats technical jargon.", "Implementation evidence matters."], "Draft, test and evidence a first-interaction chatbot disclosure for a financial-services client.", ["Transparency notice", "UX acceptance", "Implementation screenshot/evidence", "Review date"], EU_SOURCE),
  module("implementer", "Post-market monitoring and incident management", "Build the feedback loop after deployment.", ["Define performance, risk and compliance indicators; monitor drift, complaints, overrides, incidents and material changes.", "Establish thresholds for investigation, suspension, corrective action and regulatory/specialist escalation.", "Feed monitoring results into risk assessment, management review and future design changes."], ["Deployment is not the end.", "Define triggers before an incident occurs.", "Close the loop into improvement."], "Create an incident triage for an AI system that suddenly shows a large accuracy drop for one demographic group.", ["Monitoring plan", "Incident procedure", "Trigger thresholds", "Corrective-action record"], "EU AI Act post-market concepts plus ISO/IEC 42001 performance-evaluation and improvement principles."),
  module("implementer", "ISO/IEC 42001 AIMS implementation and Annex A control themes", "Select and implement practical AIMS controls based on organisational risk.", ["ISO/IEC 42001 uses clauses 4-10 for the management system and Annex A as a control reference. Public BSI material describes 38 controls across nine control groups.", "The control themes include AI policies, internal organisation, resources, impact assessment, AI-system lifecycle, data, information for interested parties, responsible use, and third-party/customer relationships.", "Select controls based on the organisation's risks and responsibilities, document applicability and implement them as operational practices rather than a paperwork exercise."], ["Annex A is a control reference, not a substitute for risk assessment.", "Controls need owners and evidence.", "Use Annex B guidance when implementing controls."], "Choose controls you would expect for a company that only deploys third-party AI versus a company developing its own high-risk models.", ["Control applicability record", "Control owner/evidence map", "Implementation plan"], ISO_SOURCE),
  module("implementer", "Management review, internal audit and corrective action", "Prove the AIMS is monitored and improved by management.", ["Internal audit checks whether the management system conforms to the organisation's planned arrangements and is effectively implemented.", "Management review gives leadership a structured view of performance, changes, audit results, risks, incidents and improvement needs.", "Corrective action should address root cause, not only patch the immediate symptom, and effectiveness should be checked later."], ["Audit tests the system.", "Management owns review decisions.", "Correct root cause and verify effectiveness."], "Turn a repeated failure to review new AI vendors into a nonconformity, root cause, corrective action and effectiveness check.", ["Audit programme", "Audit finding", "Management review minutes", "Corrective-action log"], ISO_SOURCE),

  // CLIENT READY
  module("client-ready", "Complex mixed-role case analysis", "Combine role, classification, governance and evidence reasoning in one engagement.", ["Real clients rarely fit one clean textbook role. Separate each AI system, model and commercial relationship before assigning roles.", "Build a fact table first, then classification and obligations. Keep uncertainties visible.", "A good answer is traceable: fact -> rule/criterion -> conclusion -> evidence gap -> next action."], ["Separate systems and roles.", "Make reasoning reproducible.", "Do not force one company-wide label."], "Complete the Northstar simulated engagement and defend your role/classification map.", ["Full role map", "Classification file", "Decision log"], INTERNAL_SOURCE),
  module("client-ready", "Handling ambiguity without inventing an answer", "Demonstrate safe judgement under uncertainty.", ["Classify uncertainty: missing fact, technical unknown, evidence gap or legal interpretation.", "Ask the smallest question that would resolve the uncertainty and record who owns it.", "Where a working assumption is needed, label it provisional and explain the consequence if it changes."], ["Unknown is a valid status.", "State what would resolve it.", "Never convert uncertainty into fake certainty."], "Respond to three ambiguous client statements without overreaching.", ["Assumptions log", "Open-question log", "Escalation record"], INTERNAL_SOURCE),
  module("client-ready", "Client challenge and difficult conversations", "Challenge weak evidence while maintaining trust.", ["Use neutral evidence language: 'We have not yet seen evidence that...' rather than 'You failed to...'.", "Distinguish control design from control operation: a policy can exist while the process is not followed.", "Escalate disagreement on material findings through the agreed engagement governance."], ["Challenge evidence, not personalities.", "Be specific about what is missing.", "Offer a path to close the gap."], "Role-play a CTO who insists an undocumented human review is 'obviously happening'.", ["Finding wording", "Evidence request", "Escalation path"], INTERNAL_SOURCE),
  module("client-ready", "Evidence quality and defensibility", "Judge whether evidence really supports a conclusion.", ["Strong evidence is relevant, current, attributable and sufficiently complete for the claim being made.", "Corroborate high-consequence claims using multiple evidence types where practical.", "Record limitations: a screenshot may show configuration but not prove the control operated throughout the period."], ["Relevant, current, attributable, sufficient.", "Match evidence strength to claim consequence.", "Record limitations."], "Rank five artefacts from weakest to strongest evidence for ongoing human oversight.", ["Evidence-quality rating", "Corroboration note", "Residual gap"], INTERNAL_SOURCE),
  module("client-ready", "Scope control and change management", "Prevent an engagement from silently expanding or missing newly introduced AI.", ["Define systems, business units, geographies, dates and deliverables in scope at the start.", "When new AI systems or major modifications emerge, record the scope impact and agree whether to include, defer or create a follow-on workstream.", "Keep client expectations aligned with the evidence actually reviewed."], ["Scope is explicit.", "Changes are logged.", "No silent assumptions about coverage."], "A client reveals three new AI systems on the final day. Decide how you would handle them.", ["Scope register", "Change request", "Deferred-items log"], INTERNAL_SOURCE),
  module("client-ready", "Escalation decisions", "Show that you can recognise when specialist input is required.", ["Escalate based on materiality and expertise, not discomfort alone.", "Provide the specialist with a concise fact pack and the exact question needing resolution.", "Track the answer back into the decision and evidence record."], ["Escalate precise questions.", "Give specialists facts, not a data dump.", "Close the loop when advice returns."], "Create an escalation note for a possible prohibited biometric use in employment.", ["Escalation brief", "Specialist response", "Updated decision"], INTERNAL_SOURCE),
  module("client-ready", "Final client handover and action planning", "Turn findings into a clear, owned implementation plan.", ["Prioritise actions by urgency, consequence, dependency and implementation effort.", "Every action needs an owner, target date, evidence of completion and a clear definition of done.", "The executive readout should explain the few decisions leadership must make, not replay every working paper."], ["Owner + date + evidence + definition of done.", "Separate urgent legal/regulatory issues from maturity improvements.", "Executive summary is decision-focused."], "Build a 30/60/90-day action plan from a fictional gap register.", ["Executive readout", "Action plan", "Handover pack"], INTERNAL_SOURCE),

  // LEAD & ASSURANCE
  module("lead-assurance", "Assurance planning and sampling", "Plan a proportionate review that can support a defensible conclusion.", ["Define objective, criteria, scope, sample and evidence method before reviewing individual artefacts.", "Use risk-based sampling to focus deeper testing on high-consequence systems, controls and recent changes.", "Record sampling limitations so the conclusion is not broader than the work performed."], ["Assurance begins with criteria.", "Sample by risk, not convenience.", "Conclusion must match scope."], "Design a sample for a portfolio of 120 AI systems with 8 high-risk candidates.", ["Assurance plan", "Sampling rationale", "Evidence schedule"], ISO_SOURCE),
  module("lead-assurance", "Evaluating evidence quality", "Review another consultant's conclusions and identify unsupported claims.", ["Trace each conclusion back to evidence and check relevance, date, source, completeness and consistency.", "Challenge evidence that proves design but not operation, or that covers only one period or system version.", "Look for confirmation bias: evidence should be capable of disproving the conclusion as well as supporting it."], ["Traceability is mandatory.", "Design evidence is not operating evidence.", "Seek disconfirming evidence."], "Review a deliberately weak evidence pack and write three findings.", ["Evidence review sheet", "Assurance findings", "Reviewer notes"], INTERNAL_SOURCE),
  module("lead-assurance", "Internal audit and management review", "Lead AIMS assurance and management-level review activities.", ["Audit should be planned, objective, evidence-based and sufficiently independent of the activity being audited.", "Management review should consider system performance, audit results, changes, risk, resources and opportunities for improvement.", "Follow actions through to closure and verify that decisions changed the operating system where required."], ["Audit for effectiveness as well as paperwork.", "Management review must produce decisions/actions.", "Follow-up matters."], "Chair a mock management review using a one-page AIMS performance pack.", ["Audit report", "Management review minutes", "Action tracker"], ISO_SOURCE),
  module("lead-assurance", "Nonconformity and corrective action", "Write findings that drive sustainable improvement.", ["State the requirement or agreed criterion, objective evidence and the specific gap without prescribing an untested solution.", "Investigate root cause and assess whether similar issues exist elsewhere.", "Verify corrective-action effectiveness after implementation rather than closing on promised action alone."], ["Requirement + evidence + gap.", "Fix the cause, not just the symptom.", "Verify effectiveness."], "Write a nonconformity for repeated unapproved AI use despite an existing procurement policy.", ["Finding", "Root-cause analysis", "Corrective action", "Effectiveness check"], ISO_SOURCE),
  module("lead-assurance", "Complex supply-chain and GPAI scenarios", "Lead assurance where multiple providers, models and downstream systems interact.", ["Map the model supply chain, downstream system providers, deployers, importers/distributors and relevant third parties before testing obligations.", "Identify where required information or evidence must flow between parties and where contracts do not support that flow.", "Test change notification and incident communication across organisational boundaries."], ["Map the chain before auditing it.", "Information duties cross contracts.", "Test change and incident flows."], "Review a fictional SaaS product using two GPAI models and three downstream vendors.", ["Supply-chain assurance map", "Contract/evidence gaps", "Escalation actions"], "EU AI Act GPAI/supply-chain concepts plus ISO/IEC 42001 third-party governance themes."),
  module("lead-assurance", "Cross-framework mapping: EU AI Act, ISO/IEC 42001, GDPR and NIST AI RMF", "Use cross-framework mapping without pretending one framework certifies another.", ["Map shared governance themes such as inventory, risk, impact, data, oversight, monitoring, incident management and accountability.", "Keep legal obligations, certifiable management-system requirements and voluntary risk-framework practices distinct in the evidence matrix.", "Use mapping to reuse evidence and reduce duplication, not to claim equivalence where none exists."], ["Map controls, not labels.", "Shared evidence does not mean identical requirements.", "Preserve framework-specific conclusions."], "Take one human-oversight control and map what evidence could support EU AI Act, ISO/IEC 42001 and NIST AI RMF objectives.", ["Cross-framework matrix", "Evidence reuse map", "Framework-specific gaps"], "Training synthesis. Legal/privacy conclusions require authoritative source review; NIST AI RMF is voluntary guidance."),
  module("lead-assurance", "Coaching and quality assurance for delivery teams", "Review consultant work consistently and improve delivery quality.", ["Use a common review checklist for scope, roles, classification, evidence, reasoning, actions and escalation.", "Coach by asking the consultant to explain the evidence chain rather than simply replacing their answer.", "Track recurring quality issues and feed them back into Academy training and templates."], ["Review the reasoning, not just the formatting.", "Coach for independence.", "Use quality trends to improve training."], "Review a Practitioner classification memo and give feedback that improves judgement rather than just correcting the answer.", ["QA checklist", "Reviewer feedback", "Training improvement action"], INTERNAL_SOURCE),
];

export function getModulesForLevel(levelId: string) {
  return ACADEMY_MODULES.filter((item) => item.levelId === levelId);
}

export function getModule(levelId: string, moduleSlug: string) {
  return ACADEMY_MODULES.find((item) => item.levelId === levelId && item.slug === moduleSlug);
}
