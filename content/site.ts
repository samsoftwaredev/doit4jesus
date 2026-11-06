export type Locale = "en" | "es";
export type CorePage =
  | "home"
  | "features"
  | "about"
  | "terms"
  | "privacy"
  | "guidelines";
export type Page =
  | CorePage
  | "catholic-prayer-app"
  | "gamified-rosary-app"
  | "rosary-tracker-app"
  | "examination-of-conscience-app";

export const publicPages: readonly Page[] = [
  "home",
  "features",
  "about",
  "terms",
  "privacy",
  "guidelines",
  "catholic-prayer-app",
  "gamified-rosary-app",
  "rosary-tracker-app",
  "examination-of-conscience-app",
] as const;

export const siteUrl = "https://www.doitforjesus.com";
export const appUrl = "https://app.doitforjesus.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/sign-up`;

export const pathFor = (locale: Locale, page: Page): string => {
  const path = {
    home: "",
    features: "/features",
    about: "/about",
    terms: "/terms-of-service",
    privacy: "/privacy-policy",
    guidelines: "/community-guidelines",
    "catholic-prayer-app": "/catholic-prayer-app",
    "gamified-rosary-app": "/gamified-rosary-app",
    "rosary-tracker-app": "/rosary-tracker-app",
    "examination-of-conscience-app": "/examination-of-conscience-app",
  }[page];
  return `${locale === "es" ? "/es" : ""}${path}` || "/";
};

export const content = {
  en: {
    nav: {
      about: "About",
      features: "Features",
      why: "Why Pray The Rosary?",
      login: "Log In",
      language: "English",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: {
      rights: "All rights reserved.",
      contact: "Contact Us",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      guidelines: "Community Guidelines",
    },
    home: {
      brandLine: "The Rosary Gamified",
      title: "Build a Daily Catholic Prayer Habit With DoIt4Jesus",
      description:
        "Pray a guided Catholic Rosary, read daily Mass Scripture, reflect, track your prayer habit, and find encouragement in a supportive faith community.",
      primary: "Get Started",
      featuresTitle: "The Rosary App",
      features: [
        {
          title: "Pray the Rosary",
          body: "Follow the current mystery, its spiritual fruit, and each prayer in a focused guided experience.",
          image: "/assets/app-rosary.webp",
          alt: "The guided Rosary in the DoIt4Jesus app",
          imageFocus: "rosary",
          href: "/features#prayer",
        },
        {
          title: "Grow Your Rosary Garden",
          body: "Plant a flower with every completed Rosary and see your prayer become part of the community count.",
          image: "/assets/app-home.webp",
          alt: "The Rosary Garden in the DoIt4Jesus app",
          imageFocus: "garden",
          href: "/features#prayer",
        },
        {
          title: "See Your Progress",
          body: "Bring your Rosaries, streak, level, XP, and milestones together in one personal dashboard.",
          image: "/assets/app-home.webp",
          alt: "Prayer statistics in the DoIt4Jesus app",
          imageFocus: "home",
          href: "/features#progress",
        },
        {
          title: "Pray With Community",
          body: "Find friends and use weekly and Rosary leaderboards as friendly motivation to keep showing up.",
          image: "/assets/app-community.webp",
          alt: "Community leaderboards in the DoIt4Jesus app",
          imageFocus: "community",
          href: "/features#community",
        },
      ],
      weaponTitle: "A Powerful Weapon",
      weaponBody:
        "Fr. Don Calloway describes the Rosary as a spiritual weapon. In the face of temptation and darkness, its familiar prayers can train us in courage, faith, and perseverance.",
      videoTitle: "A video about the power of the Rosary",
      aboutTitle: "About the Rosary",
      aboutBody:
        "The Rosary is a Scripture-based Catholic devotion that leads us to meditate with Mary on the mysteries of Christ. Its repeated prayers create space to remember the Gospel, ask for God’s grace, and intercede for others.",
      whyTitle: "Why Pray The Rosary?",
      benefits: [
        {
          number: "1",
          title: "Strengthen Faith",
          body: "Join our community on a transformative journey, praying the Rosary together for spiritual fortitude.",
        },
        {
          number: "2",
          title: "Pray for Others",
          body: "Through the Rosary, we bring the needs of others before God and ask for mercy and grace.",
        },
        {
          number: "3",
          title: "Combat Darkness",
          body: "Praying with others strengthens our spiritual defense against temptation and darkness.",
        },
      ],
      ctaTitle: "Battle Evil, One Bead at a Time!",
      ctaButton: "Sign Up",
      beyondRosary: {
        eyebrow: "Beyond the Rosary",
        title: "More Ways to Grow in Faith",
        introduction:
          "The Rosary is at the heart of DoIt4Jesus, but it is not the whole experience. Keep Scripture, reflection, progress, and Catholic community close throughout your day.",
        features: [
          {
            title: "Daily Catholic Scripture",
            body: "Read the daily Mass readings with their references, liturgical season, and a featured verse for reflection.",
            icon: "book",
            screen: "scripture",
            alt: "Daily Mass and Scripture readings in the DoIt4Jesus app",
            href: "/catholic-prayer-app",
          },
          {
            title: "Examination of Conscience",
            body: "Reflect with guided questions for adults as you prepare your heart for Confession.",
            icon: "cross",
            screen: "conscience",
            alt: "An examination of conscience question in the DoIt4Jesus app",
            href: "/examination-of-conscience-app",
          },
          {
            title: "Catholic Resources",
            body: "Explore faith-focused articles that help you understand Catholic practices and carry prayer into daily life.",
            icon: "church",
            screen: "resources",
            alt: "Faith resources and daily Mass content in the DoIt4Jesus app",
            href: "/catholic-prayer-app",
          },
          {
            title: "XP, Levels & Badges",
            body: "Build consistent habits with encouraging milestones that recognize participation without measuring holiness.",
            icon: "spark",
            screen: "progress",
            alt: "Level, points, and XP progress in the DoIt4Jesus app",
            href: "/gamified-rosary-app",
          },
          {
            title: "Friends & Leaderboards",
            body: "Connect with Catholic friends and find friendly motivation through community and weekly activity.",
            icon: "people",
            screen: "community",
            alt: "Friends and community leaderboard in the DoIt4Jesus app",
            href: "/catholic-prayer-app",
          },
          {
            title: "Prayer Activity Map",
            body: "See aggregated prayer activity and discover how the community is growing in faith together.",
            icon: "globe",
            screen: "global",
            alt: "Aggregated prayer activity in the DoIt4Jesus app",
            href: "/catholic-prayer-app",
          },
        ],
        link: "Learn more about all features",
      },
    },
    about: {
      eyebrow: "Our mission",
      title: "Pray together. Grow closer to Christ.",
      lead: "DoIt4Jesus is a Catholic prayer and spiritual-growth application centered on the Holy Rosary, daily Scripture, reflection, and community.",
      storyTitle: "About the project",
      story:
        "The project brings guided prayer, Catholic Scripture resources, personal progress, and community tools into one digital experience. It supports a life of prayer; it does not replace the Mass, the Sacraments, a parish, clergy, or spiritual direction.",
      operatorTitle: "Publisher and operator",
      operatorBody: "DoIt4Jesus is operated by INRI Paint & Wall LLC, a Texas limited liability company.",
      editorialTitle: "How educational content is prepared",
      editorialBody: "Educational resources are drafted from identified Catholic sources, include publication and review information, and remain unpublished until human editorial and theological review. DoIt4Jesus does not claim diocesan, parish, clergy, or institutional approval unless that relationship is verified and disclosed.",
      valuesTitle: "What guides us",
      values: [
        "Faith and prayer",
        "Community",
        "Compassion",
        "Unity in Christ",
        "Devotion to Mary",
      ],
      forTitle: "Who it is for",
      forBody:
        "Public prayer resources may be read without an account. Under the current Terms of Service, account registration and authenticated features are available only to U.S. residents age 18 and older.",
      contactTitle: "Contact and policies",
      contactBody: "For support or questions, email admin@doit4jesus.com. Review the Terms of Service, Privacy Policy, and Community Guidelines for current eligibility, privacy, and community rules.",
      cta: "Join us in prayer",
    },
    legal: {
      contact: "Questions? Contact",
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      features: "Funciones",
      why: "¿Por qué rezar el Rosario?",
      login: "Iniciar sesión",
      language: "Español",
      menu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      contact: "Contáctanos",
      terms: "Términos de servicio",
      privacy: "Política de privacidad",
      guidelines: "Normas de la comunidad",
    },
    home: {
      brandLine: "El Rosario hecho juego",
      title: "Crea un hábito diario de oración católica con DoIt4Jesus",
      description:
        "Reza un Rosario católico guiado, lee la Escritura diaria de la Misa, reflexiona, sigue tu hábito de oración y recibe ánimo de una comunidad de fe.",
      primary: "Comienza ahora",
      featuresTitle: "La aplicación del Rosario",
      features: [
        {
          title: "Reza el Rosario",
          body: "Sigue el misterio actual, su fruto espiritual y cada oración en una experiencia guiada y enfocada.",
          image: "/assets/app-rosary.webp",
          alt: "El Rosario guiado en la aplicación DoIt4Jesus",
          imageFocus: "rosary",
          href: "/features#prayer",
        },
        {
          title: "Cultiva tu jardín",
          body: "Planta una flor con cada Rosario terminado y mira cómo tu oración se suma al conteo de la comunidad.",
          image: "/assets/app-home.webp",
          alt: "El Jardín del Rosario en la aplicación DoIt4Jesus",
          imageFocus: "garden",
          href: "/features#prayer",
        },
        {
          title: "Mira tu progreso",
          body: "Reúne tus Rosarios, racha, nivel, XP y logros en un solo panel personal.",
          image: "/assets/app-home.webp",
          alt: "Estadísticas de oración en la aplicación DoIt4Jesus",
          imageFocus: "home",
          href: "/features#progress",
        },
        {
          title: "Ora en comunidad",
          body: "Conecta con amigos y usa las clasificaciones como una motivación amistosa para perseverar.",
          image: "/assets/app-community.webp",
          alt: "Clasificaciones de la comunidad en la aplicación DoIt4Jesus",
          imageFocus: "community",
          href: "/features#community",
        },
      ],
      weaponTitle: "Un arma poderosa",
      weaponBody:
        "El P. Don Calloway describe el Rosario como un arma espiritual. Frente a la tentación y la oscuridad, sus oraciones nos forman en el valor, la fe y la perseverancia.",
      videoTitle: "Un video sobre el poder del Rosario",
      aboutTitle: "Acerca del Rosario",
      aboutBody:
        "El Rosario es una devoción católica basada en la Escritura que nos lleva a meditar con María los misterios de Cristo. Sus oraciones repetidas crean un espacio para recordar el Evangelio, pedir la gracia de Dios e interceder por los demás.",
      whyTitle: "¿Por qué rezar el Rosario?",
      benefits: [
        {
          number: "1",
          title: "Fortalece la fe",
          body: "Únete a nuestra comunidad en un camino transformador y reza el Rosario con otros para fortalecerte espiritualmente.",
        },
        {
          number: "2",
          title: "Ora por los demás",
          body: "Por medio del Rosario presentamos a Dios las necesidades de otras personas y pedimos misericordia y gracia.",
        },
        {
          number: "3",
          title: "Combate la oscuridad",
          body: "Rezar con otras personas fortalece nuestra defensa espiritual frente a la tentación y la oscuridad.",
        },
      ],
      ctaTitle: "¡Combate el mal, una cuenta a la vez!",
      ctaButton: "Regístrate",
      beyondRosary: {
        eyebrow: "Más allá del Rosario",
        title: "Más formas de crecer en la fe",
        introduction:
          "El Rosario está en el corazón de DoIt4Jesus, pero no es toda la experiencia. Mantén cerca la Sagrada Escritura, la reflexión, tu progreso y la comunidad católica durante el día.",
        features: [
          {
            title: "Lecturas católicas diarias",
            body: "Lee las lecturas diarias de la Misa con sus citas, el tiempo litúrgico y un versículo para reflexionar.",
            icon: "book",
            screen: "scripture",
            alt: "La Misa diaria y las lecturas de la Sagrada Escritura en DoIt4Jesus",
            href: "/catholic-prayer-app",
          },
          {
            title: "Examen de conciencia",
            body: "Reflexiona con preguntas guiadas para adultos mientras preparas tu corazón para la Confesión.",
            icon: "cross",
            screen: "conscience",
            alt: "Una pregunta del examen de conciencia en DoIt4Jesus",
            href: "/examination-of-conscience-app",
          },
          {
            title: "Recursos católicos",
            body: "Explora artículos sobre la fe que te ayudan a comprender las prácticas católicas y llevar la oración a la vida diaria.",
            icon: "church",
            screen: "resources",
            alt: "Recursos de fe y contenido de la Misa diaria en DoIt4Jesus",
            href: "/catholic-prayer-app",
          },
          {
            title: "XP, niveles e insignias",
            body: "Cultiva hábitos constantes con logros que reconocen tu participación sin intentar medir la santidad.",
            icon: "spark",
            screen: "progress",
            alt: "Niveles, puntos y progreso de XP en DoIt4Jesus",
            href: "/gamified-rosary-app",
          },
          {
            title: "Amigos y clasificaciones",
            body: "Conecta con amigos católicos y encuentra una motivación amistosa en la actividad semanal de la comunidad.",
            icon: "people",
            screen: "community",
            alt: "Amigos y clasificación de la comunidad en DoIt4Jesus",
            href: "/catholic-prayer-app",
          },
          {
            title: "Mapa de actividad de oración",
            body: "Mira la actividad agregada de oración y descubre cómo la comunidad crece unida en la fe.",
            icon: "globe",
            screen: "global",
            alt: "Actividad agregada de oración en DoIt4Jesus",
            href: "/catholic-prayer-app",
          },
        ],
        link: "Conoce todas las funciones",
      },
    },
    about: {
      eyebrow: "Nuestra misión",
      title: "Recemos juntos. Acerquémonos a Cristo.",
      lead: "DoIt4Jesus es una aplicación católica de oración y crecimiento espiritual centrada en el Santo Rosario, la Escritura diaria, la reflexión y la comunidad.",
      storyTitle: "Acerca del proyecto",
      story:
        "El proyecto reúne oración guiada, recursos católicos de la Escritura, progreso personal y herramientas comunitarias en una experiencia digital. Acompaña la vida de oración; no sustituye la Misa, los Sacramentos, una parroquia, el clero ni la dirección espiritual.",
      operatorTitle: "Editor y operador",
      operatorBody: "DoIt4Jesus es operado por INRI Paint & Wall LLC, una sociedad de responsabilidad limitada de Texas.",
      editorialTitle: "Cómo se prepara el contenido educativo",
      editorialBody: "Los recursos educativos se redactan a partir de fuentes católicas identificadas, incluyen datos de publicación y revisión y permanecen sin publicar hasta completar una revisión humana editorial y teológica. DoIt4Jesus no afirma aprobación diocesana, parroquial, clerical o institucional sin una relación verificada y divulgada.",
      valuesTitle: "Lo que nos guía",
      values: [
        "Fe y oración",
        "Comunidad",
        "Compasión",
        "Unidad en Cristo",
        "Devoción a María",
      ],
      forTitle: "Para quién es",
      forBody:
        "Los recursos públicos de oración pueden leerse sin una cuenta. Según los Términos de servicio vigentes, el registro y las funciones autenticadas están disponibles solo para residentes de Estados Unidos mayores de 18 años.",
      contactTitle: "Contacto y políticas",
      contactBody: "Para asistencia o preguntas, escribe a admin@doit4jesus.com. Consulta los Términos de servicio, la Política de privacidad y las Normas de la comunidad para conocer las reglas vigentes de elegibilidad, privacidad y comunidad.",
      cta: "Únete a nosotros en oración",
    },
    legal: {
      contact: "¿Preguntas? Escribe a",
    },
  },
} as const;
