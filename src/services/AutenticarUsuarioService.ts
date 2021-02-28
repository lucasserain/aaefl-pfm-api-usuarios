import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Usuario from '../models/Usuarios';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

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
      throw new AppError('Combinação de e-mail/senha inválida.', 401);
    }

    const passwoardMatched = await compare(password, usuario.password);

    if (!passwoardMatched) {
      throw new AppError('Combinação de e-mail/senha inválida.', 401);
    }
    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: usuario.cod_usua,
      expiresIn,
    });

    return { usuario, token };
  }
}

export default AutenticarUsuarioService;
