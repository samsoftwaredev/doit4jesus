import { render, screen } from '@testing-library/react';
import { PublicPageShell } from './PublicPageShell';

describe('PublicPageShell', () => {
  it('wraps Spanish content with a skip link, main landmark, header, and footer', () => {
    render(
      <PublicPageShell locale="es" page="about">
        <h1>Contenido</h1>
      </PublicPageShell>,
    );

    expect(screen.getByRole('link', { name: 'Saltar al contenido' })).toHaveAttribute('href', '#main-content');
    expect(screen.getByRole('main')).toContainElement(screen.getByRole('heading', { name: 'Contenido' }));
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
