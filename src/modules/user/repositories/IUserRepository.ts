import IUserDTO from "../dtos/IUserDTO";
import ICreateUserDto from "../dtos/ICreateUserDTO";
import IUpdateUserDTO from "../dtos/IUpdateUserDTO";

export default interface IUserRepository {
    create(data: ICreateUserDto): Promise<IUserDTO>;
    findById(id: string): Promise<IUserDTO | null>;
    findAll(): Promise<IUserDTO[]>;
    update(user: IUpdateUserDTO): Promise<IUserDTO>;
    delete(id: string): Promise<void>;
}