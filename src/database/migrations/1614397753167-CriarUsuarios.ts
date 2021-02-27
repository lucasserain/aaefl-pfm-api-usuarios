import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CriarUsuarios1614397753167 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBPFM01_USUA',
        columns: [
          {
            name: 'cod_usua',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'cod_tipo_usua',
            type: 'integer',
          },
          {
            name: 'dt_cria',
            type: 'timestamp',
            default: 'now ()',
          },
          {
            name: 'dt_alte',
            type: 'timestamp',
            default: 'now ()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('TBPFM01_USUARIOS');
  }
}
