import { getModelForClass, type DocumentType } from '@typegoose/typegoose';

import { Widget } from './Widget';

const widgetModel = getModelForClass(Widget);
type WidgetDocument = DocumentType<Widget>;

export { widgetModel, type WidgetDocument };
