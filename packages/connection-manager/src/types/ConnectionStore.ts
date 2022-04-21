import { DataSource } from 'typeorm';
import { Connection } from '../entities/Connection';
​import {Holder} from '../entities/Holder'

import { AbstractConnectionStore } from './AbstractConnectionStore'
import { IAddConnectionArgs, ICreateHolderArgs } from './IConnectionManager';
​
export class ConnectionStore extends AbstractConnectionStore {

  private appDataSource: DataSource;

  constructor(dataSource: DataSource) {
    super()
    this.appDataSource = dataSource
  }
​
  async createHolder({
    name
  }: ICreateHolderArgs): Promise<Holder> {
    const holder = new Holder()
    this.appDataSource.initialize()
    .then(async () => {
      const holderRepository = this.appDataSource.getRepository(Holder)
      holder.name = name
      await holderRepository.save(holder)
      })
    .catch((error) => console.log(error))
    return holder;
  }

  async addConnection(args: IAddConnectionArgs): Promise<Connection> {
    const connection = new Connection()
    this.appDataSource.initialize()
    .then(async () => {
      const holderRepository = this.appDataSource.getRepository(Holder)
      const connectionRepository = this.appDataSource.getRepository(Connection)
      connection.config = args.config
      connection.createdDate = new Date()
      connection.details = args.details
      connection.type = args.type
      const holder = await holderRepository.findOneByOrFail({id : args.holderId})
      connection.holders = [holder]
      await connectionRepository.save(connection)
      })
    .catch((error) => console.log(error))
    return connection;
  }

}