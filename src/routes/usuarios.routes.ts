import { Router } from 'express';

import CriarUsuarioService from '../services/CriarUsuarioService';

const usuariosRouter = Router();

usuariosRouter.post('/', async (request, response) => {
  try {
    const { nome, email, cod_tipo_usua, password } = request.body;

    const criarUsuario = new CriarUsuarioService();

    const usuario = await criarUsuario.execute({
      nome,
      email,
      cod_tipo_usua,
      password,
    });

    // @ts-expect-error Paliativo para remover password na resposta
    delete usuario.password;
    return response.json(usuario);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usuariosRouter;
