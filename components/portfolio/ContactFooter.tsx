import { profile } from "@/lib/content/profile";
import { ContactLinks } from "./ContactLinks";

export function ContactFooter() {
  return (
    <footer aria-labelledby="contact-title" className="mt-16 pb-8 md:mt-24">
      <div className="flex items-center gap-4">
        <h2 id="contact-title" className="text-sm font-medium text-ink">
          Contact
        </h2>
        <span aria-hidden className="h-px flex-1 bg-ink/15" />
      </div>
      <ContactLinks label="Footer contact" className="mt-4" />
      <p className="mt-12 text-sm text-ink/60 md:mt-16">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
