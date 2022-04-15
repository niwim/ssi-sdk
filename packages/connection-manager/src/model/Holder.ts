import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
  } from 'typeorm';
  
  @Entity()
  export class Holder extends BaseEntity {
    @PrimaryGeneratedColumn()
      id!: number;
  
    @Column('text', { nullable: false })
      name!: string;
  
  }
