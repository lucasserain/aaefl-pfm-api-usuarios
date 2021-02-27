import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Usuario from '../models/Usuarios';

interface Request {
  email: string;
  password: string;
}

interface Response {
  usuario: Usuario;
}

class AutenticarUsuarioService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new Error('Combinação de e-mail/senha inválida.');
    }

    const passwoardMatched = await compare(password, usuario.password);

    if (!passwoardMatched) {
      throw new Error('Combinação de e-mail/senha inválida.');
    }

    return { usuario };
  }
}

export default AutenticarUsuarioService;
