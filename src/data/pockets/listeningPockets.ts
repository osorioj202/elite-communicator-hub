import { ListeningPocket } from '@/types';

export const LISTENING_POCKETS: ListeningPocket[] = [
    // --- EXECUTIVE ---
    {
        id: 'listening-exec-001',
        category: 'Executive',
        type: 'listening',
        tags: ['clarity', 'summary'],
        technique: { en: 'Structural Summary', es: 'Resumen estructural' },
        howToApply: {
            en: 'Summarize their complex point into three distinct buckets.',
            es: 'Resume su punto complejo en tres categorías distintas.'
        },
        examplePhrase: {
            en: 'If I hear you correctly, you’re concerned about cost, speed, and security. Did I miss anything?',
            es: 'Si le he entendido bien, le preocupan el coste, la velocidad y la seguridad. ¿Me he dejado algo?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'listening-exec-002',
        category: 'Executive',
        type: 'listening',
        tags: ['alignment', 'verification'],
        technique: { en: 'The "Bottom Line" Check', es: 'La comprobación del "resultado final"' },
        howToApply: {
            en: 'Ask them to clarify the single most important outcome they need.',
            es: 'Pídales que aclaren cuál es el resultado más importante que necesitan.'
        },
        examplePhrase: {
            en: 'We\'ve discussed a lot of requirements. If you had to pick the one "must-win" for this project, what would it be?',
            es: 'Hemos hablado de muchos requisitos. Si tuviera que elegir el único "objetivo imprescindible" de este proyecto, ¿cuál sería?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-exec-003',
        category: 'Executive',
        type: 'listening',
        tags: ['risk', 'anticipation'],
        technique: { en: 'Risk Mirroring', es: 'Reflejo de riesgos' },
        howToApply: {
            en: 'Listen for hesitant words like "maybe" or "if" and ask about the underlying concern.',
            es: 'Escuche palabras dubitativas como "tal vez" o "si" y pregunte por la preocupación subyacente.'
        },
        examplePhrase: {
            en: 'I noticed you sounded a bit hesitant when mentioning the timeline. What specific risk are you seeing there?',
            es: 'He notado que ha sonado un poco vacilante al mencionar el cronograma. ¿Qué riesgo específico ve ahí?'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'listening-exec-004',
        category: 'Executive',
        type: 'listening',
        tags: ['clarity', 'jargon'],
        technique: { en: 'Plain Language Pivot', es: 'Giro hacia el lenguaje sencillo' },
        howToApply: {
            en: 'Ask them to explain a complex or jargon-heavy point in simple terms to ensure 100% alignment.',
            es: 'Pídales que expliquen un punto complejo o lleno de tecnicismos en términos sencillos para garantizar una alineación del 100%.'
        },
        examplePhrase: {
            en: 'I want to make sure I don\'t misinterpret that technical goal. How would you explain it to a non-technical stakeholder?',
            es: 'Quiero asegurarme de no malinterpretar ese objetivo técnico. ¿Cómo se lo explicaría a un interesado no técnico?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- SALES ---
    {
        id: 'listening-sales-001',
        category: 'Sales',
        type: 'listening',
        tags: ['validation', 'empathy'],
        technique: { en: 'Emotional Echo', es: 'Eco emocional' },
        howToApply: {
            en: 'Instead of offering solutions, simply name the emotion they just described.',
            es: 'En lugar de ofrecer soluciones, limite a nombrar la emoción que acaban de describir.'
        },
        examplePhrase: {
            en: 'It sounds like that really frustrated you. I can see why that would be tough.',
            es: 'Parece que eso le frustró mucho. Entiendo por qué debe ser difícil.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-sales-002',
        category: 'Sales',
        type: 'listening',
        tags: ['discovery', 'depth'],
        technique: { en: 'The "Go On" Nudge', es: 'El estímulo de "continúa"' },
        howToApply: {
            en: 'When they stop talking, use a short verbal nudge to encourage them to keep going.',
            es: 'Cuando dejen de hablar, utilice un breve estímulo verbal para animarles a seguir.'
        },
        examplePhrase: {
            en: 'That\'s interesting. Tell me more about why you feel that way...',
            es: 'Eso es interesante. Cuénteme más sobre por qué se siente así...'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-sales-003',
        category: 'Sales',
        type: 'listening',
        tags: ['objection', 'uncovering'],
        technique: { en: 'Labeling the Silence', es: 'Etiquetar el silencio' },
        howToApply: {
            en: 'If they are quiet after a price or pitch, label the potential feeling.',
            es: 'Si se quedan callados tras conocer el precio o la propuesta, etiquete el posible sentimiento.'
        },
        examplePhrase: {
            en: 'It seems like you\'re weighing this against [Competitor/Budget]. Is that what\'s on your mind?',
            es: 'Parece que está comparando esto con [Competidor/Presupuesto]. ¿Es eso lo que tiene en mente?'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'listening-sales-004',
        category: 'Sales',
        type: 'listening',
        tags: ['need-analysis'],
        technique: { en: 'Paraphrasing for Value', es: 'Parafrasear para dar valor' },
        howToApply: {
            en: 'Repeat their pain point back to them in your own words, emphasizing the value of fixing it.',
            es: 'Repítales su punto de dolor con sus propias palabras, destacando el valor de solucionarlo.'
        },
        examplePhrase: {
            en: 'So if I understand, every hour your team spends on [Manual Task] is an hour lost on [Revenue Goal]. Is that the core issue?',
            es: 'Si lo he entendido bien, cada hora que su equipo dedica a [Tarea manual] es una hora perdida para [Objetivo de ingresos]. ¿Es ese el problema principal?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- SOCIAL ---
    {
        id: 'listening-social-001',
        category: 'Social',
        type: 'listening',
        tags: ['connection', 'active-listening'],
        technique: { en: 'The Keyword Bridge', es: 'El puente de palabras clave' },
        howToApply: {
            en: 'Pick one specific noun or verb they used and ask a follow-up about it.',
            es: 'Elija un sustantivo o verbo específico que hayan utilizado y haga una pregunta de seguimiento al respecto.'
        },
        examplePhrase: {
            en: 'You mentioned you were "overwhelmed" by the move. What was the most unexpected part of that process?',
            es: 'Has mencionado que estabas "abrumado" por la mudanza. ¿Qué fue lo más inesperado de ese proceso?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-social-002',
        category: 'Social',
        type: 'listening',
        tags: ['enthusiasm', 'validation'],
        technique: { en: 'Positive Reinforcement', es: 'Refuerzo positivo' },
        howToApply: {
            en: 'Verbally validate their effort or passion.',
            es: 'Valide verbalmente su esfuerzo o pasión.'
        },
        examplePhrase: {
            en: 'I love how much energy you have for [Hobby]. How did you first get into that?',
            es: 'Me encanta la energía que pones en [Afición]. ¿Cómo empezaste con eso?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-social-003',
        category: 'Social',
        type: 'listening',
        tags: ['depth', 'vulnerability'],
        technique: { en: 'Me-Too Validation', es: 'Validación "a mí también"' },
        howToApply: {
            en: 'Quickly validate their feeling with a "me too" before asking them to expand.',
            es: 'Valide rápidamente su sentimiento con un "a mí también" antes de pedirles que se explayen.'
        },
        examplePhrase: {
            en: 'I felt the exact same way when I started my new job. How did you handle the first week?',
            es: 'Yo me sentí exactamente igual cuando empecé mi nuevo trabajo. ¿Cómo llevaste la primera semana?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-social-004',
        category: 'Social',
        type: 'listening',
        tags: ['group-dynamics'],
        technique: { en: 'The "Inclusion" Pivot', es: 'El giro de "inclusión"' },
        howToApply: {
            en: 'Listen for someone who is being quiet in a group and pull them in based on what was just said.',
            es: 'Detecte a alguien que esté callado en un grupo e involúcralo basándote en lo que se acaba de decir.'
        },
        examplePhrase: {
            en: '[Name], you do a lot of [Topic] work too, right? What’s your take on what [Speaker] just said?',
            es: '[Nombre], tú también trabajas mucho en temas de [Tema], ¿verdad? ¿Qué opinas de lo que acaba de decir [Hablante]?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- DATING ---
    {
        id: 'listening-dating-001',
        category: 'Dating',
        type: 'listening',
        tags: ['vulnerability', 'empathy'],
        technique: { en: 'Deep Mirroring', es: 'Reflejo profundo' },
        howToApply: {
            en: 'Repeat the last 2-3 words they said with a questioning tone to invite them to go deeper.',
            es: 'Repite las últimas 2-3 palabras que han dicho con tono de pregunta para invitarles a profundizar.'
        },
        examplePhrase: {
            en: 'You felt "totally out of place"?',
            es: '¿Te sentiste "totalmente fuera de lugar"?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-dating-002',
        category: 'Dating',
        type: 'listening',
        tags: ['interest', 'validation'],
        technique: { en: 'The "Eye-Contact" Hold', es: 'Mantener el contacto visual' },
        howToApply: {
            en: 'After they finish a vulnerable point, hold eye contact for 2 seconds before speaking.',
            es: 'Cuando terminen de exponer un punto vulnerable, mantenga el contacto visual durante 2 segundos antes de hablar.'
        },
        examplePhrase: {
            en: '(Silence) ... I appreciate you sharing that with me. It sounds like that shaped who you are today.',
            es: '(Silencio) ... Te agradezco que compartas eso conmigo. Parece que eso ha influido en quién eres hoy.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'listening-dating-003',
        category: 'Dating',
        type: 'listening',
        tags: ['fun', 'engagement'],
        technique: { en: 'Playful Recapping', es: 'Recitulación juguetona' },
        howToApply: {
            en: 'Recap their long story with a funny or playful "title."',
            es: 'Resume su larga historia con un "título" divertido o bromista.'
        },
        examplePhrase: {
            en: 'So, if I have this right, the story is actually called "The Great Pizza Disaster of 2022"?',
            es: 'O sea que, si lo he entendido bien, ¿la historia se titula en realidad "El gran desastre de la pizza de 2022"?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'listening-dating-004',
        category: 'Dating',
        type: 'listening',
        tags: ['sincerity', 'memory'],
        technique: { en: 'The "Memory Recall" Validation', es: 'Validación por recuerdo de memoria' },
        howToApply: {
            en: 'Reference something they said 20 minutes ago to prove you’ve been paying attention.',
            es: 'Mencione algo que hayan dicho hace 20 minutos para demostrar que ha estado prestando atención.'
        },
        examplePhrase: {
            en: 'Going back to what you said about your dog earlier—it sounds like you really value loyalty.',
            es: 'Volviendo a lo que has dicho antes sobre tu perro... parece que valoras mucho la lealtad.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
];
