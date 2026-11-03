"use client";

import { useId, useState } from "react";
import { Caption, DetailPanel, DiagramFrame, FlowArrow, NodeText, flowItemClass, flowListClass, nodeClass } from "./parts";

type Step = { id: string; label: string; sub: string; artifact: string };

const METHODS: readonly Step[] = [
  {
    id: "stakeholders",
    label: "Stakeholders",
    sub: "mapping",
    artifact: "Mapped student groups, service owners and regulators around the app, with part-time postgraduates at the core.",
  },
  {
    id: "benchmark",
    label: "Benchmark",
    sub: "3 apps",
    artifact: "Scored Coursera, Airbnb and Google Maps, one per task, on first-run clarity, finding key info and what to do next.",
  },
  {
    id: "safari",
    label: "Safari",
    sub: "3 tasks",
    artifact: "Executed 3 end-to-end task walkthroughs capturing tap counts, dead ends, and cognitive friction points.",
  },
  {
    id: "interviews",
    label: "Interviews",
    sub: "3 people",
    artifact: "Conducted 3 moderated think-aloud sessions with remote postgraduate students balancing work and study.",
  },
  {
    id: "synthesis",
    label: "Synthesis",
    sub: "affinity map",
    artifact: "Grouped safari and interview notes into six themes; a theme became a finding when at least 3 of 4 sources raised it.",
  },
];

const OUTPUTS: readonly Step[] = [
  {
    id: "findings",
    label: "Findings",
    sub: "four",
    artifact: "Identified 4 systemic bottlenecks, including buried lecturer contact flows requiring 13 separate taps.",
  },
  {
    id: "recommendations",
    label: "Recommendations",
    sub: "six, prioritised",
    artifact:
      "Delivered 6 prioritised recommendations, each with a success measure, such as 3 taps or fewer to contact a lecturer, down from 13.",
  },
];

const STEPS = [...METHODS, ...OUTPUTS];

const MAX_TAPS = 13;
const TAPS = [
  { label: "TU Dublin app", value: 13, text: "13", tone: "bg-ivory/30" },
  { label: "Airbnb", value: 2, text: "2", tone: "bg-ivory/15" },
  { label: "Target", value: 3, text: "≤ 3", tone: "border border-dashed border-signal-on-dark bg-signal-on-dark/30" },
];

export function ResearchDiagram() {
  const [activeId, setActiveId] = useState("recommendations");
  const panelId = useId();
  const active = STEPS.find((step) => step.id === activeId) ?? STEPS[STEPS.length - 1];

  const renderSteps = (steps: readonly Step[]) => (
    <ol className={flowListClass}>
      {steps.map((step, index) => {
        const isActive = step.id === activeId;
        return (
          <li key={step.id} className={flowItemClass}>
            <button
              type="button"
              aria-pressed={isActive}
              aria-controls={panelId}
              onClick={() => setActiveId(step.id)}
              className={nodeClass(isActive ? "active" : "idle", true)}
            >
              <NodeText label={step.label} sub={step.sub} active={isActive} />
            </button>
            {index < steps.length - 1 && <FlowArrow />}
          </li>
        );
      })}
    </ol>
  );

  return (
    <DiagramFrame label="Design research study of a university student app">
      <Caption hint="Select a step">Methods</Caption>
      {renderSteps(METHODS)}

      <div className="mt-6 lg:ml-auto lg:w-1/2">
        <Caption>Synthesis produced</Caption>
        {renderSteps(OUTPUTS)}
      </div>

      <DetailPanel id={panelId} heading={`Artifact: ${active.label}`} panelKey={active.id}>
        <p>{active.artifact}</p>
      </DetailPanel>

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
