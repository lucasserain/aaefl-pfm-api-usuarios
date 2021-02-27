import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import Usuario from '../models/Usuarios';

interface Request {
  email: string;
  password: string;
}

interface Response {
  usuario: Usuario;
  token: string;
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
    const token = sign({}, 'e6b7da2fd8edaec57627327dc22b70e1', {
      subject: usuario.cod_usua,
      expiresIn: '1d',
    });

    return { usuario, token };
  }
}

export default AutenticarUsuarioService;
