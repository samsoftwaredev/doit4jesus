import { render, screen } from '@testing-library/react';
import { appUrl, content } from '@/content/site';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  it('renders the localized mission and app action', () => {
    render(<AboutPage locale="en" />);

    expect(screen.getByRole('heading', { level: 1, name: content.en.about.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: content.en.about.cta })).toHaveAttribute('href', appUrl);
    expect(screen.getByRole('img', { name: 'Illustration of Mary in prayer' })).toBeInTheDocument();
    expect(screen.getByText(/pandemic made life without regular access to the Eucharist/i)).toBeInTheDocument();
    expect(screen.getByText(/enjoyed gaming and playing video games/i)).toBeInTheDocument();
    expect(screen.getByText(/prayer does not have to feel solitary/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: content.en.about.operatorTitle })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Privacy Policy' }).every((link) => link.getAttribute('href') === '/privacy-policy')).toBe(true);
  });

  it('renders Spanish trust content and keeps policy links in Spanish routes', () => {
    const { container } = render(<AboutPage locale="es" />);

    expect(screen.getByRole('heading', { level: 1, name: content.es.about.title })).toBeInTheDocument();
    expect(screen.getByText(/vivir sin acceso regular a la Eucaristía/i)).toBeInTheDocument();
    expect(screen.getByText(/Siempre me han gustado los videojuegos/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: content.es.about.editorialTitle })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Política de privacidad' }).every((link) => link.getAttribute('href') === '/es/privacy-policy')).toBe(true);
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/about');
    const schema = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent!);
    expect(schema).toMatchObject({ '@type': 'Organization', inLanguage: 'es-ES' });
  });
});
