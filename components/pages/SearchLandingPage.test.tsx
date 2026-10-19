import { render, screen } from '@testing-library/react';
import { seoPages } from '@/content/seo-pages';
import { seoPagesEs } from '@/content/seo-pages.es';
import { appUrl, signupUrl } from '@/content/site';
import { SearchLandingPage } from './SearchLandingPage';

describe('SearchLandingPage', () => {
  it('renders the selected search landing content and conversion actions', () => {
    const page = seoPages['rosary-tracker-app'];
    const { container } = render(<SearchLandingPage slug="rosary-tracker-app" />);

    expect(screen.getByRole('heading', { level: 1, name: page.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Open DoIt4Jesus' })).toHaveAttribute('href', appUrl);
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', signupUrl);
    expect(container.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(3);
  });

  it('renders the Spanish page and keeps navigation in Spanish', () => {
    const page = seoPagesEs['rosary-tracker-app'];
    const { container } = render(<SearchLandingPage slug="rosary-tracker-app" locale="es" />);

    expect(screen.getByRole('heading', { level: 1, name: page.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Explorar todas las funciones' })).toHaveAttribute('href', '/es/features');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/rosary-tracker-app');
    expect(screen.getByRole('link', { name: 'Comienza ahora' })).toHaveAttribute('href', signupUrl);
    const webPageSchema = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent!);
    expect(webPageSchema).toMatchObject({ inLanguage: 'es-ES', url: expect.stringContaining('/es/rosary-tracker-app') });
  });
});
