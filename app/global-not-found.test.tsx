import { render, screen } from '@testing-library/react';
import GlobalNotFound from './global-not-found';

jest.mock('@/theme/font', () => ({ siteFont: { variable: 'mock-font' } }));

describe('GlobalNotFound', () => {
  it('offers recovery actions and an accessible illustration', () => {
    render(<GlobalNotFound />);

    expect(screen.getByRole('heading', { level: 1, name: 'This URL has gone astray.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Take me home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Open the prayer app' })).toHaveAttribute(
      'href',
      'https://app.doitforjesus.com/',
    );
    expect(screen.getByRole('img', { name: /A sheep that wandered away/ })).toBeInTheDocument();
  });
});
