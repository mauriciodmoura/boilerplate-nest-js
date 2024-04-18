import { Error } from '@/domain/validation/error'

export interface Validation {
  validate(): void
}

export abstract class ValidationHandler {
  abstract append(anError: Error): ValidationHandler
  abstract append(anHandler: ValidationHandler): ValidationHandler

  abstract validate(aValidation: Validation): ValidationHandler

  abstract getErrors(): Error[]

  hasErrors(): boolean {
    return (
      this.getErrors() !== null &&
      this.getErrors() !== undefined &&
      this.getErrors().length > 0
    )
  }

  firstError() {
    return this.hasErrors() ? this.getErrors()[0] : undefined
  }
}
