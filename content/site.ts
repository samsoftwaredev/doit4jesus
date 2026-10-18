export type Locale = "en" | "es";
export type Page = "home" | "features" | "about" | "terms" | "privacy";

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
    },
    home: {
      brandLine: "The Rosary Gamified",
      title: "Do It for Jesus, Every Day",
      description:
        "Build a faithful Catholic rhythm through the Rosary, daily Scripture, reflection, meaningful progress, and community.",
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
          body: "Plant a flower with every completed Rosary and see your part in a worldwide community of prayer.",
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
        "The Rosary isn’t just beads and prayers—it is a spiritual weapon. When we pray it together, we join one another in pushing back darkness and interceding for souls. According to Catholic tradition, Mary gave St. Dominic the Rosary as a way to strengthen the faithful in spiritual battle.",
      whyTitle: "Why Pray The Rosary?",
      benefits: [
        {
          number: "1",
          title: "Strengthen Faith",
          body: "Join our community on a transformative journey, praying the Rosary together for spiritual fortitude.",
        },
        {
          number: "2",
          title: "Save Souls",
          body: "Through the Rosary, we intercede for souls and ask God to show mercy and grace.",
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
            body: "Reflect with guided questions for adults, teens, and children as you prepare your heart for Confession.",
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
            title: "Global Prayer Map",
            body: "See prayer activity by city and country and discover a worldwide community growing in faith together.",
            icon: "globe",
            screen: "global",
            alt: "Worldwide prayer activity in the DoIt4Jesus app",
            href: "/catholic-prayer-app",
          },
        ],
        link: "Learn more about all features",
      },
    },
    about: {
      eyebrow: "Our mission",
      title: "Pray together. Grow closer to Christ.",
      lead: "DoIt4Jesus is a faith-based platform created to bring together people who want to grow spiritually through prayer, specifically by praying the Holy Rosary as a community.",
      storyTitle: "Our story",
      story:
        "Born from a desire to build a digital space where faith and community intersect, DoIt4Jesus was created to make the Rosary accessible, engaging, and communal. What started as a simple idea has grown into a hub where believers around the world pray together in real time.",
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
        "DoIt4Jesus is for anyone seeking a deeper connection with God through the Rosary — from lifelong Catholics to those just discovering the beauty of this prayer.",
      cta: "Join us in prayer",
    },
    legal: {
      draft: "",
      effective: "Effective date: June 8, 2024",
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
    },
    home: {
      brandLine: "El Rosario hecho juego",
      title: "Hazlo por Jesús, cada día",
      description:
        "Construye un ritmo católico fiel por medio del Rosario, la Sagrada Escritura, la reflexión, el progreso y la comunidad.",
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
          body: "Planta una flor con cada Rosario terminado y descubre tu lugar en una comunidad mundial de oración.",
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
        "El Rosario no son solo cuentas y oraciones: es un arma espiritual. Cuando rezamos juntos, nos unimos para rechazar la oscuridad e interceder por las almas. Según la tradición católica, María entregó el Rosario a santo Domingo para fortalecer a los fieles en la batalla espiritual.",
      whyTitle: "¿Por qué rezar el Rosario?",
      benefits: [
        {
          number: "1",
          title: "Fortalece la fe",
          body: "Únete a nuestra comunidad en un camino transformador y reza el Rosario con otros para fortalecerte espiritualmente.",
        },
        {
          number: "2",
          title: "Salva almas",
          body: "Por medio del Rosario intercedemos por las almas y pedimos a Dios misericordia y gracia.",
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
            body: "Reflexiona con preguntas guiadas para adultos, adolescentes y niños mientras preparas tu corazón para la Confesión.",
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
            title: "Mapa mundial de oración",
            body: "Mira la actividad de oración por ciudad y país y descubre una comunidad mundial que crece unida en la fe.",
            icon: "globe",
            screen: "global",
            alt: "Actividad mundial de oración en DoIt4Jesus",
            href: "/catholic-prayer-app",
          },
        ],
        link: "Conoce todas las funciones",
      },
    },
    about: {
      eyebrow: "Nuestra misión",
      title: "Recemos juntos. Acerquémonos a Cristo.",
      lead: "DoIt4Jesus es una plataforma basada en la fe creada para reunir a personas que quieren crecer espiritualmente a través de la oración, especialmente al rezar el Santo Rosario en comunidad.",
      storyTitle: "Nuestra historia",
      story:
        "Nacido del deseo de construir un espacio digital donde la fe y la comunidad se encuentren, DoIt4Jesus fue creado para hacer el Rosario accesible, atractivo y comunitario. Lo que comenzó como una idea simple se ha convertido en un centro donde creyentes de todo el mundo oran juntos en tiempo real.",
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
        "DoIt4Jesus es para cualquier persona que busque una conexión más profunda con Dios a través del Rosario, desde católicos de toda la vida hasta quienes recién descubren la belleza de esta oración.",
      cta: "Únete a nosotros en oración",
    },
    legal: {
      draft:
        "Traducción de cortesía en borrador. La versión en inglés es la versión oficial hasta que se revise esta traducción.",
      effective: "Fecha de vigencia: 8 de junio de 2024",
      contact: "¿Preguntas? Escribe a",
    },
  },
} as const;
