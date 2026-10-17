import Image from 'next/image';

type AppScreenName = 'home' | 'community' | 'garden' | 'global' | 'rosary';

const screens = {
  home: {
    src: '/assets/app-home.png',
    width: 614,
    height: 5430,
    alt: 'DoIt4Jesus dashboard showing prayer streaks and personal progress',
  },
  community: {
    src: '/assets/app-community.png',
    width: 614,
    height: 2632,
    alt: 'DoIt4Jesus community page showing prayer leaderboards',
  },
  garden: {
    src: '/assets/app-home.png',
    width: 614,
    height: 5430,
    alt: 'DoIt4Jesus dashboard showing the Rosary Garden',
  },
  global: {
    src: '/assets/app-prayer.png',
    width: 614,
    height: 4330,
    alt: 'DoIt4Jesus prayer page showing the worldwide Rosary count',
  },
  rosary: {
    src: '/assets/app-rosary.png',
    width: 614,
    height: 1343,
    alt: 'DoIt4Jesus guided Rosary with the current mystery and prayers',
  },
} as const;

export function AppScreen({
  screen,
  className = '',
  sizes = '(max-width: 700px) 82vw, 320px',
  priority = false,
}: {
  screen: AppScreenName;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const image = screens[screen];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className={`app-screen app-screen-${screen} ${className}`.trim()}
    />
  );
}
