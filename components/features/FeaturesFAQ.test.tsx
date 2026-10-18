import { render, screen } from '@testing-library/react';
import { featureFaq } from '@/data/features';
import { FeaturesFAQ } from './FeaturesFAQ';

describe('FeaturesFAQ', () => {
  it('renders every frequently asked question and answer', () => {
    render(<FeaturesFAQ />);

    expect(screen.getByRole('heading', { level: 2, name: 'Questions About DoIt4Jesus' })).toBeInTheDocument();
    expect(screen.getAllByText(/What is DoIt4Jesus\?/)).not.toHaveLength(0);
    expect(document.querySelectorAll('details')).toHaveLength(featureFaq.length);
  });
});
