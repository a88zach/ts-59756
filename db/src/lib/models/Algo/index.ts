import * as Foo from './foo';
import { AlgoBase } from './AlgoBase';
import { AlgoName } from './AlgoName';

export { Foo, AlgoBase, AlgoName };

export const AlgoDiscriminators = [{ type: Foo.FooAlgo, value: AlgoName.FOO }];
