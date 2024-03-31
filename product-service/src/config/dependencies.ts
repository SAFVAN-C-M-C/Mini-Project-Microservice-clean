import { IDependencies } from "../application/interfaces/IDependencies";
import * as useCase from '../application/useCases'
import * as repositories from '../infrastructure/database/repositories'
export const dependencies:IDependencies={
    useCase,
    repositories
}