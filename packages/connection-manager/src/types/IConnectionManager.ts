import {IPluginMethodMap} from '@veramo/core'
​import {Holder} from '../entities/Holder'
​import {Connection} from '../entities/Connection'

export interface IConnectionManager extends IPluginMethodMap {
  createHolder(args: ICreateHolderArgs): Promise<Holder>;
  addConnection(args: IAddConnectionArgs): Promise<Connection>;
  initDB(): Promise<void>
}

export interface IAddConnectionArgs {
  type: string
  config: string
  details: string
  holderId: number
}

export interface ICreateHolderArgs {
  name: string
}