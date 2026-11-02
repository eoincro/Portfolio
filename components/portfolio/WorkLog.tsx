import { MAX_VISIBLE_LOG_ENTRIES, MIN_LOG_ENTRIES, type LogEntry } from "@/lib/content/log";
import { LabeledSection } from "./LabeledSection";

type WorkLogProps = {
  entries: readonly LogEntry[];
  allEntriesHref?: string;
};

export function WorkLog({ entries, allEntriesHref }: WorkLogProps) {
  if (entries.length < MIN_LOG_ENTRIES) return null;

  const visible = [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, MAX_VISIBLE_LOG_ENTRIES);
  const hasMore = entries.length > MAX_VISIBLE_LOG_ENTRIES;

  return (
    <LabeledSection labelId="log-title" label="Log">
      <ol className="-mt-3">
        {visible.map((entry) => (
          <li
            key={`${entry.date}-${entry.text}`}
            className="grid grid-cols-[6rem_1fr] gap-4 border-b border-hairline py-3 text-[15px] leading-snug"
          >
            <time dateTime={entry.date} className="text-sm text-ink/60 tabular-nums">
              {entry.date}
            </time>
            {entry.href ? (
              <a href={entry.href} className="link-underline">
                {entry.text}
              </a>
            ) : (
              <p>{entry.text}</p>
            )}
          </li>
        ))}
      </ol>
      {hasMore && allEntriesHref && (
        <a href={allEntriesHref} className="link-underline mt-4 inline-flex min-h-11 items-center text-sm font-medium">
          All entries
        </a>
      )}
    </LabeledSection>
  );
}
