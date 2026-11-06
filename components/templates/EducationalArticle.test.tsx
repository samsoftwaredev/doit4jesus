import { render, screen } from '@testing-library/react';
import { articleDraft } from '@/content/article-drafts';
import { EducationalArticle } from './EducationalArticle';

describe('EducationalArticle', () => {
  it('renders an English draft with review status, sources, and localized internal links', () => {
    render(<EducationalArticle article={articleDraft('en', 'how-to-pray-the-rosary')} />);

    expect(screen.getByRole('heading', { level: 1, name: /How to Pray the Rosary/ })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Unpublished draft');
    expect(screen.getByRole('link', { name: /Rosary Tracker/i })).toHaveAttribute('href', '/rosary-tracker-app');
    expect(screen.getByRole('link', { name: 'How to Pray the Rosary' })).toHaveAttribute('href', 'https://www.usccb.org/how-to-pray-the-rosary');
  });

  it('renders the Spanish counterpart without English review UI or English route links', () => {
    render(<EducationalArticle article={articleDraft('es', 'daily-mass-readings')} />);

    expect(screen.getByRole('heading', { level: 1, name: /Lecturas católicas diarias/ })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Borrador sin publicar');
    expect(screen.getByRole('link', { name: 'Aplicación de oración católica' })).toHaveAttribute('href', '/es/catholic-prayer-app');
  });
});
