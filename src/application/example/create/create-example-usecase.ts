import { UseCase } from '@/application/usecase'
import { NotificationHandler } from '@/domain/validation/handler/notification'
import { CreateExampleCommand } from '@/application/example/create/create-example-command'
import { CreateExampleOutput } from '@/application/example/create/create-example-output'

export abstract class CreateExampleUseCase extends UseCase<
  CreateExampleCommand,
  NotificationHandler | CreateExampleOutput
> {}
