import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CriarUsuarioService from '../services/CriarUsuarioService';
import AtualizaAvatarUsuarioService from '../services/AtualizaAvatarUsuarioService';
import garantirAutenticacao from '../middlewares/garantirAutenticacao';

const usuariosRouter = Router();
const upload = multer(uploadConfig);

usuariosRouter.post('/', async (request, response) => {
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
});

usuariosRouter.patch(
  '/avatar',
  garantirAutenticacao,
  upload.single('avatar'),
  async (request, response) => {
    const atualizarAvatarUsuario = new AtualizaAvatarUsuarioService();
    const usuario = await atualizarAvatarUsuario.execute({
      cod_usuario: request.usuario.id,
      avatarFilename: request.file.filename,
    });
    // @ts-expect-error Paliativo para remover password na resposta
    delete usuario.password;
    return response.json(usuario);
  },
);

export default usuariosRouter;
