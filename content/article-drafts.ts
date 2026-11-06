import type { Locale, Page } from './site';

export type ArticleDraftSlug =
  | 'how-to-pray-the-rosary'
  | 'rosary-mysteries-by-day'
  | 'examination-of-conscience-guide'
  | 'daily-catholic-prayers'
  | 'daily-mass-readings';

export type ArticleSource = {
  label: string;
  publisher: string;
  href: string;
  note?: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export type ArticleDraft = {
  status: 'draft-awaiting-human-review';
  slug: ArticleDraftSlug;
  locale: Locale;
  proposedPath: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  introduction: string;
  publicationDate: null;
  reviewDate: null;
  reviewer: null;
  sections: readonly ArticleSection[];
  sources: readonly ArticleSource[];
  relatedPages: readonly Page[];
  relatedDrafts: readonly ArticleDraftSlug[];
};

const sources = {
  rosary: {
    label: 'How to Pray the Rosary',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://www.usccb.org/how-to-pray-the-rosary',
  },
  rosaries: {
    label: 'Rosaries',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries',
  },
  meditation: {
    label: 'Catechism of the Catholic Church, 2705–2708: Meditation',
    publisher: 'The Holy See',
    href: 'https://www.vatican.va/content/catechism/en/part_four/section_one/chapter_three/article_1/ii_meditation.html',
  },
  penitent: {
    label: 'Catechism of the Catholic Church, 1450–1460: Acts of the Penitent',
    publisher: 'The Holy See',
    href: 'https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/vii_the_acts_of_the_penitent.html',
  },
  penitentEs: {
    label: 'Catecismo de la Iglesia Católica, 1422–1498: Penitencia y Reconciliación',
    publisher: 'La Santa Sede',
    href: 'https://www.vatican.va/archive/catechism_sp/p2s2c2a4_sp.html',
  },
  basicPrayers: {
    label: 'Basic Prayers',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://www.usccb.org/prayer-and-worship/prayers-and-devotions/prayers/basic-prayers',
  },
  prayerLife: {
    label: 'Catechism of the Catholic Church, 2558–2565: Prayer in the Christian Life',
    publisher: 'The Holy See',
    href: 'https://www.vatican.va/content/catechism/en/part_four/section_one.html',
  },
  dailyReadings: {
    label: 'Daily Bible Readings',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://bible.usccb.org/',
  },
  dailyReadingsEs: {
    label: 'Lecturas diarias en español',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://bible.usccb.org/es',
  },
  permissions: {
    label: 'Bible Permissions',
    publisher: 'United States Conference of Catholic Bishops',
    href: 'https://www.usccb.org/offices/new-american-bible/permissions',
    note: 'Confirm current digital-use permission before reproducing Scripture or complete daily readings.',
  },
} satisfies Record<string, ArticleSource>;

const english: Record<ArticleDraftSlug, ArticleDraft> = {
  'how-to-pray-the-rosary': {
    status: 'draft-awaiting-human-review', slug: 'how-to-pray-the-rosary', locale: 'en', proposedPath: '/how-to-pray-the-rosary',
    title: 'How to Pray the Rosary: A Step-by-Step Catholic Guide',
    metaTitle: 'How to Pray the Rosary Step by Step | DoIt4Jesus',
    description: 'Learn the order of the Rosary, how to pray each decade, and how the mysteries lead meditation toward the life of Jesus Christ.',
    eyebrow: 'Rosary guide',
    introduction: 'The Rosary is a Scripture-based Catholic devotion centered on meditation on the mysteries of Christ. The beads help you keep your place; the purpose is attentive prayer, not speed or perfect concentration.',
    publicationDate: null, reviewDate: null, reviewer: null,
    sections: [
      { heading: 'Before you begin', paragraphs: ['Choose the set of mysteries for the day, find a quiet place if possible, and bring any intention you want to entrust to God. A printed guide or an app can help you learn the sequence, but neither is required.'] },
      { heading: 'Pray the opening prayers', items: ['Make the Sign of the Cross.', 'On the crucifix, pray the Apostles’ Creed.', 'On the first bead, pray the Our Father.', 'On the next three beads, pray three Hail Marys, traditionally for growth in faith, hope, and charity.', 'Pray the Glory Be.'] },
      { heading: 'Pray each of the five decades', items: ['Announce the mystery and pause to call its event to mind.', 'Pray one Our Father.', 'Pray ten Hail Marys while meditating on the mystery.', 'Pray the Glory Be. The Fatima Prayer is a common optional addition.', 'Repeat this pattern for all five mysteries in the chosen set.'] },
      { heading: 'Conclude the Rosary', paragraphs: ['After the fifth decade, pray the Hail, Holy Queen and the customary concluding prayer, then finish with the Sign of the Cross. Other approved or customary prayers may be added. The Rosary can be prayed privately or with a group.'] },
      { heading: 'When attention wanders', paragraphs: ['Return gently to the mystery, the words of the prayer, or a short Gospel scene. Catholic teaching describes methods as guides: the goal of Christian meditation is deeper knowledge and love of Jesus, not flawless technique.'] },
    ],
    sources: [sources.rosary, sources.rosaries, sources.meditation], relatedPages: ['rosary-tracker-app', 'features'], relatedDrafts: ['rosary-mysteries-by-day', 'daily-catholic-prayers'],
  },
  'rosary-mysteries-by-day': {
    status: 'draft-awaiting-human-review', slug: 'rosary-mysteries-by-day', locale: 'en', proposedPath: '/rosary-mysteries-by-day',
    title: 'Rosary Mysteries by Day: A Weekly Catholic Schedule',
    metaTitle: 'Rosary Mysteries by Day and Week | DoIt4Jesus',
    description: 'See the traditional weekly schedule for the Joyful, Luminous, Sorrowful, and Glorious Mysteries of the Rosary.',
    eyebrow: 'Rosary reference',
    introduction: 'Catholics may pray any mysteries at any time. The schedule below is a traditional devotional pattern that helps the Church move through events in the life of Christ with Mary.',
    publicationDate: null, reviewDate: null, reviewer: null,
    sections: [
      { heading: 'The usual weekly pattern', items: ['Monday: Joyful Mysteries', 'Tuesday: Sorrowful Mysteries', 'Wednesday: Glorious Mysteries', 'Thursday: Luminous Mysteries', 'Friday: Sorrowful Mysteries', 'Saturday: Joyful Mysteries', 'Sunday: Glorious Mysteries, with traditional seasonal variations noted below'] },
      { heading: 'Traditional Sunday variations', paragraphs: ['The USCCB guide identifies the Joyful Mysteries for Sundays of Advent, the Sorrowful Mysteries for Sundays of Lent, and the Glorious Mysteries for Sundays outside Advent and Lent. This is a devotional custom rather than a rule that prevents another set from being prayed.'] },
      { heading: 'The four sets at a glance', items: ['Joyful: the Annunciation through the Finding of Jesus in the Temple.', 'Luminous: the Baptism of Jesus through the Institution of the Eucharist.', 'Sorrowful: the Agony in the Garden through the Crucifixion.', 'Glorious: the Resurrection through the Coronation of Mary.'] },
      { heading: 'Using the schedule well', paragraphs: ['Read the name of each mystery slowly, recall the Gospel event, and ask for the grace traditionally associated with it. If you are new to the Rosary, begin with one decade and grow steadily rather than treating the schedule as a scorecard.'] },
    ],
    sources: [sources.rosary, sources.rosaries], relatedPages: ['gamified-rosary-app', 'rosary-tracker-app'], relatedDrafts: ['how-to-pray-the-rosary'],
  },
  'examination-of-conscience-guide': {
    status: 'draft-awaiting-human-review', slug: 'examination-of-conscience-guide', locale: 'en', proposedPath: '/examination-of-conscience-guide',
    title: 'Examination of Conscience Guide for Catholic Confession',
    metaTitle: 'Catholic Examination of Conscience Guide | DoIt4Jesus',
    description: 'Prepare for Confession with a prayerful adult examination of conscience rooted in Scripture, the Commandments, and the Church’s teaching.',
    eyebrow: 'Preparation for Confession',
    introduction: 'An examination of conscience is an honest, prayerful review of your life in the light of God’s Word. It prepares you for the Sacrament of Penance and Reconciliation; it is not the sacrament itself and cannot replace confession to a priest.',
    publicationDate: null, reviewDate: null, reviewer: null,
    sections: [
      { heading: 'Begin in God’s presence', paragraphs: ['Ask the Holy Spirit for light, honesty, sorrow for sin, trust in God’s mercy, and a firm purpose of amendment. Avoid both minimizing sin and turning the examination into anxious self-accusation. A priest can help when you are unsure how to proceed.'] },
      { heading: 'Review your life since your last good confession', items: ['Love of God: prayer, Sunday Mass and holy days, reverence for God’s name, and trust in God.', 'Love of neighbor: honesty, patience, forgiveness, justice, charity, and care for people in need.', 'Responsibilities: duties within family, work, parish, and civil life; promises made; harm left unrepaired.', 'Interior life: deliberate choices involving pride, envy, anger, lust, greed, gluttony, sloth, or refusal to forgive.', 'Omissions: good you knowingly could and should have done but chose to neglect.'] },
      { heading: 'Prepare to confess', paragraphs: ['Recall sins clearly without rehearsing excuses or unnecessary details. The Catechism teaches that known mortal sins must be confessed in kind and number. Bring questions about culpability, circumstances, or scrupulosity to the priest rather than trying to settle every doubt alone.'] },
      { heading: 'Contrition and a concrete next step', paragraphs: ['Ask God for genuine sorrow and choose a realistic step away from a recurring occasion of sin. After absolution, complete the penance given and make reasonable repair for harm caused. Regular confession can help form conscience and support conversion.'] },
      { heading: 'Pastoral and safety note', paragraphs: ['This guide is general Catholic education, not individualized pastoral, mental-health, legal, or emergency advice. If an examination triggers severe anxiety or scrupulosity, seek help from a trusted priest and a qualified mental-health professional.'] },
    ],
    sources: [sources.penitent, { label: 'How to Make a Good Confession', publisher: 'United States Conference of Catholic Bishops', href: 'https://www.usccb.org/resources/ADW-Brochure.pdf' }], relatedPages: ['examination-of-conscience-app', 'privacy'], relatedDrafts: ['daily-catholic-prayers'],
  },
  'daily-catholic-prayers': {
    status: 'draft-awaiting-human-review', slug: 'daily-catholic-prayers', locale: 'en', proposedPath: '/daily-catholic-prayers',
    title: 'Daily Catholic Prayers and a Simple Prayer Habit',
    metaTitle: 'Daily Catholic Prayers and Prayer Habit Guide | DoIt4Jesus',
    description: 'Build a realistic Catholic prayer habit with morning prayer, Scripture, the Rosary, prayer before meals, and an evening examination.',
    eyebrow: 'Daily prayer',
    introduction: 'A Catholic prayer habit is a relationship with God, not a productivity contest. Begin with a small, repeatable rhythm and let it lead toward the sacramental and communal life of the Church.',
    publicationDate: null, reviewDate: null, reviewer: null,
    sections: [
      { heading: 'A simple rhythm for ordinary days', items: ['Morning: make the Sign of the Cross, offer the day to God, and pray the Our Father.', 'During the day: pause for a brief prayer, grace before meals, a decade of the Rosary, or a few minutes with the day’s Scripture.', 'Evening: give thanks, review the day honestly, ask forgiveness, and entrust tomorrow to God.'] },
      { heading: 'Common prayers to learn', paragraphs: ['The Our Father, Hail Mary, Glory Be, Apostles’ Creed, Act of Contrition, Morning Offering, Angelus, Hail Holy Queen, and prayers before and after meals are part of the Church’s broad treasury. To avoid translation and copyright uncertainty, this draft links to the USCCB collection instead of reproducing complete prayer texts.'] },
      { heading: 'Make the habit sustainable', items: ['Attach prayer to a stable moment such as waking, lunch, commuting, or bedtime.', 'Choose a minimum you can keep on difficult days.', 'Use reminders or tracking as servants of prayer, never as measures of holiness.', 'Return without discouragement after a missed day.', 'Keep Sunday Mass, the Sacraments, service, and parish life at the center.'] },
      { heading: 'Vocal prayer, meditation, and contemplation', paragraphs: ['Catholic tradition recognizes vocal prayer, meditation, and contemplative prayer as related expressions of one life of prayer. A routine may include familiar words, attentive reflection on Scripture or a mystery of Christ, and quiet presence before God.'] },
    ],
    sources: [sources.basicPrayers, sources.prayerLife], relatedPages: ['catholic-prayer-app', 'features'], relatedDrafts: ['how-to-pray-the-rosary', 'daily-mass-readings'],
  },
  'daily-mass-readings': {
    status: 'draft-awaiting-human-review', slug: 'daily-mass-readings', locale: 'en', proposedPath: '/daily-mass-readings',
    title: 'Daily Catholic Mass Readings: How to Read and Reflect',
    metaTitle: 'Daily Catholic Mass Readings and Reflection | DoIt4Jesus',
    description: 'Find authorized daily Mass readings and use a simple Catholic reflection pattern without replacing participation in the liturgy.',
    eyebrow: 'Scripture and liturgy',
    introduction: 'The readings proclaimed at Mass follow the Church’s liturgical calendar. Reading them before or after Mass can deepen attention to the Word, but private reading does not replace participation in Sunday Mass or holy days of obligation.',
    publicationDate: null, reviewDate: null, reviewer: null,
    sections: [
      { heading: 'Use an authorized source', paragraphs: ['For the United States, follow the USCCB Daily Readings calendar for the assigned readings and citations. Liturgical options can mean the readings at a particular Mass differ from the main calendar listing.'] },
      { heading: 'A short reflection pattern', items: ['Read the citation and text slowly.', 'Notice a word, action, promise, or question that draws your attention.', 'Consider what the passage reveals about God and the response it asks of you.', 'Answer in prayer and choose one concrete act of faith, hope, or charity.', 'Carry the passage into the day and revisit it later.'] },
      { heading: 'Copyright and permissions', paragraphs: ['Do not copy complete daily readings or a Bible translation into a website or application without confirming the current license. The USCCB publishes specific rules for the NABRE, Lectionary texts, web use, RSS feeds, and digital applications. This draft therefore links to the authorized reading page and reproduces no Scripture text.'] },
      { heading: 'How DoIt4Jesus fits', paragraphs: ['DoIt4Jesus can help you find the day’s references and remember a prayer rhythm. It is a companion to Scripture and liturgy, not an official lectionary, a parish, or the celebration of Mass. Any future reproduction of reading text requires documented permission.'] },
    ],
    sources: [sources.dailyReadings, sources.permissions], relatedPages: ['catholic-prayer-app', 'features'], relatedDrafts: ['daily-catholic-prayers'],
  },
};

const spanish: Record<ArticleDraftSlug, ArticleDraft> = {
  'how-to-pray-the-rosary': {
    ...english['how-to-pray-the-rosary'], locale: 'es', proposedPath: '/es/how-to-pray-the-rosary',
    title: 'Cómo rezar el Rosario: guía católica paso a paso', metaTitle: 'Cómo rezar el Rosario paso a paso | DoIt4Jesus',
    description: 'Aprende el orden del Rosario, cómo rezar cada decena y cómo los misterios orientan la meditación hacia la vida de Jesucristo.', eyebrow: 'Guía del Rosario',
    introduction: 'El Rosario es una devoción católica basada en la Escritura y centrada en la meditación de los misterios de Cristo. Las cuentas ayudan a seguir el orden; la meta es orar con atención, no hacerlo con rapidez o concentración perfecta.',
    sections: [
      { heading: 'Antes de comenzar', paragraphs: ['Elige los misterios del día, busca un lugar tranquilo si es posible y presenta a Dios tus intenciones. Una guía impresa o una aplicación puede ayudarte a aprender el orden, pero no es indispensable.'] },
      { heading: 'Reza las oraciones iniciales', items: ['Haz la señal de la cruz.', 'En el crucifijo, reza el Credo de los Apóstoles.', 'En la primera cuenta, reza el Padrenuestro.', 'En las tres cuentas siguientes, reza tres Avemarías, tradicionalmente por la fe, la esperanza y la caridad.', 'Reza el Gloria.'] },
      { heading: 'Reza las cinco decenas', items: ['Anuncia el misterio y recuerda el acontecimiento.', 'Reza un Padrenuestro.', 'Reza diez Avemarías mientras meditas el misterio.', 'Reza el Gloria. La oración de Fátima es una adición opcional común.', 'Repite el mismo orden con los cinco misterios.'] },
      { heading: 'Concluye el Rosario', paragraphs: ['Después de la quinta decena, reza la Salve y la oración final acostumbrada; termina con la señal de la cruz. Se pueden añadir otras oraciones aprobadas o tradicionales. El Rosario puede rezarse en privado o en grupo.'] },
      { heading: 'Cuando te distraigas', paragraphs: ['Vuelve con serenidad al misterio, a las palabras de la oración o a una escena breve del Evangelio. Los métodos son ayudas: la meta de la meditación cristiana es conocer y amar más a Jesús.'] },
    ], sources: [sources.rosary, sources.rosaries, sources.meditation],
  },
  'rosary-mysteries-by-day': {
    ...english['rosary-mysteries-by-day'], locale: 'es', proposedPath: '/es/rosary-mysteries-by-day',
    title: 'Misterios del Rosario por día: calendario católico semanal', metaTitle: 'Misterios del Rosario por día | DoIt4Jesus',
    description: 'Consulta el calendario tradicional de los misterios gozosos, luminosos, dolorosos y gloriosos del Rosario.', eyebrow: 'Referencia del Rosario',
    introduction: 'Los católicos pueden rezar cualquier grupo de misterios en cualquier momento. El calendario siguiente es una práctica devocional tradicional para recorrer con María los acontecimientos de la vida de Cristo.',
    sections: [
      { heading: 'El calendario semanal habitual', items: ['Lunes: misterios gozosos', 'Martes: misterios dolorosos', 'Miércoles: misterios gloriosos', 'Jueves: misterios luminosos', 'Viernes: misterios dolorosos', 'Sábado: misterios gozosos', 'Domingo: misterios gloriosos, con las variaciones tradicionales señaladas abajo'] },
      { heading: 'Variaciones tradicionales de los domingos', paragraphs: ['La guía de la USCCB señala los misterios gozosos para los domingos de Adviento, los dolorosos para los domingos de Cuaresma y los gloriosos para los demás domingos. Es una costumbre devocional, no una prohibición de rezar otro grupo.'] },
      { heading: 'Los cuatro grupos', items: ['Gozosos: desde la Anunciación hasta el Niño Jesús perdido y hallado en el Templo.', 'Luminosos: desde el Bautismo de Jesús hasta la Institución de la Eucaristía.', 'Dolorosos: desde la Oración en el Huerto hasta la Crucifixión.', 'Gloriosos: desde la Resurrección hasta la Coronación de María.'] },
      { heading: 'Cómo aprovechar el calendario', paragraphs: ['Lee despacio el nombre de cada misterio, recuerda el acontecimiento evangélico y pide la gracia asociada. Si estás comenzando, reza una decena y crece con constancia sin convertir el calendario en una puntuación.'] },
    ], sources: [sources.rosary, sources.rosaries],
  },
  'examination-of-conscience-guide': {
    ...english['examination-of-conscience-guide'], locale: 'es', proposedPath: '/es/examination-of-conscience-guide',
    title: 'Guía católica de examen de conciencia para la Confesión', metaTitle: 'Guía de examen de conciencia católico | DoIt4Jesus',
    description: 'Prepárate para la Confesión con un examen de conciencia para adultos basado en la Escritura, los Mandamientos y la enseñanza de la Iglesia.', eyebrow: 'Preparación para la Confesión',
    introduction: 'El examen de conciencia es una revisión sincera y orante de la propia vida a la luz de la Palabra de Dios. Prepara para el Sacramento de la Penitencia y la Reconciliación; no es el sacramento ni sustituye la confesión ante un sacerdote.',
    sections: [
      { heading: 'Comienza en la presencia de Dios', paragraphs: ['Pide al Espíritu Santo luz, sinceridad, dolor por el pecado, confianza en la misericordia de Dios y propósito de enmienda. Evita minimizar el pecado y también la acusación ansiosa. Un sacerdote puede orientarte si no sabes cómo proceder.'] },
      { heading: 'Revisa tu vida desde la última buena confesión', items: ['Amor a Dios: oración, Misa dominical y fiestas de precepto, reverencia por su nombre y confianza en Él.', 'Amor al prójimo: sinceridad, paciencia, perdón, justicia, caridad y atención a los necesitados.', 'Responsabilidades: deberes familiares, laborales, parroquiales y civiles; promesas y daños pendientes de reparar.', 'Vida interior: decisiones deliberadas vinculadas con soberbia, envidia, ira, lujuria, avaricia, gula, pereza o falta de perdón.', 'Omisiones: el bien que sabías que podías y debías hacer, pero decidiste descuidar.'] },
      { heading: 'Prepárate para confesar', paragraphs: ['Recuerda los pecados con claridad, sin ensayar excusas ni detalles innecesarios. El Catecismo enseña que deben confesarse los pecados mortales conocidos en especie y número. Lleva al sacerdote tus dudas sobre culpabilidad, circunstancias o escrupulosidad.'] },
      { heading: 'Contrición y un paso concreto', paragraphs: ['Pide un dolor sincero y elige un paso realista para apartarte de una ocasión habitual de pecado. Después de la absolución, cumple la penitencia y repara razonablemente el daño causado. La confesión frecuente ayuda a formar la conciencia.'] },
      { heading: 'Nota pastoral y de seguridad', paragraphs: ['Esta guía ofrece educación católica general, no consejo pastoral, psicológico, legal o de emergencia individualizado. Si el examen provoca ansiedad intensa o escrupulosidad, busca ayuda de un sacerdote de confianza y de un profesional cualificado de salud mental.'] },
    ], sources: [sources.penitentEs, { label: 'Cómo hacer una buena confesión', publisher: 'United States Conference of Catholic Bishops', href: 'https://www.usccb.org/resources/ADW-Brochure.pdf' }],
  },
  'daily-catholic-prayers': {
    ...english['daily-catholic-prayers'], locale: 'es', proposedPath: '/es/daily-catholic-prayers',
    title: 'Oraciones católicas diarias y un hábito sencillo de oración', metaTitle: 'Oraciones católicas diarias | DoIt4Jesus',
    description: 'Crea un hábito realista con oración de la mañana, Escritura, Rosario, oración antes de comer y examen al final del día.', eyebrow: 'Oración diaria',
    introduction: 'Un hábito católico de oración es una relación con Dios, no una competencia de productividad. Comienza con un ritmo pequeño y repetible que conduzca a la vida sacramental y comunitaria de la Iglesia.',
    sections: [
      { heading: 'Un ritmo sencillo para cada día', items: ['Mañana: haz la señal de la cruz, ofrece el día a Dios y reza el Padrenuestro.', 'Durante el día: haz una pausa, bendice los alimentos, reza una decena o dedica unos minutos a la Escritura del día.', 'Noche: da gracias, revisa el día con sinceridad, pide perdón y confía a Dios el día siguiente.'] },
      { heading: 'Oraciones comunes para aprender', paragraphs: ['El Padrenuestro, el Avemaría, el Gloria, el Credo de los Apóstoles, el Acto de Contrición, el Ofrecimiento de la Mañana, el Ángelus y la Salve forman parte del tesoro de oración de la Iglesia. Para evitar dudas de traducción y derechos, este borrador enlaza la colección de la USCCB y no reproduce textos completos.'] },
      { heading: 'Haz que el hábito sea sostenible', items: ['Une la oración a un momento estable del día.', 'Elige un mínimo posible incluso en días difíciles.', 'Usa recordatorios como ayudas, nunca como medidas de santidad.', 'Vuelve sin desanimarte después de un día perdido.', 'Mantén la Misa dominical, los Sacramentos, el servicio y la parroquia en el centro.'] },
      { heading: 'Oración vocal, meditación y contemplación', paragraphs: ['La tradición católica reconoce la oración vocal, la meditación y la contemplación como expresiones relacionadas. Un ritmo puede reunir palabras conocidas, reflexión atenta sobre la Escritura y presencia silenciosa ante Dios.'] },
    ], sources: [sources.basicPrayers, sources.prayerLife],
  },
  'daily-mass-readings': {
    ...english['daily-mass-readings'], locale: 'es', proposedPath: '/es/daily-mass-readings',
    title: 'Lecturas católicas diarias de la Misa: cómo leer y reflexionar', metaTitle: 'Lecturas católicas diarias de la Misa | DoIt4Jesus',
    description: 'Encuentra lecturas autorizadas de la Misa y usa un método breve de reflexión católica sin sustituir la participación litúrgica.', eyebrow: 'Escritura y liturgia',
    introduction: 'Las lecturas proclamadas en la Misa siguen el calendario litúrgico de la Iglesia. Leerlas antes o después puede aumentar la atención a la Palabra, pero la lectura privada no sustituye la Misa dominical ni las fiestas de precepto.',
    sections: [
      { heading: 'Usa una fuente autorizada', paragraphs: ['Para Estados Unidos, consulta el calendario de lecturas diarias de la USCCB. Las opciones litúrgicas pueden hacer que las lecturas de una Misa concreta difieran de la entrada principal del calendario.'] },
      { heading: 'Un método breve de reflexión', items: ['Lee despacio la cita y el texto.', 'Reconoce una palabra, acción, promesa o pregunta que llame tu atención.', 'Considera qué revela sobre Dios y qué respuesta pide.', 'Responde en oración y elige un acto concreto de fe, esperanza o caridad.', 'Lleva el pasaje contigo y vuelve a él más tarde.'] },
      { heading: 'Derechos de autor y permisos', paragraphs: ['No copies lecturas completas ni una traducción bíblica en un sitio o aplicación sin confirmar la licencia vigente. La USCCB publica reglas específicas para la NABRE, los leccionarios, el uso web, RSS y aplicaciones. Este borrador enlaza la página autorizada y no reproduce texto bíblico.'] },
      { heading: 'Cómo acompaña DoIt4Jesus', paragraphs: ['DoIt4Jesus puede ayudarte a encontrar las citas del día y recordar un ritmo de oración. Es un acompañamiento, no un leccionario oficial, una parroquia o la celebración de la Misa. Cualquier reproducción futura necesita permiso documentado.'] },
    ], sources: [sources.dailyReadingsEs, sources.permissions],
  },
};

export const articleDrafts = { en: english, es: spanish } as const;

export const articleDraftSlugs = Object.keys(english) as ArticleDraftSlug[];

export function articleDraft(locale: Locale, slug: ArticleDraftSlug): ArticleDraft {
  return articleDrafts[locale][slug];
}
