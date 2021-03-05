import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CriarForeignKeyUsuarioVideo1614903247058 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'TBPFM04_RELA_USUA_VIDEO',
      new TableForeignKey({
        name: 'FKPFM02_USUA_VIDEO',
        columnNames: ['cod_usua'],
        referencedColumnNames: ['cod_usua'],
        referencedTableName: 'TBPFM01_USUA',
      }),
    );
    await queryRunner.createForeignKey(
      'TBPFM04_RELA_USUA_VIDEO',
      new TableForeignKey({
        name: 'FKPFM03_VIDEO_USUA',
        columnNames: ['cod_video'],
        referencedColumnNames: ['cod_video'],
        referencedTableName: 'TBPFM03_VIDEOS',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('TBPFM04_RELA_USUA_VIDEO', 'FKPFM02_USUA_VIDEO');
    await queryRunner.dropForeignKey('TBPFM04_RELA_USUA_VIDEO', 'FKPFM03_VIDEO_USUA');
  }

}
