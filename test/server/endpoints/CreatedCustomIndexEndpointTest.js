'use strict'

const { IndexEndpoint } = require('@cuties/rest')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const CreatedCustomIndexEndpoint = require('./../../../server/endpoints/CreatedCustomIndexEndpoint')
const CustomNotFoundEndpoint = require('./../../../server/endpoints/CustomNotFoundEndpoint')

new Assertion(
  new Is(
    new CreatedCustomIndexEndpoint(
      'index.html',
      new CustomNotFoundEndpoint(new RegExp(/^\/not-found/))
    ), IndexEndpoint
  )
).call()
