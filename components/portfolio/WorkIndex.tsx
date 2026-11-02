import { caseStudies } from "@/lib/content/caseStudies";
import { Container } from "./Container";
import { SchematicFrame } from "./SchematicFrame";

const itemNumber = (index: number) => String(index + 1).padStart(2, "0");

export function WorkIndex() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-8">
      <Container>
        <div className="border-t border-ink/15 pt-8">
          <h2 id="work-title" className="text-2xl font-medium tracking-[-0.025em] md:text-3xl">
            Work
          </h2>
        </div>

        <ol className="mt-4 divide-y divide-ink/15 md:mt-0">
          {caseStudies.map((study, index) => (
            <li key={study.id} id={`work-${study.id}`} className="scroll-mt-8">
              <article
                aria-labelledby={`case-${study.id}`}
                className={`py-12 md:grid md:grid-cols-12 md:items-start md:gap-x-8 md:py-16 ${index === 0 ? "md:pt-8" : ""}`}
              >
                <div className={`md:col-span-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <p className="flex gap-3 text-sm text-ink/60">
                    <span className="tabular-nums">{itemNumber(index)}</span>
                    {study.kind}
                  </p>
                  <h3
                    id={`case-${study.id}`}
                    className="mt-2 -ml-[0.3em] text-xl leading-[1.45] font-medium tracking-[-0.02em] text-balance md:text-2xl"
                  >
                    <span className="paint-stroke">{study.title}</span>
                  </h3>
                  {study.context && <p className="mt-2 text-sm text-ink/60">{study.context}</p>}
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">{study.summary}</p>
                </div>
                <div className="mt-8 md:col-span-8 md:mt-0">
                  <div className={`max-w-[56rem] ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <SchematicFrame study={study} />
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
