import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('@/components/pages/AboutPage', () => ({
  AboutPage: ({ locale }: { locale: string }) => <div data-testid="about-page" data-locale={locale} />,
}));

describe('English about route', () => {
  it('renders the about page in English', () => {
    render(<Page />);

    expect(screen.getByTestId('about-page')).toHaveAttribute('data-locale', 'en');
  });
});
