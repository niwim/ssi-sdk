import {IPluginMethodMap} from '@veramo/core'

export interface IConnectionManager extends IPluginMethodMap {
  createConnection(args: ICreateConnectionArgs): Promise<IResponse>;
  updateConnection(args: IUpdateConnectionArgs): Promise<IResponse>;
  deleteConnection(args: IDeleteConnectionArgs): Promise<IResponse>;
  getConnection(args: String): Promise<IResponse>;
  getConnections(): Promise<IResponse>;
}

export interface ICreateConnectionArgs {
}

export interface IUpdateConnectionArgs {
}

export interface IDeleteConnectionArgs {
}

export interface IResponse extends Response {}
