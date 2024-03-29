import { UserEntity } from "../../domian/Entities";
import { IDependencies } from "../interfaces/IDependencies";
import { LoginUser } from "../interfaces/ILoginUser";

export const loginUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { login },
  } = dependencies;
  if (!login) {
    throw new Error("Dependecy required for login");
  }

  return {
    execute: async (loginCredentials: LoginUser) => {
      
      try {
        return await login(loginCredentials);
      } catch (error: any) {
        console.log(error?.message);
        throw new Error(error?.message)
      }
    },
  };
};
