export type CaseStudyId = "design-system" | "ai-workflow" | "student-app-research";

export type CaseStudy = {
  id: CaseStudyId;
  kind: "Architecture" | "Workflow" | "Research";
  tone: "paper" | "ink" | "depth";
  title: string;
  context?: string;
  summary: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "design-system",
    kind: "Architecture",
    tone: "depth",
    title: "A design system the whole org adopted",
    summary:
      "I led an organisation-wide Figma design system built on Atomic Design, mirrored its variables as typed tokens in code, and linked Figma components to their Angular twins with Code Connect, so the Storybook library and Figma stay in step.",
  },
  {
    id: "ai-workflow",
    kind: "Workflow",
    tone: "ink",
    title: "AI-native design-to-code, with guardrails",
    summary:
      "I connected Figma to Cursor through MCP and the Figma API. Because the design system is linked with Code Connect, Cursor builds with the real components instead of guessing, and prompt and review standards hold AI-generated UI to the same bar as hand-written code.",
  },
  {
    id: "student-app-research",
    kind: "Research",
    tone: "paper",
    title: "Where a university app fails part-time students",
    context: "TU Dublin postgraduate coursework",
    summary:
      "A design research study of TU Dublin's new student app, from the side of part-time postgraduates who study online. I ran a service safari and three moderated interviews, benchmarked Coursera, Airbnb and Google Maps, and synthesised the results into four findings and six prioritised recommendations, each with a success measure.",
  },
];
