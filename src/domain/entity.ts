import { Identifier } from '@/domain/identifier'
import { Objects } from '@/domain/utils/objects'
import { ValidationHandler } from '@/domain/validation/validation-handler'

export abstract class Entity<ID extends Identifier> {
  protected id: ID

  protected constructor(id: ID) {
    this.id = Objects.requireNonNull(id, "'id' should not be null")
  }

  public abstract validate(validationHandler: ValidationHandler): void

  public getId(): ID {
    return this.id
  }
}
