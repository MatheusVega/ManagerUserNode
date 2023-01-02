import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}

export default DeleteUserUseCase;
