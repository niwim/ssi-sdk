import { IAgentPlugin } from '@veramo/core'

import {
  ICreateConnectionArgs,
  IUpdateConnectionArgs,
  IDeleteConnectionArgs,
  IResponse,
  IConnectionManager
} from '../types/IConnectionManager'

/**
 * {@inheritDoc IConnectionManager}
 */
export class ConnectionManager implements IAgentPlugin {
  readonly methods: IConnectionManager = {
    createConnection: this.createConnection.bind(this),
    updateConnection: this.updateConnection.bind(this),
    deleteConnection: this.deleteConnection.bind(this),
    getConnection: this.getConnection.bind(this),
    getConnections: this.getConnections.bind(this)
  }


  /** {@inheritDoc IConnectionManager.createConnection} */
  private async createConnection(args: ICreateConnectionArgs): Promise<IResponse> {
    console.log('createConnection');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

  /** {@inheritDoc IConnectionManager.updateConnection} */
  private async updateConnection(args: IUpdateConnectionArgs): Promise<IResponse> {
    console.log('updateConnection');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

  /** {@inheritDoc IConnectionManager.deleteConnection} */
  private async deleteConnection(args: IDeleteConnectionArgs): Promise<IResponse> {
    console.log('deleteConnection');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

  /** {@inheritDoc IConnectionManager.getConnection} */
  private async getConnection(args: String): Promise<IResponse> {
    console.log('getConnection');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

  /** {@inheritDoc IConnectionManager.getConnections} */
  private async getConnections(): Promise<IResponse> {
    console.log('getConnections');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

}
