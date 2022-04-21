import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Holder } from './Holder';

@Entity()
export class Connection extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text', { nullable: false })
  type!: string;

  @Column('datetime', { nullable: false })
  createdDate!: Date;

  @Column('text', { nullable: false })
  config!: string;

  @Column('text')
  details!: string;

  @ManyToMany((type) => Holder)
  @JoinTable()
  holders!: Holder[];
}
