import { Router } from 'express';

import userRouter from '@modules/user/infra/http/routes/UserRoutes';

const routes = Router();

routes.use('/user', userRouter);

export default routes;
