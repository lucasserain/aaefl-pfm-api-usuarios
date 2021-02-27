import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TBPFM02_TIPO_USUA')
class TipoUsuarios {
  @PrimaryGeneratedColumn()
  cod_tipo_usua: number;

  @Column()
  desc_tipo_usua: string;
}

export default TipoUsuarios;
