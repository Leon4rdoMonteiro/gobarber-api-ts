import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAvatarFieldToUsers1598409475397
    implements MigrationInterface {
    private newTableColumn = new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', this.newTableColumn);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', this.newTableColumn);
    }
}
