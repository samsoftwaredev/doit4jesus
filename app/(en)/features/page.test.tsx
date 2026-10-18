import { render, screen } from '@testing-library/react';
import FeaturesPage from './page';

describe('Features page route', () => {
  it('renders the complete features overview', () => {
    render(<FeaturesPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Everything You Need to Grow in Your Catholic Faith' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'More Than a Rosary Counter' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Questions About DoIt4Jesus' })).toBeInTheDocument();
  });
});
