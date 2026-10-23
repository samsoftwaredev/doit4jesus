import { render, screen } from '@testing-library/react';
import { PowerfulWeaponSection } from './PowerfulWeaponSection';

describe('PowerfulWeaponSection', () => {
  it('embeds the Rosary video with a localized accessible title', () => {
    render(<PowerfulWeaponSection locale="en" />);

    expect(screen.getByRole('heading', { level: 2, name: 'A Powerful Weapon' })).toBeInTheDocument();
    expect(screen.getByTitle('A video about the power of the Rosary')).toHaveAttribute(
      'src',
      'https://www.youtube-nocookie.com/embed/x1tH_zQ-Cz0?enablejsapi=1',
    );
  });
});
