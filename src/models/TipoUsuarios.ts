import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbpfm02_tipo_usua')
class TipoUsuarios {
  @PrimaryGeneratedColumn()
  cod_tipo_usua: number;

  @Column()
  desc_tipo_usua: string;
}

export default TipoUsuarios;
