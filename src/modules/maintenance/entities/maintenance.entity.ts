import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from 'typeorm'
import { Trucks } from '../../trucks/entities/truck.entity'
import { v4 as uuid } from 'uuid'

@Entity('maintenances')
export class Maintenance {
  @PrimaryColumn()
  id!: string

  @Column()
  maintenanceType!: String

  @Column()
  maintenancePrice!: number

  @Column()
  date!: Date

  @Column()
  truckId!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(() => Trucks, trucks => trucks.maintenances)
  @JoinColumn({ name: 'truckId' })
  truck!: Trucks

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
