import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('@/components/pages/LegalPage', () => ({
  LegalPage: ({ locale, page }: { locale: string; page: string }) => (
    <div data-testid="legal-page" data-locale={locale} data-page={page} />
  ),
}));

describe('Spanish privacy route', () => {
  it('renders the Spanish privacy policy', () => {
    render(<Page />);

    expect(screen.getByTestId('legal-page')).toHaveAttribute('data-locale', 'es');
    expect(screen.getByTestId('legal-page')).toHaveAttribute('data-page', 'privacy');
  });
});
