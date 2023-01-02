import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import IUserDTO from '@modules/user/dtos/IUserDTO';
import IUpdateUserDTO from '@modules/user/dtos/IUpdateUserDTO';

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async execute(data: IUpdateUserDTO): Promise<IUserDTO> {
        let update_user: IUpdateUserDTO = {
            id: data.id,
            nome: data.nome,
            cpf: data.cpf,
            bairro: data.bairro,
            cep: data.cep,
            cidade: data.cidade,
            complemento: data.complemento,
            rua: data.rua
        };

        const user = await this.userRepository.update(update_user,)

        return user;
    }
}

export default UpdateUserUseCase;
