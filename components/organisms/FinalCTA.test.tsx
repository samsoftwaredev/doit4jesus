import { render, screen } from '@testing-library/react';
import { signupUrl } from '@/content/site';
import { FinalCTA } from './FinalCTA';

describe('FinalCTA', () => {
  it('renders the Spanish sign-up call to action', () => {
    render(<FinalCTA locale="es" />);

    expect(screen.getByRole('heading', { level: 2, name: '¡Combate el mal, una cuenta a la vez!' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Regístrate' })).toHaveAttribute('href', signupUrl);
  });
});
