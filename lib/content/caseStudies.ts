export type CaseStudyId = "design-system" | "ai-workflow" | "student-app-research";

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: CaseStudyId;
  kind: "Architecture" | "Workflow" | "Research";
  title: string;
  context?: string;
  summary: string;
  metrics: readonly Metric[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "design-system",
    kind: "Architecture",
    title: "A design system the whole org adopted",
    summary:
      "I led an organisation-wide Figma design system built on Atomic Design, mirrored its variables as typed tokens in code, and linked Figma components to their Angular twins with Code Connect, so the Storybook library and Figma stay in step.",
    metrics: [
      { label: "Scale", value: "8 production apps" },
      { label: "Sync", value: "1:1 Figma Code Connect" },
      { label: "System", value: "Typed atomic tokens" },
    ],
  },
  {
    id: "ai-workflow",
    kind: "Workflow",
    title: "AI-native design-to-code, with guardrails",
    summary:
      "I connected Figma to Cursor through MCP and the Figma API. Because the design system is linked with Code Connect, Cursor builds with the real components instead of guessing, and prompt and review standards hold AI-generated UI to the same bar as hand-written code.",
    metrics: [
      { label: "Defect reduction", value: "−30% post-release" },
      { label: "Pipeline", value: "Figma MCP → Cursor" },
      { label: "Standard", value: "Design-system components only" },
    ],
  },
  {
    id: "student-app-research",
    kind: "Research",
    title: "Where a university app fails part-time students",
    context: "UX research & service design study · Postgraduate Diploma, Digital Design (NFQ Level 9), TU Dublin",
    summary:
      "A design research study of TU Dublin's new student app, from the side of part-time postgraduates who study online. I ran a service safari and three moderated interviews, benchmarked Coursera, Airbnb and Google Maps, and synthesised the results into four findings and six prioritised recommendations, each with a success measure.",
    metrics: [
      { label: "Friction target", value: "13 taps → ≤ 3" },
      { label: "Method", value: "Service safari + benchmarking" },
      { label: "Output", value: "6 metric-backed recommendations" },
    ],
  },
];
