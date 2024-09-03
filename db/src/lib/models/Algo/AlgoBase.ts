import { modelOptions, prop } from '@typegoose/typegoose';

import { AlgoName } from './AlgoName';
import { FooAlgo } from './foo';

@modelOptions({
  schemaOptions: {
    discriminatorKey: 'name',
    _id: false,
  },
})
export abstract class AlgoBase {
  @prop({ required: true, enum: () => AlgoName, type: () => String })
  public readonly name: AlgoName;

  constructor(name: AlgoName) {
    this.name = name;
  }

  public isFoo(): this is FooAlgo {
    return this.name === AlgoName.FOO;
  }
}
