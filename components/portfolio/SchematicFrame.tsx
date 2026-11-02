import type { CaseStudy } from "@/lib/content/caseStudies";
import { Schematic } from "./schematics";

const ON_DARK =
  "text-ivory [--dot-color:rgb(252_251_247/0.1)] [--schematic-text:var(--color-ivory)] [--schematic-accent:var(--color-signal)] [--schematic-depth:#9db8dc]";

const TONES = {
  paper: "border-hairline bg-ivory text-ink",
  ink: `border-ink bg-ink [--schematic-fill:var(--color-ink)] ${ON_DARK}`,
  depth: `border-depth bg-depth [--schematic-fill:var(--color-depth)] ${ON_DARK}`,
} as const;

export function SchematicFrame({ study }: { study: CaseStudy }) {
  return (
    <figure className={`dot-grid aspect-[2/1] w-full rounded-lg border p-4 md:p-6 ${TONES[study.tone]}`}>
      <Schematic study={study.id} instance="card" />
    </figure>
  );
}
