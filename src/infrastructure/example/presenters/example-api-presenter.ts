import { CreateExampleOutput } from '@/application/example/create/create-example-output'
import { ExampleResponse } from '@/infrastructure/example/models/example-response'

export class ExampleAPIPresenter {
  public static present(output: CreateExampleOutput): ExampleResponse {
    return { id: output.id.getValue(), name: output.name }
  }
}
