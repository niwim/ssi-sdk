import { TAgent } from '@veramo/core'
import { IConnectionManager } from '../../src/types/IConnectionManager'

type ConfiguredAgent = TAgent<IConnectionManager>

export default (testContext: {
  getAgent: () => ConfiguredAgent
  setup: () => Promise<boolean>
  tearDown: () => Promise<boolean>
  isRestTest: boolean
}) => {
  describe('Connection Manager Agent Plugin', () => {
    let agent: ConfiguredAgent

    beforeAll(async () => {
      await testContext.setup()
      agent = testContext.getAgent()
    })

    afterAll(testContext.tearDown)

    it('should create connection', async () => {
      await agent.createConnection({})
    })

    it('should delete connection', async () => {
      await agent.deleteConnection({})
    })

    it('should update connection', async () => {
      await agent.updateConnection({})
    })

    it('should find connection by id', async () => {
      await agent.findById('Test')
    })

    it('should find all connections', async () => {
      await agent.findAll()
    })
  })
}
