import { render } from '@testing-library/react';
import { FeatureIcon } from './FeatureIcon';

describe('FeatureIcon', () => {
  it('renders a decorative, unfocusable icon', () => {
    const { container } = render(<FeatureIcon name="cross" />);

    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveAttribute('focusable', 'false');
  });
});
