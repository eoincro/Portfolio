export type LogEntry = {
  date: string;
  text: string;
  href?: string;
};

export const MIN_LOG_ENTRIES = 5;
export const MAX_VISIBLE_LOG_ENTRIES = 8;

export const workLog: readonly LogEntry[] = [];
