import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import IUserDTO from '@modules/user/dtos/IUserDTO';

@injectable()
class ShowUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(id: string): Promise<IUserDTO | null> {
        const user = await this.userRepository.findById(id);

        return user;
    }
}

export default ShowUserUseCase;
