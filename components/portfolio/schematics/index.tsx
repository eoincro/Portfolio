import type { CaseStudyId } from "@/lib/content/caseStudies";
import { AiWorkflowSchematic } from "./AiWorkflowSchematic";
import { DesignSystemSchematic } from "./DesignSystemSchematic";
import { ResearchSchematic } from "./ResearchSchematic";

const SCHEMATICS: Record<CaseStudyId, (props: { id: string }) => React.ReactElement> = {
  "design-system": DesignSystemSchematic,
  "ai-workflow": AiWorkflowSchematic,
  "student-app-research": ResearchSchematic,
};

export function Schematic({ study, instance }: { study: CaseStudyId; instance: string }) {
  const Drawing = SCHEMATICS[study];
  return <Drawing id={`schematic-${study}-${instance}`} />;
}
