import { LoginUser } from "../../application/interfaces/ILoginUser";
import { UserEntity } from "../Entities";

export interface ILoginUseCase {
  execute(user: LoginUser): Promise<UserEntity | null>;
}
