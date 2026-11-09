import { contactLinks } from "@/lib/content/profile";
import { ContactIcon } from "./ContactIcons";

export function ContactLinks({ label, className = "" }: { label: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-col gap-x-8 sm:flex-row sm:flex-wrap">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={`${link.label}: ${link.value}${link.external ? " (opens in new tab)" : ""}`}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex min-h-11 items-center gap-2.5 rounded-sm text-[15px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal md:text-base"
            >
              <span className="text-ink/60 transition-colors duration-150 group-hover:text-ink [&_svg]:size-4">
                <ContactIcon name={link.icon} />
              </span>
              <span className="text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-150 group-hover:decoration-signal-strong group-focus-visible:decoration-signal-strong">
                {link.value}
                {link.external && (
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
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
