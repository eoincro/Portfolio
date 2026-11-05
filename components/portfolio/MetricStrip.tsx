import type { Metric } from "@/lib/content/caseStudies";

export function MetricStrip({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="mt-6 space-y-3 font-mono text-[12px] sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 md:mt-8 md:text-[13px]">
      {metrics.map((metric) => (
        <div key={metric.label} className="grid grid-cols-[145px_1fr] items-baseline gap-4 sm:block">
          <dt className="tracking-[0.06em] text-ink/60 uppercase">{metric.label}</dt>
          <dd className="text-ink tabular-nums sm:mt-1.5">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
