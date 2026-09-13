import { LocalizedString, Industry } from '@/types';

export interface IndustryData {
    id: Industry;
    name: LocalizedString;
    icon: string;
    description: LocalizedString;
    keyContext: LocalizedString; // Context for AI to use in prompts
    painPoints: LocalizedString[];
    valuePropositions: LocalizedString[];
}

export const INDUSTRIES: Record<Industry, IndustryData> = {
    tech: {
        id: 'tech',
        name: { en: 'Technology', es: 'Tecnología' },
        icon: '💻',
        description: {
            en: 'Software, SaaS, AI, and tech startups',
            es: 'Software, SaaS, IA y startups tecnológicas'
        },
        keyContext: {
            en: 'This is a Technology/SaaS industry prospect. They care about innovation, ROI, technical architecture, integration capabilities, and scalability. They speak fast and value efficiency.',
            es: 'Este es un prospecto de la industria tecnológica/SaaS. Les importa la innovación, ROI, arquitectura técnica, capacidades de integración y escalabilidad. Hablan rápido y valoran la eficiencia.'
        },
        painPoints: [
            { en: 'Integration complexity', es: 'Complejidad de integración' },
            { en: 'Technical debt', es: 'Deuda técnica' },
            { en: 'Time to market', es: 'Tiempo al mercado' },
            { en: 'Talent retention', es: 'Retención de talento' },
        ],
        valuePropositions: [
            { en: 'Faster deployment and scaling', es: 'Despliegue y escalado más rápido' },
            { en: 'Better performance and uptime', es: 'Mejor rendimiento y disponibilidad' },
            { en: 'Reduced development time', es: 'Tiempo de desarrollo reducido' },
        ],
    },
    'real-estate': {
        id: 'real-estate',
        name: { en: 'Real Estate', es: 'Inmobiliario' },
        icon: '🏢',
        description: {
            en: 'Commercial and residential property, development, and management',
            es: 'Propiedad, desarrollo y gestión de bienes raíces comerciales y residenciales'
        },
        keyContext: {
            en: 'This is a Real Estate industry prospect. They focus on property values, occupancy rates, tenant satisfaction, regulatory compliance, and long-term investments. They are relationship-oriented and detail-conscious.',
            es: 'Este es un prospecto de la industria inmobiliaria. Se enfocan en valores de propiedad, tasas de ocupación, satisfacción del inquilino, cumplimiento regulatorio e inversiones a largo plazo. Son orientados a las relaciones y conscientes de los detalles.'
        },
        painPoints: [
            { en: 'High vacancy rates', es: 'Altas tasas de vacancia' },
            { en: 'Property maintenance costs', es: 'Costos de mantenimiento de propiedades' },
            { en: 'Tenant turnover', es: 'Rotación de inquilinos' },
            { en: 'Regulatory compliance', es: 'Cumplimiento regulatorio' },
        ],
        valuePropositions: [
            { en: 'Increased occupancy and rental rates', es: 'Mayor ocupación y tasas de alquiler' },
            { en: 'Reduced maintenance overhead', es: 'Gastos generales de mantenimiento reducidos' },
            { en: 'Better tenant retention', es: 'Mejor retención de inquilinos' },
            { en: 'Improved property value', es: 'Valor de propiedad mejorado' },
        ],
    },
    'renewable-energy': {
        id: 'renewable-energy',
        name: { en: 'Renewable Energy', es: 'Energías Renovables' },
        icon: '⚡',
        description: {
            en: 'Solar, wind, hydro, and other clean energy solutions',
            es: 'Soluciones de energía limpia solar, eólica, hidráulica y otras'
        },
        keyContext: {
            en: 'This is a Renewable Energy industry prospect. They prioritize sustainability, cost savings, government incentives, ROI timelines, environmental impact, and regulatory frameworks. They are mission-driven but also profit-conscious.',
            es: 'Este es un prospecto de la industria de energías renovables. Priorizan la sostenibilidad, ahorro de costos, incentivos gubernamentales, cronogramas de ROI, impacto ambiental y marcos regulatorios. Son impulsados por una misión pero también conscientes de ganancias.'
        },
        painPoints: [
            { en: 'High upfront capital costs', es: 'Altos costos iniciales de capital' },
            { en: 'Energy storage and efficiency', es: 'Almacenamiento y eficiencia energética' },
            { en: 'Grid integration complexity', es: 'Complejidad de integración de red' },
            { en: 'Regulatory uncertainty', es: 'Incertidumbre regulatoria' },
        ],
        valuePropositions: [
            { en: 'Reduced energy costs long-term', es: 'Costos de energía reducidos a largo plazo' },
            { en: 'Access to green subsidies and tax credits', es: 'Acceso a subsidios verdes y créditos fiscales' },
            { en: 'Enhanced brand reputation', es: 'Reputación de marca mejorada' },
            { en: 'Carbon footprint reduction', es: 'Reducción de huella de carbono' },
        ],
    },
    finance: {
        id: 'finance',
        name: { en: 'Finance & Banking', es: 'Finanzas y Banca' },
        icon: '🏦',
        description: {
            en: 'Banks, investment firms, fintech, and financial services',
            es: 'Bancos, empresas de inversión, fintech y servicios financieros'
        },
        keyContext: {
            en: 'This is a Finance industry prospect. They are highly risk-averse, compliance-focused, and data-driven. They care deeply about security, regulatory requirements, audit trails, and ROI calculations. They move slowly but decisively.',
            es: 'Este es un prospecto de la industria financiera. Son muy adversos al riesgo, enfocados en cumplimiento y basados en datos. Les importa profundamente la seguridad, requisitos regulatorios, registros de auditoría y cálculos de ROI. Se mueven lentamente pero decisivamente.'
        },
        painPoints: [
            { en: 'Regulatory compliance costs', es: 'Costos de cumplimiento regulatorio' },
            { en: 'Cybersecurity threats', es: 'Amenazas de ciberseguridad' },
            { en: 'Customer acquisition cost', es: 'Costo de adquisición de cliente' },
            { en: 'Legacy system integration', es: 'Integración de sistemas heredados' },
        ],
        valuePropositions: [
            { en: 'Enhanced security and compliance', es: 'Seguridad y cumplimiento mejorados' },
            { en: 'Faster transaction processing', es: 'Procesamiento de transacciones más rápido' },
            { en: 'Better fraud detection', es: 'Mejor detección de fraude' },
            { en: 'Improved customer experience', es: 'Experiencia del cliente mejorada' },
        ],
    },
    healthcare: {
        id: 'healthcare',
        name: { en: 'Healthcare', es: 'Salud' },
        icon: '🏥',
        description: {
            en: 'Hospitals, clinics, pharmaceuticals, and health tech',
            es: 'Hospitales, clínicas, farmacéuticos y tecnología sanitaria'
        },
        keyContext: {
            en: 'This is a Healthcare industry prospect. They prioritize patient outcomes, regulatory compliance (HIPAA, etc.), cost control, staff efficiency, and evidence-based solutions. They are conservative and data-hungry.',
            es: 'Este es un prospecto de la industria sanitaria. Priorizan los resultados del paciente, cumplimiento regulatorio (HIPAA, etc.), control de costos, eficiencia del personal y soluciones basadas en evidencia. Son conservadores y con hambre de datos.'
        },
        painPoints: [
            { en: 'Rising operational costs', es: 'Aumento de costos operacionales' },
            { en: 'Staff burnout and turnover', es: 'Agotamiento del personal y rotación' },
            { en: 'Patient data security', es: 'Seguridad de datos del paciente' },
            { en: 'Regulatory compliance', es: 'Cumplimiento regulatorio' },
        ],
        valuePropositions: [
            { en: 'Better patient care and outcomes', es: 'Mejor atención y resultados del paciente' },
            { en: 'Reduced administrative burden', es: 'Carga administrativa reducida' },
            { en: 'Improved staff satisfaction', es: 'Satisfacción del personal mejorada' },
            { en: 'Cost savings and efficiency', es: 'Ahorros de costos y eficiencia' },
        ],
    },
    general: {
        id: 'general',
        name: { en: 'General / Any Industry', es: 'General / Cualquier Industria' },
        icon: '🎯',
        description: {
            en: 'Practice with a neutral prospect without industry-specific bias',
            es: 'Practica con un prospecto neutral sin sesgo específico de la industria'
        },
        keyContext: {
            en: 'This is a general prospect from any industry. They are professional, rational, and interested in solutions that drive results.',
            es: 'Este es un prospecto general de cualquier industria. Son profesionales, racionales e interesados en soluciones que impulsen resultados.'
        },
        painPoints: [
            { en: 'Cost efficiency', es: 'Eficiencia de costos' },
            { en: 'Business growth', es: 'Crecimiento empresarial' },
        ],
        valuePropositions: [
            { en: 'Increased ROI', es: 'ROI aumentado' },
            { en: 'Better business outcomes', es: 'Mejores resultados empresariales' },
        ],
    },
};

export function getIndustry(industryId: Industry): IndustryData {
    return INDUSTRIES[industryId] || INDUSTRIES.general;
}
