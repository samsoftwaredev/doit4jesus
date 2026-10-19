import { render, screen } from '@testing-library/react';

import { FeaturesPage } from './FeaturesPage';

describe('FeaturesPage', () => {
  it('renders localized Spanish content and route-preserving navigation', () => {
    render(<FeaturesPage locale="es" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Todo lo que necesitas para crecer en la fe católica' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Categorías de funciones' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/features');
    expect(screen.getAllByRole('link', { name: 'Conoce DoIt4Jesus' })[0]).toHaveAttribute('href', '/es/about');
  });
});
