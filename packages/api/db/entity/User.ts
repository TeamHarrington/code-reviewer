import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: true })
  firstName?: string

  @Column({ nullable: true })
  lastName?: String

  @Column({ nullable: true })
  email?: String

  @Column()
  utorID!: String

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastLogin!: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    update: false
  })
  createdAt!: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'NOW()'
  })
  updatedAt!: Date

  @Column({
    type: 'bool',
    default: true
  })
  isActive!: boolean
}
