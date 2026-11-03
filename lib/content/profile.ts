export const profile = {
  name: "Eoin Cronin",
  role: "Lead Frontend & UX Engineer",
  email: "Eoin.c.cronin@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/eoin-cronin/",
} as const;

export type ContactIcon = "email" | "linkedin";

export const contactLinks = [
  { label: "Email", value: profile.email.toLowerCase(), href: `mailto:${profile.email}`, external: false, icon: "email" },
  { label: "LinkedIn", value: "linkedin.com/in/eoin-cronin", href: profile.linkedinUrl, external: true, icon: "linkedin" },
] as const satisfies readonly { label: string; value: string; href: string; external: boolean; icon: ContactIcon }[];
