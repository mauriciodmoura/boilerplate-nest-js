export const env = {
  serviceName: process.env.SERVICE_NAME ?? 'Boilerplate Nast Js',
  version: process.env.RELEASE_VERSION ?? '1.0.0',
  environment: process.env.NODE_ENV ?? 'development',
  appPort: process.env.PORT ?? 3020
}
