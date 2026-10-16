import Link from 'next/link';
import Image from 'next/image';

export function Brand({ href = '/', label = 'DoIt4Jesus home', inverse = false }: { href?: string; label?: string; inverse?: boolean }) {
  return (
    <Link href={href} className={`brand${inverse ? ' brand-inverse' : ''}`} aria-label={label}>
      <Image className="brand-logo" src={inverse ? '/assets/logo-white.svg' : '/assets/logo-black.svg'} alt="" width={132} height={70} priority />
    </Link>
  );
}
