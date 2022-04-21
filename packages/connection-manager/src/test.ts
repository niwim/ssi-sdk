//import { TAgent } from "@veramo/core"
import { ConnectionManager } from "./agent/ConnectionManager"
import { Holder } from "./entities/Holder"
//import { IConnectionManager } from "./types/IConnectionManager"
//import { ConnectionManager } from "./agent/ConnectionManager"

const holder = new Holder()
console.log('this.appDataSource.initialize() successful')
holder.name = "Timber"
const connManager = new ConnectionManager()
connManager.createHolder(holder)
connManager.addConnection({
    type: 'OPENID',
    config: 'config',
    details: 'details',
    holderId: holder.id
  })
console.log("holder & connection has been saved: ", holder)
