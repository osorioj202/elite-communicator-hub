import { DeliveryPocket } from '@/types';

export const DELIVERY_POCKETS: DeliveryPocket[] = [
    // --- EXECUTIVE ---
    {
        id: 'delivery-exec-001',
        category: 'Executive',
        type: 'delivery',
        tags: ['authority', 'pauses'],
        focusArea: { en: 'Pauses', es: 'Pausas' },
        instruction: {
            en: 'When you make a major point, stop talking for 3 full seconds. Count it in your head: One-one-thousand, two-one-thousand...',
            es: 'Cuando expongas un punto importante, deja de hablar durante 3 segundos seguidos. Cuéntalos en tu cabeza: Uno, dos, tres...'
        },
        scienceNote: {
            en: 'Pauses allow the audience to process information and signal that you are comfortable with silence—the ultimate high-status trait.',
            es: 'Las pausas permiten a la audiencia procesar la información y señalan que te sientes cómodo con el silencio, el rasgo definitivo de estatus elevado.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'delivery-exec-002',
        category: 'Executive',
        type: 'delivery',
        tags: ['clarity', 'speed'],
        focusArea: { en: 'Pace', es: 'Ritmo' },
        instruction: {
            en: 'Slow down your speech to 75% of your normal speed when delivering a recommendation. Aim for 130 words per minute.',
            es: 'Reduce la velocidad de tu discurso al 75% de tu velocidad normal cuando des una recomendación. Intenta hablar a unas 130 palabras por minuto.'
        },
        scienceNote: {
            en: 'Slower speech is correlated with increased perceived authority and intelligence in professional settings.',
            es: 'Hablar más despacio se correlaciona con una mayor percepción de autoridad e inteligencia en entornos profesionales.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'delivery-exec-003',
        category: 'Executive',
        type: 'delivery',
        tags: ['confidence', 'body-language'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'Keep your hands visible and avoid "hiding" them under the table or in pockets. Use open-palm gestures.',
            es: 'Mantenga las manos a la vista y evite "esconderlas" bajo la mesa o en los bolsillos. Utilice gestos con la palma abierta.'
        },
        scienceNote: {
            en: 'Visible hands are an ancient biological signal of trust and transparency (showing you have no weapons).',
            es: 'Las manos visibles son una antigua señal biológica de confianza y transparencia (que demuestra que no se tienen armas).'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'delivery-exec-004',
        category: 'Executive',
        type: 'delivery',
        tags: ['tonality', 'authority'],
        focusArea: { en: 'Tone', es: 'Tono' },
        instruction: {
            en: 'Use "Downward Inflection" at the end of sentences. Avoid ending your statements like questions (uptalk).',
            es: 'Utilice una "entonación descendente" al final de las frases. Evite terminar sus frases como si fueran preguntas (uptalk).'
        },
        scienceNote: {
            en: 'Downward inflection signals certainty and leadership, whereas uptalk signals a need for validation.',
            es: 'La entonación descendente indica seguridad y liderazgo, mientras que el uptalk indica necesidad de validación.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- SALES ---
    {
        id: 'delivery-sales-001',
        category: 'Sales',
        type: 'delivery',
        tags: ['mirroring', 'rapport'],
        focusArea: { en: 'Tone', es: 'Tono' },
        instruction: {
            en: 'Mirror the prospect\'s energy level, but stay 10% higher than them. If they are calm, be calm but slightly more energetic.',
            es: 'Refleja el nivel de energía del cliente potencial, pero mantente un 10% por encima de él. Si están tranquilos, mantente tranquilo pero con un poco más de energía.'
        },
        scienceNote: {
            en: 'Linguistic mirroring creates an unconscious feeling of "sameness" and trust.',
            es: 'El mimetismo lingüístico crea una sensación inconsciente de "igualdad" y confianza.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 3
    },
    {
        id: 'delivery-sales-002',
        category: 'Sales',
        type: 'delivery',
        tags: ['emphasis', 'persuasion'],
        focusArea: { en: 'Voice', es: 'Voz' },
        instruction: {
            en: 'Lower your pitch slightly when discussing price. It creates a sense of "confidentiality" and seriousness.',
            es: 'Baje un poco el tono de voz cuando hable del precio. Crea una sensación de "confidencialidad" y seriedad.'
        },
        scienceNote: {
            en: 'Lower-pitched voices are perceived as more dominant and trustworthy in negotiation.',
            es: 'Las voces de tono más bajo se perciben como más dominantes y dignas de confianza en la negociación.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'delivery-sales-003',
        category: 'Sales',
        type: 'delivery',
        tags: ['warmth', 'approachability'],
        focusArea: { en: 'Tone', es: 'Tono' },
        instruction: {
            en: 'The "Smile while you speak" technique. Your vocal folds tighten when you smile, making your voice sound more approachable.',
            es: 'La técnica de "sonreír mientras hablas". Tus cuerdas vocales se tensan cuando sonríes, lo que hace que tu voz suene más accesible.'
        },
        scienceNote: {
            en: 'Humans can "hear" a smile over the phone with high accuracy, which immediately reduces prospect defenses.',
            es: 'Los seres humanos pueden "oír" una sonrisa por teléfono con gran precisión, lo que reduce inmediatamente las defensas del interlocutor.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'delivery-sales-004',
        category: 'Sales',
        type: 'delivery',
        tags: ['listening', 'pauses'],
        focusArea: { en: 'Pauses', es: 'Pausas' },
        instruction: {
            en: 'After asking a "Pain" question, wait 4 seconds. Let the silence do the work.',
            es: 'Después de hacer una pregunta sobre el "dolor", espera 4 segundos. Deja que el silencio haga el trabajo.'
        },
        scienceNote: {
            en: 'The "uncomfortable silence" often forces the prospect to reveal more depth than they initially intended.',
            es: 'El "silencio incómodo" obliga a menudo al cliente potencial a revelar más de lo que pretendía en un principio.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- SOCIAL ---
    {
        id: 'delivery-social-001',
        category: 'Social',
        type: 'delivery',
        tags: ['eye-contact'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'Practice the "Lazy Eye Contact" (50-70% of the time). Looking too much is aggressive; looking too little is shy.',
            es: 'Practica el "contacto visual relajado" (50-70% del tiempo). Mirar demasiado es agresivo; mirar demasiado poco demuestra timidez.'
        },
        scienceNote: {
            en: '70% eye contact is the "sweet spot" for building rapport without causing discomfort.',
            es: 'El 70% de contacto visual es el "punto ideal" para entablar una relación sin causar incomodidad.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'delivery-social-002',
        category: 'Social',
        type: 'delivery',
        tags: ['warmth', 'voice'],
        focusArea: { en: 'Voice', es: 'Voz' },
        instruction: {
            en: 'Use "Resonance" from your chest, not your throat. Breathe into your belly before starting a story.',
            es: 'Utiliza la "resonancia" del pecho, no de la garganta. Respira con el vientre antes de empezar una historia.'
        },
        scienceNote: {
            en: 'Chest resonance sounds warmer and more "human" than nasally throat-based speech.',
            es: 'La resonancia del pecho suena más cálida y "humana" que el habla nasal basada en la garganta.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 3
    },
    {
        id: 'delivery-social-003',
        category: 'Social',
        type: 'delivery',
        tags: ['listening', 'body-language'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'The "Fronting" technique. Point your toes, torso, and head directly at the person you are talking to.',
            es: 'La técnica de "enfrentamiento". Apunta con los dedos de los pies, el torso y la cabeza directamente a la persona con la que estás hablando.'
        },
        scienceNote: {
            en: 'Full-body orientation signals that you are giving 100% of your attention, which is highly flattering.',
            es: 'La orientación de todo el cuerpo indica que estás prestando el 100% de tu atención, lo cual resulta muy halagador.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'delivery-social-004',
        category: 'Social',
        type: 'delivery',
        tags: ['facial-expressions'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'Practice "Micro-nods" while listening. Three small nods signal "I am following you, keep going."',
            es: 'Practica el "micro-asentimiento" mientras escuchas. Tres pequeños asentimientos indican "te estoy siguiendo, sigue adelante".'
        },
        scienceNote: {
            en: 'Nodding activates the speaker\'s reward centers, encouraging them to open up more.',
            es: 'Asentir con la cabeza activa los centros de recompensa del hablante, animándole a abrirse más.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'delivery-dating-001',
        category: 'Dating',
        type: 'delivery',
        tags: ['playfulness', 'tonality'],
        focusArea: { en: 'Tone', es: 'Tono' },
        instruction: {
            en: 'Use "Playful Sarcasm" tone (slightly higher pitch, smiling) when teasing. If your tone is flat, it sounds like an insult.',
            es: 'Utiliza un tono de "sarcasmo juguetón" (tono ligeramente más agudo, sonriendo) cuando bromees. Si tu tono es plano, sonará como un insulto.'
        },
        scienceNote: {
            en: 'Playful teasing (negging excluded) creates sexual tension and shows high social IQ.',
            es: 'Las bromas lúdicas (excluyendo el negging) crean tensión sexual y demuestran un alto cociente intelectual social.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'delivery-dating-002',
        category: 'Dating',
        type: 'delivery',
        tags: ['closeness', 'voice'],
        focusArea: { en: 'Voice', es: 'Voz' },
        instruction: {
            en: 'The "Intimacy Volume." Speak 10% quieter than the background noise. It forces them to lean in closer to hear you.',
            es: 'El "Volumen de Intimidad". Habla un 10% más bajo que el ruido de fondo. Les obliga a inclinarse más para oírte.'
        },
        scienceNote: {
            en: 'Physical proximity triggered by low volume increases oxytocin and feeling of connection.',
            es: 'La proximidad física provocada por el bajo volumen aumenta la oxitocina y la sensación de conexión.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'delivery-dating-003',
        category: 'Dating',
        type: 'delivery',
        tags: ['sincerity', 'eye-contact'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'The "Slow Blink." When they say something deep or personal, hold eye contact and blink slightly slower than normal.',
            es: 'El "parpadeo lento". Cuando digan algo profundo o personal, mantenga el contacto visual y parpadee un poco más despacio de lo normal.'
        },
        scienceNote: {
            en: 'Slow blinking mimics the physiological state of relaxation and trust found in many mammals.',
            es: 'El parpadeo lento imita el estado fisiológico de relajación y confianza que se da en muchos mamíferos.'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'delivery-dating-004',
        category: 'Dating',
        type: 'delivery',
        tags: ['posture', 'confidence'],
        focusArea: { en: 'Body Language', es: 'Lenguaje corporal' },
        instruction: {
            en: 'Take up space. Don\'t hunch or cross your arms. Lean back slightly if you are sitting.',
            es: 'Ocupa espacio. No te encorves ni cruces los brazos. Inclínate un poco hacia atrás si estás sentado.'
        },
        scienceNote: {
            en: 'Expansive posture reduces cortisol (stress) and increases testosterone (confidence) in both men and women.',
            es: 'La postura expansiva reduce el cortisol (estrés) y aumenta la testosterona (confianza) tanto en hombres como en mujeres.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
