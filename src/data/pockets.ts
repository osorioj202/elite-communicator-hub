import { Pocket } from '@/types';
import { PHRASE_POCKETS } from './pockets/phrasePockets';
import { STORY_BANK } from './pockets/storyBank';
import { QUESTION_POCKETS } from './pockets/questionPockets';
import { RECOVERY_POCKETS } from './pockets/recoveryPockets';
import { TRANSITION_POCKETS } from './pockets/transitionPockets';
import { DELIVERY_POCKETS } from './pockets/deliveryPockets';
import { CLOSING_POCKETS } from './pockets/closingPockets';
import { LISTENING_POCKETS } from './pockets/listeningPockets';
import { CONFIDENCE_BOOSTERS } from './pockets/confidenceBoosters';
import { CULTURAL_POCKETS_EXPANDED } from './pockets/culturalPockets';

export const POCKETS: Pocket[] = [
    ...PHRASE_POCKETS,
    ...STORY_BANK,
    ...QUESTION_POCKETS,
    ...RECOVERY_POCKETS,
    ...TRANSITION_POCKETS,
    ...DELIVERY_POCKETS,
    ...CLOSING_POCKETS,
    ...LISTENING_POCKETS,
    ...CONFIDENCE_BOOSTERS,
    ...CULTURAL_POCKETS_EXPANDED
];
