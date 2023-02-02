import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Trucks } from '../../trucks/entities/truck.entity'

@Entity('drivers')
export class Driver {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  priceForKm!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToOne(() => Trucks, truck => truck.driver, {
    cascade: ['insert', 'update']
  })
  truck!: Trucks

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
