​import {Holder} from '../model/Holder'

export abstract class AbstractConnectionStore {
  abstract createHolder(args: {name: string}): Promise<Holder> // TODO: We need an interface for the argument and we need to return 
}