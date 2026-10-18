import { render, screen } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('links its image, title, and call to action to the feature', () => {
    render(
      <FeatureCard
        title="Pray the Rosary"
        body="Follow the current mystery."
        image="/assets/app-rosary.webp"
        alt="The guided Rosary"
        imageFocus="rosary"
        href="/features#prayer"
      />,
    );

    expect(screen.getByRole('heading', { level: 3, name: 'Pray the Rosary' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'The guided Rosary' })).toBeInTheDocument();
    expect(screen.getAllByRole('link').every((link) => link.getAttribute('href') === '/features#prayer')).toBe(true);
  });
});
