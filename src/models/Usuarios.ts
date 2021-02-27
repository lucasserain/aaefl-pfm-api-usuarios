import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import TipoUsuarios from './TipoUsuarios';

@Entity('TBPFM01_USUARIOS')
class Usuarios {
  @PrimaryGeneratedColumn('uuid')
  codUsua: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  codTipoUsua: number;

  @OneToOne(() => TipoUsuarios)
  @JoinColumn({ name: 'codTipoUsua' })
  tipoUsuario: TipoUsuarios;

  @CreateDateColumn()
  dtCria: Date;

  @CreateDateColumn()
  dtAlte: Date;
}

export default Usuarios;
