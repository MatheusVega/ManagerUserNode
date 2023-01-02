import firebase from 'firebase';
import firebaseDatabase from '@shared/infra/firebase';

import { uuid } from 'uuidv4';
import IUserDTO from '@modules/user/dtos/IUserDTO';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/user/dtos/IUpdateUserDTO';

import IUserRepository from '@modules/user/repositories/IUserRepository';

class UserRepository implements IUserRepository {
    private database: firebase.database.Database;

    private url: string;

    constructor() {
        this.database = firebaseDatabase;
        this.url = 'user/';
    }

    public async create({
        nome,
        cpf,
        bairro,
        cep,
        cidade,
        complemento,
        rua
    }: ICreateUserDTO): Promise<IUserDTO> {

        const id = uuid();
        const data = {
            id,
            nome,
            cpf,
            bairro,
            cep,
            cidade,
            complemento,
            rua,
        };

        await this.database.ref(this.url + id).set(data);

        return Object.assign(data, { id });
    }

    public async findById(id: string): Promise<IUserDTO | null> {
        const userSnapshot = await this.database
            .ref(this.url + id)
            .once('value');

        const userData = userSnapshot.val();

        const user = userData
            ? Object.assign(userData, { id })
            : null;

        return user;
    }

    public async findAll(): Promise<IUserDTO[]> {
        const userSnapshot = await this.database
            .ref(this.url)
            .once('value');

        const userData = userSnapshot.val();

        const usersIds = Object.keys(userData);

        const users = usersIds.map(id => {
            return {
                id,
                ...userData[id],
            };
        });

        return users;
    }

    public async update(
        user: IUpdateUserDTO,
    ): Promise<IUserDTO> {
        const { id } = user;

        await this.database.ref(this.url + id).update(user);

        return Object.assign(user, { id }) as IUserDTO;
    }

    public async delete(id: string): Promise<void> {
        await this.database.ref(this.url + id).remove();
    }

}

export default UserRepository;