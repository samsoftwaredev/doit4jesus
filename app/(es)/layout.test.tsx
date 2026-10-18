import type { ReactElement, ReactNode } from 'react';
import SpanishLayout from './layout';

jest.mock('@/theme/font', () => ({ siteFont: { variable: 'mock-font' } }));
jest.mock('@/theme/ThemeRegistry', () => ({
  ThemeRegistry: ({ children }: { children: ReactNode }) => children,
}));

describe('SpanishLayout', () => {
  it('sets the document language and wraps page content', () => {
    const layout = SpanishLayout({ children: <p>Contenido</p> }) as ReactElement<{
      lang: string;
      className: string;
      children: ReactElement<{ children: ReactElement<{ children: ReactNode }> }>;
    }>;

    expect(layout.props.lang).toBe('es');
    expect(layout.props.className).toBe('mock-font');
    expect(layout.props.children.props.children.props.children).toEqual(<p>Contenido</p>);
  });
});
