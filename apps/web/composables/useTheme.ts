import { ref } from 'vue';

export interface AccentPalette {
  name: string;
  value: string;
  deep: string;
}

export const ACCENTS: ReadonlyArray<AccentPalette> = [
  { name: 'Clay',   value: 'oklch(63% 0.18 38)',  deep: 'oklch(54% 0.18 38)'  },
  { name: 'Sage',   value: 'oklch(58% 0.10 150)', deep: 'oklch(50% 0.10 150)' },
  { name: 'Cobalt', value: 'oklch(54% 0.15 250)', deep: 'oklch(46% 0.15 250)' },
  { name: 'Plum',   value: 'oklch(50% 0.16 320)', deep: 'oklch(42% 0.16 320)' }
];

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'gt:tweak';

interface StoredTweak {
  accent?: number;
  theme?: ThemeMode;
}

// Module-level singletons so every caller of useTheme shares state
// (cleaner than passing prop drilling and avoids SSR-state lifecycle).
const accent = ref<number>(0);
const theme = ref<ThemeMode>('light');

const isClient = (): boolean => typeof document !== 'undefined';

function applyAttributes(): void {
  if (!isClient()) return;
  const html = document.documentElement;
  html.setAttribute('data-accent', String(accent.value));
  if (theme.value === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
}

function persist(): void {
  if (!isClient()) return;
  try {
    const payload: StoredTweak = { accent: accent.value, theme: theme.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage may be blocked in private mode — silently degrade
  }
}

export function useTheme() {
  function init(): void {
    if (!isClient()) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredTweak;
        if (
          typeof parsed.accent === 'number' &&
          parsed.accent >= 0 &&
          parsed.accent < ACCENTS.length
        ) {
          accent.value = parsed.accent;
        }
        if (parsed.theme === 'light' || parsed.theme === 'dark') {
          theme.value = parsed.theme;
        }
      }
    } catch {
      // ignore parse failures
    }
    applyAttributes();
  }

  function cycleAccent(): void {
    accent.value = (accent.value + 1) % ACCENTS.length;
    persist();
    applyAttributes();
  }

  function toggleTheme(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    persist();
    applyAttributes();
  }

  return {
    accent,
    theme,
    ACCENTS,
    cycleAccent,
    toggleTheme,
    init
  };
}
