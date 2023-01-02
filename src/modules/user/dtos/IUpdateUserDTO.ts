import { PartialRequireOne } from "@shared/helpers/types/PartialRequireOne";
import IUserDTO from "./IUserDTO";

type IUpdateUserDTO = PartialRequireOne<IUserDTO, 'id'>;

export default IUpdateUserDTO;
