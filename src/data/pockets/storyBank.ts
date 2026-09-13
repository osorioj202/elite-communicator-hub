import { CommunicationStory } from '@/types';

export const STORY_BANK: CommunicationStory[] = [
    // --- SALES ---
    {
        id: 'story-sales-001',
        category: 'Sales',
        type: 'story',
        tags: ['persistence', 'objection-handling', 'listening'],
        title: { en: 'The Third No Was The Yes', es: 'El tercer "no" fue el "sí"' },
        purpose: { en: 'Objection Handle', es: 'Manejo de objeciones' },
        story: {
            en: 'A prospect rejected me three times. Instead of pushing, I asked: "What would need to change for this to work?" They shared their real concern about implementation time. We adjusted our timeline. They signed the next week.',
            es: 'Un prospecto me rechazó tres veces. En lugar de presionar, pregunté: "¿Qué tendría que cambiar para que esto funcionara?". Compartieron su verdadera preocupación por el tiempo de implementación. Ajustamos nuestro cronograma. Firmaron a la semana siguiente.'
        },
        keyTakeaway: {
            en: "'No' often means 'Not yet, and here's why.' Listen for the real objection.",
            es: "'No' a menudo significa 'Aún no, y aquí está el porqué'. Escucha la verdadera objeción."
        },
        adaptablePrompt: {
            en: "Replace 'implementation time' with your prospect's actual concern. Use this after the second rejection.",
            es: "Sustituye 'tiempo de implementación' por la preocupación real de tu prospecto. Úsalo tras el segundo rechazo."
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2,
        relatedScenarioIds: ['price-objection', 'cold-call']
    },
    {
        id: 'story-sales-002',
        category: 'Sales',
        type: 'story',
        tags: ['honesty', 'trust', 'long-term'],
        title: { en: 'The Deal I Walked Away From', es: 'El trato del que me retiré' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I once told a prospect we weren’t the best fit for their specific need, even though it was a $50k deal. Six months later, they called me back for a $200k project because they knew they could trust my word.',
            es: 'Una vez le dije a un prospecto que no éramos la mejor opción para su necesidad específica, aunque era un trato de 50.000 dólares. Seis meses después, me volvieron a llamar para un proyecto de 200.000 dólares porque sabían que podían confiar en mi palabra.'
        },
        keyTakeaway: {
            en: 'Integrity is a long-term multiplier for revenue.',
            es: 'La integridad es un multiplicador de ingresos a largo plazo.'
        },
        adaptablePrompt: {
            en: 'Use this when a client is hesitant about your transparency or when building initial trust.',
            es: 'Úsalo cuando un cliente dude de tu transparencia o al generar confianza inicial.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-sales-003',
        category: 'Sales',
        type: 'story',
        tags: ['listening', 'referral'],
        title: { en: 'The Referral from a "No"', es: 'La referencia que vino de un "no"' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'I spent an hour listening to a founder explain why they didn\'t need us. At the end, he said, "You\'re the first salesperson who actually listened. I\'m not buying, but you should call my friend at [Company]." That referral closed in two weeks.',
            es: 'Pasé una hora escuchando a un fundador explicar por qué no nos necesitaba. Al final, dijo: "Eres el primer vendedor que realmente ha escuchado. No voy a comprar, pero deberías llamar a mi amigo en [Empresa]". Esa referencia se cerró en dos semanas.'
        },
        keyTakeaway: {
            en: 'Active listening is a service in itself, and people reward it.',
            es: 'La escucha activa es un servicio en sí mismo, y la gente lo recompensa.'
        },
        adaptablePrompt: {
            en: 'Use this to illustrate why you take a "discovery-first" approach.',
            es: 'Úsalo para ilustrar por qué adoptas un enfoque centrado primero en el descubrimiento.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-sales-004',
        category: 'Sales',
        type: 'story',
        tags: ['partnership', 'problem-solving'],
        title: { en: 'From Vendor to Partner', es: 'De proveedor a socio' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'A client had a major server crash on a Sunday. It wasn\'t our software, but I stayed on the phone with their IT team until 2 AM to help troubleshoot. We haven\'t had to "re-sign" them for 3 years; they just stay.',
            es: 'Un cliente tuvo una caída importante del servidor un domingo. No era cosa de nuestro software, pero me quedé al teléfono con su equipo de IT hasta las 2 de la mañana para ayudar a solucionarlo. No hemos tenido que renovar con ellos en 3 años; simplemente se quedan.'
        },
        keyTakeaway: {
            en: 'Going above and beyond when things break creates "un-fireable" loyalty.',
            es: 'Ir más allá del deber cuando las cosas fallan crea una lealtad inquebrantable.'
        },
        adaptablePrompt: {
            en: 'Use this when discussing post-sale support or long-term partnership.',
            es: 'Úsalo cuando hables del soporte postventa o de una asociación a largo plazo.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-sales-005',
        category: 'Sales',
        type: 'story',
        tags: ['objection', 'clarity'],
        title: { en: 'The "Invisible" Blocker', es: 'El bloqueador "invisible"' },
        purpose: { en: 'Objection Handle', es: 'Manejo de objeciones' },
        story: {
            en: 'Everything was perfect, but the deal stalled. Finally, I asked: "Is there someone else whose opinion we haven\'t heard?" It turns out the CEO\'s assistant hated our old UI. We did one custom training for her, and the deal signed.',
            es: 'Todo era perfecto, pero el trato se estancó. Finalmente, pregunté: "¿Hay alguien más cuya opinión no hayamos escuchado?". Resultó que al asistente del CEO le horrorizaba nuestra antigua interfaz. Hicimos una formación personalizada para ella y se firmó el trato.'
        },
        keyTakeaway: {
            en: 'Identify every stakeholder, even the ones not on the invite list.',
            es: 'Identifica a todos los interesados, incluso a los que no están en la lista de invitados.'
        },
        adaptablePrompt: {
            en: 'Use this when a deal is "moving perfect" but not closing.',
            es: 'Úsalo cuando un trato parezca ir perfectamente pero no se cierre.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },

    // --- EXECUTIVE ---
    {
        id: 'story-exec-001',
        category: 'Executive',
        type: 'story',
        tags: ['efficiency', 'communication'],
        title: { en: 'The 2-Minute Approval', es: 'La aprobación en 2 minutos' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I spent two weeks on a 40-slide deck. The CEO stopped me on slide three and asked for the "bottom line." I gave it in two minutes. He approved the $1M budget on the spot. I learned that brevity is the language of power.',
            es: 'Pasé dos semanas preparando una presentación de 40 diapositivas. El CEO me detuvo en la tercera y me pidió la "conclusión final". Se la di en dos minutos. Aprobó el presupuesto de un millón de dólares al momento. Aprendí que la brevedad es el lenguaje del poder.'
        },
        keyTakeaway: {
            en: 'Get to the point immediately; detail is for the appendix.',
            es: 'Ve al grano de inmediato; los detalles son para el apéndice.'
        },
        adaptablePrompt: {
            en: 'Use this when coaching a team on executive communication styles.',
            es: 'Úsalo al asesorar a un equipo sobre los estilos de comunicación ejecutiva.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-exec-002',
        category: 'Executive',
        type: 'story',
        tags: ['trust', 'vulnerability'],
        title: { en: 'The Honest "I Don\'t Know"', es: 'El sincero "no lo sé"' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'In a board meeting, I was asked a complex projection question. I said, "I don’t have that specific data, and I won’t guess." The board chair later told me that answer was why they trusted my other numbers so much.',
            es: 'En una reunión de la junta, me hicieron una pregunta compleja sobre proyecciones. Dije: "No tengo ese dato específico y no voy a adivinar". El presidente de la junta me dijo más tarde que esa respuesta fue la razón por la que confiaban tanto en mis otras cifras.'
        },
        keyTakeaway: {
            en: 'Protecting your credibility is more important than having every answer.',
            es: 'Proteger tu credibilidad es más importante que tener todas las respuestas.'
        },
        adaptablePrompt: {
            en: 'Use this when discussing risk management or leadership integrity.',
            es: 'Úsalo cuando hables de gestión de riesgos o integridad en el liderazgo.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-exec-003',
        category: 'Executive',
        type: 'story',
        tags: ['strategy', 'data'],
        title: { en: 'The Pivot Data Saved', es: 'El giro que los datos salvaron' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'The team was set on Project A. I found a data set showing a 40% churn risk. By presenting just that one chart, I pivoted us to Project B, which became our highest-margin product. Data isn\'t just numbers; it\'s insurance.',
            es: 'El equipo estaba decidido por el Proyecto A. Encontré un conjunto de datos que mostraba un riesgo de abandono (churn) del 40%. Al presentar solo ese gráfico, nos desvié hacia el Proyecto B, que se convirtió en nuestro producto con mayor margen. Los datos no son solo números; son un seguro.'
        },
        keyTakeaway: {
            en: 'Objective data beats subjective opinions in the boardroom.',
            es: 'Los datos objetivos vencen a las opiniones subjetivas en la sala de juntas.'
        },
        adaptablePrompt: {
            en: 'Use this when advocating for data-driven decision making.',
            es: 'Úsalo cuando defiendas la toma de decisiones basada en datos.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-exec-004',
        category: 'Executive',
        type: 'story',
        tags: ['leadership', 'failure'],
        title: { en: 'The Leadership Mirror', es: 'El espejo del liderazgo' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I blamed a project failure on "bad market timing." My mentor asked: "If you had 100% of the responsibility, what would you change?" It changed my entire leadership style from "explainer" to "owner."',
            es: 'Atribuí el fracaso de un proyecto a un "mal momento del mercado". Mi mentor me preguntó: "Si tuvieras el 100% de la responsabilidad, ¿qué cambiarías?". Eso cambió todo mi estilo de liderazgo, de ser alguien que "da explicaciones" a ser "dueño de la situación".'
        },
        keyTakeaway: {
            en: 'Extreme ownership is the foundation of high-performance teams.',
            es: 'La responsabilidad extrema es la base de los equipos de alto rendimiento.'
        },
        adaptablePrompt: {
            en: 'Use this when discussing culture or accountability.',
            es: 'Úsalo cuando hables de cultura o rendición de cuentas.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-exec-005',
        category: 'Executive',
        type: 'story',
        tags: ['delegation', 'growth'],
        title: { en: 'The Power of Letting Go', es: 'El poder de delegar' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I was working 80 hours a week until I gave a "risky" project to a junior lead. Not only did she crush it, but she found a more efficient way to do it than I ever would have. I didn\'t just save time; I built a leader.',
            es: 'Trabajaba 80 horas a la semana hasta que le di un proyecto "arriesgado" a una jefa junior. No solo lo bordó, sino que encontró una forma más eficiente de hacerlo de lo que yo jamás hubiera logrado. No solo ahorré tiempo; formé a una líder.'
        },
        keyTakeaway: {
            en: 'Delegation is an investment in your team\'s capacity.',
            es: 'Delegar es una inversión en la capacidad de tu equipo.'
        },
        adaptablePrompt: {
            en: 'Use this when coaching new managers who struggle to let go of tasks.',
            es: 'Úsalo cuando asesores a nuevos directivos que tienen dificultades para dejar ir las tareas.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- SOCIAL ---
    {
        id: 'story-social-001',
        category: 'Social',
        type: 'story',
        tags: ['friendship', 'initiative'],
        title: { en: 'The Stranger at the Coffee Shop', es: 'El extraño de la cafetería' },
        purpose: { en: 'Ice Breaker', es: 'Rompieloos' },
        story: {
            en: 'I saw someone reading my favorite obscure book. I almost stayed quiet, but I said, "That chapter on [Topic] changed my life." We talked for two hours. Three years later, we\'re still close friends.',
            es: 'Vi a alguien leyendo mi libro raro favorito. Casi me quedo callado, pero dije: "Ese capítulo sobre [Tema] me cambió la vida". Hablamos durante dos horas. Tres años después, seguimos siendo grandes amigos.'
        },
        keyTakeaway: {
            en: 'The biggest barrier to connection is our own hesitation.',
            es: 'La mayor barrera para la conexión es nuestra propia indecisión.'
        },
        adaptablePrompt: {
            en: 'Use this to encourage others to take social risks.',
            es: 'Úsalo para animar a otros a correr riesgos sociales.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-social-002',
        category: 'Social',
        type: 'story',
        tags: ['humor', 'recovery'],
        title: { en: 'The Name-Mangle Recovery', es: 'Recuperarse tras destrozar un nombre' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'I called a major speaker by the wrong name twice. Instead of hiding, I laughed and said, "I think my brain is still on 5 AM time. Let me try that again." They laughed, and it actually broke the ice more than a perfect intro.',
            es: 'Llamé a un ponente importante por el nombre equivocado dos veces. En lugar de esconderme, me reí y dije: "Creo que mi cerebro todavía está en horario de las 5 de la mañana. Déjame intentarlo de nuevo". Se rieron, y aquello rompió el hielo más que una presentación perfecta.'
        },
        keyTakeaway: {
            en: 'Shared vulnerability through humor builds instant rapport.',
            es: 'La vulnerabilidad compartida a través del humor genera una compenetración instantánea.'
        },
        adaptablePrompt: {
            en: 'Use this when someone else makes a social gaffe to make them feel comfortable.',
            es: 'Úsalo cuando otro cometa un error social para que se sienta cómodo.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-social-003',
        category: 'Social',
        type: 'story',
        tags: ['travel', 'connection'],
        title: { en: 'The Language of a Smile', es: 'El lenguaje de una sonrisa' },
        purpose: { en: 'Ice Breaker', es: 'Rompehielos' },
        story: {
            en: 'Lost in rural France with a dead phone, I couldn\'t ask for directions. I ended up sharing a meal with a local family using only gestures and drawings. We didn\'t share a word, but we shared a lot of laughs.',
            es: 'Perdido en la Francia rural con el móvil agotado, no podía pedir indicaciones. Acabé compartiendo mesa con una familia local usando solo gestos y dibujos. No intercambiamos ni una palabra, pero sí muchas risas.'
        },
        keyTakeaway: {
            en: 'Basic human connection transcends language and status.',
            es: 'La conexión humana básica trasciende el lenguaje y el estatus.'
        },
        adaptablePrompt: {
            en: 'Use this when talking about travel or communication barriers.',
            es: 'Úsalo cuando hables de viajes o de barreras de comunicación.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-social-004',
        category: 'Social',
        type: 'story',
        tags: ['listening', 'depth'],
        title: { en: 'The Power of "Tell Me More"', es: 'El poder del "cuéntame más"' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'At a loud party, I stopped trying to be "interesting" and just asked "Tell me more" whenever someone made a point. I was told later that evening that I was "the best conversationalist there."',
            es: 'En una fiesta ruidosa, dejé de intentar ser "interesante" y me limité a preguntar "Cuéntame más" cada vez que alguien decía algo. Me dijeron más tarde esa noche que era "el mejor conversador del lugar".'
        },
        keyTakeaway: {
            en: 'People don\'t remember what you said; they remember how you made them feel.',
            es: 'La gente no recuerda lo que dijiste; recuerda cómo les hiciste sentir.'
        },
        adaptablePrompt: {
            en: 'Use this when teaching active listening techniques.',
            es: 'Úsalo cuando enseñes técnicas de escucha activa.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'story-social-005',
        category: 'Social',
        type: 'story',
        tags: ['mistake', 'laughter'],
        title: { en: 'The Zoom Mute Disaster', es: 'El desastre del silencio en Zoom' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'I gave a 5-minute passionate speech on mute. When I realized, I just did a dramatic "silent film" bow. The whole team cracked up. It turned a stressful launch into the most relaxed meeting of the month.',
            es: 'Di un apasionado discurso de 5 minutos en silencio. Cuando me di cuenta, simplemente hice una reverencia dramática de "cine mudo". Todo el equipo se partió de risa. Convirtió un lanzamiento estresante en la reunión más relajada del mes.'
        },
        keyTakeaway: {
            en: 'How you handle a mistake is more important than the mistake itself.',
            es: 'Cómo manejas un error es más importante que el error en sí.'
        },
        adaptablePrompt: {
            en: 'Use this to lighten the mood during a technical glitch.',
            es: 'Úsalo para aliviar el ambiente durante un fallo técnico.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'story-dating-001',
        category: 'Dating',
        type: 'story',
        tags: ['vulnerability', 'connection'],
        title: { en: 'The Honest Admission', es: 'La admisión sincera' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'On a first date, I was so nervous I spilled my water. I just said, "I\'m actually really excited to meet you, and clearly my motor skills are failing." My date smiled and said, "Me too." The tension vanished instantly.',
            es: 'En una primera cita, estaba tan nervioso que derramé el agua. Simplemente dije: "La verdad es que me hace mucha ilusión conocerte y, claramente, mis habilidades motoras están fallando". Mi cita sonrió y dijo: "A mí también". La tensión desapareció al instante.'
        },
        keyTakeaway: {
            en: 'Admitting your state (nervousness/excitement) is a superpower for connection.',
            es: 'Admitir tu estado (nerviosismo/emoción) es un superpoder para la conexión.'
        },
        adaptablePrompt: {
            en: 'Use this when you feel tension or nerves on a date.',
            es: 'Úsalo cuando sientas tensión o nervios en una cita.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-dating-002',
        category: 'Dating',
        type: 'story',
        tags: ['listening', 'interest'],
        title: { en: 'The 2-Hour Coffee', es: 'El café de 2 horas' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I went for a 30-minute coffee date. I focused entirely on hearing their story, not telling mine. Two hours later, we were still there. They said it was the first time they\'d felt truly "heard" on a date.',
            es: 'Fui a una cita para tomar un café de 30 minutos. Me centré por completo en escuchar su historia, no en contar la mía. Dos horas después, seguíamos allí. Me dijo que era la primera vez que se sentía realmente "escuchada" en una cita.'
        },
        keyTakeaway: {
            en: 'Curiosity is more attractive than charisma.',
            es: 'La curiosidad es más atractiva que el carisma.'
        },
        adaptablePrompt: {
            en: 'Use this to remind yourself (or others) to prioritize listening.',
            es: 'Úsalo para recordarte (o recordar a otros) que debe priorizarse el escuchar.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-dating-003',
        category: 'Dating',
        type: 'story',
        tags: ['boundaries', 'respect'],
        title: { en: 'The Respected Boundary', es: 'El límite respetado' },
        purpose: { en: 'Connection Builder', es: 'Creador de conexiones' },
        story: {
            en: 'I once told someone I wanted to take things slow and not talk about [Personal Topic] yet. They didn\'t push; they just said, "I value that honesty." That respect built more attraction than any "line" ever could.',
            es: 'Una vez le dije a alguien que quería ir despacio y no hablar de [Tema Personal] todavía. No presionó; simplemente dijo: "Valoro esa honestidad". Ese respeto generó más atracción de la que cualquier "frase" podría haber logrado.'
        },
        keyTakeaway: {
            en: 'Setting boundaries filter for people who truly value you.',
            es: 'Poner límites ayuda a filtrar a las personas que realmente te valoran.'
        },
        adaptablePrompt: {
            en: 'Use this when discussing dating ethics or early-stage connection.',
            es: 'Úsalo cuando hables de ética en las citas o de la conexión en las etapas iniciales.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'story-dating-004',
        category: 'Dating',
        type: 'story',
        tags: ['shared-laugh', 'ice-breaker'],
        title: { en: 'The Menu Disaster', es: 'El desastre del menú' },
        purpose: { en: 'Ice Breaker', es: 'Rompehielos' },
        story: {
            en: 'We both ordered the exact same dish at a restaurant, and it turned out to be terrible. We spent the next hour laughing and making up "fake reviews" for it. It was much better than a "perfect" meal.',
            es: 'Los dos pedimos exactamente el mismo plato en un restaurante y resultó ser terrible. Pasamos la hora siguiente riendo e inventando "reseñas falsas" para el plato. Fue mucho mejor que una comida "perfecta".'
        },
        keyTakeaway: {
            en: 'Shared adversity, even small, creates a team dynamic.',
            es: 'La adversidad compartida, incluso pequeña, crea una dinámica de equipo.'
        },
        adaptablePrompt: {
            en: 'Use this to pivot a bad situation into a bonding moment.',
            es: 'Úsalo para convertir una mala situación en un momento de unión.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'story-dating-005',
        category: 'Dating',
        type: 'story',
        tags: ['sincerity', 'memory'],
        title: { en: 'The Note from a Month Ago', es: 'La nota de hace un mes' },
        purpose: { en: 'Value Demo', es: 'Demostración de valor' },
        story: {
            en: 'I remembered a small detail my date mentioned about their favorite childhood snack. I brought it as a surprise on our third date. The look on their face taught me that attention is the highest form of love.',
            es: 'Recordé un pequeño detalle que mi cita mencionó sobre su merienda favorita de la infancia. Se la traje por sorpresa en nuestra tercera cita. La expresión de su rostro me enseñó que la atención es la forma más elevada de amor.'
        },
        keyTakeaway: {
            en: 'Remembering the "small" things shows you value the person, not just the date.',
            es: 'Recordar las cosas "pequeñas" demuestra que valoras a la persona, no solo la cita.'
        },
        adaptablePrompt: {
            en: 'Use this to illustrate why you take notes or prioritize small details.',
            es: 'Úsalo para ilustrar por qué tomas notas o das prioridad a los pequeños detalles.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
];
