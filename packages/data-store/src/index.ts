import { BaseConfigEntity } from './entities/connection/BaseConfigEntity'
import { ConnectionEntity } from './entities/connection/ConnectionEntity'
import { ConnectionIdentifierEntity } from './entities/connection/ConnectionIdentifierEntity'
import { DidAuthConfigEntity } from './entities/connection/DidAuthConfigEntity'
import { MetadataItemEntity } from './entities/connection/MetadataItemEntity'
import { OpenIdConfigEntity } from './entities/connection/OpenIdConfigEntity'
import { PartyEntity } from './entities/connection/PartyEntity'

export { ConnectionStore } from './connection/ConnectionStore'
export const Entities = [
  BaseConfigEntity,
  ConnectionEntity,
  ConnectionIdentifierEntity,
  DidAuthConfigEntity,
  MetadataItemEntity,
  OpenIdConfigEntity,
  PartyEntity,
]
