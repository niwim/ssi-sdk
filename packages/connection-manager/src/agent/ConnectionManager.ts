import { IAgentPlugin } from '@veramo/core'
import { AppDataSource } from '../data-source';
import { ConnectionStore } from '../types/ConnectionStore';

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

  private async createHolder(args: {name: string}): Promise<void>{
    const store = new ConnectionStore(AppDataSource);
    await store.createHolder(args);
  }
}
