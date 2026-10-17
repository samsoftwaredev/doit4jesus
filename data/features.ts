/** Public claims are limited to capabilities verified in the app repository. */
export type FeatureIcon = 'rosary' | 'book' | 'cross' | 'shield' | 'spark' | 'people' | 'globe' | 'heart' | 'calendar' | 'chart' | 'star' | 'church';

export type Feature = {
  title: string;
  description: string;
  details: string[];
  icon: FeatureIcon;
};

export type FeatureCategory = {
  id: string;
  label: string;
  title: string;
  introduction: string;
  closing?: string;
  features: Feature[];
};

/** Switch a flag on only after the corresponding user-facing app feature is verified. */
export const futureFeatureFlags = {
  rosaryGarden: true,
  catholicKnowledgeLessons: false,
  catholicQuizzes: false,
  spiritualBattle: false,
  dailyMissions: false,
  saintProfiles: false,
  avatarProgression: false,
  catholicLocations: false,
  deviceActivityIntegration: false,
  notificationPreferences: false,
} as const;

export const featureCategories: FeatureCategory[] = [
  {
    id: 'prayer', label: 'Prayer', title: 'Pray the Rosary With Purpose',
    introduction: 'A Catholic prayer app should help you actually pray. DoIt4Jesus gives the Rosary a central place in your day, with a guided experience, the mysteries of the day, and a record of the prayers you complete. Whether you are learning the Rosary or returning after a long break, the goal is the same: make room to contemplate Christ with Mary. You can begin with today’s mystery, pray alongside a scheduled community session, or simply open the app as a reminder to set aside time for prayer. The experience is meant to support attention and perseverance, not turn every Hail Mary into a point on a scoreboard.',
    closing: 'The Joyful, Sorrowful, Glorious, and Luminous Mysteries keep the life of Christ at the heart of the practice. The counter is useful; the prayer is the point.',
    features: [
      { title: 'Today’s Rosary', icon: 'rosary', description: 'Open the mystery assigned to the day and join a guided, audio-supported Rosary experience.', details: ['A clear entry point for today’s prayer', 'Mysteries organized by day', 'Live Rosary sessions when available'] },
      { title: 'Rosary tracking', icon: 'chart', description: 'See how many Rosaries you have completed and return to prayer with a sense of continuity. A simple record can encourage fidelity without reducing devotion to a number.', details: ['Personal completion count', 'Prayer statistics on your dashboard', 'Shareable progress when you choose'] },
      { title: 'Rosary streaks', icon: 'spark', description: 'A daily streak gives you a gentle nudge to come back. It can help you build a Catholic prayer habit, but missing a day is never a verdict on your faith.', details: ['Current streak on the dashboard', 'Consistency over time', 'Motivation without spiritual scorekeeping'] },
      { title: 'Prayer with others', icon: 'people', description: 'Rosary events and community activity make it easier to pray alongside other Catholics, even when you cannot gather in the same room.', details: ['Shared prayer sessions', 'Community participation', 'Space to support prayer requests'] },
    ],
  },
  {
    id: 'scripture', label: 'Word of God', title: 'Read the Daily Catholic Scriptures',
    introduction: 'The Rosary leads us into the life of Jesus; Scripture helps us listen to him each day. The Daily Scripture area brings the Catholic Mass readings into the same place as your prayer routine. You can see the day’s liturgical title and season, read the passages, and mark the reading complete after taking time with the Word.',
    closing: 'The readings are presented for prayerful reading, not as a replacement for hearing the Word proclaimed at Mass. References and liturgical context help you locate the passages and return to them later.',
    features: [
      { title: 'Daily Mass readings', icon: 'book', description: 'Find the First Reading, responsorial Psalm, Gospel, and Second Reading when the liturgy includes one. The app shows the readings for the day in an approachable format.', details: ['Reading references and text', 'First Reading, Psalm, Gospel, and applicable Second Reading', 'Featured verse for reflection'] },
      { title: 'Liturgical context', icon: 'calendar', description: 'See the liturgical season and the title of the day beside the readings. It is a simple way to stay aware of Advent, Christmas, Lent, Easter, and Ordinary Time as the Church prays through the year.', details: ['Liturgical season', 'Title of the day', 'Daily reading date'] },
      { title: 'Reading completion', icon: 'spark', description: 'Mark today’s Scripture as read and include this quiet act of attention in your app progress. The completion state is there to support a regular habit, not to rush you through the text.', details: ['Daily completion state', 'Progress linked to app XP', 'English and Spanish reading support'] },
    ],
  },
  {
    id: 'learning', label: 'Learning', title: 'Learn and Reflect on the Catholic Faith',
    introduction: 'Catholic growth involves understanding as well as action. DoIt4Jesus connects prayer with resources and guided reflection so a question can become an invitation to learn. Its current learning experience is focused on articles and examinations of conscience; bite-sized catechism courses, quizzes, and saint profiles are not advertised here until they are available in the app.',
    features: [
      { title: 'Catholic resources', icon: 'book', description: 'Explore faith-oriented reading beyond the dashboard. Short-form resources offer a place to begin when you want to understand a practice more deeply or carry a theme from prayer into the rest of your day.', details: ['Faith articles in the app', 'Further reading outside the prayer flow', 'A path from curiosity to reflection'] },
      { title: 'Examination of conscience', icon: 'cross', description: 'Use guided questions to reflect honestly on your thoughts, words, actions, and habits. The app includes examinations tailored for adults, teens, and children, making this practice more approachable at different stages of life.', details: ['Age-appropriate guides', 'Questions for private reflection', 'Preparation for Confession'] },
    ],
    closing: 'An examination of conscience can prepare your heart for repentance and the Sacrament of Reconciliation. An app cannot absolve sins or take the place of a priest, Confession, or wise pastoral care.',
  },
  {
    id: 'growth', label: 'Spiritual Growth', title: 'Build Consistency Without Losing the Meaning',
    introduction: 'A lasting prayer habit is usually built through ordinary, repeated choices. DoIt4Jesus uses visible progress to encourage those choices while keeping its perspective clear: grace is not a game mechanic, and the worth of a person cannot be counted. Small prompts to pray, read, and return can help you make space for God amid a busy day.',
    features: [
      { title: 'A rhythm you can return to', icon: 'heart', description: 'The dashboard brings today’s Rosary, daily Scripture, and your recent prayer activity together. Instead of searching through different tools, you have a practical starting point for a daily Catholic routine.', details: ['Prayer and Scripture in one dashboard', 'A quick view of today’s Rosary', 'Recent activity and progress'] },
      { title: 'Conscience and conversion', icon: 'shield', description: 'Reflection asks a deeper question than “Did I keep a streak?” An examination of conscience helps you notice habits, seek mercy, and make a concrete resolution. It can sit alongside prayer tracking without being treated as another score.', details: ['Private self-examination', 'Adult, teen, and child guides', 'A bridge toward the Sacrament of Reconciliation'] },
    ],
  },
  {
    id: 'progress', label: 'Progress', title: 'Level Up Your Faith—With the Right Perspective',
    introduction: 'Game-inspired feedback can make consistency feel tangible. DoIt4Jesus records participation through XP, levels, milestones, badges, and Rosary statistics. These systems recognize activity inside the app; they do not measure holiness, grace, merit, or anyone’s standing before God.',
    features: [
      { title: 'XP and levels', icon: 'spark', description: 'Eligible actions such as completing a Rosary, reading the daily Scripture, participating in prayer, and inviting a friend can contribute to in-app progress. Your current level, total XP, and progress toward the next level make the system easy to understand.', details: ['Current level and title', 'Lifetime XP', 'Progress toward the next level'] },
      { title: 'Badges and milestones', icon: 'star', description: 'Achievements provide a small moment of encouragement when you reach a meaningful app milestone. They can mark participation and persistence, and some are designed to be shared with others.', details: ['Achievement collection', 'Earned and unearned states', 'Share options for supported badges'] },
      { title: 'Prayer statistics', icon: 'chart', description: 'Your dashboard offers a view of completed Rosaries and your streak. These numbers are most useful as a reminder to keep praying, not as a measure of the quality of your prayer.', details: ['Total Rosaries completed', 'Current streak', 'Shareable prayer journey'] },
    ],
    closing: 'No amount of XP makes someone holier than another person. The purpose of progression is to encourage participation and steady habits while directing attention back to prayer and real life.',
  },
  {
    id: 'community', label: 'Community', title: 'Pray With Catholics Around the World',
    introduction: 'Faith is lived in communion. DoIt4Jesus makes prayer feel less isolated by connecting people through friend requests, shared Rosary events, prayer activity, and leaderboards. The strongest use of these tools is encouragement: noticing that someone else is praying can help you begin again, too.',
    features: [
      { title: 'Catholic friends', icon: 'people', description: 'Invite friends, respond to requests, and keep your prayer companions close. The friend system supports accountability and connection without requiring your entire prayer life to become public.', details: ['Send and respond to requests', 'Manage your connections', 'View supported friend activity'] },
      { title: 'Holy competition', icon: 'star', description: 'Weekly and Rosary leaderboards show participation across the community. Use them as friendly motivation to be more disciplined—not as a contest to prove who is holier. A person’s interior life is known to God, not a ranking.', details: ['Weekly leaderboard', 'Rosary participation rankings', 'Friends and community encouragement'] },
      { title: 'A global prayer map', icon: 'globe', description: 'The community map shows prayer activity by city and country rather than a person’s exact position. It offers a glimpse of Catholics praying across the world while keeping precise personal location out of the experience.', details: ['Generalized prayer geography', 'Community activity at a glance', 'No precise user coordinates in the public map'] },
      { title: 'Live Rosary events', icon: 'rosary', description: 'Join prayer sessions with others when events are available. Shared prayer can turn a solitary intention into a moment of community, especially for someone beginning a regular Rosary habit.', details: ['Rosary event listings', 'Live participation when scheduled', 'Prayer alongside the community'] },
    ],
  },
  {
    id: 'real-life', label: 'Live the Faith', title: 'Take Your Faith Beyond the Screen',
    introduction: 'DoIt4Jesus is meant to be a doorway into Catholic life, not a substitute for it. An app can help you remember to pray, read, reflect, and encourage a friend. The most important response happens away from the device: at Mass, in Confession, with your parish, in service to your family, and in quiet prayer.',
    features: [
      { title: 'Prayer that leads outward', icon: 'church', description: 'Use a Rosary session or Scripture reading as a beginning, then carry what you have received into your day. Call someone who is lonely, help at home, serve your neighbor, or bring an intention to Mass.', details: ['Make room for personal prayer', 'Stay connected to parish life', 'Let devotion shape daily choices'] },
      { title: 'Privacy and personal dignity', icon: 'shield', description: 'Prayer and conscience are personal. Choose what to share, be thoughtful with community activity, and use the app’s connection tools responsibly. Public prayer-map activity is generalized rather than a display of exact individual locations.', details: ['Reflection belongs to the person', 'Generalized map location', 'Friend-management tools'] },
    ],
    closing: 'The app does not replace the Sacraments, the Mass, spiritual direction, parish community, or prayer offered without a screen. Its best work is to help you step more fully into them.',
  },
];

const flaggedFeatures: { flag: keyof typeof futureFeatureFlags; category: string; feature: Feature }[] = [
  { flag: 'rosaryGarden', category: 'prayer', feature: { title: 'Rosary Garden', icon: 'rosary', description: 'A visual garden that grows as Rosaries are completed, with monthly and yearly views of prayer activity.', details: ['Flowers for completed Rosaries', 'Monthly and yearly progress'] } },
  { flag: 'catholicKnowledgeLessons', category: 'learning', feature: { title: 'Bite-sized Catholic knowledge', icon: 'book', description: 'Short lessons on Catholic teaching, Scripture, Church history, sacraments, and the lives of the saints.', details: ['Short reading cards', 'Topic progress'] } },
  { flag: 'catholicQuizzes', category: 'learning', feature: { title: 'Catholic knowledge quizzes', icon: 'spark', description: 'Topic-based questions and explanations that help learners revisit what they have read.', details: ['Topic quizzes', 'Answer explanations'] } },
  { flag: 'spiritualBattle', category: 'growth', feature: { title: 'Spiritual Battle', icon: 'shield', description: 'Symbolic challenges that encourage real-world choices against distraction, avoidance, and unhealthy habits.', details: ['Symbolic opponents', 'Real-world actions'] } },
  { flag: 'dailyMissions', category: 'growth', feature: { title: 'Daily missions', icon: 'heart', description: 'Small spiritual and practical actions that help turn intention into prayer, charity, and discipline.', details: ['Daily challenges', 'Completion tracking'] } },
  { flag: 'saintProfiles', category: 'learning', feature: { title: 'Learn from the saints', icon: 'cross', description: 'Profiles that introduce the lives, feast days, and virtues of Catholic saints.', details: ['Saint biographies', 'Feast days'] } },
  { flag: 'avatarProgression', category: 'progress', feature: { title: 'Symbolic visual progression', icon: 'shield', description: 'An in-app character and environment that change with participation, without assigning spiritual status.', details: ['Character appearance', 'Restored environments'] } },
  { flag: 'catholicLocations', category: 'real-life', feature: { title: 'Find Catholic life nearby', icon: 'church', description: 'Optional discovery of churches, Mass, Adoration, and Confession when reliable local information is available.', details: ['Nearby Catholic locations', 'Permission-based location'] } },
  { flag: 'deviceActivityIntegration', category: 'real-life', feature: { title: 'Healthy activity challenges', icon: 'chart', description: 'Opt-in connections between supported device activity and healthy habits.', details: ['Permission-based access', 'Supported activity goals'] } },
  { flag: 'notificationPreferences', category: 'growth', feature: { title: 'Gentle reminders', icon: 'calendar', description: 'Configurable reminders for prayer, Scripture, and app activity.', details: ['Preference controls', 'Optional reminders'] } },
];

export const publishedFeatureCategories: FeatureCategory[] = featureCategories.map((category) => ({
  ...category,
  features: [
    ...category.features,
    ...flaggedFeatures.filter(({ flag, category: categoryId }) => categoryId === category.id && futureFeatureFlags[flag]).map(({ feature }) => feature),
  ],
}));

export const featureFaq = [
  { question: 'What is DoIt4Jesus?', answer: 'DoIt4Jesus is a Catholic app that brings Rosary prayer, daily Mass Scripture, examinations of conscience, prayer tracking, progress features, and community tools into one place. It is designed to help people build a more consistent prayer life and grow in faith.' },
  { question: 'Is DoIt4Jesus a Catholic app?', answer: 'Yes. The Rosary, the mysteries of Christ’s life, Catholic Mass readings, Confession preparation, and Catholic community are central to the experience.' },
  { question: 'Can DoIt4Jesus help me pray the Rosary?', answer: 'Yes. You can find today’s mystery and enter a guided Rosary experience, including audio support and shared sessions when available. The app also records completed Rosaries and a daily streak.' },
  { question: 'Does DoIt4Jesus track Rosary prayers?', answer: 'Yes. The dashboard shows your completed Rosary count, streak, and related prayer statistics. These tools are meant to encourage consistency, not to rate the quality of your prayer.' },
  { question: 'What does gamifying the Catholic faith mean?', answer: 'It means using app elements such as XP, levels, badges, and milestones to make participation visible and encourage good habits. They are reminders to keep showing up, never a measure of grace or salvation.' },
  { question: 'Does DoIt4Jesus measure how holy someone is?', answer: 'No. Levels, XP, badges, streaks, and leaderboards reflect actions recorded inside the app. They cannot measure holiness, spiritual worth, or a person’s relationship with God.' },
  { question: 'Can I read Catholic daily Mass readings in the app?', answer: 'Yes. The Daily Scripture area displays the day’s readings, their references, the liturgical title and season, and a way to mark the reading complete.' },
  { question: 'Can I learn the Catholic faith with DoIt4Jesus?', answer: 'You can explore faith resources and use guided examinations of conscience. A structured catalogue of catechism lessons, quizzes, and saint profiles is not currently advertised as an available app feature.' },
  { question: 'Does DoIt4Jesus include an examination of conscience?', answer: 'Yes. Guided examinations for adults, teens, and children can help you reflect on your actions and prepare for Confession. This tool is private reflection, not a replacement for the Sacrament of Reconciliation.' },
  { question: 'Can I connect with other Catholics?', answer: 'Yes. You can use friend requests, community features, Rosary events, and a generalized prayer map to experience prayer alongside others.' },
  { question: 'Is DoIt4Jesus suitable for Catholic teens and young adults?', answer: 'The app’s approachable design and prayer tools can be useful for young Catholics. It includes a teen examination of conscience. Parents and guardians should use their judgment when helping minors use online community features.' },
  { question: 'Does DoIt4Jesus replace going to Mass or Confession?', answer: 'No. DoIt4Jesus exists to encourage participation in Catholic life—not replace the Sacraments, Mass, parish life, spiritual direction, or personal prayer.' },
];
