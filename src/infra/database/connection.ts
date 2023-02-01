import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "brasiltransportes",
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/infra/database/migrations/*.ts'],
    migrationsRun: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })