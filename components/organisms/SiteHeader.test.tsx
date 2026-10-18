import { render, screen, within } from '@testing-library/react';
import { SiteHeader } from './SiteHeader';

describe('SiteHeader', () => {
  it('renders localized primary navigation for the home page', () => {
    render(<SiteHeader locale="es" page="home" />);

    const navigation = screen.getByRole('navigation', { name: 'Navegación principal' });
    expect(within(navigation).getByRole('link', { name: 'Acerca de' })).toHaveAttribute('href', '/es/about');
    expect(within(navigation).getByRole('link', { name: '¿Por qué rezar el Rosario?' })).toHaveAttribute(
      'href',
      '/es#why-pray-rosary',
    );
  });
});
