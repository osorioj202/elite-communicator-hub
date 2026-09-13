import { TransitionPocket } from '@/types';

export const TRANSITION_POCKETS: TransitionPocket[] = [
    // --- SALES ---
    {
        id: 'transition-sales-001',
        category: 'Sales',
        type: 'transition',
        tags: ['pivot', 'agenda'],
        from: { en: 'Small talk', es: 'Charla trivial' },
        to: { en: 'Business agenda', es: 'Agenda de negocios' },
        bridgePhrase: {
            en: 'I could honestly talk about [Shared Topic] all day, but I want to be respectful of your time. Shall we dive into the agenda?',
            es: 'Sinceramente, podría estar todo el día hablando de [Tema compartido], pero quiero ser respetuoso con su tiempo. ¿Pasamos al orden del día?'
        },
        example: {
            en: '...that hiking trail sounds incredible. I could talk about nature all day, but I want to stay on schedule. Shall we look at the Q1 goals?',
            es: '...esa ruta de senderismo suena increíble. Podría pasarme el día hablando de la naturaleza, pero quiero cumplir el horario. ¿Vemos los objetivos del primer trimestre?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1,
        relatedScenarioIds: ['cold-call']
    },
    {
        id: 'transition-sales-002',
        category: 'Sales',
        type: 'transition',
        tags: ['objection', 'solution'],
        from: { en: 'Objection / Pain', es: 'Objeción / Dolor' },
        to: { en: 'Specific Solution', es: 'Solución específica' },
        bridgePhrase: {
            en: 'It sounds like [Pain] is the primary bottleneck. If we could automate that part specifically, would that solve the issue, or is there more to it?',
            es: 'Parece que [Dolor] es el principal cuello de botella. Si pudiéramos automatizar esa parte específicamente, ¿se resolvería el problema o hay algo más?'
        },
        example: {
            en: 'It sounds like the manual data entry is the main bottleneck. If we could automate that part, would that solve the problem?',
            es: 'Parece que la introducción manual de datos es el principal cuello de botella. Si pudiéramos automatizar esa parte, ¿se resolvería el problema?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2,
        relatedScenarioIds: ['price-objection']
    },
    {
        id: 'transition-sales-003',
        category: 'Sales',
        type: 'transition',
        tags: ['features', 'benefits'],
        from: { en: 'Technical Features', es: 'Características técnicas' },
        to: { en: 'Business Benefits', es: 'Beneficios empresariales' },
        bridgePhrase: {
            en: 'What that means for you on a day-to-day basis is [Benefit], which ultimately helps with [Goal].',
            es: 'Lo que eso significa para usted en el día a día es [Beneficio], lo que en última instancia ayuda con [Objetivo].'
        },
        example: {
            en: 'We use a 256-bit encryption layer. What that means for you is your data is secure enough for board-level audits.',
            es: 'Utilizamos una capa de encriptación de 256 bits. Lo que eso significa para usted es que sus datos son lo suficientemente seguros para las auditorías a nivel de junta directiva.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-sales-004',
        category: 'Sales',
        type: 'transition',
        tags: ['price', 'roi'],
        from: { en: 'Price Concern', es: 'Preocupación por el precio' },
        to: { en: 'ROI/Value', es: 'ROI/Valor' },
        bridgePhrase: {
            en: 'I understand the initial cost is a factor. Let’s look at what the cost of NOT solving [Problem] is over the next year.',
            es: 'Entiendo que el coste inicial es un factor. Veamos cuál es el coste de NO resolver [Problema] durante el próximo año.'
        },
        example: {
            en: 'I hear you on the budget. Let\'s look at the $20k you\'re currently losing every month to this inefficiency.',
            es: 'Le escucho sobre el presupuesto. Veamos los 20.000 dólares que pierde actualmente cada mes debido a esta ineficacia.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'transition-sales-005',
        category: 'Sales',
        type: 'transition',
        tags: ['closing', 'next-steps'],
        from: { en: 'Meeting content', es: 'Contenido de la reunión' },
        to: { en: 'Next steps / Calendar', es: 'Próximos pasos / Calendario' },
        bridgePhrase: {
            en: 'We\'ve covered a lot of ground. To keep the momentum, let’s get the next step on the calendar now while we’re both here.',
            es: 'Hemos avanzado mucho. Para mantener el ritmo, fijemos ahora mismo el siguiente paso en el calendario, aprovechando que estamos los dos aquí.'
        },
        example: {
            en: 'This was a great deep-dive. Let\'s get the demo on the calendar now so we don\'t have an email back-and-forth.',
            es: 'Ha sido una gran profundización. Pongamos ahora la demo en el calendario para no tener que andar de un lado a otro con el correo electrónico.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- EXECUTIVE ---
    {
        id: 'transition-exec-001',
        category: 'Executive',
        type: 'transition',
        tags: ['problem-solving'],
        from: { en: 'Analyzing the problem', es: 'Analizar el problema' },
        to: { en: 'Proposing the solution', es: 'Proponer la solución' },
        bridgePhrase: {
            en: 'Now that we have a shared understanding of the root cause, I recommend we focus our resources on [Solution].',
            es: 'Ahora que compartimos el origen del problema, recomiendo que centremos nuestros recursos en [Solución].'
        },
        example: {
            en: 'Now that we see the delay is a vendor issue, I recommend we activate our secondary supplier immediately.',
            es: 'Ahora que vemos que el retraso es un problema del proveedor, recomiendo que activemos a nuestro proveedor secundario inmediatamente.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-exec-002',
        category: 'Executive',
        type: 'transition',
        tags: ['data', 'action'],
        from: { en: 'Presenting data', es: 'Presentar datos' },
        to: { en: 'Making a recommendation', es: 'Hacer una recomendación' },
        bridgePhrase: {
            en: 'The data is quite clear on [Insight]. Based on this, the logical path forward is [Recommendation].',
            es: 'Los datos son bastante claros sobre [Insight]. Basándonos en esto, el camino lógico a seguir es [Recomendación].'
        },
        example: {
            en: 'The data shows a 20% drop in engagement. Based on this, I recommend we pivot our marketing spend to video content.',
            es: 'Los datos muestran un descenso del 20% en el compromiso. Sobre esta base, recomiendo que dirijamos nuestro gasto en marketing a contenidos de vídeo.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-exec-003',
        category: 'Executive',
        type: 'transition',
        tags: ['update', 'ask'],
        from: { en: 'Project update', es: 'Actualización del proyecto' },
        to: { en: 'Resource/Budget ask', es: 'Solicitud de recursos/presupuesto' },
        bridgePhrase: {
            en: 'The project is hitting its milestones. To accelerate this even further and capture [Opportunity], I’m requesting [Resource].',
            es: 'El proyecto está cumpliendo sus hitos. Para acelerarlo aún más y captar [Oportunidad], solicito [Recurso].'
        },
        example: {
            en: 'The beta is live. To scale this for the full launch, I\'m requesting two additional engineering heads.',
            es: 'La beta ya está activa. Para ampliarla para el lanzamiento definitivo, solicito dos jefes de ingeniería adicionales.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'transition-exec-004',
        category: 'Executive',
        type: 'transition',
        tags: ['disagreement', 'common-ground'],
        from: { en: 'Disagreement', es: 'Desacuerdo' },
        to: { en: 'Common Ground / Path Forward', es: 'Puntos en común / Camino a seguir' },
        bridgePhrase: {
            en: 'We have different takes on the "how," but we both agree that [Goal] is the priority. Let’s look at [Option] as a middle ground.',
            es: 'Tenemos puntos de vista diferentes sobre el "cómo", pero ambos coincidimos en que [Objetivo] es la prioridad. Busquemos un punto medio con [Opción].'
        },
        example: {
            en: 'We differ on the timeline, but we both want 100% uptime. Let\'s look at a phased rollout as a compromise.',
            es: 'Diferimos en el cronograma, pero ambos queremos un tiempo de actividad del 100%. Veamos un despliegue por fases como compromiso.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'transition-exec-005',
        category: 'Executive',
        type: 'transition',
        tags: ['status', 'risks'],
        from: { en: 'Everything is fine', es: 'Todo va bien' },
        to: { en: 'Potential future risks', es: 'Posibles riesgos futuros' },
        bridgePhrase: {
            en: 'The current status is healthy, but looking 3 months out, the biggest risk to our success is [Risk].',
            es: 'El estado actual es saludable, pero mirando a 3 meses vista, el mayor riesgo para nuestro éxito es [Riesgo].'
        },
        example: {
            en: 'We are on track for Q3, but the biggest risk for Q4 is the upcoming hardware shortage.',
            es: 'Estamos en camino para el tercer trimestre, pero el mayor riesgo para el cuarto es la inminente escasez de hardware.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },

    // --- SOCIAL ---
    {
        id: 'transition-social-001',
        category: 'Social',
        type: 'transition',
        tags: ['depth', 'pivot'],
        from: { en: 'Surface talk', es: 'Charla superficial' },
        to: { en: 'Deep/Personal topics', es: 'Temas profundos/personales' },
        bridgePhrase: {
            en: 'Enough about [Surface Topic]—I want to know more about the person who spends their time [Hobby/Passion]. What drives you?',
            es: 'Basta de hablar de [Tema superficial]: quiero saber más sobre la persona que dedica su tiempo a [Hobby/Pasión]. ¿Qué te motiva?'
        },
        example: {
            en: 'Enough about the weather—I want to know more about the person who spends their weekends volunteering. What drives you?',
            es: 'Basta de hablar del tiempo: quiero saber más sobre la persona que dedica sus fines de semana al voluntariado. ¿Qué te motiva?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-social-002',
        category: 'Social',
        type: 'transition',
        tags: ['group', 'one-on-one'],
        from: { en: 'General group chat', es: 'Chat de grupo general' },
        to: { en: 'Private sidebar', es: 'Conversación privada aparte' },
        bridgePhrase: {
            en: 'I actually had a more specific question about what you said earlier. Mind if we grab a quiet corner for a second?',
            es: 'En realidad tenía una pregunta más específica sobre lo que has dicho antes. ¿Te importa si buscamos un rincón tranquilo un segundo?'
        },
        example: {
            en: 'I loved your point about AI. Mind if we step over there? I had a specific question for you.',
            es: 'Me ha encantado lo que has dicho sobre la IA. ¿Te importa si nos acercamos allí? Tengo una pregunta específica para ti.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-social-003',
        category: 'Social',
        type: 'transition',
        tags: ['exit', 'hook'],
        from: { en: 'Middle of conversation', es: 'A mitad de la conversación' },
        to: { en: 'Graceful exit', es: 'Salida elegante' },
        bridgePhrase: {
            en: 'I’ve really enjoyed this, but I promised myself I’d catch [Person] before they left. Let’s definitely pick this up later!',
            es: 'Me ha gustado mucho, pero me prometí a mí mismo que vería a [Persona] antes de que se fuera. ¡Hablemos de esto en otro momento!'
        },
        example: {
            en: 'I could talk about travel all night, but I need to say hi to the host. Let\'s exchange numbers and finish this?',
            es: 'Podría pasarme toda la noche hablando de viajes, pero tengo que saludar al anfitrión. ¿Intercambiamos los números y terminamos esto?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-social-004',
        category: 'Social',
        type: 'transition',
        tags: ['stranger', 'friend'],
        from: { en: 'Small talk', es: 'Charla trivial' },
        to: { en: 'Planning a future meet', es: 'Planear una futura cita' },
        bridgePhrase: {
            en: 'It’s rare to find someone else into [Niche Topic]. We should grab a coffee sometime and geek out—you in?',
            es: 'Es raro encontrar a alguien que le guste [Tema específico]. Deberíamos tomar un café algún día y hablar de ello, ¿te apuntas?'
        },
        example: {
            en: 'It\'s rare to find another person who likes 70s jazz. We should check out that club on 5th sometime—you in?',
            es: 'Es raro encontrar a otra persona a la que le guste el jazz de los 70. Deberíamos ir a ese club de la calle 5 alguna vez, ¿te apuntas?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-social-005',
        category: 'Social',
        type: 'transition',
        tags: ['topic-switch'],
        from: { en: 'Stale topic', es: 'Tema trillado' },
        to: { en: 'Refreshing new topic', es: 'Nuevo tema refrescante' },
        bridgePhrase: {
            en: 'That actually reminds me of something completely different—have you seen [Recent Event/News]?',
            es: 'Eso me recuerda algo completamente distinto: ¿has visto [Evento reciente/Noticia]?'
        },
        example: {
            en: 'That actually reminds me—have you heard about the new park opening downtown?',
            es: 'Eso me recuerda... ¿has oído lo del nuevo parque que van a inaugurar en el centro?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'transition-dating-001',
        category: 'Dating',
        type: 'transition',
        tags: ['personal', 'pivot'],
        from: { en: 'Safe/Generic questions', es: 'Preguntas seguras/genéricas' },
        to: { en: 'Personal/Soulful questions', es: 'Preguntas personales/profundas' },
        bridgePhrase: {
            en: 'I feel like I know your "LinkedIn profile" now, but I’d love to know what actually makes you [Trait/Emotion].',
            es: 'Siento que ya conozco tu "perfil de LinkedIn", pero me encantaría saber qué es lo que realmente te hace ser [Rasgo/Emoción].'
        },
        example: {
            en: 'I feel like I know your resume now, but I\'d love to know what actually makes you so optimistic.',
            es: 'Siento que ya conozco tu currículum, pero me encantaría saber qué es lo que realmente te hace ser tan optimista.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'transition-dating-002',
        category: 'Dating',
        type: 'transition',
        tags: ['planning'],
        from: { en: 'Casual texting/Chatting', es: 'Mensajes casuales/Chatear' },
        to: { en: 'Setting the date', es: 'Fijar la cita' },
        bridgePhrase: {
            en: 'The "get to know you" phase is great, but I think our chemistry would be much better in person. Dinner on Friday?',
            es: 'La fase de "conocerse" está bien, pero creo que nuestra química sería mucho mejor en persona. ¿Cenamos el viernes?'
        },
        example: {
            en: 'Texting is fun, but I\'d rather hear your voice. Coffee this Saturday?',
            es: 'Mensajearse es divertido, pero prefiero oír tu voz. ¿Un café este sábado?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-dating-003',
        category: 'Dating',
        type: 'transition',
        tags: ['vulnerability'],
        from: { en: 'Playful/Fun tone', es: 'Tono juguetón/divertido' },
        to: { en: 'Sincere/Vulnerable tone', es: 'Tono sincero/vulnerable' },
        bridgePhrase: {
            en: 'Joking aside, I really appreciate that you shared that. It means a lot to me.',
            es: 'Bromas aparte, agradezco mucho que hayas compartido eso. Significa mucho para mí.'
        },
        example: {
            en: 'Joking aside, I really value your honesty about your past. It means a lot.',
            es: 'Bromas aparte, valoro mucho tu sinceridad sobre tu pasado. Significa mucho.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-dating-004',
        category: 'Dating',
        type: 'transition',
        tags: ['post-date'],
        from: { en: 'End of date', es: 'Final de la cita' },
        to: { en: 'Future follow-up', es: 'Seguimiento futuro' },
        bridgePhrase: {
            en: 'I had a great time tonight. I’ll give you a shout in a few days to plan our next adventure.',
            es: 'Me lo he pasado muy bien esta noche. Te daré un toque en unos días para planear nuestra próxima aventura.'
        },
        example: {
            en: 'Tonight was wonderful. I\'ll text you on Monday so we can set up that hike?',
            es: 'Esta noche ha sido maravillosa. ¿Te escribo el lunes para organizar esa caminata?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'transition-dating-005',
        category: 'Dating',
        type: 'transition',
        tags: ['escalation'],
        from: { en: 'Logical topics', es: 'Temas lógicos' },
        to: { en: 'Emotional topics', es: 'Temas emocionales' },
        bridgePhrase: {
            en: 'Enough about accounting—I want to know more about the person who chooses to spend their weekends [Hobby]. What drives you?',
            es: 'Basta de hablar de contabilidad: quiero saber más sobre la persona que decide pasar sus fines de semana [Hobby]. ¿Qué te motiva?'
        },
        example: {
            en: 'Enough about tech—I want to know more about the person who spends their weekends volunteering. What drives you?',
            es: 'Basta de hablar de tecnología: quiero saber más sobre la persona que dedica sus fines de semana al voluntariado. ¿Qué te motiva?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
];
