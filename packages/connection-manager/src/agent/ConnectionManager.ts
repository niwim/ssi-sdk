import { IAgentPlugin } from '@veramo/core'
​import {Holder} from '../entities/Holder'
import { IAddConnectionArgs, IConnectionManager, ICreateHolderArgs } from '../types/IConnectionManager'
import { Connection } from '../entities/Connection';
import { ConnectionStore } from '../types/ConnectionStore';

export class ConnectionManager implements IAgentPlugin {
  private connectionStore: ConnectionStore;

  constructor(connectionStore: ConnectionStore) {
    this.connectionStore = connectionStore
  }

  readonly methods: IConnectionManager = {
    initDB: this.initDB.bind(this),
    createHolder: this.createHolder.bind(this),
//    updateEntity
//    deleteEntity
//    getEntity
//    getEntities
    addConnection: this.addConnection.bind(this)
//    updateConnection: this.updateConnection.bind(this),
//    deleteConnection: this.deleteConnection.bind(this),
//    getConnection: this.getConnection.bind(this),
//    getConnections: this.getConnections.bind(this)
  }

  private initDB(): Promise<void> {
    return this.connectionStore.initDB();
  }

  private createHolder(args: ICreateHolderArgs): Promise<Holder> {
    return this.connectionStore.createHolder(args);
  }

  private addConnection(args: IAddConnectionArgs): Promise<Connection> {
    return this.connectionStore.addConnection(args);
  }

}
