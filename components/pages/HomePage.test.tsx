import { render, screen } from '@testing-library/react';
import { content } from '@/content/site';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the complete Spanish home experience and structured data', () => {
    const { container } = render(<HomePage locale="es" />);

    expect(screen.getByRole('heading', { level: 1, name: content.es.home.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: content.es.home.beyondRosary.title })).toBeInTheDocument();

    const structuredData = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent!);
    expect(structuredData).toMatchObject({ '@type': 'WebPage', inLanguage: 'es-ES' });
  });
});
