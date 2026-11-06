import Image from 'next/image';
import type { Locale } from '@/content/site';

type AppScreenName = 'home' | 'community' | 'garden' | 'global' | 'rosary';

const screens = {
  home: {
    src: '/assets/app-home.webp',
    width: 614,
    height: 5430,
    alt: { en: 'DoIt4Jesus dashboard showing prayer streaks and personal progress', es: 'Panel de DoIt4Jesus con rachas de oración y progreso personal' },
  },
  community: {
    src: '/assets/app-community.webp',
    width: 614,
    height: 2632,
    alt: { en: 'DoIt4Jesus community page showing prayer leaderboards', es: 'Página comunitaria de DoIt4Jesus con clasificaciones de oración' },
  },
  garden: {
    src: '/assets/app-home.webp',
    width: 614,
    height: 5430,
    alt: { en: 'DoIt4Jesus dashboard showing the Rosary Garden', es: 'Panel de DoIt4Jesus con el Jardín del Rosario' },
  },
  global: {
    src: '/assets/app-prayer.webp',
    width: 614,
    height: 4330,
    alt: { en: 'DoIt4Jesus prayer page showing the community Rosary count', es: 'Página de oración de DoIt4Jesus con el conteo comunitario de Rosarios' },
  },
  rosary: {
    src: '/assets/app-rosary.webp',
    width: 614,
    height: 1343,
    alt: { en: 'DoIt4Jesus guided Rosary with the current mystery and prayers', es: 'Rosario guiado de DoIt4Jesus con el misterio y las oraciones actuales' },
  },
} as const;

export function AppScreen({
  screen,
  locale = 'en',
  className = '',
  sizes = '(max-width: 700px) 82vw, 320px',
  priority = false,
}: {
  screen: AppScreenName;
  locale?: Locale;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const image = screens[screen];

  return (
    <Image
      src={image.src}
      alt={image.alt[locale]}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className={`app-screen app-screen-${screen} ${className}`.trim()}
    />
  );
}
