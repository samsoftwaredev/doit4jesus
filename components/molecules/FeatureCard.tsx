import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function FeatureCard({ title, body, image, alt }: { title: string; body: string; image: string; alt: string }) {
  return (
    <Box component="article" className="feature-card">
      <Box className="feature-image-wrap"><Image src={image} alt={alt} width={410} height={420} className="feature-image" /></Box>
      <Box className="feature-copy">
        <Typography component="h3" variant="h4">{title}</Typography>
        <Typography color="text.secondary">{body}</Typography>
      </Box>
    </Box>
  );
}
