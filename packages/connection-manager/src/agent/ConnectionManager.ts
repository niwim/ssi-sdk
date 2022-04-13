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
    findById: this.findById.bind(this),
    findAll: this.findAll.bind(this),
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

  /** {@inheritDoc IConnectionManager.findById} */
  private async findById(args: String): Promise<IResponse> {
    console.log('findById');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

  /** {@inheritDoc IConnectionManager.findAll} */
  private async findAll(): Promise<IResponse> {
    console.log('findAll');
    return new Promise((resolve) => {
      resolve(new Response());
  });
  }

}
