import { TAgent } from '@veramo/core'
import { IConnectionManager } from '../../src/types/IConnectionManager'
import { Connection } from '../../src/entities/Connection'

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

    afterAll(async () => { 
      testContext.tearDown
    })


    it('should create holder', async () => {
      await agent.initDB();
      let holder = await agent.createHolder({name: 'Firm24'})
      expect(holder.name).toEqual('Firm24')
    })

    it('should add connection', async () => {
      let connection = new Connection();
      let holder = await agent.createHolder({name: 'Mehmet'})
      connection.type='OPENID'
      connection.holders=[holder]
      connection.config='config'
      connection.details='details'
      connection = await agent.addConnection({
        type: 'OPENID',
        config: 'config',
        details: 'details',
        holderId: holder.id
    })
      expect(connection.holders[0].id).toEqual(holder.id)
      expect(connection.type).toEqual('OPENID')
    })
  })
}
