import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import IUserDTO from '@modules/user/dtos/IUserDTO';

@injectable()
class ListUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(): Promise<IUserDTO[]> {
        const user = await this.userRepository.findAll();

        return user;
    }
}

export default ListUserService;
