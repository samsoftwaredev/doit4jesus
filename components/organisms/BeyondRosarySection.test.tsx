import { render, screen } from '@testing-library/react';
import { content } from '@/content/site';
import { BeyondRosarySection } from './BeyondRosarySection';

describe('BeyondRosarySection', () => {
  it('renders the expanded faith features and features-page action', () => {
    render(<BeyondRosarySection locale="en" />);

    expect(screen.getByRole('heading', { level: 2, name: 'More Ways to Grow in Faith' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(content.en.home.beyondRosary.features.length);
    expect(screen.getByRole('link', { name: /Learn more about all features/ })).toHaveAttribute('href', '/features');
  });
});
