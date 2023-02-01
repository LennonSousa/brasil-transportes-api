import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("drivers")
export class Driver {
    @PrimaryGeneratedColumn()
  id!: number

    @Column()
  name!: string

    @Column()
  priceForKm!: number
}
