import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("routes")
export class routes{
    @PrimaryGeneratedColumn()
  id!: number

    @Column()
    mileage!: string

    @Column()
    start!: String

    @Column()
    end!: number
}