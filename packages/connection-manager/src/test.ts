import { Holder } from "./model/Holder"
import { ConnectionManager } from "./agent/ConnectionManager"

const holder = new Holder()
console.log('this.appDataSource.initialize() successful')
holder.name = "Timber"
const connectionManager = new ConnectionManager();
connectionManager.createHolder(holder);
console.log("holder has been saved: ", holder)
