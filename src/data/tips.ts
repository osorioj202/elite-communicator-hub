import { CommunicationTip } from '@/types';

export const TIPS: CommunicationTip[] = [
    // --- SALES ---
    {
        id: 'mirroring',
        category: 'Sales',
        title: { en: 'Calm the Prospect with Mirroring', es: 'Calma al Prospecto con el Espejo' },
        framework: { en: 'Mirroring', es: 'Reflejo (Mirroring)' },
        expert: { en: 'Chris Voss - Never Split the Difference', es: 'Chris Voss - Rompe la Barrera del No' },
        description: {
            en: 'Repeat the last 1-3 critical words of what the other person just said. It signals listening and encourages them to expand without you asking more questions.',
            es: 'Repite las últimas 1-3 palabras críticas de lo que la otra persona acaba de decir. Señala que escuchas y los anima a expandirse sin que hagas más preguntas.'
        },
        actionableSteps: [
            { en: 'Wait for a silence or a finished thought.', es: 'Espera un silencio o un pensamiento terminado.' },
            { en: 'Repeat the last 3 words as a question (upward inflection).', es: 'Repite las últimas 3 palabras como una pregunta (inflexión ascendente).' },
            { en: 'Silence. Let them fill the space.', es: 'Silencio. Deja que ellos llenen el espacio.' },
        ],
        exampleScript: {
            bad: {
                en: 'Prospect: "The price is too high." You: "Why do you think that? It is a great value."',
                es: 'Prospecto: "El precio es demasiado alto." Tú: "¿Por qué piensa eso? Es un gran valor."'
            },
            good: {
                en: 'Prospect: "The price is too high." You: "Price is too high?" ... Prospect: "Yeah, well, we spent our budget on the new CRM..."',
                es: 'Prospecto: "El precio es demasiado alto." Tú: "¿El precio es demasiado alto?" ... Prospecto: "Sí, bueno, gastamos nuestro presupuesto en el nuevo CRM..."'
            },
        },
    },
    {
        id: 'spin-selling',
        category: 'Sales',
        title: { en: 'Uncover Pain with SPIN', es: 'Descubre el Dolor con SPIN' },
        framework: { en: 'SPIN Selling', es: 'Venta SPIN' },
        expert: { en: 'Neil Rackham', es: 'Neil Rackham' },
        description: {
            en: 'A question-based framework to move from general situation to specific pain points and finally the value of your solution.',
            es: 'Un marco basado en preguntas para pasar de la situación general a puntos de dolor específicos y finalmente al valor de tu solución.'
        },
        actionableSteps: [
            { en: 'Ask Situation questions to get facts.', es: 'Haz preguntas de Situación para obtener hechos.' },
            { en: 'Ask Problem questions to find implied needs.', es: 'Haz preguntas de Problema para encontrar necesidades implícitas.' },
            { en: 'Ask Implication questions to show the cost of the problem.', es: 'Haz preguntas de Implicación para mostrar el costo del problema.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "Our software is very fast and efficient."',
                es: 'Tú: "Nuestro software es muy rápido y eficiente."'
            },
            good: {
                en: 'You: "How much time is your team losing each week to these manual updates?" (Implication question)',
                es: 'Tú: "¿Cuánto tiempo pierde su equipo cada semana con estas actualizaciones manuales?" (Pregunta de implicación)'
            },
        },
    },
    {
        id: 'labeling',
        category: 'Sales',
        title: { en: 'Defuse Negative Emotions', es: 'Desactiva Emociones Negativas' },
        framework: { en: 'Labeling', es: 'Etiquetado (Labeling)' },
        expert: { en: 'Chris Voss', es: 'Chris Voss' },
        description: {
            en: 'Neutralize negative feelings by naming them. "It seems like..." or "It sounds like..." allows the prospect to address the emotion without feeling attacked.',
            es: 'Neutraliza los sentimientos negativos nombrándolos. "Parece que..." o "Suena como que..." permite al prospecto abordar la emoción sin sentirse atacado.'
        },
        actionableSteps: [
            { en: 'Identify a hidden emotion (fear, annoyance).', es: 'Identifica una emoción oculta (miedo, molestia).' },
            { en: 'Start with "It seems like..." (Never use "I think").', es: 'Empieza con "Parece que..." (Nunca uses "Yo creo").' },
            { en: 'Be quiet and listen to the correction or confirmation.', es: 'Guarda silencio y escucha la corrección o confirmación.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "I think you are worried about the implementation time."',
                es: 'Tú: "Creo que le preocupa el tiempo de implementación."'
            },
            good: {
                en: 'You: "It seems like you’re worried about how this might disrupt your team’s current workflow."',
                es: 'Tú: "Parece que le preocupa cómo esto podría interrumpir el flujo de trabajo actual de su equipo."'
            },
        },
    },

    // --- EXECUTIVE ---
    {
        id: 'bluf',
        category: 'Executive',
        title: { en: 'Respect Time with BLUF', es: 'Respeta el Tiempo con BLUF' },
        framework: { en: 'BLUF (Bottom Line Up Front)', es: 'BLUF (Lo importante primero)' },
        expert: { en: 'Military Standard / Executive Communication', es: 'Estándar Militar / Comunicación Ejecutiva' },
        description: {
            en: 'Put your most important message at the very beginning. Don’t bury the lead in context or justification.',
            es: 'Pon tu mensaje más importante al principio. No entierres lo principal en contexto o justificación.'
        },
        actionableSteps: [
            { en: 'State the conclusion or request in sentence one.', es: 'Indica la conclusión o solicitud en la primera oración.' },
            { en: 'provide 3 supporting bullet points only if needed.', es: 'proporciona 3 puntos de apoyo solo si es necesario.' },
            { en: 'End with a clear "Next Step".', es: 'Termina con un "Siguiente paso" claro.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "So we looked at the data from Q3 and realized that the churn was high because of the login bug, so I think we should hire one more dev..."',
                es: 'Tú: "Bueno, miramos los datos del tercer trimestre y nos dimos cuenta de que la pérdida de clientes fue alta debido al error de inicio de sesión, así que creo que deberíamos contratar a un desarrollador más..."'
            },
            good: {
                en: 'You: "We need to hire one additional developer by June to fix the Q3 churn issues. Here is the data why..."',
                es: 'Tú: "Necesitamos contratar a un desarrollador adicional para junio para solucionar los problemas de pérdida del tercer trimestre. Aquí están los datos de por qué..."'
            },
        },
    },
    {
        id: 'pyramid-principle',
        category: 'Executive',
        title: { en: 'Structure Your Strategy', es: 'Estructura tu Estrategia' },
        framework: { en: 'The Pyramid Principle', es: 'El Principio de la Pirámide' },
        expert: { en: 'Barbara Minto', es: 'Barbara Minto' },
        description: {
            en: 'Start with the answer, group your supporting arguments, and then provide the data. It matches how executives process information.',
            es: 'Comienza con la respuesta, agrupa tus argumentos de apoyo y luego proporciona los datos. Coincide con cómo los ejecutivos procesan la información.'
        },
        actionableSteps: [
            { en: 'State the core recommendation first.', es: 'Indica la recomendación principal primero.' },
            { en: 'Group ideas into Mutually Exclusive, Collectively Exhaustive (MECE) categories.', es: 'Agrupa ideas en categorías Mutuamente Excluyentes, Colectivamente Exhaustivas (MECE).' },
            { en: 'Connect the levels with logical transitions.', es: 'Conecta los niveles con transiciones lógicas.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "Here is a list of 15 things we found in the audit..."',
                es: 'Tú: "Aquí hay una lista de 15 cosas que encontramos en la auditoría..."'
            },
            good: {
                en: 'You: "We have three main opportunities to increase efficiency: automation, training, and vendor consolidation. Let’s start with automation."',
                es: 'Tú: "Tenemos tres oportunidades principales para aumentar la eficiencia: automatización, capacitación y consolidación de proveedores. Comencemos con la automatización."'
            },
        },
    },
    {
        id: 'executive-summary',
        category: 'Executive',
        title: { en: 'The 10-Second Pitch', es: 'El Pitch de 10 Segundos' },
        framework: { en: 'The Executive Summary', es: 'El Resumen Ejecutivo' },
        expert: { en: 'Classic Business Communication', es: 'Comunicación Empresarial Clásica' },
        description: {
            en: 'Distill hours of work into a few high-impact sentences. Focus on ROI and risk mitigation.',
            es: 'Destila horas de trabajo en unas pocas oraciones de alto impacto. Enfócate en el ROI y la mitigación de riesgos.'
        },
        actionableSteps: [
            { en: 'Identify the ONE thing the executive cares about (e.g., Cost).', es: 'Identifica la ÚNICA cosa que le importa al ejecutivo (ej. Costo).' },
            { en: 'State the current status and the projected outcome.', es: 'Indica el estado actual y el resultado proyectado.' },
            { en: 'Specify the exact decision required from them.', es: 'Especifica la decisión exacta requerida de ellos.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "I worked really hard on this report and it covers everything about the project."',
                es: 'Tú: "Trabajé muy duro en este informe y cubre todo sobre el proyecto."'
            },
            good: {
                en: 'You: "The project is 10% over budget but 2 weeks ahead of schedule. I need your approval on the $5k variance by EOD to stay on track."',
                es: 'Tú: "El proyecto está un 10% por encima del presupuesto pero con 2 semanas de adelanto. Necesito su aprobación sobre la variación de $5k para el final del día para seguir en camino."'
            },
        },
    },

    // --- SOCIAL ---
    {
        id: 'ford-technique',
        category: 'Social',
        title: { en: 'Never Run Out of Topics', es: 'Nunca te Quedes sin Temas' },
        framework: { en: 'The FORD Technique', es: 'La Técnica FORD' },
        expert: { en: 'Traditional Networking Strategy', es: 'Estrategia de Networking Tradicional' },
        description: {
            en: 'Four universal topics to build rapport with anyone: Family, Occupation, Recreation, Dreams.',
            es: 'Cuatro temas universales para generar compenetración con cualquiera: Familia, Ocupación, Recreación, Sueños.'
        },
        actionableSteps: [
            { en: 'Start with "Occupation" or "Recreation" in professional settings.', es: 'Comienza con "Ocupación" o "Recreación" en entornos profesionales.' },
            { en: 'Listen for "spikes" (emotions or passions) in their answers.', es: 'Escucha "picos" (emociones o pasiones) en sus respuestas.' },
            { en: 'Ask follow-up questions about that specific spike.', es: 'Haz preguntas de seguimiento sobre ese pico específico.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "Nice weather today, huh?"',
                es: 'Tú: "Lindo clima hoy, ¿no?"'
            },
            good: {
                en: 'You: "What do you do for fun when you’re not working on [Occupation]?" (Transition to Recreation)',
                es: 'Tú: "¿Qué haces para divertirte cuando no estás trabajando en [Ocupación]?" (Transición a Recreación)'
            },
        },
    },
    {
        id: 'active-listening',
        category: 'Social',
        title: { en: 'The Active Listening Loop', es: 'El Bucle de Escucha Activa' },
        framework: { en: 'Active Listening', es: 'Escucha Activa' },
        expert: { en: 'Carl Rogers / Psychology', es: 'Carl Rogers / Psicología' },
        description: {
            en: 'Prove you are listening by summarizing their point before adding your own. It creates deep psychological safety.',
            es: 'Demuestra que escuchas resumiendo su punto antes de añadir el tuyo. Crea una profunda seguridad psicológica.'
        },
        actionableSteps: [
            { en: 'Repeat back the core of what they said in your own words.', es: 'Repite el núcleo de lo que dijeron con tus propias palabras.' },
            { en: 'Ask "Did I get that right?"', es: 'Pregunta "¿Lo entendí bien?"' },
            { en: 'Only Speak after they confirm.', es: 'Solo habla después de que confirmen.' },
        ],
        exampleScript: {
            bad: {
                en: 'Them: "I\'m stressed about moving." You: "Oh, I moved last year, it was so hard!"',
                es: 'Ellos: "Estoy estresado por la mudanza." Tú: "¡Oh, yo me mudé el año pasado, fue tan difícil!"'
            },
            good: {
                en: 'Them: "I\'m stressed about moving." You: "It sounds like you’re feeling overwhelmed by the logistics. Is that right?"',
                es: 'Ellos: "Estoy estresado por la mudanza." Tú: "Parece que te sientes abrumado por la logística. ¿Es así?"'
            },
        },
    },
    {
        id: 'story-bridge',
        category: 'Social',
        title: { en: 'Be Memorable with Stories', es: 'Sé Memorable con Historias' },
        framework: { en: 'The Story Bridge', es: 'El Puente de Historias' },
        expert: { en: 'Storytelling Experts', es: 'Expertos en Storytelling' },
        description: {
            en: 'Connect a common topic to a personal anecdote to build vulnerability and memorability.',
            es: 'Conecta un tema común con una anécdota personal para generar vulnerabilidad y ser memorable.'
        },
        actionableSteps: [
            { en: 'Identify the shared "Normal" situation.', es: 'Identifica la situación "Normal" compartida.' },
            { en: 'Introduce a "Challenge" or funny observation.', es: 'Introduce un "Desafío" u observación divertida.' },
            { en: 'Share the "Change" or insight.', es: 'Comparte el "Cambio" o perspectiva.' },
        ],
        exampleScript: {
            bad: {
                en: 'Them: "I like coffee." You: "Me too. I drink it every morning."',
                es: 'Ellos: "Me gusta el café." Tú: "A mí también. Lo tomo todas las mañanas."'
            },
            good: {
                en: 'Them: "I like coffee." You: "I actually had the weirdest coffee experience in Italy once where I didn\'t realize you have to pay the cashier first..."',
                es: 'Ellos: "Me gusta el café." Tú: "De hecho, tuve la experiencia más extraña con el café en Italia una vez, donde no me di cuenta de que tienes que pagar al cajero primero..."'
            },
        },
    },

    // --- DATING ---
    {
        id: 'vulnerability-loop',
        category: 'Dating',
        title: { en: 'Create Sparks with Vulnerability', es: 'Crea Chispas con Vulnerabilidad' },
        framework: { en: 'The Vulnerability Loop', es: 'El Bucle de Vulnerabilidad' },
        expert: { en: 'Daniel Coyle / Brené Brown', es: 'Daniel Coyle / Brené Brown' },
        description: {
            en: 'Share a small, non-creepy flaw or mistake. When the other person acknowledges it or shares back, trust is built instantly.',
            es: 'Comparte un pequeño defecto o error que no asuste. Cuando la otra persona lo reconoce o comparte algo de vuelta, la confianza se genera al instante.'
        },
        actionableSteps: [
            { en: 'Signal a small vulnerability ("I’m actually a bit nervous").', es: 'Señala una pequeña vulnerabilidad ("De hecho, estoy un poco nervioso").' },
            { en: 'Wait for their signal of support.', es: 'Espera su señal de apoyo.' },
            { en: 'The loop is closed when trust is reciprocated.', es: 'El bucle se cierra cuando la confianza es recíproca.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: "I am a total perfectionist and I never fail."',
                es: 'Tú: "Soy un perfeccionista total y nunca fallo."'
            },
            good: {
                en: 'You: "To be honest, I\'m always a little bit socially awkward in these big groups, but I’m trying to get better!"',
                es: 'Tú: "Para ser honesto, siempre soy un poco torpe socialmente en estos grupos grandes, ¡pero estoy tratando de mejorar!"'
            },
        },
    },
    {
        id: 'body-language',
        category: 'Dating',
        title: { en: 'Project Confidence Naturally', es: 'Proyecta Confianza Naturalmente' },
        framework: { en: 'The Power Pose / Openness', es: 'Postura de Poder / Apertura' },
        expert: { en: 'Amy Cuddy', es: 'Amy Cuddy' },
        description: {
            en: 'Your physical state dictates your mental state. Open body language signals warmth and high status.',
            es: 'Tu estado físico dicta tu estado mental. El lenguaje corporal abierto señala calidez y un estatus alto.'
        },
        actionableSteps: [
            { en: 'Keep your hands visible (trust signal).', es: 'Mantén tus manos visibles (señal de confianza).' },
            { en: 'Avoid "shielding" (crossing arms, holding phone in front of chest).', es: 'Evita el "blindaje" (cruzar los brazos, sostener el teléfono frente al pecho).' },
            { en: 'Occupy your space comfortably.', es: 'Ocupa tu espacio cómodamente.' },
        ],
        exampleScript: {
            bad: {
                en: 'You: (Leaning back, arms crossed, looking at the door)',
                es: 'Tú: (Inclinado hacia atrás, brazos cruzados, mirando a la puerta)'
            },
            good: {
                en: 'You: (Sitting up tall, leaning slightly in, hands visible and relaxed)',
                es: 'Tú: (Sentado derecho, inclinado ligeramente hacia adelante, manos visibles y relajadas)'
            },
        },
    },
    {
        id: 'emotional-cues',
        category: 'Dating',
        title: { en: 'Read Between the Lines', es: 'Lee Entre Líneas' },
        framework: { en: 'Emotional Cue Detection', es: 'Detección de Señales Emocionales' },
        expert: { en: 'Psychology Standard', es: 'Estándar de Psicología' },
        description: {
            en: 'Stop listening to the words and start listening to the tone. Respond to the feeling behind the statement.',
            es: 'Deja de escuchar las palabras y empieza a escuchar el tono. Responde al sentimiento detrás de lo que dicen.'
        },
        actionableSteps: [
            { en: 'Notice a change in pitch or speed.', es: 'Nota un cambio en el tono o la velocidad.' },
            { en: 'Identify the underlying emotion (excitement, hesitation).', es: 'Identifica la emoción subyacente (entusiasmo, duda).' },
            { en: 'Acknowledge the emotion directly.', es: 'Reconoce la emoción directamente.' },
        ],
        exampleScript: {
            bad: {
                en: 'Them: (Quietly) "Yeah, my day was fine."',
                es: 'Ellos: (En voz baja) "Sí, mi día estuvo bien."'
            },
            good: {
                en: 'You: "You say fine, but you sound a little tired. Was it a long one?"',
                es: 'Tú: "Dices bien, pero suenas un poco cansado. ¿Fue un día largo?"'
            },
        },
    },
];
