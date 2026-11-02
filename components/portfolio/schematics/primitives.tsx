import type { ReactNode } from "react";

export const SCHEMATIC_VIEWBOX = "0 0 520 260";

type SchematicSvgProps = {
  titleId: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SchematicSvg({ titleId, title, description, children }: SchematicSvgProps) {
  return (
    <svg
      viewBox={SCHEMATIC_VIEWBOX}
      role="img"
      aria-labelledby={`${titleId}-title ${titleId}-desc`}
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      fontFamily="var(--font-mono)"
    >
      <title id={`${titleId}-title`}>{title}</title>
      <desc id={`${titleId}-desc`}>{description}</desc>
      <defs>
        <marker id={`${titleId}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" stroke="none" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

type NodeBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sub?: string;
  dashed?: boolean;
  emphasis?: boolean;
  tone?: "depth";
};

export function NodeBox({ x, y, width, height, label, sub, dashed, emphasis, tone }: NodeBoxProps) {
  const centerX = x + width / 2;
  const labelY = sub ? y + height / 2 - 3 : y + height / 2 + 3.5;
  const stroke = emphasis
    ? "var(--schematic-accent, var(--color-signal-strong))"
    : tone === "depth"
      ? "var(--schematic-depth, var(--color-depth))"
      : "currentColor";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="var(--schematic-fill, var(--color-ivory))"
        stroke={stroke}
        strokeWidth={emphasis || tone ? 1.5 : 1}
        strokeDasharray={dashed ? "4 3" : undefined}
      />
      <text
        x={centerX}
        y={labelY}
        textAnchor="middle"
        fontSize={10}
        letterSpacing="0.06em"
        fill="currentColor"
        stroke="none"
      >
        {label}
      </text>
      {sub && (
        <text
          x={centerX}
          y={y + height / 2 + 11}
          textAnchor="middle"
          fontSize={8.5}
          fill="currentColor"
          fillOpacity={0.65}
          stroke="none"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

type DeltaBarsProps = {
  title: string;
  after: number;
  delta: string;
  y?: number;
};

export function DeltaBars({ title, after, delta, y = 138 }: DeltaBarsProps) {
  const barX = 120;
  const fullWidth = 360;
  const afterWidth = fullWidth * after;
  return (
    <g>
      <Label x={20} y={y} size={8} muted>
        {title}
      </Label>
      <Label x={20} y={y + 32} size={8.5}>
        BEFORE
      </Label>
      <rect x={barX} y={y + 20} width={fullWidth} height={16} fill="currentColor" fillOpacity={0.2} stroke="none" />
      <Label x={20} y={y + 68} size={8.5}>
        AFTER
      </Label>
      <rect
        x={barX}
        y={y + 56}
        width={afterWidth}
        height={16}
        fill="var(--color-signal)"
        fillOpacity={0.3}
        stroke="var(--schematic-accent, var(--color-signal-strong))"
        strokeWidth={1.25}
      />
      <Label x={barX + afterWidth + 10} y={y + 68} size={9}>
        {delta}
      </Label>
    </g>
  );
}

type LabelProps = {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  muted?: boolean;
  size?: number;
};

export function Label({ x, y, children, anchor = "start", muted, size = 9 }: LabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      letterSpacing="0.06em"
      fill="currentColor"
      fillOpacity={muted ? 0.6 : 1}
      stroke="none"
    >
      {children}
    </text>
  );
}
