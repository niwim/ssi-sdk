jest.setTimeout(30000)
import connectionManagerLogic from './shared/connectionManagerLogic'
import { IConnectionManager } from '../src/types/IConnectionManager'
import { ConnectionManager } from '../src/agent/ConnectionManager'
import { createAgent } from '@veramo/core'
import { DataSource } from 'typeorm'
import { ConnectionStore } from '../src/types/ConnectionStore'
import { Holder } from '../src/entities/Holder'
import { Connection } from '../src/entities/Connection'

let agent: any

const setup = async (): Promise<boolean> => {
  // const config = getConfig('packages/connection-manager/agent.yml')
  // const { localAgent } = createObjects(config, { localAgent: '/agent' })

  const AppDataSource = new DataSource({
    type: "sqlite",
    database : "packages/connection-manager/dist/test.db",
    synchronize: true,
    migrationsRun: true,
    logging: true,
    entities: [Holder, Connection]
})

  const localAgent = createAgent<IConnectionManager>({
    plugins: [
      new ConnectionManager(new ConnectionStore(AppDataSource))
    ],
  })
  agent = localAgent
  return true
}

const tearDown = async (): Promise<boolean> => {
  return true
}

const getAgent = () => agent
const testContext = {
  getAgent,
  setup,
  tearDown,
  isRestTest: false,
}

describe('Local integration tests', () => {
  connectionManagerLogic(testContext)
})
