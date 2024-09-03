import { getModelForClass, type DocumentType } from '@typegoose/typegoose';

import { Site } from './Site';

const siteModel = getModelForClass(Site);
type SiteDocument = DocumentType<Site>;

export { siteModel, type SiteDocument };
