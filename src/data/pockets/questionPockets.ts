import { QuestionPocket } from '@/types';

export const QUESTION_POCKETS: QuestionPocket[] = [
    // --- SALES ---
    {
        id: 'question-sales-001',
        category: 'Sales',
        type: 'question',
        tags: ['discovery', 'pain-point'],
        situation: { en: 'Finding the real blocker', es: 'Encontrar el verdadero bloqueador' },
        question: {
            en: 'If you had a magic wand and could fix one thing about your workflow today, what would it be?',
            es: 'Si tuvieras una varita mágica y pudieras arreglar una cosa de tu flujo de trabajo hoy, ¿qué sería?'
        },
        purpose: {
            en: 'Reveals priority without the pressure of a "requirement" list.',
            es: 'Revela la prioridad sin la presión de una lista de "requisitos".'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-002',
        category: 'Sales',
        type: 'question',
        tags: ['discovery', 'impact'],
        situation: { en: 'Understanding the cost of no action', es: 'Entender el costo de no actuar' },
        question: {
            en: 'If this problem remains unresolved for the next six months, what does the impact look like for your team?',
            es: 'Si este problema sigue sin resolverse durante los próximos seis meses, ¿cuál sería el impacto para su equipo?'
        },
        purpose: {
            en: 'Quantifies the pain and creates urgency.',
            es: 'Cuantifica el dolor y crea urgencia.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-003',
        category: 'Sales',
        type: 'question',
        tags: ['decision-process'],
        situation: { en: 'Understanding who else is involved', es: 'Entender quién más está involucrado' },
        question: {
            en: 'Besides yourself, who else would feel the most relief if we got this right?',
            es: 'Además de usted, ¿quién más sentiría el mayor alivio si hacemos esto bien?'
        },
        purpose: {
            en: 'Identifies stakeholders without asking for an "org chart."',
            es: 'Identifica a los interesados sin pedir un "organigrama".'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-004',
        category: 'Sales',
        type: 'question',
        tags: ['objection', 'exploration'],
        situation: { en: 'Surface-level hesitation', es: 'Duda superficial' },
        question: {
            en: 'Setting price aside for a second, is there anything else that would keep you from moving forward with this today?',
            es: 'Dejando de lado el precio por un segundo, ¿hay algo más que le impida seguir adelante con esto hoy?'
        },
        purpose: {
            en: 'Isolates the objection to see if price is the "real" issue.',
            es: 'Aísla la objeción para ver si el precio es el problema "real".'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-005',
        category: 'Sales',
        type: 'question',
        tags: ['success-metrics'],
        situation: { en: 'Defining success', es: 'Definir el éxito' },
        question: {
            en: 'A year from now, if we’re looking back at this project as a massive success, what specifically will have happened?',
            es: 'Dentro de un año, si miramos atrás y vemos este proyecto como un éxito masivo, ¿qué habrá pasado específicamente?'
        },
        purpose: {
            en: 'Aligns your solution with their long-term vision.',
            es: 'Alinea tu solución con su visión a largo plazo.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-006',
        category: 'Sales',
        type: 'question',
        tags: ['timeline'],
        situation: { en: 'Checking urgency', es: 'Comprobar la urgencia' },
        question: {
            en: 'What\'s driven the decision to look into a solution for [Problem] specifically right now?',
            es: '¿Qué ha impulsado la decisión de buscar una solución para [Problema] específicamente ahora?'
        },
        purpose: {
            en: 'Uncovers the "trigger event" that started their search.',
            es: 'Descubre el "evento desencadenante" que inició su búsqueda.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-sales-007',
        category: 'Sales',
        type: 'question',
        tags: ['competition'],
        situation: { en: 'Researching alternatives', es: 'Investigar alternativas' },
        question: {
            en: 'What was it about your current process that made you realize it might be time to start looking at other options?',
            es: '¿Qué hubo en su proceso actual que le hizo darse cuenta de que podría ser el momento de empezar a buscar otras opciones?'
        },
        purpose: {
            en: 'Reveals the exact failure points of their current setup.',
            es: 'Revela los puntos exactos de falla de su configuración actual.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- EXECUTIVE ---
    {
        id: 'question-exec-001',
        category: 'Executive',
        type: 'question',
        tags: ['priorities', 'clarity'],
        situation: { en: 'Clarifying priorities', es: 'Aclarar prioridades' },
        question: {
            en: 'If we could only achieve one major goal this quarter at the expense of everything else, which one would it be?',
            es: 'Si solo pudiéramos lograr un objetivo importante este trimestre a expensas de todo lo demás, ¿cuál sería?'
        },
        purpose: {
            en: 'Forces ruthless prioritization and reveals true intent.',
            es: 'Fuerza una priorización implacable y revela la verdadera intención.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-002',
        category: 'Executive',
        type: 'question',
        tags: ['risk', 'assessment'],
        situation: { en: 'Identifying blind spots', es: 'Identificar puntos ciegos' },
        question: {
            en: 'What is the biggest risk we aren\'t currently talking about but should be?',
            es: '¿Cuál es el riesgo más grande del que no estamos hablando actualmente pero deberíamos estarlo?'
        },
        purpose: {
            en: 'Encourages psychological safety and radical honesty.',
            es: 'Fomenta la seguridad psicológica y la honestidad radical.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-003',
        category: 'Executive',
        type: 'question',
        tags: ['alignment'],
        situation: { en: 'Checking stakeholder buy-in', es: 'Comprobar el apoyo de los interesados' },
        question: {
            en: 'How do you think [Department Name] would react if we moved forward with this strategy tomorrow?',
            es: '¿Cómo cree que reaccionaría [Nombre del Departamento] si siguiéramos adelante con esta estrategia mañana?'
        },
        purpose: {
            en: 'Uncovers potential internal friction or political blockers.',
            es: 'Descubre fricciones internas potenciales o bloqueadores políticos.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-004',
        category: 'Executive',
        type: 'question',
        tags: ['success', 'definition'],
        situation: { en: 'Defining "done"', es: 'Definir lo "terminado"' },
        question: {
            en: 'What does a "Minimum Viable Success" look like for this initiative in your eyes?',
            es: '¿Cómo se ve un "Éxito Mínimo Viable" para esta iniciativa a sus ojos?'
        },
        purpose: {
            en: 'Sets a realistic floor for expectations.',
            es: 'Establece un suelo realista para las expectativas.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-005',
        category: 'Executive',
        type: 'question',
        tags: ['resources', 'reality-check'],
        situation: { en: 'Checking resource feasibility', es: 'Comprobar la viabilidad de los recursos' },
        question: {
            en: 'If we stay on our current resource path, what\'s the first thing that’s going to break?',
            es: 'Si seguimos en nuestro camino actual de recursos, ¿qué es lo primero que se va a romper?'
        },
        purpose: {
            en: 'Highlights resource gaps through a lens of "inevitable failure."',
            es: 'Destaca las brechas de recursos a través de la lente del "fracaso inevitable".'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-006',
        category: 'Executive',
        type: 'question',
        tags: ['impact', 'strategy'],
        situation: { en: 'Checking long-term strategy', es: 'Comprobar la estrategia a largo plazo' },
        question: {
            en: 'Does this decision still make sense if our primary competitor pivots to [Scenario] next year?',
            es: '¿Sigue teniendo sentido esta decisión si nuestro principal competidor gira hacia [Escenario] el próximo año?'
        },
        purpose: {
            en: 'Tests the resilience of a proposal.',
            es: 'Prueba la resiliencia de una propuesta.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-exec-007',
        category: 'Executive',
        type: 'question',
        tags: ['leadership', 'culture'],
        situation: { en: 'Improving team culture', es: 'Mejorar la cultura de equipo' },
        question: {
            en: 'What is the "unwritten rule" that is currently holding this team back from its full potential?',
            es: '¿Cuál es la "regla no escrita" que actualmente está frenando a este equipo de alcanzar su máximo potencial?'
        },
        purpose: {
            en: 'Identifies cultural bottlenecks that metrics can\'t see.',
            es: 'Identifica cuellos de botella culturales que las métricas no pueden ver.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },

    // --- SOCIAL ---
    {
        id: 'question-social-001',
        category: 'Social',
        type: 'question',
        tags: ['intro', 'ice-breaker'],
        situation: { en: 'Moving past small talk', es: 'Ir más allá de la charla trivial' },
        question: {
            en: 'What is something that most people get wrong about you at first glance?',
            es: '¿Qué es algo que la mayoría de la gente se equivoca sobre ti a primera vista?'
        },
        purpose: {
            en: 'Uncovers their self-perception and invites vulnerability.',
            es: 'Descubre su autopercepción e invita a la vulnerabilidad.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-002',
        category: 'Social',
        type: 'question',
        tags: ['experience', 'values'],
        situation: { en: 'Deepening connection', es: 'Profundizar la conexión' },
        question: {
            en: 'What is a piece of advice you followed for years that you’ve finally decided to ignore?',
            es: '¿Qué consejo seguiste durante años y finalmente has decidido ignorar?'
        },
        purpose: {
            en: 'Reveals growth, maturity, and core values.',
            es: 'Revela crecimiento, madurez y valores fundamentales.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-003',
        category: 'Social',
        type: 'question',
        tags: ['passion', 'recreation'],
        situation: { en: 'Finding common ground', es: 'Encontrar puntos en común' },
        question: {
            en: 'If you had a completely free Saturday with no obligations and a $500 budget, how would you spend it?',
            es: 'Si tuvieras un sábado completamente libre, sin obligaciones y un presupuesto de $500, ¿cómo lo pasarías?'
        },
        purpose: {
            en: 'Reveals their true passions and lifestyle preferences.',
            es: 'Revela sus verdaderas pasiones y preferencias de estilo de vida.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-004',
        category: 'Social',
        type: 'question',
        tags: ['career', 'motivation'],
        situation: { en: 'Discussing work naturally', es: 'Hablar de trabajo de forma natural' },
        question: {
            en: 'What was the moment you realized you wanted to do [Profession] for a living?',
            es: '¿Cuál fue el momento en que te diste cuenta de que querías dedicarte a [Profesión]?'
        },
        purpose: {
            en: 'Pivot work talk from "what do you do" to "why do you do it."',
            es: 'Cambia la charla de trabajo de "¿a qué te dedicas?" a "¿por qué lo haces?".'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-005',
        category: 'Social',
        type: 'question',
        tags: ['travel', 'dreams'],
        situation: { en: 'Discussing travel/dreams', es: 'Hablar de viajes/sueños' },
        question: {
            en: 'If you could move to any city in the world tomorrow without it affecting your job or family, where would you go?',
            es: 'Si pudieras mudarte a cualquier ciudad del mundo mañana sin que afectara a tu trabajo o familia, ¿a dónde irías?'
        },
        purpose: {
            en: 'Explores their "fantasy self" and aesthetic preferences.',
            es: 'Explora su "yo de fantasía" y preferencias estéticas.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-006',
        category: 'Social',
        type: 'question',
        tags: ['exit', 'follow-up'],
        situation: { en: 'Exiting with a hook', es: 'Salir con un gancho' },
        question: {
            en: 'I have to run in a minute, but before I go—you mentioned [Topic], what was the name of that place again?',
            es: 'Tengo que irme en un minuto, pero antes de irme, mencionaste [Tema], ¿cómo se llamaba ese lugar otra vez?'
        },
        purpose: {
            en: 'Creates a natural exit while leaving a "memory hook" for next time.',
            es: 'Crea una salida natural dejando un "gancho de memoria" para la próxima vez.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-social-007',
        category: 'Social',
        type: 'question',
        tags: ['depth', 'reflection'],
        situation: { en: 'Refining social circle', es: 'Refinar el círculo social' },
        question: {
            en: 'What\'s something you\'ve changed your mind about in the last year?',
            es: '¿Sobre qué cosa has cambiado de opinión en el último año?'
        },
        purpose: {
            en: 'Opens up reflection and values without being too personal.',
            es: 'Abre la reflexión y los valores sin ser demasiado personal.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'question-dating-001',
        category: 'Dating',
        type: 'question',
        tags: ['values', 'alignment'],
        situation: { en: 'Checking value alignment', es: 'Comprobar la alineación de valores' },
        question: {
            en: 'What is the quality you admire most in other people but find hardest to practice yourself?',
            es: '¿Cuál es la cualidad que más admiras en los demás pero que te resulta más difícil practicar a ti mismo?'
        },
        purpose: {
            en: 'Invites honesty and reveals self-awareness.',
            es: 'Invita a la honestidad y revela autoconciencia.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-002',
        category: 'Dating',
        type: 'question',
        tags: ['passion', 'dreams'],
        situation: { en: 'Discovering their "why"', es: 'Descubrir su "por qué"' },
        question: {
            en: 'If money was no object and all your bills were paid, what would you spend your time building?',
            es: 'Si el dinero no fuera problema y todas tus cuentas estuvieran pagadas, ¿a qué dedicarías tu tiempo?'
        },
        purpose: {
            en: 'Reveals their deepest ambitions and soul-level interests.',
            es: 'Revela sus ambiciones más profundas e intereses a nivel de alma.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-003',
        category: 'Dating',
        type: 'question',
        tags: ['fun', 'lifestyle'],
        situation: { en: 'Checking lifestyle fit', es: 'Comprobar el ajuste del estilo de vida' },
        question: {
            en: 'What’s your "guilty pleasure" that you’re actually not guilty about at all?',
            es: '¿Cuál es tu "placer culposo" del que en realidad no te sientes culpable en absoluto?'
        },
        purpose: {
            en: 'Light-hearted bonding over shared "un-cool" interests.',
            es: 'Conexión desenfadada sobre intereses compartidos "poco geniales".'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-004',
        category: 'Dating',
        type: 'question',
        tags: ['connection', 'vulnerability'],
        situation: { en: 'Building emotional connection', es: 'Crear conexión emocional' },
        question: {
            en: 'What is a memory from your childhood that makes you smile every time you think of it?',
            es: '¿Cuál es un recuerdo de tu infancia que te hace sonreír cada vez que piensas en él?'
        },
        purpose: {
            en: 'Evokes positive nostalgia and builds trust.',
            es: 'Evoca nostalgia positiva y genera confianza.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-005',
        category: 'Dating',
        type: 'question',
        tags: ['future', 'vision'],
        situation: { en: 'Light future talk', es: 'Charla ligera sobre el futuro' },
        question: {
            en: 'What is one thing you haven\'t done yet but are absolutely certain you will do in your lifetime?',
            es: '¿Qué es una cosa que aún no has hecho pero de la que estás absolutamente seguro de que harás en tu vida?'
        },
        purpose: {
            en: 'Shows vision and determination.',
            es: 'Muestra visión y determinación.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-006',
        category: 'Dating',
        type: 'question',
        tags: ['humor', 'dating'],
        situation: { en: 'Breaking the ice on dating', es: 'Romper el hielo en las citas' },
        question: {
            en: 'What is the absolute worst piece of dating advice you’ve ever received?',
            es: '¿Cuál es el peor consejo sobre citas que has recibido en tu vida?'
        },
        purpose: {
            en: 'Bonding over the shared experience/absurdity of dating.',
            es: 'Conexión sobre la experiencia compartida/absurdo de las citas.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'question-dating-007',
        category: 'Dating',
        type: 'question',
        tags: ['interest', 'discovery'],
        situation: { en: 'Showing sincere interest', es: 'Mostrar interés sincero' },
        question: {
            en: 'What’s something you could talk about for 30 minutes with zero preparation?',
            es: '¿De qué podrías hablar durante 30 minutos sin ninguna preparación?'
        },
        purpose: {
            en: 'Discovers their "expert" zones and high-energy topics.',
            es: 'Descubre sus zonas de "experto" y temas de alta energía.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
