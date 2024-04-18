import { Error as DomainError } from '@/domain/validation/error'

export class DomainException extends Error {
  private errors: DomainError[]

  private constructor(message: string, errors: DomainError[]) {
    super(message)
    this.errors = errors
  }

  public static with(arg: DomainError | DomainError[]): DomainException {
    if ('length' in arg) {
      return new DomainException(
        arg.map((error) => error.message).join(','),
        arg
      )
    }

    return new DomainException(arg.message, [arg])
  }

  public getErrors(): DomainError[] {
    return this.errors
  }
}
