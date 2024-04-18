import {
  Validation,
  ValidationHandler
} from '@/domain/validation/validation-handler'
import { Error as DomainError } from '@/domain/validation/error'

export class NotificationHandler extends ValidationHandler {
  private errors: DomainError[]

  private constructor(errors: DomainError[]) {
    super()
    this.errors = errors
  }

  public static create(arg?: DomainError | Error): NotificationHandler {
    return new NotificationHandler(!arg ? [] : [{ message: arg.message }])
  }

  append(arg: DomainError | ValidationHandler): ValidationHandler {
    if ('validate' in arg) {
      this.errors.push(...arg.getErrors())
    } else {
      this.errors.push(arg)
    }
    return this
  }

  validate(aValidation: Validation): ValidationHandler {
    try {
      aValidation.validate()
    } catch (error) {
      this.errors.push({ message: (error as Error).message })
    }
    return this
  }

  getErrors(): DomainError[] {
    return this.errors
  }
}
