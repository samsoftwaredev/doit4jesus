import { render, screen } from '@testing-library/react';
import Page, { metadata } from './page';

describe('Spanish Community Guidelines page', () => {
  it('renders the official document and localized metadata', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { level: 1, name: 'Normas de la comunidad' })).toBeInTheDocument();
    expect(screen.getByText('Fecha de vigencia: 28 de octubre de 2026')).toBeInTheDocument();
    expect(screen.getByText(/Usa los controles de la aplicación para denunciar/)).toBeInTheDocument();
    expect(metadata.alternates).toMatchObject({ canonical: 'https://www.doitforjesus.com/es/community-guidelines' });
  });
});
