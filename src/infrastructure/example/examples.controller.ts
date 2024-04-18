import { Controller, Post, Body, Inject } from '@nestjs/common'
import { CreateExampleRequest } from '@/infrastructure/example/models/create-example-request'
import { CreateExampleUseCase } from '@/application/example/create/create-example-usecase'
import { CreateExampleCommand } from '@/application/example/create/create-example-command'
import { NotificationHandler } from '@/domain/validation/handler/notification'
import { UsecaseTokenProvider } from '@/infrastructure/providers/token-provider'
import { ExampleAPIPresenter } from '@/infrastructure/example/presenters/example-api-presenter'

@Controller('examples')
export class ExamplesController {
  constructor(
    @Inject(UsecaseTokenProvider.CreateExampleUseCase)
    private readonly examplesService: CreateExampleUseCase
  ) {}

  @Post()
  async create(@Body() createExampleDto: CreateExampleRequest) {
    const command = CreateExampleCommand.with(createExampleDto.name)
    const output = await this.examplesService.execute(command)

    return output instanceof NotificationHandler
      ? { errors: output.getErrors }
      : ExampleAPIPresenter.present(output)
  }
}
