import { ContactLinks } from "./ContactLinks";

export function ContactFooter() {
  return (
    <footer aria-labelledby="contact-title" className="mt-16 pb-16 md:mt-24 md:pb-24">
      <div className="flex items-center gap-4">
        <h2 id="contact-title" className="text-sm font-medium text-ink">
          Contact
        </h2>
        <span aria-hidden className="h-px flex-1 bg-ink/15" />
      </div>
      <ContactLinks label="Footer contact" className="mt-4" />
    </footer>
  );
}
