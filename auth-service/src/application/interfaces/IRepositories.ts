import { UserEntity } from "../../domian/Entities";
import { LoginUser } from "./ILoginUser";

export interface IRepositories {
  signUp: (data: UserEntity) => Promise<UserEntity | null>;
  login: (data: LoginUser) => Promise<UserEntity | null>;
  findByEmail: (email: string) => Promise<UserEntity | null>;
}
