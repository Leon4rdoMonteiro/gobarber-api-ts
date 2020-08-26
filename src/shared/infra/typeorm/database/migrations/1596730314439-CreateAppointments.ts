import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1596730314439
    implements MigrationInterface {
    private table = new Table({
        name: 'appointments',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },
            {
                name: 'provider',
                type: 'varchar',
            },
            {
                name: 'date',
                type: 'timestamp with time zone',
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
