'use strict'

const { InternalServerErrorEndpoint } = require('@cuties/rest')

class CustomInternalServerErrorEndpoint extends InternalServerErrorEndpoint {
  constructor () {
    super()
  }

  body (request, response, error) {
    return super.body(request, response, error)
  }
}

module.exports = CustomInternalServerErrorEndpoint
