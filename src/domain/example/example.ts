import { AggregateRoot } from '@/domain/aggregate-root'
import { ExampleID } from '@/domain/example/example-id'
import { ValidationHandler } from '@/domain/validation/validation-handler'
import { ExampleValidator } from '@/domain/example/example-validator'

export class Example extends AggregateRoot<ExampleID> {
  private name: string

  private constructor(anId: ExampleID, name: string) {
    super(anId)
    this.name = name
  }

  public static newExample(name: string) {
    const id = ExampleID.unique()
    return new Example(id, name)
  }

  public validate(validationHandler: ValidationHandler): void {
    new ExampleValidator(this, validationHandler).validate()
  }

  public getName(): string {
    return this.name
  }
}
