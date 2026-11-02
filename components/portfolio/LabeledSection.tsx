import type { ReactNode } from "react";

type LabeledSectionProps = {
  id?: string;
  labelId: string;
  label: string;
  children: ReactNode;
};

export function LabeledSection({ id, labelId, label, children }: LabeledSectionProps) {
  return (
    <section id={id} aria-labelledby={labelId} className="scroll-mt-8 pt-24 md:pt-32">
      <div className="border-t border-ink/15 pt-5">
        <h2 id={labelId} className="text-sm text-ink/60">
          {label}
        </h2>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
