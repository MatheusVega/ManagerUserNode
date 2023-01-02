import { container } from 'tsyringe';

import FirebaseUserRepository from '@modules/user/infra/firebase/repositories/UserRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
    'UserRepository',
    FirebaseUserRepository,
);
