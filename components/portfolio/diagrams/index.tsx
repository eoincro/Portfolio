import type { CaseStudyId } from "@/lib/content/caseStudies";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ResearchDiagram } from "./ResearchDiagram";
import { WorkflowDiagram } from "./WorkflowDiagram";

const DIAGRAMS: Record<CaseStudyId, () => React.ReactElement> = {
  "design-system": ArchitectureDiagram,
  "ai-workflow": WorkflowDiagram,
  "student-app-research": ResearchDiagram,
};

export function Diagram({ study }: { study: CaseStudyId }) {
  const Drawing = DIAGRAMS[study];
  return <Drawing />;
}
