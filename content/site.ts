export type Locale = 'en' | 'es';
export type Page = 'home' | 'features' | 'about' | 'terms' | 'privacy';

export const siteUrl = 'https://doit4jesus.com';
export const appUrl = 'https://app.doit4jesus.com/';
export const resourcesUrl = 'https://app.doit4jesus.com/resources';

export const pathFor = (locale: Locale, page: Page): string => {
  const path = { home: '', features: '/features', about: '/about', terms: '/terms-of-service', privacy: '/privacy-policy' }[page];
  return `${locale === 'es' ? '/es' : ''}${path}` || '/';
};

export const content = {
  en: {
    nav: { about: 'About', features: 'Features', resources: 'Resources', why: 'Why Pray The Rosary?', login: 'Log In', language: 'English', menu: 'Open menu', closeMenu: 'Close menu' },
    footer: { rights: 'All rights reserved.', contact: 'Contact Us', terms: 'Terms of Service', privacy: 'Privacy Policy' },
    home: {
      title: 'The Rosary Gamified',
      description: 'Level up in faith and grow closer to God through prayer and games.',
      primary: 'Get Started',
      featuresTitle: 'The Rosary App',
      features: [
        { title: 'Pray Like a Warrior', body: 'Turn daily prayer into a spiritual battle plan. With in-app guidance, every Hail Mary becomes a strike against darkness.', image: '/assets/mary-moon.jpeg', alt: 'Illustration of Mary in prayer beneath the sky' },
        { title: 'A Global Prayer Squad', body: 'Connect with Catholics around the world and pray the Rosary together in a community of faith.', image: '/assets/jesus-praying.jpeg', alt: 'Illustration of Jesus with eyes closed' },
        { title: 'Level Up Your Faith', body: 'Track your spiritual growth, unlock milestones, and stay motivated through a gamified Rosary experience.', image: '/assets/joseph-praying.jpeg', alt: 'Illustration of Saint Joseph praying' },
      ],
      weaponTitle: 'A Powerful Weapon',
      weaponBody: 'Fr. Don Calloway describes the Rosary as a spiritual weapon. In the face of temptation and darkness, its familiar prayers can train us in courage, faith, and perseverance.',
      videoTitle: 'A video about the power of the Rosary',
      aboutTitle: 'About the Rosary',
      aboutBody: "The Rosary isn’t just beads and prayers—it is a spiritual weapon. When we pray it together, we join one another in pushing back darkness and interceding for souls. According to Catholic tradition, Mary gave St. Dominic the Rosary as a way to strengthen the faithful in spiritual battle.",
      whyTitle: 'Why Pray The Rosary?',
      benefits: [
        { number: '1', title: 'Strengthen Faith', body: 'Join our community on a transformative journey, praying the Rosary together for spiritual fortitude.' },
        { number: '2', title: 'Save Souls', body: 'Through the Rosary, we intercede for souls and ask God to show mercy and grace.' },
        { number: '3', title: 'Combat Darkness', body: 'Praying with others strengthens our spiritual defense against temptation and darkness.' },
      ],
      ctaTitle: 'Battle Evil, One Bead at a Time!', ctaButton: 'Sign Up',
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
    nav: { about: 'Acerca de', features: 'Funciones', resources: 'Recursos', why: '¿Por qué rezar el Rosario?', login: 'Iniciar sesión', language: 'Español', menu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    footer: { rights: 'Todos los derechos reservados.', contact: 'Contáctanos', terms: 'Términos de servicio', privacy: 'Política de privacidad' },
    home: {
      title: 'El Rosario hecho juego',
      description: 'Avanza en la fe y acércate más a Dios por medio de la oración y los desafíos.',
      primary: 'Comienza ahora',
      featuresTitle: 'La aplicación del Rosario',
      features: [
        { title: 'Reza como un guerrero', body: 'Convierte la oración diaria en un plan de batalla espiritual. Con la guía de la app, cada Ave María se vuelve un golpe contra la oscuridad.', image: '/assets/mary-moon.jpeg', alt: 'Ilustración de María en oración bajo el cielo' },
        { title: 'Un equipo mundial de oración', body: 'Conecta con católicos de todo el mundo y recen el Rosario juntos como comunidad de fe.', image: '/assets/jesus-praying.jpeg', alt: 'Ilustración de Jesús con los ojos cerrados' },
        { title: 'Eleva tu fe', body: 'Sigue tu crecimiento espiritual, alcanza metas y mantén la motivación con una experiencia del Rosario que reconoce tu constancia.', image: '/assets/joseph-praying.jpeg', alt: 'Ilustración de san José rezando' },
      ],
      weaponTitle: 'Un arma poderosa',
      weaponBody: 'El P. Don Calloway describe el Rosario como un arma espiritual. Frente a la tentación y la oscuridad, sus oraciones nos forman en el valor, la fe y la perseverancia.',
      videoTitle: 'Un video sobre el poder del Rosario',
      aboutTitle: 'Acerca del Rosario',
      aboutBody: 'El Rosario no son solo cuentas y oraciones: es un arma espiritual. Cuando rezamos juntos, nos unimos para rechazar la oscuridad e interceder por las almas. Según la tradición católica, María entregó el Rosario a santo Domingo para fortalecer a los fieles en la batalla espiritual.',
      whyTitle: '¿Por qué rezar el Rosario?',
      benefits: [
        { number: '1', title: 'Fortalece la fe', body: 'Únete a nuestra comunidad en un camino transformador y reza el Rosario con otros para fortalecerte espiritualmente.' },
        { number: '2', title: 'Salva almas', body: 'Por medio del Rosario intercedemos por las almas y pedimos a Dios misericordia y gracia.' },
        { number: '3', title: 'Combate la oscuridad', body: 'Rezar con otras personas fortalece nuestra defensa espiritual frente a la tentación y la oscuridad.' },
      ],
      ctaTitle: '¡Combate el mal, una cuenta a la vez!', ctaButton: 'Regístrate',
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
