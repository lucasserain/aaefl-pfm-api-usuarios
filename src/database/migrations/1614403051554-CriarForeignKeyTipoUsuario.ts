import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CriarForeignKeyTipoUsuario1614403051554
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'TBPFM01_USUA',
      new TableForeignKey({
        name: 'FKPFM01_TIPO_USUA',
        columnNames: ['cod_tipo_usua'],
        referencedColumnNames: ['cod_tipo_usua'],
        referencedTableName: 'TBPFM02_TIPO_USUA',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('TBPFM01_USUARIOS', 'FKPFM01_TIPO_USUA');
  }
}
