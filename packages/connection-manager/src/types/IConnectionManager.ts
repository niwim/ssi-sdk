import {IPluginMethodMap} from '@veramo/core'

export interface IConnectionManager extends IPluginMethodMap {
  createHolder(args: {name: string}): Promise<void>;
}