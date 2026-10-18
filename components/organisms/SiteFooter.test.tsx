import { render, screen, within } from '@testing-library/react';
import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  it('renders English footer, social, and discovery navigation', () => {
    render(<SiteFooter locale="en" />);

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} DoIt4Jesus`))).toBeInTheDocument();
    expect(within(screen.getByRole('navigation', { name: 'Social media' })).getByRole('link', { name: 'YouTube' })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(screen.getByRole('navigation', { name: 'Explore DoIt4Jesus guides' })).toBeInTheDocument();
  });
});
