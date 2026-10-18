import { render, screen } from '@testing-library/react';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
  it('offers English and the Spanish home fallback from the features page', () => {
    render(<LanguageSelector locale="en" page="features" />);

    expect(screen.getByLabelText('Select language')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /English/ })).toHaveAttribute('href', '/features');
    expect(screen.getByRole('link', { name: /Español · Inicio/ })).toHaveAttribute('href', '/es');
  });
});
