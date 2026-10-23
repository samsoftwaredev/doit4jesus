import { render, screen } from '@testing-library/react';
import { legalDocument } from '@/content/legal';
import { LegalPage } from './LegalPage';

describe('LegalPage', () => {
  it('renders the privacy policy, effective date, and contact address', () => {
    const document = legalDocument('en', 'privacy');
    render(<LegalPage locale="en" page="privacy" />);

    expect(screen.getByRole('heading', { level: 1, name: document.title })).toBeInTheDocument();
    expect(screen.getByText('Effective date: October 22, 2026')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '3.7. Google Analytics and Site Measurement' })).toBeInTheDocument();
    expect(screen.getByText(/does not load before you accept analytics/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Google Privacy Policy' })).toHaveAttribute('href', 'https://policies.google.com/privacy');
    expect(screen.getByRole('link', { name: 'admin@doit4jesus.com' })).toHaveAttribute(
      'href',
      'mailto:admin@doit4jesus.com',
    );
  });

  it('renders the equivalent Spanish analytics disclosure', () => {
    render(<LegalPage locale="es" page="privacy" />);

    expect(screen.getByText('Fecha de vigencia: 22 de octubre de 2026')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '3.7. Google Analytics y medición del sitio' })).toBeInTheDocument();
    expect(screen.getByText(/no se carga antes de que aceptes la analítica/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Política de Privacidad de Google' })).toHaveAttribute('href', 'https://policies.google.com/privacy');
  });
});
