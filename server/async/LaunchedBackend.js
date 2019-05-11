'use strict'

const { Backend } = require('@cuties/rest')
const { Value } = require('@cuties/json')
const Api = require('./Api')
const env = process.env.NODE_ENV || 'local'

module.exports = class {
  constructor (config) {
    return new Backend(
      new Value(config, `${env}.protocol`),
      new Value(config, `${env}.port`),
      new Value(config, `${env}.host`),
      new Api(config)
    )
  }
}
