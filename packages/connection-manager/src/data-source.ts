import "reflect-metadata"
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "ssi",
    synchronize: true,
    migrationsRun: true,
    logging: true,
    entities: ['packages/connection-manager/src/model/*.ts']
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
