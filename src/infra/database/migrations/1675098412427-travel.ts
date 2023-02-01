import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class travel1675098412427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"travel",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                },
            
                {
                    name: "status",
                    type: "varchar",
                },
                {
                    name: "totalReceived:",
                    type: "varchar",
                },
                {
                    name: "costs",
                    type: "varchar",
                },
            ],
            foreignKeys: [
                {
                    name: 'trucksOnTravel',
                    columnNames: ['trucksId'],
                    referencedTableName: 'trucks',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'drivesOnTravel',
                    columnNames: ['drivesId'],
                    referencedTableName: 'drives',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'routesOnTravel',
                    columnNames: ['routesId'],
                    referencedTableName: 'routes',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("travel")

    }

}
