import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function FeatureCard({ title, body, image, alt, imageFocus, href }: { title: string; body: string; image: string; alt: string; imageFocus: string; href: string }) {
  return (
    <Box component="article" className="feature-card">
      <Link href={href} className={`feature-image-wrap feature-image-wrap-${imageFocus}`} aria-label={`${title}: explore this feature`}>
        <Image src={image} alt={alt} width={614} height={imageFocus === 'rosary' ? 1343 : imageFocus === 'community' ? 2632 : 5430} sizes="(max-width: 700px) 78vw, (max-width: 1100px) 42vw, 265px" className="feature-image" />
      </Link>
      <Box className="feature-copy">
        <Typography component="h3" variant="h4"><Link href={href}>{title}</Link></Typography>
        <Typography color="text.secondary">{body}</Typography>
        <Link href={href} className="feature-link">See how it works <span aria-hidden="true">→</span></Link>
      </Box>
    </Box>
  );
}
