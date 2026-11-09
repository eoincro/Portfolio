import { useEffect, useRef, type ReactNode, type Ref } from "react";

export function DiagramFrame({ label, children, ref }: { label: string; children: ReactNode; ref?: Ref<HTMLElement> }) {
  return (
    <figure
      ref={ref}
      aria-label={label}
      className="schematic-grid rounded-lg border border-schematic-line bg-schematic p-4 font-mono text-[13px] leading-snug text-ivory md:p-6 xl:text-[14px]"
    >
      {children}
    </figure>
  );
}

export function Caption({ children, hint }: { children: ReactNode; hint?: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <p className="tracking-[0.06em] text-ivory/60 uppercase">{children}</p>
      {hint && (
        <p className="flex items-center gap-2 text-ivory/85">
          <span aria-hidden className="size-1.5 rounded-full bg-signal-on-dark" />
          {hint}
        </p>
      )}
    </div>
  );
}

type NodeState = "idle" | "active";

const NODE_TONES: Record<NodeState, string> = {
  idle: "border-ivory/20",  active: "border-signal-on-dark bg-signal-on-dark/10",
};

export function nodeClass(state: NodeState, interactive = false) {
  const hover = interactive && state !== "active" ? "cursor-pointer hover:border-ivory/50" : "";
  return `flex h-full w-full flex-col items-start gap-1 rounded-md border bg-schematic px-3 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-on-dark lg:px-2.5 ${NODE_TONES[state]} ${hover}`;
}

export function useDemoSelect(select: () => void) {
  const ref = useRef<HTMLElement>(null);
  const selectRef = useRef(select);
  useEffect(() => {
    selectRef.current = select;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let touched = false;
    let timer: number | undefined;
    const markTouched = () => {
      touched = true;
    };
    el.addEventListener("pointerdown", markTouched);
    el.addEventListener("keydown", markTouched);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          if (!touched) selectRef.current();
        }, 900);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      el.removeEventListener("pointerdown", markTouched);
      el.removeEventListener("keydown", markTouched);
    };
  }, []);

  return ref;
}

export function NodeText({ label, sub, active }: { label: string; sub?: string; active?: boolean }) {
  return (
    <>
      <span className={`tracking-[0.06em] uppercase ${active ? "text-signal-on-dark" : ""}`}>{label}</span>
      {sub && <span className="text-ivory/60">{sub}</span>}
    </>
  );
}

export const flowListClass = "grid grid-cols-2 gap-2 lg:flex lg:flex-row lg:gap-5";
export const flowItemClass = "relative odd:last:col-span-2 lg:min-w-0 lg:flex-1 lg:odd:last:col-span-1";

export function FlowArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="absolute top-1/2 left-full ml-1 hidden size-3 -translate-y-1/2 text-ivory/40 lg:block"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function DetailPanel({ id, heading, panelKey, children }: { id: string; heading: string; panelKey: string; children: ReactNode }) {
  return (
    <div id={id} aria-live="polite" className="mt-3 rounded-md border border-ivory/15 bg-ivory/[0.03] p-3 md:p-4">
      <div key={panelKey} className="motion-safe:animate-panel-in">
        <p className="tracking-[0.06em] text-ivory/60 uppercase">{heading}</p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
