import { Validator } from '@/domain/validation/validator'
import { Example } from '@/domain/example/example'
import { ValidationHandler } from '@/domain/validation/validation-handler'

export class ExampleValidator extends Validator {
  private example: Example

  public constructor(aExample: Example, validationHandler: ValidationHandler) {
    super(validationHandler)
    this.example = aExample
  }

  public validate(): void {
    this.checkNameConstraints()
  }

  private checkNameConstraints(): void {
    const name = this.example.getName()

    if (!name) {
      this.validationHandler().append(
        new Error("'name' should not be null or undefined")
      )
      return
    }
  }
}
