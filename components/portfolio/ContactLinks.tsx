import { contactLinks } from "@/lib/content/profile";
import { ContactIcon } from "./ContactIcons";

export function ContactLinks({ label, className = "" }: { label: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-1 text-base font-medium md:text-lg">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex min-h-11 items-center gap-2.5 decoration-signal-strong decoration-2 underline-offset-[6px] hover:underline focus-visible:underline"
            >
              <ContactIcon name={link.icon} />
              {link.label}
              {link.external && <span className="sr-only">(opens in new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
