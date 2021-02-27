import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import usuariosRouter from './usuarios.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/usuarios', usuariosRouter);

export default routes;
