import { Caption, DiagramFrame, FlowArrow, NodeText, flowItemClass, flowListClass, nodeClass } from "./parts";

const METHODS = [
  { label: "Stakeholders", sub: "mapping" },
  { label: "Benchmark", sub: "3 apps" },
  { label: "Safari", sub: "3 tasks" },
  { label: "Interviews", sub: "3 people" },
  { label: "Synthesis", sub: "affinity map" },
];

const OUTPUTS = [
  { label: "Findings", sub: "four" },
  { label: "Recommendations", sub: "six · prioritised", emphasis: true },
];

const MAX_TAPS = 13;
const TAPS = [
  { label: "TU Dublin app", value: 13, text: "13", tone: "bg-ivory/30" },
  { label: "Airbnb", value: 2, text: "2", tone: "bg-ivory/15" },
  { label: "Target", value: 3, text: "≤ 3", tone: "border border-dashed border-signal-on-dark bg-signal-on-dark/30" },
];

export function ResearchDiagram() {
  return (
    <DiagramFrame label="Design research study of a university student app">
      <Caption>Methods</Caption>
      <ol className={flowListClass}>
        {METHODS.map((method, index) => (
          <li key={method.label} className={flowItemClass}>
            <div className={nodeClass("idle")}>
              <NodeText label={method.label} sub={method.sub} />
            </div>
            {index < METHODS.length - 1 && <FlowArrow />}
          </li>
        ))}
      </ol>

      <div className="mt-6 lg:ml-auto lg:w-1/2">
        <Caption>Synthesis produced</Caption>
        <ol className={flowListClass}>
          {OUTPUTS.map((output, index) => (
            <li key={output.label} className={flowItemClass}>
              <div className={nodeClass(output.emphasis ? "emphasis" : "idle")}>
                <NodeText label={output.label} sub={output.sub} />
              </div>
              {index < OUTPUTS.length - 1 && <FlowArrow />}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6">
        <p className="tracking-[0.06em] text-ivory/60 uppercase">Taps to reach a lecturer</p>
        <dl className="mt-3 grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2.5">
          {TAPS.map((row) => (
            <div key={row.label} className="contents">
              <dt className="tracking-[0.06em] uppercase">{row.label}</dt>
              <dd className="flex h-4 items-center gap-3">
                <span aria-hidden className={`h-full ${row.tone}`} style={{ width: `${(row.value / MAX_TAPS) * 85}%` }} />
                <span className="tabular-nums">{row.text}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </DiagramFrame>
  );
}
