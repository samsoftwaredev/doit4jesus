import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeRegistry } from './ThemeRegistry';

jest.mock('@mui/material-nextjs/v15-appRouter', () => ({
  AppRouterCacheProvider: ({ children }: { children: ReactNode }) => children,
}));

describe('ThemeRegistry', () => {
  it('renders children within the application theme providers', () => {
    render(
      <ThemeRegistry>
        <p>Themed content</p>
      </ThemeRegistry>,
    );

    expect(screen.getByText('Themed content')).toBeInTheDocument();
  });
});
