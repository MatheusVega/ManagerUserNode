import { Router } from 'express';

import UserController from '@modules/user/infra/http/controllers/UserController';

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);

userRouter.post('/', userController.create);
userRouter.post('/:id', userController.update);

userRouter.delete('/:id', userController.delete);


export default userRouter;
