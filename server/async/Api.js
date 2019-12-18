'use strict'

const { RestApi, ServingFilesEndpoint } = require('@cuties/rest')
const { Value } = require('@cuties/json')
const { Created } = require('@cuties/created')
const CustomIndexEndpoint = require('./../endpoints/CustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./../endpoints/CustomNotFoundEndpoint')
const CustomInternalServerErrorEndpoint = require('./../endpoints/CustomInternalServerErrorEndpoint')
const UrlToFSPathMapper = require('./UrlToFSPathMapper')
const env = process.env.NODE_ENV || 'local'
const headers = env === 'prod' ? { 'Cache-Control': 'cache, public, max-age=86400' } : {}

class CreatedCustomNotFoundEndpoint {
  constructor (config) {
    return new Created(
      CustomNotFoundEndpoint,
      new RegExp(/^\/not-found/),
      new Value(config, 'notFoundPage')
    )
  }
}

module.exports = class {
  constructor (config) {
    return new RestApi(
      new Created(
        CustomIndexEndpoint,
        new Value(config, 'index'),
        new CreatedCustomNotFoundEndpoint(config)
      ),
      new Created(
        ServingFilesEndpoint,
        new RegExp(/^\/(css|html|image|js|txt)/),
        new UrlToFSPathMapper(
          new Value(config, 'static')
        ),
        headers,
        new CreatedCustomNotFoundEndpoint(config)
      ),
      new CreatedCustomNotFoundEndpoint(config),
      new CustomInternalServerErrorEndpoint(new RegExp(/^\/internal-server-error/))
    )
  }
}
