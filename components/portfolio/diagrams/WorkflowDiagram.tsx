"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Caption, DetailPanel, DiagramFrame, FlowArrow, NodeText, flowItemClass, flowListClass, nodeClass } from "./parts";

const STEPS: readonly { id: string; label: string; sub: string; rule: string; emphasis?: boolean }[] = [
  {
    id: "figma",
    label: "Figma",
    sub: "design + ai",
    rule: "Screens are built from design-system components and variables, never detached layers.",
  },
  {
    id: "mcp",
    label: "MCP + API",
    sub: "design context",
    rule: "Cursor reads the frame's structure, variables and Code Connect mappings, not a screenshot.",
  },
  {
    id: "cursor",
    label: "Cursor",
    sub: "generates ui",
    rule: "Generated code imports the real components that Code Connect points to, instead of guessing markup.",
  },
  {
    id: "guardrails",
    label: "Guardrails",
    sub: "prompt + review",
    rule: "Design-system components only, tokens instead of raw values, reviewed to the same bar as hand-written code.",
    emphasis: true,
  },
  {
    id: "production",
    label: "Production",
    sub: "angular",
    rule: "Only UI that passed the guardrails ships to the Angular apps.",
  },
];

const AFTER_SHARE = 0.7;

export function WorkflowDiagram() {
  const [activeId, setActiveId] = useState("guardrails");
  const [barsShown, setBarsShown] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const active = STEPS.find((step) => step.id === activeId) ?? STEPS[0];

  useEffect(() => {
    const bars = barsRef.current;
    if (!bars) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(bars);
    return () => observer.disconnect();
  }, []);

  const barClass = "h-full transition-[width] duration-700 ease-out motion-reduce:transition-none";

  return (
    <DiagramFrame label="AI-native design-to-code workflow with guardrails">
      <Caption hint="Select a step">Design to production</Caption>
      <ol className={flowListClass}>
        {STEPS.map((step, index) => {
          const isActive = step.id === activeId;
          return (
            <li key={step.id} className={flowItemClass}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls={panelId}
                onClick={() => setActiveId(step.id)}
                className={nodeClass(isActive ? "active" : step.emphasis ? "emphasis" : "idle", true)}
              >
                <NodeText label={step.label} sub={step.sub} active={isActive} />
              </button>
              {index < STEPS.length - 1 && <FlowArrow />}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-ivory/60">
        <span className="tracking-[0.06em] text-ivory uppercase">+ Code Connect</span> feeds Cursor the design
        system&apos;s real components
      </p>

      <DetailPanel id={panelId} heading={`Rule: ${active.label}`} panelKey={active.id}>
        <p>{active.rule}</p>
      </DetailPanel>

      <div ref={barsRef} className="mt-6">
        <p className="tracking-[0.06em] text-ivory/60 uppercase">Post-release defects</p>
        <p className="sr-only">Post-release frontend defects fell by 30 percent.</p>
        <div aria-hidden className="mt-3 grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2.5">
          <span className="tracking-[0.06em] uppercase">Before</span>
          <div className="h-4">
            <div className={`${barClass} bg-ivory/20`} style={{ width: barsShown ? "100%" : "0%" }} />
          </div>
          <span className="tracking-[0.06em] uppercase">After</span>
          <div className="flex h-4 items-center gap-3">
            <div
              className={`${barClass} border border-signal-on-dark bg-signal-on-dark/30 delay-150`}
              style={{ width: barsShown ? `${AFTER_SHARE * 100}%` : "0%" }}
            />
            <span className="text-signal-on-dark tabular-nums">−30%</span>
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}
