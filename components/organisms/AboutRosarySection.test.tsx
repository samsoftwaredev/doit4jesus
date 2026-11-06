import { render, screen } from '@testing-library/react';
import { AboutRosarySection } from './AboutRosarySection';

describe('AboutRosarySection', () => {
  it('renders localized Rosary information', () => {
    render(<AboutRosarySection locale="es" />);

    expect(screen.getByRole('heading', { level: 2, name: 'Acerca del Rosario' })).toBeInTheDocument();
    expect(screen.getByText(/El Rosario es una devoción católica basada en la Escritura/)).toBeInTheDocument();
  });
});
