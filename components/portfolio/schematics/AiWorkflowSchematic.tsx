import { DeltaBars, NodeBox, SchematicSvg } from "./primitives";

const STEPS = [
  { label: "FIGMA", sub: "design · ai" },
  { label: "MCP · API", sub: "design context" },
  { label: "CURSOR", sub: "generates ui" },
  { label: "GUARDRAILS", sub: "prompt · review", emphasis: true },
  { label: "PRODUCTION", sub: "angular" },
];
const STEP_X = [20, 118, 216, 314, 412];
const STEP_W = 84;

export function AiWorkflowSchematic({ id }: { id: string }) {
  const arrow = `url(#${id}-arrow)`;
  return (
    <SchematicSvg
      titleId={id}
      title="AI-native design-to-code workflow"
      description="Designs in Figma reach Cursor as design context through Figma's MCP server and API. Code Connect feeds that context with the design system's real components. Generated UI passes guardrails of prompt and review standards before production. Post-release defects drop by 30 percent."
    >
      {STEPS.map((step, index) => (
        <g key={step.label}>
          <NodeBox
            x={STEP_X[index]}
            y={30}
            width={STEP_W}
            height={48}
            label={step.label}
            sub={step.sub}
            emphasis={step.emphasis}
          />
          {index < STEPS.length - 1 && (
            <path d={`M${STEP_X[index] + STEP_W} 54 H${STEP_X[index + 1] - 3}`} markerEnd={arrow} />
          )}
        </g>
      ))}
      <NodeBox x={105} y={98} width={110} height={34} label="CODE CONNECT" sub="real components" />
      <path d="M160 98 V82" stroke="var(--schematic-accent, var(--color-signal-strong))" markerEnd={arrow} />
      <DeltaBars title="POST-RELEASE DEFECTS" after={0.7} delta="−30%" y={160} />
    </SchematicSvg>
  );
}
