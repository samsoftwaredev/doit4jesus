import type { ReactElement, ReactNode } from 'react';
import EnglishLayout from './layout';

jest.mock('@/theme/font', () => ({ siteFont: { variable: 'mock-font' } }));
jest.mock('@/components/analytics/AnalyticsProvider', () => ({
  AnalyticsProvider: ({ children }: { children: ReactNode }) => children,
}));
jest.mock('@/theme/ThemeRegistry', () => ({
  ThemeRegistry: ({ children }: { children: ReactNode }) => children,
}));

describe('EnglishLayout', () => {
  it('sets the document language and wraps page content', () => {
    const layout = EnglishLayout({ children: <p>English content</p> }) as ReactElement<{
      lang: string;
      className: string;
      children: ReactElement<{ children: ReactElement<{ children: ReactElement<{ children: ReactNode }> }> }>;
    }>;

    expect(layout.props.lang).toBe('en');
    expect(layout.props.className).toBe('mock-font');
    expect(layout.props.children.props.children.props.children.props.children).toEqual(<p>English content</p>);
  });
});
