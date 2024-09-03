import { prop, modelOptions } from '@typegoose/typegoose';
import { AlgoBase, AlgoDiscriminators } from '../Algo';

@modelOptions({
  schemaOptions: { collection: 'widgets', timestamps: true },
})
export class Widget {
  @prop({ required: true, type: () => String })
  public name: string;

  @prop({
    required: true,
    type: () => AlgoBase,
    discriminators: () => AlgoDiscriminators,
  })
  public algo: AlgoBase;
}
