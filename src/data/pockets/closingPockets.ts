import { ClosingPocket } from '@/types';

export const CLOSING_POCKETS: ClosingPocket[] = [
    // --- SALES ---
    {
        id: 'closing-sales-001',
        category: 'Sales',
        type: 'closing',
        tags: ['next-step', 'demo'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'I’ve enjoyed our talk. The next logical step is a demo. Are you at your computer at 2pm on Thursday?',
            es: 'Me ha gustado nuestra charla. El siguiente paso lógico es una demo. ¿Estarás delante del ordenador el jueves a las 14:00?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1,
        relatedScenarioIds: ['cold-call']
    },
    {
        id: 'closing-sales-002',
        category: 'Sales',
        type: 'closing',
        tags: ['rejection', 'patience'],
        objective: { en: 'After Rejection', es: 'Tras el rechazo' },
        phrase: {
            en: 'I respect your decision. If things change with [Competitor/Situation] down the road, I\'d love to be your first call.',
            es: 'Respeto su decisión. Si las cosas cambian con [Competidor/Situación] en el futuro, me encantaría ser su primera opción.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-sales-003',
        category: 'Sales',
        type: 'closing',
        tags: ['follow-up', 'pipeline'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'It sounds like now isn\'t the right time. Can I check back in with you in 3 months to see if [Problem] is still a priority?',
            es: 'Parece que ahora no es el momento adecuado. ¿Puedo volver a hablar con usted dentro de 3 meses para ver si [Problema] sigue siendo una prioridad?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-sales-004',
        category: 'Sales',
        type: 'closing',
        tags: ['next-step', 'efficiency'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'To save you some back-and-forth on email, shall we just get the strategy session carved out now?',
            es: 'Para ahorrarle correos de ida y vuelta, ¿por qué no fijamos ahora mismo la sesión de estrategia?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-sales-005',
        category: 'Sales',
        type: 'closing',
        tags: ['stakeholders', 'collateral'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'What is the one thing I could send you that would make the internal conversation with your boss 10x easier?',
            es: '¿Qué es lo único que podría enviarle que facilitara 10 veces la conversación interna con su jefe?'
        },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'closing-sales-006',
        category: 'Sales',
        type: 'closing',
        tags: ['low-pressure', 'value'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'I\'ll send over those resources. No pressure to respond—just wanted you to have them for your Q4 planning.',
            es: 'Le enviaré esos recursos. No tiene presión para responder, solo quería que los tuviera para su planificación del cuarto trimestre.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- EXECUTIVE ---
    {
        id: 'closing-exec-001',
        category: 'Executive',
        type: 'closing',
        tags: ['commitment', 'timeline'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'I\'ll have the final proposal on your desk by EOD Tuesday. Does that work for your review?',
            es: 'Tendré la propuesta final en su mesa para el final del día del martes. ¿Le viene bien para revisarla?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-exec-002',
        category: 'Executive',
        type: 'closing',
        tags: ['efficiency', 'wrap-up'],
        objective: { en: 'Graceful Exit', es: 'Salida elegante' },
        phrase: {
            en: 'We have 2 minutes left. I\'ll sum up our action items and send a recap mail by noon.',
            es: 'Nos quedan 2 minutos. Resumiré nuestras tareas pendientes y enviaré un correo de recapitulación antes del mediodía.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-exec-003',
        category: 'Executive',
        type: 'closing',
        tags: ['approval', 'deadline'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'To move this forward, I just need your green light on [Specific Item]. Can we count on that by Friday?',
            es: 'Para avanzar en esto, solo necesito su visto bueno en [Elemento específico]. ¿Podemos contar con ello para el viernes?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-exec-004',
        category: 'Executive',
        type: 'closing',
        tags: ['transparency', 'readiness'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'I know the board is still deciding. I\'m ready to pivot as soon as we hear back—reach out anytime.',
            es: 'Sé que la junta aún está decidiendo. Estoy listo para reaccionar en cuanto tengamos noticias; contacte conmigo en cualquier momento.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-exec-005',
        category: 'Executive',
        type: 'closing',
        tags: ['planning', 'analysis'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'Let\'s reconvene once the beta data is in. How does [Date] look for a post-mortem?',
            es: 'Volvamos a reunirnos cuando tengamos los datos de la beta. ¿Qué tal el [Fecha] para un análisis posterior?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-exec-006',
        category: 'Executive',
        type: 'closing',
        tags: ['accountability', 'alignment'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'I\'ll take responsibility for the [Department] alignment. Expect an update in our next 1-on-1.',
            es: 'Me haré responsable de la alineación del [Departamento]. Espere una actualización en nuestra próxima reunión individual.'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },

    // --- SOCIAL ---
    {
        id: 'closing-social-001',
        category: 'Social',
        type: 'closing',
        tags: ['exit', 'rapport'],
        objective: { en: 'Graceful Exit', es: 'Salida elegante' },
        phrase: {
            en: 'It’s been great chatting with you about [Topic]. I see a friend I need to catch, but I’d love to continue this later!',
            es: 'Ha sido un placer charlar con usted sobre [Tema]. He visto a un amigo al que tengo que saludar, ¡pero me encantaría seguir con esto más tarde!'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-social-002',
        category: 'Social',
        type: 'closing',
        tags: ['connection', 'contact'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'I really enjoyed our talk. If you ever want to geek out more about [Topic], here\'s my info!',
            es: 'He disfrutado mucho de nuestra charla. Si alguna vez quieres profundizar más en [Tema], ¡aquí tienes mis datos!'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-social-003',
        category: 'Social',
        type: 'closing',
        tags: ['exit', 'simple'],
        objective: { en: 'Graceful Exit', es: 'Salida elegante' },
        phrase: {
            en: 'I\'m going to go grab another drink/snack. I\'ll see you around the event!',
            es: 'Voy a por otra bebida/aperitivo. ¡Nos vemos por aquí!'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-social-004',
        category: 'Social',
        type: 'closing',
        tags: ['next-step', 'friendship'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'We should definitely grab a coffee and finish this conversation about [Topic]. Are you free next week?',
            es: 'Deberíamos tomar un café y terminar esta conversación sobre [Tema]. ¿Estás libre la semana que viene?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-social-005',
        category: 'Social',
        type: 'closing',
        tags: ['well-wishes', 'depth'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'Good luck with [Project]! I\'d love to hear how it turns out.',
            es: '¡Mucha suerte con [Proyecto]! Me encantaría saber cómo termina.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-social-006',
        category: 'Social',
        type: 'closing',
        tags: ['exit', 'standard'],
        objective: { en: 'Graceful Exit', es: 'Salida elegante' },
        phrase: {
            en: 'I\'m going to head out now. It was a pleasure meeting you!',
            es: 'Me marcho ya. ¡Ha sido un placer conocerte!'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'closing-dating-001',
        category: 'Dating',
        type: 'closing',
        tags: ['next-step', 'confidence'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'I had a wonderful time tonight. I’d really like to see you again. I’ll give you a call tomorrow!',
            es: 'Me lo he pasado de maravilla esta noche. Me gustaría mucho volver a verte. Te llamaré mañana.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-dating-002',
        category: 'Dating',
        type: 'closing',
        tags: ['rejection', 'grace'],
        objective: { en: 'After Rejection', es: 'Tras el rechazo' },
        phrase: {
            en: 'I respect your honesty. I enjoyed our time regardless and wish you the best!',
            es: 'Respeto tu sinceridad. De todas formas he disfrutado del tiempo juntos y te deseo lo mejor.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-dating-003',
        category: 'Dating',
        type: 'closing',
        tags: ['connection', 'casual'],
        objective: { en: 'Leave Door Open', es: 'Dejar la puerta abierta' },
        phrase: {
            en: 'I\'m really glad we met. Let\'s keep in touch!',
            es: 'Me alegro mucho de que nos hayamos conocido. ¡Sigamos en contacto!'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-dating-004',
        category: 'Dating',
        type: 'closing',
        tags: ['next-step', 'specific'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'I\'d love to do this again. How about [Activity] on [Day]?',
            es: 'Me encantaría repetir. ¿Qué tal [Actividad] el [Día]?'
        },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-dating-005',
        category: 'Dating',
        type: 'closing',
        tags: ['wrap-up', 'sincerity'],
        objective: { en: 'Graceful Exit', es: 'Salida elegante' },
        phrase: {
            en: 'I have to head home now, but tonight was really special. Text me when you get back?',
            es: 'Tengo que irme ya a casa, pero esta noche ha sido muy especial. ¿Me escribes cuando llegues?'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'closing-dating-006',
        category: 'Dating',
        type: 'closing',
        tags: ['contact', 'interest'],
        objective: { en: 'Next Step', es: 'Próximo paso' },
        phrase: {
            en: 'Let\'s swap numbers. I\'d love to hear more about [Topic] later.',
            es: 'Intercambiemos los teléfonos. Me encantaría saber más sobre [Tema] más adelante.'
        },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
