import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class drivers1674953593478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "drivers",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "priceForKm",
                    type: 'decimal',
                    scale: 2,
                    precision: 10,
                    default: 0.00,
                },

            ]
        
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.dropTable("drivers")
    }

}
