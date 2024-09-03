import { prop, modelOptions } from '@typegoose/typegoose';
import { Widget } from '../Widget/Widget';
import { Site } from '../Site/Site';

@modelOptions({
  schemaOptions: { collection: 'cycles', timestamps: true },
})
export class Cycle {
  @prop({ required: true, type: () => String })
  public name: string;

  @prop({ required: true, type: () => Site })
  public site: Site;

  @prop({
    required: false,
    type: () => Widget,
  })
  public firstWidgetOfCycle?: Widget;

  @prop({
    required: false,
    type: () => Widget,
  })
  public lastWidgetOfCycle?: Widget;
}
