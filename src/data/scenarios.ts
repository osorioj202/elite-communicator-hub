import { Scenario } from '@/types';

export const SCENARIOS: Scenario[] = [
    // --- PROFESSIONAL SALES ---
    {
        id: 'cold-call',
        category: 'Sales',
        title: { en: 'Cold Call', es: 'Llamada en Frío' },
        description: {
            en: 'Reach out to a prospect who has never heard of you. Practice your opener, pitch, and earn the right to a meeting.',
            es: 'Contacta a un prospecto que nunca ha oído de ti. Practica tu apertura, presentación y gánate el derecho a una reunión.'
        },
        difficulty: 'Beginner',
        icon: '📞',
        tips: [
            { en: 'Start with a strong opener that earns 30 seconds', es: 'Comienza con una apertura fuerte que te gane 30 segundos' },
            { en: 'Ask for permission to continue', es: 'Solicita permiso para continuar' },
            { en: 'Focus on value, not features', es: 'Enfócate en el valor, no en las características' },
        ],
        prospectSystemPrompt: `You are a busy VP of Sales at a mid-size tech company. You just picked up an unexpected call. You are polite but skeptical and time-pressured. Respond in 1-2 short sentences only. Do not be immediately cooperative. Challenge generic pitches. If the caller sounds compelling, slowly warm up.`,
    },
    {
        id: 'gatekeeper',
        category: 'Sales',
        title: { en: 'Gatekeeper', es: 'Filtro de Seguridad' },
        description: {
            en: 'Get past the receptionist or executive assistant who is screening calls for the decision maker.',
            es: 'Supera al recepcionista o asistente ejecutivo que filtra las llamadas para el tomador de decisiones.'
        },
        difficulty: 'Intermediate',
        icon: '🛡️',
        tips: [
            { en: 'Be confident, not aggressive', es: 'Sé confidente, no agresivo' },
            { en: 'Use the decision maker\'s first name', es: 'Usa el primer nombre del tomador de decisiones' },
            { en: 'Never lie, but be strategic', es: 'Nunca mientas, pero sé estratégico' },
        ],
        prospectSystemPrompt: `You are a sharp executive assistant who screens all calls for the CEO. Your job is to protect their time. You are polite but firm. Ask who's calling, what company, what it's regarding. If the caller sounds vague, deflect to email. If they sound professional and specific, consider transferring. Keep responses to 1-2 sentences.`,
    },
    {
        id: 'price-objection',
        category: 'Sales',
        title: { en: 'Price Objection', es: 'Objeción de Precio' },
        description: {
            en: 'Handle a prospect who thinks your product is too expensive. Turn the objection into a conversation about value.',
            es: 'Maneja a un prospecto que piensa que tu producto es demasiado caro. Convierte la objeción en una conversación sobre el valor.'
        },
        difficulty: 'Intermediate',
        icon: '💰',
        tips: [
            { en: 'Acknowledge before defending', es: 'Reconoce antes de defender' },
            { en: 'Reframe cost as investment', es: 'Reencuadra el costo como inversión' },
            { en: 'Ask questions to understand the real concern', es: 'Haz preguntas para entender la verdadera preocupación' },
        ],
        prospectSystemPrompt: `You are a prospect on a demo call. The product demo just ended and you like what you saw, but the price feels high. Raise price objections naturally ("That's more than we budgeted"). Respond to objection-handling. If the caller handles your objections well and shows ROI, warm up. Keep responses to 1-2 sentences.`,
    },

    // --- EXECUTIVE PRESENCE ---
    {
        id: 'executive-update',
        category: 'Executive',
        title: { en: 'CEO Update', es: 'Actualización al CEO' },
        description: {
            en: 'Brief a busy CEO on a critical project status. Be concise, strategic, and solution-oriented.',
            es: 'Informa a un CEO ocupado sobre el estado de un proyecto crítico. Sé conciso, estratégico y orientado a soluciones.'
        },
        difficulty: 'Advanced',
        icon: '👔',
        tips: [
            { en: 'Bottom line up front (BLUF)', es: 'Conclusión al principio (BLUF)' },
            { en: 'Focus on improved outcomes, not just effort', es: 'Enfócate en resultados mejorados, no solo en el esfuerzo' },
            { en: 'Be ready to defend your strategy', es: 'Prepárate para defender tu estrategia' },
        ],
        prospectSystemPrompt: `You are a busy CEO. You value time and clarity above all else. You are listening to a project update. Interrupt if the speaker is rambling. Ask "So what?" and "What do you need from me?". Reward brevity and strategic thinking. Be direct and slightly impatient. Keep responses short and sharp.`,
    },
    {
        id: 'executive-pitch',
        category: 'Executive',
        title: { en: 'VC Pitch', es: 'Pitch a Inversores (VC)' },
        description: {
            en: 'Pitch your startup idea to a skeptical Venture Capitalist. Focus on market size, traction, and team.',
            es: 'Presenta tu idea de startup a un inversor de riesgo escéptico. Enfócate en el tamaño del mercado, tracción y equipo.'
        },
        difficulty: 'Advanced',
        icon: '🚀',
        tips: [
            { en: 'Highlight the problem magnitude', es: 'Destaca la magnitud del problema' },
            { en: 'Show unique insight', es: 'Muestra una perspectiva única' },
            { en: 'Be confident in your numbers', es: 'Ten confianza en tus números' },
        ],
        prospectSystemPrompt: `You are a seasoned Venture Capitalist. You've heard a thousand pitches. You are skeptical but open to big ideas. Ask tough questions about market size, customer acquisition, and why this team can win. If the answers are vague, lose interest. If they are data-driven, show intrigue. Keep responses concise.`,
    },

    // --- SOCIAL MASTERY ---
    {
        id: 'networking-event',
        category: 'Social',
        title: { en: 'Networking Event', es: 'Evento de Networking' },
        description: {
            en: 'Strike up a conversation with a stranger at a professional mixer. Move past "What do you do?" to deeper topics.',
            es: 'Inicia una conversación con un extraño en un evento profesional. Ve más allá del "¿A qué te dedicas?" hacia temas más profundos.'
        },
        difficulty: 'Beginner',
        icon: '🥂',
        tips: [
            { en: 'Ask open-ended questions', es: 'Haz preguntas abiertas' },
            { en: 'Listen more than you speak', es: 'Escucha más de lo que hablas' },
            { en: 'Find common ground quickly', es: 'Encuentra puntos en común rápidamente' },
        ],
        prospectSystemPrompt: `You are a friendly stranger at a networking mixer. You are open to chatting. You respond well to genuine curiosity and interesting stories. You get bored if the conversation feels like an interview or a sales pitch. If the user asks good questions, share more about yourself. Initial tone: Warm and casual.`,
    },
    {
        id: 'party-story',
        category: 'Social',
        title: { en: 'House Party', es: 'Fiesta en Casa' },
        description: {
            en: 'Join a group conversation at a house party. Share a story without dominating the room.',
            es: 'Únete a una conversación grupal en una fiesta. Comparte una historia sin dominar la sala.'
        },
        difficulty: 'Intermediate',
        icon: '🎉',
        tips: [
            { en: 'Read the room energy', es: 'Lee la energía de la sala' },
            { en: 'Be humorous and light', es: 'Sé divertido y ligero' },
            { en: 'Include others in the conversation', es: 'Incluye a otros en la conversación' },
        ],
        prospectSystemPrompt: `You are a guest at a lively house party. You are in a good mood. You value humor and fun vibes. If the user is too serious or awkward, try to lighten the mood. If they are funny and engaging, laugh and ask follow-up questions. Avoid controversial topics. Tone: Fun, energetic, informal.`,
    },

    // --- DATING & CONNECTION ---
    {
        id: 'first-date',
        category: 'Dating',
        title: { en: 'First Date', es: 'Primera Cita' },
        description: {
            en: 'Keep the conversation flowing on a first date. Balance sharing about yourself with showing interest in them.',
            es: 'Mantén la conversación fluida en una primera cita. Equilibra compartir sobre ti con mostrar interés en ellos.'
        },
        difficulty: 'Intermediate',
        icon: '🌹',
        tips: [
            { en: 'Be improved, not perfect', es: 'Muestra mejora, no perfección' },
            { en: 'Ask about their passions', es: 'Pregunta por sus pasiones' },
            { en: 'Listen for emotional cues', es: 'Escucha las señales emocionales' },
        ],
        prospectSystemPrompt: `You are on a first date. You are cautiously optimistic. You value authenticity, humor, and respect. You are looking for a connection. If the user tries too hard or acts arrogant, pull back. If they are genuine and ask good questions about your life, open up. SAFETY: Maintain boundaries. If the user is disrespectful, creepy, or aggressive, end the date immediately. Tone: Playful, warm, slightly nervous.`,
    },
    {
        id: 'asking-out',
        category: 'Dating',
        title: { en: 'Asking Out', es: 'Pedir una Cita' },
        description: {
            en: 'Ask an acquaintance out for coffee or a drink respectfully and confidently.',
            es: 'Pídele a un conocido salir a tomar un café o una copa de forma respetuosa y segura.'
        },
        difficulty: 'Beginner',
        icon: '☕',
        tips: [
            { en: 'Be specific with your invite', es: 'Sé específico con tu invitación' },
            { en: 'Keep it low pressure', es: 'Mantén la presión baja' },
            { en: 'Accept "no" gracefully', es: 'Acepta un "no" con gracia' },
        ],
        prospectSystemPrompt: `You are an acquaintance who the user has chatted with a few times. You think they are nice but aren't sure about dating yet. If they ask you out respectfully and casually, you might say yes. If they are pushy or intense, you will decline politely. If they handle a "maybe" or "no" with grace, your respect for them goes up. Tone: Friendly, casual.`,
    },
];

export const getScenario = (id: string): Scenario | undefined =>
    SCENARIOS.find((s) => s.id === id);
