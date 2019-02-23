'use strict'

const { InternalServerErrorEndpoint } = require('@cuties/rest')
const CustomInternalServerErrorEndpoint = require('./../../server/CustomInternalServerErrorEndpoint')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedEndpoint } = require('./common')

new Assertion(
  new Is(
    new InvokedEndpoint(
      new CustomInternalServerErrorEndpoint(),
      new CustomStream(),
      new CustomStream()
    ), InternalServerErrorEndpoint
  )
).call()
