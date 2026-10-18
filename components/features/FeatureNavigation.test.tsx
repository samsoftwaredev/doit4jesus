import { render, screen, within } from '@testing-library/react';
import { featureCategories } from '@/data/features';
import { FeatureNavigation } from './FeatureNavigation';

describe('FeatureNavigation', () => {
  it('links to every feature category', () => {
    render(<FeatureNavigation />);

    const navigation = screen.getByRole('navigation', { name: 'Feature categories' });
    expect(within(navigation).getAllByRole('link')).toHaveLength(featureCategories.length);
    expect(within(navigation).getByRole('link', { name: featureCategories[0].label })).toHaveAttribute(
      'href',
      `#${featureCategories[0].id}`,
    );
  });
});
