import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CriarUsuarioService from '../services/CriarUsuarioService';

import garantirAutenticacao from '../middlewares/garantirAutenticacao';

const usuariosRouter = Router();
const upload = multer(uploadConfig);

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

usuariosRouter.patch(
  '/avatar',
  garantirAutenticacao,
  upload.single('avatar'),
  async (request, response) => {
    return response.json({ ok: 'jooj' });
  },
);

export default usuariosRouter;
