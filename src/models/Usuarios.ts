import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  dtCria: Date;

  @CreateDateColumn()
  dtAlte: Date;
}

export default Usuarios;
