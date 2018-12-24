'use strict'

const NotFoundErrorEvent = require('./../../server/NotFoundErrorEvent')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')

new Assertion(
  new Is(
    new NotFoundErrorEvent({}, {}, {}),
    Function
  )
).call()
