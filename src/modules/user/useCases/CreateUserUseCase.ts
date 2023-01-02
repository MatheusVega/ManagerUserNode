import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import IUserDTO from '@modules/user/dtos/IUserDTO';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(data: ICreateUserDTO): Promise<IUserDTO> {
        console.log("teste");
        const user = await this.userRepository.create(data)

        return user;
    }
}

export default CreateCompanyUseCase;
