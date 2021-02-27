import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TBPFM02_TIPO_USUA')
class TipoUsuarios {
  @PrimaryGeneratedColumn()
  codTipoUsua: number;

  @Column()
  descTipoUsua: string;
}

export default TipoUsuarios;
