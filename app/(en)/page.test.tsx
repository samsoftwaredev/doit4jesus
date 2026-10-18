import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('@/components/pages/HomePage', () => ({
  HomePage: ({ locale }: { locale: string }) => <div data-testid="home-page" data-locale={locale} />,
}));

describe('English home route', () => {
  it('renders the home page in English', () => {
    render(<Page />);

    expect(screen.getByTestId('home-page')).toHaveAttribute('data-locale', 'en');
  });
});
