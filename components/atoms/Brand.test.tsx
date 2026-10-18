import { render, screen } from '@testing-library/react';
import { Brand } from './Brand';

describe('Brand', () => {
  it('links the inverse logo to the supplied destination', () => {
    render(<Brand href="/es" label="Inicio de DoIt4Jesus" inverse />);

    expect(screen.getByRole('link', { name: 'Inicio de DoIt4Jesus' })).toHaveAttribute('href', '/es');
    expect(document.querySelector('img')).toHaveAttribute('src', expect.stringContaining('logo-white.svg'));
  });
});
