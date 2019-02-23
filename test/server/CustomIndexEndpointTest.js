'use strict'

const { IndexEndpoint } = require('@cuties/rest')
const CustomIndexEndpoint = require('./../../server/CustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./../../server/CustomNotFoundEndpoint')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { CustomStream, InvokedEndpoint } = require('./common')

new Assertion(
  new Is(
    new InvokedEndpoint(
      new CustomIndexEndpoint(
        './test/server/files/index.html',
        new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
      ),
      new CustomStream(),
      new CustomStream()
    ), IndexEndpoint
  )
).call()
