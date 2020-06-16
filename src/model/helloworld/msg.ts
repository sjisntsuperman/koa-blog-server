import {
    Entity,
    Column,
    PrimaryGeneratedColumn
  } from 'typeorm';

  @Entity()
  export class HelloWorld{
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    public id: number;

    @Column({
      type: 'varchar',
      length: 32
    })
    public rtx: string;

    @Column({
        type: 'varchar',
        length: 32
    })
    public msg: string;
  }