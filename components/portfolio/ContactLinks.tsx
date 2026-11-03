import { contactLinks } from "@/lib/content/profile";
import { ContactIcon } from "./ContactIcons";

export function ContactLinks({ label, className = "" }: { label: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="max-w-md divide-y divide-ink/15 border-y border-ink/15 font-mono text-[12px] md:text-[13px]">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group grid min-h-11 grid-cols-[145px_1fr] items-center gap-4 py-2.5 sm:grid-cols-[180px_1fr]"
            >
              <span className="flex items-center gap-2.5 tracking-[0.06em] text-ink/60 uppercase transition-colors duration-150 group-hover:text-ink [&_svg]:size-4">
                <ContactIcon name={link.icon} />
                {link.label}
              </span>
              <span className="min-w-0 break-words text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 group-hover:decoration-signal-strong group-focus-visible:decoration-signal-strong">
                {link.value}
                {link.external && (
                  <>
                    <svg
                      aria-hidden
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.25}
                      className="ml-1.5 inline size-2.5 align-baseline"
                    >
                      <path d="M3 9 9 3M4.5 3H9v4.5" />
                    </svg>
                    <span className="sr-only"> (opens in new tab)</span>
                  </>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
