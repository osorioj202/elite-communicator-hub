import { RecoveryPocket } from '@/types';

export const RECOVERY_POCKETS: RecoveryPocket[] = [
    // --- ALL CATEGORIES / SALES ---
    {
        id: 'recovery-sales-001',
        category: 'Sales',
        type: 'recovery',
        tags: ['blanking-out', 'composure'],
        trigger: {
            en: 'When you completely lose your train of thought mid-pitch',
            es: 'Cuando pierdes completamente el hilo de lo que decías en mitad de una presentación'
        },
        recoveryPhrase: {
            en: 'I just got so excited about that last point that I completely derailed my own train of thought. Where were we?',
            es: 'Me he emocionado tanto con ese último punto que he perdido totalmente el hilo. ¿Por dónde íbamos?'
        },
        followUp: {
            en: 'People love to help others who are authentic. They will happily recap for you.',
            es: 'A la gente le encanta ayudar a los demás cuando son auténticos. Te harán un resumen encantados.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-sales-002',
        category: 'Sales',
        type: 'recovery',
        tags: ['interruption', 'respect'],
        trigger: {
            en: 'When you accidentally interrupt a prospect',
            es: 'Cuando interrumpes accidentalmente a un prospecto'
        },
        recoveryPhrase: {
            en: 'I am so sorry, I stepped on your point there. Please finish what you were saying.',
            es: 'Lo siento muchísimo, le he interrumpido. Por favor, termine lo que estaba diciendo.'
        },
        followUp: {
            en: 'Stopping immediately shows high social IQ and respect for their input.',
            es: 'Parar de inmediato demuestra un alto cociente intelectual social y respeto por su aportación.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-sales-003',
        category: 'Sales',
        type: 'recovery',
        tags: ['aggressive', 'tone'],
        trigger: {
            en: 'When you realize you\'re being too "pushy"',
            es: 'Cuando te das cuenta de que estás siendo demasiado "insistente"'
        },
        recoveryPhrase: {
            en: 'Let me take a step back. I realize I’m coming on a bit strong because I’m passionate about this, but I want to make sure I’m actually solving a problem for you.',
            es: 'Permítame dar un paso atrás. Me doy cuenta de que estoy siendo un poco directo porque esto me apasiona, pero quiero asegurarme de que realmente estoy resolviendo un problema para usted.'
        },
        followUp: {
            en: 'Relabeling your aggression as "passion" while acknowledging the behavior preserves the relationship.',
            es: 'Etiquetar tu agresividad como "pasión" a la vez que reconoces el comportamiento preserva la relación.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'recovery-sales-004',
        category: 'Sales',
        type: 'recovery',
        tags: ['misinformation', 'honesty'],
        trigger: {
            en: 'When you realize you just gave a wrong stat/price',
            es: 'Cuando te das cuenta de que acabas de dar un dato o un precio equivocado'
        },
        recoveryPhrase: {
            en: 'Wait, let me correct myself before we go further. I just realized I gave you the [Metric] for [Other Version]. The actual number is [Correct Number].',
            es: 'Espere, déjame corregirme antes de seguir. Me acabo de dar cuenta de que le he dado el [Dato] de [Otra versión]. El número real es [Número correcto].'
        },
        followUp: {
            en: 'Correcting yourself quickly builds more trust than being "perfect" but wrong.',
            es: 'Corregirse rápidamente genera más confianza que ser "perfecto" pero estar equivocado.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-sales-005',
        category: 'Sales',
        type: 'recovery',
        tags: ['passive', 'clarity'],
        trigger: {
            en: 'When you\'ve been too passive and the prospect is taking over',
            es: 'Cuando has sido demasiado pasivo y el prospecto está tomando el control'
        },
        recoveryPhrase: {
            en: 'You\'ve made some great points. To make sure we\'re staying on track for our goal today, let\'s pivot back to [Topic].',
            es: 'Ha planteado puntos excelentes. Para asegurarnos de que no nos desviamos del objetivo de hoy, volvamos a [Tema].'
        },
        followUp: {
            en: 'Frame the redirect as "staying on track for the goal."',
            es: 'Plantea el redireccionamiento como "no desviarse del objetivo".'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- EXECUTIVE ---
    {
        id: 'recovery-exec-001',
        category: 'Executive',
        type: 'recovery',
        tags: ['blanking-out', 'authority'],
        trigger: {
            en: 'When you blank out in a high-stakes presentation',
            es: 'Cuando te quedas en blanco en una presentación de alto nivel'
        },
        recoveryPhrase: {
            en: 'Let me pause for a moment to make sure I articulate this next piece clearly—it’s critical to our strategy.',
            es: 'Permítanme hacer una pausa un momento para asegurarme de articular con claridad el siguiente punto: es fundamental para nuestra estrategia.'
        },
        followUp: {
            en: 'Taking a 3-second pause with a "reason" looks like deep thought, not a memory lapse.',
            es: 'Hacer una pausa de 3 segundos con un "motivo" parece una reflexión profunda, no un fallo de memoria.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'recovery-exec-002',
        category: 'Executive',
        type: 'recovery',
        tags: ['caught-off-guard', 'buying-time'],
        trigger: {
            en: 'When asked a "trap" or "gotcha" question by a superior',
            es: 'Cuando un superior te hace una pregunta con "trampa" o para pillarte'
        },
        recoveryPhrase: {
            en: 'That’s a nuanced point. I want to give you a thorough answer rather than a reaction. Can I pull the data and get back to you in an hour?',
            es: 'Ese es un punto con muchos matices. Quiero darle una respuesta exhaustiva en lugar de una simple reacción. ¿Puedo consultar los datos y responderle en una hora?'
        },
        followUp: {
            en: 'Always trade "speed" for "accuracy" when dealing with executives.',
            es: 'Prioriza siempre la "precisión" sobre la "rapidez" cuando trates con ejecutivos.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-exec-003',
        category: 'Executive',
        type: 'recovery',
        tags: ['contradiction', 'clarity'],
        trigger: {
            en: 'When you contradict a previous statement you made',
            es: 'Cuando contradices una afirmación que hiciste anteriormente'
        },
        recoveryPhrase: {
            en: 'Actually, looking at the latest context, I need to update my earlier point. The current reality is [Updated Fact].',
            es: 'En realidad, viendo el contexto más reciente, tengo que actualizar mi punto anterior. La realidad actual es [Dato actualizado].'
        },
        followUp: {
            en: 'Frame it as "updating with new context" rather than "I was wrong."',
            es: 'Plantealo como una "actualización con nuevo contexto" en lugar de "me he equivocado".'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-exec-004',
        category: 'Executive',
        type: 'recovery',
        tags: ['awkward-silence', 'leadership'],
        trigger: {
            en: 'When a question you asked is met with total silence',
            es: 'Cuando una pregunta que haces es recibida con un silencio absoluto'
        },
        recoveryPhrase: {
            en: 'It looks like everyone is processing that. Let me rephrase: from your specific perspective in [Dept], what is the biggest hurdle?',
            es: 'Parece que todo el mundo está asimilando la idea. Permítanme reformular la pregunta: desde su perspectiva específica en [Dpto.], ¿cuál es el mayor obstáculo?'
        },
        followUp: {
            en: 'Rephrase the question to be more specific to one person/group to break the silence.',
            es: 'Reformula la pregunta para que sea más específica para una persona o grupo para romper el silencio.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-exec-005',
        category: 'Executive',
        type: 'recovery',
        tags: ['interruption', 'authority'],
        trigger: {
            en: 'When you get interrupted by a peer in a meeting',
            es: 'Cuando un compañero te interrumpe en una reunión'
        },
        recoveryPhrase: {
            en: 'One second, [Name], let me just finish this thought so we have the full context, and then I\'d love to hear your take.',
            es: 'Un segundo, [Nombre], déjame terminar esta idea para que tengamos todo el contexto y después me encantaría escuchar tu opinión.'
        },
        followUp: {
            en: 'Gentle but firm "hand-up" gesture while continuing to speak.',
            es: 'Haz un gesto de "mano levantada" suave pero firme mientras sigues hablando.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },

    // --- SOCIAL ---
    {
        id: 'recovery-social-001',
        category: 'Social',
        type: 'recovery',
        tags: ['awkward', 'humor'],
        trigger: {
            en: 'When you say something that "kills the vibe"',
            es: 'Cuando dices algo que "corta el rollo"'
        },
        recoveryPhrase: {
            en: 'Wow, that was a total mood-killer, wasn\'t it? Let\'s pretend I just said something incredibly charming instead. How about that [Topic]?',
            es: 'Vaya, eso ha cortado el rollo totalmente, ¿verdad? Vamos a fingir que en su lugar he dicho algo increíblemente encantador. ¿Qué me decís de [Tema]?'
        },
        followUp: {
            en: 'Acknowledging the awkwardness with humor is the fastest way to kill it.',
            es: 'Reconocer la incomodidad con humor es la forma más rápida de acabar con ella.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-social-002',
        category: 'Social',
        type: 'recovery',
        tags: ['name-forget', 'honesty'],
        trigger: {
            en: 'When you realize you\'ve been talking to someone for 5 mins and forgot their name',
            es: 'Cuando te das cuenta de que llevas 5 minutos hablando con alguien y has olvidado su nombre'
        },
        recoveryPhrase: {
            en: 'I am so sorry, I inherited my father\'s terrible memory for names. Could you remind me of yours one more time? I\'ve got the rest of our chat locked in though!',
            es: 'Lo siento muchísimo, he heredado la terrible memoria de mi padre para los nombres. ¿Podrías recordarme el tuyo una vez más? ¡Tengo grabado a fuego el resto de nuestra charla!'
        },
        followUp: {
            en: 'The "compliment sandwich": apology + request + validation of the convo.',
            es: 'El "sándwich de cumplidos": disculpa + petición + validación de la conversación.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-social-003',
        category: 'Social',
        type: 'recovery',
        tags: ['over-sharing', 'pivot'],
        trigger: {
            en: 'When you realize you\'ve been talking for too long without a breath',
            es: 'Cuando te das cuenta de que llevas demasiado tiempo hablando sin parar'
        },
        recoveryPhrase: {
            en: 'I just realized I\'ve been monologuing. I\'m clearly too excited about [Topic]. Enough about me—what\'s your take on [Topic]?',
            es: 'Me acabo de dar cuenta de que estoy soltando un monólogo. Es evidente que [Tema] me emociona demasiado. Basta de hablar de mí, ¿cuál es tu opinión sobre [Tema]?'
        },
        followUp: {
            en: 'The "Self-Stop" is a high-status social cue. It shows self-awareness.',
            es: 'El "autofrenado" es una señal social de alto nivel. Demuestra autoconciencia.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-social-004',
        category: 'Social',
        type: 'recovery',
        tags: ['awkward-silence'],
        trigger: {
            en: 'When the conversation dies and you both just stare at your drinks',
            es: 'Cuando la conversación muere y ambos os limitáis a mirar vuestras bebidas'
        },
        recoveryPhrase: {
            en: 'We hit the 20-minute lull! This is usually where we talk about the weather, but I\'d rather know: [Question Pocket].',
            es: '¡Hemos llegado al bache de los 20 minutos! Aquí es donde normalmente hablaríamos del tiempo, pero prefiero saber lo siguiente: [Question Pocket].'
        },
        followUp: {
            en: 'Call out the silence as a "natural lull" to remove the pressure.',
            es: 'Señala el silencio como un "bache natural" para quitar presión.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-social-005',
        category: 'Social',
        type: 'recovery',
        tags: ['mistake', 'laughter'],
        trigger: {
            en: 'When you trip, spill something, or make a physical gaffe',
            es: 'Cuando tropiezas, derramas algo o cometes un error físico'
        },
        recoveryPhrase: {
            en: 'And that is my audition for the local klutz troupe. How was my form?',
            es: 'Y aquí termina mi audición para la compañía local de patosos. ¿Qué tal ha estado la forma?'
        },
        followUp: {
            en: 'Own the mistake immediately with a joke.',
            es: 'Asume el error de inmediato con un chiste.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'recovery-dating-001',
        category: 'Dating',
        type: 'recovery',
        tags: ['nerves', 'honesty'],
        trigger: {
            en: 'When you feel your hands shaking or voice cracking',
            es: 'Cuando sientes que te tiemblan las manos o se te quiebra la voz'
        },
        recoveryPhrase: {
            en: 'I’m actually a little nervous because I was really looking forward to this. Give me one second to catch my breath.',
            es: 'La verdad es que estoy un poco nervioso porque tenía muchas ganas de que llegara este momento. Dame un segundo para recuperar el aliento.'
        },
        followUp: {
            en: 'Vulnerability is magnetic. It shows you care.',
            es: 'La vulnerabilidad es magnética. Demuestra que te importa.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'recovery-dating-002',
        category: 'Dating',
        type: 'recovery',
        tags: ['awkward', 'pivot'],
        trigger: {
            en: 'When you ask a question that makes them uncomfortable',
            es: 'Cuando haces una pregunta que les incomoda'
        },
        recoveryPhrase: {
            en: 'I think I just stepped into "too much, too soon" territory. My bad. Let\'s pivot back to [Safe Topic].',
            es: 'Creo que me he metido en terreno de "demasiado y demasiado pronto". Culpa mía. Volvamos a [Tema seguro].'
        },
        followUp: {
            en: 'Quickly acknowledging the boundary YOU crossed shows high respect.',
            es: 'Reconocer rápidamente el límite que TÚ has cruzado demuestra un gran respeto.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-dating-003',
        category: 'Dating',
        type: 'recovery',
        tags: ['rejection', 'grace'],
        trigger: {
            en: 'When they say "I\'m not interested" or "I just want to be friends"',
            es: 'Cuando dicen "no me interesa" o "solo quiero que seamos amigos"'
        },
        recoveryPhrase: {
            en: 'I appreciate you being direct. It’s better to know now! I’ve enjoyed meeting you regardless.',
            es: 'Agradezco tu franqueza. ¡Es mejor saberlo ahora! De cualquier forma, me ha gustado conocerte.'
        },
        followUp: {
            en: 'No arguing, no "why not?". Just grace.',
            es: 'Nada de discutir, nada de "¿por qué?". Solo elegancia.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'recovery-dating-004',
        category: 'Dating',
        type: 'recovery',
        tags: ['over-complimenting'],
        trigger: {
            en: 'When you realize you\'ve given 3 compliments in a row and it feels "thirsty"',
            es: 'Cuando te das cuenta de que has hecho 3 cumplidos seguidos y parece que estás "desesperado"'
        },
        recoveryPhrase: {
            en: 'Okay, I’m clearly a fan of your [Style/Trait], but I’ll stop the praise-train there before it gets weird. What’s the worst thing about you?',
            es: 'Vale, es evidente que soy fan de tu [Estilo/Rasgo], pero voy a parar el carro de los elogios antes de que se vuelva raro. ¿Qué es lo peor que tienes?'
        },
        followUp: {
            en: 'Self-correcting with a "playful challenge" question restores the balance.',
            es: 'Autocorregirse con una pregunta de "desafío lúdico" restaura el equilibrio.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'recovery-dating-005',
        category: 'Dating',
        type: 'recovery',
        tags: ['clumsy', 'physical'],
        trigger: {
            en: 'Still figuring out how my arms and legs work today. My apologies!',
            es: 'Todavía estoy intentando comprender cómo funcionan hoy mis brazos y mis piernas. ¡Mis disculpas!'
        },
        recoveryPhrase: {
            en: 'When you accidentally bump into them or get in their personal space awkwardly',
            es: 'Cuando tropiezas accidentalmente con ellos o invades su espacio personal de forma torpe'
        },
        followUp: {
            en: 'A light touch on the shoulder (if appropriate) or a step back to restore space.',
            es: 'Un toque ligero en el hombro (si procede) o un paso atrás para restaurar el espacio.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
