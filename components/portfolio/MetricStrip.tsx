import type { Metric } from "@/lib/content/caseStudies";

export function MetricStrip({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="mt-6 max-w-md divide-y divide-ink/15 border-y border-ink/15 font-mono text-[12px] md:text-[13px]">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-2.5">
          <dt className="tracking-[0.06em] text-ink/60 uppercase">{metric.label}</dt>
          <dd className="text-ink tabular-nums">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
