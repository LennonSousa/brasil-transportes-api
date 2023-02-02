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

@Entity('routes')
export class Route {
  @PrimaryColumn()
  id!: string

  @Column()
  mileage!: string

  @Column()
  start!: String

  @Column()
  end!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToOne(() => Trucks, truck => truck.route, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'routeId' })
  truck!: Trucks

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
