import { Router } from 'express';
import AutenticarUsuarioService from '../services/AutenticarUsuarioService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const autenticarUsuario = new AutenticarUsuarioService();

    const { usuario } = await autenticarUsuario.execute({
      email,
      password,
    });

    // @ts-expect-error Paliativo para remover password na resposta
    delete usuario.password;
    return response.json({ usuario });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
