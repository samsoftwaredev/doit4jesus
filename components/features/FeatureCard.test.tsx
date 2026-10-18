import { render, screen } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('renders a feature and all of its details', () => {
    render(
      <FeatureCard
        feature={{
          title: 'Rosary tracking',
          description: 'See how many Rosaries you have completed.',
          details: ['Personal completion count', 'Prayer statistics'],
          icon: 'chart',
        }}
      />,
    );

    expect(screen.getByRole('heading', { level: 3, name: 'Rosary tracking' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
