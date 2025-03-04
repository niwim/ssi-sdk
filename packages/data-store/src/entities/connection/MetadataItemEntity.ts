import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm'
import { ConnectionEntity } from './ConnectionEntity'
import { IBasicConnectionMetadataItem } from '@sphereon/ssi-sdk-core'

@Entity('ConnectionMetadata')
export class MetadataItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column('text', { nullable: false })
  label!: string

  @Column('text', { nullable: false })
  value!: string

  @ManyToOne(() => ConnectionEntity, (connection) => connection.metadata, {
    onDelete: 'CASCADE',
  })
  connection!: ConnectionEntity
}

export const metadataItemEntityFrom = (item: IBasicConnectionMetadataItem): MetadataItemEntity => {
  const metadataItem = new MetadataItemEntity()
  metadataItem.label = item.label
  metadataItem.value = item.value

  return metadataItem
}
