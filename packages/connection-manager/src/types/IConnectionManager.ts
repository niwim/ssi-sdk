import {IPluginMethodMap} from '@veramo/core'
​import {Holder} from '../model/Holder'

export interface IConnectionManager extends IPluginMethodMap {
  createHolder(args: {name: string}): Promise<Holder>;
}