import { prop, PropType, Ref } from '@typegoose/typegoose';
import { AlgoBase } from '../AlgoBase';
import { AlgoName } from '../AlgoName';
import { Cycle } from '../../Cycle/Cycle';

export class FooAlgo extends AlgoBase {
  constructor() {
    super(AlgoName.FOO);
  }

  @prop({ required: true, ref: () => Cycle }, PropType.ARRAY)
  public cycles: Array<Ref<Cycle>>;
}
