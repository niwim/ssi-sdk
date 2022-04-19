import { IAgentPlugin } from '@veramo/core'
import { AppDataSource } from '../data-source';
import { ConnectionStore } from '../types/ConnectionStore';
​import {Holder} from '../model/Holder'

import { IConnectionManager } from '../types/IConnectionManager'

export class ConnectionManager implements IAgentPlugin {
  readonly methods: IConnectionManager = {
    createHolder: this.createHolder.bind(this)
//    updateEntity
//    deleteEntity
//    getEntity
//    getEntities
//    addConnection: this.addConnection.bind(this),
//    updateConnection: this.updateConnection.bind(this),
//    deleteConnection: this.deleteConnection.bind(this),
//    getConnection: this.getConnection.bind(this),
//    getConnections: this.getConnections.bind(this)
  }

  public createHolder(args: {name: string}): Promise<Holder> {
    const store = new ConnectionStore(AppDataSource);
    return store.createHolder(args);
  }
}
