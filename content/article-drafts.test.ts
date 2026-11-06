import { articleDrafts, articleDraftSlugs } from './article-drafts';

describe('educational article drafts', () => {
  it('keeps all five English and Spanish drafts unpublished and paired', () => {
    expect(articleDraftSlugs).toHaveLength(5);
    for (const slug of articleDraftSlugs) {
      const english = articleDrafts.en[slug];
      const spanish = articleDrafts.es[slug];
      expect(english.status).toBe('draft-awaiting-human-review');
      expect(spanish.status).toBe('draft-awaiting-human-review');
      expect(english.publicationDate).toBeNull();
      expect(spanish.publicationDate).toBeNull();
      expect(spanish.proposedPath).toBe(`/es/${slug}`);
      expect(english.sources.length).toBeGreaterThan(0);
      expect(spanish.sources.length).toBeGreaterThan(0);
    }
  });

  it('does not reproduce Scripture in the daily-readings drafts', () => {
    for (const locale of ['en', 'es'] as const) {
      const draft = articleDrafts[locale]['daily-mass-readings'];
      expect(JSON.stringify(draft.sections)).toMatch(/reproduces no Scripture|no reproduce texto bíblico/);
      expect(draft.sources.some((source) => source.href.includes('/permissions'))).toBe(true);
    }
  });
});
