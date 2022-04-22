​import {Holder} from '../entities/Holder'
​import {Connection} from '../entities/Connection'
import { IAddConnectionArgs, ICreateHolderArgs } from './IConnectionManager';
import { DataSource } from 'typeorm';

export abstract class AbstractConnectionStore {
  appDataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.appDataSource = dataSource
  }

  async initDB(): Promise<void> {
    await this.appDataSource.initialize()
    .then(async () => {
      console.log('DB Init successfull')
      })
    .catch((error) => console.log(error))
  }

  abstract addConnection(args: IAddConnectionArgs): Promise<Connection>
  abstract createHolder(args: ICreateHolderArgs): Promise<Holder>
}