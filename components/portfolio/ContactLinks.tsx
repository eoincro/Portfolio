import { contactLinks } from "@/lib/content/profile";
import { ContactIcon } from "./ContactIcons";

export function ContactLinks({ label, className = "" }: { label: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex min-h-11 items-center rounded-full"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-[#EFECE4]/50 px-3.5 py-1.5 font-mono text-xs tracking-wider uppercase transition-all duration-150 group-hover:border-ink/50 group-hover:bg-[#EFECE4] group-focus-visible:border-ink/50 [&_svg]:size-3.5">
                <ContactIcon name={link.icon} />
                {link.label}
              </span>
              {link.external && <span className="sr-only">(opens in new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
