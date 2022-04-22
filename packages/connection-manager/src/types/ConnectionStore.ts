import { Connection } from '../entities/Connection';
import { Holder } from '../entities/Holder'
import { AbstractConnectionStore } from './AbstractConnectionStore'
import { IAddConnectionArgs, ICreateHolderArgs } from './IConnectionManager';

export class ConnectionStore extends AbstractConnectionStore {

  async createHolder(args: ICreateHolderArgs): Promise<Holder> {
    let holder = new Holder()
    const holderRepository = this.appDataSource.getRepository(Holder)
    holder.name = args.name
    holder = await holderRepository.save(holder)
    return holder;
  }

  async addConnection(args: IAddConnectionArgs): Promise<Connection> {
    let connection = new Connection()
    const holderRepository = this.appDataSource.getRepository(Holder)
    const connectionRepository = this.appDataSource.getRepository(Connection)
    connection.config = args.config
    connection.createdDate = new Date()
    connection.details = args.details
    connection.type = args.type
    const holder = await holderRepository.findOneByOrFail({ id: args.holderId })
    connection.holders = [holder]
    connection = await connectionRepository.save(connection)
    return connection;
  }

}