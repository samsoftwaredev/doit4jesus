import { render, screen } from '@testing-library/react';
import { legalDocument } from '@/content/legal';
import { LegalPage } from './LegalPage';

describe('LegalPage', () => {
  it('renders the privacy policy, effective date, and contact address', () => {
    const document = legalDocument('en', 'privacy');
    render(<LegalPage locale="en" page="privacy" />);

    expect(screen.getByRole('heading', { level: 1, name: document.title })).toBeInTheDocument();
    expect(screen.getByText('Effective date: June 8, 2024')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'admin@doit4jesus.com' })).toHaveAttribute(
      'href',
      'mailto:admin@doit4jesus.com',
    );
  });
});
