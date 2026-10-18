import { render, screen } from '@testing-library/react';
import { PageIntro } from './PageIntro';

describe('PageIntro', () => {
  it('renders the eyebrow, title, and optional lead', () => {
    render(<PageIntro eyebrow="Our mission" title="Pray together" lead="Grow closer to Christ." />);

    expect(screen.getByText('Our mission')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Pray together' })).toBeInTheDocument();
    expect(screen.getByText('Grow closer to Christ.')).toBeInTheDocument();
  });
});
