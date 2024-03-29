import { UserEntity } from "../Entities";

export interface ISignUpUseCase {
  execute(user: UserEntity): Promise<UserEntity | null>;
}
