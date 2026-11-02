import { profile } from "@/lib/content/profile";

export function ContactFooter() {
  return (
    <footer className="mt-16 border-t border-ink/15 pt-4 pb-8 md:mt-32">
      <p className="text-sm text-ink/60">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
