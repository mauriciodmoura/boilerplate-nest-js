import { Example } from '@/domain/example/example'
import { ExampleID } from '@/domain/example/example-id'

export class CreateExampleOutput {
  id: ExampleID
  name: string

  private constructor(id: ExampleID, name: string) {
    this.id = id
    this.name = name
  }

  public static from(example: Example) {
    return new CreateExampleOutput(example.getId(), example.getName())
  }
}
