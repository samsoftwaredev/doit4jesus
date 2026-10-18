import { render, screen } from '@testing-library/react';
import { signupUrl } from '@/content/site';
import { FeaturesCTA } from './FeaturesCTA';

describe('FeaturesCTA', () => {
  it('shows the final sign-up and about actions', () => {
    render(<FeaturesCTA final />);

    expect(screen.getByRole('heading', { level: 2, name: 'Grow Closer to God, One Day at a Time.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', signupUrl);
    expect(screen.getByRole('link', { name: 'Learn About DoIt4Jesus' })).toHaveAttribute('href', '/about');
  });
});
