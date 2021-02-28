import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Usuario from '../models/Usuarios';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  cod_usuario: string;
  avatarFilename: string;
}
class AtualizaAvatarUsuarioService {
  public async execute({
    cod_usuario,
    avatarFilename,
  }: Request): Promise<Usuario> {
    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOne(cod_usuario);

    if (!usuario) {
      throw new AppError(
        'Somente usuários autenticados podem alterar sua imagem de perfil',
        401,
      );
    }
    if (usuario.avatar) {
      const usuarioAvatarDiretorio = path.join(
        uploadConfig.directory,
        usuario.avatar,
      );
      const arquivoAvatarUsuarioExists = await fs.promises.stat(
        usuarioAvatarDiretorio,
      );

      if (arquivoAvatarUsuarioExists) {
        await fs.promises.unlink(usuarioAvatarDiretorio);
      }
    }
    usuario.avatar = avatarFilename;

    await usuariosRepository.save(usuario);
    return usuario;
  }
}
export default AtualizaAvatarUsuarioService;
