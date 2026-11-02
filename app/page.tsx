import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { Container } from "@/components/portfolio/Container";
import { TypeHero } from "@/components/portfolio/TypeHero";
import { WorkIndex } from "@/components/portfolio/WorkIndex";
import { WorkLog } from "@/components/portfolio/WorkLog";
import { workLog } from "@/lib/content/log";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Container>
          <TypeHero />
        </Container>
        <WorkIndex />
        <Container>
          <WorkLog entries={workLog} />
        </Container>
      </main>
      <Container>
        <ContactFooter />
      </Container>
    </div>
  );
}
