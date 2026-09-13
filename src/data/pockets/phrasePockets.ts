import { PhrasePocket } from '@/types';

export const PHRASE_POCKETS: PhrasePocket[] = [
    // --- SALES ---
    {
        id: 'phrase-sales-001',
        category: 'Sales',
        type: 'phrase',
        tags: ['objection', 'budget'],
        situation: { en: 'When prospect says "no budget"', es: 'Cuando el prospecto dice "no hay presupuesto"' },
        fillerToAvoid: {
            en: 'Oh, okay, um, well maybe we can talk when you have some money later?',
            es: 'Oh, está bien, ejem, bueno, ¿tal vez podamos hablar cuando tengas algo de dinero más tarde?'
        },
        professionalReplace: {
            en: 'I understand. Most of our clients didn\'t have a specific budget set aside until they saw the ROI. Can we explore the cost of inactivity?',
            es: 'Entiendo. La mayoría de nuestros clientes no tenían un presupuesto específico reservado hasta que vieron el ROI. ¿Podemos explorar el costo de la inactividad?'
        },
        contextNote: { en: 'Shift from "spending" to "investment and return."', es: 'Cambia de "gasto" a "inversión y retorno."' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1,
        relatedScenarioIds: ['price-objection']
    },
    {
        id: 'phrase-sales-002',
        category: 'Sales',
        type: 'phrase',
        tags: ['uncertainty', 'buying-time'],
        situation: { en: 'When you need to buy time to find an answer', es: 'Cuando necesitas ganar tiempo para encontrar una respuesta' },
        fillerToAvoid: {
            en: 'Uh, let me see... I think maybe it does that? Let me just look at my notes real quick...',
            es: 'Eh, déjame ver... creo que tal vez hace eso. Déjame mirar mis notas rápidamente...'
        },
        professionalReplace: {
            en: 'That\'s a great technical question. I want to give you a 100% accurate answer rather than an estimate. Let me check with our product lead and get back to you by EOD.',
            es: 'Esa es una excelente pregunta técnica. Quiero darte una respuesta 100% precisa en lugar de una estimación. Déjame consultar con nuestro responsable de producto y te respondo al final del día.'
        },
        contextNote: { en: 'Executives value accuracy over "guessing" on the spot.', es: 'Los ejecutivos valoran la precisión por encima de "adivinar" en el momento.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-sales-003',
        category: 'Sales',
        type: 'phrase',
        tags: ['closing', 'meeting-ask'],
        situation: { en: 'When asking for the meeting', es: 'Al pedir la reunión' },
        fillerToAvoid: {
            en: 'So, uh, do you want to maybe talk again next week if you\'re free?',
            es: 'Entonces, eh, ¿quieres tal vez hablar de nuevo la semana que viene si estás libre?'
        },
        professionalReplace: {
            en: 'Based on our conversation, the logical next step is a deep dive. Does next Tuesday at 10am work for you?',
            es: 'Basándonos en nuestra conversación, el siguiente paso lógico es una reunión a fondo. ¿Te parece bien el próximo martes a las 10 am?'
        },
        contextNote: { en: 'Assuming the sale/meeting is more confident than asking for permission.', es: 'Asumir la venta/reunión transmite más confianza que pedir permiso.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1,
        relatedScenarioIds: ['cold-call']
    },
    {
        id: 'phrase-sales-004',
        category: 'Sales',
        type: 'phrase',
        tags: ['objection', 'follow-up'],
        situation: { en: 'When they say "send me info"', es: 'Cuando dicen "envíame información"' },
        fillerToAvoid: {
            en: 'Okay, I\'ll send that over. Just let me know when you read it.',
            es: 'Está bien, te enviaré eso. Solo avísame cuando lo leas.'
        },
        professionalReplace: {
            en: 'I can certainly do that. To make sure I send only the most relevant parts, which specific area of [Problem] are you most focused on right now?',
            es: 'Ciertamente puedo hacerlo. Para asegurarme de enviar solo las partes más relevantes, ¿en qué área específica de [Problema] estás más enfocado ahora mismo?'
        },
        contextNote: { en: 'Use the request for info as a way to qualify further.', es: 'Usa la solicitud de información como una forma de calificar más al prospecto.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-sales-005',
        category: 'Sales',
        type: 'phrase',
        tags: ['competition'],
        situation: { en: 'When they compare you to a competitor', es: 'Cuando te comparan con un competidor' },
        fillerToAvoid: {
            en: 'Actually, they are really bad and we are much better because...',
            es: 'En realidad, ellos son muy malos y nosotros somos mucho mejores porque...'
        },
        professionalReplace: {
            en: '[Competitor] is a strong choice for basic needs. We typically see clients switch to us when they hit [Specific Limitation] and need [Our Key Strength].',
            es: '[Competidor] es una opción sólida para necesidades básicas. Normalmente vemos que los clientes se cambian a nosotros cuando alcanzan [Limitación Específica] y necesitan [Nuestra Fortaleza Clave].'
        },
        contextNote: { en: 'Never badmouth competitors; focus on "fit" and "limitations."', es: 'Nunca hables mal de la competencia; enfócate en el "ajuste" y las "limitaciones."' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-sales-006',
        category: 'Sales',
        type: 'phrase',
        tags: ['rejection', 'persistence'],
        situation: { en: 'When they say "not interested"', es: 'Cuando dicen "no me interesa"' },
        fillerToAvoid: {
            en: 'Oh, sorry to bother you then. Have a good day.',
            es: 'Oh, lamento las molestias entonces. Tenga un buen día.'
        },
        professionalReplace: {
            en: 'I appreciate the honesty. Just so I don\'t reach out at the wrong time in the future, is it because you already have a solution, or is this just not a priority this quarter?',
            es: 'Agradezco la sinceridad. Solo para no contactar en el momento equivocado en el futuro, ¿es porque ya tiene una solución, o simplemente esto no es una prioridad este trimestre?'
        },
        contextNote: { en: 'The "uninterested" objection is usually a smoke screen for "wrong time."', es: 'La objeción de "no interesado" suele ser una cortina de humo para "momento inoportuno."' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-sales-007',
        category: 'Sales',
        type: 'phrase',
        tags: ['closing'],
        situation: { en: 'When closing a call', es: 'Al cerrar una llamada' },
        fillerToAvoid: {
            en: 'Okay, so, uh, I guess we\'re done. I\'ll wait for your email.',
            es: 'Bien, entonces, eh, supongo que terminamos. Esperaré su correo electrónico.'
        },
        professionalReplace: {
            en: 'I\'ll send over the meeting invite and the [Resource] we discussed. If I don\'t hear from you by Thursday, I\'ll give you a quick nudge. Fair enough?',
            es: 'Le enviaré la invitación de la reunión y el [Recurso] que discutimos. Si no tengo noticias suyas para el jueves, le daré un toque rápido. ¿Le parece justo?'
        },
        contextNote: { en: '"Fair enough?" is a powerful soft-close.', es: '"¿Le parece justo?" es un cierre suave y poderoso.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-sales-008',
        category: 'Sales',
        type: 'phrase',
        tags: ['negotiation', 'price'],
        situation: { en: 'When they ask for a discount', es: 'Cuando piden un descuento' },
        fillerToAvoid: {
            en: 'Well, maybe I can talk to my boss and see if we can do like 10% off?',
            es: 'Bueno, tal vez pueda hablar con mi jefe y ver si podemos hacer como un 10% de descuento.'
        },
        professionalReplace: {
            en: 'We don\'t typically discount our service because we back the ROI. However, we could look at reducing the scope of [Feature] to meet your budget goal. Where shall we start?',
            es: 'Normalmente no descontamos nuestro servicio porque respaldamos el ROI. Sin embargo, podríamos considerar reducir el alcance de [Característica] para cumplir con su objetivo de presupuesto. ¿Por dónde empezamos?'
        },
        contextNote: { en: 'Defend your value; trade scope for price.', es: 'Defiende tu valor; intercambia alcance por precio.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },

    // --- EXECUTIVE ---
    {
        id: 'phrase-exec-001',
        category: 'Executive',
        type: 'phrase',
        tags: ['transparency', 'bad-news'],
        situation: { en: 'When delivering bad news', es: 'Al entregar malas noticias' },
        fillerToAvoid: {
            en: 'So, um, there\'s been a bit of a problem and I\'m really sorry about it, but...',
            es: 'Entonces, ejem, ha habido un pequeño problema y lo siento mucho, pero...'
        },
        professionalReplace: {
            en: 'I need to share a challenge we\'re facing. Here\'s the situation, the impact on our timeline, and our recommended solution.',
            es: 'Necesito compartir un desafío que enfrentamos. Aquí está la situación, el impacto en nuestro cronograma y nuestra solución recomendada.'
        },
        contextNote: { en: 'Executives appreciate "Issue + Impact + Solution."', es: 'Los ejecutivos aprecian "Problema + Impacto + Solución."' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-exec-002',
        category: 'Executive',
        type: 'phrase',
        tags: ['resources', 'ask'],
        situation: { en: 'When asking for more resources', es: 'Al pedir más recursos' },
        fillerToAvoid: {
            en: 'We are really busy and I think we need like more people maybe?',
            es: 'Estamos muy ocupados y creo que necesitamos como más gente, ¿tal vez?'
        },
        professionalReplace: {
            en: 'To hit our Q4 targets with the current quality standards, we require [Specific Resource]. Without this, the primary risk is [Significant Consequence].',
            es: 'Para alcanzar nuestros objetivos del cuarto trimestre con los estándares de calidad actuales, necesitamos [Recurso Específico]. Sin esto, el riesgo principal es [Consecuencia Significativa].'
        },
        contextNote: { en: 'Tie your needs directly to THEIR goals/risks.', es: 'Vincula tus necesidades directamente con SUS objetivos/riesgos.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-exec-003',
        category: 'Executive',
        type: 'phrase',
        tags: ['delays', 'updates'],
        situation: { en: 'When updating on delays', es: 'Al informar sobre retrasos' },
        fillerToAvoid: {
            en: 'I was thinking that maybe we might be a bit late because the team is tired...',
            es: 'Estaba pensando que tal vez podríamos retrasarnos un poco porque el equipo está cansado...'
        },
        professionalReplace: {
            en: 'We are currently behind schedule due to [Reason]. I expect to be back on track by [Date]. I\'ve already [Action] to mitigate further delay.',
            es: 'Actualmente estamos atrasados debido a [Razón]. Espero volver a la normalidad para el [Fecha]. Ya he [Acción] para mitigar un mayor retraso.'
        },
        contextNote: { en: 'Be direct; skip the long apologies.', es: 'Sé directo; omite las largas disculpas.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-exec-004',
        category: 'Executive',
        type: 'phrase',
        tags: ['innovation', 'proposal'],
        situation: { en: 'When proposing a new initiative', es: 'Al proponer una nueva iniciativa' },
        fillerToAvoid: {
            en: 'I had this idea that maybe it would be cool if we did...',
            es: 'Tuve esta idea de que tal vez sería genial si hiciéramos...'
        },
        professionalReplace: {
            en: 'I\'ve identified an opportunity to improve [Metric] by [Percentage]. By implementing [Initiative], we can achieve [Result] within [Timeline].',
            es: 'He identificado una oportunidad para mejorar [Métrica] en un [Porcentaje]. Al implementar [Iniciativa], podemos lograr [Resultado] en el [Plazo].'
        },
        contextNote: { en: 'Focus on metrics and timelines.', es: 'Enfócate en métricas y plazos.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-exec-005',
        category: 'Executive',
        type: 'phrase',
        tags: ['disagreement', 'upward'],
        situation: { en: 'When disagreeing with leadership', es: 'Al estar en desacuerdo con el liderazgo' },
        fillerToAvoid: {
            en: 'I don\'t think that\'s a good idea, actually, it\'s kind of wrong.',
            es: 'No creo que sea una buena idea, en realidad, está un poco mal.'
        },
        professionalReplace: {
            en: 'I see that perspective. My concern is that [Action] might lead to [Negative Outcome]. Have we considered [Alternative Path]?',
            es: 'Entiendo esa perspectiva. Mi preocupación es que [Acción] pueda llevar a [Resultado Negativo]. ¿Hemos considerado [Vía Alternativa]?'
        },
        contextNote: { en: 'Disagree using "concerns" and "alternatives," not "wrongness."', es: 'Discrepa usando "preocupaciones" y "alternativas", no diciendo que están "equivocados."' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-exec-006',
        category: 'Executive',
        type: 'phrase',
        tags: ['data', 'clarity'],
        situation: { en: 'When presenting complex data', es: 'Al presentar datos complejos' },
        fillerToAvoid: {
            en: 'As you can see here, there\'s a lot of numbers and stuff, but basically...',
            es: 'Como pueden ver aquí, hay muchos números y cosas, pero básicamente...'
        },
        professionalReplace: {
            en: 'The key takeaway from this data is [Primary Insight]. This means we should [Specific Action]. I\'m happy to dive into the details if needed.',
            es: 'La conclusión clave de estos datos es [Perspectiva Principal]. Esto significa que deberíamos [Acción Específica]. Estaré encantado de profundizar en los detalles si es necesario.'
        },
        contextNote: { en: 'Lead with the insight, then offer the data.', es: 'Empieza con la conclusión, luego ofrece los datos.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-exec-007',
        category: 'Executive',
        type: 'phrase',
        tags: ['efficiency', 'time'],
        situation: { en: 'When time is running out in a meeting', es: 'Cuando se agota el tiempo en una reunión' },
        fillerToAvoid: {
            en: 'Is it okay if we just keep going for like a few more minutes?',
            es: '¿Está bien si seguimos por unos minutos más?'
        },
        professionalReplace: {
            en: 'We have 5 minutes left. To be respectful of everyone\'s time, let\'s pivot to the final decision and assign action items.',
            es: 'Nos quedan 5 minutos. Por respeto al tiempo de todos, pasemos a la decisión final y asignemos los puntos de acción.'
        },
        contextNote: { en: 'Commanding the clock shows leadership.', es: 'Dominar el tiempo demuestra liderazgo.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-exec-008',
        category: 'Executive',
        type: 'phrase',
        tags: ['decisiveness'],
        situation: { en: 'When you need a final decision', es: 'Cuando necesitas una decisión final' },
        fillerToAvoid: {
            en: 'So, what do you guys want to do? Anyone have a preference?',
            es: 'Entonces, ¿qué quieren hacer ustedes? ¿Alguien tiene alguna preferencia?'
        },
        professionalReplace: {
            en: 'We\'ve explored the options. Based on the data, I recommend we move forward with [Option A]. Does anyone see a major blocker?',
            es: 'Hemos explorado las opciones. Basándonos en los datos, recomiendo que sigamos adelante con la [Opción A]. ¿Alguien ve algún impedimento importante?'
        },
        contextNote: { en: 'Force a decision by making a recommendation.', es: 'Fuerza una decisión haciendo una recomendación.' },
        difficulty: 'Advanced',
        estimatedPracticeTime: 1
    },

    // --- SOCIAL ---
    {
        id: 'phrase-social-001',
        category: 'Social',
        type: 'phrase',
        tags: ['intro', 'confidence'],
        situation: { en: 'When joining a group conversation', es: 'Al unirse a una conversación grupal' },
        fillerToAvoid: {
            en: 'Hey, sorry, can I just like, listen in? I don\'t want to bother you...',
            es: 'Hola, lo siento, ¿puedo simplemente escuchar? No quiero molestar...'
        },
        professionalReplace: {
            en: 'Mind if I join you? I caught a bit of what you said about [Topic] and I\'d love to hear more.',
            es: '¿Les importa si me uno? Escuché un poco de lo que dijeron sobre [Tema] y me encantaría saber más.'
        },
        contextNote: { en: 'Be assertive but polite; validate their topic.', es: 'Sé asertivo pero educado; valida su tema.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-002',
        category: 'Social',
        type: 'phrase',
        tags: ['awkward', 'recovery'],
        situation: { en: 'When you forget someone\'s name', es: 'Cuando olvidas el nombre de alguien' },
        fillerToAvoid: {
            en: 'Hey... you! How have you been, uh, buddy?',
            es: 'Hola... ¡tú! ¿Cómo has estado, eh, amigo?'
        },
        professionalReplace: {
            en: 'I\'ll be honest, I\'ve completely blanked on your name. I remember we talked about [Topic], though!',
            es: 'Seré honesto, se me ha olvidado completamente tu nombre. ¡Sin embargo, recuerdo que hablamos sobre [Tema]!'
        },
        contextNote: { en: 'Honesty is less awkward than fake familiarity.', es: 'La honestidad es menos incómoda que la falsa familiaridad.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-003',
        category: 'Social',
        type: 'phrase',
        tags: ['silence', 'pivot'],
        situation: { en: 'When there\'s an awkward silence', es: 'Cuando hay un silencio incómodo' },
        fillerToAvoid: {
            en: 'So... yeah. Nice weather we\'re having, right? Haha...',
            es: 'Así que... sí. Lindo clima estamos teniendo, ¿verdad? Jaja...'
        },
        professionalReplace: {
            en: 'I was just thinking about [Topic] you mentioned earlier. How did that situation turn out?',
            es: 'Estaba pensando en el [Tema] que mencionaste antes. ¿Cómo resultó esa situación?'
        },
        contextNote: { en: 'Go back to a previous high-point in the convo.', es: 'Vuelve a un punto alto anterior de la conversación.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-004',
        category: 'Social',
        type: 'phrase',
        tags: ['exit', 'grace'],
        situation: { en: 'When you want to exit gracefully', es: 'Cuando quieres retirarte con gracia' },
        fillerToAvoid: {
            en: 'Um, I have to go to the bathroom. Bye.',
            es: 'Ejem, tengo que ir al baño. Adiós.'
        },
        professionalReplace: {
            en: 'It\'s been great chatting about [Topic]. I see a friend I need to catch, but let\'s connect again soon!',
            es: 'Ha sido genial hablar sobre [Tema]. Veo a un amigo al que tengo que saludar, ¡pero volvamos a conectar pronto!'
        },
        contextNote: { en: 'Give a reason, say something nice, then leave.', es: 'Da una razón, di algo agradable y luego vete.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-005',
        category: 'Social',
        type: 'phrase',
        tags: ['disagreement', 'polite'],
        situation: { en: 'When you disagree politely', es: 'Cuando discrepas educadamente' },
        fillerToAvoid: {
            en: 'No, that\'s not true at all. You\'re totally wrong about that.',
            es: 'No, eso no es cierto en absoluto. Estás totalmente equivocado al respecto.'
        },
        professionalReplace: {
            en: 'That\'s an interesting way to look at it. I\'ve actually had a different experience where [Explanation].',
            es: 'Esa es una forma interesante de verlo. De hecho, he tenido una experiencia diferente donde [Explicación].'
        },
        contextNote: { en: 'Frame your disagreement as "a different experience."', es: 'Plantea tu desacuerdo como "una experiencia diferente."' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-social-006',
        category: 'Social',
        type: 'phrase',
        tags: ['compliment', 'genuine'],
        situation: { en: 'When giving a compliment', es: 'Al dar un cumplido' },
        fillerToAvoid: {
            en: 'You look nice today. Uh, good job.',
            es: 'Te ves bien hoy. Eh, buen trabajo.'
        },
        professionalReplace: {
            en: 'I really admired how you handled [Situation] earlier. It was very [Specific Trait].',
            es: 'Realmente admiré cómo manejaste [Situación] antes. Fue muy [Rasgo Específico].'
        },
        contextNote: { en: 'Specific compliments hit harder than generic ones.', es: 'Los cumplidos específicos impactan más que los genéricos.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-007',
        category: 'Social',
        type: 'phrase',
        tags: ['contact', 'ask'],
        situation: { en: 'When asking for contact info', es: 'Al pedir información de contacto' },
        fillerToAvoid: {
            en: 'Can I have your number maybe? Like, if you want?',
            es: '¿Puedo tener tu número tal vez? Si quieres.'
        },
        professionalReplace: {
            en: 'I\'d love to keep this conversation going. What\'s the best way to stay in touch?',
            es: 'Me encantaría mantener esta conversación. ¿Cuál es la mejor manera de estar en contacto?'
        },
        contextNote: { en: 'Open-ended ask allows them to choose LinkedIn, Email, or Phone.', es: 'Una pregunta abierta les permite elegir LinkedIn, correo electrónico o teléfono.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-social-008',
        category: 'Social',
        type: 'phrase',
        tags: ['follow-up'],
        situation: { en: 'When following up after meeting', es: 'Al hacer un seguimiento tras conocerse' },
        fillerToAvoid: {
            en: 'Hey, remember me? We talked at that thing.',
            es: 'Hola, ¿me recuerdas? Hablamos en aquello.'
        },
        professionalReplace: {
            en: 'Great meeting you at [Event]. I really enjoyed our talk on [Topic]. Here\'s that [Link/Resource] I mentioned!',
            es: 'Fue genial conocerte en [Evento]. Realmente disfruté nuestra charla sobre [Tema]. ¡Aquí tienes ese [Enlace/Recurso] que mencioné!'
        },
        contextNote: { en: 'Provide value in the follow-up.', es: 'Aporta valor en el seguimiento.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },

    // --- DATING ---
    {
        id: 'phrase-dating-001',
        category: 'Dating',
        type: 'phrase',
        tags: ['directness', 'ask'],
        situation: { en: 'When asking someone out', es: 'Al pedirle a alguien salir' },
        fillerToAvoid: {
            en: 'So, uh, do you maybe, like, want to hang out sometime? If you\'re not busy?',
            es: 'Entonces, eh, ¿tal vez quieres salir algún día? Si no estás ocupado.'
        },
        professionalReplace: {
            en: 'I\'ve really enjoyed talking to you. I\'d love to take you out for [Activity] on [Day]. How does that sound?',
            es: 'Realmente he disfrutado hablando contigo. Me encantaría sacarte a [Actividad] el [Día]. ¿Qué te parece?'
        },
        contextNote: { en: 'Confidence and a specific plan are attractive.', es: 'La confianza y un plan específico son atractivos.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-dating-002',
        category: 'Dating',
        type: 'phrase',
        tags: ['compliment', 'reception'],
        situation: { en: 'When responding to a compliment', es: 'Al responder a un cumplido' },
        fillerToAvoid: {
            en: 'Oh, no I don\'t. You\'re just saying that. I\'m actually ugly today.',
            es: 'Oh, no. Solo dices eso. En realidad estoy feo hoy.'
        },
        professionalReplace: {
            en: 'Thank you! That\'s really kind of you to notice.',
            es: '¡Gracias! Es muy amable de tu parte notarlo.'
        },
        contextNote: { en: 'Accepting compliments shows high self-esteem.', es: 'Aceptar cumplidos demuestra una alta autoestima.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-dating-003',
        category: 'Dating',
        type: 'phrase',
        tags: ['boundaries'],
        situation: { en: 'When setting boundaries', es: 'Al establecer límites' },
        fillerToAvoid: {
            en: 'Um, I guess it\'s okay, but I\'m not really into that...',
            es: 'Ejem, supongo que está bien, pero realmente no me va eso...'
        },
        professionalReplace: {
            en: 'I\'m not comfortable with [Action/Topic] right now. I\'d prefer if we focused on [Alternative].',
            es: 'No me siento cómodo con [Acción/Tema] en este momento. Preferiría que nos enfocáramos en [Alternativa].'
        },
        contextNote: { en: 'Be firm but kind; healthy boundaries build trust.', es: 'Sé firme pero amable; los límites saludables generan confianza.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-dating-004',
        category: 'Dating',
        type: 'phrase',
        tags: ['interest', 'sincerity'],
        situation: { en: 'When showing interest genuinely', es: 'Al mostrar interés de forma genuina' },
        fillerToAvoid: {
            en: 'You\'re cool. I like you, I guess.',
            es: 'Eres genial. Me caes bien, supongo.'
        },
        professionalReplace: {
            en: 'I really value how much [Trait] you have. It\'s one of the things I find most attractive about you.',
            es: 'Realmente valoro cuánto [Rasgo] tienes. Es una de las cosas que encuentro más atractivas de ti.'
        },
        contextNote: { en: 'Specific trait-based interest feels more sincere.', es: 'El interés basado en rasgos específicos parece más sincero.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-dating-005',
        category: 'Dating',
        type: 'phrase',
        tags: ['rejection', 'grace'],
        situation: { en: 'When handling rejection gracefully', es: 'Al manejar el rechazo con gracia' },
        fillerToAvoid: {
            en: 'Fine, I didn\'t like you anyway. You\'re missing out!',
            es: 'Bien, no me gustabas de todos modos. ¡Tú te lo pierdes!'
        },
        professionalReplace: {
            en: 'I appreciate the honesty. I’ve enjoyed meeting you and wish you all the best!',
            es: 'Agradezco la honestidad. ¡He disfrutado conocerte y te deseo lo mejor!'
        },
        contextNote: { en: 'Maturity in the face of rejection is the ultimate "high status" move.', es: 'La madurez ante el rechazo es el movimiento definitivo de "estatus alto."' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-dating-006',
        category: 'Dating',
        type: 'phrase',
        tags: ['planning'],
        situation: { en: 'When planning a date', es: 'Al planificar una cita' },
        fillerToAvoid: {
            en: 'Whatever you want to do is fine with me. I don\'t care.',
            es: 'Lo que quieras hacer me parece bien. No me importa.'
        },
        professionalReplace: {
            en: 'I was thinking of [Option A] or [Option B]. Do either of those sound like a good time to you?',
            es: 'Estaba pensando en [Opción A] u [Opción B]. ¿Alguna de esas te parece un buen plan?'
        },
        contextNote: { en: 'Providing options shows initiative but remains collaborative.', es: 'Ofrecer opciones muestra iniciativa pero sigue siendo colaborativo.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
    {
        id: 'phrase-dating-007',
        category: 'Dating',
        type: 'phrase',
        tags: ['vulnerability'],
        situation: { en: 'When expressing vulnerability', es: 'Al expresar vulnerabilidad' },
        fillerToAvoid: {
            en: 'I\'m fine. Nothing is wrong. Don\'t worry about it.',
            es: 'Estoy bien. No pasa nada. No te preocupes por eso.'
        },
        professionalReplace: {
            en: 'To be honest, I\'m feeling a little [Emotion] about [Situation]. I wanted to share that with you.',
            es: 'Para ser honesto, me siento un poco [Emoción] con respecto a [Situación]. Quería compartir eso contigo.'
        },
        contextNote: { en: 'Vulnerability is the bridge to deep connection.', es: 'La vulnerabilidad es el puente hacia una conexión profunda.' },
        difficulty: 'Intermediate',
        estimatedPracticeTime: 2
    },
    {
        id: 'phrase-dating-008',
        category: 'Dating',
        type: 'phrase',
        tags: ['closing'],
        situation: { en: 'When ending a date well', es: 'Al terminar bien una cita' },
        fillerToAvoid: {
            en: 'So, yeah. That was cool. See ya.',
            es: 'Así que, sí. Estuvo bien. Nos vemos.'
        },
        professionalReplace: {
            en: 'I had a wonderful time tonight. I\'d really like to see you again. I\'ll give you a call tomorrow!',
            es: 'He pasado una noche maravillosa. Realmente me gustaría volver a verte. ¡Te llamaré mañana!'
        },
        contextNote: { en: 'Clear communication of intent removes anxiety for both parties.', es: 'La comunicación clara de intenciones elimina la ansiedad para ambas partes.' },
        difficulty: 'Beginner',
        estimatedPracticeTime: 1
    },
];
