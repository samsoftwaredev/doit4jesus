import { render, screen } from '@testing-library/react';
import { HeroSection } from './HeroSection';
import { signupUrl } from '@/content/site';

describe('HeroSection', () => {
  it('presents the English sign-up call to action', () => {
    render(<HeroSection locale="en" />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Build a Daily Catholic Prayer Habit With DoIt4Jesus' }),
    ).toBeInTheDocument();
    expect(screen.getByText('With DoIt4Jesus')).toHaveClass('hero-title-accent');
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', signupUrl);
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('data-analytics-id', 'home_hero_signup');
    expect(screen.queryByText('Account registration is available to U.S. residents age 18 and older.')).not.toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Hand holding a phone with the DoIt4Jesus Rosary app' }),
    ).toBeInTheDocument();
  });

  it('keeps the Spanish homepage hero localized without the registration notice', () => {
    render(<HeroSection locale="es" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Crea un hábito diario de oración católica con DoIt4Jesus' })).toBeInTheDocument();
    expect(screen.getByText('con DoIt4Jesus')).toHaveClass('hero-title-accent');
    expect(screen.queryByText('El registro de cuentas está disponible para residentes de Estados Unidos mayores de 18 años.')).not.toBeInTheDocument();
  });
});
