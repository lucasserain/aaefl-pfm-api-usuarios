import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuarios';

interface Request {
  nome: string;
  email: string;
  cod_tipo_usua: number;
  password: string;
}
class CriarUsuarioService {
  public async execute({
    nome,
    email,
    cod_tipo_usua,
    password,
  }: Request): Promise<Usuario> {
    const usuariosRepository = getRepository(Usuario);

    const verificaExistenciaUsuario = await usuariosRepository.findOne({
      where: { email },
    });

    const hashedPassword = await hash(password, 8);

    if (verificaExistenciaUsuario) {
      throw new Error('Email já está cadastrado.');
    }
    const usuario = usuariosRepository.create({
      nome,
      email,
      cod_tipo_usua,
      password: hashedPassword,
    });
    await usuariosRepository.save(usuario);

    return usuario;
  }
}

export default CriarUsuarioService;
