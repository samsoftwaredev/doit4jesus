import { render, screen } from '@testing-library/react';
import { seoPages } from '@/content/seo-pages';
import { appUrl, signupUrl } from '@/content/site';
import { SearchLandingPage } from './SearchLandingPage';

describe('SearchLandingPage', () => {
  it('renders the selected search landing content and conversion actions', () => {
    const page = seoPages['rosary-tracker-app'];
    const { container } = render(<SearchLandingPage slug="rosary-tracker-app" />);

    expect(screen.getByRole('heading', { level: 1, name: page.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Open DoIt4Jesus' })).toHaveAttribute('href', appUrl);
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', signupUrl);
    expect(container.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(3);
  });
});
