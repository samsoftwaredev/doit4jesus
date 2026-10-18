import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('@/components/pages/SearchLandingPage', () => ({
  SearchLandingPage: ({ slug }: { slug: string }) => <div data-testid="search-page" data-slug={slug} />,
}));

describe('Examination of conscience route', () => {
  it('renders the matching search landing page', () => {
    render(<Page />);

    expect(screen.getByTestId('search-page')).toHaveAttribute('data-slug', 'examination-of-conscience-app');
  });
});
