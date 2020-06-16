import {
    Entity,
    Column,
    PrimaryGeneratedColumn
  } from 'typeorm';
  
  /**
   * @desc 用户模型
   */
  @Entity()
  export class User {
  
    @PrimaryGeneratedColumn({
      type: 'int'
    })
    public id: number;
  
    @Column({
      type: 'varchar',
      unique: true,
      length: 32
    })
    public rtx: string;
  
    @Column({
      type: 'varchar',
      length: 32
    })
    public name: string;
  
    @Column({
      type: 'int',
      default: 0
    })
    public role: number;
  }
  