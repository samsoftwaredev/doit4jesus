import { render, screen } from '@testing-library/react';
import { AppPreviewTour } from './AppPreviewTour';

describe('AppPreviewTour', () => {
  it('links each app preview to its feature category', () => {
    render(<AppPreviewTour />);

    expect(screen.getByRole('heading', { level: 2, name: 'From Intention to Daily Practice' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(screen.getByRole('link', { name: /Your prayer dashboard/ })).toHaveAttribute('href', '#progress');
  });
});
