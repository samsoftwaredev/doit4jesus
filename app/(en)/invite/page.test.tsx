import { render, screen } from '@testing-library/react';
import Page, { metadata } from './page';

jest.mock('@/components/pages/InvitePage', () => ({
  InvitePage: ({ locale }: { locale: string }) => <div data-testid="invite-page" data-locale={locale} />,
}));

describe('English invite route', () => {
  it('renders the invite page in English and stays out of search results', () => {
    render(<Page />);

    expect(screen.getByTestId('invite-page')).toHaveAttribute('data-locale', 'en');
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
