import { getModelForClass, type DocumentType } from '@typegoose/typegoose';

import { Cycle } from './Cycle';

const cycleModel = getModelForClass(Cycle);
type CycleDocument = DocumentType<Cycle>;

export { cycleModel, type CycleDocument };
