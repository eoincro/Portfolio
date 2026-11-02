import type { ContactIcon as ContactIconName } from "@/lib/content/profile";

const springy = "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] [transform-box:fill-box]";

function EmailIcon() {
  return (
    <>
      <rect x="2.5" y="8" width="19" height="13" rx="2" />
      <path d="M3 9 L12 15 L21 9" className={`${springy} origin-top motion-safe:group-hover:-scale-y-100 motion-safe:group-focus-visible:-scale-y-100`} />
      <g className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <path d="M19.5 5.5 L21.5 3.5" />
        <path d="M16.5 4.5 L17 2" />
        <path d="M21 7.5 L23 7" />
      </g>
    </>
  );
}

function LinkedInIcon() {
  return (
    <g className={`${springy} origin-center motion-safe:group-hover:-rotate-12 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:-rotate-12`}>
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <circle cx="8" cy="8.25" r="1.15" fill="currentColor" stroke="none" />
      <path d="M8 11 V17" />
      <path d="M12 17 V11 M12 13.75 C12 12 13 11 14.5 11 C16 11 17 12 17 13.75 V17" />
    </g>
  );
}

const ICONS: Record<ContactIconName, () => React.ReactElement> = {
  email: EmailIcon,
  linkedin: LinkedInIcon,
};

export function ContactIcon({ name }: { name: ContactIconName }) {
  const Icon = ICONS[name];
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 overflow-visible transition-colors duration-150 group-hover:text-signal-strong group-focus-visible:text-signal-strong"
    >
      <Icon />
    </svg>
  );
}
