import { render, screen } from '@testing-library/react';
import { content } from '@/content/site';
import { AppFeatureSection } from './AppFeatureSection';

describe('AppFeatureSection', () => {
  it('renders each localized app feature', () => {
    render(<AppFeatureSection locale="en" />);

    expect(screen.getByRole('heading', { level: 2, name: 'The Rosary App' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(content.en.home.features.length);
  });
});
