import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarTiposUsuarios1614399498577
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBPFM02_TIPO_USUA',
        columns: [
          {
            name: 'cod_tipo_usua',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'desc_tipo_usua',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('TBPFM02_TIPO_USUA');
  }
}
