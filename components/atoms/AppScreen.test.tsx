import { render, screen } from '@testing-library/react';
import { AppScreen } from './AppScreen';

describe('AppScreen', () => {
  it('renders the selected app screenshot with descriptive alternative text', () => {
    render(<AppScreen screen="community" className="featured" />);

    const image = screen.getByRole('img', {
      name: 'DoIt4Jesus community page showing prayer leaderboards',
    });
    expect(image).toHaveClass('app-screen-community', 'featured');
  });
});
