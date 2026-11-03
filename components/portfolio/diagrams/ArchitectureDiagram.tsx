"use client";

import { useId, useState } from "react";
import { Caption, DetailPanel, DiagramFrame, FlowArrow, NodeText, flowItemClass, flowListClass, nodeClass } from "./parts";

type Mapping = { key: string; value: string };

const STAGES: readonly { id: string; label: string; sub: string; mappings: readonly Mapping[] }[] = [
  {
    id: "variables",
    label: "Variables",
    sub: "figma → tokens",
    mappings: [
      { key: "Figma", value: "color/action/primary" },
      { key: "Token", value: "--color-action-primary: #ff4f00;" },
      { key: "Type", value: 'type ColorToken = "action-primary" | "action-secondary";' },
    ],
  },
  {
    id: "atoms",
    label: "Atoms",
    sub: "button, tag",
    mappings: [
      { key: "Figma", value: "Button / Variant=Primary, Size=M" },
      { key: "Angular", value: '<app-button variant="primary" size="m">' },
      { key: "React", value: '<Button variant="primary" size="m" />' },
    ],
  },
  {
    id: "molecules",
    label: "Molecules",
    sub: "select, tabs",
    mappings: [
      { key: "Figma", value: "Select / State=Error" },
      { key: "Angular", value: '<app-select label="Status" [invalid]="true">' },
      { key: "Props", value: "{ label: string; invalid?: boolean }" },
    ],
  },
  {
    id: "code-connect",
    label: "Code Connect",
    sub: "dev mode",
    mappings: [
      { key: "Figma", value: "Dev Mode → Button" },
      { key: "Mapping", value: 'variant: figma.enum("Variant", { Primary: "primary" })' },
      { key: "Shows", value: '<app-button variant="primary">' },
    ],
  },
];

export function ArchitectureDiagram() {
  const [activeId, setActiveId] = useState(STAGES[0].id);
  const panelId = useId();
  const active = STAGES.find((stage) => stage.id === activeId) ?? STAGES[0];

  return (
    <DiagramFrame label="Figma design system mirrored in Storybook and Angular">
      <Caption hint="Select a stage">Figma → Angular Storybook</Caption>
      <ol className={flowListClass}>
        {STAGES.map((stage, index) => {
          const isActive = stage.id === activeId;
          return (
            <li key={stage.id} className={flowItemClass}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls={panelId}
                onClick={() => setActiveId(stage.id)}
                className={nodeClass(isActive ? "active" : "idle", true)}
              >
                <NodeText label={stage.label} sub={stage.sub} active={isActive} />
              </button>
              {index < STAGES.length - 1 && <FlowArrow />}
            </li>
          );
        })}
      </ol>
      <DetailPanel id={panelId} heading={`Example: ${active.label}`} panelKey={active.id}>
        <dl className="space-y-2">
          {active.mappings.map((mapping) => (
            <div key={mapping.key} className="md:grid md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-x-4">
              <dt className="text-ivory/60">{mapping.key}</dt>
              <dd className="break-words">
                <code>{mapping.value}</code>
              </dd>
            </div>
          ))}
        </dl>
      </DetailPanel>
    </DiagramFrame>
  );
}
