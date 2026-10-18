import { render, screen } from '@testing-library/react';
import { BenefitCard } from './BenefitCard';

describe('BenefitCard', () => {
  it('presents the benefit title and explanation', () => {
    render(<BenefitCard number="1" title="Strengthen Faith" body="Pray with the community." />);

    expect(screen.getByRole('heading', { level: 3, name: 'Strengthen Faith' })).toBeInTheDocument();
    expect(screen.getByText('Pray with the community.')).toBeInTheDocument();
  });
});
