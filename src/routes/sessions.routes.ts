import { Router } from 'express';
import AutenticarUsuarioService from '../services/AutenticarUsuarioService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autenticarUsuario = new AutenticarUsuarioService();

  const { usuario, token } = await autenticarUsuario.execute({
    email,
    password,
  });

  // @ts-expect-error Paliativo para remover password na resposta
  delete usuario.password;
  return response.json({ usuario, token });
});

export default sessionsRouter;
