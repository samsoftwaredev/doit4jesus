import { render } from '@testing-library/react';
import { JsonLd } from './JsonLd';

describe('JsonLd', () => {
  it('serializes structured data and escapes opening angle brackets', () => {
    const { container } = render(<JsonLd data={{ '@type': 'WebSite', name: '<DoIt4Jesus>' }} />);

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toHaveTextContent('\\u003cDoIt4Jesus>');
    expect(JSON.parse(script!.textContent!)).toEqual({ '@type': 'WebSite', name: '<DoIt4Jesus>' });
  });
});
