import { profile } from "@/lib/content/profile";
import { display } from "@/lib/fonts";
import { ContactLinks } from "./ContactLinks";
export function TypeHero() {
  return (
    <section aria-labelledby="hero-name" className="pt-12 pb-14 md:pt-14 md:pb-20">
      <h1
        id="hero-name"
        className={`${display.className} group text-[clamp(3rem,14vw,8.5rem)] leading-[0.9] font-medium tracking-[-0.04em]`}
      >
        Eoin Cronin
        <span aria-hidden className="ml-[0.06em] inline-block h-[0.7em] w-[0.06em] animate-caret-blink bg-signal group-hover:animate-caret-pulse motion-reduce:animate-none" />
      </h1>
      <div className="mt-6 md:mt-10 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-x-8">
        <p className="text-base leading-relaxed text-ink md:text-lg lg:col-span-4 2xl:col-span-5">
          {profile.role}
          <span className="block text-ink/70 md:ml-3 md:inline lg:ml-0 lg:block">Cork, Ireland</span>
        </p>

        <div className="mt-8 lg:col-span-8 lg:mt-0 2xl:col-span-7">
          <p className="text-[clamp(1.375rem,3vw,2.125rem)] leading-[1.2] font-normal tracking-[-0.02em] text-balance">
            I turn{" "}
            <em className={`${display.className} font-medium italic`}>design systems</em>{" "}
            into production code.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Eight years shipping Angular and React. Now I hold AI-generated code to the same standard.
          </p>

          <ContactLinks label="Contact" className="mt-6" />
        </div>
      </div>
    </section>
  );
}
