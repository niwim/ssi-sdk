import { Holder } from "./model/Holder"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
    .then(() => {
    const holder = new Holder()
    console.log('this.appDataSource.initialize() successful')
    holder.name = "Timber"
    AppDataSource.manager.save(holder)
    console.log("holder has been saved: ", holder)
  })
  .catch((error) => console.log(error))
