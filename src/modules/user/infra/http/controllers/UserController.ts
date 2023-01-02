import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/user/useCases/CreateUserUseCase'
import DeleteUserService from '@modules/user/useCases/DeleteUserUseCase'
import ListUserService from '@modules/user/useCases/ListUserUseCase'
import ShowUserService from '@modules/user/useCases/ShowUserUseCase'
import UpdateUserService from '@modules/user/useCases/UpdateUserUseCase'


class UserController {
    public async index(request: Request, response: Response): Promise<Response> {
        // #swagger.tags = ['User']
        const listUser = container.resolve(ListUserService);

        const user = await listUser.execute();

        return response.status(200).json(user);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        // #swagger.tags = ['User']
        const { id } = request.params;

        const showUser = container.resolve(ShowUserService);

        const user = await showUser.execute(id);

        return response.status(200).json(user);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        // #swagger.tags = ['User']
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Dados do usuario que deseja cadastrar.',
                schema: {
                    $nome: 'string',
                    $cpf: 'string',
                    $bairro: 'string',
                    $cep: 'string',
                    $cidade: 'string',
                    $complemento: 'string',
                    $rua: 'string'
                }
        } */
        const { nome, cpf, bairro, cep, cidade, complemento, rua } = request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            nome,
            cpf,
            bairro,
            cep,
            cidade,
            complemento,
            rua
        });

        return response.status(200).json(user);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        // #swagger.tags = ['User']
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Dados do usuario que deseja cadastrar.',
                schema: {
                    $nome: 'string',
                    $cpf: 'string',
                    $bairro: 'string',
                    $cep: 'string',
                    $cidade: 'string',
                    $complemento: 'string',
                    $rua: 'string'
                }
        } */
        const { id } = request.params;
        const { nome, cpf, bairro, cep, cidade, complemento, rua } = request.body;

        const updateUser = container.resolve(UpdateUserService);

        const user = await updateUser.execute({
            id,
            nome,
            cpf,
            bairro,
            cep,
            cidade,
            complemento,
            rua
        });

        return response.status(200).json(user);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        // #swagger.tags = ['User']
        const { id } = request.params;

        const deleteUser = container.resolve(DeleteUserService);

        await deleteUser.execute(id);

        return response.status(200).json({ message: 'deleted' });
    }
}

export default UserController;

