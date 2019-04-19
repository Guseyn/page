'use strict'

const { as } = require('@cuties/cutie')
const { RestApi, ServingFilesEndpoint, CachedServingFilesEndpoint } = require('@cuties/rest')
const { Value } = require('@cuties/json')
const { Created } = require('@cuties/created')
const CustomIndexEndpoint = require('./endpoints/CustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./endpoints/CustomNotFoundEndpoint')
const CustomInternalServerErrorEndpoint = require('./endpoints/CustomInternalServerErrorEndpoint')
const UrlToFSPathMapper = require('./async/UrlToFSPathMapper')
const env = process.env.NODE_ENV || 'local'

const customNotFoundEndpoint = new Created(
  CustomNotFoundEndpoint,
  new RegExp(/^\/not-found/),
  new Value(as('config'), 'notFoundPage')
)

module.exports = new RestApi(
  new Created(
    CustomIndexEndpoint,
    new Value(as('config'), 'index'),
    customNotFoundEndpoint
  ),
  new Created(
    env === 'prod' ? CachedServingFilesEndpoint : ServingFilesEndpoint,
    new RegExp(/^\/(css|html|image|js|txt)/),
    new UrlToFSPathMapper(
      new Value(as('config'), 'static')
    ),
    env === 'prod' ? { 'Cache-Control': 'cache, public, max-age=86400' } : {},
    customNotFoundEndpoint
  ),
  customNotFoundEndpoint,
  new CustomInternalServerErrorEndpoint(new RegExp(/^\/internal-server-error/))
)
