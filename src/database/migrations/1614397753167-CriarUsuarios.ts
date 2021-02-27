import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarUsuarios1614397753167 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBPFM01_USUARIOS',
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
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
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
