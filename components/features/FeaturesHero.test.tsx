import { render, screen } from '@testing-library/react';
import { signupUrl } from '@/content/site';
import { FeaturesHero } from './FeaturesHero';

describe('FeaturesHero', () => {
  it('introduces the features and provides primary and in-page actions', () => {
    render(<FeaturesHero />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Everything You Need to Grow in Your Catholic Faith' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', signupUrl);
    expect(screen.getByRole('link', { name: 'Explore Features' })).toHaveAttribute('href', '#feature-navigation');
  });
});
