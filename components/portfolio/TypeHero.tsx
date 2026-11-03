import { profile } from "@/lib/content/profile";
import { serif } from "@/lib/fonts";
import { ContactLinks } from "./ContactLinks";
export function TypeHero() {
  return (
    <section aria-labelledby="hero-name" className="pt-12 pb-14 md:pt-14 md:pb-20">
      <h1
        id="hero-name"
        className={`${serif.className} group text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.9] font-normal tracking-normal md:tracking-[-0.02em]`}
      >
        Eoin Cronin
        <span aria-hidden className="ml-[0.06em] inline-block h-[0.7em] w-[0.06em] animate-caret-blink bg-signal group-hover:animate-caret-pulse motion-reduce:animate-none" />
      </h1>
      <p className="mt-4 text-lg tracking-[-0.015em] md:mt-8 md:text-xl">
        {profile.role}
        <span className="block text-ink/60 md:ml-3 md:inline">Cork, Ireland</span>
      </p>

      <div className="mt-10 md:grid md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-8">
          <p className="text-[clamp(1.375rem,3vw,2.125rem)] leading-[1.2] font-normal tracking-[-0.02em] text-balance">
            I turn{" "}
            <em className={`${serif.className} text-[1.12em] font-normal tracking-[-0.01em]`}>design systems</em>{" "}
            into production code.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Eight years shipping Angular and React, now making AI-generated UI meet the same standard.
          </p>

          <ContactLinks label="Contact" className="mt-6" />
        </div>
      </div>
    </section>
  );
}
