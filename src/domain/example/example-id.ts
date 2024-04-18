import { Identifier } from '@/domain/identifier'
import { Objects } from '@/domain/utils/objects'
import { randomUUID, UUID } from 'node:crypto'

export class ExampleID extends Identifier {
  private value: string

  private constructor(value: string) {
    super()
    this.value = Objects.requireNonNull(value, "'value' should not be null")
  }

  public static from(anId: string | UUID): ExampleID {
    return new ExampleID(anId.toLowerCase())
  }

  public static unique(): ExampleID {
    return ExampleID.from(randomUUID())
  }

  public getValue(): string {
    return this.value
  }
}
