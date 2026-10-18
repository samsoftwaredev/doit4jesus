import { render, screen } from '@testing-library/react';
import { content } from '@/content/site';
import { RosaryBenefitsSection } from './RosaryBenefitsSection';

describe('RosaryBenefitsSection', () => {
  it('renders every reason to pray the Rosary', () => {
    render(<RosaryBenefitsSection locale="en" />);

    expect(screen.getByRole('heading', { level: 2, name: 'Why Pray The Rosary?' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(content.en.home.benefits.length);
  });
});
