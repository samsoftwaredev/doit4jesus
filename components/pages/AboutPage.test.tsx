import { render, screen } from '@testing-library/react';
import { appUrl, content } from '@/content/site';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  it('renders the localized mission and app action', () => {
    render(<AboutPage locale="en" />);

    expect(screen.getByRole('heading', { level: 1, name: content.en.about.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: content.en.about.cta })).toHaveAttribute('href', appUrl);
    expect(screen.getByRole('img', { name: 'Illustration of Mary in prayer' })).toBeInTheDocument();
  });
});
