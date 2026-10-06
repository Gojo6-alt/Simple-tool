import { RecentToolItem } from '../types';

const STORAGE_KEY = 'simpletools_recently_used';
const MAX_RECENT = 6;

export function getRecentlyUsedTools(): RecentToolItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.slice(0, MAX_RECENT);
    }
  } catch {
    // ignore
  }
  return [];
}

export function recordToolVisit(slug: string, name: string, category: any): void {
  if (typeof window === 'undefined') return;
  try {
    const recents = getRecentlyUsedTools().filter((item) => item.slug !== slug);
    const updated: RecentToolItem[] = [
      { slug, name, category, timestamp: Date.now() },
      ...recents,
    ].slice(0, MAX_RECENT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
}

export function clearRecentlyUsedTools(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
