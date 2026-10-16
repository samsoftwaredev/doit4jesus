export type Locale = 'en' | 'es';
export type Page = 'home' | 'about' | 'terms' | 'privacy';

export const siteUrl = 'https://doit4jesus.com';
export const appUrl = 'https://app.doit4jesus.com/';

export const pathFor = (locale: Locale, page: Page): string => {
  const path = { home: '', about: '/about', terms: '/terms-of-service', privacy: '/privacy-policy' }[page];
  return `${locale === 'es' ? '/es' : ''}${path}` || '/';
};

export const content = {
  en: {
    nav: { home: 'Home', about: 'About', features: 'Features', login: 'Log in', signup: 'Sign up', app: 'Open the app', language: 'Español' },
    footer: { tagline: 'Make room for prayer, one day at a time.', pages: 'Explore', legal: 'Legal', rights: 'All rights reserved.' },
    home: {
      eyebrow: 'A prayer journey worth sharing',
      title: 'The Rosary, made part of your everyday life.',
      description: 'DoIt4Jesus is a Catholic Rosary app that brings prayer, challenges, and progress together. Pray with purpose, grow in faith, and stay connected to a community that keeps showing up.',
      primary: 'Start praying', secondary: 'Discover how it works',
      heroNote: 'A more meaningful daily rhythm',
      introEyebrow: 'Rooted in prayer',
      introTitle: 'A simple way to begin. A community to keep you going.',
      introBody: 'Whether the Rosary is already part of your day or you are learning one prayer at a time, DoIt4Jesus helps you return to it with intention.',
      featuresEyebrow: 'Grow with DoIt4Jesus',
      featuresTitle: 'Everything you need to make prayer a habit.',
      features: [
        { title: 'Pray the Rosary', body: 'Follow a guided Rosary experience and make space to reflect on the mysteries of Christ.', image: '/assets/mary-moon.jpeg', alt: 'Illustration of Mary beneath moonlight' },
        { title: 'Take on challenges', body: 'Find fresh reasons to show up for prayer and build a consistent daily practice.', image: '/assets/jesus-praying.jpeg', alt: 'Illustration of Jesus in prayer' },
        { title: 'See your progress', body: 'Follow your prayer journey with milestones that celebrate your commitment.', image: '/assets/joseph-praying.jpeg', alt: 'Illustration of Saint Joseph praying' },
      ],
      journeyEyebrow: 'A path forward', journeyTitle: 'Prayer grows one day at a time.',
      journeyBody: 'Begin with a single Rosary. Return tomorrow. Find encouragement in each challenge and celebrate the progress that comes from being present.',
      journeySteps: [
        { number: '01', title: 'Begin in prayer', body: 'Choose a mystery and take a few quiet moments with the Rosary.' },
        { number: '02', title: 'Keep showing up', body: 'Daily challenges give your practice a gentle rhythm.' },
        { number: '03', title: 'Grow together', body: 'Share in a community of people praying toward the same hope.' },
      ],
      communityEyebrow: 'You are not alone', communityTitle: 'A community gathered in faith.',
      communityBody: 'Connect with others who pray the Rosary, encourage one another, and make room for faith in ordinary life.',
      ctaTitle: 'Your next prayer can begin today.', ctaBody: 'Take the next step in your Rosary journey with DoIt4Jesus.', ctaButton: 'Open DoIt4Jesus',
    },
    about: {
      eyebrow: 'Our mission', title: 'Pray together. Grow closer to Christ.',
      lead: 'DoIt4Jesus is a faith-based platform created to bring together people who want to grow spiritually through prayer, specifically by praying the Holy Rosary as a community.',
      storyTitle: 'Our story', story: 'Born from a desire to build a digital space where faith and community intersect, DoIt4Jesus was created to make the Rosary accessible, engaging, and communal. What started as a simple idea has grown into a hub where believers around the world pray together in real time.',
      valuesTitle: 'What guides us', values: ['Faith and prayer', 'Community', 'Compassion', 'Unity in Christ', 'Devotion to Mary'],
      forTitle: 'Who it is for', forBody: 'DoIt4Jesus is for anyone seeking a deeper connection with God through the Rosary — from lifelong Catholics to those just discovering the beauty of this prayer.',
      cta: 'Join us in prayer',
    },
    legal: { draft: '', effective: 'Effective date: June 8, 2024', contact: 'Questions? Contact' },
  },
  es: {
    nav: { home: 'Inicio', about: 'Acerca de', features: 'Funciones', login: 'Iniciar sesión', signup: 'Registrarse', app: 'Abrir la app', language: 'English' },
    footer: { tagline: 'Haz espacio para la oración, día a día.', pages: 'Explorar', legal: 'Información legal', rights: 'Todos los derechos reservados.' },
    home: {
      eyebrow: 'Un camino de oración para compartir',
      title: 'El Rosario, parte de tu vida cotidiana.',
      description: 'DoIt4Jesus es una aplicación católica del Rosario que une la oración, los desafíos y tu progreso. Reza con propósito, crece en la fe y mantente cerca de una comunidad que persevera.',
      primary: 'Comienza a rezar', secondary: 'Descubre cómo funciona',
      heroNote: 'Un ritmo diario con más sentido',
      introEyebrow: 'Arraigados en la oración',
      introTitle: 'Una forma sencilla de empezar. Una comunidad que te acompaña.',
      introBody: 'Si el Rosario ya forma parte de tu día, o si estás aprendiendo una oración a la vez, DoIt4Jesus te ayuda a volver a él con intención.',
      featuresEyebrow: 'Crece con DoIt4Jesus',
      featuresTitle: 'Todo lo que necesitas para hacer de la oración un hábito.',
      features: [
        { title: 'Reza el Rosario', body: 'Sigue una experiencia guiada y dedica tiempo a meditar en los misterios de Cristo.', image: '/assets/mary-moon.jpeg', alt: 'Ilustración de María bajo la luz de la luna' },
        { title: 'Acepta desafíos', body: 'Encuentra nuevos motivos para dedicar tiempo a la oración y cultivar la constancia.', image: '/assets/jesus-praying.jpeg', alt: 'Ilustración de Jesús en oración' },
        { title: 'Observa tu progreso', body: 'Sigue tu camino de oración con logros que celebran tu compromiso.', image: '/assets/joseph-praying.jpeg', alt: 'Ilustración de san José rezando' },
      ],
      journeyEyebrow: 'Un camino por delante', journeyTitle: 'La oración crece día a día.',
      journeyBody: 'Empieza con un solo Rosario. Vuelve mañana. Encuentra ánimo en cada desafío y celebra el progreso que nace de estar presente.',
      journeySteps: [
        { number: '01', title: 'Comienza en oración', body: 'Elige un misterio y dedica unos momentos de calma al Rosario.' },
        { number: '02', title: 'Persevera cada día', body: 'Los desafíos diarios le dan un ritmo amable a tu práctica.' },
        { number: '03', title: 'Crezcan juntos', body: 'Comparte con una comunidad que reza con la misma esperanza.' },
      ],
      communityEyebrow: 'No estás solo', communityTitle: 'Una comunidad unida en la fe.',
      communityBody: 'Conecta con otras personas que rezan el Rosario, anímense mutuamente y hagan espacio para la fe en la vida diaria.',
      ctaTitle: 'Tu próxima oración puede comenzar hoy.', ctaBody: 'Da el siguiente paso en tu camino con el Rosario y DoIt4Jesus.', ctaButton: 'Abrir DoIt4Jesus',
    },
    about: {
      eyebrow: 'Nuestra misión', title: 'Recemos juntos. Acerquémonos a Cristo.',
      lead: 'DoIt4Jesus es una plataforma basada en la fe creada para reunir a personas que quieren crecer espiritualmente a través de la oración, especialmente al rezar el Santo Rosario en comunidad.',
      storyTitle: 'Nuestra historia', story: 'Nacido del deseo de construir un espacio digital donde la fe y la comunidad se encuentren, DoIt4Jesus fue creado para hacer el Rosario accesible, atractivo y comunitario. Lo que comenzó como una idea simple se ha convertido en un centro donde creyentes de todo el mundo oran juntos en tiempo real.',
      valuesTitle: 'Lo que nos guía', values: ['Fe y oración', 'Comunidad', 'Compasión', 'Unidad en Cristo', 'Devoción a María'],
      forTitle: 'Para quién es', forBody: 'DoIt4Jesus es para cualquier persona que busque una conexión más profunda con Dios a través del Rosario, desde católicos de toda la vida hasta quienes recién descubren la belleza de esta oración.',
      cta: 'Únete a nosotros en oración',
    },
    legal: { draft: 'Traducción de cortesía en borrador. La versión en inglés es la versión oficial hasta que se revise esta traducción.', effective: 'Fecha de vigencia: 8 de junio de 2024', contact: '¿Preguntas? Escribe a' },
  },
} as const;
