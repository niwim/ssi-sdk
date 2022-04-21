import { IAgentPlugin } from '@veramo/core'
​import {Holder} from '../entities/Holder'
import { IAddConnectionArgs, IConnectionManager, ICreateHolderArgs } from '../types/IConnectionManager'
import { AbstractConnectionStore } from '../types/AbstractConnectionStore';
import { Connection } from '../entities/Connection';
import { ConnectionStore } from '../types/ConnectionStore';
import { AppDataSource } from '../data-source';

export class ConnectionManager implements IAgentPlugin {
  private connectionStore: AbstractConnectionStore;

  constructor() {
    this.connectionStore = new ConnectionStore(AppDataSource);
  }

  readonly methods: IConnectionManager = {
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

  public createHolder(args: ICreateHolderArgs): Promise<Holder> {
    return this.connectionStore.createHolder(args);
  }

  public addConnection(args: IAddConnectionArgs): Promise<Connection> {
    return this.connectionStore.addConnection(args);
  }

}
