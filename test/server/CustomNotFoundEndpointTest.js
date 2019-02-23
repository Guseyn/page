'use strict'

const { NotFoundEndpoint } = require('@cuties/rest')
const CustomNotFoundEndpoint = require('./../../server/CustomNotFoundEndpoint')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedEndpoint } = require('./common')

new Assertion(
  new Is(
    new InvokedEndpoint(
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/)),
      new CustomStream(),
      new CustomStream()
    ),
    NotFoundEndpoint
  )
).call()
