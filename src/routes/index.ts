import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import usuariosRouter from './usuarios.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/usuarios', usuariosRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
