import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany
} from 'typeorm';
import { Connection } from './Connection';

@Entity()
export class Holder extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text', { nullable: false })
  name!: string;

  @ManyToMany((type) => Connection)
  connections!: Connection[];
}
