import { render, screen } from '@testing-library/react';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
  it('links to the equivalent English and Spanish feature pages', () => {
    const { container } = render(<LanguageSelector locale="en" page="features" />);

    expect(screen.getByLabelText('Select language')).toBeInTheDocument();
    expect(container.querySelector('svg.language-chevron')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /English/ })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: /English/ })).toHaveAttribute('href', '/features');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/features');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('data-analytics-event', 'language_switch');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('data-analytics-target', 'es');
  });

  it('localizes the control and preserves the corresponding Spanish page', () => {
    render(<LanguageSelector locale="es" page="about" />);

    expect(screen.getByLabelText('Seleccionar idioma')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /English/ })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('href', '/es/about');
    expect(screen.getByRole('link', { name: /Español/ })).toHaveAttribute('aria-current', 'page');
  });
});
