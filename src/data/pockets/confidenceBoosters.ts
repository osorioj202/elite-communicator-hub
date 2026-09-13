import { ConfidenceBooster } from '@/types';

export const CONFIDENCE_BOOSTERS: ConfidenceBooster[] = [
    {
        id: 'confidence-001',
        category: 'Social',
        type: 'confidence',
        tags: ['mindset', 'spotlight-effect'],
        title: { en: 'The Spotlight Effect Shift', es: 'El cambio del efecto foco' },
        instruction: {
            en: 'Remind yourself: Nobody is watching you as closely as you are watching yourself. Everyone else is too worried about their own performance.',
            es: 'Recuerda: nadie te observa tan de cerca como tú te observas a ti mismo. Los demás están demasiado preocupados por su propio desempeño.'
        },
        scienceNote: {
            en: 'The Spotlight Effect is a psychological phenomenon where people tend to believe they are being noticed more than they actually are.',
            es: 'El efecto foco es un fenómeno psicológico por el cual las personas tienden a creer que se las nota más de lo que en realidad se las nota.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'confidence-002',
        category: 'Executive',
        type: 'confidence',
        tags: ['anxiety', 'reappraisal'],
        title: { en: 'Excitement Reappraisal', es: 'Reevaluación de la excitación' },
        instruction: {
            en: 'If you feel your heart racing, say out loud: "I am excited." It uses the same physiological state but changes the mental frame from fear to readiness.',
            es: 'Si sientes que el corazón se te acelera, di en voz alta: "Estoy emocionado". Utiliza el mismo estado fisiológico pero cambia el marco mental del miedo a la preparación.'
        },
        scienceNote: {
            en: 'Anxiety and excitement are both high-arousal states. Labeling the state as "excitement" leads to better performance than trying to "calm down."',
            es: 'La ansiedad y la emoción son estados de gran activación. Etiquetar el estado como "emoción" conduce a un mejor rendimiento que intentar "calmarse".'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'confidence-003',
        category: 'Sales',
        type: 'confidence',
        tags: ['power-posing', 'hormones'],
        title: { en: 'The Victory Pose', es: 'La postura de la victoria' },
        instruction: {
            en: 'Stand with your feet wide and hands on your hips (the "Wonder Woman" pose) for 2 minutes before a big call. Do it in private.',
            es: 'Ponte de pie con los pies separados y las manos en las caderas (la postura de "Wonder Woman") durante 2 minutos antes de una llamada importante. Hazlo en privado.'
        },
        scienceNote: {
            en: 'Expansive postures are linked to lower cortisol (stress) and higher testosterone (dominance) levels.',
            es: 'Las posturas expansivas se vinculan con niveles más bajos de cortisol (estrés) y más altos de testosterona (dominancia).'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'confidence-004',
        category: 'Dating',
        type: 'confidence',
        tags: ['outcome-independence'],
        title: { en: 'The "Yes/No/Maybe" Game', es: 'El juego del "Sí/No/Quizás"' },
        instruction: {
            en: 'Set a goal to get 5 "No\'s" this week. It shifts your focus from the rejection to the act of asking.',
            es: 'Ponte como objetivo recibir 5 "noes" esta semana. Esto desvía tu atención del rechazo hacia el acto de preguntar.'
        },
        scienceNote: {
            en: 'Exposure therapy reduces the catastrophic impact of rejection by making it a routine data point.',
            es: 'La terapia de exposición reduce el impacto catastrófico del rechazo al convertirlo en un dato rutinario.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 5
    },
    {
        id: 'confidence-005',
        category: 'Executive',
        type: 'confidence',
        tags: ['imposter-syndrome'],
        title: { en: 'The Accomplishment File', es: 'El archivo de logros' },
        instruction: {
            en: 'Keep a digital folder of every screenshot of praise, successful project, or "thank you" you\'ve received. Read it for 5 mins before a board meeting.',
            es: 'Mantén una carpeta digital con cada captura de pantalla de elogios, proyectos exitosos o agradecimientos que hayas recibido. Léela durante 5 minutos antes de una reunión de la junta.'
        },
        scienceNote: {
            en: 'External evidence of competence is the most effective cure for Imposter Syndrome.',
            es: 'La evidencia externa de competencia es la cura más eficaz para el síndrome del impostor.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 5
    },
    {
        id: 'confidence-006',
        category: 'Social',
        type: 'confidence',
        tags: ['presence', 'breathing'],
        title: { en: 'Box Breathing', es: 'Respiración cuadrada' },
        instruction: {
            en: 'Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat 3 times.',
            es: 'Inhala durante 4 segundos, mantén 4, exhala 4, mantén 4. Repite 3 veces.'
        },
        scienceNote: {
            en: 'Box breathing regulates the autonomic nervous system and triggers the parasympathetic response (calm).',
            es: 'La respiración cuadrada regula el sistema nervioso autónomo y activa la respuesta parasimpática (calma).'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'confidence-007',
        category: 'Sales',
        type: 'confidence',
        tags: ['rejection', 'pacing'],
        title: { en: 'The 10-Second Rule', es: 'La regla de los 10 segundos' },
        instruction: {
            en: 'After a rejection, give yourself exactly 10 seconds to feel the "sting," then take a deep breath and dial the next number.',
            es: 'Tras un rechazo, date exactamente 10 segundos para sentir el "pinchazo", luego respira hondo y marca el siguiente número.'
        },
        scienceNote: {
            en: 'The physiological "surge" of an emotion lasts about 90 seconds. Breaking the cycle at 10 seconds prevents "rumination spirals."',
            es: 'La "oleada" fisiológica de una emoción dura unos 90 segundos. Romper el ciclo a los 10 segundos evita las "espirales de rumiación".'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'confidence-008',
        category: 'Dating',
        type: 'confidence',
        tags: ['self-worth'],
        title: { en: 'The "Value Audit"', es: 'La "auditoría de valor"' },
        instruction: {
            en: 'Write down 3 things you bring to a relationship that have nothing to do with your job or looks.',
            es: 'Escribe 3 cosas que aportes a una relación y que no tengan nada que ver con tu trabajo o tu aspecto físico.'
        },
        scienceNote: {
            en: 'Affirming non-contingent self-worth reduces anxiety in social/romantic evaluative situations.',
            es: 'Afirmar la autoestima no contingente reduce la ansiedad en situaciones evaluativas sociales o románticas.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 5
    },
    {
        id: 'confidence-009',
        category: 'Executive',
        type: 'confidence',
        tags: ['focus', 'visualization'],
        title: { en: 'The "Best Possible" Outcome', es: 'El "mejor resultado posible"' },
        instruction: {
            en: 'Spend 60 seconds visualizing the meeting going perfectly. See the smiles, Hear the "Yes," feel the relief.',
            es: 'Dedica 60 segundos a visualizar que la reunión sale a la perfección. Mira las sonrisas, oye el "sí", siente el alivio.'
        },
        scienceNote: {
            en: 'Mental rehearsal activates the same neural pathways as the actual event, preparing the brain for success.',
            es: 'El ensayo mental activa las mismas vías neuronales que el evento real, preparando al cerebro para el éxito.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'confidence-010',
        category: 'Social',
        type: 'confidence',
        tags: ['small-wins'],
        title: { en: 'The Micro-Compliment', es: 'El microcumplido' },
        instruction: {
            en: 'Give a stranger a 100% genuine, no-strings-attached compliment (e.g., "Cool shoes!") while walking. Don\'t stop to talk.',
            es: 'Hazle a un extraño un cumplido 100% sincero y sin compromiso (p. ej., "¡Qué zapatos más chulos!") mientras caminas. No te detengas a hablar.'
        },
        scienceNote: {
            en: 'Low-stakes social wins build "social momentum" that makes high-stakes interactions feel easier.',
            es: 'Los triunfos sociales de bajo riesgo generan un "impulso social" que facilita las interacciones de alto riesgo.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
