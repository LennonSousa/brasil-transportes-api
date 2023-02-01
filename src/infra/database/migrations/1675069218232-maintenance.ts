import { MigrationInterface, QueryRunner , Table} from "typeorm"

export class maintenance1675069218232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(new Table({
            name: "maintenance",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
                {
                name: "trucks",
                type: "varchar",
                },
                {
                    name: "maintenanceType",
                    type:"varchar",
                },
                {
                    name: "maintenancePrice",
                    type: 'decimal',
                    scale: 2,
                    precision: 10,
                    default: 0.00,
                },
                {
                    name: "date",
                    type: "date",
                },
        

            ],
            foreignKeys: [
                {
                    name: 'TruckerOnMaintenance',
                    columnNames: ['truckerId'],
                    referencedTableName: 'trucks',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],
        },
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("maintenance")
    }

}
