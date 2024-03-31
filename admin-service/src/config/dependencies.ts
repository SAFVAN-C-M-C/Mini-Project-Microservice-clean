import { IDependencies } from "../application/interfaces/IDependencies";
import * as useCases from '../application/usecases'
import * as repositories from '../infrastructure/database/repositories'
export const dependencies:IDependencies={
    useCases,
    repositories,
}