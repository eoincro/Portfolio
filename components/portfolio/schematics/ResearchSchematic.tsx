import { Label, NodeBox, SchematicSvg } from "./primitives";

const METHODS = [
  { label: "STAKEHOLDER", sub: "mapping" },
  { label: "BENCHMARK", sub: "3 apps" },
  { label: "SAFARI", sub: "3 tasks" },
  { label: "INTERVIEWS", sub: "3 people" },
  { label: "SYNTHESIS", sub: "affinity map" },
];
const STEP_X = [20, 118, 216, 314, 412];
const STEP_W = 84;
const ROW_Y = 24;
const ROW_H = 44;
const OUT_Y = 96;
const OUT_H = 40;

const BAR_X = 140;
const BAR_FULL = 300;
const BAR_MAX = 13;
const TAPS = [
  { label: "TU DUBLIN APP", value: 13, text: "13", tone: "baseline" },
  { label: "AIRBNB", value: 2, text: "2", tone: "benchmark" },
  { label: "TARGET", value: 3, text: "≤ 3", tone: "target" },
] as const;

export function ResearchSchematic({ id }: { id: string }) {
  const arrow = `url(#${id}-arrow)`;
  const synthesisCenter = STEP_X[4] + STEP_W / 2;
  return (
    <SchematicSvg
      titleId={id}
      title="Design research study of a university student app"
      description="Five methods in sequence: stakeholder mapping, benchmarking three apps, a service safari with three tasks, interviews with three people, and synthesis in an affinity map. Synthesis produced four findings and six prioritised recommendations. Reaching a lecturer took 13 taps in the app today, against 2 in Airbnb and a target of 3 or fewer."
    >
      {METHODS.map((step, index) => (
        <g key={step.label}>
          <NodeBox x={STEP_X[index]} y={ROW_Y} width={STEP_W} height={ROW_H} label={step.label} sub={step.sub} />
          {index < METHODS.length - 1 && (
            <path d={`M${STEP_X[index] + STEP_W} ${ROW_Y + ROW_H / 2} H${STEP_X[index + 1] - 3}`} markerEnd={arrow} />
          )}
        </g>
      ))}

      <path d={`M${synthesisCenter} ${ROW_Y + ROW_H} V${OUT_Y - 3}`} markerEnd={arrow} />
      <NodeBox x={STEP_X[4]} y={OUT_Y} width={STEP_W} height={OUT_H} label="FINDINGS" sub="four" />
      <path d={`M${STEP_X[4]} ${OUT_Y + OUT_H / 2} H${393}`} markerEnd={arrow} />
      <NodeBox x={250} y={OUT_Y} width={140} height={OUT_H} label="RECOMMENDATIONS" sub="six · prioritised" emphasis />

      <Label x={20} y={164} size={8} muted>
        TAPS TO REACH A LECTURER
      </Label>
      {TAPS.map((row, index) => {
        const y = 176 + index * 24;
        const width = (BAR_FULL * row.value) / BAR_MAX;
        return (
          <g key={row.label}>
            <Label x={20} y={y + 10} size={8.5}>
              {row.label}
            </Label>
            {row.tone === "target" ? (
              <rect
                x={BAR_X}
                y={y}
                width={width}
                height={13}
                fill="var(--color-signal)"
                fillOpacity={0.3}
                stroke="var(--schematic-accent, var(--color-signal-strong))"
                strokeWidth={1.25}
                strokeDasharray="4 3"
              />
            ) : (
              <rect
                x={BAR_X}
                y={y}
                width={width}
                height={13}
                fill="currentColor"
                fillOpacity={row.tone === "baseline" ? 0.3 : 0.15}
                stroke="none"
              />
            )}
            <Label x={BAR_X + width + 8} y={y + 10} size={9}>
              {row.text}
            </Label>
          </g>
        );
      })}
    </SchematicSvg>
  );
}
