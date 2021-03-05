import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarTabelaRelacionamentoUsuarioVideo1614902298829 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBPFM04_RELA_USUA_VIDEO',
        columns: [
          {
            name: 'cod_usua',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cod_video',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('TBPFM04_RELA_USUA_VIDEO');
  }

}
