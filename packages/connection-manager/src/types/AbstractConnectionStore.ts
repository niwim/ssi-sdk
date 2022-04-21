​import {Holder} from '../entities/Holder'
​import {Connection} from '../entities/Connection'
import { IAddConnectionArgs, ICreateHolderArgs } from './IConnectionManager';

export abstract class AbstractConnectionStore {
  abstract addConnection(args: IAddConnectionArgs): Promise<Connection>
  abstract createHolder(args: ICreateHolderArgs): Promise<Holder>
}