import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { env } from './configuration/env'
// import { ApplicationFilter } from './filters'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.getHttpAdapter().getInstance().disable('x-powered-by')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true }
    })
  )

  //   app.useGlobalFilters(new ApplicationFilter())

  const logger = new Logger('NestApplication')
  const [port, host] = [env.appPort, '0.0.0.0']
  await app.listen(port, host, () =>
    logger.verbose(`Listening on ${host}:${port}`)
  )

  if (env.environment === 'production') {
    await import('newrelic')
  }
}
bootstrap()
