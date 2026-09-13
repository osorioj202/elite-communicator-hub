import { CulturalPocket } from '@/types';

export const CULTURAL_POCKETS: CulturalPocket[] = [
    // --- EUROPE ---
    {
        id: 'cultural-001',
        category: 'Executive',
        type: 'cultural',
        tags: ['uk', 'understatement'],
        region: 'United Kingdom',
        tip: { en: 'Use "Understatement." Instead of saying "That’s a disaster," say "That’s a bit of a nuisance."', es: 'Usa "Subestimación." En lugar de decir "Es un desastre", di "Es un pequeño inconveniente".' },
        avoid: { en: 'Over-the-top American enthusiasm (e.g., "This is the most amazing thing ever!") in formal meetings.', es: 'Entusiasmo estadounidense exagerado (ej. "¡Esto es lo más increíble de la historia!") en reuniones formales.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-002',
        category: 'Executive',
        type: 'cultural',
        tags: ['germany', 'directness'],
        region: 'Germany',
        tip: { en: 'Get straight to the point. Efficiency is highly valued. Small talk is often seen as a waste of time in business meetings.', es: 'Vé directo al grano. La eficiencia es muy valorada. La charla trivial a menudo se ve como una pérdida de tiempo.' },
        avoid: { en: 'Vague promises or fuzzy data. Be precise and prepared for blunt criticism.', es: 'Promesas vagas o datos difusos. Sé preciso y prepárate para críticas frontales.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-003',
        category: 'Social',
        type: 'cultural',
        tags: ['france', 'formality'],
        region: 'France',
        tip: { en: 'Use formal titles (Monsieur/Madame) until explicitly invited to use first names. Bonjour is a mandatory greeting.', es: 'Usa títulos formales (Monsieur/Madame) hasta que te inviten explícitamente a usar nombres de pila. Bonjour es un saludo obligatorio.' },
        avoid: { en: 'Starting a conversation in English immediately. Even a tiny bit of French shows respect.', es: 'Empezar una conversación en inglés de inmediato. Incluso un poco de francés muestra respeto.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-004',
        category: 'Executive',
        type: 'cultural',
        tags: ['netherlands', 'egalitarian'],
        region: 'Netherlands',
        tip: { en: 'Expect a flat hierarchy. Juniors will disagree with seniors in front of you. This isn\'t disrespect; it\'s collaboration.', es: 'Espera una jerarquía plana. Los juniors no estarán de acuerdo con los seniors frente a ti. No es falta de respeto; es colaboración.' },
        avoid: { en: 'Trying to pull rank or using an overly formal "command and control" style.', es: 'Intentar imponer tu rango o usar un estilo formal de "mando y control".' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- ASIA ---
    {
        id: 'cultural-005',
        category: 'Executive',
        type: 'cultural',
        tags: ['japan', 'consensus'],
        region: 'Japan',
        tip: { en: 'Understand "Nemawashi." Major decisions are made privately BEFORE the meeting. The meeting is just for the technicality of the vote.', es: 'Entiende el "Nemawashi". Las decisiones importantes se toman en privado ANTES de la reunión.' },
        avoid: { en: 'Trying to force a decision "on the spot" during a formal presentation.', es: 'Intentar forzar una decisión "en el acto" durante una presentación formal.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 3
    },
    {
        id: 'cultural-006',
        category: 'Social',
        type: 'cultural',
        tags: ['japan', 'silence'],
        region: 'Japan',
        tip: { en: 'Value silence. It shows you are giving deep thought to what was said.', es: 'Valora el silencio. Muestra que estás reflexionando profundamente sobre lo que se dijo.' },
        avoid: { en: 'Interrupting or filling every silence instantly, which can be seen as impulsive or disrespectful.', es: 'Interrumpir o llenar cada silencio al instante, lo que puede verse como impulsivo o irrespetuoso.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-007',
        category: 'Executive',
        type: 'cultural',
        tags: ['china', 'face'],
        region: 'China',
        tip: { en: 'Protect the "Face" of your counterpart. Avoid public correction. If you must disagree, do it privately.', es: 'Protege la "cara" de tu contraparte. Evita la corrección pública. Si debes estar en desacuerdo, hazlo en privado.' },
        avoid: { en: 'Aggressively pointing out mistakes in a group setting.', es: 'Señalar errores de forma agresiva en un entorno grupal.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-008',
        category: 'Social',
        type: 'cultural',
        tags: ['india', 'hospitality'],
        region: 'India',
        tip: { en: 'Build a personal relationship BEFORE business. High-context culture: "No" is rarely said directly; listen for "I will try."', es: 'Construye una relación personal ANTES de los negocios. Cultura de alto contexto: rara vez se dice "No" directamente.' },
        avoid: { en: 'Pushing for a strict "Yes/No" early in a relationship-building phase.', es: 'Presionar por un "Sí/No" estricto temprano en la fase de construcción de la relación.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },

    // --- MIDDLE EAST & LATIN AMERICA ---
    {
        id: 'cultural-009',
        category: 'Social',
        type: 'cultural',
        tags: ['middle-east', 'trust'],
        region: 'Middle East',
        tip: { en: 'Hospitality is paramount. Accepting tea/coffee is a sign of respect. Business is built on deep family/friendship trust.', es: 'La hospitalidad es primordial. Aceptar té/café es una señal de respeto.' },
        avoid: { en: 'Checking your watch or rushing through greetings. Time is perceived as fluid.', es: 'Mirar el reloj o apresurar los saludos. El tiempo se percibe como algo fluido.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-010',
        category: 'Social',
        type: 'cultural',
        tags: ['brazil', 'warmth'],
        region: 'Brazil',
        tip: { en: 'Expect physical warmth and closer personal space. Physical touch (hand on shoulder) is common and friendly.', es: 'Espera calidez física y un espacio personal más cercano. El contacto físico es común.' },
        avoid: { en: 'Being overly stiff or retreating from physical proximity, which can seem cold.', es: 'Ser demasiado rígido o retirarse de la proximidad física, lo que puede parecer frío.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- NORTH AMERICA ---
    {
        id: 'cultural-011',
        category: 'Executive',
        type: 'cultural',
        tags: ['usa', 'speed'],
        region: 'USA',
        tip: { en: 'Time is money. Be direct, clear, and action-oriented. "Ask for the sale" early and often.', es: 'El tiempo es dinero. Sé directo, claro y orientado a la acción.' },
        avoid: { en: 'Long, philosophical preambles. Get to the ROI in the first 5 minutes.', es: 'Preámbulos largos y filosóficos. Llega al ROI en los primeros 5 minutos.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-012',
        category: 'Social',
        type: 'cultural',
        tags: ['mexico', 'politeness'],
        region: 'Mexico',
        tip: { en: 'Use "Usted" for elders/seniors. Acknowledge everyone in the room when entering/exiting.', es: 'Usa "Usted" para los mayores. Saluda a todos en la habitación al entrar/salir.' },
        avoid: { en: 'Being too "business-only." Ask about family and health before diving into work.', es: 'Ser demasiado "solo negocios". Pregunta por la familia y la salud antes de trabajar.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // Additional Global Nuance (Totaling 12 for now, can expand more if needed, but 12 covers the core regions requested)
];
export const CULTURAL_POCKETS_EXPANDED: CulturalPocket[] = [
    ...CULTURAL_POCKETS,
    {
        id: 'cultural-013',
        category: 'Social',
        type: 'cultural',
        tags: ['australia', 'mateship'],
        region: 'Australia',
        tip: { en: 'Use "Tall Poppy Syndrome" awareness. Avoid bragging about your wealth or success; aim for humble and relatable.', es: 'Conciencia del "Síndrome de la Amapola Alta". Evita alardear de tu éxito.' },
        avoid: { en: 'Being overly formal or using titles like "Sir" unless in very specific settings.', es: 'Ser demasiado formal o usar títulos como "Señor" a menos que sea necesario.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-014',
        category: 'Executive',
        type: 'cultural',
        tags: ['scandinavia', 'consensus'],
        region: 'Scandinavia',
        tip: { en: 'Consensus decision making. Even the lower-level employees expect to be consulted. Janteloven: don\'t think you are better than anyone else.', es: 'Toma de decisiones por consenso. Janteloven: no creas que eres mejor que nadie.' },
        avoid: { en: 'Flashy displays of wealth or trying to dominate a room with loud opinions.', es: 'Muestras ostentosas de riqueza o intentar dominar la sala con opiniones ruidosas.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-015',
        category: 'Social',
        type: 'cultural',
        tags: ['israel', 'directness'],
        region: 'Israel',
        tip: { en: 'Directness is seen as honesty (Dugri). Expect interruptions and loud, passionate debating.', es: 'La franqueza se ve como honestidad (Dugri). Espera interrupciones y debates apasionados.' },
        avoid: { en: 'Taking direct criticism personally or waiting for a "polite" gap to speak.', es: 'Tomarse las críticas directas como algo personal o esperar un hueco "cortés" para hablar.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-016',
        category: 'Executive',
        type: 'cultural',
        tags: ['singapore', 'harmony'],
        region: 'Singapore',
        tip: { en: 'Hybrid culture: Western efficiency with Eastern respect for hierarchy. Be efficient but don\'t forget to respect elders/seniors.', es: 'Cultura híbrida: eficiencia occidental con respeto oriental por la jerarquía.' },
        avoid: { en: 'Loss of cool. Maintaining composure (saving face) is critical in business.', es: 'Perder los estribos. Mantener la compostura (salvar la cara) es fundamental.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-017',
        category: 'Social',
        type: 'cultural',
        tags: ['italy', 'passion'],
        region: 'Italy',
        tip: { en: 'Show emotion and passion for your topic. Business is deeply personal and relationship-based.', es: 'Muestra emoción y pasión por tu tema. Los negocios son profundamente personales.' },
        avoid: { en: 'Being too "dry" or strictly adhering to an agenda when the mood shifts.', es: 'Ser demasiado "seco" o adherirse estrictamente a una agenda cuando el ánimo cambia.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-018',
        category: 'Social',
        type: 'cultural',
        tags: ['thailand', 'respect'],
        region: 'Thailand',
        tip: { en: 'The Wai greeting. Respect for heads and avoid pointing with feet. The "Smile" can mean many things (yes, no, sorry, I don\'t know).', es: 'El saludo Wai. Respeto por las cabezas y evitar señalar con los pies.' },
        avoid: { en: 'Touching someone\'s head or showing anger in public, which is highly shameful.', es: 'Tocar la cabeza de alguien o mostrar enfado en público, lo cual es muy vergonzoso.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-019',
        category: 'Executive',
        type: 'cultural',
        tags: ['south-korea', 'hierarchy'],
        region: 'South Korea',
        tip: { en: 'Kibun (inner feeling). Be sensitive to your counterpart\'s mood and pride. Deep respect for seniority (age and rank).', es: 'Kibun (sentimiento interior). Sé sensible al ánimo y al orgullo de tu contraparte.' },
        avoid: { en: 'Using first names unless explicitly invited. Use titles and surnames.', es: 'Usar nombres de pila a menos que se te invite. Usa títulos y apellidos.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 3
    },
    {
        id: 'cultural-020',
        category: 'Social',
        type: 'cultural',
        tags: ['russia', 'authenticity'],
        region: 'Russia',
        tip: { en: 'Earned trust. People may seem cold at first (Russian unsmiling face), but it\'s because a smile must be "earned" and sincere.', es: 'Confianza ganada. La gente puede parecer fría al principio.' },
        avoid: { en: 'Forced "customer service" smiles, which can be seen as fake or suspicious.', es: 'Sonrisas forzadas de "servicio al cliente", que pueden verse como falsas o sospechosas.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-021',
        category: 'Social',
        type: 'cultural',
        tags: ['spain', 'connection'],
        region: 'Spain',
        tip: { en: 'The "Sobremesa." Staying at the table long after the meal is finished for coffee and deep talk. This is where real connection happens.', es: 'La "Sobremesa". Quedarse en la mesa mucho después de terminar de comer.' },
        avoid: { en: 'Asking for the check the moment the food is finished.', es: 'Pedir la cuenta en el momento en que se termina la comida.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-022',
        category: 'Executive',
        type: 'cultural',
        tags: ['vietnam', 'respect'],
        region: 'Vietnam',
        tip: { en: 'Collective decision-making. Respect for elders is paramount. "Yes" often means "I understand," not "I agree."', es: 'Toma de decisiones colectiva. El respeto por los mayores es primordial.' },
        avoid: { en: 'Aggressive negotiation tactics or forcing a quick decision.', es: 'Tácticas de negociación agresivas o forzar una decisión rápida.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'cultural-023',
        category: 'Social',
        type: 'cultural',
        tags: ['switzerland', 'privacy'],
        region: 'Switzerland',
        tip: { en: 'Extreme respect for privacy and boundaries. Avoid asking personal questions (salary, family) early in a friendship.', es: 'Respeto extremo por la privacidad y los límites.' },
        avoid: { en: 'Being late. 1 minute late is considered disrespectful.', es: 'Llegar tarde. 1 minuto tarde se considera irrespetuoso.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'cultural-024',
        category: 'Executive',
        type: 'cultural',
        tags: ['canada', 'politeness'],
        region: 'Canada',
        tip: { en: 'Hybrid of US efficiency and UK politeness. Value consensus and avoiding conflict, while remaining results-oriented.', es: 'Híbrido de eficiencia de EE. UU. y cortesía de Reino Unido.' },
        avoid: { en: 'Being overly aggressive or abrasive in meetings.', es: 'Ser demasiado agresivo o abrasivo en las reuniones.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
