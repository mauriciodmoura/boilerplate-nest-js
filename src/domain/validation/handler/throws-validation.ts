import {
  Validation,
  ValidationHandler
} from '@/domain/validation/validation-handler'
import { Error as DomainError } from '@/domain/validation/error'
import { DomainException } from '@/domain/exceptions/domain-exception'

export class ThrowsValidationHandler extends ValidationHandler {
  append(arg: DomainError | ValidationHandler): ValidationHandler {
    throw DomainException.with('validate' in arg ? arg.getErrors() : arg)
  }

  validate(aValidation: Validation): ValidationHandler {
    try {
      aValidation.validate()
    } catch (error) {
      throw DomainException.with({ message: (error as Error).message })
    }

    return this
  }

  getErrors(): DomainError[] {
    return []
  }
}
