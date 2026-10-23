import { render, screen } from '@testing-library/react';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
  it('links to the equivalent English and Spanish feature pages', () => {
    render(<LanguageSelector locale="en" page="features" />);

    expect(screen.getByLabelText('Select language')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /English/ })).toHaveAttribute('href', '/features');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/features');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('data-analytics-event', 'language_switch');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('data-analytics-target', 'es');
  });
});
