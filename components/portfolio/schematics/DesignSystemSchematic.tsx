import { Label, NodeBox, SchematicSvg } from "./primitives";

const FIGMA_TIERS = ["VARIABLES", "ATOMS", "MOLECULES", "ORGANISMS", "TEMPLATES"];
const CODE_TIERS = [
  { label: "TOKENS", sub: "css vars" },
  { label: "ATOMS", sub: "button · tag" },
  { label: "MOLECULES", sub: "select · tabs" },
  { label: "ORGANISMS", sub: "table · dialog" },
];
const TIER_X = [20, 114, 208, 302, 420];
const TIER_W = 80;
const BOX_H = 44;
const FIGMA_Y = 40;
const CODE_Y = 176;

const LANE_PAD = 10;
const LANE_LABEL_BAND = 18;
const LANE_H = BOX_H + LANE_PAD * 2 + LANE_LABEL_BAND;

type LaneProps = {
  rowY: number;
  width: number;
  label: string;
  labelAt: "top" | "bottom";
  color: string;
  labelColor?: string;
};

function Lane({ rowY, width, label, labelAt, color, labelColor }: LaneProps) {
  const y = labelAt === "top" ? rowY - LANE_PAD - LANE_LABEL_BAND : rowY - LANE_PAD;
  const labelY = labelAt === "top" ? y + 13 : y + LANE_H - 8;
  return (
    <g style={{ color }}>
      <rect x={10} y={y} width={width} height={LANE_H} rx={6} fill="none" strokeOpacity={0.6} />
      <g style={{ color: labelColor ?? color }}>
        <Label x={20} y={labelY} size={8.5}>
          {label}
        </Label>
      </g>
    </g>
  );
}

export function DesignSystemSchematic({ id }: { id: string }) {
  const arrow = `url(#${id}-arrow)`;
  const linkTop = FIGMA_Y + BOX_H;
  const linkMidY = (linkTop + CODE_Y) / 2;
  const centerOf = (index: number) => TIER_X[index] + TIER_W / 2;
  const rowArrow = (index: number, y: number) => (
    <path d={`M${TIER_X[index] + TIER_W} ${y + BOX_H / 2} H${TIER_X[index + 1] - 3}`} markerEnd={arrow} />
  );

  return (
    <SchematicSvg
      titleId={id}
      title="Atomic Design, mirrored in Figma and code"
      description="Top row, Figma: variables, atoms, molecules, organisms and templates. Bottom row, Storybook and Angular: tokens, atoms, molecules and organisms. Tokens mirror Figma variables by name. Figma Code Connect links each component tier to its Angular code in Dev Mode. Templates live in the product apps."
    >
      <Lane rowY={FIGMA_Y} width={TIER_X[4] + TIER_W} label="FIGMA" labelAt="top" color="var(--schematic-depth, var(--color-depth))" />
      <Lane
        rowY={CODE_Y}
        width={TIER_X[3] + TIER_W}
        label="STORYBOOK · ANGULAR"
        labelAt="bottom"
        color="var(--schematic-accent, var(--color-signal-strong))"
        labelColor="var(--schematic-text, var(--color-ink))"
      />

      {FIGMA_TIERS.map((tier, index) => (
        <g key={tier}>
          <NodeBox x={TIER_X[index]} y={FIGMA_Y} width={TIER_W} height={BOX_H} label={tier} tone="depth" />
          {index < FIGMA_TIERS.length - 1 && rowArrow(index, FIGMA_Y)}
        </g>
      ))}

      {CODE_TIERS.map((tier, index) => (
        <g key={tier.label}>
          <NodeBox x={TIER_X[index]} y={CODE_Y} width={TIER_W} height={BOX_H} label={tier.label} sub={tier.sub} />
          {rowArrow(index, CODE_Y)}
        </g>
      ))}
      <NodeBox x={TIER_X[4]} y={CODE_Y} width={TIER_W} height={BOX_H} label="IN APPS" sub="templates" dashed />
      <path d={`M${centerOf(4)} ${linkTop} V${CODE_Y - 4}`} strokeDasharray="3 3" strokeOpacity={0.5} markerEnd={arrow} />

      <path d={`M${centerOf(0)} ${linkTop} V${CODE_Y - 4}`} strokeDasharray="3 3" strokeOpacity={0.5} markerEnd={arrow} />
      {[1, 2, 3].map((index) => (
        <path
          key={index}
          d={`M${centerOf(index)} ${linkTop} V${CODE_Y - 4}`}
          stroke="var(--schematic-accent, var(--color-signal-strong))"
          strokeDasharray="3 3"
          markerEnd={arrow}
        />
      ))}
      <Label x={(centerOf(3) + centerOf(4)) / 2} y={linkMidY - 3} anchor="middle" size={8.5}>
        CODE CONNECT
      </Label>
      <Label x={(centerOf(3) + centerOf(4)) / 2} y={linkMidY + 10} anchor="middle" size={8} muted>
        in dev mode
      </Label>
    </SchematicSvg>
  );
}
