import IUserDTO from "./IUserDTO";

type ICreateUserDto = Omit<IUserDTO, 'id'>;

export default ICreateUserDto;
