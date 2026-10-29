import { render, screen } from '@testing-library/react';
import { legalDocument } from '@/content/legal';
import { LegalPage } from './LegalPage';

describe('LegalPage', () => {
  it('renders the English privacy policy, retention, and contact address', () => {
    const document = legalDocument('en', 'privacy');
    render(<LegalPage locale="en" page="privacy" />);

    expect(screen.getByRole('heading', { level: 1, name: document.title })).toBeInTheDocument();
    expect(screen.getByText('Effective date: October 28, 2026')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '5. Analytics, Email, and Choices' })).toBeInTheDocument();
    expect(screen.getByText(/loads Google Analytics only after you accept analytics/)).toBeInTheDocument();
    expect(screen.getByText(/reviewed prayer intentions.*one month/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Google Privacy Policy' })[0]).toHaveAttribute('href', 'https://policies.google.com/privacy');
    expect(screen.getByRole('link', { name: 'admin@doit4jesus.com' })).toHaveAttribute(
      'href',
      'mailto:admin@doit4jesus.com',
    );
  });

  it('renders the equally official Spanish privacy disclosure', () => {
    render(<LegalPage locale="es" page="privacy" />);

    expect(screen.getByText('Fecha de vigencia: 28 de octubre de 2026')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '5. Analítica, correo y opciones' })).toBeInTheDocument();
    expect(screen.getByText(/carga Google Analytics solo si aceptas la analítica/)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Política de Privacidad de Google' })[0]).toHaveAttribute('href', 'https://policies.google.com/privacy?hl=es');
  });

  it('cross-links the Terms, Privacy Policy, and Community Guidelines', () => {
    render(<LegalPage locale="en" page="terms" />);

    expect(screen.getByRole('link', { name: 'Read the Community Guidelines' })).toHaveAttribute('href', '/community-guidelines');
    expect(screen.getByRole('link', { name: 'Read the Privacy Policy' })).toHaveAttribute('href', '/privacy-policy');
    expect(screen.getAllByText(/5900 Balcones Drive, Suite 100/)).not.toHaveLength(0);
    expect(screen.getAllByText(/469-646-7286/)).not.toHaveLength(0);
    expect(screen.getByText(/Copyright Contact/)).toBeInTheDocument();
    expect(screen.queryByText(/DMCA Agent/)).not.toBeInTheDocument();
  });

  it('keeps the MVP section counts synchronized in English and Spanish', () => {
    expect(legalDocument('en', 'terms').sections).toHaveLength(9);
    expect(legalDocument('es', 'terms').sections).toHaveLength(9);
    expect(legalDocument('en', 'privacy').sections).toHaveLength(8);
    expect(legalDocument('es', 'privacy').sections).toHaveLength(8);
    expect(legalDocument('en', 'guidelines').sections).toHaveLength(6);
    expect(legalDocument('es', 'guidelines').sections).toHaveLength(6);
  });
});
