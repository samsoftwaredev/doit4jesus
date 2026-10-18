import { render, screen } from '@testing-library/react';
import { Eyebrow } from './Eyebrow';

describe('Eyebrow', () => {
  it('renders its label with the light treatment when requested', () => {
    render(<Eyebrow light>Our mission</Eyebrow>);

    expect(screen.getByText('Our mission')).toHaveClass('eyebrow', 'eyebrow-light');
  });
});
