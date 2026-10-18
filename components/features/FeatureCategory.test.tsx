import { render, screen } from '@testing-library/react';
import { featureCategories } from '@/data/features';
import { FeatureCategory } from './FeatureCategory';

describe('FeatureCategory', () => {
  it('renders the category heading, feature cards, and closing perspective', () => {
    const category = featureCategories[0];
    render(<FeatureCategory category={category} index={0} />);

    expect(screen.getByRole('heading', { level: 2, name: category.title })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(category.features.length);
    expect(screen.getByText(category.closing!)).toBeInTheDocument();
  });
});
