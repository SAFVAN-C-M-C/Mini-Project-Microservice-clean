import {
  IFindUserByEmailUsecase,
  ILoginUseCase,
  ISignUpUseCase,
} from "../../domian/useCaseInterfaces";
import { IDependencies } from "./IDependencies";

export interface IUserCases {
  signUpUseCase: (dependencies: IDependencies) => ISignUpUseCase;
  loginUseCase: (dependencies: IDependencies) => ILoginUseCase;
  findUserByEmailUseCase: (dependencies: IDependencies) => IFindUserByEmailUsecase;
}
