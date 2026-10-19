import { render, screen } from '@testing-library/react';
import GlobalNotFound from './global-not-found';

jest.mock('@/theme/font', () => ({ siteFont: { variable: 'mock-font' } }));
const mockUsePathname = jest.fn(() => '/');
jest.mock('next/navigation', () => ({ usePathname: () => mockUsePathname() }));

describe('GlobalNotFound', () => {
  beforeEach(() => mockUsePathname.mockReturnValue('/'));

  it('offers recovery actions and accessible lost-sheep artwork', () => {
    render(<GlobalNotFound />);

    expect(screen.getByRole('heading', { level: 1, name: 'This page has wandered off.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('button', { name: 'Retrace my steps' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /A lost sheep holding a map/ })).toHaveAttribute(
      'src',
      expect.stringContaining('lost-sheep-404.png'),
    );
  });

  it('renders Spanish recovery copy and matching language links for Spanish URLs', () => {
    mockUsePathname.mockReturnValue('/es/ruta-perdida');
    render(<GlobalNotFound />);

    expect(screen.getByRole('heading', { level: 1, name: 'Esta página se apartó del camino.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/es');
    expect(screen.getByRole('button', { name: 'Regresar' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('href', '/ruta-perdida');
    expect(screen.getByRole('link', { name: 'ES' })).toHaveAttribute('href', '/es/ruta-perdida');
  });
});
