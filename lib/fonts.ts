import localFont from "next/font/local";

export const display = localFont({
  src: [
    { path: "../app/fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../app/fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  display: "swap",
});
