import { DataSource } from 'typeorm';
​import {Holder} from '../model/Holder'

import { AbstractConnectionStore } from './AbstractConnectionStore'
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
  }: {
    name: string
  }): Promise<Holder> {
    console.log('connection-store before inititalization');
    const holder = new Holder()
    this.appDataSource.initialize()
    .then(() => {
      console.log('this.appDataSource.initialize() successful')
      const holderRepository = this.appDataSource.getRepository(Holder)
      holder.name = "Timber"
      holderRepository.save(holder)
      console.log("Holder id is", holder.id)
      })
    .catch((error) => console.log(error))
    console.log('after inititalization');
    return holder;
  }
}