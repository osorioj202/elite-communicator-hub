export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'Sales' | 'Executive' | 'Social' | 'Dating';
export type Industry = 'tech' | 'real-estate' | 'renewable-energy' | 'finance' | 'healthcare' | 'general';

export type LocalizedString = { en: string; es: string };

export interface Scenario {
    id: string;
    category: Category;
    title: LocalizedString;
    description: LocalizedString;
    difficulty: Difficulty;
    icon: string; // emoji
    tips: LocalizedString[];
    prospectSystemPrompt: string; // Internal, can remain string but usually tailored per language in API
}

export interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
}

export interface FeedbackResult {
    score: number; // 0–10
    strengths: string[];
    improvements: string[];
    rewrites: Array<{ original: string; better: string }>;
}

export interface SessionResult {
    id: string;
    scenarioId: string;
    scenarioTitle: LocalizedString;
    transcript: Message[];
    feedback: FeedbackResult | null;
    durationSeconds: number;
    createdAt: number; // Unix ms
}

export interface CommunicationTip {
    id: string;
    category: Category;
    title: LocalizedString;
    framework: LocalizedString;
    expert: LocalizedString;
    description: LocalizedString;
    actionableSteps: LocalizedString[];
    exampleScript: {
        bad: LocalizedString;
        good: LocalizedString;
    };
}

// --- COMMUNICATION POCKETS ---

export interface BasePocket {
    id: string;
    category: Category; // 'Sales' | 'Executive' | 'Social' | 'Dating'
    tags: string[]; // For search/filtering
    difficulty: Difficulty;
    estimatedPracticeTime: number; // in minutes
    relatedScenarioIds?: string[]; // Link to relevant scenarios
}

// 1. Phrase Pocket
export interface PhrasePocket extends BasePocket {
    type: 'phrase';
    situation: LocalizedString;
    fillerToAvoid: LocalizedString;
    professionalReplace: LocalizedString;
    contextNote?: LocalizedString;
}

// 2. Story Bank
export interface CommunicationStory extends BasePocket {
    type: 'story';
    title: LocalizedString;
    purpose: LocalizedString;
    story: LocalizedString; // Max 50 words
    keyTakeaway: LocalizedString;
    adaptablePrompt: LocalizedString;
}

// 3. Question Pocket
export interface QuestionPocket extends BasePocket {
    type: 'question';
    situation: LocalizedString;
    question: LocalizedString;
    purpose: LocalizedString;
}

// 4. Recovery Pocket
export interface RecoveryPocket extends BasePocket {
    type: 'recovery';
    trigger: LocalizedString; // e.g., "When you blank out"
    recoveryPhrase: LocalizedString;
    followUp?: LocalizedString;
}

// 5. Transition Pocket
export interface TransitionPocket extends BasePocket {
    type: 'transition';
    from: LocalizedString;
    to: LocalizedString;
    bridgePhrase: LocalizedString;
    example: LocalizedString;
}

// 6. Energy & Delivery Pocket
export interface DeliveryPocket extends BasePocket {
    type: 'delivery';
    focusArea: LocalizedString;
    instruction: LocalizedString;
    scienceNote?: LocalizedString;
}

// 7. Closing Pocket
export interface ClosingPocket extends BasePocket {
    type: 'closing';
    objective: LocalizedString;
    phrase: LocalizedString;
}

// 8. Listening Pocket
export interface ListeningPocket extends BasePocket {
    type: 'listening';
    technique: LocalizedString;
    howToApply: LocalizedString;
    examplePhrase: LocalizedString;
}

// 9. Confidence Booster
export interface ConfidenceBooster extends BasePocket {
    type: 'confidence';
    title: LocalizedString;
    instruction: LocalizedString;
    scienceNote?: LocalizedString;
}

// 10. Cultural Nuance Pocket
export interface CulturalPocket extends BasePocket {
    type: 'cultural';
    region: string; // Usually a proper name, doesn't always need translation but could
    tip: LocalizedString;
    avoid: LocalizedString;
}

// 11. User's Personal Pocket (Saved by user)
export interface UserPocket extends BasePocket {
    type: 'user-saved';
    sourcePocketId: string; // Reference to original pocket
    customNote?: string; // User's personal note
    timesUsed: number; // Track usage
    savedAt: string; // ISO date
}

// Union Type for all pockets
export type Pocket = PhrasePocket | CommunicationStory | QuestionPocket | RecoveryPocket | TransitionPocket | DeliveryPocket | ClosingPocket | ListeningPocket | ConfidenceBooster | CulturalPocket | UserPocket;

// Pocket Type Label
export type PocketType = Pocket['type'];
