'use strict'
exports.config = {
  app_name: process.env.NEW_RELIC_APP_NAME ?? 'boilerplate',
  license_key:
    process.env.NEW_RELIC_LICENSE_KEY ??
    '531f99d7d9c22f443c1d6ec3be4ff6c6FFFFNRAL'
}
