import type { FeatureIcon as IconName } from '@/data/features';

const paths: Record<IconName, React.ReactNode> = {
  rosary: <><circle cx="12" cy="4" r="1.5"/><circle cx="17.5" cy="6.5" r="1.5"/><circle cx="19.5" cy="12" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/><circle cx="9.5" cy="18" r="1.5"/><circle cx="4.5" cy="14" r="1.5"/><circle cx="5.5" cy="8" r="1.5"/><path d="M12 5.5 16 6M18.5 8l1 2.5M19 13.5l-1.5 2M15 18l-4 0M8 17.5l-2.5-2M4.5 12.5V9.5M7 6.5l3.5-2M9.5 19.5V22m-2-1h4"/></>,
  book: <><path d="M12 6c-2.5-1.5-5.5-1.7-9-.5v13c3.5-1.2 6.5-1 9 .5 2.5-1.5 5.5-1.7 9-.5v-13c-3.5-1.2-6.5-1-9 .5Zm0 0v13"/><path d="M5.5 9c1.6-.3 3-.2 4.2.3m4.6 0c1.2-.5 2.6-.6 4.2-.3"/></>,
  cross: <path d="M10 2h4v7h7v4h-7v9h-4v-9H3V9h7V2Z"/>,
  shield: <><path d="M12 2 20 5v6c0 5-3 8.5-8 11-5-2.5-8-6-8-11V5l8-3Z"/><path d="M12 6v11m-4-7h8"/></>,
  spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Zm7 14 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
  people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20v-2c0-2.5 2.4-4 5.5-4s5.5 1.5 5.5 4v2H2.5Zm12.5-5c3.2 0 6 1.5 6 4v1h-5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3-4.5 6-4.5 9s1.5 6 4.5 9c3-3 4.5-6 4.5-9S15 6 12 3Z"/></>,
  heart: <path d="M20.7 5.8a5 5 0 0 0-7.1 0L12 7.4l-1.6-1.6a5 5 0 0 0-7.1 7.1 7.1 0 0 0 0 7.1L12 22l8.7-9.1a5 5 0 0 0 0-7.1Z"/>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 10h18m-14 4h3m4 0h3m-10 4h3"/></>,
  chart: <><path d="M4 20V4m0 16h17M8 16v-4m5 4V8m5 8V5"/></>,
  star: <path d="m12 2 3 6.4 7 .9-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7-.9L12 2Z"/>,
  church: <><path d="M4 22V10l8-5 8 5v12H4Zm6 0v-7h4v7M12 1v5M9.5 3.5h5M7 12h2m6 0h2"/></>,
};

export function FeatureIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
