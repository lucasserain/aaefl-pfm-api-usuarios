import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Table,
} from 'typeorm';

import TipoUsuarios from './TipoUsuarios';

@Entity('tbpfm01_usua')
class Usuarios {
  @PrimaryGeneratedColumn('uuid')
  cod_usua: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  cod_tipo_usua: number;

  @OneToOne(() => TipoUsuarios)
  @JoinColumn({ name: 'cod_tipo_usua' })
  tipoUsuario: TipoUsuarios;

  @CreateDateColumn()
  dt_cria: Date;

  @CreateDateColumn()
  dt_alte: Date;
}

export default Usuarios;
