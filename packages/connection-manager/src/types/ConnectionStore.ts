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
  }): Promise<void> {
    console.log('createHolder');
    const holderRepository = this.appDataSource.getRepository(Holder)
    const holder = new Holder()
    holder.name = "Timber"
    holder.id=1
    await holderRepository.save(holder)
    console.log("Holder id is", holder.id)
  }
}