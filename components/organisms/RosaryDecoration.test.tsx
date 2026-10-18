import { render } from '@testing-library/react';
import { RosaryDecoration } from './RosaryDecoration';

describe('RosaryDecoration', () => {
  it('keeps the decorative Rosary hidden from assistive technology', () => {
    const { container } = render(<RosaryDecoration />);

    const image = container.querySelector('img');
    expect(image).toHaveAttribute('alt', '');
    expect(image).toHaveAttribute('aria-hidden', 'true');
  });
});
