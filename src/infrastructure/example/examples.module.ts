import { Module, Provider } from '@nestjs/common'
import { ExamplesController } from '@/infrastructure/example/examples.controller'
import { UsecaseTokenProvider } from '@/infrastructure/providers/token-provider'
import { DefaultCreateExampleUseCase } from '@/application/example/create/default-create-example-usecase'

const CREATE_EXAMPLE_USECASE: Provider = {
  provide: UsecaseTokenProvider.CreateExampleUseCase,
  useClass: DefaultCreateExampleUseCase
}

@Module({
  controllers: [ExamplesController],
  providers: [CREATE_EXAMPLE_USECASE]
})
export class ExamplesModule {}
