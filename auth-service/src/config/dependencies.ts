import * as repositories from '../infrastructure/database/repositories'
import * as useCase from "../application/useCases"
import { IDependencies } from '../application/interfaces/IDependencies'

export const dependencies:IDependencies={
    useCase,
    repositories
}