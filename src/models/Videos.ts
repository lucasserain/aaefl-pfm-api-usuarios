import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('TBPFM03_VIDEOS')
class Videos {
  @PrimaryColumn()
  cod_video: number;

  @Column()
  url_video: string;
}

export default Videos;
