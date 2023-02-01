import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("maintenance")
export class Driver {
    @PrimaryGeneratedColumn()
  id!: number

    @Column()
    trucks!: string

    @Column()
    drives!: String

    @Column()
    routes!: string

    @Column()
    status!: string
    
    @Column()
    totalReceived!:number
    
    @Column()
    costs!: number

}