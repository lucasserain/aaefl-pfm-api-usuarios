import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriaTabelaDeVideosERelacionaComAluno1614901707775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBPFM03_VIDEOS',
        columns: [
          {
            name: 'cod_video',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'url_video',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('TBPFM03_VIDEOS');
  }

}
