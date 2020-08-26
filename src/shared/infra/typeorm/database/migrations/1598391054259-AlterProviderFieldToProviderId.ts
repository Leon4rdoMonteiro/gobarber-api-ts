import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1598391054259
    implements MigrationInterface {
    private oldTableColumn = new TableColumn({
        name: 'provider',
        type: 'varchar',
    });

    private newTableColumn = new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
    });

    private tableForeignKey = new TableForeignKey({
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider');

        await queryRunner.addColumn('appointments', this.newTableColumn);

        await queryRunner.createForeignKey(
            'appointments',
            this.tableForeignKey,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointments', this.tableForeignKey);

        await queryRunner.dropColumn('appointments', this.newTableColumn);

        await queryRunner.addColumn('appointments', this.oldTableColumn);
    }
}
