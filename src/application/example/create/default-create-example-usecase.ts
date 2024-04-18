import { NotificationHandler } from '@/domain/validation/handler/notification'
import { CreateExampleCommand } from '@/application/example/create/create-example-command'
import { CreateExampleOutput } from '@/application/example/create/create-example-output'
import { CreateExampleUseCase } from '@/application/example/create/create-example-usecase'
import { Example } from '@/domain/example/example'

export class DefaultCreateExampleUseCase extends CreateExampleUseCase {
  public execute(
    aCommand: CreateExampleCommand
  ): Promise<NotificationHandler | CreateExampleOutput> {
    const notification = NotificationHandler.create()

    const example = Example.newExample(aCommand.name)

    example.validate(notification)

    return Promise.resolve(
      notification.hasErrors() ? notification : this.create(example)
    )
  }

  private create(example: Example): NotificationHandler | CreateExampleOutput {
    try {
      return CreateExampleOutput.from(example) // Aqui ficaria a chamada para um Gateway que seria a abstração para comunicação com o Repository
    } catch (error) {
      return NotificationHandler.create({ message: (error as Error).message }) // Aqui ficaria o tratamento / transposição de qualquer erro para as exeções das camadas mais internas
    }
  }
}
