import type { Metric } from "@/lib/content/caseStudies";

export function MetricStrip({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="mt-4 font-mono sm:border-t sm:border-ink/15 text-[12px] sm:grid sm:grid-cols-3 sm:gap-x-6 md:text-[13px]">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="grid grid-cols-[145px_1fr] items-baseline gap-4 border-b border-ink/15 py-2.5 last:border-b-0 last:pb-0 sm:block sm:border-b-0 sm:pt-3 sm:pb-0"
        >
          <dt className="tracking-[0.06em] text-ink/60 uppercase">{metric.label}</dt>
          <dd className="text-ink tabular-nums sm:mt-1.5">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
