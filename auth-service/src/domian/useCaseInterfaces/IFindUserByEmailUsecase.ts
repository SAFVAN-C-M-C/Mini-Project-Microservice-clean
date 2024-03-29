import { UserEntity } from "../Entities";

export interface IFindUserByEmailUsecase {
  execute(email: string): Promise<UserEntity | null>;
}
