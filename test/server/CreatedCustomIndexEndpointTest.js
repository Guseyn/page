'use strict'

const { IndexEndpoint } = require('@cuties/rest')
const CreatedCustomIndexEndpoint = require('./../../server/CreatedCustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./../../server/CustomNotFoundEndpoint')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new CreatedCustomIndexEndpoint(
      'index.html',
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ), IndexEndpoint
  )
).call()
