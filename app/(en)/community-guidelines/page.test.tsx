import { render, screen } from '@testing-library/react';
import Page, { metadata } from './page';

describe('English Community Guidelines page', () => {
  it('renders the official document and localized metadata', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { level: 1, name: 'Community Guidelines' })).toBeInTheDocument();
    expect(screen.getByText('Effective date: October 28, 2026')).toBeInTheDocument();
    expect(screen.getByText(/Use in-app controls to report a user/)).toBeInTheDocument();
    expect(metadata.alternates).toMatchObject({ canonical: 'https://www.doitforjesus.com/community-guidelines' });
  });
});
