import type { FeatureCategory } from './features';

export const publishedFeatureCategoriesEs: FeatureCategory[] = [
  {
    id: 'prayer', label: 'Oración', title: 'Reza el Rosario con propósito',
    introduction: 'Una aplicación católica debe ayudarte a orar de verdad. DoIt4Jesus da al Rosario un lugar central en tu día mediante una experiencia guiada, los misterios correspondientes y un registro de las oraciones terminadas. Ya estés aprendiendo o volviendo después de una pausa, la meta es hacer espacio para contemplar a Cristo con María. La experiencia favorece la atención y la perseverancia sin convertir cada Avemaría en un punto.',
    closing: 'Los misterios gozosos, dolorosos, gloriosos y luminosos mantienen la vida de Cristo en el centro. El contador es útil; la oración es lo esencial.',
    features: [
      { title: 'El Rosario de hoy', icon: 'rosary', description: 'Abre el misterio asignado al día y únete a una experiencia guiada con apoyo de audio.', details: ['Un punto de partida claro', 'Misterios organizados por día', 'Rosarios en vivo cuando estén disponibles'] },
      { title: 'Seguimiento del Rosario', icon: 'chart', description: 'Mira cuántos Rosarios has terminado y vuelve a la oración con continuidad, sin reducir la devoción a un número.', details: ['Conteo personal', 'Estadísticas en tu panel', 'Progreso que puedes compartir si lo deseas'] },
      { title: 'Rachas de oración', icon: 'spark', description: 'Una racha diaria te anima a volver y cultivar un hábito, pero perder un día nunca es un juicio sobre tu fe.', details: ['Racha actual en el panel', 'Constancia a lo largo del tiempo', 'Motivación sin puntuación espiritual'] },
      { title: 'Oración con otros', icon: 'people', description: 'Los eventos y la actividad comunitaria facilitan orar con otros católicos aunque no estén en la misma habitación.', details: ['Sesiones compartidas', 'Participación comunitaria', 'Apoyo a intenciones de oración'] },
      { title: 'Jardín del Rosario', icon: 'rosary', description: 'Un jardín visual que crece con cada Rosario terminado y muestra la actividad mensual y anual.', details: ['Flores por Rosarios terminados', 'Progreso mensual y anual'] },
    ],
  },
  {
    id: 'scripture', label: 'Palabra de Dios', title: 'Lee diariamente la Sagrada Escritura',
    introduction: 'El Rosario nos introduce en la vida de Jesús y la Escritura nos ayuda a escucharlo cada día. El área de Escritura reúne las lecturas de la Misa con tu rutina de oración. Puedes ver el título y tiempo litúrgicos, leer los pasajes y marcar la lectura después de dedicar tiempo a la Palabra.',
    closing: 'Las lecturas se presentan para la oración personal, no para sustituir la Palabra proclamada en la Misa. Las citas y el contexto litúrgico te ayudan a encontrarlas y retomarlas.',
    features: [
      { title: 'Lecturas diarias de la Misa', icon: 'book', description: 'Encuentra la primera lectura, el salmo responsorial, el Evangelio y la segunda lectura cuando corresponda.', details: ['Citas y texto de las lecturas', 'Lecturas completas del día', 'Versículo destacado para reflexionar'] },
      { title: 'Contexto litúrgico', icon: 'calendar', description: 'Mira el tiempo litúrgico y el título del día para seguir Adviento, Navidad, Cuaresma, Pascua y Tiempo Ordinario.', details: ['Tiempo litúrgico', 'Título del día', 'Fecha de las lecturas'] },
      { title: 'Lectura terminada', icon: 'spark', description: 'Marca la Escritura de hoy como leída para apoyar un hábito constante sin apresurarte por el texto.', details: ['Estado diario', 'Progreso vinculado al XP', 'Lecturas en inglés y español'] },
    ],
  },
  {
    id: 'learning', label: 'Aprendizaje', title: 'Aprende y reflexiona sobre la fe católica',
    introduction: 'Crecer en la fe implica comprender además de actuar. DoIt4Jesus une la oración con recursos y reflexión guiada para convertir una pregunta en una invitación a aprender. La experiencia actual se centra en artículos y exámenes de conciencia.',
    closing: 'Un examen de conciencia puede preparar tu corazón para el arrepentimiento y la Reconciliación. Una aplicación no puede absolver pecados ni sustituir a un sacerdote, la Confesión o la orientación pastoral.',
    features: [
      { title: 'Recursos católicos', icon: 'book', description: 'Explora lecturas sobre la fe para comprender una práctica con mayor profundidad o llevar un tema de la oración al resto del día.', details: ['Artículos de fe', 'Lectura fuera del flujo de oración', 'Un camino de la curiosidad a la reflexión'] },
      { title: 'Examen de conciencia', icon: 'cross', description: 'Usa preguntas para reflexionar sobre pensamientos, palabras, acciones y hábitos. Hay guías para adultos, adolescentes y niños.', details: ['Guías según la edad', 'Preguntas para reflexión privada', 'Preparación para la Confesión'] },
    ],
  },
  {
    id: 'growth', label: 'Crecimiento espiritual', title: 'Cultiva la constancia sin perder el sentido',
    introduction: 'Un hábito de oración duradero suele nacer de decisiones ordinarias y repetidas. DoIt4Jesus usa progreso visible para animarlas con una perspectiva clara: la gracia no es una mecánica de juego y el valor de una persona no puede contarse.',
    features: [
      { title: 'Un ritmo al que puedes volver', icon: 'heart', description: 'El panel reúne el Rosario de hoy, la Escritura diaria y tu actividad reciente como punto de partida para una rutina católica.', details: ['Oración y Escritura en un panel', 'Vista rápida del Rosario de hoy', 'Actividad y progreso recientes'] },
      { title: 'Conciencia y conversión', icon: 'shield', description: 'El examen de conciencia te ayuda a reconocer hábitos, buscar misericordia y elegir una resolución concreta sin convertirse en otra puntuación.', details: ['Examen personal y privado', 'Guías para distintas edades', 'Un puente hacia la Reconciliación'] },
    ],
  },
  {
    id: 'progress', label: 'Progreso', title: 'Avanza en la fe con la perspectiva correcta',
    introduction: 'Las señales inspiradas en los juegos pueden hacer tangible la constancia. DoIt4Jesus registra participación mediante XP, niveles, logros, insignias y estadísticas del Rosario. Estos sistemas reconocen actividad dentro de la aplicación; no miden santidad, gracia, mérito ni la relación de una persona con Dios.',
    closing: 'Ninguna cantidad de XP hace a una persona más santa que otra. El propósito del progreso es animar hábitos constantes y dirigir la atención de nuevo a la oración y la vida real.',
    features: [
      { title: 'XP y niveles', icon: 'spark', description: 'Acciones como terminar un Rosario, leer la Escritura o participar en la oración pueden contribuir al progreso dentro de la aplicación.', details: ['Nivel y título actuales', 'XP acumulado', 'Avance hacia el siguiente nivel'] },
      { title: 'Insignias y logros', icon: 'star', description: 'Los logros ofrecen un pequeño estímulo al alcanzar hitos significativos de participación y perseverancia.', details: ['Colección de logros', 'Estados obtenidos y pendientes', 'Opciones para compartir'] },
      { title: 'Estadísticas de oración', icon: 'chart', description: 'Tu panel muestra Rosarios terminados y la racha actual como recordatorios para perseverar, no como medida de la calidad de tu oración.', details: ['Rosarios terminados', 'Racha actual', 'Camino de oración compartible'] },
    ],
  },
  {
    id: 'community', label: 'Comunidad', title: 'Ora con católicos de todo el mundo',
    introduction: 'La fe se vive en comunión. DoIt4Jesus hace que la oración se sienta menos aislada al conectar personas mediante amistades, eventos del Rosario, actividad y clasificaciones. Estas herramientas funcionan mejor como ánimo: ver que alguien más ora también puede ayudarte a comenzar de nuevo.',
    features: [
      { title: 'Amigos católicos', icon: 'people', description: 'Invita amigos, responde solicitudes y mantén cerca a tus compañeros de oración sin hacer pública toda tu vida espiritual.', details: ['Enviar y responder solicitudes', 'Administrar conexiones', 'Ver actividad compatible de amigos'] },
      { title: 'Competencia sana', icon: 'star', description: 'Las clasificaciones semanales y del Rosario muestran participación. Úsalas como motivación amistosa, nunca para demostrar quién es más santo.', details: ['Clasificación semanal', 'Participación en el Rosario', 'Ánimo entre amigos y comunidad'] },
      { title: 'Mapa mundial de oración', icon: 'globe', description: 'El mapa muestra actividad por ciudad y país, no la ubicación exacta de una persona.', details: ['Geografía generalizada', 'Actividad comunitaria de un vistazo', 'Sin coordenadas personales precisas'] },
      { title: 'Eventos del Rosario en vivo', icon: 'rosary', description: 'Únete a sesiones con otras personas cuando estén disponibles y convierte una intención individual en un momento comunitario.', details: ['Lista de eventos', 'Participación en vivo cuando se programe', 'Oración con la comunidad'] },
    ],
  },
  {
    id: 'real-life', label: 'Vive la fe', title: 'Lleva tu fe más allá de la pantalla',
    introduction: 'DoIt4Jesus quiere ser una puerta a la vida católica, no un sustituto. Una aplicación puede recordarte orar, leer, reflexionar y animar a un amigo. La respuesta más importante ocurre lejos del dispositivo: en la Misa, la Confesión, la parroquia, el servicio y la oración silenciosa.',
    closing: 'La aplicación no sustituye los Sacramentos, la Misa, la dirección espiritual, la comunidad parroquial ni la oración sin pantalla. Su mejor labor es ayudarte a entrar más plenamente en ellos.',
    features: [
      { title: 'Oración que conduce hacia afuera', icon: 'church', description: 'Usa el Rosario o una lectura como comienzo y lleva lo recibido a tu día mediante el servicio, la familia y la Misa.', details: ['Haz espacio para la oración', 'Permanece unido a la parroquia', 'Deja que la devoción forme tus decisiones'] },
      { title: 'Privacidad y dignidad personal', icon: 'shield', description: 'La oración y la conciencia son personales. Elige qué compartir y usa responsablemente las herramientas comunitarias.', details: ['La reflexión pertenece a la persona', 'Ubicación generalizada en el mapa', 'Herramientas para administrar amistades'] },
    ],
  },
];

export const featureFaqEs = [
  { question: '¿Qué es DoIt4Jesus?', answer: 'DoIt4Jesus es una aplicación católica que reúne el Rosario, las lecturas diarias de la Misa, el examen de conciencia, el seguimiento de oración, el progreso y la comunidad.' },
  { question: '¿DoIt4Jesus es una aplicación católica?', answer: 'Sí. El Rosario, los misterios de la vida de Cristo, las lecturas de la Misa, la preparación para la Confesión y la comunidad católica son centrales.' },
  { question: '¿Puede ayudarme a rezar el Rosario?', answer: 'Sí. Puedes encontrar el misterio de hoy y seguir un Rosario guiado con audio y sesiones compartidas cuando estén disponibles.' },
  { question: '¿DoIt4Jesus registra los Rosarios?', answer: 'Sí. El panel muestra Rosarios terminados, rachas y estadísticas destinadas a fomentar la constancia, no a calificar la oración.' },
  { question: '¿Qué significa añadir elementos de juego a la fe?', answer: 'Significa usar XP, niveles, insignias y logros para hacer visible la participación y animar buenos hábitos, nunca para medir la gracia o la salvación.' },
  { question: '¿DoIt4Jesus mide la santidad?', answer: 'No. Los niveles, XP, insignias, rachas y clasificaciones reflejan acciones registradas, no la santidad ni la relación de una persona con Dios.' },
  { question: '¿Puedo leer las lecturas diarias de la Misa?', answer: 'Sí. El área de Escritura muestra las lecturas, sus citas, el título y tiempo litúrgicos y una opción para marcarlas como leídas.' },
  { question: '¿Puedo aprender sobre la fe católica?', answer: 'Puedes explorar recursos de fe y usar exámenes de conciencia guiados.' },
  { question: '¿Incluye un examen de conciencia?', answer: 'Sí. Hay exámenes para adultos, adolescentes y niños que ayudan a reflexionar y prepararse para la Confesión.' },
  { question: '¿Puedo conectar con otros católicos?', answer: 'Sí. Puedes usar amistades, funciones comunitarias, eventos del Rosario y un mapa de oración generalizado.' },
  { question: '¿Es adecuada para adolescentes católicos?', answer: 'Sus herramientas pueden ser útiles para jóvenes católicos e incluyen un examen para adolescentes. Los padres deben acompañar el uso de funciones comunitarias.' },
  { question: '¿Sustituye la Misa o la Confesión?', answer: 'No. DoIt4Jesus anima la vida católica, pero no sustituye los Sacramentos, la Misa, la parroquia, la dirección espiritual ni la oración personal.' },
];
