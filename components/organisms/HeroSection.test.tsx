import { render, screen } from '@testing-library/react';
import { HeroSection } from './HeroSection';
import { signupUrl } from '@/content/site';

describe('HeroSection', () => {
  it('presents the English sign-up call to action', () => {
    render(<HeroSection locale="en" />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Do It for Jesus, Every Day' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', signupUrl);
    expect(
      screen.getByRole('img', { name: 'Hand holding a phone with the DoIt4Jesus Rosary app' }),
    ).toBeInTheDocument();
  });
});
