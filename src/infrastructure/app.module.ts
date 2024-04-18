import { Module } from '@nestjs/common'
import { ExamplesModule } from './example/examples.module'

@Module({
  imports: [ExamplesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
