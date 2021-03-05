import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCampoAvatarUsuarios1614472369256
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'TBPFM01_USUA',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('TBPFM01_USUA', 'avatar');
  }
}
