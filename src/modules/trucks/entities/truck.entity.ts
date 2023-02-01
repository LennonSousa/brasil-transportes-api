import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import { drivers1674953593478 } from "../../../infra/database/migrations/1674953593478-drivers"
import { Driver } from "../../drivers/entities/driver.entity"

@Entity("trucks")
export class Trucks {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    model!: string

    @Column()
    axle!: string

    @Column()
    sign!: string

    @Column()
    routes!: string

    @JoinColumn({ name: "drivers"})
    @ManyToOne(() => Driver)
  

    @Column()
    drivers!: string

    @Column()
    priceForKm!: number
}