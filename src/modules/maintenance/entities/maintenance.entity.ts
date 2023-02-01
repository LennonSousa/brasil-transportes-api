import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Driver } from "../../drivers/entities/driver.entity"
import { routes } from "../../routes/entities/routes.entity"
import { Trucks } from "../../trucks/entities/truck.entity"

@Entity("maintenance")
export class Maintenance {
    @PrimaryGeneratedColumn()
  id!: number

    

    @Column()
    maintenanceType!: String

    @Column()
    maintenancePrice!: number

    @JoinColumn({ name: "trucker"})
    @ManyToOne(() => Trucks)

    @Column()
    trucks!: string
    
    @JoinColumn({ name: "drives"})
    @ManyToOne(() => Driver)

    @Column()
    drives!: string

    @JoinColumn({ name: "routes"})
    @ManyToOne(() => routes)

    @Column()
    routes!: string

    
    @Column()
    date!: Date
}