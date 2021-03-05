import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToMany, JoinColumn} from 'typeorm';

import Usuarios from './Usuarios';
import Videos from './Videos';

@Entity('TBPFM04_RELA_USUA_VIDEO')
class UsuarioVideo {
  @PrimaryColumn()
  @ManyToMany(() => Usuarios)
  @JoinColumn({ name: 'cod_tipo_usua' })
  cod_usua: string;

  @PrimaryColumn()
  @ManyToMany(() => Videos)
  @JoinColumn({ name: 'cod_video' })
  cod_video: string;
}

export default UsuarioVideo;
