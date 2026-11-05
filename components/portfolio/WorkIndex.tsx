import { caseStudies } from "@/lib/content/caseStudies";
import { Container } from "./Container";
import { Diagram } from "./diagrams";
import { MetricStrip } from "./MetricStrip";

const itemNumber = (index: number) => String(index + 1).padStart(2, "0");

export function WorkIndex() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-8">
      <Container>
        <div className="flex items-center gap-4">
          <h2 id="work-title" className="text-sm font-medium text-ink">
            Work
          </h2>
          <span aria-hidden className="h-px flex-1 bg-ink/15" />
        </div>

        <ol className="divide-y divide-ink/15">
          {caseStudies.map((study, index) => (
            <li key={study.id} id={`work-${study.id}`} className="scroll-mt-8">
              <article
                aria-labelledby={`case-${study.id}`}
                className={`pb-12 md:grid md:grid-cols-12 md:items-start md:gap-x-8 md:pb-16 ${index === 0 ? "pt-4 md:pt-8" : "pt-12 md:pt-16"}`}
              >
                <div className={`md:col-span-4 2xl:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <p className="flex gap-3 text-sm text-ink/60">
                    <span className="tabular-nums">{itemNumber(index)}</span>
                    {study.kind}
                  </p>
                  <h3
                    id={`case-${study.id}`}
                    className="mt-2 -ml-[0.3em] text-xl leading-[1.45] font-medium tracking-[-0.02em] text-balance md:text-2xl xl:text-[1.75rem]"
                  >
                    <span className="paint-stroke">{study.title}</span>
                  </h3>
                  {study.context && <p className="mt-2 text-sm text-ink/60">{study.context}</p>}
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">{study.summary}</p>
                </div>
                <div className="mt-8 md:col-span-8 md:mt-0 2xl:col-span-7">
                  <div className="max-w-[56rem]">
                    <Diagram study={study.id} />
                    <MetricStrip metrics={study.metrics} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
