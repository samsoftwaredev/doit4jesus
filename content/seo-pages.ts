import type { Metadata } from 'next';
import { siteUrl } from './site';

export type SeoPageSlug = 'catholic-prayer-app' | 'gamified-rosary-app' | 'rosary-tracker-app' | 'examination-of-conscience-app';

type SeoPage = {
  slug: SeoPageSlug;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  lead: string;
  screen: 'prayer' | 'home' | 'rosary';
  imageAlt: string;
  introductionTitle: string;
  introduction: string[];
  highlights: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  perspectiveTitle: string;
  perspective: string;
  faqs: { question: string; answer: string }[];
  related: SeoPageSlug[];
};

export const seoPages: Record<SeoPageSlug, SeoPage> = {
  'catholic-prayer-app': {
    slug: 'catholic-prayer-app',
    title: 'A Catholic Prayer App for Rosary, Scripture, and Reflection',
    metaTitle: 'Catholic Prayer App for Rosary & Scripture | DoIt4Jesus',
    description: 'Build a steady Catholic prayer routine with a guided Rosary, daily Mass Scripture, examinations of conscience, progress tools, and community.',
    kicker: 'Catholic prayer in one place',
    lead: 'DoIt4Jesus brings daily Catholic practices into one focused experience so you can pray, listen to the Word, reflect honestly, and return tomorrow.',
    screen: 'prayer',
    imageAlt: 'DoIt4Jesus prayer screen with the daily Rosary and Catholic Mass readings',
    introductionTitle: 'A practical starting point for daily Catholic life',
    introduction: [
      'A prayer app is most useful when it helps you begin. DoIt4Jesus gives the Rosary, the daily Catholic Mass readings, and reflection a clear place in your day without asking you to search across unrelated tools.',
      'The dashboard keeps recent activity and progress visible, while community features can remind you that Catholic prayer is never merely an isolated project. The app supports a rhythm of prayer; it does not replace the Mass, the Sacraments, a parish, or quiet time with God away from a screen.',
    ],
    highlights: [
      { title: 'Guided Rosary prayer', body: 'Follow the mystery of the day, its spiritual fruit, and each prayer in a focused experience with audio support.' },
      { title: 'Daily Catholic Scripture', body: 'Read the day’s Mass readings with their references, liturgical title and season, and a featured verse for reflection.' },
      { title: 'Examination of conscience', body: 'Use guided questions for adults, teens, and children to reflect privately and prepare your heart for Confession.' },
      { title: 'Progress and community', body: 'See XP, levels, badges, friends, and community activity as encouragement to keep returning to meaningful practices.' },
    ],
    stepsTitle: 'A simple Catholic rhythm for ordinary days',
    steps: [
      { title: 'Begin with prayer', body: 'Open the mystery assigned to the day and give your attention to Christ through the Rosary.' },
      { title: 'Listen to the Word', body: 'Read the daily Mass passages slowly and notice where the Church is in the liturgical year.' },
      { title: 'Reflect and live it', body: 'Examine your choices, encourage a friend, and carry what you received into family, parish, work, and service.' },
    ],
    perspectiveTitle: 'Technology should point beyond itself',
    perspective: 'DoIt4Jesus is a companion for Catholic habits, not a substitute for the Sacraments, pastoral care, spiritual direction, or prayer without a device. Its best outcome is helping you put the phone down and live your faith more intentionally.',
    faqs: [
      { question: 'What Catholic prayers are available in DoIt4Jesus?', answer: 'The app centers on a guided Rosary experience and also supports daily Catholic Scripture, prayer intentions, and shared prayer activity.' },
      { question: 'Does the app include daily Mass readings?', answer: 'Yes. The prayer area includes the day’s readings, Scripture references, liturgical context, and a way to mark the reading complete.' },
      { question: 'Can a Catholic prayer app replace Mass or Confession?', answer: 'No. DoIt4Jesus is designed to support Catholic practice, not replace the Mass, Confession, parish life, or the guidance of a priest.' },
    ],
    related: ['gamified-rosary-app', 'rosary-tracker-app', 'examination-of-conscience-app'],
  },
  'gamified-rosary-app': {
    slug: 'gamified-rosary-app',
    title: 'A Gamified Rosary App That Keeps Prayer at the Center',
    metaTitle: 'Gamified Rosary App for Catholic Prayer | DoIt4Jesus',
    description: 'Use a Rosary Garden, streaks, XP, levels, badges, and community encouragement to build consistency while keeping prayer—not points—at the center.',
    kicker: 'Meaningful motivation',
    lead: 'DoIt4Jesus uses familiar game-inspired feedback to make steady participation visible while remaining clear that holiness, grace, and prayer cannot be reduced to a score.',
    screen: 'home',
    imageAlt: 'DoIt4Jesus dashboard showing the Rosary Garden, streaks, XP, and levels',
    introductionTitle: 'What does it mean to gamify the Rosary?',
    introduction: [
      'Gamification can make a repeated habit easier to see. In DoIt4Jesus, a completed Rosary can contribute to a streak, grow the Rosary Garden, add eligible progress, and mark a milestone. Those signals offer a small reason to return when attention or discipline is difficult.',
      'The system is deliberately limited. A level reflects recorded activity inside the app; it cannot measure the depth of someone’s prayer, their holiness, the grace they have received, or their standing before God. The counter is useful only when it sends attention back to prayer.',
    ],
    highlights: [
      { title: 'Rosary Garden', body: 'Each completed Rosary plants a flower, creating a visual record of prayer across monthly and yearly views.' },
      { title: 'Streaks and milestones', body: 'See consistent participation over time and begin again without treating a missed day as a verdict on your faith.' },
      { title: 'XP, levels, and badges', body: 'Receive visible feedback for eligible app activities and understand your progress toward the next milestone.' },
      { title: 'Friendly community motivation', body: 'Connect with friends and use weekly or Rosary leaderboards as encouragement rather than a measure of spiritual worth.' },
    ],
    stepsTitle: 'How game-inspired progress supports the habit',
    steps: [
      { title: 'Pray the Rosary', body: 'Enter the guided experience and stay with the mystery, its fruit, and each prayer.' },
      { title: 'Record participation', body: 'A completed activity updates the relevant streak, garden, milestone, or in-app progress.' },
      { title: 'Return for the right reason', body: 'Let the visual reminder help you begin, then give your attention to prayer rather than the number.' },
    ],
    perspectiveTitle: 'Grace is not a game mechanic',
    perspective: 'Points can recognize an action recorded by software. They cannot judge an interior life. DoIt4Jesus uses progression as a gentle prompt toward fidelity, not as a spiritual ranking system.',
    faqs: [
      { question: 'Does DoIt4Jesus turn prayer into a competition?', answer: 'The app includes optional progress and community feedback, but those features measure participation only. They do not measure holiness or the quality of prayer.' },
      { question: 'What is the Rosary Garden?', answer: 'It is a visual garden that grows as Rosaries are completed, with monthly and yearly views that make consistency tangible.' },
      { question: 'What happens if I lose a prayer streak?', answer: 'You begin again. A streak is an encouragement tool, not a judgment, and prayer remains worthwhile no matter what number appears in the app.' },
    ],
    related: ['rosary-tracker-app', 'catholic-prayer-app', 'examination-of-conscience-app'],
  },
  'rosary-tracker-app': {
    slug: 'rosary-tracker-app',
    title: 'A Rosary Tracker That Keeps the Mysteries in Focus',
    metaTitle: 'Rosary Tracker App for Prayer Streaks | DoIt4Jesus',
    description: 'Track completed Rosaries, prayer streaks, garden progress, and milestones while staying focused on the mysteries of Christ.',
    kicker: 'Consistency with perspective',
    lead: 'DoIt4Jesus records your Rosary activity so you can notice a pattern, celebrate perseverance, and return to prayer without confusing a count with the value of prayer itself.',
    screen: 'rosary',
    imageAlt: 'Guided Rosary tracker showing the current mystery and prayer progress',
    introductionTitle: 'Track the habit without losing the prayer',
    introduction: [
      'A Rosary tracker can answer a practical question: have I made time to pray consistently? DoIt4Jesus records completed Rosaries, displays your current streak, and places those numbers beside a guided experience centered on the mysteries of Christ.',
      'The app also turns completed Rosaries into flowers in the Rosary Garden and can show related milestones on your dashboard. These records are meant to help memory and discipline. They are not a judgment of attention, sincerity, or spiritual growth.',
    ],
    highlights: [
      { title: 'Today’s mystery', body: 'Open the Joyful, Sorrowful, Glorious, or Luminous Mystery assigned to the day and see its spiritual fruit.' },
      { title: 'Guided prayer progress', body: 'Follow each prayer without losing your place and use audio support when it helps you remain attentive.' },
      { title: 'Completion history', body: 'See completed Rosaries and your current streak together on a personal dashboard.' },
      { title: 'A garden of consistency', body: 'Let each completed Rosary plant a flower and create a visual reminder of the days you returned to prayer.' },
    ],
    stepsTitle: 'From today’s mystery to a lasting habit',
    steps: [
      { title: 'Choose today’s Rosary', body: 'Begin with the mystery for the day instead of spending time deciding where to start.' },
      { title: 'Pray with guidance', body: 'Move through the beads, mystery, spiritual fruit, and prayers at a focused pace.' },
      { title: 'See the record', body: 'After completion, view your streak, total Rosaries, garden, and relevant milestones as a reminder to return.' },
    ],
    perspectiveTitle: 'The counter serves the contemplation',
    perspective: 'The purpose of the Rosary is contemplation of Christ with Mary. Tracking can support discipline, but the number of completed Rosaries cannot describe the attention, struggle, peace, or grace within a time of prayer.',
    faqs: [
      { question: 'Can I track completed Rosaries?', answer: 'Yes. DoIt4Jesus records supported Rosary completions and displays the total, current streak, garden activity, and related progress.' },
      { question: 'Does the tracker include all four sets of mysteries?', answer: 'Yes. The guided experience includes the Joyful, Sorrowful, Glorious, and Luminous Mysteries.' },
      { question: 'Is Rosary tracking the same as measuring prayer?', answer: 'No. Tracking records an app activity. It cannot measure attention, devotion, grace, or the spiritual value of someone’s prayer.' },
    ],
    related: ['gamified-rosary-app', 'catholic-prayer-app', 'examination-of-conscience-app'],
  },
  'examination-of-conscience-app': {
    slug: 'examination-of-conscience-app',
    title: 'An Examination of Conscience App for Honest Reflection',
    metaTitle: 'Examination of Conscience App | DoIt4Jesus',
    description: 'Reflect with guided examinations of conscience for adults, teens, and children as you prepare your heart for Catholic Confession.',
    kicker: 'Prepare your heart',
    lead: 'DoIt4Jesus provides age-appropriate questions for private reflection so Catholics can examine thoughts, words, actions, and habits before Confession.',
    screen: 'home',
    imageAlt: 'A guided examination of conscience question in the DoIt4Jesus app',
    introductionTitle: 'A quiet guide before Confession',
    introduction: [
      'An examination of conscience is a prayerful review of life in the light of God’s love and commandments. The DoIt4Jesus guide presents questions that can help you slow down, remember honestly, and approach repentance with greater intention.',
      'Separate guides for adults, teens, and children make the language more approachable at different stages of life. Your reflection remains personal. The tool can help with preparation, but it cannot absolve sin, replace sacramental Confession, or take the place of wise pastoral guidance.',
    ],
    highlights: [
      { title: 'Guides for different ages', body: 'Choose an examination written for adults, teenagers, or children rather than forcing one format onto every person.' },
      { title: 'Questions for private reflection', body: 'Consider thoughts, words, actions, omissions, relationships, responsibilities, and recurring habits.' },
      { title: 'Preparation for Confession', body: 'Use the guide to remember what you need to bring honestly to the Sacrament of Reconciliation.' },
      { title: 'Reflection within a wider rhythm', body: 'Place examination beside the Rosary, daily Scripture, and practical resolutions for life away from the screen.' },
    ],
    stepsTitle: 'How to use the examination thoughtfully',
    steps: [
      { title: 'Begin with prayer', body: 'Ask for honesty, humility, and confidence in God’s mercy before reviewing individual questions.' },
      { title: 'Reflect without rushing', body: 'Read each prompt carefully and notice patterns as well as individual actions.' },
      { title: 'Take the next real step', body: 'Bring serious sins to Confession, seek appropriate guidance, make amends where possible, and choose a concrete resolution.' },
    ],
    perspectiveTitle: 'A preparation tool, not a sacrament',
    perspective: 'An app cannot forgive sins or replace a priest. If a question creates confusion, serious distress, or uncertainty about moral responsibility, speak with a trusted priest or qualified professional rather than relying on software alone.',
    faqs: [
      { question: 'Does DoIt4Jesus include an examination for children or teens?', answer: 'Yes. The app includes separate guided examinations for adults, teenagers, and children.' },
      { question: 'Is my examination of conscience a replacement for Confession?', answer: 'No. It is a private preparation tool. Sacramental absolution is received through Confession with a priest.' },
      { question: 'When should I use an examination of conscience?', answer: 'Catholics commonly use one before Confession and may also use a shorter examination as part of regular evening reflection.' },
    ],
    related: ['catholic-prayer-app', 'gamified-rosary-app', 'rosary-tracker-app'],
  },
};

export const seoPagePath = (slug: SeoPageSlug) => `/${slug}`;

export function seoPageMetadata(slug: SeoPageSlug): Metadata {
  const page = seoPages[slug];
  const url = `${siteUrl}${seoPagePath(slug)}`;

  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'DoIt4Jesus',
      locale: 'en_US',
      url,
      title: page.metaTitle,
      description: page.description,
      images: [{ url: `${siteUrl}/og-image.jpg`, width: 512, height: 512, alt: 'DoIt4Jesus Catholic prayer app' }],
    },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.description, images: [`${siteUrl}/og-image.jpg`] },
  };
}
